"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projectOrder, projects } from "@/config/projectConfig";
import Link from "next/link";
import Image from "next/image";

const itemVariants = {
    initial: { opacity: 0, x: 50 },
    enter: (i) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.05, duration: 0.5 },
    }),
    exit: (i) => ({
        opacity: 0,
        x: 50,
        transition: { delay: i * 0.05, duration: 0.3 },
    }),
};

const menuSlide = {
    initial: { x: "100%" },

    enter: {
        x: "0",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },

    exit: {
        x: "100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
};

const menuCircle = {
    initial: { borderRadius: 0 },

    enter: {
        borderRadius: "100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },

    exit: {
        borderRadius: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
};

const backgroundVariants = {
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
};

const ProjectSheet = () => {
    const [open, setOpen] = useState(false);
    const [itemMargins, setItemMargins] = useState<string[]>([]);
    const circleRef = useRef<HTMLDivElement>(null);
    const visibleAreaRef = useRef<HTMLDivElement>(null);

    function toggleOpen() {
        setOpen(!open);
    }

    useEffect(() => {
        if (open && circleRef.current && visibleAreaRef.current) {
            const circleRect = circleRef.current.getBoundingClientRect();
            const visibleRect = visibleAreaRef.current.getBoundingClientRect();

            const radius = circleRect.height / 2;
            const visibleTop = visibleRect.top - circleRect.top;
            const visibleBottom = visibleRect.bottom - circleRect.top;

            const angleRange =
                Math.acos((radius - visibleBottom) / radius) -
                Math.acos((radius - visibleTop) / radius);

            const margins = projectOrder.map((_, index) => {
                const angle =
                    Math.acos((radius - visibleTop) / radius) +
                    (angleRange * index) / (projectOrder.length - 1);
                return radius * Math.sin(angle);
            });

            const maxMargin = Math.max(...margins);
            const adjustedMargins = margins.map(
                (margin) => `${maxMargin - margin}px`,
            );

            setItemMargins(adjustedMargins);
        }
    }, [open]);

    return (
        <>
            <Button variant="ghost" size="icon" onClick={toggleOpen}>
                <Menu />
            </Button>
            <AnimatePresence mode="wait">
                {open && (
                    <>
                        <motion.div
                            variants={menuSlide}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            className="max-w-[calc(100vw-20px)] fixed right-0 top-0 z-40 h-full w-[900px]"
                        >
                            <motion.div
                                ref={circleRef}
                                variants={menuCircle}
                                initial="initial"
                                animate="enter"
                                className="absolute top-[-50%] h-[200%] w-[200%] border-l bg-background menu-shadow"
                            >
                                <motion.div
                                    ref={circleRef}
                                    variants={menuCircle}
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                    className="absolute w-[50%] h-[65%] top-[50%] translate-y-[-50%] translate-x-[65%] border-l bg-background"
                                >

                                </motion.div>
                                <div className="absolute top-[25%] flex h-[50%] w-[50%] items-center gap-8">
                                    <div ref={visibleAreaRef} className="pl-5 flex flex-col gap-8">
                                        {projectOrder.map((key, index) => {
                                            const project = projects[key];

                                            return (
                                                <motion.div
                                                    key={key}
                                                    custom={index}
                                                    variants={itemVariants}
                                                    initial="initial"
                                                    animate="enter"
                                                    exit="exit"
                                                    style={{
                                                        marginLeft:
                                                            itemMargins[
                                                                index
                                                            ] || "0px",
                                                    }}
                                                >
                                                    <Link
                                                        href={`/projects/${project.key}`}
                                                        className="flex items-center gap-4 whitespace-nowrap px-4 py-2 text-4xl text-muted-foreground hover:text-primary transition-all"
                                                    >
                                                        <Image
                                                            src={`/icons/${project.key}.ico`}
                                                            height={30}
                                                            width={30}
                                                            alt="website icon"
                                                        />
                                                        {project.name}
                                                    </Link>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleOpen}
                            className="absolute right-0 z-40"
                        >
                            <X />
                        </Button>
                        <motion.div
                            variants={backgroundVariants}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            className="fixed left-0 top-0 z-30 h-full w-full bg-background/75"
                            onClick={toggleOpen}
                        ></motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProjectSheet;
