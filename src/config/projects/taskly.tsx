import Link from "next/link";
import { Project } from "../projectConfig";
import Paragraph from "@/lib/AnimatedParagraph";
import CollapsibleList from "@/components/project/CollapsibleList";

const featureImprovementItems = [
    {
        title: "Emphasis on Real Customers",
        description:
            "Focus on acquiring and learning from actual users to drive product development.",
    },
    {
        title: "WebSockets",
        description:
            "Implement for true real-time collaboration, improving upon the current polling solution.",
    },
    {
        title: "Improved UI Responsiveness",
        description:
            "Optimize the interface for various devices and screen sizes.",
    },
    {
        title: "Better Text Editor Integration",
        description:
            "Improve the built-in editor for more efficient task and project documentation, and implement it in all text areas across the application.",
    },
    {
        title: "Custom Views",
        description:
            "Allow users to create personalized dashboards and task views.",
    },
    {
        title: "More Organizational Hierarchy",
        description:
            "Implement team structures for better organization in larger projects.",
    },
    {
        title: "Improved Search",
        description:
            "Enhance the search functionality for quicker access to tasks and information.",
    },
    {
        title: "Batch Actions",
        description:
            "Implement the ability to perform actions on multiple tasks simultaneously.",
    },
    {
        title: "Email Notifications",
        description:
            "Enhance user engagement and keep team members informed of project updates.",
    },
    {
        title: "Encrypted Task Information",
        description:
            "Enhance security by implementing end-to-end encryption for sensitive project data.",
    },
    {
        title: "An API",
        description:
            "Develop a public API to allow integrations with other tools and services.",
    },
    {
        title: "AB Testing for UI design and Features",
        description:
            "Implement testing to make data-driven decisions on interface and feature improvements.",
    },
    {
        title: "Sub Tasks in Backlog",
        description:
            "Allow for more granular task management within the product backlog.",
    },
];

