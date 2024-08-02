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

const TWEEN_FACTOR_BASE = 0.6;

const numberWithinRange = (number: number, min: number, max: number): number =>
    Math.min(Math.max(number, min), max);

type Props = {
    images?: string[][];
    projectKey: string;
};

const Gallery = ({ images, projectKey }: Props) => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);
    const [initial, setInitial] = React.useState(0);
    const tweenFactor = useRef(0);

    const setTweenFactor = useCallback((api: EmblaCarouselType) => {
        tweenFactor.current = TWEEN_FACTOR_BASE * api.scrollSnapList().length;
    }, []);

    const tweenOpacity = useCallback(
        (api: EmblaCarouselType, eventName?: EmblaEventType) => {
            const engine = api.internalEngine();
            const scrollProgress = api.scrollProgress();
            const slidesInView = api.slidesInView();
            const isScrollEvent = eventName === "scroll";

            api.scrollSnapList().forEach((scrollSnap, snapIndex) => {
                let diffToTarget = scrollSnap - scrollProgress;
                const slidesInSnap = engine.slideRegistry[snapIndex];

                slidesInSnap.forEach((slideIndex) => {
                    if (isScrollEvent && !slidesInView.includes(slideIndex))
                        return;

                    if (engine.options.loop) {
                        engine.slideLooper.loopPoints.forEach((loopItem) => {
                            const target = loopItem.target();

                            if (slideIndex === loopItem.index && target !== 0) {
                                const sign = Math.sign(target);

                                if (sign === -1) {
                                    diffToTarget =
                                        scrollSnap - (1 + scrollProgress);
                                }
                                if (sign === 1) {
                                    diffToTarget =
                                        scrollSnap + (1 - scrollProgress);
                                }
                            }
                        });
                    }

                    const tweenValue =
                        1 - Math.abs(diffToTarget * tweenFactor.current);
                    const opacity = numberWithinRange(
                        tweenValue,
                        0,
                        1,
                    ).toString();
                    api.slideNodes()[slideIndex].style.opacity = opacity;
                });
            });
        },
        [],
    );

    useEffect(() => {
        if (!api) return;

        // opacity control
        setTweenFactor(api);
        tweenOpacity(api);
        api.on("reInit", setTweenFactor)
            .on("reInit", tweenOpacity)
            .on("scroll", tweenOpacity)
            .on("slideFocus", tweenOpacity);

        // total slide count
        setCount(api.scrollSnapList().length);

        // current slide
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api, setTweenFactor, tweenOpacity]);

    useEffect(() => {
        if (!api) return;
        api.scrollTo(initial);
    }, [api, initial]);

    if (!images || images.length === 0) {
        return null;
    }

    return (
        <CursorTracker className="group/grid relative mt-[-1px] grid w-full grid-cols-2 gap-[1px] overflow-hidden rounded-[40px] bg-border p-[1px] xl:grid-cols-4">
            <div className="pointer-events-none absolute left-[var(--x)] top-[var(--y)] h-[300px] w-[300px] translate-x-[-50%] translate-y-[-50%] bg-primary opacity-0 blur-3xl transition-opacity duration-300 md:group-hover/grid:opacity-100" />
            {images.map((group, groupIndex) => (
                <React.Fragment key={groupIndex}>
                    {group.map((src, index) => (
                        <Dialog key={index} modal>
                            <DialogTrigger asChild>
                                <button
                                    className={cn(
                                        "group/image relative aspect-[6/7] cursor-pointer overflow-hidden transition-all xl:last:rounded-r-[40px] xl:first-of-type:rounded-l-[40px]",
                                        {
                                            "lg:":
                                                (groupIndex % 2 == 0 &&
                                                    index == 0) ||
                                                (groupIndex % 2 == 1 &&
                                                    index == 1),
                                            "lgx:": group.length === 1,
                                        },
                                    )}
                                    onClick={() => {
                                        setInitial(images.flat().indexOf(src));
                                    }}
                                >
                                    <Image
                                        src={getImage(projectKey, src)}
                                        fill
                                        className="object-cover object-left-top transition-all duration-500 ease-out-expo group-hover/grid:blur-sm group-hover/image:blur-0"
                                        priority
                                        alt=""
                                    />
                                </button>
                            </DialogTrigger>
                            <DialogContent className="max-h-[calc(100vh-24px)] max-w-[100vw] overflow-visible border-transparent bg-transparent p-5 md:max-w-[calc(100vw-125px)] lg:p-6">
                                <DialogHeader className="text-left">
                                    <DialogTitle className="text-2xl">
                                        Project Gallery
                                    </DialogTitle>
                                </DialogHeader>
                                <Carousel setApi={setApi} opts={{ loop: true }}>
                                    <CarouselPrevious
                                        variant="ghost"
                                        className="h-full rounded-xl"
                                    />
                                    <CarouselNext
                                        variant="ghost"
                                        className="h-full rounded-xl"
                                    />
                                    <CarouselContent>
                                        {images.flat().map((src, idx) => (
                                            <CarouselItem
                                                key={idx}
                                                className="xl:basis-1/2"
                                            >
                                                <div className="relative aspect-[6/7] max-h-[700px]">
                                                    <Image
                                                        src={getImage(
                                                            projectKey,
                                                            src,
                                                        )}
                                                        fill
                                                        className="rounded-xl object-cover object-top"
                                                        alt=""
                                                    />
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                </Carousel>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-1">
                                        {images.flat().map((src, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => {
                                                    setInitial(idx);
                                                }}
                                                title={`Slide ${idx + 1}`}
                                            >
                                                <div
                                                    className={cn(
                                                        "h-4 w-4 rounded-full border bg-transparent",
                                                        {
                                                            "bg-primary":
                                                                idx + 1 ===
                                                                current,
                                                        },
                                                    )}
                                                />
                                                <span className="sr-only">
                                                    Slide {idx + 1}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                    <p>
                                        Slide {current}/{count}
                                    </p>
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </React.Fragment>
            ))}
        </CursorTracker>
    );
};

export default Gallery;
