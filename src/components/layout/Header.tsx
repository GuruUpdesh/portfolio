import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <header className="z-10 w-full max-w-[1360px] rounded-b-[80px] border border-t-0 bg-background px-20 pb-5 pt-10">
            <nav className="mb-5 flex w-full items-center justify-between overflow-hidden">
                <Link
                    href="/"
                    className="text-sm opacity-70 transition-opacity hover:opacity-100 md:text-base"
                >
                    guruupdeshsingh.dev
                </Link>
                <ul className="ml-20 flex items-center gap-4">
                    <li>
                        <Link
                            href="/projects"
                            className="text-sm opacity-70 transition-opacity hover:opacity-100 md:text-base"
                        >
                            projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="text-sm opacity-70 transition-opacity hover:opacity-100 md:text-base"
                        >
                            contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="py-2 text-lg md:text-xl lg:text-2xl">
                <h1 className="opacity-70">Hey!</h1>
                <h1>
                    <span className="opacity-70">I’m</span> Guru Updesh Singh
                </h1>
                <div className="pl-5 opacity-70 lg:pl-[60px]">
                    <h1 className="whitespace-nowrap">
                        I focus in full stack, cybersecurity, and design
                    </h1>
                    <h1 className="whitespace-nowrap">I love to build</h1>
                    <h1 className="whitespace-nowrap">this is my portfolio!</h1>
                </div>
            </div>
        </header>
    );
};

export default Header;
