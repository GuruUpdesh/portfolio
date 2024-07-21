"use client";

import { cn } from "@/lib/utils";
import {
    TechStack,
    TechStackCategory,
} from "@/app/project/[id]/config/projectConfig";
import React, { useMemo, useState } from "react";
import TechStackItems from "./TechStackItems";

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

    return (
        <div className="grid grid-cols-5 md:grid-cols-2">
            <div className="flex flex-col gap-24 col-span-4 md:col-span-1">
                {groups.map((group, i) => (
                    <TechStackItems
                        key={i}
                        group={group}
                        items={techStack[group]}
                        groupState={groupState}
                        setGroupState={setGroupState}
                    />
                ))}
            </div>
            <div className="sticky top-[calc(68px+64px)] flex justify-center self-start col-span-1">
                <div className="stack-container scale-50 md:scale-75 lg:scale-90 xl:scale-100 origin-top-right">
                    {groups.map((group, i) => {
                        if (techStack[group].length === 0) {
                            return null;
                        }

                        return (
                            <div
                                key={i}
                                className={cn("stack-item", {
                                    "active-stack": group === firstActiveGroup,
                                })}
                                title={group}
                                tabIndex={1}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TechStackContainer;
