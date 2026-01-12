import type { SVGAttributes } from "react";

export type SvgTag = "path" | "rect" | "circle" | "ellipse";

export type IconElement = { el: SvgTag } & SVGAttributes<SVGElement>;

export interface IconData {
    vb: string;
    g: IconElement[];
}

export const VB = "0 0 24 24" as const;

export const STROKE: SVGAttributes<SVGElement> = {
    stroke: "currentColor",
    fill: "none",
};

export const FILL: SVGAttributes<SVGElement> = {
    fill: "currentColor",
};

export const icon = (g: IconElement[]): IconData => ({ vb: VB, g });
