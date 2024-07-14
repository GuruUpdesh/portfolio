import ProjectDivider from "@/components/layout/ProjectDivider";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ArrowLeft, ArrowRight, File, Play, Star } from "lucide-react";
import "./techstack.css";
import TechStackContainer from "@/components/project/TechStackContainer";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { getProjectFromId } from "@/projectConfig";
import GitHubStars from "@/components/project/analytics/GitHubStars";
import { Suspense } from "react";
import GitHubFiles from "@/components/project/analytics/GitHubFiles";

type Props = {
    params: {
        id: string;
    };
};

export default function Project({ params: { id } }: Props) {
    const project = getProjectFromId(parseInt(id));
    return (
        <main className="relative flex min-h-screen w-full flex-col items-center overflow-hidden px-5 transition-all sm:px-10 md:px-20">
            <section className="mb-8 w-full max-w-[1360px] px-40">
                <div className="flex items-center gap-2 py-4">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="/">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="rounded-full"
                                    >
                                        <ArrowLeft className="h-4 w-4" />
                                    </Button>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Back Home</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <div>
                        <h1 className="inline-block text-2xl">
                            {project.name}
                        </h1>
                        <p className="ml-2 inline-block text-lg opacity-75">
                            {project.year}
                        </p>
                    </div>
                    <div className="group flex flex-1 items-center justify-end gap-2">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <ArrowLeft className="h-4 w-4 opacity-75 transition-opacity group-hover:opacity-100" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Shipment Tracker</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <ArrowRight className="h-4 w-4 opacity-75 transition-opacity group-hover:opacity-100" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Taskly</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
                <div className="relative z-10 flex aspect-video w-full items-center justify-center rounded-[40px] border bg-[#0A0A0A]">
                    <Play className="h-10 w-10" />
                </div>
            </section>
            <section className="flex w-full max-w-[1360px] px-40">
                <p>{project.content.shortDescription}</p>
                <div className="flex items-center gap-2">
                    {project.websiteLink ? (
                        <Link href={project.websiteLink} target="_blank">
                            <Button className="rounded-full">Visit</Button>
                        </Link>
                    ) : null}
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href={project.gitHubLink} target="_blank">
                                    <Button
                                        variant="outline"
                                        className="group flex items-center gap-2 rounded-full px-2 lg:px-3"
                                    >
                                        <GitHubLogoIcon className="h-5 w-5 transition-opacity" />
                                        <span className="hidden transition-opacity lg:block">
                                            GitHub
                                        </span>
                                    </Button>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>See source code on GitHub</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </section>
            <ProjectDivider className="relative w-full max-w-[1360px] rounded-b-[80px] border border-t-0 px-40 pb-40" />
            <section className="relative w-full max-w-[1360px] px-40 py-2">
                <h1 className="py-2 text-2xl">Features</h1>
                <ul className="grid grid-cols-3 gap-2">
                    {project.content.features.map((feature, i) => (
                        <li key={i} className="rounded-lg bg-border/5 p-4">
                            <h3 className="font-semibold">{feature}</h3>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="section-base !px-40 py-8">
                <h1 className="py-2 text-2xl">Analytics</h1>
                <ul className="grid grid-cols-3 gap-2">
                    <li className="rounded-lg bg-border/5 p-4">
                        <h1 className="text-lg font-semibold">
                            360{" "}
                            <span className="font-normal opacity-75">
                                Users
                            </span>
                        </h1>
                    </li>
                    <li className="flex items-baseline gap-2 rounded-lg bg-border/5 p-4">
                        <Star className="h-4 w-4" />
                        <h1 className="text-lg font-semibold">
                            <Suspense fallback={0}>
                                <GitHubStars gitHubLink={project.gitHubLink} />
                            </Suspense>{" "}
                            <span className="font-normal opacity-75">
                                Stars
                            </span>
                        </h1>
                    </li>
                    <li className="flex items-baseline gap-2 rounded-lg bg-border/5 p-4">
                        <File className="h-4 w-4" />
                        <h1 className="text-lg font-semibold">
                            <Suspense fallback={0}>
                                <GitHubFiles gitHubLink={project.gitHubLink} />
                            </Suspense>{" "}
                            <span className="font-normal opacity-75">
                                Files
                            </span>
                        </h1>
                    </li>
                </ul>
            </section>
            <section className="section-base grid min-h-[500px] grid-cols-2 rounded-xl bg-border/5 !px-40 py-8">
                <TechStackContainer techStack={project.techStack} />
            </section>
            <Footer />
        </main>
    );
}
