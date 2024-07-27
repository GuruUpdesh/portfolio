// adapted from Stephie  https://www.youtube.com/watch?v=pr-PzWkrif0&t=141s

import { list } from "@vercel/blob";
import VideoPlayer from "./VideoPlayer";

async function VideoComponent({ filename }: { filename: string }) {
    // const { blobs } = await list({
    //     prefix: `Portfolio/${filename}`,
    //     limit: 1,
    // });

    // console.log(blobs);

    // const { url } = blobs[0];

    return <VideoPlayer url={filename} />;
}

export default VideoComponent;
