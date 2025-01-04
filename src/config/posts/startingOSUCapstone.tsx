import { cn } from "@/lib/utils";
import { BlogPost } from "../blogConfig";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400"] });

export default {
    id: "1",
    title: "Starting OSU Capstone",
    date: "September 2023",
    content: (
        <>
            <div>
                <h2 className={cn("mb-2 text-lg", spaceMono.className)}>~/$: init blog --start=capstone_journey</h2>
                <p className="font-light !leading-8 text-sm md:text-base">
                    Three years into my computer science journey, and it feels like I've been perpetually stuck at the "starting line." Every new endeavor – whether it was my first lines of code, building that first website, a short-lived personal project, or stepping into my internship and later a job – everything felt like a new beginning. And here we are, another inception: capstone.
                    Most introductions start with the basics: "Hey, I'm so-and-so, doing this-and-that." There's nothing wrong with the approach, but I'm going to try something else.
                </p>
            </div>

            <div>
                <h2 className={cn("mb-2 text-lg", spaceMono.className)}>~/$: why --computer_science</h2>
                <p className="font-light !leading-8 text-sm md:text-base">
                    Why did I even choose computer science? It's amusing because, back in high school, the extent of my computer usage was limited to drafting essays on Google Docs. A major had to be chosen, and the options on my table were mechanical engineering, physics, or computer science. In retrospect, it seems like such an organic choice, almost destined. It's weird how things align, isn't it?
                </p>
            </div>

            <div>
                <h2 className={cn("mb-2 text-lg", spaceMono.className)}>~/$: ./intuition.py</h2>
                <p className="font-light !leading-8 text-sm md:text-base">
                    (wait python's slow just give it a sec)
                    (ok…)
                    (almost…)
                    Right. Here's a bit of trivia about me: I'm dyslexic. English and I? Not the best buds. But software? That was my domain. At 11, I self-taught Photoshop and began creating with digital tools. Graphic design and applications felt like my native language. I had a phase with Photoshop, designed a few websites on Weebly, and even ran a little YouTube channel, good luck finding that one. Technology feels like magic, especially when it decides to cooperate. Remember the Wii? I was sure Mario Kart trained me for real-world driving. And as I venture into my final year, despite Leetcode, I feel like computer science is the right fit.
                </p>
            </div>

            <div>
                <h2 className={cn("mb-2 text-lg", spaceMono.className)}>~/$: explain --location</h2>
                <p className="font-light !leading-8 text-sm md:text-base">
                    Ah, Oregon. Where the weather has a mind of its own, oscillating between rain showers, a brief sunny interlude, and then back to its moody downpour. Occasionally, hail joins the party. This is where I grew up, and it's undeniably home.
                </p>
            </div>

            <div>
                <h2 className={cn("mb-2 text-lg", spaceMono.className)}>~/$: explain --hobbies</h2>
                <p className="font-light !leading-8 text-sm md:text-base">
                    Pickleball, anyone? I know… but it's fun, and playing it with family over the summer was a blast. Apart from that, I enjoy cooking, exercising, and tinkering with tech whenever I'm not on the verge of burnout.
                </p>
            </div>

            <div>
                <h2 className={cn("mb-2 text-lg", spaceMono.className)}>~/$: explain --job</h2>
                <p className="font-light !leading-8 text-sm md:text-base">
                    I've been working as a junior full-stack developer for a year. Imposter syndrome has come and gone about 5 times, but all in all, it's been really fun, and I've learned and grown as a developer significantly while simultaneously getting paid… which is always nice. I work part-time, and hours fluctuate weekly depending on how much time I spend doing school. Like this blog post, some tasks just take a tad longer than expected.
                </p>
            </div>

            <div>
                <h2 className={cn("mb-2 text-lg", spaceMono.className)}>~/$: explain --me</h2>
                <p className="font-light !leading-8 text-sm md:text-base">
                    I'm Guru Updesh Singh, a 21-year-old computer science student at OSU focusing on cyber security and working in full-stack development.
                    ohhh look, we did it backwards (sooo creative)
                </p>
            </div>

            <div>
                <h2 className={cn("mb-2 text-lg", spaceMono.className)}>~/$: ./capstone</h2>
                <p className="font-light !leading-8 text-sm md:text-base">
                    The projects I'm most interested in are the full-stack ones. I've really been enjoying working on web applications with a user focus, and my graphic design experiences and development skills get to play together to create something useful and easy to use. I'm also really excited to work with a team of like-minded students and deliver a software product to stakeholders. I don't know what to expect from capstone, but I will keep you all updated. If you got this far, thanks for reading, and if you, too, are in capstone or starting it soon, I wish you the best of luck.
                </p>
            </div>

            <div>
                <h2 className={cn("text-lg", spaceMono.className)}>ctrl + c</h2>
            </div>
        </>
    )
} satisfies BlogPost;