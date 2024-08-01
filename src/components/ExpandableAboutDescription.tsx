"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const ExpandableAboutDescription = () => {
    const [open, setOpen] = useState(false);

    function toggleOpen() {
        setOpen(!open);
    }

    return (
        <>
            <div
                className={cn(
                    "absolute bottom-0 left-0 flex w-full flex-col gap-2 bg-gradient-to-t from-background to-transparent p-10",
                )}
            >
                <div className="relative max-h-[50px] overflow-hidden">
                    <p className="line-clamp-2 text-sm text-muted-foreground xl:text-base xl:leading-8">
                        I&apos;m a new computer science graduate from Oregon
                        State University with a focus in cybersecurity and full
                        stack web development.
                    </p>
                </div>
                <Button
                    variant="outline"
                    className="z-10 mt-2 rounded-full bg-transparent backdrop-blur-2xl md:mt-4"
                    onClick={toggleOpen}
                >
                    {open ? "Close" : "Read More"}
                </Button>
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "100%", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.76, 0, 0.24, 1],
                        }}
                        className="absolute bottom-0 h-full w-full overflow-hidden rounded-tr-[20px] bg-background/25 p-5 backdrop-blur-2xl"
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
                        <div className="scroll-mask h-[calc(100%-7rem)] overflow-y-auto">
                            <div className="mb-4 flex flex-col gap-2">
                                <p className="text-sm text-muted-foreground xl:text-base xl:leading-8">
                                    I&apos;m a new computer science graduate
                                    from Oregon State University with a focus in
                                    cybersecurity and full stack web
                                    development.
                                </p>
                                <p className="text-sm text-muted-foreground xl:text-base xl:leading-8">
                                    I love to problem solve, and create visually
                                    elegant and user friendly experiences.
                                </p>
                                <ul className="flex flex-col gap-2">
                                    <li className="rounded-lg bg-background/50 p-5">
                                        <p>Full Stack</p>
                                        <p className="text-sm text-muted-foreground xl:text-base xl:leading-8">
                                            With a passion for web applications
                                            I enjoy implementing full and robust
                                            features that utilize the full range
                                            of the tech stack.
                                        </p>
                                    </li>
                                    <li className="rounded-lg bg-background/50 p-5">
                                        <p>Cybersecurity</p>
                                        <p className="text-sm text-muted-foreground xl:text-base xl:leading-8">
                                            Throughout college I focused in
                                            security, learning about
                                            cryptography, hacking, and best
                                            practices. This practice experience
                                            has translated into a technical
                                            passion and knowledge in building
                                            secure applications.
                                        </p>
                                    </li>
                                    <li className="rounded-lg bg-background/50 p-5">
                                        <p>Design</p>
                                        <p className="text-sm text-muted-foreground xl:text-base xl:leading-8">
                                            With experience in graph design and
                                            a love for ascetics I enjoy crafting
                                            visually appealing and usable
                                            interfaces.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ExpandableAboutDescription;
