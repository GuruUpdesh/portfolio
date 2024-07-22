"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { cn } from "./utils";

type WordStyles = {
    word: string;
    shadow: string;
};

type ParagraphProps = {
    paragraph: string;
    className?: string;
};

export default function Paragraph({ paragraph, className }: ParagraphProps) {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,

        offset: ["start 0.9", "start 0.25"],
    });

    const words = paragraph.split(" ");

    return (
        <p ref={container} className={cn("flex flex-wrap text-4xl", className)}>
            {words.map((word, i) => {
                const start = i / words.length;

                const end = start + 1 / words.length;

                return (
                    <Word
                        key={i}
                        progress={scrollYProgress}
                        range={[start, end]}
                        styles={{
                            word: "relative mr-1 ml-1",
                            shadow: "absolute opacity-20",
                        }}
                    >
                        {word}
                    </Word>
                );
            })}
        </p>
    );
}

type Props = {
    children: React.ReactNode;
    progress: MotionValue<number>;
    range: number[];
    styles: WordStyles;
};

const Word = ({ children, progress, range, styles }: Props) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <span className={styles.word}>
            <span className={styles.shadow}>{children}</span>
            <motion.span style={{ opacity: opacity }}>{children}</motion.span>
        </span>
    );
};
