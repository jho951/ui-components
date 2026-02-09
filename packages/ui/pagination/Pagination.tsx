import { cn } from "@/packages/lib";
import type { PaginationProps } from "./Pagination.types.ts";
import styles from "./Pagination.module.css";

const getRange = (current: number, total: number, siblingCount: number) => {
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

const Pagination = ({ currentPage, totalPages, onPageChange, siblingCount = 1 }: PaginationProps) => {
  const pages = getRange(currentPage, totalPages, siblingCount);

  return (
    <nav className={styles.nav} aria-label="Pagination">
      <button
        type="button"
        className={styles.arrow}
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <ul className={styles.list}>
        {pages.map((page, index) => (
          <li key={`${page}-${index}`}>
            {page === "..." ? (
              <span className={styles.ellipsis}>…</span>
            ) : (
              <button
                type="button"
                className={cn(styles.page, page === currentPage && styles.active)}
                onClick={() => onPageChange(page as number)}
                aria-current={page === currentPage ? "page" : undefined}
              >
                {page}
              </button>
            )}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={styles.arrow}
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </nav>
  );
};

export { Pagination };
