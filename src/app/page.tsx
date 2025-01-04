import React from "react";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/layout/HeroSection";
import { projects } from "@/config/projectConfig";
import ProjectCard from "@/components/ProjectCard";
import CursorTracker from "@/components/CursorTracker";
import ProjectsDivider from "@/components/layout/dividers/ProjectsDivider";
import Footer from "@/components/layout/Footer";

export default function Portfolio() {
    return (
        <main className="flex w-full flex-col items-center overflow-clip px-[1px] transition-all sm:px-10 md:px-20">
            <Header />
            <section
                className="extend-border-lines section-base z-0 rounded-b-[20px] sm:rounded-b-[40px] md:rounded-b-[80px] p-0 transition-all before:left-0 after:right-0 border border-t-0 md:px-20 md:before:-left-[1px] md:after:-right-[1px]"
                style={
                    {
                        "--top": "80px",
                        "--height": "80px",
                    } as React.CSSProperties
                }
            >
                <HeroSection />
                <div className="relative flex h-20 items-center justify-between px-[40px] gap-6">
                    <p className="text-sm text-primary/50">
                        Welcome to my portfolio!
                    </p>
                    <p className="text-sm text-primary/50">
                        <span className="opacity-70">
                            I&apos;m building with{" "}
                        </span>
                        Next.js<span className="opacity-70">, </span>React
                        <span className="opacity-70">, and </span>
                        Python
                    </p>
                    <p className="text-sm text-primary/50 hidden lg:block">
                        Eugene, OR
                    </p>
                </div>
            </section>
            <section
                id="projects"
                className="section-base px-5 transition-all sm:px-10 md:px-20"
            >
                <CursorTracker className="group/grid grid-row-auto relative mx-[1px] mt-[-1px] grid min-h-[730px] grid-cols-1 gap-[1px] overflow-hidden bg-border px-[1px] py-[1px] lg:grid-cols-2 xl:grid-cols-3">
                    <ProjectCard project={projects.taskly} />
                    <ProjectCard project={projects["effortless-eats"]} />
                    <ProjectCard project={projects["track-it"]} />
                    <ProjectCard project={projects["home-designer"]} />
                    <ProjectCard project={projects["shipment-tracker"]} />
                    <ProjectCard project={projects["kuba-game"]} />
                    <div className="pointer-events-none absolute left-[var(--x)] top-[var(--y)] h-[300px] w-[300px] translate-x-[-50%] translate-y-[-50%] bg-primary opacity-0 blur-3xl transition-opacity duration-300 md:group-hover/grid:opacity-100" />
                </CursorTracker>
            </section>
            <section className="section-base overflow-hidden border border-b-0 border-t-0 border-transparent px-5 transition-all sm:px-10 md:px-20 xl:overflow-visible">
                <ProjectsDivider className="rounded-b-[60px] border border-t-0 px-20 py-8 transition-all md:py-10 lg:py-16" />
            </section>
            <section className="section-base extend-border-lines rounded-b-[60px] border border-t-0 px-5 pb-5 transition-all sm:rounded-b-[80px] sm:px-10 sm:pb-10 md:px-20 md:pb-20">
            </section>
            <Footer />
        </main>
    );
}
