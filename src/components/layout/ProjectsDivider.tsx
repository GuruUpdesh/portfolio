"use client";

import dynamic from "next/dynamic";
import React, { useRef } from "react";
const DynamicCircle = dynamic(() => import("./DynamicCircle"), { ssr: false });

interface ProjectsDividerProps extends React.HTMLAttributes<HTMLDivElement> {}

const ProjectsDivider = (props: ProjectsDividerProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    return (
        <div ref={containerRef} {...props}>
            <DynamicCircle
                containerRef={containerRef}
                intersectionOffset={81}
                direction="bottom"
                className="opacity-0 transition-opacity lg:opacity-100 lg:animate-fade-in"
            />
            <DynamicCircle
                containerRef={containerRef}
                intersectionOffset={-160}
                direction="bottom"
                className="opacity-0 transition-opacity md:opacity-100 md:animate-fade-in lg:opacity-0 lg:animate-none"
            />
        </div>
    );
};

export default ProjectsDivider;
