import { useState, useEffect, useContext } from "react";
import { PreviewContext } from "../context/PreviewContext";

export function useMobile(): boolean {
  const { isMobilePreview } = useContext(PreviewContext);
  const [isSmallViewport, setIsSmallViewport] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 768
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsSmallViewport(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsSmallViewport(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isMobilePreview || isSmallViewport;
}
