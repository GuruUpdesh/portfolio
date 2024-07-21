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
    getProjectFromId,
    totalProjects,
} from "@/app/project/[id]/config/projectConfig";
import GitHubStars from "@/components/project/analytics/GitHubStars";
import { Suspense } from "react";
import GitHubFiles from "@/components/project/analytics/GitHubFiles";
import VercelVisitors from "@/components/project/analytics/VercelVisitors";
import Image from "next/image";
import Gallery from "@/components/project/Gallery";

type Props = {
    params: {
        id: string;
    };
};

export default function Project({ params: { id } }: Props) {
    const project = getProjectFromId(parseInt(id));
    return (
        <>
            <header className="sticky top-0 z-20 flex w-full justify-center bg-background/50 px-5 py-4 backdrop-blur-xl transition-all sm:px-10 md:px-20">
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
                                    <Link
                                        href={`/project/${((parseInt(id) - 2 + totalProjects) % totalProjects) + 1}`}
                                    >
                                        <Button variant="ghost" size="icon">
                                            <ChevronUp className="h-4 w-4 opacity-75 transition-opacity group-hover:opacity-100" />
                                        </Button>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>
                                        {
                                            getProjectFromId(
                                                ((parseInt(id) -
                                                    2 +
                                                    totalProjects) %
                                                    totalProjects) +
                                                    1,
                                            ).name
                                        }
                                    </p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={`/project/${(parseInt(id) % totalProjects) + 1}`}
                                    >
                                        <Button variant="ghost" size="icon">
                                            <ChevronDown className="h-4 w-4 opacity-75 transition-opacity group-hover:opacity-100" />
                                        </Button>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>
                                        {
                                            getProjectFromId(
                                                (parseInt(id) % totalProjects) +
                                                    1,
                                            ).name
                                        }
                                    </p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
            </header>
            <div className="overflow-hidden w-full flex justify-center">
                <main
                    id="1"
                    className="transition-all sm:px-10 md:px-20"
                >
                    <section className="mb-8 w-full max-w-[1360px] px-5 transition-all lg:px-20 xl:px-40">
                        <div className="relative z-10 flex aspect-video w-full items-center justify-center overflow-hidden rounded-[40px] rounded-b-[20px] border bg-[#0A0A0A]">
                            <video
                                autoPlay
                                muted
                                playsInline
                                controls
                                loop
                                preload="none"
                                aria-label=""
                            >
                                <source
                                    src="/projects/trackit/demo.mp4"
                                    type="video/mp4"
                                />
                                Your borwser does not support the video tag.
                            </video>
                            <Play className="h-10 w-10" />
                        </div>
                    </section>
                    <section className="flex w-full max-w-[1360px] flex-col-reverse gap-2 px-5 transition-all lg:flex-row lg:px-20 xl:px-40">
                        <p className="font-light leading-7">
                            {project.content.shortDescription}
                        </p>
                        <div className="flex items-center justify-end gap-2">
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
                                        <p>See on GitHub</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            {project.websiteLink ? (
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Link
                                                href={project.gitHubLink}
                                                target="_blank"
                                            >
                                                <Link
                                                    href={project.websiteLink}
                                                    target="_blank"
                                                >
                                                    <Button className="rounded-full px-2.5 lg:px-3">
                                                        <span>Visit</span>
                                                    </Button>
                                                </Link>
                                            </Link>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Visit {project.websiteLink}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            ) : null}
                        </div>
                    </section>
                    <ProjectDivider className="relative w-full max-w-[1360px] rounded-b-[80px] border border-t-0 px-40 pb-40" />
                </main>
            </div>
            <section className="w-full px-5">
                <Gallery images={project.images} />
            </section>
            <main id="2" className="transition-all sm:px-10 md:px-20">
                <section className="relative flex w-full max-w-[1360px] flex-col gap-16 px-5 py-6 transition-all lg:px-20 xl:px-40">
                    {project.content.detailedContent}
                    <div>
                        <h1 className="py-2 text-2xl">Features</h1>
                        <ul className="grid grid-cols-2 gap-2 lg:grid-cols-4">
                            {project.content.features.map((feature, i) => (
                                <li
                                    key={i}
                                    className="overflow-hidden whitespace-nowrap rounded-lg bg-border/5 p-4 pr-0"
                                >
                                    <h3 className="font-semibold">{feature}</h3>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <TechStackContainer techStack={project.techStack} />
                    <div>
                        <h1 className="py-2 text-2xl">Analytics</h1>
                        <ul className="grid grid-cols-1 gap-2 md:grid-cols-3">
                            {project.vercelProjectId ? (
                                <li className="flex items-baseline gap-2 rounded-lg bg-border/5 p-4">
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
                            <li className="flex items-baseline gap-2 rounded-lg bg-border/5 p-4">
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
                            <li className="flex items-baseline gap-2 rounded-lg bg-border/5 p-4">
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
                    <div className="flex w-full justify-between gap-4">
                        <Link
                            href={`/project/${((parseInt(id) - 2 + totalProjects) % totalProjects) + 1}`}
                            className="flex items-center gap-4 text-4xl"
                        >
                            <ArrowLeft />
                            Last Project
                        </Link>
                        <Link
                            href={`/project/${(parseInt(id) % totalProjects) + 1}`}
                            className="flex items-center gap-4 text-4xl"
                        >
                            Next Project
                            <ArrowRight />
                        </Link>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    );
}
