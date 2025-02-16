import { useEffect, useRef } from "react";

function useDebouncedWindowWidth(callback: (width: number) => void, delay: number = 300) {
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    function handleResize() {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        callback(window.innerWidth);
      }, delay);
    };

    window.addEventListener("resize", handleResize);
    
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [callback, delay]);
}

export default useDebouncedWindowWidth;