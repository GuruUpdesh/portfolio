import React from "react";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { MdEmail } from "react-icons/md";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Navigation from "./Navigation";
import Image from "next/image";
import ThemeToggle from "../ThemeToggle";

const Footer = () => {
    return (
        <footer className="relative flex w-full max-w-[1360px] flex-1 flex-col items-center overflow-clip px-10 pb-10 pt-20 sm:px-0">
            <div className="flex-1" />
            <div className="mb-5 flex w-full items-center justify-between">
                <Link
                    href="/"
                    className="text-sm text-muted transition-all hover:text-muted-foreground md:text-base"
                    scroll={true}
                >
                    guruupdeshsingh.dev
                </Link>
                <ThemeToggle />
            </div>
            <Separator className="bg-muted" />
            <div className="flex w-full justify-between py-4">
                <p className="text-xs text-muted md:text-sm">
                    Copyright © 2024
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
                                        className="group flex items-center gap-2 rounded-full px-2 text-muted lg:px-4"
                                    >
                                        <Download className="h-4 w-4" />
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
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="group flex items-center gap-2 rounded-full text-muted"
                                >
                                    <MdEmail className="h-5 w-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>Send me an email</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
            <Image
                width={300}
                height={300}
                src="/logo.png"
                alt="abstract colorful blob"
                className="pointer-events-none absolute bottom-[-100%] -z-10 animate-spin-slow"
                quality={100}
            />
            <Image
                width={300}
                height={300}
                src="/logo.png"
                alt="abstract colorful blob"
                className="pointer-events-none absolute bottom-[-100%] -z-10 animate-spin-slow blur-3xl"
                quality={100}
            />
        </footer>
    );
};

export default Footer;
