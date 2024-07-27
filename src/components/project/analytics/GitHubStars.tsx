import { Star } from "lucide-react";
import z from "zod";

type Props = {
    gitHubLink?: string;
};

const GitHubStars = async ({ gitHubLink }: Props) => {
    try {
        if (!gitHubLink) {
            return null;
        }

        if (!process.env.GITHUB_TOKEN) {
            console.warn(
                "Please add valid GITHUB_TOKEN environment variable to use GitHub analytic components",
            );
            return null;
        }

        const repo = gitHubLink.split("/")[gitHubLink.split("/").length - 1];
        const response = await fetch(
            `https://api.github.com/repos/GuruUpdesh/${repo}`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                },
            },
        );
        const data = (await response.json()) as unknown;
        const resultSchema = z.object({
            stargazers_count: z.number(),
        });
        const result = resultSchema.parse(data);
        return (
            <li className="highlight flex items-baseline gap-2 p-4">
                <Star className="h-4 w-4 text-muted-foreground" />
                <p className="text-lg font-normal">
                    {result.stargazers_count}{" "}
                    <span className="font-light text-muted-foreground">
                        Stars
                    </span>
                </p>
            </li>
        );
    } catch (e) {
        console.error(e);
        return null;
    }
};

export default GitHubStars;
