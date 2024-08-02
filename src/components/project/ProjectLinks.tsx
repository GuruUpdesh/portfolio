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
import { type Project } from "@/config/projectConfig";

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
                            <Button
                                variant="outline"
                                className="group gap-2 rounded-full px-2 lg:px-3"
                                asChild
                            >
                                <Link
                                    href={gitHubLink}
                                    target="_blank"
                                    className="flex items-center"
                                >
                                    <GitHubLogoIcon className="h-5 w-5" />
                                    <span>GitHub</span>
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>See on GitHub</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            )}
            {websiteLink && (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                className="rounded-full px-2.5 lg:px-3"
                                asChild
                            >
                                <Link
                                    href={websiteLink}
                                    target="_blank"
                                    className="flex items-center gap-2"
                                >
                                    <span>Visit</span>
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Visit {websiteLink}</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            )}
        </>
    );
};

export default ProjectLinks;
