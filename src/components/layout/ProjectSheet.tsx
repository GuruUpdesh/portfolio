"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { projectOrder, projects } from "@/config/projectConfig";
import Link from "next/link";
import Image from "next/image";

const itemVariants = {
    initial: { opacity: 0, x: 100 },
    enter: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.05, duration: 0.5 },
    }),
    exit: (i: number) => ({
        opacity: 0,
        x: 100,
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

const circleSlide = {
    initial: { x: "100%", y: "-50%" },

    enter: {
        x: "65%",
        y: "-50%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.15 },
    },

    exit: {
        x: "100%",
        y: "-50%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
};

const backgroundVariants = {
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
};

const xButtonVariants = {
    initial: { scale: 0 },
    enter: {
        scale: 1,
        transition: { duration: 0.3, delay: 0.3 },
    },
    exit: {
        scale: 0,
        transition: { duration: 0.2 },
    },
};

const ProjectSheet = () => {
    const [open, setOpen] = useState(false);
    const [itemMargins, setItemMargins] = useState<string[]>([]);
    const circleRef = useRef<HTMLDivElement>(null);
    const visibleAreaRef = useRef<HTMLDivElement>(null);

    const toggleOpen = useCallback(() => {
        setOpen((prevOpen) => !prevOpen);
    }, []);

    const handleSwipe = useCallback(() => {
        setOpen(false);
    }, []);

    const calculateMargins = () => {
        if (circleRef.current && visibleAreaRef.current) {
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
            return margins.map((margin) => `${maxMargin - margin}px`);
        }
        return [];
    };

    useEffect(() => {
        if (open) {
            const handleResize = () => {
                setItemMargins(calculateMargins());
            };

            handleResize();

            const resizeObserver = new ResizeObserver(handleResize);
            if (visibleAreaRef.current) {
                resizeObserver.observe(visibleAreaRef.current);
            }

            window.addEventListener("resize", handleResize);

            return () => {
                resizeObserver.disconnect();
                window.removeEventListener("resize", handleResize);
            };
        }
    }, [open]);

    useEffect(() => {
        if (open) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [open]);

    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === "Escape" && open) {
                toggleOpen();
            }
        };

        document.addEventListener("keydown", handleEscKey);

        return () => {
            document.removeEventListener("keydown", handleEscKey);
        };
    }, [open, toggleOpen]);

    return (
        <>
            <Button
                variant="ghost"
                aria-label="menu"
                size="icon"
                onClick={toggleOpen}
            >
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
                            className="fixed right-0 top-0 z-40 h-full w-[900px] max-w-[calc(100vw-20px)]"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.2}
                            onDragEnd={handleSwipe}
                        >
                            <motion.div
                                ref={circleRef}
                                variants={menuCircle}
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                className="menu-shadow absolute top-[-50%] h-[200%] w-[200%] overflow-hidden border-l bg-background"
                            >
                                <motion.div
                                    ref={circleRef}
                                    variants={circleSlide}
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                    className="menu-shadow absolute top-[50%] z-10 h-[65%] w-[60%] translate-x-[65%] translate-y-[-50%] rounded-[100%] border-l bg-background md:w-[50%]"
                                    onClick={toggleOpen}
                                ></motion.div>
                                <div className="absolute top-[25%] flex h-[50%] w-[50%] items-center">
                                    <div
                                        ref={visibleAreaRef}
                                        className="flex flex-col pl-1 md:pl-5"
                                    >
                                        {projectOrder.map((key, index) => {
                                            const project = projects[key];

                                            return (
                                                <Link
                                                    key={key}
                                                    href={`/projects/${project.key}`}
                                                    className="group relative w-[400%] whitespace-nowrap px-4 py-5 text-lg transition-all md:gap-4 md:py-8 md:text-4xl"
                                                >
                                                    <motion.div
                                                        custom={index}
                                                        variants={itemVariants}
                                                        initial="initial"
                                                        animate="enter"
                                                        exit="exit"
                                                        className="flex items-center gap-2 lg:gap-4"
                                                        style={{
                                                            marginLeft:
                                                                itemMargins[
                                                                    index
                                                                ] || "0px",
                                                        }}
                                                    >
                                                        <Image
                                                            src={`/icons/${project.key}.ico`}
                                                            height={25}
                                                            width={25}
                                                            alt="website icon"
                                                            className="scale-75 transition-all md:scale-100"
                                                        />
                                                        {project.name}
                                                        <div className="transparent absolute -left-24 -z-10 h-full w-[400%] transition-all group-hover:bg-border/10 group-focus-visible:bg-border/10 group-focus-visible:ring-1 group-focus-visible:ring-ring/25">
                                                            <Image
                                                                src={`/icons/${project.key}.ico`}
                                                                height={500}
                                                                width={500}
                                                                alt="website icon"
                                                                className="absolute -z-10 translate-x-[-25%] translate-y-[-45%] opacity-0 blur-[100px] transition-opacity duration-1000 ease-out-expo group-hover:opacity-25 group-focus-visible:opacity-25 md:scale-100"
                                                            />
                                                        </div>
                                                    </motion.div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            variants={xButtonVariants}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            className="absolute right-0 z-40"
                        >
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={toggleOpen}
                                className="bg-background"
                                aria-label="close"
                            >
                                <X />
                            </Button>
                        </motion.div>
                        <motion.div
                            variants={backgroundVariants}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            className="fixed left-0 top-0 z-30 h-full w-full bg-background/75"
                            onClick={() => setOpen(false)}
                        ></motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProjectSheet;
