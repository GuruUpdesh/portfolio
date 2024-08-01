"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const ExpandableAboutDescription = () => {
    const [open, setOpen] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    }, [open]);

    function toggleOpen() {
        setOpen(!open);
    }

    return (
        <>
            <div
                className={cn(
                    "absolute bottom-0 left-0 z-10 flex w-full flex-col gap-2 bg-gradient-to-t from-background to-transparent p-10",
                )}
            >
                <AnimatePresence mode="wait">
                    {!open && (
                        <motion.p
                            className="text-sm text-muted-foreground xl:text-base xl:leading-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            I’m a new computer science graduate from Oregon
                            State University with a focus in cybersecurity and
                            full stack web development.
                        </motion.p>
                    )}
                </AnimatePresence>
                <Button
                    variant="outline"
                    className="mt-4 rounded-full bg-transparent backdrop-blur-2xl"
                    onClick={toggleOpen}
                >
                    {open ? "Close" : "Read More"}
                </Button>
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "100%" }}
                        exit={{ height: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.76, 0, 0.24, 1],
                        }}
                        className="absolute bottom-0 h-full rounded-tr-[20px] bg-background/25 p-5 backdrop-blur-2xl"
                    >
                        <div className="mb-4 flex">
                            <div className="flex-1" />
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full bg-transparent backdrop-blur-2xl"
                                onClick={toggleOpen}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm text-muted-foreground xl:text-base xl:leading-8">
                                I love to problem solve, and create visually
                                elegant and user friendly experiences.
                            </p>
                            <ul className="flex flex-col gap-2">
                                <li className="rounded-lg bg-background/50 p-5">
                                    <p>Full Stack</p>
                                    <p className="text-sm text-muted-foreground xl:text-base xl:leading-8">
                                        With a passion for web applications I
                                        enjoy implementing full and robust
                                        features that utilize the full range of
                                        the tech stack.
                                    </p>
                                </li>
                                <li className="rounded-lg bg-background/50 p-5">
                                    <p>Cybersecurity</p>
                                    <p className="text-sm text-muted-foreground xl:text-base xl:leading-8">
                                        Throughout college I focused in
                                        security, learning about cryptography,
                                        hacking, and best practices. This
                                        practice experience has translated into
                                        a technical passion and knowledge in
                                        building secure applications.
                                    </p>
                                </li>
                                <li className="rounded-lg bg-background/50 p-5">
                                    <p>Design</p>
                                    <p className="text-sm text-muted-foreground xl:text-base xl:leading-8">
                                        With experience in graph design and a
                                        love for ascetics I enjoy crafting
                                        visually appealing and usable
                                        interfaces.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ExpandableAboutDescription;
