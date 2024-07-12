"use client";

import React, { useRef } from "react";
import DynamicCircle from "./DynamicCircle";

interface ProjectsDividerProps extends React.HTMLAttributes<HTMLDivElement> {}

const ProjectsDivider = (props: ProjectsDividerProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	return (
		<div ref={containerRef} {...props}>
            <DynamicCircle containerRef={containerRef} intersectionOffset={1} direction="top" />
			<DynamicCircle containerRef={containerRef} intersectionOffset={81} direction="bottom" />
		</div>
	);
};

export default ProjectsDivider;
