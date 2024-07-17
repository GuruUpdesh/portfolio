import Link from "next/link";
import { Project } from "./projectConfig";

const imagesDirectory = "/projects/taskly/";

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
                clutter-free Agile solution, ideal for small teams or startups.
            </p>
        ),
        detailedContent: (
            <>
                <div>
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
                <div>
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
                <div>
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
                <div>
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
                <div>
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
                <div>
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
                            <Link
                                href="https://github.com/cameronhollis4"
                                target="_blank"
                                className="ml-[0.5ch] font-light hover:underline"
                            >
                                Cameron Hollis
                            </Link>
                            <span className="ml-[0.5ch] font-light opacity-75">
                                and
                            </span>
                            <Link
                                href="https://github.com/sankanay"
                                target="_blank"
                                className="ml-[0.5ch] font-light hover:underline"
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

export default Taskly;
