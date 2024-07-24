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
                cut="bottom"
                className="opacity-0 transition-opacity lg:opacity-100"
            />
            <DynamicCircle
                containerRef={containerRef}
                intersectionOffset={-160}
                direction="bottom"
                cut="bottom"
                className="opacity-0 transition-opacity md:opacity-100 lg:opacity-0"
            />
        </div>
    );
};

export default ProjectsDivider;
