import React from "react";
import Link from "next/link";

const Header = () => {
	return (
		<header className="w-full border border-t-0 rounded-b-[80px] px-20 pt-10 pb-5 max-w-[1360px] z-10">
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
				</ul>
			</nav>
			<div className="py-2 text-xl md:text-2xl">
				<h1 className="opacity-70">Hey!</h1>
				<h1>
					<span className="opacity-70">I’m</span> Guru Updesh Singh
				</h1>
				<div className="pl-[60px] opacity-70">
					<h1 className="hidden md:block">I focus in full stack, cybersecurity, and design</h1>
					<h1 className="hidden md:block">I love to build</h1>
					<h1>this is my portfolio!</h1>
				</div>
			</div>
		</header>
	);
};

export default Header;
