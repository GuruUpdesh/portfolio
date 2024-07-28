import React from "react";
import ContactForm from "@/components/ContantForm";
import Circle from "@/components/layout/Circle";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HeroVideo from "@/components/layout/HeroVideo";
import ProjectsDivider from "@/components/layout/ProjectsDivider";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/config/projectConfig";
import CursorTracker from "@/components/CursorTracker";

export default function Portfolio() {
    return (
        <main className="flex w-full flex-col items-center overflow-hidden px-[1px] transition-all sm:px-10 md:px-20">
            <Header />
            <section
                className="extend-border-lines section-base z-0 rounded-b-[80px] p-0 transition-all before:left-0 after:right-0 md:border md:border-t-0 md:px-20 md:pb-20 md:before:-left-[1px] md:after:-right-[1px]"
                style={
                    {
                        "--top": "80px",
                        "--height": "80px",
                    } as React.CSSProperties
                }
            >
                <HeroVideo className="relative rounded-b-[60px] p-0 transition-all lg:border lg:border-t-0 lg:px-20 lg:pb-20" />
                <Circle
                    scale={0}
                    bottom={160 + 2}
                    className="-z-10 opacity-0 transition-opacity lg:opacity-100"
                />
            </section>
            <section
                id="projects"
                className="section-base px-10 transition-all md:px-20"
            >
                <CursorTracker className="group/grid grid-row-auto relative grid min-h-[730px] grid-cols-1 gap-[1px] overflow-hidden border border-t-0 bg-border md:grid-cols-2 lg:grid-cols-3">
                    <ProjectCard project={projects.taskly} />
                    <ProjectCard project={projects["effortless-eats"]} />
                    <ProjectCard project={projects["track-it"]} />
                    <ProjectCard project={projects["home-designer"]} />
                    <ProjectCard project={projects["shipment-tracker"]} />
                    <ProjectCard project={projects["kuba-game"]} />
                    {/* <ProjectCard project={projects["effortless-eats"]} />
                    <ProjectCard project={projects["mobile-treasure-hunt"]} />
                    <ProjectCard project={projects.portfolio} /> */}
                    {/* <div className="hidden rounded bg-[#fafafa] dark:bg-[#0A0A0A] md:block lg:hidden" /> */}
                    <div className="pointer-events-none absolute left-[var(--x)] top-[var(--y)] z-10 h-[300px] w-[300px] translate-x-[-50%] translate-y-[-50%] bg-primary opacity-0 blur-3xl transition-opacity group-hover/grid:opacity-100" />
                </CursorTracker>
            </section>
            <section className="section-base overflow-hidden border border-b-0 border-t-0 border-transparent px-10 transition-all md:px-20 xl:overflow-visible">
                <ProjectsDivider className="rounded-b-[60px] border border-t-0 px-20 py-8 transition-all md:py-10 lg:py-16" />
            </section>
            <section className="section-base extend-border-lines rounded-b-[80px] border border-t-0 px-10 pb-10 transition-all md:px-20 md:pb-20">
                <div
                    className="extend-border-lines relative rounded-b-[60px] p-0 transition-all before:left-0 after:right-0 lg:border lg:border-t-0 lg:px-20 lg:pb-20 lg:before:-left-[1px] lg:after:-right-[1px]"
                    style={
                        {
                            "--top": "60px",
                            "--height": "60px",
                        } as React.CSSProperties
                    }
                >
                    <div className="grid grid-cols-1 overflow-hidden rounded-b-[40px] border border-t-0 sm:aspect-video sm:grid-cols-2 md:grid-cols-5">
                        <div className="relative flex flex-col md:col-span-3">
                            <div className="flex-1" />
                            <p className="bg-gradient-to-t p-5 text-sm text-muted-foreground xl:p-10 xl:text-base xl:leading-8">
                                I’m a new computer science graduate from Oregon
                                State University with a focus in cybersecurity
                                and full stack web development.
                            </p>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
