import Link from "next/link";

export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex w-full flex-col items-center overflow-clip px-[1px] transition-all sm:px-10 md:px-20">
            <header className="z-40 w-full flex items-center justify-center pb-5 pt-2 md:pt-10">
                <Link
                    href="/"
                    className="group flex items-center gap-2 text-sm md:text-base"
                >
                    <span className="w-[20px] h-[20px] rounded-full bg-foreground"></span>
                    <span className="text-muted transition-all group-hover:text-primary">
                        guruupdeshsingh.dev/blog
                    </span>
                </Link>
            </header>
            <section
                id="projects"
                className="section-base px-5 transition-all sm:px-10 md:px-20"
            >
                <div className="flex justify-center px-4 py-8 min-h-[600px] rounded-b-[60px]">
                    <div className="max-w-[600px] w-full">
                        {children}
                    </div>
                </div>
            </section>
        </main>
    );
}
