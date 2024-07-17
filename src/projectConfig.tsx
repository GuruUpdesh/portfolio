import Image from "next/image";
import React from "react";
import { Separator } from "./components/ui/separator";

type Project = {
    id: number;
    name: string;
    year: number;
    gitHubLink: string;
    vercelProjectId?: string;
    websiteLink?: string;
    content: ProjectContent;
    techStack: TechStack;
    contributors: string[];
};

type ProjectContent = {
    shortDescription: React.ReactNode;
    detailedContent: React.ReactNode;
    features: string[];
};

export type TechStackCategory =
    | "frontend"
    | "state"
    | "backend"
    | "testing"
    | "tools";
type Tech = {
    name: Technology;
    version?: string;
};
export type TechStack = {
    [category in TechStackCategory]: Tech[];
};

const Taskly: Project = {
    id: 1,
    name: "Taskly",
    year: 2024,
    gitHubLink: "https://github.com/GuruUpdesh/taskly",
    vercelProjectId: "prj_6h9v6l7IyIi8H19zikijisuuhpOI",
    websiteLink: "https://www.tasklypm.com",
    content: {
        shortDescription: (
            <p>
                Taskly is a project management web application developed for our
                senior capstone over nine months. It offers a streamlined,
                clutter-free Agile solution, ideal for small teams or startups.{" "}
            </p>
        ),
        detailedContent: (
            <>
                {/* <div className="mb-5">
                    <ul className="grid grid-cols-3 gap-2">
                        <li className="flex items-center gap-2 rounded-lg bg-border/5 p-4">
                            <Image
                                height={25}
                                width={25}
                                src="https://avatars.githubusercontent.com/u/62634868?v=4"
                                alt="abstract github user profile"
                                className="rounded-full"
                            />
                            Guru Updesh Singh
                            <span className="opacity-80">(me)</span>
                        </li>
                        {[
                            {
                                name: "Cameron Hollis",
                                pp: "https://avatars.githubusercontent.com/u/91680178?v=4",
                            },
                            {
                                name: "Yash Sankanagouda",
                                pp: "https://avatars.githubusercontent.com/u/81050950?v=4",
                            },
                        ].map((c, i) => (
                            <li
                                key={i}
                                className="flex items-center gap-2 rounded-lg bg-border/5 p-4"
                            >
                                <Image
                                    height={25}
                                    width={25}
                                    src={c.pp}
                                    alt="abstract github user profile"
                                    className="rounded-full"
                                />
                                {c.name}
                            </li>
                        ))}
                    </ul>
                </div> */}
                <div className="mb-16">
                    <h1 className="mb-2 text-2xl">Challenges We Solved</h1>
                    <p className="font-light leading-7 opacity-75">
                        Agile project management tools are often complex and
                        feature-heavy, leading to inefficiencies and steep
                        learning curves—hindrances particularly acute for small
                        businesses. Taskly was born from a need for a
                        straightforward tool that reduces onboarding time and
                        the potential for human error, thus enhancing project
                        success rates. Our solution offers a minimalistic
                        interface that simplifies project management, making
                        Agile methodologies more accessible and reducing project
                        failure rates.
                    </p>
                    <p className="pt-5">
                        Our <i>opinionated</i> design approach emphasizes
                        simplicity to minimize learning curves and maximize
                        efficiency and success.
                    </p>
                </div>
                <div className="mb-16">
                    <h1 className="mb-1 text-2xl">Development</h1>
                    <p className="mb-2">Nov 5, 2023 – Jun 15, 2024</p>
                    <p className="font-light leading-7 opacity-75">
                        The development of Taskly was divided into three key
                        phases: initial planning, active development, and
                        refinement. We leveraged Discord for team communication,
                        GitHub for source control, and conducted weekly meetings
                        to ensure alignment and resolve challenges. This process
                        taught me a lot about the dynamics of effective teamwork
                        and project management in a real-world setting.
                    </p>
                </div>
                <div className="mb-16">
                    <h1 className="mb-2 text-2xl">Design Decisions</h1>
                    <ul className="ml-4 flex flex-col gap-2 leading-7">
                        <li>
                            <strong className="font-normal">
                                - Simplified Settings:
                            </strong>
                            <span className="ml-[0.5ch] font-light opacity-75">
                                Limited customization options to reduce decision
                                fatigue.
                            </span>
                        </li>
                        <li>
                            <strong className="font-normal">
                                - Polling for Real-Time Updates:
                            </strong>
                            <span className="ml-[0.5ch] font-light opacity-75">
                                Chosen due to Vercel hosting constraints,
                                ensuring reliable real-time updates within
                                project timelines.
                            </span>
                        </li>
                        <li>
                            <strong className="font-normal">
                                - Streamlined Project Creation:
                            </strong>
                            <span className="ml-[0.5ch] font-light opacity-75">
                                Quick and intuitive setup through essential
                                steps.
                            </span>
                        </li>
                        <li>
                            <strong className="font-normal">
                                - Filter-Based Views:
                            </strong>
                            <span className="ml-[0.5ch] font-light opacity-75">
                                Primary mechanism for view customization,
                                enhancing user experience without added
                                complexity.
                            </span>
                        </li>
                        <li>
                            <strong className="font-normal">
                                - Modern Aesthetic:
                            </strong>
                            <span className="ml-[0.5ch] font-light opacity-75">
                                Transitioned to a dark color scheme for a
                                contemporary look.
                            </span>
                        </li>
                        <li>
                            <strong className="font-normal">
                                - Closed System:
                            </strong>
                            <span className="ml-[0.5ch] font-light opacity-75">
                                Opted against a public API to focus on core
                                functionalities and system integrity.
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="mb-16">
                    <h1 className="mb-2 text-2xl">Lessons Learned</h1>
                    <p className="font-light leading-7 opacity-75">
                        Through the development of Taskly, I gained
                        comprehensive knowledge of Next.js development. I also
                        honed my skills in collaborating effectively within a
                        remote team environment. The experience taught me the
                        importance of making strategic compromises to save time
                        and the value of managing a project from ideation to
                        completion. Viewing the project from a user perspective
                        became crucial, and I learned to accept imperfection as
                        part of the iterative development process.
                    </p>
                </div>
                <div className="mb-16">
                    <h1 className="mb-2 text-2xl">Future Improvements</h1>
                    <p className="font-light leading-7 opacity-75">
                        Given another opportunity, I would allocate less time to
                        designing the homepage and place less emphasis on
                        documentation. I would opt for WebSockets or another
                        service better suited for real-time collaboration to
                        enhance the responsiveness of the application.
                        Additionally, I would ensure a more seamless integration
                        of the text editor with the entire application and
                        incorporate email notifications for better user
                        engagement.
                    </p>
                </div>
                <div className="mb-16">
                    <h1 className="mb-2 text-2xl">The Team</h1>
                    <ul className="ml-4 flex flex-col gap-2 leading-7">
                        <li>
                            <strong className="font-normal">- My Role:</strong>
                            <span className="ml-[0.5ch] font-light opacity-75">
                                Project Lead
                            </span>
                        </li>
                        <li>
                            <strong className="font-normal">
                                - Teammates:
                            </strong>
                            <span className="ml-[0.5ch] font-light underline opacity-75">
                                Cameron Hollis
                            </span>
                            <span className="ml-[0.5ch] font-light opacity-75">
                                and
                            </span>
                            <span className="ml-[0.5ch] font-light underline opacity-75">
                                Yash Sankanagouda
                            </span>
                        </li>
                    </ul>
                </div>
            </>
        ),
        features: [
            "Artificial Intelligence",
            "User-Centric Design",
            "Notifications",
            "Documentation",
            "Markdown Editor",
            "Global Search",
            "Drag and Drop",
            "Realtime Updates",
        ],
    },
    techStack: {
        frontend: [
            { name: "Next.js", version: "14.2" },
            { name: "React", version: "18.2" },
            { name: "ShadcnUI" },
            { name: "Tailwind CSS", version: "3.3" },
            { name: "ReCharts", version: "2.10" },
            { name: "Framer Motion", version: "10.18" },
        ],
        state: [{ name: "Zustand", version: "4.4" }, { name: "Context API" }],
        backend: [
            { name: "Drizzle", version: "0.29" },
            { name: "PostgreSQL" },
            { name: "Redis" },
            { name: "S3" },
            { name: "OpenAI API" },
            { name: "GitHub API" },
            { name: "Clerk" },
            { name: "Resend" },
        ],
        testing: [
            { name: "Jest", version: "29.5" },
            { name: "Cypress", version: "13.8" },
        ],
        tools: [
            { name: "VS Code" },
            { name: "GitHub" },
            { name: "Figma" },
            { name: "Linear" },
            { name: "Linux / WSL" },
            { name: "NPM" },
        ],
    },
    contributors: [],
};

