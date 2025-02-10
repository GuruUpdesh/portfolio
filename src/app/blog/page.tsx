import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { posts } from "@/config/blogConfig";
import CursorTracker from "@/components/CursorTracker";

export default function PostsPage() {
    return (
        <CursorTracker className="h-full group/grid">
            {posts.map((p) => (
                <Link key={p.id} href={`/blog/${p.id}`} className="group relative rounded-lg">
                    <div className="p-4 rounded-lg bg-background z-20">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl">{p.title}</h1>
                            <ArrowRight className="h-4 w-4" />
                        </div>
                        <p className="text-sm opacity-70">{p.date}</p> 
                    </div>
                    {/* <div className="-z-10 pointer-events-none absolute left-[var(--x)] top-[var(--y)] h-[300px] w-[300px] translate-x-[-50%] translate-y-[-50%] bg-background opacity-0 blur-3xl transition-opacity duration-300 md:group-hover/grid:opacity-100" /> */}
                    <div className="animated-border -z-20 w-full h-full absolute top-0 before:opacity-0 group-hover:before:opacity-100 group-focus:before:opacity-100 before:transition-opacity"/>
                </Link>
            ))}

           
        </CursorTracker>
    );
}