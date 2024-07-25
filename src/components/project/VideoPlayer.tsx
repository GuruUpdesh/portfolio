"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { Slider } from "../ui/slider";
import * as SliderPrimitive from "@radix-ui/react-slider";
import {
    Volume,
    Volume1,
    Volume2,
    VolumeX,
    Maximize2,
    Minimize2,
} from "lucide-react";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";

type Props = {
    url: string;
};

const VideoPlayer = ({ url }: Props) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const [uiProgress, setUiProgress] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [progress, setProgress] = useState(0);

    const [buffered, setBuffered] = useState<{ start: number; end: number }[]>(
        [],
    );

    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);

    const [isFullscreen, setIsFullscreen] = useState(false);

    const [hoverTime, setHoverTime] = useState<{
        time: number;
        position: number;
    } | null>(null);

    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const updateProgress = () => {
            const newProgress = (video.currentTime / video.duration) * 100;
            setProgress(newProgress);
            if (!isDragging) {
                setUiProgress(newProgress);
            }
            setCurrentTime(video.currentTime);
        };

        const updateBuffer = () => {
            const bufferRanges = [];
            for (let i = 0; i < video.buffered.length; i++) {
                bufferRanges.push({
                    start: (video.buffered.start(i) / video.duration) * 100,
                    end: (video.buffered.end(i) / video.duration) * 100,
                });
            }
            setBuffered(bufferRanges);
        };

        updateProgress();
        updateBuffer();

        if (video.duration !== Infinity) {
            setDuration(video.duration);
        }

        video.addEventListener("timeupdate", updateProgress);
        video.addEventListener("progress", updateBuffer);

        return () => {
            video.removeEventListener("timeupdate", updateProgress);
            video.removeEventListener("progress", updateBuffer);
        };
    }, [url, isDragging]);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleProgressChange = (value: number[]) => {
        setIsDragging(true);
        setUiProgress(value[0]);
    };

    const handleProgressCommit = (value: number[]) => {
        if (videoRef.current) {
            const newTime = (value[0] / 100) * videoRef.current.duration;
            videoRef.current.currentTime = newTime;
        }
        setIsDragging(false);
    };

    const handleVolumeChange = (value: number[]) => {
        if (videoRef.current) {
            const newVolume = value[0] / 100;
            videoRef.current.volume = newVolume;
            setVolume(newVolume);
            setIsMuted(newVolume === 0);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
            if (isMuted) {
                setVolume(videoRef.current.volume);
            } else {
                setVolume(0);
            }
        }
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            containerRef.current?.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    const handleSliderHover = (event: React.MouseEvent<HTMLDivElement>) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - bounds.left;
        const percentage = (x / bounds.width) * 100;
        const time = (percentage / 100) * duration;
        setHoverTime({ time, position: x });
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    const VolumeIcon = () => {
        if (isMuted || volume === 0) return <VolumeX className="h-4 w-4" />;
        if (volume < 0.33) return <Volume className="h-4 w-4" />;
        if (volume < 0.66) return <Volume1 className="h-4 w-4" />;
        return <Volume2 className="h-4 w-4" />;
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "group relative z-10 flex aspect-video w-full items-center justify-center overflow-hidden border border-transparent bg-[#fafafa] transition-all dark:bg-[#0A0A0A]",
                {
                    "rounded-[40px] rounded-b-[20px] border-border":
                        !isFullscreen,
                },
            )}
        >
            <video
                ref={videoRef}
                playsInline
                preload="metadata"
                aria-label=""
                className="h-full w-full"
                onClick={togglePlay}
            >
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-5 mt-4 w-full items-center space-x-4 px-5">
                <div className="flex w-full items-center rounded-lg border border-border/5 bg-border/5 opacity-0 backdrop-blur-2xl transition-opacity group-hover:opacity-100">
                    <Button variant="ghost" size="icon" onClick={togglePlay}>
                        {isPlaying ? <FaPause /> : <FaPlay />}
                    </Button>
                    <p className="w-[3ch] text-xs text-muted-foreground">
                        {formatTime(currentTime)}
                    </p>
                    <div
                        className="relative mx-2 flex-1"
                        onMouseMove={handleSliderHover}
                        onMouseLeave={() => setHoverTime(null)}
                    >
                        {buffered.map((range, index) => (
                            <div
                                key={index}
                                className="absolute h-full bg-muted-foreground/10"
                                style={{
                                    left: `${range.start}%`,
                                    width: `${range.end - range.start}%`,
                                }}
                            />
                        ))}
                        <Slider
                            max={100}
                            step={0.1}
                            value={[uiProgress]}
                            onValueChange={handleProgressChange}
                            onValueCommit={handleProgressCommit}
                        />
                        {hoverTime && (
                            <div
                                className="absolute bottom-full left-0 mb-2 rounded border border-border/10 bg-background px-2 py-1 text-xs"
                                style={{
                                    left: `${hoverTime.position}px`,
                                    transform: "translateX(-50%)",
                                }}
                            >
                                {formatTime(hoverTime.time)}
                            </div>
                        )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                        {formatTime(duration)}
                    </p>
                    <Button variant="ghost" size="icon" onClick={toggleMute}>
                        <VolumeIcon />
                    </Button>
                    <Slider
                        max={100}
                        step={1}
                        value={[volume * 100]}
                        onValueChange={(value) => handleVolumeChange(value)}
                        className="w-24"
                    />
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleFullscreen}
                    >
                        {isFullscreen ? (
                            <Minimize2 className="h-4 w-4" />
                        ) : (
                            <Maximize2 className="h-4 w-4" />
                        )}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
