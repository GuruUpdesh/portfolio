type Project = {
    id: number;
    name: string;
    year: number;
    gitHubLink: string;
    vercelLink?: string;
    websiteLink?: string;
    content: ProjectContent;
    techStack: TechStack;
    contributors: string[];
};

type ProjectContent = {
    shortDescription: string;
    longDescription: string;
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

const TasklyProject: Project = {
    id: 1,
    name: "Taskly",
    year: 2024,
    gitHubLink: "https://github.com/GuruUpdesh/taskly",
    vercelLink: "https://vercel.com/guruupdeshs-projects/taskly",
    websiteLink: "https://www.tasklypm.com",
    content: {
        shortDescription:
            "Taskly is an opinionated agile project management website that provides a simplified and user focused project management experience.",
        longDescription: "",
        features: [
            "AI Integration",
            "Intuitive UI",
            "Notification System",
            "Documentation",
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
    contributors: ["Guru Updesh Singh", "Cameron Hollis", "Yash Sankanagouda"],
};

const BoatsAndLoads: Project = {
    id: 2,
    name: "Boats & Loads",
    year: 2024,
    gitHubLink: "https://github.com/GuruUpdesh/boats-and-loads-api",
    content: {
        shortDescription:
            "The Portfolio Assignment: The Boats & Loads API allows users to manage boats and their associated loads, featuring secure JWT-based authorization and comprehensive CRUD operations.",
        longDescription: "",
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

export function getProjectFromId(id: number) {
    const map: { [key: number]: Project } = {
        1: TasklyProject,
        2: BoatsAndLoads,
    };
    if (map[id]) {
        return map[id];
    }
    return TasklyProject;
}

type Technology =
    | "Typescript"
    | "Python"
    | "C"
    | "JavaScript"
    | "SQL"
    | "React"
    | "Next.js"
    | "Tailwind CSS"
    | "SASS"
    | "CSS"
    | "ShadcnUI"
    | "MaterialUI"
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