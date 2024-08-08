import { Project } from "../projectConfig";

const KubaGame: Project = {
    name: "Kuba Game",
    key: "kuba-game",
    year: 2021,
    gitHubLink: "https://github.com/GuruUpdesh/kuba-game",
    websiteLink: "https://guruupdesh.github.io/kuba-game/",
    embed: "https://guruupdesh.github.io/kuba-game/",
    images: [],
    content: {
        shortDescription:
            "Kuba Game is a Python-based implementation of the traditional board game Kuba. It features a 7x7 board, turn-based gameplay, and unique rules such as the KO rule.",
        detailedContent: (
            <>
                <div>
                    <h1 className="header-1">Project Overview</h1>
                    <p className="paragraph">
                        Kuba Game follows the traditional rules of the Kuba
                        board game. The game is played on a 7x7 board where
                        players slide marbles to push their opponent&apos;s
                        marbles off the board. The objective is to capture seven
                        red marbles or eliminate all of the opponent&apos;s
                        marbles.
                    </p>
                </div>
                <div>
                    <h1 className="mb-1 text-2xl">Development</h1>
                    <p className="paragraph">
                        The development process involved creating a Python
                        program using Pygame for the graphical interface and
                        handling the game logic within the KubaGame class. This
                        project allowed me to enhance my understanding of
                        object-oriented programming and game development
                        concepts.
                    </p>
                </div>
                <div>
                    <h1 className="header-1">Challenges and Solutions</h1>
                    <p className="paragraph">
                        One of the main challenges was implementing the KO rule
                        to prevent immediate repetition of moves. Another
                        challenge was managing state updates in the game board
                        to ensure consistent and accurate gameplay. These were
                        addressed through careful design of the game logic and
                        extensive testing.
                    </p>
                </div>
                <div>
                    <h1 className="header-1">Lessons Learned</h1>
                    <p className="paragraph">
                        This project taught me valuable lessons in game
                        development, particularly in handling game state and
                        implementing complex rules. I also improved my skills in
                        Python and PyGame, and learned the importance of
                        thorough testing and debugging.
                    </p>
                </div>
                <div>
                    <h1 className="header-1">Future Improvements</h1>
                    <p className="paragraph">
                        Future improvements include enhancing the graphical
                        interface, adding sound effects for a more immersive
                        experience, and refining the game logic to handle edge
                        cases more effectively. Additionally, I plan to
                        implement AI opponents for single-player gameplay.
                    </p>
                </div>
            </>
        ),
        features: [
            "Turn-Based Gameplay",
            "KO Rule Implementation",
            "Win Conditions",
            "Graphical Interface",
        ],
    },
    primaryTech: "Python",
    techStack: {
        frontend: [{ name: "PyGame" }],
        state: [],
        backend: [{ name: "Python" }],
        testing: [],
        tools: [{ name: "PyCharm" }],
    },
};

export default KubaGame;
