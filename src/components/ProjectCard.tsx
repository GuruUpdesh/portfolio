import { cn } from "@/lib/utils";
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import TechStack, { Tech } from "./TechStack";
import Link from "next/link";

type Props = {
    title: string;
    stack: Tech[];
    year: string;
    className?: string;
};

const ProjectCard = ({ title, stack, year, className }: Props) => {
    return (
        <div
            className={cn(
                "flex flex-col rounded-sm bg-[#0A0A0A] p-2 text-sm",
                className,
            )}
        >
            <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                    {stack.map((tech) => (
                        <TechStack key={tech} title={tech} />
                    ))}
                </div>
                <p>{year}</p>
            </div>
            <div className="flex-1"></div>
            <Link href="/project/1">
                <Button
                    variant="ghost"
                    className="flex items-center justify-between px-2 w-full"
                >
                    <p className="text-lg">{title}</p>
                    <ArrowRight className="h-4 w-4" />
                </Button>
            </Link>
        </div>
    );
};

export default ProjectCard;
