import Taskly from "./projects/taskly";
import TrackIt from "./projects/track-it";
import HomeDesigner from "./projects/home-designer";
import ShipmentTracker from "./projects/shipment-tracker";
import EffortlessEats from "./projects/effortless-eats";
import KubaGame from "./projects/kuba-game";
import { PrimaryTech } from "@/components/PrimaryTech";

export type Project = {
    key: string;
    name: string;
    year: number;
    gitHubLink?: string;
    vercelProjectId?: string;
    websiteLink?: string;
    videoFileName?: string;
    embed?: string;
    images?: Image[];
    content: ProjectContent;
    primaryTech: PrimaryTech;
    techStack: TechStack;
};

export type Image = {
    src: string;
    alt: string;
};

type ProjectContent = {
    shortDescription: string;
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

export const projects = {
    taskly: Taskly,
    "track-it": TrackIt,
    "home-designer": HomeDesigner,
    "shipment-tracker": ShipmentTracker,
    "kuba-game": KubaGame,
    "effortless-eats": EffortlessEats,
} as const;

export type ProjectKey = keyof typeof projects;

export function isValidProjectKey(key: string): key is ProjectKey {
    return key in projects;
}

export const projectOrder = [
    "taskly",
    "effortless-eats",
    "track-it",
    "home-designer",
    "shipment-tracker",
    "kuba-game",
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
