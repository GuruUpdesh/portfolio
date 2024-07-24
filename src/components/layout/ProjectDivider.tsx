"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
const DynamicCircle = dynamic(() => import("./DynamicCircle"), { ssr: false });

interface ProjectDividerProps extends React.HTMLAttributes<HTMLDivElement> {}

const ProjectDivider = (props: ProjectDividerProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    return (
        <div ref={containerRef} {...props}>
            <DynamicCircle
                containerRef={containerRef}
                intersectionOffset={0}
                direction="top"
                cut="top"
            />
        </div>
    );
};

export default ProjectDivider;
