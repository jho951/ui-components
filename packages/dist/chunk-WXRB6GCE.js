import {
  SVG_ASSETS
} from "./chunk-KLEL7SOM.js";
import {
  useScrollLock
} from "./chunk-VRIA2QTM.js";
import {
  cn,
  ensurePortalRoot,
  generateId
} from "./chunk-Q55QXUNN.js";

// ui/icon/Icon.tsx
import React2 from "react";

// ui/icon/Icon.module.css
var Icon_default = {};

// ui/icon/Icon.util.ts
import React from "react";
var svgCache = /* @__PURE__ */ new Map();
function getRegistryIcon(name, registry) {
  if (!registry) return void 0;
  return registry[name];
}
function isExternalSvgPath(p) {
  return /^https?:\/\//.test(p) || p.startsWith("/");
}
function resolveIconSrc(name, src, basePath = "/assert/icons", ext = "svg") {
  if (src) return src;
  if (isExternalSvgPath(name)) return name;
  return `${basePath}/${name}.${ext}`;
}
function getAriaProps(title) {
  return title ? { role: "img", "aria-label": title } : { "aria-hidden": true };
}
function useInlineSvg(src) {
  const [svgText, setSvgText] = React.useState(null);
  React.useEffect(() => {
    let alive = true;
    if (!src) {
      setSvgText(null);
      return;
    }
    const cached = svgCache.get(src);
    if (cached) {
      setSvgText(cached);
      return;
    }
    fetch(src).then((r) => r.ok ? r.text() : Promise.reject()).then((txt) => {
      if (!alive) return;
      svgCache.set(src, txt);
      setSvgText(txt);
    }).catch(() => {
      if (!alive) return;
      setSvgText(null);
    });
    return () => {
      alive = false;
    };
  }, [src]);
  return svgText;
}
function extractSvgInner(svgText) {
  const m = svgText.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
  return m ? m[1] : svgText;
}
function extractViewBox(svgText, fallback = "0 0 24 24") {
  const m = svgText.match(/viewBox="([^"]+)"/i);
  return m ? m[1] : fallback;
}

// ui/icon/Icon.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var DEFAULT_ICONS = Object.entries(SVG_ASSETS).reduce(
  (acc, [name, content]) => {
    const isString = typeof content === "string";
    const isSvgContent = isString && content.includes("<svg");
    acc[name] = {
      vb: isSvgContent ? extractViewBox(content) : "0 0 24 24",
      raw: isSvgContent ? extractSvgInner(content) : void 0,
      src: !isSvgContent ? content : void 0
      // 문자열이 아니면 경로로 간주
    };
    return acc;
  },
  {}
);
var Icon = ({
  name,
  size = 24,
  title,
  color,
  source = "auto",
  src,
  basePath = "/assert/svg",
  ext = "svg",
  icons,
  className,
  style,
  ...rest
}) => {
  const registry = icons ?? DEFAULT_ICONS;
  const regData = getRegistryIcon(String(name), registry);
  const shouldUseRegistry = source === "registry" || source === "auto" && !!regData;
  const ariaProps = getAriaProps(title);
  const svgCommonProps = {
    width: size,
    height: size,
    focusable: "false",
    style: { color, ...style },
    ...ariaProps,
    ...rest
  };
  if (shouldUseRegistry && regData) {
    if (regData.raw || regData.g) {
      return /* @__PURE__ */ jsxs(
        "svg",
        {
          viewBox: regData.vb,
          className: cn(Icon_default.icon, Icon_default.registry, className),
          ...svgCommonProps,
          children: [
            regData.g?.map(
              ({ el, ...attrs }, i) => React2.createElement(el, { key: i, ...attrs })
            ),
            regData.raw && /* @__PURE__ */ jsx("g", { dangerouslySetInnerHTML: { __html: regData.raw } })
          ]
        }
      );
    }
  }
  const finalSrc = regData?.src || resolveIconSrc(String(name), src, basePath, ext);
  const svgText = useInlineSvg(finalSrc);
  if (!svgText) {
    return /* @__PURE__ */ jsx(
      "span",
      {
        className: cn(Icon_default.icon, Icon_default.placeholder, className),
        style: { width: size, height: size, ...style },
        "aria-hidden": true
      }
    );
  }
  return /* @__PURE__ */ jsx(
    "svg",
    {
      viewBox: extractViewBox(svgText),
      className: cn(Icon_default.icon, Icon_default.remote, className),
      ...svgCommonProps,
      dangerouslySetInnerHTML: { __html: extractSvgInner(svgText) }
    }
  );
};

// ui/arrow/Arrow.constant.ts
var DIRECTION_MAP = {
  down: "0deg",
  left: "90deg",
  up: "180deg",
  right: "-90deg"
};

// ui/arrow/Arrow.module.css
var Arrow_default = {};

