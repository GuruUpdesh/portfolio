"use client";

import { cn } from "@/lib/utils";
import { findRadius } from "@/utils/circleCalculations";
import React, { useEffect, useState } from "react";

type Props = {
    containerRef: React.RefObject<HTMLDivElement>;
    intersectionOffset: number;
    direction: "top" | "bottom";
};

const DynamicCircle = ({
    containerRef,
    intersectionOffset,
    direction,
}: Props) => {
    const [currentRadius, setCurrentRadius] = useState(100);
    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const L = rect.width - intersectionOffset * 2;
                const dTop = rect.height;
                const R = findRadius(L, dTop);
                setCurrentRadius(R);
            }
        };

        const observer = new ResizeObserver(updateDimensions);
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        window.addEventListener("resize", updateDimensions);
        updateDimensions();

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);

    return (
        <div
            style={{
                width: `${currentRadius * 2}px`,
            }}
            className={cn(
                "pointer-events-none absolute left-[50%] aspect-square translate-x-[-50%] rounded-[50%] border",
                {
                    "top-0": direction == "bottom",
                    "bottom-0": direction == "top",
                },
            )}
        ></div>
    );
};

export default DynamicCircle;
