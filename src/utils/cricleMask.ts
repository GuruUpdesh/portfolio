export type CircleCut = "bottom" | "top" | "left" | "right";

export const getMaskImage = (cut: CircleCut | undefined) => {
    switch (cut) {
        case "bottom":
            return "linear-gradient(to bottom, black 49%, transparent 50%)";
        case "top":
            return "linear-gradient(to top, black 49%, transparent 50%)";
        case "left":
            return "linear-gradient(to left, black 49%, transparent 50%)";
        case "right":
            return "linear-gradient(to right, black 49%, transparent 50%)";
        default:
            return "";
    }
};
