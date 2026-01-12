import { icon, STROKE, FILL } from "./_core";

export const editorIcons = {
    select: icon([
        { el: "path", d: "M4 4l5 13 2-5 5-2-12-6z", ...FILL },
        { el: "path", d: "M14 14l6 6", ...STROKE, strokeWidth: 2, strokeLinecap: "round" },
    ]),

    bucket: icon([
        { el: "path", d: "M4 10l6-6 6 6v6a3 3 0 01-3 3H7a3 3 0 01-3-3v-6z", ...FILL },
        { el: "path", d: "M10 4l6 6", ...STROKE, strokeWidth: 2, strokeLinecap: "round" },
    ]),

    text: icon([
        { el: "path", d: "M4 6h16M12 6v12", ...STROKE, strokeWidth: 2, strokeLinecap: "round" },
    ]),

    eyedrop: icon([
        { el: "path", d: "M14 3l7 7-5 5-7-7 5-5z", ...FILL },
        { el: "path", d: "M3 21l6-6", ...STROKE, strokeWidth: 2, strokeLinecap: "round" },
    ]),

    magnifier: icon([
        { el: "circle", cx: 10, cy: 10, r: 6, ...STROKE, strokeWidth: 2 },
        { el: "path", d: "M14.5 14.5L20 20", ...STROKE, strokeWidth: 2, strokeLinecap: "round" },
    ]),
} as const;
