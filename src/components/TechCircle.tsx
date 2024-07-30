"use client";

import React, { useRef, useEffect, useState } from "react";
import { SiNextdotjs, SiExpress, SiJetpackcompose, SiRabbitmq, SiDjango, SiRedis } from "react-icons/si";
import { FaReact, FaPython, FaAws } from "react-icons/fa";
import { PiFileSql } from "react-icons/pi";
import { DiMongodb, DiPostgresql, DiRedis } from "react-icons/di";
import { CgFigma, CgGoogle } from "react-icons/cg";
import { Triangle } from "lucide-react";

const iconComponents = [
    SiNextdotjs,
    FaReact,
    FaPython,
    PiFileSql,
    DiMongodb,
    SiExpress,
    CgFigma,
    SiJetpackcompose,
    FaAws,
    CgGoogle,
    SiRedis,
    SiDjango
] as const;

const TechCircle = ({ numDivs = 12 }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState(0);

    useEffect(() => {
        const updateSize = () => {
            if (containerRef.current) {
                const width = containerRef.current.offsetWidth;
                setSize(width);
            }
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    const divStyle = (index: number): React.CSSProperties => {
        const angle = (index / numDivs) * 2 * Math.PI;
        const radius = size / 2 - 10;
        const x = Math.cos(angle) * radius + radius;
        const y = Math.sin(angle) * radius + radius;

        return {
            position: "absolute",
            left: `${x}px`,
            top: `${y}px`,
            width: "40px",
            height: "40px",
            fontSize: "40px",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
        };
    };

    return (
        <div ref={containerRef} className="relative w-full pb-[100%]">
            <div className="absolute bottom-0 left-0 right-0 top-0">
                {iconComponents.map((Icon, index) => (
                    <div key={index} style={divStyle(index)}>
                        <Icon />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechCircle;
