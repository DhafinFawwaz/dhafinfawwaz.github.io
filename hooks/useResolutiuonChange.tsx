import { useEffect, useState } from "react";

export default function useResolutionChange(onChange: (size: string) => void) {
  const getScreenSize = () => {
    if (typeof window === "undefined") return "other"; // Ensure SSR safety
    if (window.matchMedia("(min-width: 768px)").matches) return "md";
    if (window.matchMedia("(min-width: 450px)").matches) return "2xs";
    return "other";
  };

  const [screenSize, setScreenSize] = useState("other"); // Avoid SSR mismatch

  useEffect(() => {
    const updateSize = () => {
      const newSize = getScreenSize();
      setScreenSize(newSize);
      onChange(newSize);
    };

    updateSize(); // Set initial size on client after mounting
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, [onChange]);

  return screenSize;
}
