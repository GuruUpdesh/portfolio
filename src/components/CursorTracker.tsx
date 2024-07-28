"use client";

import React, { useEffect, useRef } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const CursorTracker = ({ children, className, ...props }: Props) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                ref.current.style.setProperty("--x", `${x}px`);
                ref.current.style.setProperty("--y", `${y}px`);
            }
        };

        const element = ref.current;
        if (element) {
            element.addEventListener("mousemove", handleMouseMove);
        }

        return () => {
            if (element) {
                element.removeEventListener("mousemove", handleMouseMove);
            }
        };
    }, []);

    return (
        <div ref={ref} className={className} {...props}>
            {children}
        </div>
    );
};

export default CursorTracker;
