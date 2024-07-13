"use client";

import React, { useRef } from "react";
import DynamicCircle from "./DynamicCircle";

interface ProjectDividerProps extends React.HTMLAttributes<HTMLDivElement> {}

const ProjectDivider = (props: ProjectDividerProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    return (
        <div ref={containerRef} {...props}>
            <DynamicCircle
                containerRef={containerRef}
                intersectionOffset={0}
                direction="top"
            />
        </div>
    );
};

export default ProjectDivider;
