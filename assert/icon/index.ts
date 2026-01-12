import { editorIcons } from "./editor";
import { shapeIcons } from "./shapes";
import { historyIcons } from "./history";
import { panelIcons } from "./panels";
import { miscIcons } from "./misc";
import { logoIcon } from "./logo";

export const ICONS = {
    ...editorIcons,
    ...shapeIcons,
    ...historyIcons,
    ...panelIcons,
    ...miscIcons,
    ...logoIcon,
} as const;

export type IconName = keyof typeof ICONS;
