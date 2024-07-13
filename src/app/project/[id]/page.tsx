import ProjectDivider from "@/components/layout/ProjectDivider";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import "./techstack.css";
import TechStackContainer from "@/components/project/TechStackContainer";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

type Props = {
    params: {
        id: string;
    };
};

export default function Project({ params: { id } }: Props) {
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
                        <h1 className="inline-block text-2xl">TrackIt</h1>
                        <p className="ml-2 inline-block text-lg opacity-75">
                            2023
                        </p>
                    </div>
                    <div className="group flex flex-1 items-center justify-end gap-2">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="outline" className="gap-1">
                                        <ArrowLeft className="h-4 w-4 opacity-75 transition-opacity group-hover:opacity-100" />
                                        <span className="opacity-75 transition-opacity group-hover:opacity-100">
                                            Shipment Tracker
                                        </span>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Previous Project</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="outline" className="gap-1">
                                        <span className="opacity-75 transition-opacity group-hover:opacity-100">
                                            Taskly
                                        </span>
                                        <ArrowRight className="h-4 w-4 opacity-75 transition-opacity group-hover:opacity-100" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Next Project</p>
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
                <p>
                    TrackIt is a web-based application that simplifies shipment
                    tracking by providing a unified platform to monitor your
                    packages&apos; status and journey, across various couriers.
                </p>
                <div className="flex items-center gap-2">
                    <Button className="rounded-full">Visit</Button>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="group flex items-center gap-2 rounded-full px-2 lg:px-3"
                                >
                                    <GitHubLogoIcon className="h-5 w-5 transition-opacity" />
                                    <span className="hidden transition-opacity lg:block">
                                        GitHub
                                    </span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Check out my GitHub</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </section>
            <ProjectDivider className="relative w-full max-w-[1360px] rounded-b-[80px] border border-t-0 px-40 pb-40" />
            <section className="relative w-full max-w-[1360px] px-40 py-2">
                <ul className="grid grid-cols-3 gap-2">
                    <li className="rounded-lg bg-border/5 p-4">
                        <h3 className="font-semibold">
                            Centralized Tracking Dashboard
                        </h3>
                        <p className="font-light opacity-75">
                            Consolidated view of shipments and their current
                            statuses.
                        </p>
                    </li>
                    <li className="rounded-lg bg-border/5 p-4">
                        <h3 className="font-semibold">Multi-Courier Support</h3>
                        <p className="font-light opacity-75">
                            Tracking support for UPS, USPS, FedEx, OnTrac, and
                            more.
                        </p>
                    </li>
                    <li className="rounded-lg bg-border/5 p-4">
                        <h3 className="font-semibold">
                            Detailed Tracking History
                        </h3>
                        <p className="font-light opacity-75">
                            View status, location, and date information for each
                            shipment.
                        </p>
                    </li>
                    <li className="rounded-lg bg-border/5 p-4">
                        <h3 className="font-semibold">Easy Management</h3>
                        <p className="font-light opacity-75">
                            Add, delete, and update your shipments with ease.
                        </p>
                    </li>
                    <li className="rounded-lg bg-border/5 p-4">
                        <h3 className="font-semibold">
                            Clear and easy to understand UI
                        </h3>
                        <p className="font-light opacity-75">
                            Intuitive and responsive design for a seamless user
                            experience. With mobile support for tracking on the
                            go.
                        </p>
                    </li>
                    <li className="rounded-lg bg-border/5 p-4">
                        <h3 className="font-semibold">Power User Features</h3>
                        <p className="font-light opacity-75">
                            Search and filter functionality, undo accidental
                            deletions, shortcuts, and links to courier websites.
                        </p>
                    </li>
                </ul>
            </section>
            <section className="relative grid min-h-[500px] w-full max-w-[1360px] grid-cols-2 px-40 py-2">
                <TechStackContainer />
            </section>
            <Footer />
        </main>
    );
}
