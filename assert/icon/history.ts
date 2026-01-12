import { icon, STROKE, FILL } from "./_core";

export const historyIcons = {
    undo: icon([
        { el: "path", d: "M9 7H5v4", ...STROKE, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" },
        { el: "path", d: "M5 11a7 7 0 1 0 7-7", ...STROKE, strokeWidth: 2, strokeLinecap: "round" },
    ]),

    redo: icon([
        { el: "path", d: "M15 7h4v4", ...STROKE, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" },
        { el: "path", d: "M19 11a7 7 0 1 1-7-7", ...STROKE, strokeWidth: 2, strokeLinecap: "round" },
    ]),

    save: icon([
        { el: "path", d: "M4 4h12l4 4v12H4z", ...STROKE },
        { el: "path", d: "M8 4v6h8V4", ...STROKE },
        { el: "rect", x: 7, y: 14, width: 10, height: 5, ...STROKE },
    ]),

    trash: icon([
        { el: "path", d: "M3 6h18", ...STROKE, strokeLinecap: "round" },
        { el: "path", d: "M8 6V4h8v2", ...STROKE },
        { el: "rect", x: 6, y: 6, width: 12, height: 14, ...STROKE },
        { el: "path", d: "M10 10v6M14 10v6", ...STROKE },
    ]),

    file: icon([
        { el: "path", d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", ...FILL, opacity: 0.12 },
        { el: "path", d: "M14 2v6h6M8 13h8M8 17h8M8 9h4", ...STROKE, strokeWidth: 1.5 },
    ]),
} as const;
