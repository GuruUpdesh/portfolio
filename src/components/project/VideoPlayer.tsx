import React from "react";

type Props = {
    url: string;
};

const VideoPlayer = ({ url }: Props) => {
    return (
        <div className="group relative z-10 flex aspect-video w-full items-center justify-center overflow-hidden rounded-[20px] border border-border bg-[#fafafa] transition-all dark:bg-[#0A0A0A] lg:rounded-t-[40px]">
            <video
                playsInline
                controls
                preload="metadata"
                aria-label=""
                className="h-full w-full"
            >
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;
