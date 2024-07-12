import { cn } from "@/lib/utils";
import React from "react";

type Props = {
	children?: React.ReactNode;
	scale?: Number;
	bottom?: Number;
	cut?: "bottom" | "top";
	className?: String;
};

const Circle = ({ children, scale = 1, bottom = 0, cut, className }: Props) => {
	return (
		<div
			style={{
				width: `calc(100% + 80px * ${scale})`,
				bottom: `${bottom}px`,
				maskImage: cut
					? `linear-gradient(to ${
							cut == "bottom" ? "bottom" : "top"
					  }, black 49%, transparent 50%)`
					: "",
			}}
			className={cn(
				"border aspect-square rounded-[50%] absolute left-[50%] translate-x-[-50%] pointer-events-none",
				className
			)}
		>
			{children}
		</div>
	);
};

export default Circle;
