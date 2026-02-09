// lib/deep-freeze.ts
function deepFreeze(obj, seen = /* @__PURE__ */ new WeakSet()) {
  if (obj === null || typeof obj !== "object" || seen.has(obj)) {
    return obj;
  }
  seen.add(obj);
  const keys = [...Object.getOwnPropertyNames(obj), ...Object.getOwnPropertySymbols(obj)];
  for (const k of keys) {
    const v = obj[k];
    if (v && typeof v === "object") {
      deepFreeze(v, seen);
    }
  }
  return Object.freeze(obj);
}

// lib/cn.ts
function cn(...inputs) {
  const frozenInputs = deepFreeze(inputs);
  const classList = frozenInputs.filter((item) => typeof item === "string" && item.trim() !== "");
  return classList.join(" ");
}

// lib/dom.ts
function ensurePortalRoot(id) {
  if (typeof document === "undefined") {
    return {};
  }
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("div");
    el.id = id;
    document.body.appendChild(el);
  }
  return el;
}

// lib/id.ts
function generateId() {
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).slice(2, 9);
  if (typeof window !== "undefined" && window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }
  if (typeof window !== "undefined" && window.crypto?.getRandomValues) {
    return ("10000000-1000-4000-8000" + -1e11).replace(
      /[018]/g,
      (c) => (c ^ window.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
  return `${timestamp}-${randomPart}`;
}

// lib/os.ts
function getUAData() {
  const nav = navigator;
  const uad = nav.userAgentData;
  if (!uad || typeof uad !== "object") return null;
  return uad;
}
function isMac() {
  if (typeof window === "undefined") return false;
  const uaData = getUAData();
  const platforms = uaData?.platforms;
  if (Array.isArray(platforms)) {
    const hit = platforms.some((p2) => /mac|ios|iphone|ipad|ipados/i.test(p2.platform));
    if (hit) return true;
  }
  const p = (navigator.platform || "").toLowerCase();
  const ua = (navigator.userAgent || "").toLowerCase();
  return /mac|iphone|ipad|ipod/.test(p) || /mac os x|iphone|ipad|ipod/.test(ua);
}
var MOD = isMac() ? "Meta" : "Control";

export {
  deepFreeze,
  cn,
  ensurePortalRoot,
  generateId,
  MOD
};
