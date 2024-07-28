import { cn } from "@/lib/utils";
import React from "react";
import { ArrowRight } from "lucide-react";
import PrimaryTech from "./PrimaryTech";
import Link from "next/link";
import { Project } from "@/config/projectConfig";
import Image from "next/image";
import { getImage } from "@/utils/getImage";

type Props = {
    project: Project;
    className?: string;
};

const ProjectCard = ({ project, className }: Props) => {
    return (
        <Link
            href={`/projects/${project.key}`}
            className={cn(
                "group z-10 min-h-[200px] overflow-clip rounded-sm bg-[#fafafa] text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring dark:bg-[#0A0A0A]",
                className,
            )}
        >
            <div className="flex h-full flex-col overflow-hidden rounded-md transition-all group-focus-visible:bg-border/10 group-focus-visible:ring-1 group-focus-visible:ring-ring/25 md:group-active:scale-[97.5%]">
                <div className="relative flex-1">
                    <Image
                        src={`/icons/${project.key}.ico`}
                        fill
                        alt="website icon"
                        className="aspect-square opacity-[1%] blur-[100px] transition-opacity duration-1000 ease-out-expo group-hover:opacity-25 group-focus-visible:opacity-25"
                    />
                    <Image
                        src={`/${project.key}.webp`}
                        fill
                        alt="test"
                        className="object-top-left linear-mask z-10 object-scale-down pl-5 pt-5 mix-blend-screen drop-shadow-lg transition-all"
                        quality={100}
                    />
                </div>
                <div className="flex w-full items-center justify-between p-2 transition-all ease-out group-hover:pr-1 group-focus-visible:pr-1">
                    <p className="flex items-center gap-2 truncate text-lg text-muted-foreground transition-colors group-hover:text-primary group-focus-visible:text-primary">
                        <Image
                            src={`/icons/${project.key}.ico`}
                            height={16}
                            width={16}
                            alt="website icon"
                        />
                        {project.name}
                    </p>
                    <ArrowRight className="h-4 w-4 opacity-50 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" />
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
