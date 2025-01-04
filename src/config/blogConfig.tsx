import startingOSUCapstone from "./posts/startingOSUCapstone";

export type BlogPost = {
    id: string;
    title: string;
    date: string;
    content: React.ReactNode;
}

export const posts = [
    startingOSUCapstone,
];

export function getPost(id: string) {
    return posts.find((p) => p.id === id);
}