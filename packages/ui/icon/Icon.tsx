import React from "react";
import styles from "./Icon.module.css";

import { cn } from "@/packages/lib/cn.ts";
import type { IconProps, IconRegistry } from "./Icon.types.ts";
import {
    extractSvgInner,
    extractViewBox,
    getAriaProps,
    getRegistryIcon,
    resolveIconSrc,
    useInlineSvg,
} from "./Icon.util.ts";

import { SVG_ASSETS } from "@/packages/assert/svg";

const DEFAULT_ICONS: IconRegistry = Object.entries(SVG_ASSETS).reduce(
    (acc, [name, content]) => {
        const isString = typeof content === "string";
        const isSvgContent = isString && content.includes("<svg");

        acc[name] = {
            vb: isSvgContent ? extractViewBox(content) : "0 0 24 24",
            raw: isSvgContent ? extractSvgInner(content) : undefined,
            src: !isSvgContent ? content : undefined, // 문자열이 아니면 경로로 간주
        };
        return acc;
    },
    {} as IconRegistry
);

const Icon = ({
                  name,
                  size = 24,
                  title,
                  color,
                  source = "auto",
                  src,
                  basePath = "/assert/svg",
                  ext = "svg",
                  icons,
                  className,
                  style,
                  ...rest
              }: IconProps) => {
    const registry = (icons ?? DEFAULT_ICONS);
    const regData = getRegistryIcon(String(name), registry);

    const shouldUseRegistry =
        source === "registry" || (source === "auto" && !!regData);

    const ariaProps = getAriaProps(title);

    const svgCommonProps = {
        width: size,
        height: size,
        focusable: "false" as const,
        style: { color, ...style },
        ...ariaProps,
        ...rest,
    };

    if (shouldUseRegistry && regData) {
        if (regData.raw || regData.g) {
            return (
                <svg
                    viewBox={regData.vb}
                    className={cn(styles.icon, styles.registry, className)}
                    {...svgCommonProps}
                >
                    {regData.g?.map(({ el, ...attrs }, i) =>
                        React.createElement(el, { key: i, ...attrs })
                    )}
                    {regData.raw && (
                        <g dangerouslySetInnerHTML={{ __html: regData.raw }} />
                    )}
                </svg>
            );
        }
    }

    const finalSrc = regData?.src || resolveIconSrc(String(name), src, basePath, ext);
    const svgText = useInlineSvg(finalSrc);

    if (!svgText) {
        return (
            <span
                className={cn(styles.icon, styles.placeholder, className)}
                style={{ width: size, height: size, ...style }}
                aria-hidden
            />
        );
    }

    return (
        <svg
            viewBox={extractViewBox(svgText)}
            className={cn(styles.icon, styles.remote, className)}
            {...svgCommonProps}
            dangerouslySetInnerHTML={{ __html: extractSvgInner(svgText) }}
        />
    );
};

export { Icon };