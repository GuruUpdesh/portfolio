import { Project } from "../projectConfig";

const TrackIt: Project = {
    name: "TrackIt",
    key: "track-it",
    year: 2023,
    gitHubLink: "https://github.com/GuruUpdesh/track-it",
    vercelProjectId: "prj_VuKOQZjJA3tFdhvtxTXPvB7M9ma3",
    websiteLink: "https://tackit.guruupdeshsingh.dev",
    videoFileName:
        "https://res.cloudinary.com/dioxu1vph/video/upload/v1722495068/nrb5z1qfodaskfu0kjlp.mp4",
    images: [
        {
            src: "/dashboard.webp",
            alt: "TrackIt dashboard displaying multiple shipments with their status, including Guitar, iPhone, Shoes, and Airpods Pro. A context menu is open for one shipment, showing options like 'Open Detailed View' and 'Copy Tracking Number'.",
        },
        {
            src: "/trackinghistory.webp",
            alt: "Tracking history for Guitar shipment in TrackIt. Timeline shows multiple status updates from Pooler, GA to Portland, OR, with the latest update indicating departure from a shipping partner's facility in Portland.",
        },
        {
            src: "/userguide.webp",
            alt: "TrackIt user guide showing sidebar navigation and instructions for adding a shipment, including steps to enter tracking numbers and name packages.",
        },
        {
            src: "/packageinfo.webp",
            alt: "Detailed view of Airpods Pro shipment in TrackIt. Shows package info including 3-day transit time, tracking number, route from Mira Loma, CA to Eugene, OR, and USPS Parcel Select service.",
        },
    ],
    content: {
        shortDescription:
            "TrackIt is a sophisticated web-based application designed to simplify shipment tracking by providing a unified platform. It allows users to monitor the status and journey of their packages across various couriers, including UPS, USPS, FedEx, OnTrac, and more.",
        detailedContent: (
            <>
                <div>
                    <h1 className="header-1">Project Overview</h1>
                    <p className="paragraph">
                        TrackIt is a comprehensive solution designed to
                        centralize and streamline the shipment tracking process.
                        By supporting multiple couriers, it offers users a
                        single platform to view and manage all their shipments,
                        reducing the hassle of tracking packages on different
                        websites.
                    </p>
                </div>
                <div>
                    <h1 className="mb-1 text-2xl">Development</h1>
                    <p className="paragraph">
                        The development of TrackIt involved several stages,
                        including initial research, setting up the development
                        environment, creating the core features, and
                        implementing advanced functionalities. Throughout the
                        process, modern web development practices and tools were
                        utilized to ensure a high-quality, efficient, and
                        user-friendly application.
                    </p>
                </div>
                <div>
                    <h1 className="header-1">Lessons Learned</h1>
                    <p className="paragraph">
                        Through the development of TrackIt, I enhanced my skills
                        in Next.js and React, learned the importance of
                        responsive design, and gained experience in implementing
                        real-time updates and user-friendly interfaces.
                        Additionally, managing the project helped me improve my
                        organizational and project management skills.
                    </p>
                </div>
                <div>
                    <h1 className="header-1">Future Improvements</h1>
                    <p className="paragraph">
                        In future iterations, I plan to enhance the real-time
                        update capabilities by incorporating WebSockets, improve
                        the UI for better user engagement, and add more advanced
                        filtering options. Additionally, I aim to integrate more
                        couriers and provide users with even more detailed
                        tracking information.
                    </p>
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
    primaryTech: "Next.js",
    techStack: {
        frontend: [
            { name: "Next.js", version: "13.4" },
            { name: "React", version: "18.2" },
            { name: "Tailwind CSS", version: "3.3" },
            { name: "Framer Motion", version: "10.12" },
            { name: "Radix UI" },
            { name: "Google Maps", version: "2.18" },
        ],
        state: [],
        backend: [],
        testing: [
            { name: "Jest", version: "29.6" },
            { name: "Cypress", version: "12.17" },
        ],
        tools: [
            { name: "VS Code" },
            { name: "GitHub" },
            { name: "Prettier", version: "3.0.0" },
            { name: "ESLint", version: "8.44.0" },
            { name: "Husky", version: "8.0.3" },
            { name: "NPM" },
        ],
    },
};

export default TrackIt;
