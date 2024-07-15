import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <header className="z-10 w-full max-w-[1360px] rounded-b-[40px] border bg-background px-5 pb-5 pt-2 transition-all sm:border-t-0 md:rounded-b-[80px] md:px-20 md:pt-10">
            <nav className="mb-2 flex w-full items-center justify-between overflow-hidden md:mb-5">
                <Link
                    href="/"
                    className="text-sm opacity-70 transition-opacity hover:opacity-100 md:text-base"
                >
                    guruupdeshsingh.dev
                </Link>
                <ul className="ml-20 hidden items-center gap-4 md:flex">
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
                    <h2 className="text-base md:text-inherit">
                        I focus in full stack, cybersecurity, and design
                    </h2>
                    <h2 className="text-base md:text-inherit">
                        I love to build
                    </h2>
                    <h2 className="text-base md:text-inherit">
                        this is my portfolio!
                    </h2>
                </div>
            </div>
        </header>
    );
};

export default Header;
