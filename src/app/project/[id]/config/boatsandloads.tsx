import Link from "next/link";
import { Project } from "./projectConfig";

const BoatsAndLoads: Project = {
    id: 2,
    name: "Boats & Loads",
    year: 2024,
    gitHubLink: "https://github.com/GuruUpdesh/boats-and-loads-api",
    content: {
        shortDescription:
            "The Portfolio Assignment: The Boats & Loads API allows users to manage boats and their associated loads, featuring secure JWT-based authorization and comprehensive CRUD operations.",
        detailedContent: (
            <>
                <div>
                    <h1 className="mb-2 text-2xl">Overview</h1>
                    <p className="font-light leading-7 opacity-75">
                        The Boats & Loads Management System is a web application
                        designed to efficiently manage boats and their
                        associated cargo loads. This project was developed to
                        demonstrate practical skills in creating secure,
                        resource-based REST APIs and managing user data through
                        Google Cloud Platform.
                    </p>
                </div>
                <div>
                    <h1 className="mb-2 text-2xl">Purpose</h1>
                    <p className="font-light leading-7 opacity-75">
                        This project was created to pull together various
                        development skills and concepts, including RESTful API
                        design, user authentication, and cloud deployment. The
                        system is built to handle essential maritime logistics,
                        providing users with an intuitive interface to manage
                        their boats and loads securely.
                    </p>
                </div>
                <div>
                    <h1 className="mb-2 text-2xl">Security</h1>
                    <p className="font-light leading-7 opacity-75">
                        User authentication is managed via JSON Web Tokens
                        (JWT), ensuring that only authorized users can access
                        and manipulate their data. This adds a layer of security
                        to the application, protecting sensitive user
                        information and operations.
                    </p>
                </div>
            </>
        ),
        features: [
            "User Authentication",
            "Boat Management",
            "Load Management",
            "Relationship Handling",
            "Pagination",
            "Data Validation",
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
};

export default BoatsAndLoads;
