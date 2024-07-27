"use client";

import React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { projectOrder, projects } from "@/config/projectConfig";
import { Menu } from "lucide-react";
import Image from "next/image";

const Navigation = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="px-2 text-sm font-normal opacity-75">
                        <Menu />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="flex flex-col gap-2">
                        {projectOrder.map((key) => {
                            const project = projects[key];

                            return (
                                <Link
                                    href={`/projects/${project.key}`}
                                    className="flex items-center gap-2 whitespace-nowrap px-4 py-2 hover:bg-border/5"
                                    key={key}
                                >
                                    <Image
                                        src={`/icons/${project.key}.ico`}
                                        height={16}
                                        width={16}
                                        alt="website icon"
                                    />
                                    {project.name}
                                </Link>
                            );
                        })}
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default Navigation;
