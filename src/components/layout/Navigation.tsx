"use client";

import React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {
    allProjects,
    getProjectFromId,
} from "@/app/project/[id]/config/projectConfig";

const Navigation = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="#projects" legacyBehavior scroll={true}>
                        <NavigationMenuTrigger className="text-sm font-normal opacity-75">
                            Projects
                        </NavigationMenuTrigger>
                    </Link>
                    <NavigationMenuContent className="flex flex-col gap-2">
                        {allProjects.map((projectId) => {
                            const project = getProjectFromId(
                                parseInt(projectId),
                            );

                            return (
                                <Link
                                    href={`/project/${project.id}`}
                                    className="whitespace-nowrap px-4 py-2 hover:bg-border/5"
                                    key={projectId}
                                >
                                    {project.name}
                                </Link>
                            );
                        })}
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="text-sm opacity-75">
                    <Link href="#contact" passHref legacyBehavior scroll={true}>
                        <NavigationMenuLink>Contact</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default Navigation;
