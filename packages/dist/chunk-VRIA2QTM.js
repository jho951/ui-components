// hook/useScroll.ts
import { useEffect, useState } from "react";
function useScrollY() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return scrollY;
}
function useScrollThresholdReached(threshold) {
  const [reached, setReached] = useState(false);
  useEffect(() => {
    const handler = () => {
      setReached(window.scrollY >= threshold);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);
  return reached;
}
function useScrollLock(lock) {
  useEffect(() => {
    const originalStyle = document.body.style.overflow;
    if (lock) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [lock]);
}
function useScrollSyncIndex(containerRef, setIndex, debounceMs = 100) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let timeoutId;
    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        if (!container) return;
        const newIndex = Math.round(container.scrollLeft / container.offsetWidth);
        setIndex(newIndex);
      }, debounceMs);
    };
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [containerRef, setIndex, debounceMs]);
}
function useScrollDetect(delay = 100) {
  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsScrolling(false);
      }, delay);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, [delay]);
  return isScrolling;
}

export {
  useScrollY,
  useScrollThresholdReached,
  useScrollLock,
  useScrollSyncIndex,
  useScrollDetect
};
