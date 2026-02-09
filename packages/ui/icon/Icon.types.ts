import type { SVGAttributes } from "react";

export type IconSource = "registry" | "url" | "auto";
export type IconName = string;

export type SvgTag =
    | "path"
    | "rect"
    | "circle"
    | "ellipse"
    | "line"
    | "polyline"
    | "polygon";

export type IconElement = { el: SvgTag } & SVGAttributes<SVGElement>;


export interface IconData {
    vb: string;       // viewBox
    g?: IconElement[]; // 객체 방식 (기존)
    raw?: string;      // SVG 내부 문자열 (Vite/Raw 방식)
    src?: string;      // SVG 파일 경로 (Next.js/Static 방식) [추가된 부분]
}

export type IconRegistry = Record<string, IconData>;

export type IconProps = {
    name: IconName;
    size?: number;
    title?: string;
    color?: string;

    /** registry/url/auto */
    source?: IconSource;

    /** url 모드에서 직접 경로 지정 */
    src?: string;

    /** 기본: "/assert/icons" (프로젝트가 assert에 svg 넣는 컨벤션) */
    basePath?: string;
    ext?: string;

    /** (옵션) 레지스트리 주입 */
    icons?: IconRegistry;
} & Omit<SVGAttributes<SVGSVGElement>, "children">;
