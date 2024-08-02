import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProjectSheet from "./ProjectSheet";

const Header = () => {
    return (
        <header className="z-20 w-full max-w-[1400px] rounded-b-[40px] border bg-background px-5 pb-5 pt-2 transition-all sm:border-t-0 md:rounded-b-[80px] md:px-20 md:pt-10">
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
            <div className="mt-[36px] py-2 text-lg md:text-xl lg:text-2xl">
                <h1 className="text-muted-foreground">
                    Hey, I’m <span className="text-primary">Guru Updesh</span>
                </h1>
                <div className="pl-5 text-muted-foreground lg:pl-[60px]">
                    <h2 className="text-base md:text-xl">
                        I love to build for the web
                    </h2>
                    <h2 className="text-base md:text-xl">
                        I do full stack, cybersecurity, & design
                    </h2>
                    <h2 className="text-base md:text-xl">
                        welcome to my portfolio!
                    </h2>
                </div>
            </div>
        </header>
    );
};

export default Header;
