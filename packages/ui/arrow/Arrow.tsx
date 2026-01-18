import React from "react";

import { Icon } from "../icon";
import {ArrowProps } from "./Arrow.types";
import {DIRECTION_MAP} from "./Arrow.constant";
import { cn } from "../../lib";
import styles from "./Arrow.module.css";

const Arrow = ({ size = 24, direction = "down", className }: ArrowProps) => {
  return (
    <span className={cn(styles.container, className)} style={{ "--arrow-rotation": DIRECTION_MAP[direction] } as React.CSSProperties}>
      <Icon name="arrow" size={size} />
    </span>
  );
};

export { Arrow };