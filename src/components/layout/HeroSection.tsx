import React from "react";
import Image from "next/image";
import SizeTracker from "../SizeTracker";
import dynamic from "next/dynamic";
const StarScene = dynamic(() => import("../Star.jsx"), { ssr: false });

const HeroSection = () => {
    return (
        <div className="relative">
            <div className="absolute bottom-0 right-0 h-[150px] w-[150px] -hue-rotate-[150deg]">
                <StarScene />
            </div>
            <SizeTracker className="relative z-10 overflow-clip rounded-br-[calc(var(--height,0px)-1px)] border border-l-0 border-t-0 bg-background pt-[74px] transition-all md:rounded-bl-[60px] md:border-l md:pt-0">
                <div className="flex h-full w-full flex-col justify-between gap-10 px-5 pb-[120px] pt-[60px] sm:px-[60px] md:flex-row lg:gap-0">
                    <div className="flex flex-col justify-between">
                        <p className="mb-6 text-xl transition-[margin] lg:text-2xl">
                            <span className="opacity-70">Hey I&apos;m</span>{" "}
                            <span className="font-medium">Guru Updesh</span>{" "}
                        </p>
                        <div className="flex flex-col gap-3 text-5xl transition-all lg:text-6xl">
                            <h1>Full Stack,</h1>
                            <h1>Security,</h1>
                            <h1>
                                <span className="opacity-70">&</span> Design.
                            </h1>
                        </div>
                    </div>
                    <p className="max-w-44 text-lg text-[#270015] transition-all xl:text-xl">
                        I love to build for the web.
                    </p>
                </div>
                <div className="absolute top-0 -z-10 h-full w-full overflow-clip blur-[100px]">
                    <div className="absolute top-[25%] h-[200%] w-[200%] -hue-rotate-[150deg] md:right-[-50%] md:top-[-50%] md:w-[100%]">
                        <Image
                            fill
                            src="/logo.webp"
                            alt=""
                            className="animate-spin-slow blur-lg"
                        />
                    </div>
                </div>
            </SizeTracker>
            <div className="absolute top-0 -z-10 hidden h-full w-full overflow-clip blur-[60px] lg:block lg:opacity-70">
                <div className="absolute left-[-50%] top-[-50%] h-[200%] w-full -hue-rotate-[150deg]">
                    <Image
                        fill
                        src="/logo.webp"
                        alt=""
                        className="animate-spin-slow blur-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
