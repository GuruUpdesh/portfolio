import Link from "next/link";
import { Project } from "../projectConfig";
import Paragraph from "@/lib/AnimatedParagraph";

const Taskly: Project = {
    name: "Taskly",
    key: "taskly",
    year: 2024,
    gitHubLink: "https://github.com/GuruUpdesh/taskly",
    vercelProjectId: "prj_6h9v6l7IyIi8H19zikijisuuhpOI",
    websiteLink: "https://www.tasklypm.com",
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
                    <h1 className="mb-4 text-4xl">Overview</h1>
                    <p className="mb-4 font-light leading-7 text-muted-foreground">
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
                    <p className="font-light leading-7 text-muted-foreground">
                        Taskly was born as a strait forward, opinionated,
                        approach to Agile PM that would reduce company
                        onboarding time, free up developer resources, and
                        improve project success. The final product delivers on
                        our ideas.
                    </p>
                    <Paragraph
                        paragraph="Our opinionated design approach emphasizes simplicity to minimize learning curves and maximize efficiency and success."
                        className="my-8 w-full"
                    />
                    <p className="font-light leading-7 text-muted-foreground">
                        Our hope was that small businesses would see the value
                        in a simplified tool, especially because they have less
                        margin for error. Despite never gaining traction the
                        project was a successful learning experience for the
                        whole team, and has future potential with the right
                        direction.
                    </p>
                </div>
                <div>
                    <h1 className="mb-2 text-4xl">Development</h1>
                    <p className="mb-4">Nov 5, 2023 – Jun 15, 2024</p>
                    <p className="mb-2 font-light leading-7 text-muted-foreground">
                        The development of Taskly was divided into three key
                        phases (3 Months each):
                    </p>
                    <ul className="mb-4 flex flex-col gap-4 leading-7">
                        <li className="rounded-lg bg-border/5 p-5">
                            <b className="font-normal">Initial Planning</b>
                            <p className="font-light leading-7 text-muted-foreground">
                                In this phase the team met, researched the realm
                                of project management, identified a goal, and
                                constructed a loose plan of action including
                                choosing our technology, system design,
                                communication guidelines, project
                                responsibilities, and UI mockups.
                            </p>
                        </li>
                        <li className="rounded-lg bg-border/5 p-5">
                            <b className="font-normal">Active development</b>
                            <p className="font-light leading-7 text-muted-foreground">
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
                        <li className="rounded-lg bg-border/5 p-5">
                            <b className="font-normal">Refinement</b>
                            <p className="font-light leading-7 text-muted-foreground">
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
                    <p className="mb-8 font-light leading-7 text-muted-foreground">
                        Our hope was that small businesses would see the value
                        in a simplified tool, especially because they have less
                        margin for error. Despite never gaining traction the
                        project was a successful learning experience for the
                        whole team, and has future potential with the right
                        direction.
                    </p>
                    <h2 className="mb-2 text-2xl">Challenges</h2>
                    <p className="mb-2 font-light leading-7 text-muted-foreground">
                        The road to production wasn’t always straightforward,
                        and we faced a number of challenges:
                    </p>
                    <ul className="mb-4 ml-4 flex flex-col gap-4 leading-7">
                        <li className="rounded-lg bg-border/5 p-5">
                            <b className="font-normal">
                                3rd party authentication:
                            </b>
                            <p className="ml-[0.5ch] font-light text-muted-foreground">
                                Used Clerk for secure authentication, including
                                Google OAuth. Needed Database sync for
                                production, solved by integrating Webhooks and
                                using the Next.js instrumentation hook for
                                development server sync.
                            </p>
                        </li>
                        <li className="rounded-lg bg-border/5 p-5">
                            <b className="font-normal">
                                Realtime web-based collaboration:
                            </b>
                            <p className="ml-[0.5ch] font-light text-muted-foreground">
                                Planned to use webhooks, but Vercel&apos;s serverless
                                environment didn&apos;t support persistent
                                connections. Implemented polling using React
                                Query. In hindsight, a real-time database
                                solution like Convex or Supabase would have been
                                better, but we were invested in Drizzle.
                            </p>
                        </li>
                    </ul>
                    <h2 className="mb-2 text-2xl">Future Improvements</h2>
                    <p className="font-light leading-7 text-muted-foreground">
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
                    {/* <Paragraph
                        paragraph="During development we wore many hats, from owners and investors to developers and users."
                        className="my-16 w-full"
                    /> */}
                </div>
                <div>
                    <h1 className="mb-2 text-4xl">Lessons Learned</h1>
                    <p className="font-light leading-7 text-muted-foreground">
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
                    <h1 className="mb-2 text-4xl">The Team</h1>
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
                            </strong>
                            <Link
                                href="https://github.com/cameronhollis4"
                                target="_blank"
                                className="ml-[0.5ch] font-light hover:underline"
                            >
                                Cameron Hollis
                            </Link>
                            <span className="ml-[0.5ch] font-light text-muted-foreground">
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
