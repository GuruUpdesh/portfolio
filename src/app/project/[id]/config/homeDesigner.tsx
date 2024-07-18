import Link from "next/link";
import { Project } from "./projectConfig";

const HomeDesigner: Project = {
    id: 4,
    name: "Home Designer",
    year: 2022,
    gitHubLink: "https://github.com/GuruUpdesh/home-designer",
    vercelProjectId: "prj_SZLtDtXUF1riSqf9Xf8SldZZTRRN",
    websiteLink: "https://homedesigner.guruupdeshsingh.dev",
    images: [
        "/projects/homedesigner/new.png",
        "/projects/homedesigner/edit.png",
        "/projects/homedesigner/homepage.png",
        "/projects/homedesigner/addresses.png",
    ],
    content: {
        shortDescription: (
            <p>
                Home Designer is the final project for my introduction to
                databases class, where we learned about database design, SQL,
                and normalization.
            </p>
        ),
        detailedContent: (
            <>
                <div>
                    <h1 className="mb-2 text-2xl">Project Overview</h1>
                    <p className="font-light leading-7 opacity-75">
                        Home Designer is a webapp designed for a hypothetical
                        interior design firm that specializes in decoration,
                        remodel planning, and project management. The project
                        was developed as part of an introduction to databases
                        class, focusing on database design, SQL, and
                        normalization. The application is designed to help
                        employees, managers, and owners of the business keep a
                        close eye on current projects, providing a single
                        consolidated place to manage operations.
                    </p>
                </div>
                <div>
                    <h1 className="mb-1 text-2xl">Development</h1>
                    <p className="mb-2">Sep 10, 2022 - Dec 15, 2022</p>
                    <p className="font-light leading-7 opacity-75">
                        This project was a collaboration with my partner Liheng
                        Yi. We focused on implementing both the frontend and
                        backend, with the frontend development involving over
                        3000 lines of custom SCSS. The backend, utilizing Node
                        and Express, interfaced with a MySQL database. This
                        project provided a solid foundation in database
                        management as well as practical experience in React and
                        CSS.
                    </p>
                </div>
                <div>
                    <h1 className="mb-2 text-2xl">Lessons Learned</h1>
                    <p className="font-light leading-7 opacity-75">
                        Working on Home Designer significantly improved my
                        skills in React, SCSS, and JavaScript. Additionally, it
                        provided hands-on experience with database design and
                        management, reinforcing theoretical knowledge with
                        practical application. Collaborating with a partner also
                        emphasized the importance of communication and teamwork
                        in software development.
                    </p>
                </div>
                <div>
                    <h1 className="mb-2 text-2xl">Future Improvements</h1>
                    <p className="font-light leading-7 opacity-75">
                        In future iterations, I plan to address issues such as
                        context menu overflow, improving mobile view, and
                        enhancing the search functionality. Additionally, I aim
                        to add authentication features to enhance security and
                        user management capabilities.
                    </p>
                </div>
                <div>
                    <h1 className="mb-2 text-2xl">Known Issues</h1>
                    <ul className="ml-4 flex flex-col gap-2 leading-7">
                        <li>
                            <strong className="font-normal">
                                - Context Menu Overflow:
                            </strong>
                            <span className="ml-[0.5ch] font-light opacity-75">
                                Sometimes causes overflow issues.
                            </span>
                        </li>
                        <li>
                            <strong className="font-normal">
                                - Mobile View:
                            </strong>
                            <span className="ml-[0.5ch] font-light opacity-75">
                                Some elements are positioned incorrectly inside
                                the table on mobile devices.
                            </span>
                        </li>
                        <li>
                            <strong className="font-normal">
                                - Search by Feature:
                            </strong>
                            <span className="ml-[0.5ch] font-light opacity-75">
                                Displays the key instead of attribute in the
                                search input.
                            </span>
                        </li>
                        <li>
                            <strong className="font-normal">
                                - Firefox Rendering:
                            </strong>
                            <span className="ml-[0.5ch] font-light opacity-75">
                                Firefox doesn't render the table correctly.
                            </span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="mb-2 text-2xl">The Team</h1>
                    <ul className="ml-4 flex flex-col gap-2 leading-7">
                        <li>
                            <strong className="font-normal">
                                - Teammates:
                            </strong>
                            <Link
                                href="https://github.com/Liheng-Yi"
                                target="_blank"
                                className="ml-[0.5ch] font-light hover:underline"
                            >
                                Liheng Yi
                            </Link>
                        </li>
                    </ul>
                </div>
            </>
        ),
        features: [
            "Centralized Tracking Dashboard",
            "Multi-Courier Support",
            "Detailed Tracking History",
            "Accessible UI",
            "Power User Friendly",
        ],
    },
    primaryTech: "React",
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

export default HomeDesigner;
