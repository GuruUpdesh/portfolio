import React from "react";
import Taskly from "./taskly";
import BoatsAndLoads from "./boatsandloads";
import TrackIt from "./trackit";

export type Project = {
    id: number;
    name: string;
    year: number;
    gitHubLink: string;
    vercelProjectId?: string;
    websiteLink?: string;
    images?: string[];
    content: ProjectContent;
    techStack: TechStack;
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
};

const EffortlessEats: Project = {
    id: 7,
    name: "Effortless Eats",
    year: 2023,
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
};

const MobileTreasureHunt: Project = {
    id: 8,
    name: "Mobile Treasure Hunt",
    year: 2024,
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
};

const Portfolio: Project = {
    id: 9,
    name: "Portfolio",
    year: 2024,
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
};

const map: { [key: number]: Project } = {
    1: Taskly,
    2: BoatsAndLoads,
    3: TrackIt,
    4: HomeDesigner,
    5: ShipmentTracker,
    6: KubaGame,
    7: EffortlessEats,
    8: MobileTreasureHunt,
    9: Portfolio,
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
