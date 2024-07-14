import React from "react";
import ContactForm from "@/components/ContantForm";
import Circle from "@/components/layout/Circle";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HeroVideo from "@/components/layout/HeroVideo";
import ProjectsDivider from "@/components/layout/ProjectsDivider";
import ProjectCard from "@/components/ProjectCard";

export default function Portfolio() {
    return (
        <main className="relative flex min-h-screen w-full flex-col items-center overflow-hidden px-5 transition-all sm:px-10 md:px-20">
            <Header />
            <section
                className="extend-border-lines section-base rounded-b-[80px] border border-t-0 pb-20"
                style={
                    {
                        "--top": "80px",
                        "--height": "80px",
                    } as React.CSSProperties
                }
            >
                <HeroVideo className="relative rounded-b-[60px] border border-t-0 px-20 pb-20" />
                <Circle scale={0} bottom={160 + 2} className="-z-10" />
            </section>
            <section className="section-base border border-transparent">
                <div className="grid min-h-[640px] grid-cols-3 grid-rows-8 gap-[1px] overflow-hidden border border-t-0 bg-border">
                    <ProjectCard
                        className="row-span-4 border-t-0"
                        projectId = {1}
                    />
                    <ProjectCard
                        className="row-span-3 border-t-0"
                        projectId = {2}
                    />
                    <ProjectCard
                        className="row-span-4 border-t-0"
                        projectId = {3}
                    />
                    <ProjectCard
                        className="col-span-1 col-start-1 row-span-4"
                        projectId = {4}
                    />
                    <ProjectCard
                        className="col-start-2 row-span-5 row-start-4"
                        projectId = {5}
                    />
                    <ProjectCard
                        className="row-span-4"
                        projectId = {6}
                    />
                </div>
            </section>
            <section className="section-base border border-transparent">
                <ProjectsDivider className="rounded-b-[60px] border border-t-0 px-20 py-16" />
            </section>
            <section className="section-base extend-border-lines rounded-b-[80px] border border-t-0 pb-20">
                <div className="relative rounded-b-[60px] border border-t-0 px-20 pb-20 before:absolute before:-left-[1px] before:top-[-60px] before:-z-20 before:h-[60px] before:w-[1px] before:bg-border after:absolute after:-right-[1px] after:top-[-60px] after:-z-20 after:h-[60px] after:w-[1px] after:bg-border">
                    <div className="grid aspect-video grid-cols-5 overflow-hidden rounded-b-[40px] border border-t-0">
                        <div className="relative col-span-3">
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent">
                                <p className="bg-gradient-to-t p-10 leading-8 opacity-70">
                                    I’m a new computer science graduate from
                                    Oregon State University with a focus in
                                    cybersecurity and full stack web
                                    development.
                                </p>
                            </div>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
