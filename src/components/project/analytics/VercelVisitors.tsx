import z, { string } from "zod";
import { sub, formatISO } from "date-fns";

type Props = {
    vercelProjectId: string;
};

const VercelVisitors = async ({ vercelProjectId }: Props) => {
    try {
        const from = sub(new Date(), { months: 1 });
        const to = new Date();
        const url =
            "https://vercel.com/api/web-analytics/timeseries" +
            "?teamId=team_YYsEPoi9J7IX07slMIRV0eRc" +
            `&projectId=${vercelProjectId}` +
            `&from=${formatISO(from)}` +
            `&to=${formatISO(to)}`;

        const response: Response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
            },
        });

        if (response.status === 500) {
            console.error(
                "Unknown Vercel server error occurred. This can occur if you have an invalid Time Zone",
            );
            return null;
        }

        const data = (await response.json()) as unknown;

        const dataSchema = z.object({
            data: z.array(
                z.object({
                    key: z.string().date(),
                    total: z.number(),
                    devices: z.number(),
                }),
            ),
            error: z.undefined(),
        });

        const errorSchema = z.object({
            data: z.undefined(),
            error: z.object({
                code: z.string(),
                message: z.string(),
            }),
        });

        const resultSchema = z.union([dataSchema, errorSchema]);
        const result = resultSchema.parse(data);

        if (result.error) {
            console.error(result.error.message);
            return null;
        }

        const totalDevices = result.data.reduce(
            (sum, record) => sum + record.devices,
            0,
        );

        return totalDevices;
    } catch (e) {
        console.error(e);
        return null;
    }
};

export default VercelVisitors;
