import Link from "next/link";
import { Project } from "../projectConfig";

const HomeDesigner: Project = {
    name: "Home Designer",
    key: "home-designer",
    year: 2022,
    gitHubLink: "https://github.com/GuruUpdesh/home-designer",
    vercelProjectId: "prj_SZLtDtXUF1riSqf9Xf8SldZZTRRN",
    websiteLink: "https://homedesigner.guruupdeshsingh.dev",
    images: [
        {
            src: "/homepage.webp",
            alt: "Dark-themed Home Designer dashboard with navigation sidebar. Main area displays clickable cards for 'clients', 'addresses', 'projects', 'projects & employees', and 'employees'. Each card has a 'VISIT' button.",
        },
        {
            src: "/clients.webp",
            alt: "Home Designer 'Clients' table view displaying 6 entries. Columns show id, name, and email for each client. A search bar is visible at the top right.",
        },
        {
            src: "/new.webp",
            alt: "Home Designer interface showing a 'New Client' modal form overlaying a blurred project list. The form includes input fields for name, email, and phone, with 'cancel' and 'confirm' buttons at the bottom.",
        },
        {
            src: "/edit.webp",
            alt: "Home Designer 'Addresses' table view with 8 entries. Columns include id, address, client, status, and date started. A dropdown menu for client selection is open, demonstrating relational database functionality",
        },
    ],
    content: {
        shortDescription:
            "Home Designer is the final project for my introduction to databases class, where we learned about database design, SQL, and normalization.",
        detailedContent: (
            <>
                <div>
                    <h1 className="header-1">Project Overview</h1>
                    <p className="paragraph">
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
                    <h1 className="header-1">Development</h1>
                    <p className="paragraph">
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
                    <h1 className="header-1">Lessons Learned</h1>
                    <p className="paragraph">
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
                    <h1 className="header-1">Future Improvements</h1>
                    <p className="paragraph">
                        In future iterations, I plan to address issues such as
                        context menu overflow, improving mobile view, and
                        enhancing the search functionality. Additionally, I aim
                        to add authentication features to enhance security and
                        user management capabilities.
                    </p>
                </div>
                <div>
                    <h1 className="header-1">Known Issues</h1>
                    <ul className="block-list">
                        <li>
                            <b>Context Menu Overflow</b>
                            <p className="paragraph">
                                Sometimes causes overflow issues.
                            </p>
                        </li>
                        <li>
                            <b>Mobile View</b>
                            <p className="paragraph">
                                Some elements are positioned incorrectly inside
                                the table on mobile devices.
                            </p>
                        </li>
                        <li>
                            <b>Search by Feature</b>
                            <p className="paragraph">
                                Displays the key instead of attribute in the
                                search input.
                            </p>
                        </li>
                        <li>
                            <b>Firefox Rendering</b>
                            <p className="paragraph">
                                Firefox doesn&apos;t render the table correctly.
                            </p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="header-1">The Team</h1>
                    <ul className="ml-4 flex flex-col gap-2 leading-7">
                        <li>
                            <strong className="font-normal">
                                - Teammates:
                            </strong>
                            <Link
                                href="https://github.com/Liheng-Yi"
                                target="_blank"
                                className="ml-[0.5ch] font-light underline"
                            >
                                Liheng Yi
                            </Link>
                        </li>
                    </ul>
                </div>
            </>
        ),
        features: [],
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
