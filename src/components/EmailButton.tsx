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
import { MdEmail, MdCheck } from "react-icons/md";
import { cn } from "@/lib/utils";

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
        <TooltipProvider>
            <Tooltip open={open} onOpenChange={setOpen}>
                <TooltipTrigger asChild>
                    <Link href={`mailto:${email}`}>
                        <Button
                            variant="outline"
                            size="icon"
                            className="group flex items-center gap-2 rounded-full text-muted"
                            onContextMenu={handleCopy}
                        >
                            <MdCheck
                                className={cn("h-5 w-5 transition-all scale-100", {
                                    "scale-0": !copied,
                                })}
                            />
                            <MdEmail
                                className={cn("absolute h-5 w-5 transition-all scale-100", {
                                    "scale-0": copied,
                                })}
                            />
                        </Button>
                    </Link>
                </TooltipTrigger>
                <TooltipContent>
                    {copied ? "Email copied!" : "Click to email, right-click to copy"}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}