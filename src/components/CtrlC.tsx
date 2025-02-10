"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400"] });

export const CtrlC = () => {
    const [isCtrlPressed, setIsCtrlPressed] = useState(false);
    const [isCPressed, setIsCPressed] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Control" || e.key === "Meta") {
                setIsCtrlPressed(true);
            }
            if (e.key === "c" && isCtrlPressed) {
                setIsCPressed(true);
                router.push("/blog");
            }
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.key === "Control" || e.key === "Meta") {
                setIsCtrlPressed(false);
            }
            if (e.key === "c") {
                setIsCPressed(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [isCtrlPressed, router]);

    return (
        <div>
            <h2 className={cn("text-lg transition-all", spaceMono.className)}>
                <span className={cn("opacity-75", isCtrlPressed && "opacity-100 drop-shadow-[0px_0px_4px_rgba(255,255,255,0.5)]")}>
                    {navigator.platform.includes("Mac") ? "cmd" : "ctrl"}
                </span>{" "}
                + <span className={cn("opacity-75", isCPressed && "opacity-100 drop-shadow-[0px_0px_4px_rgba(255,255,255,0.5)]")}>c</span>
            </h2>
        </div>
    );
};