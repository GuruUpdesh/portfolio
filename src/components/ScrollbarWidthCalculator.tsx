"use client";

// adapted from https://stackoverflow.com/questions/13382516/getting-scroll-bar-width-using-javascript

import React, { useEffect } from "react";

const ScrollbarWidthCalculator = () => {
    useEffect(() => {
        function getScrollbarWidth(): number {
            // Creating invisible container
            const outer: HTMLDivElement = document.createElement("div");
            outer.style.visibility = "hidden";
            outer.style.overflow = "scroll"; // forcing scrollbar to appear
            (outer.style as any).msOverflowStyle = "scrollbar"; // needed for WinJS apps
            document.body.appendChild(outer);

            // Creating inner element and placing it in the container
            const inner: HTMLDivElement = document.createElement("div");
            outer.appendChild(inner);

            // Calculating difference between container's full width and the child width
            const scrollbarWidth: number =
                outer.offsetWidth - inner.offsetWidth;

            // Removing temporary elements from the DOM
            outer.parentNode?.removeChild(outer);

            return scrollbarWidth;
        }

        // Calculate the scrollbar width
        const width: number = getScrollbarWidth();

        console.log("New scrollbar width calculated", width);

        // Set the CSS custom property on the root element
        document.documentElement.style.setProperty(
            "--scrollbar-width",
            `${width}px`,
        );

        // Optional: Recalculate on window resize
        const handleResize = (): void => {
            const newWidth: number = getScrollbarWidth();
            document.documentElement.style.setProperty(
                "--scrollbar-width",
                `${newWidth}px`,
            );
        };

        window.addEventListener("resize", handleResize);

        // Cleanup function
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Empty dependency array means this effect runs once on mount

    return null;
};

export default ScrollbarWidthCalculator;
