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
import { getProjectFromId, totalProjects } from "@/projectConfig";
import GitHubStars from "@/components/project/analytics/GitHubStars";
import { Suspense } from "react";
import GitHubFiles from "@/components/project/analytics/GitHubFiles";
import VercelVisitors from "@/components/project/analytics/VercelVisitors";
import Image from "next/image";

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
                <div className="flex w-full max-w-[1360px] items-center gap-2 px-40">
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
            <main className="relative flex min-h-screen w-full flex-col items-center overflow-hidden px-5 transition-all sm:px-10 md:px-20">
                <section className="mb-8 w-full max-w-[1360px] px-40">
                    <div className="relative z-10 flex aspect-video w-full items-center justify-center rounded-[40px] border bg-[#0A0A0A]">
                        <Play className="h-10 w-10" />
                    </div>
                </section>
                <section className="flex w-full max-w-[1360px] px-40">
                    <p className="font-light leading-7">
                        {project.content.shortDescription}
                    </p>
                    <div className="ml-2 flex items-center gap-2">
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
                        {project.websiteLink ? (
                            <Link href={project.websiteLink} target="_blank">
                                <Button className="rounded-full">Visit</Button>
                            </Link>
                        ) : null}
                    </div>
                </section>
                <ProjectDivider className="relative w-full max-w-[1360px] rounded-b-[80px] border border-t-0 px-40 pb-40" />
                <div className="my-10 grid h-[800px] w-full grid-cols-4 grid-rows-2 gap-2">
                    <div className="relative col-span-3 overflow-hidden rounded-lg bg-border/5">
                        <Image
                            src="/projects/taskly/homepage.png"
                            fill
                            className="object-cover object-top"
                            alt=""
                        />
                    </div>
                    <div className="relative overflow-hidden rounded-lg bg-border/5">
                        <Image
                            src="/projects/taskly/homepage.png"
                            fill
                            className="object-cover object-top"
                            alt=""
                        />
                    </div>
                    <div className="relative overflow-hidden rounded-lg bg-border/5">
                        <Image
                            src="/projects/taskly/homepage.png"
                            fill
                            className="object-cover object-top"
                            alt=""
                        />
                    </div>
                    <div className="relative col-span-3 overflow-hidden rounded-lg bg-border/5">
                        <Image
                            src="/projects/taskly/homepage.png"
                            fill
                            className="object-cover object-top"
                            alt=""
                        />
                    </div>
                </div>
                <section className="relative w-full max-w-[1360px] px-40 py-6">
                    {project.content.detailedContent}
                    <div className="mb-16">
                        <h1 className="py-2 text-2xl">Features</h1>
                        <ul className="grid grid-cols-4 gap-2">
                            {project.content.features.map((feature, i) => (
                                <li
                                    key={i}
                                    className="rounded-lg bg-border/5 p-4"
                                >
                                    <h3 className="font-semibold">{feature}</h3>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h1 className="py-2 text-2xl">Analytics</h1>
                        <ul className="grid grid-cols-3 gap-2">
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
                                    <p className="flex-1 text-right text-sm font-normal opacity-75">
                                        This Month
                                    </p>
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
                </section>
                <section className="section-base grid grid-cols-2 px-40">
                    <TechStackContainer techStack={project.techStack} />
                </section>
                <Footer />
            </main>
        </>
    );
}
