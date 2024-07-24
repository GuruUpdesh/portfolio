import { cn } from "@/lib/utils";
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
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
        <div
            className={cn(
                "flex flex-col rounded-sm bg-[#fafafa] p-2 text-sm dark:bg-[#0A0A0A]",
                className,
            )}
        >
            <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                    <PrimaryTech title={project.primaryTech} />
                </div>
                <p>{project.year}</p>
            </div>
            <div className="flex-1"></div>
            <Link href={`/projects/${project.key}`}>
                <Button
                    variant="ghost"
                    className="flex w-full items-center justify-between px-2"
                >
                    <p className="flex items-center gap-2 text-lg">
                        <Image
                            src={`/icons/${project.key}.ico`}
                            height={16}
                            width={16}
                            alt="website icon"
                        />
                        {project.name}
                    </p>
                    <ArrowRight className="h-4 w-4" />
                </Button>
            </Link>
        </div>
    );
};

export default ProjectCard;
