import { useMobile } from "../../app/hooks/useMobile";
import "./Hero.scss";

const serviceTags = [
  "Органічний трафік",
  "Meta · Google · YouTube · TikTok Ads",
  "AI-аватари",
  "Воронка продажів та аналітика",
];

export function Hero() {
  const isMobile = useMobile();

  return (
    <section id="hero" className={`hero${isMobile ? " is-mobile" : ""}`}>
      <div className="hero__grid" />
      <div className="hero__glow" />

      <div className={`hero__container${isMobile ? " is-mobile" : ""}`}>
        <div className="hero-fade-1">
          <span className="hero__badge">МАРКЕТИНГОВЕ АГЕНТСТВО</span>
        </div>

        <h1 className={`hero-fade-2 hero__title${isMobile ? " is-mobile" : ""}`}>
          Побудуємо
          <br />
          <span className="hero__title-accent">Системи залучення клієнтів</span>
          <br />
          що масштабуються x10
        </h1>

        <p className={`hero-fade-3 hero__description${isMobile ? " is-mobile" : ""}`}>
          Від AI-аватарів до performance-воронок — повний цикл залучення та монетизації
        </p>

        <div className="hero-fade-4 hero__tags">
          {serviceTags.map((tag) => (
            <span key={tag} className={`hero__tag${isMobile ? " is-mobile" : ""}`}>
              {tag}
            </span>
          ))}
        </div>

        <div className="hero-fade-5 hero__cta-wrap">
          <a href="#cta" className={`hero__cta${isMobile ? " is-mobile" : ""}`}>
            ЗАБРОНЮВАТИ ДІАГНОСТИКУ →
          </a>
        </div>

        <div className={`arrow-bounce hero__arrows${isMobile ? " is-mobile" : ""}`}>
          {["↓", "↓", "↓"].map((a, i) => (
            <span key={i} className="hero__arrow">{a}</span>
          ))}
        </div>

        <div className={`hero-fade-5 hero__stats${isMobile ? " is-mobile" : ""}`}>
          {[
            { value: "$2.4M+", label: "керованого бюджету" },
            { value: "9 років", label: "побудови систем" },
            { value: "220K+", label: "лідів згенеровано" },
            { value: "755%", label: "максимальний ROMI" },
          ].map((stat) => (
            <div key={stat.value} className="hero__stat">
              <div className={`hero__stat-value${isMobile ? " is-mobile" : ""}`}>{stat.value}</div>
              <div className="hero__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
