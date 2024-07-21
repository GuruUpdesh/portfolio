"use client";

import {
    Tech,
    TechStackCategory,
} from "@/app/project/[id]/config/projectConfig";
import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

type Props = {
    group: TechStackCategory;
    items: Tech[];
    groupState: Record<TechStackCategory, boolean>;
    setGroupState: React.Dispatch<
        React.SetStateAction<Record<TechStackCategory, boolean>>
    >;
};

const TechStackItems = ({ group, items, groupState, setGroupState }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        margin: "-64px 0px 0px 0px",
        amount: 0.5,
    });

    useEffect(() => {
        const newGroupState = { ...groupState };
        newGroupState[group] = isInView;
        setGroupState(newGroupState);
    }, [isInView, group]);

    if (items.length === 0) {
        return null;
    }
    return (
        <div ref={ref}>
            <h1 className="mb-4 inline-block text-2xl capitalize">{group}</h1>
            <div className="flex flex-col gap-2">
                {items.map((tech, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-between rounded-md bg-border/5 p-2"
                    >
                        <p>{tech.name}</p>
                        <p className="opacity-75">{tech.version}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStackItems;