// ui/arrow/Arrow.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Arrow = ({ size = 24, direction = "down", className }) => {
  return /* @__PURE__ */ jsx2("span", { className: cn(Arrow_default.container, className), style: { "--arrow-rotation": DIRECTION_MAP[direction] }, children: /* @__PURE__ */ jsx2(Icon, { name: "arrow", size }) });
};

// ui/input/Input.tsx
import { forwardRef, useId } from "react";

// ui/input/Input.module.css
var Input_default = {};

// ui/input/Input.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var Input = forwardRef(
  ({
    label,
    helperText,
    error,
    startIcon,
    endIcon,
    className,
    fullWidth = false,
    size = "m",
    id,
    disabled,
    ...rest
  }, ref) => {
    const autoId = useId();
    const inputId = id ?? autoId;
    const helperId = helperText ? `${inputId}-helper` : void 0;
    const errorId = error ? `${inputId}-error` : void 0;
    const describedBy = [helperId, errorId].filter(Boolean).join(" ") || void 0;
    return /* @__PURE__ */ jsxs2("div", { className: cn(Input_default.root, fullWidth && Input_default.fullWidth, className), children: [
      label && /* @__PURE__ */ jsx3("label", { className: Input_default.label, htmlFor: inputId, children: label }),
      /* @__PURE__ */ jsxs2("div", { className: cn(Input_default.control, Input_default[size], disabled && Input_default.disabled, error && Input_default.invalid), children: [
        startIcon && /* @__PURE__ */ jsx3("span", { className: Input_default.icon, children: startIcon }),
        /* @__PURE__ */ jsx3(
          "input",
          {
            ref,
            id: inputId,
            className: Input_default.input,
            "aria-invalid": Boolean(error) || void 0,
            "aria-describedby": describedBy,
            disabled,
            ...rest
          }
        ),
        endIcon && /* @__PURE__ */ jsx3("span", { className: Input_default.icon, children: endIcon })
      ] }),
      helperText && !error && /* @__PURE__ */ jsx3("span", { id: helperId, className: Input_default.helper, children: helperText }),
      error && /* @__PURE__ */ jsx3("span", { id: errorId, className: Input_default.error, role: "alert", children: error })
    ] });
  }
);
Input.displayName = "Input";

// ui/select/Select.tsx
import { forwardRef as forwardRef2, useId as useId2 } from "react";

// ui/select/Select.module.css
var Select_default = {};

// ui/select/Select.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var Select = forwardRef2(
  ({
    label,
    helperText,
    error,
    options,
    placeholder,
    className,
    fullWidth = false,
    size = "m",
    id,
    disabled,
    children,
    ...rest
  }, ref) => {
    const autoId = useId2();
    const selectId = id ?? autoId;
    const helperId = helperText ? `${selectId}-helper` : void 0;
    const errorId = error ? `${selectId}-error` : void 0;
    const describedBy = [helperId, errorId].filter(Boolean).join(" ") || void 0;
    return /* @__PURE__ */ jsxs3("div", { className: cn(Select_default.root, fullWidth && Select_default.fullWidth, className), children: [
      label && /* @__PURE__ */ jsx4("label", { className: Select_default.label, htmlFor: selectId, children: label }),
      /* @__PURE__ */ jsxs3("div", { className: cn(Select_default.control, Select_default[size], disabled && Select_default.disabled, error && Select_default.invalid), children: [
        /* @__PURE__ */ jsxs3(
          "select",
          {
            ref,
            id: selectId,
            className: Select_default.select,
            "aria-invalid": Boolean(error) || void 0,
            "aria-describedby": describedBy,
            disabled,
            ...rest,
            children: [
              placeholder && /* @__PURE__ */ jsx4("option", { value: "", disabled: true, children: placeholder }),
              options ? options.map((option) => /* @__PURE__ */ jsx4("option", { value: option.value, disabled: option.disabled, children: option.label }, option.value)) : children
            ]
          }
        ),
        /* @__PURE__ */ jsx4("span", { className: Select_default.caret, "aria-hidden": true, children: "\u25BE" })
      ] }),
      helperText && !error && /* @__PURE__ */ jsx4("span", { id: helperId, className: Select_default.helper, children: helperText }),
      error && /* @__PURE__ */ jsx4("span", { id: errorId, className: Select_default.error, role: "alert", children: error })
    ] });
  }
);
Select.displayName = "Select";

// ui/dropdown/Dropdown.tsx
import { useEffect, useId as useId3, useRef, useState } from "react";

// ui/dropdown/Dropdown.module.css
var Dropdown_default = {};

