import React from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../ui/tooltip";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Project } from "@/config/projectConfig";

type Props = {
    project: Project;
};

const ProjectLinks = ({ project: { gitHubLink, websiteLink } }: Props) => {
    return (
        <>
            {gitHubLink && (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href={gitHubLink} target="_blank">
                                <Button
                                    variant="outline"
                                    className="group flex items-center gap-2 rounded-full px-2 lg:px-3"
                                    tabIndex={-1}
                                >
                                    <GitHubLogoIcon className="h-5 w-5" />
                                    <span>GitHub</span>
                                </Button>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>See on GitHub</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            )}
            {websiteLink && (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href={websiteLink} target="_blank">
                                <Button
                                    className="rounded-full px-2.5 lg:px-3"
                                    tabIndex={-1}
                                >
                                    <span>Visit</span>
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>Visit {websiteLink}</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            )}
        </>
    );
};

export default ProjectLinks;