const Taskly: Project = {
    name: "Taskly",
    key: "taskly",
    year: 2024,
    gitHubLink: "https://github.com/GuruUpdesh/taskly",
    vercelProjectId: "prj_6h9v6l7IyIi8H19zikijisuuhpOI",
    websiteLink: "https://www.tasklypm.com",
    videoFileName:
        "https://res.cloudinary.com/dioxu1vph/video/upload/v1722493771/s63xfqf57vgjaxcgazep.mp4",
    images: [
        {
            src: "/backlog.webp",
            alt: "Taskly project management interface showing 'New Task' creation modal for 'Example Project (42)'. The modal includes fields for Task Title, Description, and options for Backlog, Priority, and Task Type.",
        },
        {
            src: "/settings.webp",
            alt: "Taskly project settings page showing GitHub integration, connected repository 'GuruUpdesh/taskly', and sprint planning. Displays multiple sprints from Sprint 1 to Sprint 11, with Sprint 11 highlighted starting August 6. Also shows options for Sprint Duration and Start Date.",
        },
        {
            src: "/createproject.webp",
            alt: "Taskly 'Create a Project' interface showing a 4-step process: Create Project, Configure Sprints, Initialize Project, and Invite Your Team. The first step is active, with fields for Project Name and Description visible.",
        },
        {
            src: "/task.webp",
            alt: "Taskly task details page for 'Add New Tasks To Sprint Board' in 'Example Project'. Shows a text editor with task description, formatting options, and Sprint ID: 158. Below is an activity log showing user 'guruupdesh' making multiple changes including status updates, point estimation changes, and sprint reassignment.",
        },
    ],
    content: {
        shortDescription: (
            <p>
                Taskly is an opinionated Agile project management (PM)
                application. It offers a simplified featureset and experience,
                to compete against the dominant PM solutions in the market. My
                capstone team and I built the project over our senior year.
            </p>
        ),
        detailedContent: (
            <>
                <div>
                    <h1 className="header-1">Overview</h1>
                    <p className="paragraph">
                        Taskly is an Agile project management app designed to be
                        simpler than existing complex solutions. It aims to
                        reduce onboarding time and improve efficiency for
                        businesses, especially small ones. The project was
                        developed by a capstone team over their senior year.
                    </p>
                    <Paragraph
                        paragraph="Our opinionated design approach emphasizes simplicity to minimize learning curves and maximize efficiency and success."
                        className="w-full py-8"
                    />
                    <p className="paragraph">
                        Despite never gaining traction the project was a
                        successful learning experience for the whole team, and
                        has future potential with the right direction.
                    </p>
                </div>
                <div>
                    <h1 className="header-1">Development</h1>
                    {/* <p className="">Sep, 2023 - Jun, 2024</p> */}
                    <ul className="block-list">
                        <li>
                            <b>Initial Planning</b>
                            <p className="paragraph">
                                Our team researched project management, set
                                goals, and created an action plan. We chose
                                technologies, designed the system, established
                                communication guidelines, assigned
                                responsibilities, and created UI mockups.
                            </p>
                        </li>
                        <li>
                            <b>Active Development</b>
                            <p className="paragraph">
                                This phase involved creating and executing
                                sprints with specific goals. We worked hard to
                                move the project forward, resulting in an MVP
                                with core features by the end of winter term.
                                While functional, the project was still
                                incomplete and needed refinement.
                            </p>
                        </li>
                        <li>
                            <b>Refinement</b>
                            <p className="paragraph">
                                We focused on completing the project by adding
                                missing features, improving the UI, enhancing
                                stability and performance, and optimizing for
                                SEO. We also iterated on existing features. The
                                result was a fully functional project management
                                solution, validated through our team&apos;s own
                                use.
                            </p>
                        </li>
                    </ul>
                    <h2 className="header-2">Challenges</h2>
                    <p className="paragraph">
                        The road to production wasn&apos;t always
                        straightforward, and we faced a number of challenges.
                    </p>
                    <ul className="block-list">
                        <li>
                            <b>3rd Party Authentication</b>
                            <p className="paragraph">
                                Implemented Clerk for secure authentication,
                                including Google OAuth. Addressed database sync
                                challenges by integrating webhooks for
                                production and utilizing Next.js instrumentation
                                hook for development server sync.
                            </p>
                        </li>
                        <li>
                            <b>Realtime Web-Based Collaboration</b>
                            <p className="paragraph">
                                Implemented polling with React Query for
                                real-time updates, overcoming Vercel&apos;s
                                serverless environment limitations.
                                Retrospectively, a real-time database solution
                                like Convex or Supabase could have been more
                                efficient, but we were committed to Drizzle ORM.
                            </p>
                        </li>
                    </ul>
                    <h2 className="header-2">Future Improvements</h2>
                    <p className="paragraph">
                        The project has lots of room for future improvement.
                        Some key features and focuses would be the following.
                    </p>
                    <CollapsibleList items={featureImprovementItems} />
                </div>
                <div>
                    <h1 className="header-1">Lessons Learned</h1>
                    <p className="paragraph">
                        This project was an invaluable learning experience that
                        significantly contributed to my growth as both a
                        developer and an individual. While I gained technical
                        skills like implementing optimistic updates with
                        Zustand, React Query, and Next.js, the lessons learned
                        went far beyond just coding.
                    </p>
                    <p className="paragraph">
                        Working on Taskly with my teammates provided a
                        real-world environment to apply and expand upon the
                        knowledge gained throughout my degree. It challenged me
                        to integrate various tools and concepts, pushing the
                        boundaries of my capabilities and understanding of
                        software development.
                    </p>
                    <p className="paragraph">
                        The project served as a bridge between academic learning
                        and professional practice, offering insights into team
                        dynamics, project management, and problem-solving in a
                        practical setting. This experience has better prepared
                        me for the challenges and opportunities in my future
                        career as a software developer.
                    </p>
                </div>
                <div>
                    <h1 className="header-1">The Team</h1>
                    <ul className="ml-4 flex flex-col gap-2 leading-7">
                        <li>
                            <strong className="font-normal">- My Role:</strong>
                            <span className="ml-[0.5ch] font-light text-muted-foreground">
                                Project Lead
                            </span>
                        </li>
                        <li>
                            <strong className="font-normal">
                                - Teammates:
                            </strong>{" "}
                            <Link
                                href="https://github.com/cameronhollis4"
                                target="_blank"
                                className="animated-underline font-light after:bottom-0 after:left-0"
                            >
                                Cameron Hollis
                            </Link>{" "}
                            <span className="font-light text-muted-foreground">
                                and
                            </span>{" "}
                            <Link
                                href="https://github.com/sankanay"
                                target="_blank"
                                className="animated-underline font-light after:bottom-0 after:left-0"
                            >
                                Yash Sankanagouda
                            </Link>
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
            "GitHub Integration",
        ],
    },
    primaryTech: "Next.js",
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
};

export default Taskly;
