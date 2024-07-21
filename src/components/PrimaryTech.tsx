import React from "react";
import { FaPython, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { PiFileSql } from "react-icons/pi";
import { SiNextdotjs, SiExpress, SiJetpackcompose } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { Dot } from "lucide-react";

export type PrimaryTech =
    | "Next.js"
    | "React"
    | "Python"
    | "SQL"
    | "Mongo"
    | "Express"
    | "Jetpack Compose"
    | "Figma";

type Props = {
    title: PrimaryTech;
};

function getIcon(title: Props["title"]) {
    switch (title) {
        case "Next.js":
            return <SiNextdotjs />;
        case "React":
            return <FaReact />;
        case "Python":
            return <FaPython />;
        case "SQL":
            return <PiFileSql />;
        case "Mongo":
            return <DiMongodb />;
        case "Express":
            return <SiExpress />;
        case "Figma":
            return <CgFigma />;
        case "Jetpack Compose":
            return <SiJetpackcompose />;
        default:
            return <Dot />;
    }
}

const PrimaryTech = ({ title }: Props) => {
    return (
        <p className="flex items-center gap-1 opacity-50">
            {getIcon(title)}
            {title}
        </p>
    );
};

export default PrimaryTech;