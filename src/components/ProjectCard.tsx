import React from "react";
import PrimaryTech from "./PrimaryTech";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { type Project } from "@/config/projectConfig";
import { cn } from "@/lib/utils";

type Props = {
    project: Project;
    className?: string;
};

const ProjectCard = ({ project, className }: Props) => {
    return (
        <Link
            href={`/projects/${project.key}`}
            className={cn(
                "group z-10 min-h-[200px] overflow-clip rounded-sm text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-background",
                className,
            )}
        >
            <div className="flex h-full flex-col justify-end overflow-hidden rounded-md group-focus-visible:bg-border/10 group-focus-visible:ring-1 group-focus-visible:ring-ring/25 md:group-active:bg-border/10">
                <div className="relative flex-1">
                    <Image
                        src={`/icons/${project.key}.ico`}
                        fill
                        alt=""
                        className="-z-10 aspect-square translate-y-[-50%] opacity-[1%] blur-[100px] transition-opacity duration-1000 ease-out-expo group-hover:opacity-25 group-focus-visible:opacity-25"
                        quality={10}
                    />
                    <div className="linear-mask-2 h-full">
                        <Image
                            src={`/${project.key}.webp`}
                            fill
                            alt=""
                            className="object-top-left linear-mask z-10 object-contain p-5"
                            priority
                        />
                    </div>
                </div>
                <div className="h-5 overflow-hidden pl-2 text-muted-foreground">
                    <div className="-translate-y-6 transition-transform duration-500 ease-out-expo group-hover:translate-y-0 group-focus-visible:translate-y-0">
                        <PrimaryTech title={project.primaryTech} />
                        <p>{project.year}</p>
                    </div>
                </div>
                <div className="flex w-full items-center justify-between p-2 pt-0 transition-[padding] ease-out group-hover:pr-1 group-focus-visible:pr-1">
                    <p className="flex items-center gap-2 truncate text-lg">
                        <Image
                            src={`/icons/${project.key}.ico`}
                            height={16}
                            width={16}
                            alt=""
                        />
                        {project.name}
                    </p>
                    <ArrowRight className="h-4 w-4 opacity-50 group-hover:opacity-100 group-focus-visible:opacity-100" />
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
