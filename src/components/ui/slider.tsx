"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

interface SliderProps
    extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
    thumb?: boolean;
    sliderClassName?: string;
}

const Slider = React.forwardRef<
    React.ElementRef<typeof SliderPrimitive.Root>,
    SliderProps
>(({ className, thumb = true, sliderClassName, ...props }, ref) => (
    <SliderPrimitive.Root
        ref={ref}
        className={cn(
            "relative flex w-full touch-none select-none items-center",
            className,
        )}
        {...props}
    >
        <SliderPrimitive.Track
            className={cn(
                "relative h-1.5 w-full grow cursor-pointer overflow-hidden rounded-full bg-primary/20",
                sliderClassName,
            )}
        >
            <SliderPrimitive.Range className="absolute h-full rounded-full bg-primary" />
        </SliderPrimitive.Track>
        {thumb && (
            <SliderPrimitive.Thumb className="block h-3 w-3 cursor-pointer rounded-full bg-primary shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
        )}
    </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