// ui/dropdown/Dropdown.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var Dropdown = ({
  label,
  items,
  value,
  placeholder = "Select",
  size = "m",
  align = "start",
  disabled = false,
  onSelect
}) => {
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(value);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const baseId = useId3();
  const currentValue = value ?? internalValue;
  const selectedItem = items.find((item) => item.value === currentValue);
  useEffect(() => {
    if (value !== void 0) {
      setInternalValue(value);
    }
  }, [value]);
  useEffect(() => {
    if (!open) return;
    const handleClick = (event) => {
      const target = event.target;
      if (!menuRef.current?.contains(target) && !triggerRef.current?.contains(target)) {
        setOpen(false);
      }
    };
    const handleKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);
  const handleSelect = (nextValue) => {
    if (disabled) return;
    setInternalValue(nextValue);
    onSelect?.(nextValue);
    setOpen(false);
    triggerRef.current?.focus();
  };
  return /* @__PURE__ */ jsxs4("div", { className: Dropdown_default.root, children: [
    label && /* @__PURE__ */ jsx5("span", { className: Dropdown_default.label, children: label }),
    /* @__PURE__ */ jsxs4(
      "button",
      {
        type: "button",
        ref: triggerRef,
        className: cn(Dropdown_default.trigger, Dropdown_default[size], Dropdown_default[align], disabled && Dropdown_default.disabled),
        "aria-haspopup": "menu",
        "aria-expanded": open,
        "aria-controls": `${baseId}-menu`,
        onClick: () => !disabled && setOpen((prev) => !prev),
        children: [
          /* @__PURE__ */ jsx5("span", { className: Dropdown_default.value, children: selectedItem ? selectedItem.label : placeholder }),
          /* @__PURE__ */ jsx5("span", { className: Dropdown_default.caret, "aria-hidden": true, children: "\u25BE" })
        ]
      }
    ),
    open && /* @__PURE__ */ jsx5(
      "ul",
      {
        id: `${baseId}-menu`,
        role: "menu",
        ref: menuRef,
        className: cn(Dropdown_default.menu, Dropdown_default[align]),
        children: items.map((item) => /* @__PURE__ */ jsx5("li", { role: "none", children: /* @__PURE__ */ jsx5(
          "button",
          {
            type: "button",
            role: "menuitem",
            className: cn(Dropdown_default.item, item.disabled && Dropdown_default.itemDisabled),
            onClick: () => !item.disabled && handleSelect(item.value),
            disabled: item.disabled,
            children: item.label
          }
        ) }, item.value))
      }
    )
  ] });
};

// ui/tooltip/Tooltip.tsx
import { useId as useId4 } from "react";

// ui/tooltip/Tooltip.module.css
var Tooltip_default = {};

// ui/tooltip/Tooltip.tsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var Tooltip = ({ content, children, position = "top" }) => {
  const tooltipId = useId4();
  return /* @__PURE__ */ jsxs5("span", { className: Tooltip_default.wrapper, "aria-describedby": tooltipId, children: [
    /* @__PURE__ */ jsx6("span", { className: Tooltip_default.target, tabIndex: 0, children }),
    /* @__PURE__ */ jsx6("span", { id: tooltipId, role: "tooltip", className: cn(Tooltip_default.tooltip, Tooltip_default[position]), children: content })
  ] });
};

// ui/toast/Toast.tsx
import { useEffect as useEffect2 } from "react";

// ui/toast/Toast.module.css
var Toast_default = {};

// ui/toast/Toast.tsx
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var Toast = ({
  open,
  title,
  message,
  variant = "info",
  duration = 3e3,
  onClose
}) => {
  useEffect2(() => {
    if (!open || !duration) return;
    const timer = window.setTimeout(() => onClose?.(), duration);
    return () => window.clearTimeout(timer);
  }, [open, duration, onClose]);
  if (!open) return null;
  const role = variant === "error" ? "alert" : "status";
  return /* @__PURE__ */ jsxs6("div", { className: cn(Toast_default.toast, Toast_default[variant]), role, "aria-live": variant === "error" ? "assertive" : "polite", children: [
    /* @__PURE__ */ jsxs6("div", { className: Toast_default.body, children: [
      title && /* @__PURE__ */ jsx7("strong", { className: Toast_default.title, children: title }),
      message && /* @__PURE__ */ jsx7("div", { className: Toast_default.message, children: message })
    ] }),
    onClose && /* @__PURE__ */ jsx7("button", { type: "button", className: Toast_default.close, onClick: onClose, "aria-label": "Close", children: "\xD7" })
  ] });
};

// ui/tabs/Tabs.tsx
import { useEffect as useEffect3, useId as useId5, useMemo, useRef as useRef2, useState as useState2 } from "react";

// ui/tabs/Tabs.module.css
var Tabs_default = {};

