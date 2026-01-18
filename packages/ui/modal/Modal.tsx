import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { BackDrop } from "../backdrop";
import type { ModalProps } from "./index";
import { ensurePortalRoot, cn} from "../../lib";
import { useScrollLock } from "../../hook";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, content, onClose, title = "미리보기", size = "medium" }: ModalProps) => {
    const [mounted, setMounted] = useState(false);
    const [visible, setVisible] = useState(false);
    const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
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

    // 3. 핸들러: 애니메이션과 함께 닫기
    const handleClose = useCallback(() => {
        setVisible(false);
        // 애니메이션 시간(0.3s) 후에 부모의 onClose 호출
        setTimeout(onClose, 300);
    }, [onClose]);

    // 4. 이벤트: ESC 키 및 포커스 관리
    useEffect(() => {
        if (!visible) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') handleClose();
            // 실무 팁: 여기서 Tab 키를 막는 Focus Trap 로직을 추가하면 접근성이 좋아집니다.
        };

        window.addEventListener('keydown', handleKeyDown);
        modalRef.current?.focus(); // 모달 오픈 시 포커싱

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [visible, handleClose]);

    if (!mounted || !portalElement) return null;

    return createPortal(
        <div className={styles.container} role="presentation">
            <BackDrop className={styles.overlay} visible={visible} onClick={handleClose}/>

            <div
                className={cn(styles.modal, styles[size], visible && styles.show)}
                ref={modalRef}
                tabIndex={-1}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                onClick={(e) => e.stopPropagation()}
            >
                <section className={styles.header}>
                    <h2 id="modal-title" className={styles.title}>{title}</h2>
                    <button
                        onClick={handleClose}
                        className={styles.closeBtn}
                        aria-label="모달 닫기"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </section>

                <article className={styles.content}>
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                </article>
            </div>
        </div>,
        portalElement
    );
};

export { Modal };