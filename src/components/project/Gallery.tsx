import { cn } from "@/lib/utils";
import { group } from "console";
import Image from "next/image";
import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {
    images?: string[];
};

const Gallery = ({ images }: Props) => {
    if (!images || images.length === 0) {
        return null;
    }

    const groupedImages = [];
    for (let i = 0; i < images.length; i += 2) {
        groupedImages.push(images.slice(i, i + 2));
    }

    return (
        <div
            className="my-10 grid w-full grid-cols-5 gap-5"
            style={{
                height: `${groupedImages.length * 400}px`,
                gridTemplateRows: `${groupedImages.length}`,
            }}
        >
            {groupedImages.reverse().map((group, groupIndex) => (
                <React.Fragment key={groupIndex}>
                    {group.map((src, index) => (
                        <Dialog key={index}>
                            <DialogTrigger asChild>
                                <div
                                    className={cn(
                                        "relative col-span-2 overflow-hidden rounded-xl border border-border/10 bg-border/5",
                                        {
                                            "col-span-3":
                                                (groupIndex % 2 == 0 &&
                                                    index == 0) ||
                                                (groupIndex % 2 == 1 &&
                                                    index == 1),
                                            "col-span-5": group.length === 1,
                                        },
                                    )}
                                >
                                    <Image
                                        src={src}
                                        fill
                                        className="object-cover object-top"
                                        alt=""
                                    />
                                </div>
                            </DialogTrigger>
                            <DialogContent>
                                <Carousel>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                    <CarouselContent>
                                        {images.map((src, idx) => (
                                            <CarouselItem key={idx}>
                                                <div className="relative h-[500px] max-w-4xl">
                                                    <Image
                                                        src={src}
                                                        fill
                                                        className="object-cover object-top"
                                                        alt=""
                                                    />
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                </Carousel>
                            </DialogContent>
                        </Dialog>
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Gallery;
