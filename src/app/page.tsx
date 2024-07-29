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
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import TechChart from "@/components/TechChart";

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
                    {/* <div className="grid grid-cols-1 overflow-hidden rounded-b-[40px] border border-t-0 sm:aspect-video sm:grid-cols-2">
                        <div className="relative flex flex-col">
                            <TechChart />
                        </div>
                        <div className="flex flex-col gap-8 border-l pt-5">
                            <div className="px-5">
                                <h3 className="mb-3">Work Experience</h3>
                                <ul className="ml-1 flex flex-col gap-2 border-l py-1 pl-4">
                                    <li>
                                        <p>
                                            Software Engineer{" "}
                                            <span className="text-muted-foreground">
                                                DealSumm
                                            </span>
                                        </p>

                                        <p className="text-muted-foreground">
                                            2022 - Present
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            IT{" "}
                                            <span className="text-muted-foreground">
                                                Sat Hari K Design
                                            </span>
                                        </p>

                                        <p className="text-muted-foreground">
                                            2020 - Present
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Graphic Designer{" "}
                                            <span className="text-muted-foreground">
                                                Freelance
                                            </span>
                                        </p>

                                        <p className="text-muted-foreground">
                                            2016 - 2021
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="px-5">
                                <h3 className="mb-3">Education</h3>
                                <ul className="ml-1 flex flex-col gap-2 border-l py-1 pl-4">
                                    <li>
                                        <p className="text-muted-foreground">
                                            B.S. Computer Science
                                        </p>
                                        <p>Oregon State University</p>
                                        <p className="text-muted-foreground">
                                            2020 - 2024
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-1" />
                            <Link
                                href="/Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2"
                            >
                                <Button
                                    type="submit"
                                    variant="ghost"
                                    className="w-full justify-between rounded-bl-[32px] rounded-br-[32px] sm:rounded-bl"
                                    tabIndex={-1}
                                >
                                    Download my Resume
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div> */}
                    <div className="grid grid-cols-1 overflow-hidden rounded-b-[40px] border border-t-0 md:grid-cols-2 lg:grid-cols-5">
                        <div className="relative flex flex-col p-5 md:col-span-3">
                            <h1 className="mb-4 text-5xl text-border">
                                About Me
                            </h1>
                            <p className="bg-gradient-to-t text-sm text-muted-foreground xl:text-base xl:leading-8">
                                I’m a new computer science graduate from Oregon
                                State University with a focus in cybersecurity
                                and full stack web development.
                            </p>
                        </div>
                        <div className="relative col-span-2 flex flex-col border-l p-5">
                            <p className="mb-4 bg-gradient-to-t text-sm text-muted-foreground xl:text-base xl:leading-8">
                                I use a variety of tools and software to deliver
                                on feature rich web applications.
                            </p>
                            <TechChart />
                        </div>
                    </div>
                    <div className="mt-[80px] grid grid-cols-1 overflow-hidden rounded-[40px] border md:grid-cols-2 lg:grid-cols-5">
                        <div className="col-span-2 flex flex-col gap-8 p-5">
                            <div>
                                <h3 className="mb-3 text-lg text-border">
                                    Work Experience
                                </h3>
                                <ul className="ml-1 flex flex-col gap-4 border-l py-1 pl-4">
                                    <li>
                                        <p className="text-muted">DealSumm</p>
                                        <p>
                                            Software Engineer <span></span>
                                        </p>

                                        <p className="text-muted">
                                            2022 - Present
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-muted">
                                            Sat Hari K Design
                                        </p>
                                        <p>IT </p>
                                        <p className="text-muted">
                                            2020 - Present
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-muted">Freelance</p>
                                        <p>Graphic Designer </p>

                                        <p className="text-muted">
                                            2016 - 2021
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="mb-3 text-lg text-border">
                                    Education
                                </h3>
                                <ul className="ml-1 flex flex-col gap-2 border-l py-1 pl-4">
                                    <li>
                                        <p className="text-muted">
                                            B.S. Computer Science
                                        </p>
                                        <p>Oregon State University</p>
                                        <p className="text-muted">
                                            2020 - 2024
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-1" />
                            <Link
                                href="/Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    type="submit"
                                    variant="ghost"
                                    className="w-full justify-between rounded-bl-[26px] rounded-br-[26px] sm:rounded-br"
                                    tabIndex={-1}
                                >
                                    Download my Resume
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
