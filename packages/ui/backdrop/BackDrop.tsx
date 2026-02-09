import { useEffect, useState } from "react";
import { cn } from '@lib/index.ts';
import type { BackDropProps } from "./BackDrop.types.ts";
import styles from "./BackDrop.module.css";

const BackDrop = ({visible = false, onClick, className, variant = "blur"}: BackDropProps) => {
    const [shouldRender, setRender] = useState(visible);

    useEffect(() => {
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

    return (
        <div className={cn(styles.backdrop, styles[variant], visible && styles.isActive, className)}
            onClick={onClick}
            aria-hidden={!visible}
        />
    );
};

export { BackDrop };