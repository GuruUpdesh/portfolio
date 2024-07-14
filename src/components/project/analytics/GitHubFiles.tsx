import z from "zod";

type Props = {
    gitHubLink: string;
};

const GitHubFiles = async ({ gitHubLink }: Props) => {
    try {
        const repo = gitHubLink.split("/")[gitHubLink.split("/").length - 1];
        const queryString =
            "q=" + encodeURIComponent(`repo:GuruUpdesh/${repo}`);
        const response = await fetch(
            `https://api.github.com/search/code?${queryString}`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                },
            },
        );
        const data = (await response.json()) as unknown;
        const resultSchema = z.object({
            total_count: z.number(),
        });
        const result = resultSchema.parse(data);
        return result.total_count;
    } catch (e) {
        console.error(e);
        return null;
    }
};

export default GitHubFiles;