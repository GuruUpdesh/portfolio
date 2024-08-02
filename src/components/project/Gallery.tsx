"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useCallback, useEffect, useRef } from "react";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog";
import { EmblaCarouselType, EmblaEventType } from "embla-carousel";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { DialogTitle } from "@radix-ui/react-dialog";
import { getImage } from "@/utils/getImage";
import CursorTracker from "../CursorTracker";
import { inView, useInView } from "framer-motion";

const TWEEN_FACTOR_BASE = 0.6;

const numberWithinRange = (number: number, min: number, max: number): number =>
    Math.min(Math.max(number, min), max);

type Props = {
    images?: string[][];
    projectKey: string;
};

const Gallery = ({ images, projectKey }: Props) => {
    const gridRef = useRef(null);
    const isInView = useInView(gridRef, { amount: 0.4, once: true });

    if (!images || images.length === 0) {
        return null;
    }

    return (
        <CursorTracker className="h-full w-full">
            <div
                ref={gridRef}
                className="group/grid relative mt-[-1px] grid w-full grid-cols-2 gap-[1px] overflow-hidden bg-border p-[1px] xl:grid-cols-4"
            >
                <div className="pointer-events-none absolute left-[var(--x)] top-[var(--y)] h-[300px] w-[300px] translate-x-[-50%] translate-y-[-50%] bg-primary opacity-0 blur-3xl ease-out-expo transition-opacity duration-300 md:group-hover/grid:opacity-100" />
                {images.map((group, groupIndex) =>
                    group.map((src, index) => {
                        return (
                            <div
                                key={index}
                                className={cn(
                                    "group/image relative aspect-[6/7] overflow-hidden bg-background transition-all",
                                    {
                                        "lg:":
                                            (groupIndex % 2 == 0 &&
                                                index == 0) ||
                                            (groupIndex % 2 == 1 && index == 1),
                                        "lgx:": group.length === 1,
                                    },
                                )}
                            >
                                <Image
                                    src={getImage(projectKey, src)}
                                    fill
                                    className={cn(
                                        "object-cover object-left-top transition-all duration-500 ease-out-expo group-hover/grid:opacity-50 group-hover/image:!opacity-100 group-hover/grid:blur-[2px] group-hover/image:!blur-0",
                                        { "opacity-0": !isInView },
                                    )}
                                    priority
                                    alt=""
                                />
                            </div>
                        );
                    }),
                )}
            </div>
        </CursorTracker>
    );
};

export default Gallery;
