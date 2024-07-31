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
import Image from "next/image";
const TechCircle = dynamic(() => import("@/components/TechCircle"), {
    ssr: false,
});
import Paragraph from "@/lib/AnimatedParagraph";
import dynamic from "next/dynamic";

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
                <CursorTracker className="group/grid grid-row-auto relative mx-[1px] mt-[-1px] grid min-h-[730px] grid-cols-1 gap-[1px] overflow-hidden bg-border px-[1px] py-[1px] md:grid-cols-2 lg:grid-cols-3">
                    <ProjectCard project={projects.taskly} />
                    <ProjectCard project={projects["effortless-eats"]} />
                    <ProjectCard project={projects["track-it"]} />
                    <ProjectCard project={projects["home-designer"]} />
                    <ProjectCard project={projects["shipment-tracker"]} />
                    <ProjectCard project={projects["kuba-game"]} />
                    <div className="pointer-events-none absolute left-[var(--x)] top-[var(--y)] h-[300px] w-[300px] translate-x-[-50%] translate-y-[-50%] bg-primary opacity-0 blur-3xl transition-opacity duration-300 md:group-hover/grid:opacity-100" />
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
                    <div className="grid grid-cols-1 overflow-hidden rounded-b-[40px] border border-t-0 md:grid-cols-2 lg:grid-cols-5">
                        <div className="relative flex flex-col p-5 pb-0 md:col-span-3">
                            <h1 className="mb-4 text-5xl text-border">
                                About Me
                            </h1>
                            <div
                                className="absolute inset-0 -z-10 mix-blend-lighten blur-[100px]"
                                style={{
                                    backgroundImage: "url(/self.webp)",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            />
                            <div className="relative w-full aspect-[9/15]">
                                <Image
                                    src="/self.webp"
                                    fill
                                    alt=""
                                    className="rounded-lg"
                                />
                            </div>
                            <p className="absolute bottom-0 left-0 bg-gradient-to-t from-background to-transparent p-10 text-sm text-muted-foreground xl:text-base xl:leading-8">
                                I’m a new computer science graduate from Oregon
                                State University with a focus in cybersecurity
                                and full stack web development.
                            </p>
                        </div>
                        <div className="relative -z-20 col-span-2 flex flex-col justify-between px-5 py-10">
                            <div className="relative -z-20 aspect-square translate-x-0 p-2 transition-transform lg:translate-x-[-50%]">
                                <TechCircle />
                            </div>
                            <div className="absolute top-[50%] translate-y-[-50%] p-10 lg:relative lg:top-0 lg:translate-y-0 lg:p-0">
                                <Paragraph
                                    paragraph="I use a variety of modern web technologies to deliver secure, user focused, web applications."
                                    className="w-full"
                                />
                                <div className="absolute left-0 top-0 -z-10 h-full w-full bg-background blur-xl" />
                            </div>
                            <div className="-z-20 hidden aspect-square translate-x-0 transition-transform lg:block lg:translate-x-[50%]">
                                <TechCircle />
                            </div>
                        </div>
                    </div>
                    <div className="mt-[80px] overflow-hidden rounded-[40px] border">
                        <ContactForm />
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
