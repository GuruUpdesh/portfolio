"use client";

import useContainerDimensions from "@/hooks/useContainer";
import React, { useRef } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const SizeTracker = (props: Props) => {
    const ref = useRef<HTMLDivElement>(null);

    useContainerDimensions(ref, (ref) => {
        const container = ref.current;
        if (container) {
            const rect = container.getBoundingClientRect();
            container.style.setProperty("--height", `${rect.height}px`);
            container.style.setProperty("--width", `${rect.width}px`);
        }
    });

    return (
        <div ref={ref} className={props.className} style={{ "--height": "420px" } as React.CSSProperties}>
            {props.children}
        </div>
    );
};

export default SizeTracker;
