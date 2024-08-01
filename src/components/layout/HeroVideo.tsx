"use client";

import React, { useRef } from "react";
import Circle from "./Circle";
import { Play } from "lucide-react";
import Image from "next/image";

interface HeroVideoProps extends React.HTMLAttributes<HTMLDivElement> {}

const HeroVideo = (props: HeroVideoProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    return (
        <div ref={containerRef} {...props}>
            <div className="relative z-10 aspect-video rounded-b-[20px] border border-t-0 sm:rounded-b-[40px]">
                <div className="absolute flex h-full w-full items-center justify-center rounded-b-[20px] bg-[#fafafa] dark:bg-[#0A0A0A] sm:rounded-b-[40px]">
                    <Play className="h-10 w-10" />
                </div>
                <div className="absolute -z-10 h-full w-full overflow-clip blur-[100px]">
                    <div className="absolute left-[-50%] top-[-50%] h-[200%] w-[200%]">
                        <Image
                            fill
                            src="/logo.webp"
                            alt="abstract colorful blob"
                            className="animate-spin-slow blur-lg"
                        />
                    </div>
                </div>
            </div>
            <Circle
                scale={8}
                className="!bottom-[-80px] z-10 opacity-0 transition-all md:opacity-100 lg:!bottom-0"
                cut="right"
            />
            <Circle
                scale={8}
                className="!bottom-[-80px] -z-10 opacity-0 transition-all md:opacity-100 lg:!bottom-0"
                cut="left"
            />
        </div>
    );
};

export default HeroVideo;
