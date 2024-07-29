import React from "react";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { ArrowRight, Download } from "lucide-react";
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
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="relative flex w-full max-w-[1360px] flex-1 flex-col items-center px-10 pb-2 pt-20 sm:px-0">
            <div className="flex w-full justify-between rounded-[40px] border p-5 px-20 mix-blend-luminosity">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col">
                        <Link href="/" className="text-2xl" scroll={true}>
                            Guru Updesh Singh
                        </Link>
                        <Link
                            href="/"
                            className="-translate-y-2 text-2xl text-muted-foreground"
                            scroll={true}
                        >
                            .dev
                        </Link>
                    </div>
                    <Button className="justify-between rounded-full">
                        Contact Me
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>

                <ul className="flex flex-col gap-2">
                    <li>
                        <Link
                            href="https://github.com/GuruUpdesh"
                            target="_blank"
                            className="flex items-center gap-2"
                        >
                            <Button
                                variant="ghost"
                                className="group flex items-center gap-2 rounded-full px-2 lg:px-3"
                                tabIndex={-1}
                            >
                                <GitHubLogoIcon className="h-5 w-5" />
                                <span className="hidden lg:block">GitHub</span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://github.com/GuruUpdesh"
                            target="_blank"
                            className="flex items-center gap-2"
                        >
                            <Button
                                variant="ghost"
                                className="group flex items-center gap-2 rounded-full px-2 lg:px-3"
                                tabIndex={-1}
                            >
                                <LinkedInLogoIcon className="h-5 w-5" />
                                <span className="hidden lg:block">
                                    LinkedIn
                                </span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://github.com/GuruUpdesh"
                            target="_blank"
                            className="flex items-center gap-2"
                        >
                            <Button
                                variant="ghost"
                                className="group flex items-center gap-2 rounded-full px-2 lg:px-3"
                                tabIndex={-1}
                            >
                                <FaDiscord className="h-5 w-5" />
                                <span className="hidden lg:block">Discord</span>
                            </Button>
                        </Link>
                    </li>
                </ul>
                <ul className="flex flex-col gap-2">
                    <li>
                        <EmailButton />
                    </li>
                    <li>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href="/Resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button
                                            variant="ghost"
                                            className="group flex items-center gap-2 rounded-full px-2 lg:px-3"
                                            tabIndex={-1}
                                        >
                                            <Download className="h-5 w-5" />
                                            <span className="hidden lg:block">
                                                Resume
                                            </span>
                                        </Button>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    Download my resume
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </li>
                </ul>
                <ThemeToggle />
            </div>
            <div className="flex w-full items-center justify-between px-[20px] py-2 mix-blend-luminosity font-medium">
                <p className="text-xs md:text-sm">
                    Copyright © {getYear(new Date())}
                </p>
                <p className="text-xs md:text-sm">Eugene, Oregon</p>
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
