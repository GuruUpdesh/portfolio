import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children?: React.ReactNode;
  scale?: Number;
  bottom?: Number;
  cut?: "bottom" | "top" | "left" | "right";
  className?: String;
};

const Circle = ({ children, scale = 1, bottom = 0, cut, className }: Props) => {
  const getMaskImage = () => {
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
  return (
    <div
      style={{
        width: `calc(100% + 80px * ${scale})`,
        bottom: `${bottom}px`,
        maskImage: getMaskImage(),
      }}
      className={cn(
        "pointer-events-none absolute left-[50%] aspect-square translate-x-[-50%] rounded-[50%] border",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Circle;
