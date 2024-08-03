import Paragraph from "@/lib/AnimatedParagraph";
import { Project } from "../projectConfig";

const ShipmentTracker: Project = {
    name: "Shipment Tracker",
    key: "shipment-tracker",
    year: 2022,
    gitHubLink: "https://github.com/GuruUpdesh/shipment-tracker",
    websiteLink: "https://shipmenttracker.guruupdeshsingh.dev",
    videoFileName:
        "https://res.cloudinary.com/dioxu1vph/video/upload/v1722494250/pie494ieohqicdoen8fn.mp4",
    images: [
        {
            src: "/dashboard.webp",
            alt: "Shipment Tracker dashboard in dark mode. Left sidebar shows user email and navigation options. Main area displays tracked packages (Elephant, Air Pods, Shoes) with delivery status and location maps centered on Eugene, Oregon.",
        },
        {
            src: "/map.webp",
            alt: "Shipment Tracker detailed view for 'iPhone' package. Shows US map with package route from California to Oregon. Transit history timeline indicates completed delivery, with updates listing delivery steps in Eugene, OR on 04/09/2024.",
        },
        {
            src: "/tracking.webp",
            alt: "Shipment Tracker detail view for 'Shoes' package. Shows expected delivery date of 08/02/2024 and transit history timeline. FedEx tracking updates listed, including current status 'On FedEx vehicle for delivery' in Eugene, OR.",
        },
        {
            src: "/add.webp",
            alt: "Shipment Tracker 'Add Package' modal. Form includes fields for package name, tracking number, and courier selection. 'Add' and 'Cancel' buttons at the bottom.",
        },
    ],
    content: {
        shortDescription:
            "Shipment Tracker is a web application developed to simplify the process of tracking shipments. This project was part of my coursework in CS361.",
        detailedContent: (
            <>
                <div>
                    <h1 className="header-1">Project Overview</h1>
                    <p className="paragraph">
                        Shipment Tracker was created as part of my coursework in
                        CS361 to address the challenges of tracking multiple
                        shipments from different couriers.
                    </p>
                    <Paragraph
                        paragraph="It provides a unified
                        platform to monitor the status and journey of packages,
                        offering features such as real-time updates and a
                        user-friendly interface."
                        className="w-full py-16"
                    />
                </div>
                <div>
                    <h1 className="mb-1 text-2xl">Development</h1>
                    <p className="paragraph">
                        The development process involved extensive use of React
                        for the frontend and Node.js for the backend,
                        incorporating various state management techniques to
                        handle asynchronous data fetching and UI updates. The
                        project emphasized clean code practices, although some
                        functions were necessarily lengthy due to complex logic
                        for handling HTTP requests and state updates.
                    </p>
                </div>
                <div>
                    <h1 className="header-1">Challenges and Solutions</h1>
                    <p className="paragraph">
                        During development, one of the main challenges was
                        managing asynchronous state updates in React, which led
                        to issues with state desynchronization. To address this,
                        I opted to keep some functions longer for better control
                        over state management. Additionally, the CSS codebase
                        grew large due to the custom styling required for the
                        application&apos;s unique components.
                    </p>
                </div>
                <div>
                    <h1 className="header-1">Lessons Learned</h1>
                    <p className="paragraph">
                        Through this project, I gained valuable experience in
                        handling asynchronous operations in React and managing
                        complex state changes. I also learned the importance of
                        modularizing CSS for maintainability and the challenges
                        associated with handling large codebases.
                    </p>
                </div>
                <div>
                    <h1 className="header-1">Future Improvements</h1>
                    <p className="paragraph">
                        Future improvements for Shipment Tracker include
                        modularizing the SCSS for better maintainability,
                        optimizing the state management logic to reduce function
                        lengths, and enhancing the mobile responsiveness of the
                        application.
                    </p>
                </div>
                <div>
                    <h1 className="header-1">
                        Reflection on Agile Development
                    </h1>
                    <p className="paragraph">
                        Agile methodology was instrumental in the development of
                        Shipment Tracker, allowing for quick pivots and
                        iterative improvements. This approach was particularly
                        beneficial given the project&apos;s dynamic requirements
                        and the need for rapid adjustments.
                    </p>
                </div>
            </>
        ),
        features: ["UI Animations", "Custom Components", "Dark Light Mode"],
    },
    primaryTech: "React",
    techStack: {
        frontend: [
            { name: "React", version: "18.0.0" },
            { name: "Framer Motion", version: "6.3.16" },
            { name: "Google Maps", version: "2.19.3" },
        ],
        state: [],
        backend: [
            { name: "Node" },
            { name: "Express", version: "4.18" },
            { name: "MongoDB", version: "6.3" },
        ],
        testing: [{ name: "Jest", version: "28.1.1" }],
        tools: [
            { name: "VS Code" },
            { name: "GitHub" },
            { name: "NPM" },
            { name: "ESLint" },
            { name: "Prettier" },
        ],
    },
};

export default ShipmentTracker;
