"use client";

import React, { useRef } from "react";
import CursorTracker from "../CursorTracker";
import { getImage } from "@/utils/getImage";
import { useInView } from "framer-motion";
import { type Image as ImageType } from "@/config/projectConfig";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
    images?: ImageType[];
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
                className="group/grid relative mt-[-1px] grid w-full grid-cols-2 gap-[1px] overflow-hidden bg-border p-[1px] xl:grid-cols-4 xl:rounded-[40px]"
            >
                <div className="pointer-events-none absolute left-[var(--x)] top-[var(--y)] h-[300px] w-[300px] translate-x-[-50%] translate-y-[-50%] bg-primary opacity-0 blur-3xl transition-opacity duration-300 ease-out-expo md:group-hover/grid:opacity-100" />
                {images.map(({ src, alt }, index) => (
                    <div
                        key={index}
                        className={cn(
                            "gallery-image group relative aspect-[6/7] overflow-hidden bg-background transition-all",
                            {
                                "xl:rounded-l-[40px]": index === 0,
                                "xl:rounded-r-[40px]":
                                    index === images.length - 1,
                            },
                        )}
                    >
                        <Image
                            src={getImage(projectKey, src)}
                            fill
                            className={cn(
                                "object-cover object-left-top transition-all duration-1000 group-hover/grid:opacity-25 group-hover:!opacity-100 group-hover/grid:ease-out-expo",
                                { "opacity-0": !isInView },
                            )}
                            priority
                            alt={alt}
                        />
                    </div>
                ))}
            </div>
        </CursorTracker>
    );
};

export default Gallery;
