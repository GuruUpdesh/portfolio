"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

const TechStackContainer = () => {
	const groups = ["Frontend", "State", "Backend", "Tools"];
	const [currentGroup, setCurrentGroup] = useState(0);
	const [groupLock, setGroupLock] = useState(false);

	function handleHover(i: number) {
		if (groupLock) {
			return;
		}

		setCurrentGroup(i);
	}

	useEffect(() => {
		setGroupLock(true);

		const timeout = setTimeout(() => {
			setGroupLock(false);
		}, 250);

		return () => clearTimeout(timeout);
	}, [currentGroup]);

	return (
		<>
			<div className="pt-20">
				<h1
					key={groups[currentGroup]}
					className="text-2xl inline-block mb-4"
				>
					{groups[currentGroup]}
				</h1>
				<div className="flex flex-col gap-2">
					<div className="bg-border/5 rounded-md p-2 flex items-center justify-between">
						<p>React</p>
						<p className="opacity-75">18.0</p>
					</div>
					<div className="bg-border/5 rounded-md p-2 flex items-center justify-between">
						<p>NextJS</p>
						<p className="opacity-75">18.0</p>
					</div>
					<div className="bg-border/5 rounded-md p-2 flex items-center justify-between">
						<p>Tailwind CSS</p>
						<p className="opacity-75">18.0</p>
					</div>
					<div className="bg-border/5 rounded-md p-2 flex items-center justify-between">
						<p>Radix UI</p>
						<p className="opacity-75">18.0</p>
					</div>
				</div>
			</div>
			<div className=" relative flex items-center justify-center">
				<div className="stack-container">
					{groups.map((_, i) => (
						<div
							key={i}
							className={cn("stack-item", {
								"active-stack": i === currentGroup,
							})}
							onMouseEnter={() => handleHover(i)}
							onMouseMove={() => handleHover(i)}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default TechStackContainer;
