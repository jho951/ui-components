import { icon, STROKE, FILL } from "./_core";

export const panelIcons = {
    zoom: icon([
        { el: "circle", cx: 11, cy: 11, r: 6.5, ...STROKE },
        { el: "path", d: "M20 20l-3.2-3.2", ...STROKE, strokeLinecap: "round" },
    ]),

    style: icon([
        { el: "path", d: "M5.5 13.5h6a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z", ...STROKE, strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" },
        { el: "path", d: "M10.5 8.5h6a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z", ...STROKE, strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" },
        { el: "path", d: "M15.5 3.5h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2z", ...STROKE, strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" },
        { el: "path", d: "M18 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0z", ...FILL },
    ]),

    open: icon([{ el: "path", d: "M3 7h7l2 2h9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z", ...STROKE }]),
    close: icon([{ el: "path", d: "M6 6 L18 18 M18 6 L6 18", ...STROKE, strokeWidth: 1.7, strokeLinecap: "round" }]),
} as const;
