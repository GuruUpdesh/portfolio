import React from "react";

import { CaretSortIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";

type Props = {
    items: {
        title: string;
        description: string;
    }[];
    visible?: number;
};

const CollapsibleList = ({ items, visible = 5 }: Props) => {
    return (
        <Collapsible className="relative">
            <ul className="condensed-list">
                {items
                    .filter((_, i) => i < visible)
                    .map((item, i) => (
                        <li key={i}>
                            <strong>
                                {i + 1}. {item.title}{" "}
                            </strong>
                            <span className="paragraph">
                                {item.description}
                            </span>
                        </li>
                    ))}
            </ul>
            <CollapsibleContent className="collapsible-content">
                <ul className="condensed-list mt-2">
                    {items
                        .filter((_, i) => i >= visible)
                        .map((item, i) => (
                            <li key={i}>
                                <strong>
                                    {i + 1 + visible}. {item.title}{" "}
                                </strong>
                                <span className="paragraph">
                                    {item.description}
                                </span>
                            </li>
                        ))}
                </ul>
            </CollapsibleContent>
            <CollapsibleTrigger asChild className="flex w-full justify-center">
                <button className="collapsible-trigger relative mt-2 rounded-lg border border-border/5 bg-border/10 p-5 py-2 font-normal">
                    <span className="closed-message z-10">See more</span>
                    <span className="open-message z-10">See less</span>
                    <div className="absolute -left-[1px] z-0 h-full w-[calc(100%+2px)] bg-gradient-to-b from-transparent to-background" />
                </button>
            </CollapsibleTrigger>
        </Collapsible>
    );
};

export default CollapsibleList;
