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
                intersectionOffset={-80}
                cut="bottom"
                direction="bottom"
                className="animate-fade-in"
            />
            {/* <DynamicCircle
                containerRef={containerRef}
                intersectionOffset={-80}
                direction="bottom"
                className="transition-opacity animate-fade-in opacity-100 lg:animate-none lg:opacity-0"
            /> */}
        </div>
    );
};

export default ProjectsDivider;
