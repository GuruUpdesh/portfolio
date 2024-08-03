import StickyHeader from "@/components/layout/StickyHeader";
import ProjectHeader from "@/components/layout/ProjectHeader";
import ProjectLinks from "@/components/project/ProjectLinks";
import VideoPlayer from "@/components/project/VideoPlayer";
import ProjectDivider from "@/components/layout/dividers/ProjectDivider";
import Image from "next/image";
import Gallery from "@/components/project/Gallery";
import ProjectSecondaryDivider from "@/components/layout/dividers/ProjectSecondaryDivider";
import { notFound } from "next/navigation";
import TechStackContainer from "@/components/project/TechStackContainer";
import GitHubStars from "@/components/project/analytics/GitHubStars";
import GitHubFiles from "@/components/project/analytics/GitHubFiles";
import VercelVisitors from "@/components/project/analytics/VercelVisitors";
import { Suspense } from "react";
import BottomNavigationLinks from "@/components/project/BottomNavigationLinks";
import Footer from "@/components/layout/Footer";
import {
    getNextProjectKey,
    getPreviousProjectKey,
    isValidProjectKey,
    projects,
} from "@/config/projectConfig";
import "./typography.css";
import "./techstack.css";

type Props = {
    params: {
        key: string;
    };
};

export async function generateMetadata({ params: { key } }: Props) {
    if (!isValidProjectKey(key)) {
        return {
            title: "Guru Updesh Singh - Full Stack Developer",
        };
    }

    const project = projects[key];

    return {
        title: `Guru Updesh Singh - ${project.name}`,
        description: project.content.shortDescription
    };
}

export default function Project({ params: { key } }: Props) {
    if (!isValidProjectKey(key)) {
        notFound();
    }

    const project = projects[key];
    const nextProjectKey = getNextProjectKey(key);
    const previousProjectKey = getPreviousProjectKey(key);

    return (
        <main className="flex w-full flex-col items-center overflow-clip px-[1px] sm:px-5">
            <StickyHeader>
                <ProjectHeader project={project} />
            </StickyHeader>
            <section className="mt-0 w-full max-w-[1400px] rounded-b-[80px] rounded-t-[40px] border border-b-0 bg-gradient-to-b from-primary/5 to-background lg:mt-6 lg:rounded-t-[80px]">
                <div className="p-5 !pb-0 transition-all lg:p-20">
                    {project.videoFileName ? (
                        <VideoPlayer url={project.videoFileName} />
                    ) : project.embed ? (
                        <iframe
                            src={project.embed}
                            allowFullScreen
                            width="100%"
                            className="aspect-video overflow-hidden rounded-[20px] bg-[#fafafa] shadow-2xl transition-all dark:bg-[#0A0A0A] lg:rounded-t-[40px]"
                        ></iframe>
                    ) : null}
                </div>
                <ProjectDivider className="relative rounded-b-[80px] border border-l-0 border-r-0 border-t-0">
                    <div className="absolute -z-30 h-full w-full bg-background" />
                    <div className="flex flex-col-reverse gap-4 px-5 py-10 transition-all lg:flex-row lg:gap-2 lg:px-20">
                        <div className="paragraph">
                            {project.content.shortDescription}
                        </div>
                        <div className="flex items-start justify-end gap-2">
                            <ProjectLinks project={project} />
                        </div>
                    </div>
                </ProjectDivider>
            </section>
            <section className="section-base mt-[-1px] px-20">
                <ProjectSecondaryDivider className="w-full rounded-b-[60px] border border-t-0 border-transparent px-20 py-8 transition-all sm:border-border md:py-16" />
            </section>
            <section className="relative w-full px-4">
                <Gallery images={project.images} projectKey={project.key} />
                <div className="absolute left-0 top-0 -z-10 hidden h-full w-full overflow-clip opacity-20 blur-[100px] md:block">
                    <div className="absolute left-[-50%] top-[-50%] h-[200%] w-[200%]">
                        <Image
                            fill
                            src="/logo.webp"
                            alt=""
                            className="animate-spin-slow blur-lg grayscale"
                        />
                    </div>
                </div>
            </section>
            <section className="section-base mt-[-1px] px-20">
                <ProjectSecondaryDivider className="w-full rounded-b-[60px] border border-t-0 border-transparent px-20 py-8 transition-all sm:border-border md:py-16" />
            </section>
            <section
                id="2"
                className="w-full max-w-[1400px] rounded-b-[40px] border border-t-0"
            >
                <div className="relative flex w-full flex-col items-center gap-32 px-5 transition-all lg:px-20 xl:px-40">
                    <div className="mt-10 flex max-w-[690px] flex-col gap-32 md:mt-20">
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
                        <BottomNavigationLinks
                            nextProjectKey={nextProjectKey}
                            previousProjectKey={previousProjectKey}
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
