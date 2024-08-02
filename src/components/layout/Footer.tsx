import React from "react";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Button, buttonVariants } from "../ui/button";
import { ArrowRight, Download } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import ThemeToggle from "../ThemeToggle";
import { getYear } from "date-fns";
import { EmailButton } from "../EmailButton";
import { FaDiscord } from "react-icons/fa";
import { cn } from "@/lib/utils";

const Footer = () => {
    return (
        <footer className="relative flex w-full max-w-[1400px] flex-1 flex-col items-center px-0 pb-2 pt-20 sm:px-0">
            <div className="flex w-full justify-between rounded-[40px] border p-5 mix-blend-luminosity lg:px-20">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col">
                        <Link
                            href="/"
                            className="text-lg md:text-2xl"
                            scroll={true}
                        >
                            Guru Updesh Singh
                            <br />
                            <span className="text-muted-foreground">.dev</span>
                        </Link>
                    </div>
                    <Button
                        className="flex items-center justify-between rounded-full hover:invert"
                        asChild
                    >
                        <Link href="/#contact" scroll aria-label="Contact Me">
                            Contact Me
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <ul className="flex flex-col gap-2" aria-label="Social links">
                    <li>
                        <Button
                            variant="ghost"
                            className="flex items-center justify-start gap-2 rounded-full px-2 lg:px-3"
                            asChild
                        >
                            <Link
                                href="https://github.com/GuruUpdesh"
                                target="_blank"
                                aria-label="GitHub"
                            >
                                <GitHubLogoIcon className="h-5 w-5" />
                                <span className="hidden lg:block">GitHub</span>
                            </Link>
                        </Button>
                    </li>
                    <li>
                        <Button
                            variant="ghost"
                            className="flex items-center justify-start gap-2 rounded-full px-2 lg:px-3"
                            asChild
                        >
                            <Link
                                href="https://www.linkedin.com/in/guru-updesh-singh-789050218/"
                                target="_blank"
                                aria-label="LinkedIn"
                            >
                                <LinkedInLogoIcon className="h-5 w-5" />
                                <span className="hidden lg:block">
                                    LinkedIn
                                </span>
                            </Link>
                        </Button>
                    </li>
                    <li>
                        <Button
                            variant="ghost"
                            className="flex items-center justify-start gap-2 rounded-full px-2 lg:px-3"
                            asChild
                        >
                            <Link
                                href="https://discord.com/channels/.gsingh"
                                target="_blank"
                                aria-label="Discord"
                            >
                                <FaDiscord className="h-5 w-5" />
                                <span className="hidden lg:block">Discord</span>
                            </Link>
                        </Button>
                    </li>
                </ul>
                <ul
                    className="flex flex-col gap-2"
                    aria-label="Additional links"
                >
                    <li>
                        <EmailButton />
                    </li>
                    <li>
                        <TooltipProvider disableHoverableContent>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className="flex items-center justify-start gap-2 rounded-full px-2 lg:px-3"
                                        asChild
                                    >
                                        <Link
                                            href="/Resume.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Download Resume"
                                        >
                                            <Download className="h-5 w-5" />
                                            <span className="hidden lg:block">
                                                Resume
                                            </span>
                                        </Link>
                                    </Button>
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
            <div className="flex w-full items-center justify-between px-[20px] py-2 font-medium mix-blend-luminosity">
                <p className="text-xs md:text-sm">
                    Copyright © {getYear(new Date())}
                </p>
                <p className="text-xs md:text-sm">Eugene, Oregon</p>
            </div>
            <div className="pointer-events-none absolute -z-10 aspect-square w-[200%] opacity-80">
                <Image
                    fill
                    src="/logo.webp"
                    alt="abstract colorful blob"
                    className="animate-spin-slow blur-lg"
                />
                <div
                    className="absolute inset-0 animate-spin-slow blur-[100px] delay-75"
                    style={{
                        backgroundImage: "url(/logo.webp)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
            </div>
        </footer>
    );
};

export default Footer;
