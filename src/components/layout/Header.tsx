import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProjectSheet from "./ProjectSheet";

const Header = () => {
    return (
        <header className="z-40 w-full max-w-[1400px] rounded-b-[40px] border bg-background px-5 pb-5 pt-2 transition-all border-t-0 md:rounded-b-[80px] md:px-20 md:pt-10 absolute md:relative">
            <div className="relative mb-2 flex w-full items-center justify-between md:mb-5">
                <Link
                    href="/"
                    className="group flex items-center gap-2 text-sm md:text-base"
                >
                    <Image
                        width={20}
                        height={20}
                        alt=""
                        src="/logo.png"
                    />
                    <span className="text-muted transition-all group-hover:text-primary">
                        guruupdeshsingh.dev
                    </span>
                </Link>
                <ProjectSheet />
            </div>
        </header>
    );
};

export default Header;
