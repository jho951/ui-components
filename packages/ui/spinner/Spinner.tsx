import { SpinnerProps } from "./Spinner.types";
import { Icon } from "../icon";
import styles from './Spinner.module.css'
/**
 * @file Spinner.tsx
 * @description
 * Icon SVG 스피너를 불러와 회전 애니메이션을 주는 Atom 컴포넌트입니다.
 *
 * @usage
 * ```tsx
 * <Spinner />
 * <Spinner size={32} className="custom-spinner" />
 * ```
 *
 * @prop {number} [size=24] - 아이콘 크기(px)
 * @prop {string} [className] - 추가 클래스명
 */
function Spinner({ size = 24, className, label = "Loading" }: SpinnerProps) {
    return (
        <span
            className={[styles.spinner, className].filter(Boolean).join(" ")}
            role="status"
            aria-label={label}
            aria-live="polite"
        >
            <Icon name="spinner" size={size} />
        </span>
    );
}

export { Spinner };
