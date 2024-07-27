import React from "react";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Navigation from "./Navigation";
import Image from "next/image";
import ThemeToggle from "../ThemeToggle";
import { getYear } from "date-fns";
import { EmailButton } from "../EmailButton";

const Footer = () => {
    return (
        <footer className="relative flex w-full max-w-[1360px] flex-1 flex-col items-center px-10 pb-10 pt-20 sm:px-0">
            <div className="flex-1" />
            <div className="mb-5 flex w-full items-center justify-between">
                <Link
                    href="/"
                    className="text-sm text-muted mix-blend-difference transition-all hover:text-muted-foreground md:text-base"
                    scroll={true}
                >
                    guruupdeshsingh.dev
                </Link>
                <ThemeToggle />
            </div>
            <Separator className="bg-muted mix-blend-difference" />
            <div className="flex w-full justify-between py-4">
                <p className="text-xs text-muted mix-blend-difference md:text-sm">
                    Copyright © {getYear(new Date())}
                </p>
                <div className="item-center flex gap-1">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="/Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button
                                        variant="outline"
                                        className="group flex items-center gap-2 rounded-full px-2 text-muted lg:px-3"
                                        tabIndex={-1}
                                    >
                                        <Download className="h-5 w-5" />
                                        <span className="hidden lg:block">
                                            Resume
                                        </span>
                                    </Button>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>Download my resume</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="https://github.com/GuruUpdesh"
                                    target="_blank"
                                >
                                    <Button
                                        variant="outline"
                                        className="group flex items-center gap-2 rounded-full px-2 text-muted lg:px-3"
                                        tabIndex={-1}
                                    >
                                        <GitHubLogoIcon className="h-5 w-5" />
                                        <span className="hidden lg:block">
                                            GitHub
                                        </span>
                                    </Button>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>Check out my GitHub</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <EmailButton />
                </div>
            </div>
            <div className="pointer-events-none absolute -z-10 aspect-square w-[200%] opacity-80">
                <Image
                    fill
                    src="/logo.png"
                    alt="abstract colorful blob"
                    className="animate-spin-slow blur-lg"
                />
                <Image
                    fill
                    src="/logo.png"
                    alt="abstract colorful blob"
                    className="animate-spin-slow blur-[100px] delay-75"
                />
            </div>
        </footer>
    );
};

export default Footer;
