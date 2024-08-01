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
        title: "Email Notifications",
        description:
            "Enhance user engagement and keep team members informed of project updates.",
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
        title: "Encrypted Task Information",
        description:
            "Enhance security by implementing end-to-end encryption for sensitive project data.",
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
        title: "An API",
        description:
            "Develop a public API to allow integrations with other tools and services.",
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
        ["/backlog.webp", "/settings.webp"],
        ["/createproject.webp", "/task.webp"],
    ],
    content: {
        shortDescription: (
            <p>
                Taskly is an opinionated Agile project management (PM)
                application. It offers a simplified featureset and experience,
                to compete against the dominant PM solutions in the market. My
                capstone team and I built the project over our senior year, and
                worked together to overcome a multitude of challenges to deliver
                on our team goals and requirements.
            </p>
        ),
        detailedContent: (
            <>
                <div>
                    <h1 className="header-1">Overview</h1>
                    <p className="paragraph">
                        When first brainstorming the direction we wanted to take
                        Taskly we identified that many of the dominant PM tools
                        in the software industry were plagued with complexity
                        and feature bloat. We identified that this complexity
                        was leading to inefficiencies and steep learning curves
                        which were both contributing to cost and time wasted for
                        the businesses that were using them. We believed that
                        this problem was something we could provide a solution
                        to.
                    </p>
                    <p className="paragraph">
                        Taskly was born as a strait forward, opinionated,
                        approach to Agile PM that would reduce company
                        onboarding time, free up developer resources, and
                        improve project success. The final product delivers on
                        our ideas.
                    </p>
                    <Paragraph
                        paragraph="Our opinionated design approach emphasizes simplicity to minimize learning curves and maximize efficiency and success."
                        className="w-full py-8"
                    />
                    <p className="paragraph">
                        Our hope was that small businesses would see the value
                        in a simplified tool, especially because they have less
                        margin for error. Despite never gaining traction the
                        project was a successful learning experience for the
                        whole team, and has future potential with the right
                        direction.
                    </p>
                </div>
                <div>
                    <h1 className="header-1">Development</h1>
                    <p className="">Sep, 2023 - Jun, 2024</p>
                    <p className="paragraph">
                        The development of Taskly was divided into three key
                        phases.
                    </p>
                    <ul className="block-list">
                        <li>
                            <b>Initial Planning</b>
                            <p className="paragraph">
                                In this phase the team met, researched the realm
                                of project management, identified a goal, and
                                constructed a loose plan of action including
                                choosing our technology, system design,
                                communication guidelines, project
                                responsibilities, and UI mockups.
                            </p>
                        </li>
                        <li>
                            <b>Active development</b>
                            <p className="paragraph">
                                This was by far the most intense phase of our
                                project, where we took the planned we had done
                                and created sprints with overarching goals and
                                delegated objectives. The entire team really
                                pushed this term to move the project forward and
                                accomplish our goals. By the end of the term we
                                had an MVP, something which worked and had a
                                subset of the primary features we had planned to
                                integrate but we the project was still
                                incomplete and unrefined.
                            </p>
                        </li>
                        <li>
                            <b className="font-normal">Refinement</b>
                            <p className="paragraph">
                                We added missing features, overhauled the UI,
                                went through most the codebase to improve
                                stability and performance, worked on SEO,
                                iterated on the basic features. By the end we
                                had a fully functional project management
                                solution, battle tested by our own team as a way
                                for us to validate and verify our product.
                            </p>
                        </li>
                    </ul>
                    <p className="paragraph mt-4">
                        Our hope was that small businesses would see the value
                        in a simplified tool, especially because they have less
                        margin for error. Despite never gaining traction the
                        project was a successful learning experience for the
                        whole team, and has future potential with the right
                        direction.
                    </p>
                    <h2 className="header-2">Challenges</h2>
                    <p className="paragraph">
                        The road to production wasn’t always straightforward,
                        and we faced a number of challenges.
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
                        Our hope was that small businesses would see the value
                        in a simplified tool, especially because they have less
                        margin for error. Despite never gaining traction the
                        project was a successful learning experience for the
                        whole team, and has future potential with the right
                        direction.
                    </p>
                    <CollapsibleList items={featureImprovementItems} />
                    <p className="paragraph mt-4">
                        And more... If you are interested in contributing to the
                        project let me know!
                    </p>
                </div>
                <div>
                    <h1 className="header-1">Lessons Learned</h1>
                    <p className="paragraph">
                        This experience was priceless, and was the primary
                        aspect of the development which helped me grow as a
                        developer and as a person. My teammates and Taskly
                        taught me a lot more than how to implement optimistic
                        updates with Zustand, React Query, and Next.JS.
                        Development was an intense real world exercise in
                        utilizing every tool and piece of knowledge I had gained
                        through my degree.
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
