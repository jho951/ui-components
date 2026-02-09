import type { SpinnerProps } from "./index.ts";
import {cn} from '@lib/index.ts';
import { Icon } from "../icon";
import styles from "./Spinner.module.css";

/**
 * `Spinner` 컴포넌트는 시스템의 로딩 상태를 시각적으로 나타냅니다.
 * - `Icon` 컴포넌트의 'spinner' 아이콘을 기반으로 작동합니다.
 * - CSS 애니메이션을 통해 무한 회전하며, 접근성을 고려하여 `role="status"`를 포함합니다.
 *
 * ### 사용 예시
 * ```tsx
 * <Spinner size={32} label="데이터 불러오는 중" />
 * ```
 */
const Spinner = ({ size = 24, className, label = "Loading" }: SpinnerProps) => {
    return (
        <span className={cn(styles.spinner, className)} role="status" aria-label={label} aria-live="polite">
            <Icon name="spinner" size={size} />
        </span>
    );
};

export { Spinner };