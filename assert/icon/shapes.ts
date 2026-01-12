import { icon, STROKE } from "./_core";

export const shapeIcons = {
    shapes: icon([
        { el: "rect", x: 3, y: 3, width: 8, height: 8, ...STROKE },
        { el: "circle", cx: 17, cy: 7, r: 4, ...STROKE },
        { el: "path", d: "M4 20l4-6 4 6H4z", ...STROKE },
    ]),

    transform: icon([
        { el: "rect", x: 5, y: 5, width: 14, height: 14, ...STROKE },
        { el: "path", d: "M5 9h4M15 19v-4M19 15h-4M9 5v4", ...STROKE, strokeLinecap: "round" },
    ]),

    rect: icon([{ el: "rect", x: 4, y: 6, width: 16, height: 12, ...STROKE }]),
    ellipse: icon([{ el: "ellipse", cx: 12, cy: 12, rx: 8, ry: 5, ...STROKE }]),

    line: icon([{ el: "path", d: "M4 18L20 6", ...STROKE, strokeWidth: 2, strokeLinecap: "round" }]),
    polygon: icon([{ el: "path", d: "M12 3l8 5-3 10H7L4 8l8-5z", ...STROKE }]),
    star: icon([{ el: "path", d: "M12 3l3 6 6 .9-4.5 4.3L18 21l-6-3-6 3 1.5-6.8L3 9.9 9 9l3-6z", ...STROKE }]),

    spinner: icon([
        { el: "path", d: "M12 3a9 9 0 1 1 0 18a9 9 0 1 1 0-18", ...STROKE, strokeWidth: 2, strokeOpacity: 0.25 },
        { el: "path", d: "M21 12a9 9 0 0 0-9-9", ...STROKE, strokeWidth: 2, strokeLinecap: "round" },
    ]),

    freeDraw: icon([{ el: "path", d: "M3 16c3-6 8-4 11-1s5 3 7-2", ...STROKE, strokeLinecap: "round" }]),

    resize: icon([
        { el: "path", d: "M4 20l6-6M14 10l6-6", ...STROKE, strokeLinecap: "round" },
        { el: "rect", x: 3, y: 3, width: 8, height: 8, ...STROKE },
        { el: "rect", x: 13, y: 13, width: 8, height: 8, ...STROKE },
    ]),

    skew: icon([{ el: "path", d: "M5 17l4-10h10l-4 10H5z", ...STROKE }]),
    flipH: icon([{ el: "path", d: "M12 4v16M12 4L4 12l8 8M12 4l8 8-8 8", ...STROKE }]),
    flipV: icon([{ el: "path", d: "M4 12h16M4 12l8-8 8 8M4 12l8 8 8-8", ...STROKE }]),
    reset: icon([
        { el: "path", d: "M12 6V3l-3 3 3 3V6", ...STROKE, strokeLinecap: "round" },
        { el: "circle", cx: 12, cy: 12, r: 7, ...STROKE },
    ]),
} as const;
