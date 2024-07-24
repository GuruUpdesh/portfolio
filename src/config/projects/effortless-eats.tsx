import { Project } from "../projectConfig";

const EffortlessEats: Project = {
    name: "Effortless Eats",
    key: "effortless-eats",
    year: 2023,
    websiteLink:
        "https://www.figma.com/proto/O0wG4BLDeQIDo8bkBqLs2x/Prototype?node-id=1019-51871&starting-point-node-id=1019%3A51871&t=tm9taTJIhQmsk4dW-1",
    images: [
        ["/home.png", "/menu.png"],
        ["/cart.png", "/placed.png"],
    ],
    content: {
        shortDescription: (
            <p>
                Effortless Eats is a UI/UX project designed for an Intro to
                Usability Engineering course, focused on creating a seamless and
                intuitive food ordering experience.
            </p>
        ),
        detailedContent: (
            <>
                <div>
                    <h1 className="mb-2 text-2xl">Project Overview</h1>
                    <p className="font-light leading-7 opacity-75">
                        Effortless Eats aims to provide users with an
                        easy-to-navigate platform for ordering food, featuring a
                        series of well-thought-out pages to streamline the
                        ordering process. The project was developed as part of
                        an Intro to Usability Engineering course, incorporating
                        extensive user feedback and heuristic evaluations to
                        refine the design.
                    </p>
                </div>
                <div>
                    <h1 className="mb-1 text-2xl">Development</h1>
                    <p className="mb-2">Jan 15, 2022 – May 5, 2022</p>
                    <p className="font-light leading-7 opacity-75">
                        This project involved creating high-fidelity prototypes
                        and conducting usability testing to gather feedback and
                        improve the design. The design process was iterative,
                        with multiple rounds of testing and refinement to ensure
                        the final product met user needs and expectations.
                    </p>
                </div>
                <div>
                    <h1 className="mb-2 text-2xl">Pages</h1>
                    <ul className="ml-4 flex flex-col gap-2 leading-7">
                        <li>
                            <strong className="font-normal">- Landing:</strong>
                            <span className="ml-[0.5ch] font-light opacity-75">
                                The first point of contact, offering a brief
                                description, navigation, and call-to-action
                                buttons for ordering and account creation.
                            </span>
                        </li>
                        <li>
                            <strong className="font-normal">- Order:</strong>
                            <span className="ml-[0.5ch] font-light opacity-75">
                                Features an interactive menu with
                                recommendations and order information, designed
                                for simplicity and ease of use.
                            </span>
                        </li>
                        <li>
                            <strong className="font-normal">- Cart:</strong>
                            <span className="ml-[0.5ch] font-light opacity-75">
                                Enables users to review and customize their
                                orders, integrating the checkout process for a
                                seamless experience.
                            </span>
                        </li>
                        <li>
                            <strong className="font-normal">- Review:</strong>
                            <span className="ml-[0.5ch] font-light opacity-75">
                                Provides a summary of the order, including a QR
                                code for pickup, and essential details such as
                                location, time, and instructions.
                            </span>
                        </li>
                        <li>
                            <strong className="font-normal">
                                - Sign Up and Login:
                            </strong>
                            <span className="ml-[0.5ch] font-light opacity-75">
                                Simple and straightforward registration and
                                login processes with back buttons for improved
                                navigation.
                            </span>
                        </li>
                        <li>
                            <strong className="font-normal">
                                - Rating Modal:
                            </strong>
                            <span className="ml-[0.5ch] font-light opacity-75">
                                Presents general and personalized ratings to
                                help users make informed decisions about their
                                food choices.
                            </span>
                        </li>
                        <li>
                            <strong className="font-normal">- Settings:</strong>
                            <span className="ml-[0.5ch] font-light opacity-75">
                                Centralized location to manage account settings,
                                payment information, dietary restrictions, and
                                toggle recommendations.
                            </span>
                        </li>
                        <li>
                            <strong className="font-normal">
                                - Edit Modal:
                            </strong>
                            <span className="ml-[0.5ch] font-light opacity-75">
                                Allows users to quickly modify selected menu
                                items by adjusting ingredient quantities,
                                removing ingredients, and providing special
                                instructions.
                            </span>
                        </li>
                        <li>
                            <strong className="font-normal">
                                - Order History:
                            </strong>
                            <span className="ml-[0.5ch] font-light opacity-75">
                                Enables users to view and manage past orders,
                                including details such as placed date, status,
                                order code, and amount.
                            </span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="mb-2 text-2xl">Challenges and Solutions</h1>
                    <p className="font-light leading-7 opacity-75">
                        Some challenges included ensuring a consistent and
                        intuitive navigation experience, integrating user
                        feedback effectively, and balancing functionality with
                        simplicity. These were addressed through iterative
                        design, usability testing, and heuristic evaluations.
                    </p>
                </div>
                <div>
                    <h1 className="mb-2 text-2xl">Lessons Learned</h1>
                    <p className="font-light leading-7 opacity-75">
                        This project reinforced the importance of user feedback
                        and iterative design in creating a successful product. I
                        also learned how to conduct usability tests and
                        incorporate heuristic evaluations to improve the user
                        experience.
                    </p>
                </div>
                <div>
                    <h1 className="mb-2 text-2xl">Future Improvements</h1>
                    <p className="font-light leading-7 opacity-75">
                        Future improvements include refining the user interface
                        based on additional feedback, enhancing the
                        responsiveness for mobile devices, and incorporating
                        more advanced features such as AI-driven recommendations
                        and dynamic pricing adjustments.
                    </p>
                </div>
            </>
        ),
        features: ["Interactive Prototype", "Thoughtful Design", "AI Images"],
    },
    primaryTech: "Figma",
    techStack: {
        frontend: [],
        state: [],
        backend: [],
        testing: [],
        tools: [],
    },
};

export default EffortlessEats;
