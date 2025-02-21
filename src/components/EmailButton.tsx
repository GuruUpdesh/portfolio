"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { MdCheck } from "react-icons/md";
import { cn } from "@/lib/utils";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

export function EmailButton() {
    const [copied, setCopied] = useState(false);
    const [open, setOpen] = useState(false);
    const email = "guruupdeshsingh@gmail.com";

    const handleCopy = (e: React.MouseEvent) => {
        e.preventDefault();
        window.navigator.clipboard.writeText(email);
        setCopied(true);
        setOpen(true);
        setTimeout(() => {
            setCopied(false);
            setOpen(false);
        }, 2000);
    };

    return (
        <TooltipProvider disableHoverableContent>
            <Tooltip open={open} onOpenChange={setOpen}>
                <TooltipTrigger asChild>
                    <Button
                        variant="ghost"
                        className="flex items-center justify-start gap-2 rounded-full px-2 lg:px-3"
                        asChild
                        onContextMenu={handleCopy}
                    >
                        <Link href={`mailto:${email}`} aria-label="Email">
                            <div className="relative flex items-center">
                                <MdCheck
                                    className={cn(
                                        "h-5 w-5 scale-100 transition-all",
                                        {
                                            "scale-0": !copied,
                                        },
                                    )}
                                />
                                <EnvelopeClosedIcon
                                    className={cn(
                                        "absolute h-5 w-5 scale-100 transition-all",
                                        {
                                            "scale-0": copied,
                                        },
                                    )}
                                />
                            </div>
                            <span className="hidden lg:block">Email</span>
                        </Link>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    {copied
                        ? "Email copied!"
                        : "Click to email, right-click to copy"}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
