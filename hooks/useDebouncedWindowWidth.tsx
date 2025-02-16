import { useEffect, useRef } from "react";

export default function useDebouncedWindowWidth(callback: (width: number) => void, delay: number = 300) {
  if(typeof window === "undefined") return;
  const timeoutRef = useRef<NodeJS.Timeout>();
  const lastWidthRef = useRef(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth === lastWidthRef.current) return;

      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        lastWidthRef.current = window.innerWidth;
        callback(window.innerWidth);
      }, delay);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [callback, delay]);

}

