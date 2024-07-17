import React from "react";
import Taskly from "./taskly";

export type Project = {
    id: number;
    name: string;
    year: number;
    gitHubLink: string;
    vercelProjectId?: string;
    websiteLink?: string;
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
