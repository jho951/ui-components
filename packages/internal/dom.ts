export function ensurePortalRoot(id: string): HTMLElement {
  if (typeof document === "undefined") {
    return {} as HTMLElement;
  }

  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("div");
    el.id = id;
    document.body.appendChild(el);
  }
  return el;
}