// ui/tabs/Tabs.tsx
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
var Tabs = ({ items, value, defaultValue, onChange }) => {
  const baseId = useId5();
  const [internalValue, setInternalValue] = useState2(() => defaultValue ?? items[0]?.value ?? "");
  const currentValue = value ?? internalValue;
  const tabRefs = useRef2([]);
  useEffect3(() => {
    if (value !== void 0) {
      setInternalValue(value);
    }
  }, [value]);
  const activeIndex = useMemo(() => items.findIndex((item) => item.value === currentValue), [items, currentValue]);
  const setValue = (nextValue) => {
    setInternalValue(nextValue);
    onChange?.(nextValue);
  };
  const handleKeyDown = (event) => {
    if (!items.length) return;
    const lastIndex = items.length - 1;
    let nextIndex = activeIndex;
    if (event.key === "ArrowRight") nextIndex = activeIndex === lastIndex ? 0 : activeIndex + 1;
    if (event.key === "ArrowLeft") nextIndex = activeIndex <= 0 ? lastIndex : activeIndex - 1;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = lastIndex;
    if (nextIndex !== activeIndex) {
      event.preventDefault();
      const nextItem = items[nextIndex];
      if (!nextItem.disabled) {
        setValue(nextItem.value);
        tabRefs.current[nextIndex]?.focus();
      }
    }
  };
  return /* @__PURE__ */ jsxs7("div", { className: Tabs_default.root, children: [
    /* @__PURE__ */ jsx8("div", { className: Tabs_default.tablist, role: "tablist", "aria-orientation": "horizontal", onKeyDown: handleKeyDown, children: items.map((item, index) => {
      const selected = item.value === currentValue;
      return /* @__PURE__ */ jsx8(
        "button",
        {
          ref: (el) => tabRefs.current[index] = el,
          role: "tab",
          type: "button",
          "aria-selected": selected,
          "aria-controls": `${baseId}-panel-${item.value}`,
          id: `${baseId}-tab-${item.value}`,
          tabIndex: selected ? 0 : -1,
          className: cn(Tabs_default.tab, selected && Tabs_default.active, item.disabled && Tabs_default.disabled),
          disabled: item.disabled,
          onClick: () => !item.disabled && setValue(item.value),
          children: item.label
        },
        item.value
      );
    }) }),
    items.map((item) => /* @__PURE__ */ jsx8(
      "div",
      {
        role: "tabpanel",
        id: `${baseId}-panel-${item.value}`,
        "aria-labelledby": `${baseId}-tab-${item.value}`,
        hidden: item.value !== currentValue,
        className: Tabs_default.panel,
        children: item.content
      },
      item.value
    ))
  ] });
};

// ui/accordion/Accordion.tsx
import { useMemo as useMemo2, useState as useState3 } from "react";

// ui/accordion/Accordion.module.css
var Accordion_default = {};

// ui/accordion/Accordion.tsx
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
var Accordion = ({ items, allowMultiple = false, defaultOpenIds = [] }) => {
  const [openIds, setOpenIds] = useState3(defaultOpenIds);
  const isOpen = (id) => openIds.includes(id);
  const toggle = (id) => {
    setOpenIds((prev) => {
      if (prev.includes(id)) return prev.filter((openId) => openId !== id);
      if (allowMultiple) return [...prev, id];
      return [id];
    });
  };
  const ids = useMemo2(() => new Set(items.map((item) => item.id)), [items]);
  return /* @__PURE__ */ jsx9("div", { className: Accordion_default.root, children: items.map((item) => {
    const open = isOpen(item.id);
    return /* @__PURE__ */ jsxs8("div", { className: cn(Accordion_default.item, open && Accordion_default.open, item.disabled && Accordion_default.disabled), children: [
      /* @__PURE__ */ jsxs8(
        "button",
        {
          type: "button",
          className: Accordion_default.trigger,
          "aria-expanded": open,
          "aria-controls": `${item.id}-panel`,
          id: `${item.id}-header`,
          disabled: item.disabled || !ids.has(item.id),
          onClick: () => toggle(item.id),
          children: [
            /* @__PURE__ */ jsx9("span", { children: item.title }),
            /* @__PURE__ */ jsx9("span", { className: Accordion_default.icon, "aria-hidden": true, children: open ? "\u2212" : "+" })
          ]
        }
      ),
      /* @__PURE__ */ jsx9(
        "div",
        {
          id: `${item.id}-panel`,
          role: "region",
          "aria-labelledby": `${item.id}-header`,
          className: Accordion_default.panel,
          hidden: !open,
          children: item.content
        }
      )
    ] }, item.id);
  }) });
};

// ui/table/Table.module.css
var Table_default = {};

