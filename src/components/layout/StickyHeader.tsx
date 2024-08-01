"use client";

import React, { useEffect, useRef } from "react";

type Props = {
    children: React.ReactNode;
};

const StickyHeader = ({ children }: Props) => {
    const ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const el = ref.current;

        if (!el) return;

        const observer = new IntersectionObserver(
            ([e]) =>
                e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
            { threshold: [1] },
        );

        observer.observe(el);

        return () => {
            observer.unobserve(el);
        };
    }, []);

    return (
        <header
            ref={ref}
            className="sticky top-[-1px] z-20 flex justify-center w-full bg-gradient-to-b from-background to-transparent"
        >
            {children}
        </header>
    );
};

export default StickyHeader;
