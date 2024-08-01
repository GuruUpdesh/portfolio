import React from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { Button } from "../ui/button";
import {
    ArrowLeft,
    ArrowRight,
    ChevronDown,
    ChevronRight,
    X,
} from "lucide-react";
import Image from "next/image";
import {
    Project,
    ProjectKey,
    projectOrder,
    projects,
} from "@/config/projectConfig";
import { ChevronUpIcon } from "@radix-ui/react-icons";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import PrimaryTech from "../PrimaryTech";

type Props = {
    project: Project;
    previousProjectKey: ProjectKey;
    nextProjectKey: ProjectKey;
};

const ProjectHeader = ({
    project,
    previousProjectKey,
    nextProjectKey,
}: Props) => {
    return (
        <div className="mb-6 flex w-full max-w-[1400px] items-center justify-between px-20 py-6">
            <DropdownMenu>
                <DropdownMenuTrigger className="flex items-baseline gap-2 rounded-full bg-transparent px-4 py-1 text-2xl transition-colors hover:bg-accent">
                    <Image
                        src={`/icons/${project.key}.ico`}
                        height={20}
                        width={20}
                        alt="website icon"
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
                                                alt="website icon"
                                            />
                                            {project.name}
                                        </p>
                                    </Link>
                                </DropdownMenuItem>
                            );
                        })}
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center gap-1 text-sm">
                <div className="date-info flex w-[175px] items-center gap-1 overflow-hidden whitespace-nowrap transition-all duration-500 ease-out-expo">
                    <p className="text-muted">Nov {" " + project.year}</p>
                    <div className="h-1 w-1 rounded-full bg-muted" />
                    <div className="h-0.5 w-16 rounded-full bg-gradient-to-r from-muted to-muted-foreground" />
                    <p className="text-muted-foreground">Jan </p>
                </div>
                <p className="text-muted-foreground transition-all duration-500 ease-out-expo">
                    {project.year}
                </p>
            </div>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link href="/">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full"
                                tabIndex={-1}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>Close Projects</TooltipContent>
                </Tooltip>
            </TooltipProvider>
            {/* <div className="group flex flex-1 items-center justify-end">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href={`/projects/${previousProjectKey}`}>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    tabIndex={-1}
                                >
                                    <ChevronUpIcon className="h-4 w-4 opacity-75 transition-opacity group-hover:opacity-100" />
                                </Button>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            {projects[previousProjectKey].name}
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href={`/projects/${nextProjectKey}`}>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    tabIndex={-1}
                                >
                                    <ChevronDown className="h-4 w-4 opacity-75 transition-opacity group-hover:opacity-100" />
                                </Button>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            {projects[nextProjectKey].name}
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div> */}
        </div>
    );
};

export default ProjectHeader;
