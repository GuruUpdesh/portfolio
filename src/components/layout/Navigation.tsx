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
import { projectOrder, projects } from "@/config/projectConfig";

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
                        {projectOrder.map((key) => {
                            const project = projects[key];

                            return (
                                <Link
                                    href={`/projects/${project.key}`}
                                    className="whitespace-nowrap px-4 py-2 hover:bg-border/5"
                                    key={key}
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
