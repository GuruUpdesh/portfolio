"use client";

import React, { useRef } from "react";
import Circle from "./Circle";

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const HeroSection = (props: HeroSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={containerRef} {...props}>
      <div className="relative z-10 aspect-video rounded-b-[40px] border border-t-0 bg-[#0A0A0A]"></div>
      <Circle scale={8} className="z-10" cut="right" />
      <Circle scale={8} className="-z-10" cut="left" />
    </div>
  );
};

export default HeroSection;
