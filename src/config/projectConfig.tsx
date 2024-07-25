import Taskly from "./projects/taskly";
import BoatsAndLoads from "./projects/boats-and-loads";
import TrackIt from "./projects/track-it";
import HomeDesigner from "./projects/home-designer";
import ShipmentTracker from "./projects/shipment-tracker";
import { PrimaryTech } from "@/components/PrimaryTech";
import EffortlessEats from "./projects/effortless-eats";
import KubaGame from "./projects/kuba-game";

export type Project = {
    key: string;
    name: string;
    year: number;
    gitHubLink?: string;
    vercelProjectId?: string;
    websiteLink?: string;
    videoFileName?: string;
    images?: string[][];
    content: ProjectContent;
    primaryTech: PrimaryTech;
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
export type Tech = {
    name: Technology;
    version?: string;
};
export type TechStack = {
    [category in TechStackCategory]: Tech[];
};

const MobileTreasureHunt: Project = {
    name: "Mobile Treasure Hunt",
    key: "mobile-treasure-hunt",
    year: 2024,
    gitHubLink: "https://github.com/GuruUpdesh/taskly",
    websiteLink: "https://www.tasklypm.com",
    content: {
        shortDescription: "",
        detailedContent: "",
        features: [],
    },
    primaryTech: "Jetpack Compose",
    techStack: {
        frontend: [],
        state: [],
        backend: [],
        testing: [],
        tools: [],
    },
};

const Portfolio: Project = {
    name: "Portfolio",
    key: "portfolio",
    year: 2024,
    gitHubLink: "https://github.com/GuruUpdesh/taskly",
    websiteLink: "https://www.tasklypm.com",
    content: {
        shortDescription: "",
        detailedContent: "",
        features: [],
    },
    primaryTech: "Next.js",
    techStack: {
        frontend: [],
        state: [],
        backend: [],
        testing: [],
        tools: [],
    },
};

export const projects = {
    taskly: Taskly,
    "boats-and-loads": BoatsAndLoads,
    "track-it": TrackIt,
    "home-designer": HomeDesigner,
    "shipment-tracker": ShipmentTracker,
    "kuba-game": KubaGame,
    "effortless-eats": EffortlessEats,
    "mobile-treasure-hunt": MobileTreasureHunt,
    portfolio: Portfolio,
} as const;

type ProjectKey = keyof typeof projects;

export function isValidProjectKey(key: string): key is ProjectKey {
    return key in projects;
}

export const projectOrder = [
    "taskly",
    "boats-and-loads",
    "track-it",
    "home-designer",
    "shipment-tracker",
    "kuba-game",
    "effortless-eats",
    "mobile-treasure-hunt",
    "portfolio",
] as const;

export function getNextProjectKey(currentKey: ProjectKey): ProjectKey {
    const currentIndex = projectOrder.indexOf(currentKey);
    return projectOrder[(currentIndex + 1) % projectOrder.length];
}

export function getPreviousProjectKey(currentKey: ProjectKey): ProjectKey {
    const currentIndex = projectOrder.indexOf(currentKey);
    return projectOrder[
        (currentIndex - 1 + projectOrder.length) % projectOrder.length
    ];
}

export const totalProjects = projectOrder.length;

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
    | "Postman"
    | "Cypress"
    | "Auth0"
    | "PyGame"
    | "PyCharm";