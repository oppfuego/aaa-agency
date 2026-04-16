import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useMobile } from "../../app/hooks/useMobile";
import { usePreviewContext } from "../../app/context/PreviewContext";
import "./Header.scss";

const navLinks = [
  { label: "Послуги", href: "#services" },
  { label: "Кейси", href: "#cases" },
  { label: "Процес", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMobile();
  const { isMobilePreview } = usePreviewContext();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`landing-header${isMobilePreview ? " is-preview" : ""}${scrolled ? " is-scrolled" : ""}`}
    >
      <div className={`landing-header__inner${isMobile ? " is-mobile" : ""}${isMobilePreview ? " is-preview" : ""}`}>
        <a href="#" className="landing-header__logo">
          <div className="landing-header__logo-mark">
            <span className="landing-header__logo-mark-text">AAA</span>
          </div>
          {!isMobile && (
            <span className="landing-header__logo-text">Agency</span>
          )}
        </a>

        {!isMobile && (
          <nav className="landing-header__nav">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="landing-header__nav-link">
                {link.label}
              </a>
            ))}
          </nav>
        )}

        <div className="landing-header__controls">
          {!isMobile && (
            <a href="#cta" className="landing-header__cta">
              ЗАБРОНЮВАТИ ДІАГНОСТИКУ
            </a>
          )}

          {isMobile && (
            <>
              <a href="#cta" className="landing-header__mobile-cta">
                ДІАГНОСТИКА
              </a>
              <button
                className="landing-header__menu-button"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Меню"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </>
          )}
        </div>
      </div>

      {isMobile && mobileOpen && (
        <div className="landing-header__mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="landing-header__mobile-link"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
