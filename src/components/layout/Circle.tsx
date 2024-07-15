import { cn } from "@/lib/utils";
import { CircleCut, getMaskImage } from "@/utils/cricleMask";
import React from "react";

type Props = {
    children?: React.ReactNode;
    scale?: Number;
    bottom?: Number;
    cut?: CircleCut;
    className?: String;
};

const Circle = ({ children, scale = 1, bottom = 0, cut, className }: Props) => {
    return (
        <div
            style={{
                width: `calc(100% + 80px * ${scale})`,
                bottom: `${bottom}px`,
                maskImage: getMaskImage(cut),
            }}
            className={cn(
                "pointer-events-none absolute left-[50%] aspect-square translate-x-[-50%] rounded-[50%] border",
                className,
            )}
        >
            {children}
        </div>
    );
};

export default Circle;
