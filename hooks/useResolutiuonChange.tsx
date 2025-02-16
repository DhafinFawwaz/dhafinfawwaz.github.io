import { useEffect, useState } from "react";

const allSizeMap = [
  ["md", "(min-width: 768px)"],
  ["xs", "(min-width: 550px)"],
  ["2xs", "(min-width: 450px)"],
]
function getSizeMap(sizes: string[]) {
  const sizeMap = [];
  for (const [size, query] of allSizeMap) {
    if (sizes.includes(size)) sizeMap.push([size, query]);
  }
  return sizeMap;
}

export default function useResolutionChange(onChange: (size: string) => void, sizes = ["md", "2xs"]) {
  function getScreenSize() {
    if (typeof window === "undefined") return "other"; // Ensure SSR safety
    const sizeMap = getSizeMap(sizes);
    for (const [size, query] of sizeMap) {
      if (window.matchMedia(query).matches) return size;
    }
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
