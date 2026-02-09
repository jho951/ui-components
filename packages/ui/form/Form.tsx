import { cn } from "@/packages/lib";
import type { FormProps } from "./index.ts";
import styles from "./Form.module.css";

const Form = ({ children, onSubmit, className, ...rest }: FormProps) => {
  return (
    <form onSubmit={onSubmit} className={cn(styles.container, className)} noValidate {...rest}>
      {children}
    </form>
  );
};

export { Form };
