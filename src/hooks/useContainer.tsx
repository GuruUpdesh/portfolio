import { useEffect, useState, RefObject } from "react";

function useContainerDimensions<T extends HTMLElement>(
    containerRef: RefObject<T>,
    callback: (ref: RefObject<T>) => void,
    dependencies: any[] = [],
) {
    useEffect(() => {
        const container = containerRef.current;

        const updateDimensions = () => {
            callback(containerRef);
        };

        const observer = new ResizeObserver(updateDimensions);

        if (container) {
            observer.observe(container);
        }

        window.addEventListener("resize", updateDimensions);
        updateDimensions();

        return () => {
            if (container) {
                observer.unobserve(container);
            }
            window.removeEventListener("resize", updateDimensions);
        };
    }, [containerRef, callback, ...dependencies]);
}

export default useContainerDimensions;
