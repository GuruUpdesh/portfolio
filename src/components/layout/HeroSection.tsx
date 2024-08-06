"use client";

import React, { useRef } from "react";
import Circle from "./Circle";
import Image from "next/image";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const HeroSection = (props: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    return (
        <div ref={containerRef} {...props}>
            <div className="relative z-10 rounded-b-[20px] border border-t-0 sm:rounded-b-[40px]">
                <div className="flex h-full w-full items-center justify-center rounded-b-[20px] sm:rounded-b-[40px]">
                    <div className="flex h-full flex-col gap-10 lg:gap-0 lg:flex-row w-full justify-between py-[60px] px-5 sm:px-[60px]">
                        <div className="flex flex-col justify-between">
                            <p className="text-xl xl:text-2xl mb-10 lg:mb-16 transition-[margin]">
                                <span className="opacity-70">Hey I&apos;m</span>{" "}
                                <span className="font-medium">Guru Updesh</span>
                            </p>
                            <div className="flex flex-col gap-3 text-5xl xl:text-6xl transition-all">
                                <h1>Full Stack</h1>
                                <h1>Security</h1>
                                <h1>
                                    <span className="opacity-70">&</span>{" "}
                                    Design.
                                </h1>
                            </div>
                        </div>
                        <div className="flex lg:flex-col justify-between">
                            <p className="text-sm sm:text-lg xl:text-xl max-w-44 transition-all  text-[#270015]">
                                I love to build for the web.
                            </p>
                            <p className="text-sm sm:text-lg xl:text-xl max-w-44 transition-all  text-[#270015]">
                                Welcome to my portfolio!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 -z-10 h-full w-full overflow-clip blur-[100px]">
                    <div className="absolute left-[-50%] top-[-50%] h-[200%] w-[200%] -hue-rotate-30">
                        <Image
                            fill
                            src="/logo.webp"
                            alt=""
                            className="animate-spin-slow blur-lg"
                        />
                    </div>
                </div>
            </div>
            <Circle
                scale={8}
                className="!bottom-[-80px] -z-10 opacity-0 transition-all md:opacity-100 lg:!bottom-0"
            />
        </div>
    );
};

export default HeroSection;
