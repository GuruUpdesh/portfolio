"use client";

import React, { useEffect, useRef } from "react";
import { Tech, TechStackCategory } from "@/config/projectConfig";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
    group: TechStackCategory;
    items: Tech[];
    setGroupState: React.Dispatch<
        React.SetStateAction<Record<TechStackCategory, boolean>>
    >;
    active: Boolean;
};

const TechStackItems = ({ group, items, setGroupState, active }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        margin: "-64px 0px 0px 0px",
        amount: 0.7,
    });

    useEffect(() => {
        setGroupState((prev) => {
            const newGroupState = { ...prev };
            newGroupState[group] = isInView;
            return newGroupState;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView, group]);

    if (items.length === 0) {
        return null;
    }
    return (
        <div
            ref={ref}
            id={group}
            className={cn(
                "pointer-events-none scroll-m-[120px] opacity-50 transition-opacity",
                {
                    "pointer-events-auto opacity-100": active,
                },
            )}
        >
            <h1 className="mb-4 inline-block text-2xl capitalize">{group}</h1>
            <div className="flex flex-col gap-2">
                {items.map((tech, i) => (
                    <div
                        key={i}
                        className="highlight flex items-center justify-between !rounded-md p-2"
                    >
                        <p>{tech.name}</p>
                        <p
                            className={cn("opacity-75 transition-opacity", {
                                "hidden opacity-0": !active,
                            })}
                        >
                            {tech.version}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStackItems;
