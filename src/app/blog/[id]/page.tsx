import React from "react";
import { posts } from "@/config/blogConfig";


type Params = {
	params: {
		id: string;
	};
};

export default function PostPage({params: {id}}: Params) {
    const post = posts.find(p => p.id === id);

    if (!post) {
        return <p>This blog post is not a thing...</p>
    }

    return (
        <div>
            <h1 className="text-5xl">{post.title}</h1>
            <p className="text-sm opacity-70">{post.date}</p>
            <section className="flex flex-col items-center gap-16 mt-16">
                {post.content}
            </section> 
        </div>
    );
}