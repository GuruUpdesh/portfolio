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
                    <NavigationMenuTrigger className="text-sm font-normal opacity-75 px-2">
                        <Menu />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="flex flex-col gap-2">
                        {projectOrder.map((key) => {
                            const project = projects[key];

                            return (
                                <Link
                                    href={`/projects/${project.key}`}
                                    className="whitespace-nowrap px-4 py-2 hover:bg-border/5 flex items-center gap-2"
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