// ui/table/Table.tsx
import { jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";
var Table = ({ columns, data, caption, striped = false, compact = false }) => {
  return /* @__PURE__ */ jsx10("div", { className: Table_default.wrapper, children: /* @__PURE__ */ jsxs9("table", { className: cn(Table_default.table, striped && Table_default.striped, compact && Table_default.compact), children: [
    caption && /* @__PURE__ */ jsx10("caption", { className: Table_default.caption, children: caption }),
    /* @__PURE__ */ jsx10("thead", { children: /* @__PURE__ */ jsx10("tr", { children: columns.map((col) => /* @__PURE__ */ jsx10("th", { style: { textAlign: col.align, width: col.width }, children: col.header }, col.key)) }) }),
    /* @__PURE__ */ jsx10("tbody", { children: data.map((row, idx) => /* @__PURE__ */ jsx10("tr", { children: columns.map((col) => /* @__PURE__ */ jsx10("td", { style: { textAlign: col.align }, children: row[col.key] }, col.key)) }, idx)) })
  ] }) });
};

// ui/pagination/Pagination.module.css
var Pagination_default = {};

// ui/pagination/Pagination.tsx
import { jsx as jsx11, jsxs as jsxs10 } from "react/jsx-runtime";
var getRange = (current, total, siblingCount) => {
  const totalNumbers = siblingCount * 2 + 3;
  const totalBlocks = totalNumbers + 2;
  if (total <= totalBlocks) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const leftSibling = Math.max(current - siblingCount, 1);
  const rightSibling = Math.min(current + siblingCount, total);
  const showLeftEllipsis = leftSibling > 2;
  const showRightEllipsis = rightSibling < total - 1;
  if (!showLeftEllipsis && showRightEllipsis) {
    const leftRange = Array.from({ length: totalNumbers }, (_, i) => i + 1);
    return [...leftRange, "...", total];
  }
  if (showLeftEllipsis && !showRightEllipsis) {
    const rightRange = Array.from({ length: totalNumbers }, (_, i) => total - totalNumbers + 1 + i);
    return [1, "...", ...rightRange];
  }
  return [1, "...", ...Array.from({ length: rightSibling - leftSibling + 1 }, (_, i) => leftSibling + i), "...", total];
};
var Pagination = ({ currentPage, totalPages, onPageChange, siblingCount = 1 }) => {
  const pages = getRange(currentPage, totalPages, siblingCount);
  return /* @__PURE__ */ jsxs10("nav", { className: Pagination_default.nav, "aria-label": "Pagination", children: [
    /* @__PURE__ */ jsx11(
      "button",
      {
        type: "button",
        className: Pagination_default.arrow,
        onClick: () => onPageChange(Math.max(1, currentPage - 1)),
        disabled: currentPage === 1,
        children: "Prev"
      }
    ),
    /* @__PURE__ */ jsx11("ul", { className: Pagination_default.list, children: pages.map((page, index) => /* @__PURE__ */ jsx11("li", { children: page === "..." ? /* @__PURE__ */ jsx11("span", { className: Pagination_default.ellipsis, children: "\u2026" }) : /* @__PURE__ */ jsx11(
      "button",
      {
        type: "button",
        className: cn(Pagination_default.page, page === currentPage && Pagination_default.active),
        onClick: () => onPageChange(page),
        "aria-current": page === currentPage ? "page" : void 0,
        children: page
      }
    ) }, `${page}-${index}`)) }),
    /* @__PURE__ */ jsx11(
      "button",
      {
        type: "button",
        className: Pagination_default.arrow,
        onClick: () => onPageChange(Math.min(totalPages, currentPage + 1)),
        disabled: currentPage === totalPages,
        children: "Next"
      }
    )
  ] });
};

// ui/breadcrumb/Breadcrumb.module.css
var Breadcrumb_default = {};

// ui/breadcrumb/Breadcrumb.tsx
import { jsx as jsx12, jsxs as jsxs11 } from "react/jsx-runtime";
var Breadcrumb = ({ items }) => {
  return /* @__PURE__ */ jsx12("nav", { "aria-label": "Breadcrumb", className: Breadcrumb_default.nav, children: /* @__PURE__ */ jsx12("ol", { className: Breadcrumb_default.list, children: items.map((item, index) => {
    const isLast = index === items.length - 1;
    const content = item.href ? /* @__PURE__ */ jsx12("a", { href: item.href, onClick: item.onClick, className: Breadcrumb_default.link, children: item.label }) : /* @__PURE__ */ jsx12("span", { className: cn(Breadcrumb_default.link, item.current && Breadcrumb_default.current), children: item.label });
    return /* @__PURE__ */ jsxs11("li", { className: Breadcrumb_default.item, children: [
      content,
      !isLast && /* @__PURE__ */ jsx12("span", { className: Breadcrumb_default.separator, children: "/" })
    ] }, `${item.label}-${index}`);
  }) }) });
};

// ui/avatar/Avatar.tsx
import { useMemo as useMemo3 } from "react";

// ui/avatar/Avatar.module.css
var Avatar_default = {};

// ui/avatar/Avatar.tsx
import { jsx as jsx13 } from "react/jsx-runtime";
var Avatar = ({ src, alt, name, size = "m", shape = "circle", className, ...rest }) => {
  const initials = useMemo3(() => {
    if (!name) return "";
    return name.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]?.toUpperCase()).join("");
  }, [name]);
  const sizeStyle = typeof size === "number" ? { width: size, height: size } : void 0;
  return /* @__PURE__ */ jsx13(
    "div",
    {
      className: cn(Avatar_default.avatar, Avatar_default[shape], typeof size === "string" && Avatar_default[size], className),
      style: sizeStyle,
      ...rest,
      children: src ? /* @__PURE__ */ jsx13("img", { src, alt: alt ?? name ?? "avatar", className: Avatar_default.image }) : /* @__PURE__ */ jsx13("span", { className: Avatar_default.fallback, children: initials || "?" })
    }
  );
};

