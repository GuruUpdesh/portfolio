"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

const TechStackContainer = () => {
    const groups = ["Frontend", "State", "Backend", "Tools"];
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
        <>
            <div className="pt-20">
                <h1
                    key={groups[currentGroup]}
                    className="mb-4 inline-block text-2xl"
                >
                    {groups[currentGroup]}
                </h1>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between rounded-md bg-border/5 p-2">
                        <p>React</p>
                        <p className="opacity-75">18.0</p>
                    </div>
                    <div className="flex items-center justify-between rounded-md bg-border/5 p-2">
                        <p>NextJS</p>
                        <p className="opacity-75">18.0</p>
                    </div>
                    <div className="flex items-center justify-between rounded-md bg-border/5 p-2">
                        <p>Tailwind CSS</p>
                        <p className="opacity-75">18.0</p>
                    </div>
                    <div className="flex items-center justify-between rounded-md bg-border/5 p-2">
                        <p>Radix UI</p>
                        <p className="opacity-75">18.0</p>
                    </div>
                </div>
            </div>
            <div className="relative flex items-center justify-center">
                <div className="stack-container">
                    {groups.map((_, i) => (
                        <div
                            key={i}
                            className={cn("stack-item", {
                                "active-stack": i === currentGroup,
                            })}
                            onMouseEnter={() => handleHover(i)}
                            onMouseMove={() => handleHover(i)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default TechStackContainer;
