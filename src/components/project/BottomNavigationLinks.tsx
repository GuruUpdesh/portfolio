import React from "react";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { ProjectKey, projects } from "@/config/projectConfig";

type Props = {
    previousProjectKey: ProjectKey;
    nextProjectKey: ProjectKey;
};

const BottomNavigationLinks = ({
    previousProjectKey,
    nextProjectKey,
}: Props) => {
    return (
        <>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href={`/projects/${previousProjectKey}`}
                            className="animated-underline flex items-center gap-4 text-lg sm:text-xl opacity-75 transition-opacity after:bottom-0 after:right-0 hover:opacity-100 md:text-2xl md:after:bottom-1 lg:text-4xl"
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
                                alt=""
                            />
                            {projects[previousProjectKey].name}
                        </div>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href={`/projects/${nextProjectKey}`}
                            className="animated-underline flex items-center gap-4 text-lg sm:text-xl opacity-75 transition-opacity after:bottom-0 after:left-0 hover:opacity-100 md:text-2xl md:after:bottom-1 lg:text-4xl"
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
                                alt=""
                            />
                            {projects[nextProjectKey].name}
                        </div>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </>
    );
};

export default BottomNavigationLinks;
