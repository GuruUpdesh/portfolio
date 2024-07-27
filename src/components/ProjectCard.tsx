import { cn } from "@/lib/utils";
import React from "react";
import { ArrowRight } from "lucide-react";
import PrimaryTech from "./PrimaryTech";
import Link from "next/link";
import { Project } from "@/config/projectConfig";
import Image from "next/image";

type Props = {
    project: Project;
    className?: string;
};

const ProjectCard = ({ project, className }: Props) => {
    return (
        <Link
            href={`/projects/${project.key}`}
            className={cn(
                "group min-h-[200px] rounded-sm bg-[#fafafa] p-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring dark:bg-[#0A0A0A]",
                className,
            )}
        >
            <div className="z-20 flex h-full flex-col overflow-hidden rounded bg-inherit py-1 pl-2 transition-all group-hover:bg-border/10 group-hover:ring-1 group-hover:ring-ring/25 group-focus-visible:bg-border/10 group-focus-visible:ring-1 group-focus-visible:ring-ring/25 group-active:scale-[97.5%]">
                <div className="flex items-center justify-between pr-2">
                    <div className="flex items-center gap-2">
                        <PrimaryTech title={project.primaryTech} />
                    </div>
                    <p className="text-muted-foreground">{project.year}</p>
                </div>
                <div className="relative flex-1">
                    <Image
                        src={`/icons/${project.key}.ico`}
                        fill
                        alt="website icon"
                        className="aspect-square opacity-10 blur-[100px] group-hover:opacity-25 group-focus-visible:opacity-25"
                    />
                </div>
                <div className="flex w-full items-center justify-between pr-2 transition-all group-hover:pr-1 group-focus-visible:pr-1">
                    <p className="flex items-center gap-2 truncate text-lg">
                        <Image
                            src={`/icons/${project.key}.ico`}
                            height={16}
                            width={16}
                            alt="website icon"
                        />
                        {project.name}
                    </p>
                    <ArrowRight className="h-4 w-4 opacity-50 transition-opacity group-hover:opacity-100" />
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
