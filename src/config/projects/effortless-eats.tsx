import { Project } from "../projectConfig";

const EffortlessEats: Project = {
    name: "Effortless Eats",
    key: "effortless-eats",
    year: 2023,
    websiteLink:
        "https://www.figma.com/proto/O0wG4BLDeQIDo8bkBqLs2x/Prototype?node-id=1019-51871&starting-point-node-id=1019%3A51871&t=tm9taTJIhQmsk4dW-1",
    embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FO0wG4BLDeQIDo8bkBqLs2x%2FPrototype%3Fnode-id%3D1019-51871%26scaling%3Dscale-down%26content-scaling%3Dfixed%26t%3DrLha2lTfZRaTycUS-1",
    images: [
        {
            src: "/home.webp",
            alt: "Effortless Eats landing page with logo and navigation menu. Main text reads 'Effortless Eats' with a description highlighting speed, ease, and customization. Features 'Order Now' and 'Create an Account' buttons. Background shows floating food ingredients.",
        },
        {
            src: "/menu.webp",
            alt: "Effortless Eats ordering interface. Left side shows recommended items and menu categories with food images. Right side displays pickup information and order summary with items like Coffee and Fresh Burger. Total cost is $19.96.",
        },
        {
            src: "/cart.webp",
            alt: "Effortless Eats checkout page showing cart contents on the left with items like Mac & Cheese and Lemonade. Right side displays pickup information, payment options including Visa and PayPal, and tip selection. Total order cost is $19.96.",
        },
        {
            src: "/placed.webp",
            alt: "Blurred Effortless Eats information page with a QR code visible. Right side shows a partially visible navigation menu including Home, Menu, and Order History options.",
        },
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
                    <h1 className="header-1">Overview</h1>
                    <p className="paragraph">
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
                    <h1 className="header-1">Development</h1>
                    <p className="paragraph">
                        This project involved creating high-fidelity prototypes
                        and conducting usability testing to gather feedback and
                        improve the design. The design process was iterative,
                        with multiple rounds of testing and refinement to ensure
                        the final product met user needs and expectations.
                    </p>
                </div>
                <div>
                    <h1 className="header-1">Pages</h1>
                    <ul className="block-list">
                        <li>
                            <b>Landing</b>
                            <p className="paragraph">
                                The first point of contact, offering a brief
                                description, navigation, and call-to-action
                                buttons for ordering and account creation.
                            </p>
                        </li>
                        <li>
                            <b>Order</b>
                            <p className="paragraph">
                                Features an interactive menu with
                                recommendations and order information, designed
                                for simplicity and ease of use.
                            </p>
                        </li>
                        <li>
                            <b>Cart</b>
                            <p className="paragraph">
                                Enables users to review and customize their
                                orders, integrating the checkout process for a
                                seamless experience.
                            </p>
                        </li>
                        <li>
                            <b>Review</b>
                            <p className="paragraph">
                                Provides a summary of the order, including a QR
                                code for pickup, and essential details such as
                                location, time, and instructions.
                            </p>
                        </li>
                        <li>
                            <b>Sign Up and Login</b>
                            <p className="paragraph">
                                Simple and straightforward registration and
                                login processes with back buttons for improved
                                navigation.
                            </p>
                        </li>
                        <li>
                            <b>Rating Modal</b>
                            <p className="paragraph">
                                Presents general and personalized ratings to
                                help users make informed decisions about their
                                food choices.
                            </p>
                        </li>
                        <li>
                            <b>Settings</b>
                            <p className="paragraph">
                                Centralized location to manage account settings,
                                payment information, dietary restrictions, and
                                toggle recommendations.
                            </p>
                        </li>
                        <li>
                            <b>Edit Modal</b>
                            <p className="paragraph">
                                Allows users to quickly modify selected menu
                                items by adjusting ingredient quantities,
                                removing ingredients, and providing special
                                instructions.
                            </p>
                        </li>
                        <li>
                            <b>Order History</b>
                            <p className="paragraph">
                                Enables users to view and manage past orders,
                                including details such as placed date, status,
                                order code, and amount.
                            </p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="header-1">Challenges and Solutions</h1>
                    <p className="paragraph">
                        Some challenges included ensuring a consistent and
                        intuitive navigation experience, integrating user
                        feedback effectively, and balancing functionality with
                        simplicity. These were addressed through iterative
                        design, usability testing, and heuristic evaluations.
                    </p>
                </div>
                <div>
                    <h1 className="header-1">Lessons Learned</h1>
                    <p className="paragraph">
                        This project reinforced the importance of user feedback
                        and iterative design in creating a successful product. I
                        also learned how to conduct usability tests and
                        incorporate heuristic evaluations to improve the user
                        experience.
                    </p>
                </div>
                <div>
                    <h1 className="header-1">Future Improvements</h1>
                    <p className="paragraph">
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