// ui/badge/Badge.module.css
var Badge_default = {};

// ui/badge/Badge.tsx
import { jsx as jsx14 } from "react/jsx-runtime";
var Badge = ({ children, variant = "default", size = "m", className, ...rest }) => {
  return /* @__PURE__ */ jsx14("span", { className: cn(Badge_default.badge, Badge_default[variant], Badge_default[size], className), ...rest, children });
};

// ui/alert/Alert.module.css
var Alert_default = {};

// ui/alert/Alert.tsx
import { jsx as jsx15, jsxs as jsxs12 } from "react/jsx-runtime";
var Alert = ({ title, children, variant = "info", onClose }) => {
  const role = variant === "error" ? "alert" : "status";
  return /* @__PURE__ */ jsxs12("div", { className: cn(Alert_default.alert, Alert_default[variant]), role, "aria-live": variant === "error" ? "assertive" : "polite", children: [
    /* @__PURE__ */ jsxs12("div", { className: Alert_default.body, children: [
      title && /* @__PURE__ */ jsx15("div", { className: Alert_default.title, children: title }),
      /* @__PURE__ */ jsx15("div", { className: Alert_default.content, children })
    ] }),
    onClose && /* @__PURE__ */ jsx15("button", { type: "button", className: Alert_default.close, onClick: onClose, "aria-label": "Close", children: "\xD7" })
  ] });
};

// ui/skeleton/Skeleton.module.css
var Skeleton_default = {};

// ui/skeleton/Skeleton.tsx
import { jsx as jsx16 } from "react/jsx-runtime";
var Skeleton = ({ width = "100%", height = "1rem", circle = false, className, style, ...rest }) => {
  return /* @__PURE__ */ jsx16(
    "div",
    {
      className: cn(Skeleton_default.skeleton, circle && Skeleton_default.circle, className),
      style: { width, height, ...style },
      "aria-hidden": "true",
      ...rest
    }
  );
};

// ui/backdrop/BackDrop.tsx
import { useEffect as useEffect4, useState as useState4 } from "react";

// ui/backdrop/BackDrop.module.css
var BackDrop_default = {};

// ui/backdrop/BackDrop.tsx
import { jsx as jsx17 } from "react/jsx-runtime";
var BackDrop = ({ visible = false, onClick, className, variant = "blur" }) => {
  const [shouldRender, setRender] = useState4(visible);
  useEffect4(() => {
    if (visible) {
      setRender(true);
      document.body.style.overflow = "hidden";
    } else {
      const timer = setTimeout(() => {
        setRender(false);
        document.body.style.overflow = "auto";
      }, 300);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "auto";
      };
    }
  }, [visible]);
  if (!shouldRender) return null;
  return /* @__PURE__ */ jsx17(
    "div",
    {
      className: cn(BackDrop_default.backdrop, BackDrop_default[variant], visible && BackDrop_default.isActive, className),
      onClick,
      "aria-hidden": !visible
    }
  );
};

// ui/button/Button.tsx
import { forwardRef as forwardRef3 } from "react";

// ui/spinner/Spinner.module.css
var Spinner_default = {};

// ui/spinner/Spinner.tsx
import { jsx as jsx18 } from "react/jsx-runtime";
var Spinner = ({ size = 24, className, label = "Loading" }) => {
  return /* @__PURE__ */ jsx18("span", { className: cn(Spinner_default.spinner, className), role: "status", "aria-label": label, "aria-live": "polite", children: /* @__PURE__ */ jsx18(Icon, { name: "spinner", size }) });
};

// ui/button/Button.module.css
var Button_default = {};

