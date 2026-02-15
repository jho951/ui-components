import { useEffect, useState, useRef } from "react";

import type { RichTextEditorProps } from "./RichTextEditor.types.ts";
import styles from "./RichTextEditor.module.css";

const RichTextEditor = ({ value = "", onChange, placeholder = "Type here...", minHeight = 140 }: RichTextEditorProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState({ bold: false, italic: false, underline: false });

  useEffect(() => {
    if (!ref.current) return;
    if (ref.current.innerHTML !== value) ref.current.innerHTML = value;
  }, [value]);

  useEffect(() => {
    const updateActive = () => {
      setActive({
        bold: document.queryCommandState("bold"),
        italic: document.queryCommandState("italic"),
        underline: document.queryCommandState("underline"),
      });
    };
    document.addEventListener("selectionchange", updateActive);
    return () => document.removeEventListener("selectionchange", updateActive);
  }, []);

  const command = (cmd: "bold" | "italic" | "underline") => {
    document.execCommand(cmd);
    onChange?.(ref.current?.innerHTML ?? "");
    setActive({
      bold: document.queryCommandState("bold"),
      italic: document.queryCommandState("italic"),
      underline: document.queryCommandState("underline"),
    });
  };

  return (
    <section className={styles.root}>
      <div className={styles.toolbar} role="toolbar" aria-label="Text formatting">
        <button type="button" className={styles.btn} aria-label="Bold" aria-pressed={active.bold} onClick={() => command("bold")}>B</button>
        <button type="button" className={styles.btn} aria-label="Italic" aria-pressed={active.italic} onClick={() => command("italic")}>I</button>
        <button type="button" className={styles.btn} aria-label="Underline" aria-pressed={active.underline} onClick={() => command("underline")}>U</button>
      </div>
      <div
        ref={ref}
        className={styles.editor}
        style={{ minHeight }}
        contentEditable
        role="textbox"
        aria-multiline="true"
        aria-label="Rich text editor"
        data-placeholder={placeholder}
        onInput={() => onChange?.(ref.current?.innerHTML ?? "")}
        onKeyDown={(event) => {
          if (!(event.metaKey || event.ctrlKey)) return;
          const key = event.key.toLowerCase();
          if (key === "b") {
            event.preventDefault();
            command("bold");
          }
          if (key === "i") {
            event.preventDefault();
            command("italic");
          }
          if (key === "u") {
            event.preventDefault();
            command("underline");
          }
        }}
      />
    </section>
  );
};

export { RichTextEditor };
