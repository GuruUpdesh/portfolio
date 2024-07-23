import Taskly from "./projects/taskly";
import BoatsAndLoads from "./projects/boats-and-loads";
import TrackIt from "./projects/track-it";
import HomeDesigner from "./projects/home-designer";
import ShipmentTracker from "./projects/shipment-tracker";
import { PrimaryTech } from "@/components/PrimaryTech";
import EffortlessEats from "./projects/effortless-eats";
import KubaGame from "./projects/kuba-game";

export type Project = {
    id: number;
    pathname: string;
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
    id: 8,
    name: "Mobile Treasure Hunt",
    pathname: "mobile-treasure-hunt",
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
    id: 9,
    name: "Portfolio",
    pathname: "portfolio",
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

export const allProjects = Object.keys(map);

export const totalProjects = allProjects.length;

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
