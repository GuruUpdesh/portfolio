import React from "react";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { ArrowUp, Download } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Navigation from "./Navigation";

const Footer = () => {
    return (
        <footer className="relative flex w-full max-w-[1360px] flex-1 flex-col px-10 pb-10 pt-20 sm:px-0">
            <div className="flex-1" />
            <div className="mb-5 flex w-full items-center justify-between">
                <Link
                    href="/"
                    className="text-sm opacity-50 transition-opacity hover:opacity-100 md:text-base"
                >
                    guruupdeshsingh.dev
                </Link>
            </div>
            <Separator className="opacity-25" />
            <div className="flex justify-between py-4">
                <p className="text-xs opacity-50 md:text-sm">
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
                                        className="group flex items-center gap-2 rounded-full px-2 lg:px-4"
                                    >
                                        <Download className="h-4 w-4 opacity-50 transition-opacity group-hover:opacity-100" />
                                        <span className="hidden opacity-50 transition-opacity group-hover:opacity-100 lg:block">
                                            Resume
                                        </span>
                                    </Button>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Download my resume</p>
                            </TooltipContent>
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
                                        className="group flex items-center gap-2 rounded-full px-2 lg:px-3"
                                    >
                                        <GitHubLogoIcon className="h-5 w-5 opacity-50 transition-opacity group-hover:opacity-100" />
                                        <span className="hidden opacity-50 transition-opacity group-hover:opacity-100 lg:block">
                                            GitHub
                                        </span>
                                    </Button>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Check out my GitHub</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    {/* <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="group flex items-center gap-2 rounded-full px-2 lg:px-4"
                                >
                                    <LinkedInLogoIcon className="h-5 w-5 opacity-50 transition-opacity group-hover:opacity-100" />
                                    <span className="hidden opacity-50 transition-opacity group-hover:opacity-100 lg:block">
                                        LinkedIn
                                    </span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Follow me on LinkedIn</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider> */}
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="group flex items-center gap-2 rounded-full"
                                >
                                    <MdEmail className="h-5 w-5 opacity-50 transition-opacity group-hover:opacity-100" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Send me an email</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
