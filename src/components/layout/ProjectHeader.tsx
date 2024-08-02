import React from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronDown, X } from "lucide-react";
import Image from "next/image";
import {
    Project,
    ProjectKey,
    projectOrder,
    projects,
} from "@/config/projectConfig";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {
    project: Project;
};

const ProjectHeader = ({ project }: Props) => {
    return (
        <div className="mb-6 flex w-full max-w-[1400px] items-center justify-between py-6 lg:px-20">
            <DropdownMenu>
                <DropdownMenuTrigger className="flex items-baseline gap-2 rounded-full bg-transparent px-4 py-1 text-2xl transition-colors hover:bg-accent">
                    <Image
                        src={`/icons/${project.key}.ico`}
                        height={20}
                        width={20}
                        alt=""
                        priority
                        className="flex-shrink-0"
                    />
                    {project.name}
                    <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {projectOrder
                        .filter((key) => key !== project.key)
                        .map((key, index) => {
                            const project = projects[key];
                            return (
                                <DropdownMenuItem key={index} asChild>
                                    <Link href={`/projects/${project.key}`}>
                                        <p className="flex items-center gap-2 truncate text-lg">
                                            <Image
                                                src={`/icons/${project.key}.ico`}
                                                height={16}
                                                width={16}
                                                alt=""
                                            />
                                            {project.name}
                                        </p>
                                    </Link>
                                </DropdownMenuItem>
                            );
                        })}
                </DropdownMenuContent>
            </DropdownMenu>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full"
                            asChild
                        >
                            <Link href="/" aria-label="Close Projects">
                                <X className="h-4 w-4" />
                            </Link>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Close Projects</TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
};

export default ProjectHeader;
