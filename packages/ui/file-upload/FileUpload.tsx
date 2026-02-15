import { useRef, useState } from "react";

import { cn } from "@lib/index.ts";
import type { FileUploadProps } from "./FileUpload.types.ts";
import styles from "./FileUpload.module.css";

const FileUpload = ({ accept, multiple, disabled, onFilesSelected, helperText }: FileUploadProps) => {
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const emitFiles = (list: FileList | null) => {
    if (!list) return;
    onFilesSelected?.(Array.from(list));
  };

  return (
    <div className={styles.root}>
      <div
        className={cn(styles.zone, dragging && styles.dragging)}
        onDragOver={(e) => {
          e.preventDefault();
          if (!disabled) setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          if (disabled) return;
          emitFiles(e.dataTransfer.files);
        }}
      >
        <input
          ref={inputRef}
          className={styles.input}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={(e) => emitFiles(e.target.files)}
        />
        <p>Drag and drop files here</p>
        <button type="button" className={styles.button} onClick={() => inputRef.current?.click()} disabled={disabled}>
          Choose files
        </button>
      </div>
      {helperText && <p className={styles.helper}>{helperText}</p>}
    </div>
  );
};

export { FileUpload };
