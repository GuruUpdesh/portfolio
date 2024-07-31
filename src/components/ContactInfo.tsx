import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    ArrowTopRightIcon,
    ChatBubbleIcon,
    GitHubLogoIcon,
    LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { FaDiscord } from "react-icons/fa";
import { Download } from "lucide-react";

const ContactInfo = () => {
    return (
        <div className="flex h-full flex-col justify-between gap-4">
            <p className="text-sm text-muted-foreground xl:text-base xl:leading-8">
                Whether you&apos;re a developer, recruiter, student, or anyone
                in between, I&apos;m always eager to discuss tech! Let&apos;s
                connect and explore how we can create something great together.
            </p>
            <div>
                <h3>Email me</h3>
                <p className="text-sm font-light text-muted-foreground">
                    guruupdeshsingh@gmail.com
                </p>
            </div>
            <div>
                <h3>Work experience</h3>
                <Link
                    href="/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Resume"
                    className="flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-primary"
                >
                    <Download className="h-4 w-4" />
                    Resume
                </Link>
            </div>
            <div>
                <h3 className="mb-2">Follow me</h3>
                <ul className="flex flex-col gap-2" aria-label="Social links">
                    <li>
                        <SocialLink
                            name="GitHub"
                            link="https://github.com/GuruUpdesh"
                        >
                            <GitHubLogoIcon className="h-4 w-4" />
                        </SocialLink>
                    </li>
                    <li>
                        <SocialLink
                            name="LinkedIn"
                            link="https://www.linkedin.com/in/guru-updesh-singh-789050218"
                        >
                            <LinkedInLogoIcon className="h-4 w-4" />
                        </SocialLink>
                    </li>
                    <li>
                        <SocialLink
                            name="Discord"
                            link="https://discord.com/channels/.gsingh"
                        >
                            <FaDiscord className="h-4 w-4" />
                        </SocialLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

type Link = {
    name: string;
    link: string;
    children: React.ReactNode;
};

const SocialLink = ({ name, link, children }: Link) => {
    return (
        <Link
            href={link}
            target="_blank"
            className="group flex items-center gap-2 text-sm font-light text-muted-foreground transition-all hover:text-primary"
            aria-label={name}
        >
            <span className="flex items-center gap-2 transition-[padding] group-hover:pl-1">
                {children}
                {name}
            </span>
            <ArrowTopRightIcon className="scale-0 opacity-0 transition-all ease-out-expo group-hover:scale-100 group-hover:opacity-100" />
        </Link>
    );
};

export default ContactInfo;
