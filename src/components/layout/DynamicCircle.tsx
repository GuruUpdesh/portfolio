"use client";

import useContainerDimensions from "@/hooks/useContainer";
import { cn } from "@/lib/utils";
import { findRadius } from "@/utils/circleCalculations";
import { CircleCut, getMaskImage } from "@/utils/cricleMask";
import React, { useState } from "react";

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

    useContainerDimensions(
        containerRef,
        (ref) => {
            const container = ref.current;
            if (container) {
                const rect = container.getBoundingClientRect();
                const L = rect.width - intersectionOffset * 2;
                const dTop = rect.height;
                const R = findRadius(L, dTop);
                setCurrentRadius(R);
            }
        },
        [intersectionOffset],
    );

    return (
        <div
            style={{
                width: `${currentRadius * 2}px`,
                maskImage: getMaskImage(cut),
            }}
            className={cn(
                "pointer-events-none absolute left-[50%] -z-40 aspect-square translate-x-[-50%] rounded-[50%] border",
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
