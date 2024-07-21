// adapted from Stephie  https://www.youtube.com/watch?v=pr-PzWkrif0&t=141s

import { list } from "@vercel/blob";

async function VideoComponent({ filename }: { filename: string }) {
    const { blobs } = await list({
        prefix: `Portfolio/${filename}`,
        limit: 1,
    });

    console.log(blobs);

    const { url } = blobs[0];

    return (
        <div className="flex p-5 h-[600px] items-center justify-center overflow-hidden">
            <video
                playsInline
                controls
                preload="none"
                aria-label=""
                className="h-full w-full"
            >
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default VideoComponent;
