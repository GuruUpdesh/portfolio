import ProjectDivider from "@/components/layout/ProjectDivider";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowTopRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import {
    ArrowLeft,
    ArrowRight,
    ChevronDown,
    ChevronUp,
    Play,
    X,
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
import ProjectHeader from "@/components/layout/ProjectHeader";
import ProjectsDivider from "@/components/layout/ProjectsDivider";

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
        <div className="flex w-full flex-col items-center overflow-clip px-5">
            <div className="flex w-full max-w-[1400px] items-center justify-end"></div>
            <StickyHeader>
                <ProjectHeader
                    project={project}
                    nextProjectKey={nextProjectKey}
                    previousProjectKey={previousProjectKey}
                />
            </StickyHeader>
            <main className="w-full max-w-[1400px] rounded-b-[80px] rounded-t-[40px] border border-b-0 bg-gradient-to-b from-primary/5 to-background lg:rounded-t-[80px]">
                <section className="p-5 !pb-0 transition-all lg:p-20">
                    {project.videoFileName ? (
                        <VideoComponent filename={project.videoFileName} />
                    ) : null}
                </section>
                <ProjectDivider className="relative rounded-b-[80px] border border-l-0 border-r-0 border-t-0">
                    <div className="flex flex-col-reverse gap-4 px-5 py-10 transition-all lg:flex-row lg:gap-2 lg:px-20">
                        <div className="paragraph">
                            {project.content.shortDescription}
                        </div>
                        <div className="flex items-start justify-end gap-2">
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
                                                    tabIndex={-1}
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
                                                <Button
                                                    className="rounded-full px-2.5 lg:px-3"
                                                    tabIndex={-1}
                                                >
                                                    <span>Visit</span>
                                                    <ArrowRight className="h-4 w-4" />
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
                    </div>
                </ProjectDivider>
            </main>
            <section className="section-base overflow-hidden border border-b-0 border-t-0 border-transparent px-5 transition-all sm:px-10 md:px-20 xl:overflow-visible">
                <ProjectsDivider className="rounded-b-[60px] border border-t-0 px-20 py-8 transition-all md:py-10 lg:py-16" />
            </section>
            <section className="relative mb-8 w-full px-5">
                <Gallery images={project.images} projectKey={project.key} />
                <div className="absolute left-0 top-0 -z-10 hidden h-full w-full overflow-clip opacity-40 blur-[100px] grayscale transition-opacity md:block">
                    <div className="absolute left-[-50%] top-[-50%] h-[200%] w-[200%] -hue-rotate-30">
                        <Image
                            fill
                            src="/logo.webp"
                            alt="abstract colorful blob"
                            className="animate-spin-slow blur-lg"
                        />
                    </div>
                </div>
            </section>
            <section
                id="2"
                className="mt-20 w-full max-w-[1400px] overflow-clip"
            >
                <div className="relative flex w-full flex-col items-center gap-32 px-5 transition-all lg:px-20 xl:px-40">
                    <div className="flex max-w-[690px] flex-col gap-32">
                        {project.content.detailedContent}
                    </div>
                    <div className="w-full">
                        <h1 className="header-1">Features</h1>
                        <ul className="grid w-full grid-cols-2 gap-2 lg:grid-cols-4">
                            {project.content.features.map((feature, i) => (
                                <li
                                    key={i}
                                    className="highlight overflow-hidden whitespace-nowrap p-4 pr-0"
                                >
                                    <p>{feature}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <TechStackContainer techStack={project.techStack} />
                    <div className="w-full">
                        <h1 className="header-1">Analytics</h1>
                        <ul className="grid grid-cols-1 gap-2 md:grid-cols-3">
                            {project.vercelProjectId && (
                                <Suspense>
                                    <VercelVisitors
                                        vercelProjectId={
                                            project.vercelProjectId
                                        }
                                    />
                                </Suspense>
                            )}
                            <Suspense fallback={0}>
                                <GitHubStars gitHubLink={project.gitHubLink} />
                            </Suspense>
                            <Suspense fallback={0}>
                                <GitHubFiles gitHubLink={project.gitHubLink} />
                            </Suspense>
                        </ul>
                    </div>
                    <div className="mb-32 flex w-full justify-between gap-4">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Link
                                        href={`/projects/${previousProjectKey}`}
                                        className="animated-underline flex items-center gap-4 text-sm opacity-75 transition-opacity after:bottom-0 after:right-0 hover:opacity-100 md:text-2xl md:after:bottom-1 lg:text-4xl"
                                    >
                                        <ArrowLeft className="h-4 w-4 md:h-6 md:w-6" />
                                        Last Project
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent align="end" side="bottom">
                                    <div className="flex items-center gap-1">
                                        <Image
                                            src={`/icons/${projects[previousProjectKey].key}.ico`}
                                            height={11}
                                            width={11}
                                            alt="website icon"
                                        />
                                        {projects[previousProjectKey].name}
                                    </div>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Link
                                        href={`/projects/${nextProjectKey}`}
                                        className="animated-underline flex items-center gap-4 text-sm opacity-75 transition-opacity after:bottom-0 after:left-0 hover:opacity-100 md:text-2xl md:after:bottom-1 lg:text-4xl"
                                    >
                                        Next Project
                                        <ArrowRight className="h-4 w-4 md:h-6 md:w-6" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent align="start" side="bottom">
                                    <div className="flex items-center gap-1">
                                        <Image
                                            src={`/icons/${projects[nextProjectKey].key}.ico`}
                                            height={11}
                                            width={11}
                                            alt="website icon"
                                        />
                                        {projects[nextProjectKey].name}
                                    </div>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
