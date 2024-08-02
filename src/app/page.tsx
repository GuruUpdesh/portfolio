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
import ContactInfo from "@/components/ContactInfo";
import ExpandableAboutDescription from "@/components/ExpandableAboutDescription";

export default function Portfolio() {
    return (
        <main className="flex w-full flex-col items-center overflow-clip px-[1px] transition-all sm:px-10 md:px-20">
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
                <div
                    className="extend-border-lines relative rounded-b-[60px] p-0 transition-all before:left-0 after:right-0 lg:border lg:border-t-0 lg:px-20 lg:pb-20 lg:before:-left-[1px] lg:after:-right-[1px]"
                    style={
                        {
                            "--top": "60px",
                            "--height": "60px",
                        } as React.CSSProperties
                    }
                >
                    <div className="grid grid-cols-1 overflow-hidden rounded-bl-[40px] rounded-br-[80px] border border-t-0 md:grid-cols-2 lg:grid-cols-5">
                        <div className="relative flex flex-col pb-0 md:col-span-2">
                            <div className="relative aspect-[9/15] w-full rounded-tr-[20px]">
                                <div
                                    className="absolute inset-0 -z-10 bg-cover bg-center mix-blend-lighten blur-[100px]"
                                    style={{
                                        backgroundImage: "url(/self.webp)",
                                    }}
                                />
                                <Image
                                    src="/self.webp"
                                    fill
                                    alt="Portrait of a man with dark hair in a messy bun, beard, and dark t-shirt, looking to the side"
                                    quality={100}
                                    className="rounded-tr-[20px]"
                                />
                                <ExpandableAboutDescription />
                            </div>
                        </div>
                        <div className="relative -z-20 col-span-3 flex flex-col px-5 py-10">
                            <div className="relative -z-20 aspect-square translate-x-0 p-2 transition-transform lg:translate-x-[-50%]">
                                <TechCircle />
                            </div>
                            <div className="absolute top-[50%] translate-y-[-50%] p-10 lg:py-0">
                                <Paragraph paragraph="I use a variety of modern web technologies to deliver secure, user focused, web applications." />
                                <div className="absolute left-0 top-0 -z-10 h-full w-full rounded-full bg-background blur-xl" />
                                <div className="absolute left-0 top-0 -z-10 h-full w-full rounded-full bg-background blur-lg" />
                            </div>
                        </div>
                    </div>
                    <div
                        className="mt-10 grid grid-cols-1 overflow-hidden rounded-[40px] rounded-tr-[80px] border lg:mt-[60px] lg:grid-cols-5"
                        id="contact"
                    >
                        <div className="order-last col-span-2 p-10 lg:order-first">
                            <ContactInfo />
                        </div>
                        <div className="col-span-3 p-0 transition-all md:p-5">
                            <div className="relative overflow-hidden rounded-[20px] rounded-tr-[60px] bg-primary/10 p-5">
                                <h1 className="mb-6 text-3xl">
                                    Let&apos;s Connect!
                                </h1>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
