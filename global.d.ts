declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.css" {
    const css: string;
    export default css;
}

declare module "*.svg?raw" {
    const content: string;
    export default content;
}

declare module "*.svg" {
    const content: string;
    export default content;
}