// ui/button/Button.tsx
import { jsx as jsx19, jsxs as jsxs13 } from "react/jsx-runtime";
var BaseButton = forwardRef3(
  ({ className, children, variant = "primary", size = "m", disabled = false, ...rest }, ref) => {
    return /* @__PURE__ */ jsx19(
      "button",
      {
        className: cn(Button_default.button, Button_default[variant], Button_default[size], disabled && Button_default.disabled, className),
        disabled,
        ...rest,
        ref,
        children: /* @__PURE__ */ jsx19("span", { className: Button_default.label, children })
      }
    );
  }
);
BaseButton.displayName = "BaseButton";
var Button = forwardRef3(
  ({ children, isLoading, leftIcon, rightIcon, ...rest }, ref) => {
    if (isLoading) return /* @__PURE__ */ jsx19(Spinner, {});
    return /* @__PURE__ */ jsxs13(BaseButton, { ref, ...rest, children: [
      leftIcon && /* @__PURE__ */ jsx19("span", { className: Button_default.icon, children: leftIcon }),
      children,
      rightIcon && /* @__PURE__ */ jsx19("span", { className: Button_default.icon, children: rightIcon })
    ] });
  }
);
Button.displayName = "Button";

// ui/button/Button.constant.ts
var BUTTON_SIZES = ["s", "m", "l"];
var BUTTON_VARIANTS = ["primary", "secondary", "ghost", "text"];

// ui/card/Card.module.css
var Card_default = {};

// ui/card/Card.utils.tsx
import { jsx as jsx20 } from "react/jsx-runtime";
var createCardSection = (name) => {
  const Section = ({ className, children, ...rest }) => {
    return /* @__PURE__ */ jsx20("div", { className: cn(Card_default[name.toLowerCase()], className), ...rest, children });
  };
  Section.displayName = `Card.${name}`;
  return Section;
};

// ui/card/Card.tsx
import { forwardRef as forwardRef4 } from "react";
import { jsx as jsx21 } from "react/jsx-runtime";
var CardRoot = forwardRef4(
  ({ children, className, ...rest }, ref) => {
    return /* @__PURE__ */ jsx21("section", { className: cn(Card_default.card, className), ...rest, ref, children });
  }
);
var Card = CardRoot;
Card.Header = createCardSection("Header");
Card.Body = createCardSection("Body");
Card.Footer = createCardSection("Footer");
CardRoot.displayName = "Card";

// ui/checkbox/CheckBox.tsx
import { forwardRef as forwardRef5, useEffect as useEffect5, useImperativeHandle, useRef as useRef3 } from "react";

// ui/label/Label.module.css
var Label_default = {};

// ui/label/Label.tsx
import { jsx as jsx22, jsxs as jsxs14 } from "react/jsx-runtime";
var Label = ({ className, children, htmlFor, required = false, variant = "default", ...rest }) => {
  return /* @__PURE__ */ jsxs14("label", { htmlFor, className: cn(Label_default.label, Label_default[variant], className), ...rest, children: [
    children,
    required && /* @__PURE__ */ jsx22(Icon, { className: Label_default.required, name: "required" })
  ] });
};

// ui/checkbox/CheckBox.module.css
var CheckBox_default = {};

// ui/checkbox/CheckBox.tsx
import { jsx as jsx23, jsxs as jsxs15 } from "react/jsx-runtime";
var Checkbox = forwardRef5(
  ({ label, error, indeterminate, className, ...rest }, ref) => {
    const id = rest.id || generateId();
    const inputRef = useRef3(null);
    useImperativeHandle(ref, () => inputRef.current);
    useEffect5(() => {
      if (inputRef.current) inputRef.current.indeterminate = !!indeterminate;
    }, [indeterminate]);
    return /* @__PURE__ */ jsxs15(Label, { htmlFor: id, className: cn(CheckBox_default.container, rest.disabled && CheckBox_default.disabled, className), children: [
      /* @__PURE__ */ jsxs15("div", { className: CheckBox_default.wrapper, children: [
        /* @__PURE__ */ jsx23("input", { id, className: "sr-only", type: "checkbox", ref: inputRef, ...rest }),
        /* @__PURE__ */ jsx23("div", { className: cn(CheckBox_default.styledBox, error && CheckBox_default.error, rest.checked && CheckBox_default.checked, indeterminate && CheckBox_default.indeterminate), children: (rest.checked || indeterminate) && /* @__PURE__ */ jsx23(Icon, { name: indeterminate ? "indeterminate" : "check" }) })
      ] }),
      label && /* @__PURE__ */ jsx23("span", { className: CheckBox_default.labelText, children: label })
    ] });
  }
);
Checkbox.displayName = "Checkbox";

// ui/divider/Divider.module.css
var Divider_default = {};

// ui/divider/Divider.tsx
import { jsx as jsx24 } from "react/jsx-runtime";
var Divider = () => {
  return /* @__PURE__ */ jsx24("section", { className: Divider_default.divider });
};

// ui/form/Form.module.css
var Form_default = {};

// ui/form/Form.tsx
import { jsx as jsx25 } from "react/jsx-runtime";
var Form = ({ children, onSubmit, className, ...rest }) => {
  return /* @__PURE__ */ jsx25("form", { onSubmit, className: cn(Form_default.container, className), noValidate: true, ...rest, children });
};

