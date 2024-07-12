import { cn } from "@/lib/utils";
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import TechStack, { Tech } from "./TechStack";

type Props = {
	title: string;
	stack: Tech[];
	year: string;
	className?: string;
};

const ProjectCard = ({ title, stack, year, className }: Props) => {
	return (
		<div
			className={cn(
				"bg-[#0A0A0A] rounded-sm p-2 flex flex-col text-sm",
				className
			)}
		>
			<div className="flex items-center justify-between px-2">
				<div className="flex items-center gap-2">
					{stack.map((tech) => (
						<TechStack key={tech} title={tech} />
					))}
				</div>
				<p>{year}</p>
			</div>
			<div className="flex-1"></div>
			<Button
				variant="ghost"
				className="flex items-center justify-between px-2"
			>
				<p className="text-lg">{title}</p>
				<ArrowRight className="w-4 h-4" />
			</Button>
		</div>
	);
};

export default ProjectCard;
