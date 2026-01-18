import React from "react";
import type { IconData, IconRegistry } from "./Icon.types";

const svgCache = new Map<string, string>();

export function getRegistryIcon(
    name: string,
    registry?: IconRegistry | null
): IconData | undefined {
    if (!registry) return undefined;
    return registry[name];
}
export function isExternalSvgPath(p: string) {
    return /^https?:\/\//.test(p) || p.startsWith("/");
}

export function resolveIconSrc(
    name: string,
    src?: string,
    basePath = "/assert/icons",
    ext = "svg"
) {
    if (src) return src;
    if (isExternalSvgPath(name)) return name;
    return `${basePath}/${name}.${ext}`;
}

export function getAriaProps(title?: string) {
    return title
        ? ({ role: "img", "aria-label": title } as const)
        : ({ "aria-hidden": true } as const);
}

export function useInlineSvg(src?: string) {
    const [svgText, setSvgText] = React.useState<string | null>(null);

    React.useEffect(() => {
        let alive = true;

        if (!src) {
            setSvgText(null);
            return;
        }

        const cached = svgCache.get(src);
        if (cached) {
            setSvgText(cached);
            return;
        }

        fetch(src)
            .then((r) => (r.ok ? r.text() : Promise.reject()))
            .then((txt) => {
                if (!alive) return;
                svgCache.set(src, txt);
                setSvgText(txt);
            })
            .catch(() => {
                if (!alive) return;
                setSvgText(null);
            });

        return () => {
            alive = false;
        };
    }, [src]);

    return svgText;
}

export function extractSvgInner(svgText: string) {
    const m = svgText.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
    return m ? m[1] : svgText;
}

export function extractViewBox(svgText: string, fallback = "0 0 24 24") {
    const m = svgText.match(/viewBox="([^"]+)"/i);
    return m ? m[1] : fallback;
}
