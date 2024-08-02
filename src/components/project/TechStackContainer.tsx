"use client";

import React, { useMemo, useState } from "react";
import TechStackItems from "./TechStackItems";
import type { TechStack, TechStackCategory } from "@/config/projectConfig";
import handleScroll from "@/utils/handleScroll";
import { cn } from "@/lib/utils";

type Props = {
    techStack: TechStack;
};

const TechStackContainer = ({ techStack }: Props) => {
    const groups = Object.keys(techStack) as TechStackCategory[];
    const initialGroupState: Record<TechStackCategory, boolean> = groups.reduce(
        (acc, key) => {
            acc[key] = false;
            return acc;
        },
        {} as Record<TechStackCategory, boolean>,
    );
    const [groupState, setGroupState] =
        useState<Record<TechStackCategory, boolean>>(initialGroupState);

    const firstActiveGroup = useMemo(() => {
        return Object.entries(groupState).find(([key, value]) => value)?.[0] as
            | TechStackCategory
            | undefined;
    }, [groupState]);

    if (groups.every((group) => techStack[group].length === 0)) {
        return null;
    }

    return (
        <div className="grid w-full grid-cols-5 md:grid-cols-2">
            <div className="col-span-4 flex flex-col gap-32 md:col-span-1">
                {groups.map((group, i) => (
                    <TechStackItems
                        key={i}
                        group={group}
                        items={techStack[group]}
                        setGroupState={setGroupState}
                        active={group === firstActiveGroup}
                    />
                ))}
            </div>
            <div className="sticky top-[calc(68px+64px)] col-span-1 flex justify-center self-start">
                <div className="stack-container origin-top-right scale-50 transition-transform sm:scale-[65%] md:scale-75 lg:scale-90 xl:scale-100">
                    {groups.map((group, i) => {
                        if (techStack[group].length === 0) {
                            return null;
                        }

                        return (
                            <a
                                key={i}
                                role="button"
                                className={cn(
                                    "stack-item invert dark:invert-0",
                                    {
                                        "active-stack":
                                            group === firstActiveGroup,
                                    },
                                )}
                                title={group}
                                tabIndex={0}
                                onClick={handleScroll}
                                href={`/#${group}`}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TechStackContainer;
