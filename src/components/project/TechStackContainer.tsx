"use client";

import { cn } from "@/lib/utils";
import {
    TechStack,
    TechStackCategory,
} from "@/app/project/[id]/config/projectConfig";
import React, { useEffect, useState } from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
    techStack: TechStack;
};

const TechStackContainer = ({ techStack }: Props) => {
    const groups = Object.keys(techStack) as TechStackCategory[];
    const [currentGroup, setCurrentGroup] = useState(0);
    const [groupLock, setGroupLock] = useState(false);

    function handleHover(i: number) {
        if (groupLock) {
            return;
        }

        setCurrentGroup(i);
    }

    useEffect(() => {
        setGroupLock(true);

        const timeout = setTimeout(() => {
            setGroupLock(false);
        }, 250);

        return () => clearTimeout(timeout);
    }, [currentGroup]);

    return (
        <div className="grid grid-cols-2 border border-red-500">
            <div className="flex flex-col gap-10 border border-blue-500">
                {groups.map((group, i) => {
                    if (techStack[group].length === 0) {
                        return null;
                    }

                    return (
                        <div key={i}>
                            <h1 className="sticky top-0 mb-4 inline-block text-2xl capitalize">
                                {group}
                            </h1>
                            <div className="flex flex-col gap-2">
                                {techStack[group].map((tech, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center justify-between rounded-md bg-border/5 p-2"
                                    >
                                        <p>{tech.name}</p>
                                        <p className="opacity-75">
                                            {tech.version}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="sticky top-0 block self-start border border-green-500">
                <div className="stack-container">
                    {groups.map((group, i) => {
                        if (techStack[group].length === 0) {
                            return null;
                        }

                        return (
                            <div
                                key={i}
                                className={cn("stack-item", {
                                    "active-stack": i === currentGroup,
                                })}
                                title={group}
                                tabIndex={1}
                                onMouseEnter={() => handleHover(i)}
                                onMouseMove={() => handleHover(i)}
                                onFocus={() => handleHover(i)}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TechStackContainer;
