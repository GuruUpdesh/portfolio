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
                            variant="ghost"
                            className="group flex items-center gap-2 rounded-full px-2 lg:px-3"
                            onContextMenu={handleCopy}
                            tabIndex={-1}
                        >
                            <div className="relative flex items-center">
                                <MdCheck
                                    className={cn(
                                        "h-5 w-5 scale-100 transition-all",
                                        {
                                            "scale-0": !copied,
                                        },
                                    )}
                                />
                                <MdEmail
                                    className={cn(
                                        "absolute h-5 w-5 scale-100 transition-all",
                                        {
                                            "scale-0": copied,
                                        },
                                    )}
                                />
                            </div>
                            <span className="hidden lg:block">Email</span>
                        </Button>
                    </Link>
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
