import React from "react";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { ArrowUp } from "lucide-react";

const Footer = () => {
	return (
		<footer className="max-w-[1360px] w-full relative flex-1 flex flex-col pt-20 pb-10">
			<div className="flex-1" />
			<nav className="flex items-center justify-between w-full mb-5 overflow-hidden">
				<Link
					href="/"
					className="opacity-70 hover:opacity-100 transition-opacity text-sm md:text-base"
				>
					guruupdeshsingh.dev
				</Link>
				<ul className="flex items-center gap-4 ml-20">
					<li>
						<Link
							href="/projects"
							className="opacity-70 hover:opacity-100 transition-opacity text-sm md:text-base"
						>
							projects
						</Link>
					</li>
					<li>
						<Link
							href="/contact"
							className="opacity-70 hover:opacity-100 transition-opacity text-sm md:text-base"
						>
							contact
						</Link>
					</li>
					<li>
						<Button
							variant="outline"
							size="icon"
							className="rounded-full"
						>
							<ArrowUp className="w-4 h-4" />
						</Button>
					</li>
				</ul>
			</nav>
			<Separator className="opacity-25" />
			<div className="flex justify-between py-4">
				<p className="text-xs md:text-sm opacity-50">
					Copyright © 2024 Guru Updesh Singh
				</p>
				<div className="flex item-center gap-1">
					<Button
						variant="outline"
						size="icon"
						className="rounded-full"
					>
						<GitHubLogoIcon className="w-5 h-5" />
					</Button>
					<Button
						variant="outline"
						size="icon"
						className="rounded-full"
					>
						<LinkedInLogoIcon className="w-5 h-5" />
					</Button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
