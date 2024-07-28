"use client";

import { cn } from "@/lib/utils";
import { findRadius } from "@/utils/circleCalculations";
import { CircleCut, getMaskImage } from "@/utils/cricleMask";
import React, { useEffect, useState } from "react";

type Props = {
    containerRef: React.RefObject<HTMLDivElement>;
    intersectionOffset: number;
    direction: "top" | "bottom";
    cut?: CircleCut;
    className?: String;
};

const DynamicCircle = ({
    containerRef,
    intersectionOffset,
    direction,
    cut,
    className,
}: Props) => {
    const [currentRadius, setCurrentRadius] = useState(100);
    useEffect(() => {
        const container = containerRef.current;
        const updateDimensions = () => {
            if (container) {
                const rect = container.getBoundingClientRect();
                const L = rect.width - intersectionOffset * 2;
                const dTop = rect.height;
                const R = findRadius(L, dTop);
                setCurrentRadius(R);
            }
        };

        const observer = new ResizeObserver(updateDimensions);
        if (container) {
            observer.observe(container);
        }

        window.addEventListener("resize", updateDimensions);
        updateDimensions();

        return () => {
            if (container) {
                observer.unobserve(container);
            }
            window.removeEventListener("resize", updateDimensions);
        };
    }, [containerRef, intersectionOffset]);

    return (
        <div
            style={{
                width: `${currentRadius * 2}px`,
                maskImage: getMaskImage(cut),
            }}
            className={cn(
                "pointer-events-none absolute left-[50%] aspect-square translate-x-[-50%] animate-fade-in rounded-[50%] border",
                {
                    "top-0": direction == "bottom",
                    "bottom-0": direction == "top",
                },
                className,
            )}
        ></div>
    );
};

export default DynamicCircle;