const BoatsAndLoads: Project = {
    id: 2,
    name: "Boats & Loads",
    year: 2024,
    gitHubLink: "https://github.com/GuruUpdesh/boats-and-loads-api",
    content: {
        shortDescription:
            "The Portfolio Assignment: The Boats & Loads API allows users to manage boats and their associated loads, featuring secure JWT-based authorization and comprehensive CRUD operations.",
        detailedContent: "",
        features: [
            "JWT-based Authorization",
            "Boat Management",
            "Load Management",
            "Pagination Support",
            "Data Validation",
            "Relationship Handling",
        ],
    },
    techStack: {
        frontend: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
        state: [],
        backend: [
            { name: "Node" },
            { name: "Express" },
            { name: "Google Datastore" },
        ],
        testing: [],
        tools: [{ name: "VS Code" }, { name: "GitHub" }, { name: "NPM" }],
    },
    contributors: [],
};

const TrackIt: Project = {
    id: 3,
    name: "TrackIt",
    year: 2023,
    gitHubLink: "https://github.com/GuruUpdesh/track-it",
    vercelProjectId: "prj_VuKOQZjJA3tFdhvtxTXPvB7M9ma3",
    websiteLink: "https://tackit.guruupdeshsingh.dev",
    content: {
        shortDescription:
            "TrackIt is a web-based application that simplifies shipment tracking by providing a unified platform to monitor your packages' status and journey, across various couriers.",
        detailedContent: "",
        features: [
            "Centralized Tracking Dashboard",
            "Multi-Courier Support",
            "Detailed Tracking History",
            "Accessible UI",
            "Power User Friendly",
        ],
    },
    techStack: {
        frontend: [
            { name: "Next.js", version: "13.4" },
            { name: "React", version: "18.2" },
            { name: "Tailwind CSS", version: "3.3" },
            { name: "Framer Motion", version: "10.12" },
            { name: "Radix UI" },
            { name: "Google Maps", version: "2.18" },
        ],
        state: [],
        backend: [],
        testing: [
            { name: "Jest", version: "29.6" },
            { name: "Cypress", version: "12.17" },
        ],
        tools: [
            { name: "VS Code" },
            { name: "GitHub" },
            { name: "Prettier", version: "3.0.0" },
            { name: "ESLint", version: "8.44.0" },
            { name: "Husky", version: "8.0.3" },
            { name: "NPM" },
        ],
    },
    contributors: [],
};

