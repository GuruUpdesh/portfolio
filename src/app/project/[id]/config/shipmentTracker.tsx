import { Project } from "./projectConfig";

const ShipmentTracker: Project = {
    id: 5,
    name: "Shipment Tracker",
    year: 2022,
    gitHubLink: "https://github.com/GuruUpdesh/shipment-tracker",
    websiteLink: "https://shipmenttracker.guruupdeshsingh.dev",
    images: [
        "/projects/shipmenttracker/tracking-light.png",
        "/projects/shipmenttracker/add-light.png",
        "/projects/shipmenttracker/dashboard-dark.png",
        "/projects/shipmenttracker/map-dark.png",
    ],
    content: {
        shortDescription: (
            <p>
                Shipment Tracker is a web application developed to simplify the
                process of tracking shipments. This project was part of my
                coursework in CS361.
            </p>
        ),
        detailedContent: (
            <>
                <div>
                    <h1 className="mb-2 text-2xl">Project Overview</h1>
                    <p className="font-light leading-7 opacity-75">
                        Shipment Tracker was created as part of my coursework in
                        CS361 to address the challenges of tracking multiple
                        shipments from different couriers. It provides a unified
                        platform to monitor the status and journey of packages,
                        offering features such as real-time updates and a
                        user-friendly interface.
                    </p>
                </div>
                <div>
                    <h1 className="mb-1 text-2xl">Development</h1>
                    <p className="mb-2">Jan 10, 2022 – Mar 11, 2022</p>
                    <p className="font-light leading-7 opacity-75">
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
                    <h1 className="mb-2 text-2xl">Challenges and Solutions</h1>
                    <p className="font-light leading-7 opacity-75">
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
                    <h1 className="mb-2 text-2xl">Lessons Learned</h1>
                    <p className="font-light leading-7 opacity-75">
                        Through this project, I gained valuable experience in
                        handling asynchronous operations in React and managing
                        complex state changes. I also learned the importance of
                        modularizing CSS for maintainability and the challenges
                        associated with handling large codebases.
                    </p>
                </div>
                <div>
                    <h1 className="mb-2 text-2xl">Future Improvements</h1>
                    <p className="font-light leading-7 opacity-75">
                        Future improvements for Shipment Tracker include
                        modularizing the SCSS for better maintainability,
                        optimizing the state management logic to reduce function
                        lengths, and enhancing the mobile responsiveness of the
                        application.
                    </p>
                </div>
                <div>
                    <h1 className="mb-2 text-2xl">
                        Reflection on Agile Development
                    </h1>
                    <p className="font-light leading-7 opacity-75">
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
