import { useState, useEffect } from "react";
import { usePreviewContext } from "../../app/context/PreviewContext";
import "./StickyButton.scss";

export function StickyButton() {
  const [visible, setVisible] = useState(false);
  const { isMobilePreview } = usePreviewContext();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide in mobile preview (not needed — mobile has CTAs everywhere)
  if (isMobilePreview) return null;

  return (
    <a href="#cta" className={`sticky-button${visible ? " is-visible" : ""}`}>
      ЗАБРОНЮВАТИ ДІАГНОСТИКУ
    </a>
  );
}
