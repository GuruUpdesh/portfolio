import { cn } from "@/lib/utils";
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import TechStack, { Tech } from "./TechStack";
import Link from "next/link";
import { getProjectFromId } from "@/projectConfig";

type Props = {
    projectId: number;
    className?: string;
};

const ProjectCard = ({ projectId, className }: Props) => {
    const project = getProjectFromId(projectId);
    return (
        <div
            className={cn(
                "flex flex-col rounded-sm bg-[#0A0A0A] p-2 text-sm",
                className,
            )}
        >
            <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                    <TechStack title={"Next.js"} />
                </div>
                <p>{project.year}</p>
            </div>
            <div className="flex-1"></div>
            <Link href={`/project/${project.id}`}>
                <Button
                    variant="ghost"
                    className="flex w-full items-center justify-between px-2"
                >
                    <p className="text-lg">{project.name}</p>
                    <ArrowRight className="h-4 w-4" />
                </Button>
            </Link>
        </div>
    );
};

export default ProjectCard;
