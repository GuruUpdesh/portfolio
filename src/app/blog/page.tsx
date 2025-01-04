import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { posts } from "@/config/blogConfig";

export default function PostsPage() {
    return (
        <>
            {posts.map((p) => (
                <Link key={p.id} href={`/blog/${p.id}`} className="group">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl">{p.title}</h1>
                        <ArrowRight className="h-4 w-4 opacity-50 group-hover:opacity-100 group-focus-visible:opacity-100" />
                    </div>
                    <p className="text-sm opacity-70">{p.date}</p> 
                </Link>
            ))}
        </>
    );
}