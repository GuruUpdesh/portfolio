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

const Footer = () => {
	return (
		<footer className="max-w-[1360px] w-full relative flex-1 flex flex-col pt-20 pb-10">
			<div className="flex-1" />
			<nav className="flex items-center justify-between w-full mb-5 overflow-hidden">
				<Link
					href="/"
					className="opacity-50 hover:opacity-100 transition-opacity text-sm md:text-base"
				>
					guruupdeshsingh.dev
				</Link>
				<ul className="flex items-center gap-4 ml-20">
					<li>
						<Link
							href="/projects"
							className="opacity-50 hover:opacity-100 transition-opacity text-sm md:text-base"
						>
							projects
						</Link>
					</li>
					<li>
						<Link
							href="/contact"
							className="opacity-50 hover:opacity-100 transition-opacity text-sm md:text-base"
						>
							contact
						</Link>
					</li>
				</ul>
			</nav>
			<Separator className="opacity-25" />
			<div className="flex justify-between py-4">
				<p className="text-xs md:text-sm opacity-50">
					Copyright © 2024 Guru Updesh Singh
				</p>
				<div className="flex item-center gap-1">
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant="outline"
									className="rounded-full group flex items-center gap-2 px-2 lg:px-4"
								>
									<Download className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
									<span className="hidden lg:block">
										Resume
									</span>
								</Button>
							</TooltipTrigger>
							<TooltipContent>
								<p>Download my resume</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant="outline"
									className="rounded-full group flex items-center gap-2 px-2 lg:px-3"
								>
									<GitHubLogoIcon className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
									<span className="hidden lg:block">
										GitHub
									</span>
								</Button>
							</TooltipTrigger>
							<TooltipContent>
								<p>Check out my GitHub</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant="outline"
									className="rounded-full group flex items-center gap-2 px-2 lg:px-4"
								>
									<LinkedInLogoIcon className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
									<span className="hidden lg:block">
										LinkedIn
									</span>
								</Button>
							</TooltipTrigger>
							<TooltipContent>
								<p>Follow me on LinkedIn</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant="outline"
									size="icon"
									className="rounded-full group flex items-center gap-2"
								>
									<MdEmail className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
								</Button>
							</TooltipTrigger>
							<TooltipContent>
								<p>Send me an email</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant="outline"
									size="icon"
									className="rounded-full group flex items-center gap-2"
								>
									<FaDiscord className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
								</Button>
							</TooltipTrigger>
							<TooltipContent>
								<p>Add me on Discord</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
