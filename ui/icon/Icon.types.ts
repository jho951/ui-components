import type { SVGAttributes } from "react";
import {IconName} from "../../assert/icon";

export type IconProps = {
    name: IconName;
    size?: number;
    title?: string;
} & Omit<SVGAttributes<SVGSVGElement>, "children">;