const HomeDesigner: Project = {
    id: 4,
    name: "Home Designer",
    year: 2022,
    gitHubLink: "https://github.com/GuruUpdesh/Home-Designer",
    vercelProjectId: "prj_SZLtDtXUF1riSqf9Xf8SldZZTRRN",
    websiteLink: "https://homedesigner.guruupdeshsingh.dev",
    content: {
        shortDescription:
            "Home Designer is the final project for my introduction to databases class, where we learned about database design, SQL, and normalization.",
        detailedContent: "",
        features: [
            "Centralized Tracking Dashboard",
            "Multi-Courier Support",
            "Detailed Tracking History",
            "Accessible UI",
            "Power User Friendly",
        ],
    },
    techStack: {
        frontend: [{ name: "React", version: "17.0" }, { name: "SCSS" }],
        state: [],
        backend: [
            { name: "Node" },
            { name: "Express", version: "4.17" },
            { name: "MySQL", version: "2.18" },
        ],
        testing: [],
        tools: [{ name: "VS Code" }, { name: "GitHub" }, { name: "NPM" }],
    },
    contributors: ["Liheng Yi"],
};

const ShipmentTracker: Project = {
    id: 5,
    name: "Shipment Tracker",
    year: 2022,
    gitHubLink: "https://github.com/GuruUpdesh/taskly",
    websiteLink: "https://www.tasklypm.com",
    content: {
        shortDescription: "",
        detailedContent: "",
        features: [],
    },
    techStack: {
        frontend: [],
        state: [],
        backend: [],
        testing: [],
        tools: [],
    },
    contributors: [],
};

const KubaGame: Project = {
    id: 6,
    name: "Kuba Game",
    year: 2022,
    gitHubLink: "https://github.com/GuruUpdesh/taskly",
    websiteLink: "https://www.tasklypm.com",
    content: {
        shortDescription: "",
        detailedContent: "",
        features: [],
    },
    techStack: {
        frontend: [],
        state: [],
        backend: [],
        testing: [],
        tools: [],
    },
    contributors: [],
};

const map: { [key: number]: Project } = {
    1: Taskly,
    2: BoatsAndLoads,
    3: TrackIt,
    4: HomeDesigner,
    5: ShipmentTracker,
    6: KubaGame,
};

export function getProjectFromId(id: number) {
    if (map[id]) {
        return map[id];
    }
    return Taskly;
}

export const totalProjects = Object.keys(map).length;

type Technology =
    | "Typescript"
    | "Python"
    | "C"
    | "JavaScript"
    | "SQL"
    | "React"
    | "Next.js"
    | "Tailwind CSS"
    | "SCSS"
    | "CSS"
    | "ShadcnUI"
    | "MaterialUI"
    | "Radix UI"
    | "Bootstrap"
    | "HTML"
    | "ReCharts"
    | "Google Maps"
    | "Framer Motion"
    | "Node"
    | "Express"
    | "Hono"
    | "Django"
    | "Flask"
    | "MySQL"
    | "PostgreSQL"
    | "MongoDB"
    | "Google Datastore"
    | "Redis"
    | "S3"
    | "RabbitMq"
    | "Vite"
    | "Webpack"
    | "Drizzle"
    | "AWS"
    | "Vercel"
    | "Clerk"
    | "Resend"
    | "VS Code"
    | "Prettier"
    | "ESLint"
    | "Husky"
    | "GitHub"
    | "GitHub API"
    | "Notion"
    | "Linear"
    | "Bun"
    | "NPM"
    | "Chat GPT"
    | "OpenAI API"
    | "Copilot"
    | "Docker"
    | "Linux / WSL"
    | "Figma"
    | "Adobe Suite"
    | "Blender"
    | "Context API"
    | "Zustand"
    | "Jest"
    | "Cypress";
