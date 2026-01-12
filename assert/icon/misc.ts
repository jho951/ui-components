import { icon, STROKE, FILL } from "./_core";

export const miscIcons = {
    bell: icon([
        { el: "path", d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9", ...STROKE, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" },
        { el: "path", d: "M13.73 21a2 2 0 0 1-3.46 0", ...STROKE, strokeWidth: 2, strokeLinecap: "round" },
    ]),

    bellDot: icon([
        { el: "path", d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9", ...STROKE, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" },
        { el: "path", d: "M13.73 21a2 2 0 0 1-3.46 0", ...STROKE, strokeWidth: 2, strokeLinecap: "round" },
        { el: "circle", cx: 18, cy: 5, r: 3, fill: "#FF4D4F" },
    ]),

    "left-arrow": icon([
        { el: "path", d: "M14.5 5.5L9 12l5.5 6.5", ...STROKE, strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" },
    ]),

    "right-arrow": icon([
        { el: "path", d: "M9.5 5.5L15 12l-5.5 6.5", ...STROKE, strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" },
    ]),

    plus: icon([
        { el: "path", d: "M12 6v12M6 12h12", ...STROKE, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" },
    ]),

    users: icon([
        {
            el: "path",
            d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M8.5 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M17 11a4 4 0 0 1 0-7.75",
            ...STROKE,
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round",
        },
    ]),

    dragHandle: icon([
        { el: "circle", cx: 8, cy: 6, r: 1.5, ...FILL },
        { el: "circle", cx: 8, cy: 12, r: 1.5, ...FILL },
        { el: "circle", cx: 8, cy: 18, r: 1.5, ...FILL },
        { el: "circle", cx: 14, cy: 6, r: 1.5, ...FILL },
        { el: "circle", cx: 14, cy: 12, r: 1.5, ...FILL },
        { el: "circle", cx: 14, cy: 18, r: 1.5, ...FILL },
    ]),

    more: icon([
        { el: "path", d: "M6.5 12a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Z", ...FILL },
        { el: "path", d: "M13.25 12a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Z", ...FILL },
        { el: "path", d: "M20 12a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Z", ...FILL },
    ]),
} as const;
