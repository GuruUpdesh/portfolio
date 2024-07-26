import ProjectDivider from "@/components/layout/ProjectDivider";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { GitHubLogoIcon, PersonIcon } from "@radix-ui/react-icons";
import {
    ArrowLeft,
    ArrowRight,
    ChevronDown,
    ChevronUp,
    File,
    Play,
    Star,
} from "lucide-react";
import "./techstack.css";
import TechStackContainer from "@/components/project/TechStackContainer";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import {
    getNextProjectKey,
    getPreviousProjectKey,
    isValidProjectKey,
    projects,
} from "@/config/projectConfig";
import GitHubStars from "@/components/project/analytics/GitHubStars";
import { Suspense } from "react";
import GitHubFiles from "@/components/project/analytics/GitHubFiles";
import VercelVisitors from "@/components/project/analytics/VercelVisitors";
import Image from "next/image";
import Gallery from "@/components/project/Gallery";
import VideoComponent from "@/components/project/VideoComponent";
import StickyHeader from "@/components/layout/StickyHeader";
import { notFound } from "next/navigation";
import "./typography.css";

type Props = {
    params: {
        key: string;
    };
};

export default function Project({ params: { key } }: Props) {
    if (!isValidProjectKey(key)) {
        notFound();
    }

    const project = projects[key];
    const nextProjectKey = getNextProjectKey(key);
    const previousProjectKey = getPreviousProjectKey(key);

    return (
        <>
            <StickyHeader>
                <div className="flex w-full max-w-[1360px] items-center gap-2 transition-all lg:px-20 xl:px-40">
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
                            <TooltipContent>Back Home</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <div className="flex w-full items-center justify-between">
                        <h1
                            className="inline-flex max-w-[calc(100%-4ch)] items-baseline gap-2 truncate text-lg md:text-2xl"
                            title={project.name}
                        >
                            <Image
                                src={`/icons/${project.key}.ico`}
                                height={20}
                                width={20}
                                alt="website icon"
                                priority
                                className="flex-shrink-0"
                            />
                            {project.name}
                        </h1>
                        <p className="ml-2 inline-block flex-shrink-0 truncate text-sm opacity-75 md:text-lg">
                            {project.year}
                        </p>
                    </div>
                    <div className="group flex flex-1 items-center justify-end">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={`/projects/${previousProjectKey}`}
                                    >
                                        <Button variant="ghost" size="icon">
                                            <ChevronUp className="h-4 w-4 opacity-75 transition-opacity group-hover:opacity-100" />
                                        </Button>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    {projects[previousProjectKey].name}
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link href={`/projects/${nextProjectKey}`}>
                                        <Button variant="ghost" size="icon">
                                            <ChevronDown className="h-4 w-4 opacity-75 transition-opacity group-hover:opacity-100" />
                                        </Button>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    {projects[nextProjectKey].name}
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
            </StickyHeader>
            <div className="flex w-full justify-center overflow-hidden">
                <main id="1" className="mb-8 transition-all sm:px-10 md:px-20">
                    <section className="mb-8 w-full max-w-[1360px] px-5 transition-all lg:px-20 xl:px-40">
                        {project.videoFileName ? (
                            <VideoComponent filename={project.videoFileName} />
                        ) : (
                            <div className="relative z-10 flex aspect-video w-full items-center justify-center overflow-hidden rounded-[40px] rounded-b-[20px] border bg-[#fafafa] dark:bg-[#0A0A0A]">
                                <Play className="h-10 w-10" />
                            </div>
                        )}
                    </section>
                    <section className="flex w-full max-w-[1360px] flex-col-reverse gap-2 px-5 transition-all lg:flex-row lg:px-20 xl:px-40">
                        <div className="font-light leading-7">
                            {project.content.shortDescription}
                        </div>
                        <div className="flex items-center justify-end gap-2">
                            {project.gitHubLink ? (
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Link
                                                href={project.gitHubLink}
                                                target="_blank"
                                            >
                                                <Button
                                                    variant="outline"
                                                    className="group flex items-center gap-2 rounded-full px-2 lg:px-3"
                                                >
                                                    <GitHubLogoIcon className="h-5 w-5" />
                                                    <span>GitHub</span>
                                                </Button>
                                            </Link>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            See on GitHub
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            ) : null}
                            {project.websiteLink ? (
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Link
                                                href={project.websiteLink}
                                                target="_blank"
                                            >
                                                <Button className="rounded-full px-2.5 lg:px-3">
                                                    <span>Visit</span>
                                                </Button>
                                            </Link>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            Visit {project.websiteLink}
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            ) : null}
                        </div>
                    </section>
                    <ProjectDivider className="relative w-full max-w-[1360px] rounded-b-[80px] border border-t-0 px-40 pb-40" />
                </main>
            </div>
            <section className="mb-8 w-full overflow-clip px-5">
                <Gallery images={project.images} projectKey={project.key} />
            </section>
            <main
                id="2"
                className="overflow-clip transition-all sm:px-10 md:px-20"
            >
                <section className="relative flex w-full max-w-[1360px] flex-col gap-32 px-5 transition-all lg:px-20 xl:px-40">
                    {project.content.detailedContent}
                    <div>
                        <h1 className="py-2 text-2xl">Features</h1>
                        <ul className="grid grid-cols-2 gap-2 lg:grid-cols-4">
                            {project.content.features.map((feature, i) => (
                                <li
                                    key={i}
                                    className="overflow-hidden whitespace-nowrap rounded-lg border border-border/5 bg-border/10 p-4 pr-0"
                                >
                                    <p>{feature}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <TechStackContainer techStack={project.techStack} />
                    <div>
                        <h1 className="py-2 text-2xl">Analytics</h1>
                        <ul className="grid grid-cols-1 gap-2 md:grid-cols-3">
                            {project.vercelProjectId ? (
                                <li className="flex items-baseline gap-2 rounded-lg border border-border/5 bg-border/10 p-4">
                                    <PersonIcon />
                                    <h1 className="text-lg font-semibold">
                                        <VercelVisitors
                                            vercelProjectId={
                                                project.vercelProjectId
                                            }
                                        />{" "}
                                        <span className="font-normal opacity-75">
                                            Visitors
                                        </span>
                                    </h1>
                                </li>
                            ) : null}
                            <li className="flex items-baseline gap-2 rounded-lg border border-border/5 bg-border/10 p-4">
                                <Star className="h-4 w-4" />
                                <h1 className="text-lg font-semibold">
                                    <Suspense fallback={0}>
                                        <GitHubStars
                                            gitHubLink={project.gitHubLink}
                                        />
                                    </Suspense>{" "}
                                    <span className="font-normal opacity-75">
                                        Stars
                                    </span>
                                </h1>
                            </li>
                            <li className="flex items-baseline gap-2 rounded-lg border border-border/5 bg-border/10 p-4">
                                <File className="h-4 w-4" />
                                <h1 className="text-lg font-semibold">
                                    <Suspense fallback={0}>
                                        <GitHubFiles
                                            gitHubLink={project.gitHubLink}
                                        />
                                    </Suspense>{" "}
                                    <span className="font-normal opacity-75">
                                        Files
                                    </span>
                                </h1>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-32 flex w-full justify-between gap-4">
                        <Link
                            href={`/projects/${previousProjectKey}`}
                            className="animated-underline flex items-center gap-4 text-sm opacity-75 transition-opacity after:bottom-0 after:right-0 hover:opacity-100 md:text-2xl md:after:bottom-1 lg:text-4xl"
                        >
                            <ArrowLeft className="h-4 w-4 md:h-6 md:w-6" />
                            Last Project
                        </Link>
                        <Link
                            href={`/projects/${nextProjectKey}`}
                            className="animated-underline flex items-center gap-4 text-sm opacity-75 transition-opacity after:bottom-0 after:left-0 hover:opacity-100 md:text-2xl md:after:bottom-1 lg:text-4xl"
                        >
                            Next Project
                            <ArrowRight className="h-4 w-4 md:h-6 md:w-6" />
                        </Link>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    );
}
