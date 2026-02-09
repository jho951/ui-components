import { cn } from "@lib/index.ts";
import {Icon} from '../icon';
import type { LabelProps } from "./index.ts";
import styles from "./Label.module.css";

const Label=({className, children, htmlFor, required = false, variant = 'default', ...rest}: LabelProps) =>{
    return (
        <label htmlFor={htmlFor} className={cn(styles.label, styles[variant], className)} {...rest}>
            {children}
            {required && <Icon className={styles.required} name="required"/>}
        </label>
    );
}

export { Label };
