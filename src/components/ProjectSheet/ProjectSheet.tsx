"use client";

import React, { useMemo, useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { menuSlide } from "./anim";
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

const ProjectSheet = (props: Props) => {
    const [open, setOpen] = useState(false);

    function toggleOpen() {
        setOpen(!open);
    }

    const calculateMargins = useMemo(() => {
        const maxMargin = 50; // Maximum margin at the edges
        const middleIndex = (projectOrder.length - 1) / 2;

        return projectOrder.map((_, index) => {
            // Normalize the index to a range of -1 to 1
            const normalizedIndex = (index - middleIndex) / middleIndex;
            // Use a quadratic function to calculate the margin
            const margin = maxMargin * normalizedIndex ** 2;
            return `${margin}px`;
        });
    }, []);

    return (
        <>
            <Button variant="ghost" size="icon" onClick={toggleOpen}>
                <Menu />
            </Button>
            <AnimatePresence mode="wait">
                {open ? (
                    <>
                        <motion.div
                            variants={menuSlide}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            className="fixed right-0 top-0 z-50 h-[200%] w-[50%] translate-x-[50%] translate-y-[-25%] rounded-[100%] border-l bg-background/75 backdrop-blur-2xl"
                        >
                            <div className="h-[50%] w-full translate-y-[50%] pt-10">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={toggleOpen}
                                    className="absolute -left-5"
                                >
                                    <X />
                                </Button>
                                <div className="flex h-full w-full items-center pl-5">
                                    <div>
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
                                                            calculateMargins[
                                                                index
                                                            ],
                                                    }}
                                                >
                                                    <Link
                                                        href={`/projects/${project.key}`}
                                                        className="flex items-center gap-2 whitespace-nowrap px-4 py-2 text-4xl hover:bg-border/5"
                                                    >
                                                        <Image
                                                            src={`/icons/${project.key}.ico`}
                                                            height={16}
                                                            width={16}
                                                            alt="website icon"
                                                        />
                                                        {project.name}
                                                    </Link>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <button
                            onClick={toggleOpen}
                            className="fixed left-0 top-0 z-40 h-full w-full bg-background/25"
                        ></button>
                    </>
                ) : null}
            </AnimatePresence>
        </>
    );
};

export default ProjectSheet;