// ui/modal/Modal.tsx
import { useCallback, useEffect as useEffect6, useRef as useRef4, useState as useState5 } from "react";
import { createPortal } from "react-dom";

// ui/modal/Modal.module.css
var Modal_default = {};

// ui/modal/Modal.tsx
import { jsx as jsx26, jsxs as jsxs16 } from "react/jsx-runtime";
var Modal = ({ isOpen, content, onClose, title = "\uBBF8\uB9AC\uBCF4\uAE30", size = "medium" }) => {
  const [mounted, setMounted] = useState5(false);
  const [visible, setVisible] = useState5(false);
  const [portalElement, setPortalElement] = useState5(null);
  const modalRef = useRef4(null);
  useEffect6(() => {
    if (!isOpen) {
      setVisible(false);
      const t = window.setTimeout(() => {
        setMounted(false);
      }, 300);
      return () => window.clearTimeout(t);
    }
    setMounted(true);
    setPortalElement(ensurePortalRoot("modal-root"));
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, [isOpen]);
  useScrollLock(mounted);
  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(onClose, 300);
  }, [onClose]);
  useEffect6(() => {
    if (!visible) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    modalRef.current?.focus();
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [visible, handleClose]);
  if (!mounted || !portalElement) return null;
  return createPortal(
    /* @__PURE__ */ jsxs16("div", { className: Modal_default.container, role: "presentation", children: [
      /* @__PURE__ */ jsx26(BackDrop, { className: Modal_default.overlay, visible, onClick: handleClose }),
      /* @__PURE__ */ jsxs16(
        "div",
        {
          className: cn(Modal_default.modal, Modal_default[size], visible && Modal_default.show),
          ref: modalRef,
          tabIndex: -1,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "modal-title",
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxs16("section", { className: Modal_default.header, children: [
              /* @__PURE__ */ jsx26("h2", { id: "modal-title", className: Modal_default.title, children: title }),
              /* @__PURE__ */ jsx26(
                "button",
                {
                  onClick: handleClose,
                  className: Modal_default.closeBtn,
                  "aria-label": "\uBAA8\uB2EC \uB2EB\uAE30",
                  children: /* @__PURE__ */ jsx26("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx26("path", { d: "M18 6L6 18M6 6l12 12" }) })
                }
              )
            ] }),
            /* @__PURE__ */ jsx26("article", { className: Modal_default.content, children: /* @__PURE__ */ jsx26("div", { dangerouslySetInnerHTML: { __html: content } }) })
          ]
        }
      )
    ] }),
    portalElement
  );
};

// ui/tag/Tag.module.css
var Tag_default = {};

// ui/tag/Tag.tsx
import { jsx as jsx27 } from "react/jsx-runtime";
var Tag = ({ active, color = "default", children }) => {
  return /* @__PURE__ */ jsx27("span", { className: cn(Tag_default.tag, Tag_default[color], active && Tag_default.active), children });
};

// ui/textarea/Textarea.tsx
import { forwardRef as forwardRef6, useEffect as useEffect7, useImperativeHandle as useImperativeHandle2, useRef as useRef5 } from "react";

// ui/textarea/Textarea.module.css
var Textarea_default = {};

// ui/textarea/Textarea.tsx
import { jsx as jsx28 } from "react/jsx-runtime";
var Textarea = forwardRef6(
  ({ autoResize = true, className, value, ...rest }, ref) => {
    const innerRef = useRef5(null);
    useImperativeHandle2(ref, () => innerRef.current, []);
    useEffect7(() => {
      if (!autoResize || !innerRef.current) return;
      const el = innerRef.current;
      el.style.height = "auto";
      el.style.height = `${el.scrollHeight}px`;
    }, [value, autoResize]);
    return /* @__PURE__ */ jsx28(
      "textarea",
      {
        className: cn(Textarea_default.textarea, autoResize && Textarea_default.autoResize, className),
        ref: innerRef,
        value,
        ...rest
      }
    );
  }
);
Textarea.displayName = "Textarea";

export {
  getRegistryIcon,
  isExternalSvgPath,
  resolveIconSrc,
  getAriaProps,
  useInlineSvg,
  extractSvgInner,
  extractViewBox,
  Icon,
  DIRECTION_MAP,
  Arrow,
  Input,
  Select,
  Dropdown,
  Tooltip,
  Toast,
  Tabs,
  Accordion,
  Table,
  Pagination,
  Breadcrumb,
  Avatar,
  Badge,
  Alert,
  Skeleton,
  BackDrop,
  Spinner,
  Button,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  createCardSection,
  Card,
  Label,
  Checkbox,
  Divider,
  Form,
  Modal,
  Tag,
  Textarea
};
