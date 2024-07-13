"use client";

import React, { useRef } from "react";
import Circle from "./Circle";
import { Play } from "lucide-react";

interface HeroVideoProps extends React.HTMLAttributes<HTMLDivElement> {}

const HeroVideo = (props: HeroVideoProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    return (
        <div ref={containerRef} {...props}>
            <div className="relative z-10 flex aspect-video items-center justify-center rounded-b-[40px] border border-t-0 bg-[#0A0A0A]">
                <Play className="h-10 w-10" />
            </div>
            <Circle scale={8} className="z-10" cut="right" />
            <Circle scale={8} className="-z-10" cut="left" />
        </div>
    );
};

export default HeroVideo;
