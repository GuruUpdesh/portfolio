import { cn } from "@/lib/utils";
import React from "react";
import { ArrowRight } from "lucide-react";

type Props = {
	title: string;
	year: string;
	className?: string;
};

const ProjectCard = ({ title, year, className }: Props) => {
	return (
		<div
			className={cn(
				"bg-[#0A0A0A] rounded-sm p-2 flex flex-col text-sm",
				className
			)}
		>
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2"></div>
				<p>{year}</p>
			</div>
			<div className="flex-1"></div>
			<div className="flex items-center justify-between">
				<p className="text-lg">{title}</p>
				<button>
					<ArrowRight className="w-4 h-4" />
				</button>
			</div>
		</div>
	);
};

export default ProjectCard;
