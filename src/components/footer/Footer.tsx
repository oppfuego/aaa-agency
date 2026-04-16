import { Instagram, Send } from "lucide-react";
import { useMobile } from "../../app/hooks/useMobile";
import "./Footer.scss";

export function Footer() {
  const isMobile = useMobile();

  return (
    <footer className={`footer${isMobile ? " is-mobile" : ""}`}>
      <div className={`footer__container${isMobile ? " is-mobile" : ""}`}>
        <div className={`footer__top${isMobile ? " is-mobile" : ""}`}>
          <a href="#" className="footer__logo">
            <div className="footer__logo-mark">
              <span className="footer__logo-mark-text">AAA</span>
            </div>
            <div>
              <div className="footer__logo-title">Agency</div>
              <div className="footer__logo-subtitle">Системи залучення клієнтів</div>
            </div>
          </a>

          {!isMobile && (
            <div className="footer__links">
              {[
                { label: "Послуги", href: "#services" },
                { label: "Кейси", href: "#cases" },
                { label: "Процес", href: "#process" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="footer__link">
                  {link.label}
                </a>
              ))}
            </div>
          )}

          <div className={`footer__socials${isMobile ? " is-mobile" : ""}`}>
            <div className="footer__social-links">
              {[
                { Icon: Instagram, href: "https://instagram.com" },
                { Icon: Send, href: "https://t.me" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <p className="footer__copyright">© 2025 AAA Agency</p>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__summary">Маркетингове агентство повного циклу · Системи залучення клієнтів що масштабуються x10</p>
          <a href="#" className="footer__policy">Політика конфіденційності</a>
        </div>
      </div>
    </footer>
  );
}
