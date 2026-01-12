import React from "react";
import type { IconProps } from "./Icon.types";
import {ICONS} from "../../assert/icon";

export function Icon({ name, size = 24, title, ...rest }: IconProps) {
    const data = ICONS[name];

    const ariaProps = title
        ? { role: "img" as const, "aria-label": title }
        : { "aria-hidden": true as const };

    return (
        <svg viewBox={data.vb} width={size} height={size} focusable="false" {...ariaProps} {...rest}>
            {data.g.map(({ el, ...attrs }, i) =>
                React.createElement(el, { key: i, ...attrs })
            )}
        </svg>
    );
}
