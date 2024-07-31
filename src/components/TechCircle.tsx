"use client";

import React, { useRef, useState } from "react";
import {
    SiNextdotjs,
    SiJetpackcompose,
    SiDjango,
    SiNodedotjs,
    SiVercel,
} from "react-icons/si";
import { FaReact, FaPython, FaAws } from "react-icons/fa";
import { PiFileSql } from "react-icons/pi";
import { DiMongodb } from "react-icons/di";
import { CgFigma, CgGoogle } from "react-icons/cg";
import useContainerDimensions from "@/hooks/useContainer";

const iconComponents = [
    { Icon: SiNextdotjs, name: "Next.js" },
    { Icon: FaReact, name: "React" },
    { Icon: FaPython, name: "Python" },
    { Icon: SiDjango, name: "Django" },
    { Icon: SiJetpackcompose, name: "Jetpack Compose" },
    { Icon: SiNodedotjs, name: "Node.js" },
    { Icon: CgFigma, name: "Figma" },
    { Icon: PiFileSql, name: "SQL" },
    { Icon: DiMongodb, name: "MongoDB" },
    { Icon: SiVercel, name: "Vercel" },
    { Icon: CgGoogle, name: "Google" },
    { Icon: FaAws, name: "AWS" },
] as const;

const TechCircle = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState(0);

    useContainerDimensions(
        containerRef,
        (ref) => {
            const container = ref.current;
            if (container) {
                const width = container.offsetWidth;
                setSize(width);
            }
        },
        [],
    );

    return (
        <div
            ref={containerRef}
            className="animate-fade-in relative w-full pb-[100%]"
        >
            <div
                className="animate-spin-slower absolute inset-0"
                style={
                    {
                        "--container-size": `${size}px`,
                    } as React.CSSProperties
                }
            >
                {iconComponents.map(({ Icon, name }, index) => (
                    <div
                        key={index}
                        className="tech-icon absolute left-1/2 top-1/2 h-10 w-10 text-4xl text-muted-foreground"
                        style={
                            {
                                "--index": index,
                                "--total": iconComponents.length,
                            } as React.CSSProperties
                        }
                        title={name}
                    >
                        <Icon className="animate-spin-slower-reverse" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechCircle;
