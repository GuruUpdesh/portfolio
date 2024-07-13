import React from "react";
import { FaPython, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { PiFileSql } from "react-icons/pi";
import { SiNextdotjs } from "react-icons/si";

export type Tech = "Next.js" | "React" | "Python" | "SQL" | "Mongo";

type Props = {
  title: Tech;
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
  }
}

const TechStack = ({ title }: Props) => {
  return (
    <p className="flex items-center gap-1 opacity-50">
      {getIcon(title)}
      {title}
    </p>
  );
};

export default TechStack;
