import { Play } from "lucide-react";
import { useMobile } from "../../app/hooks/useMobile";
import "./VideoSection.scss";

const clientLogos = ["IT-Академія", "DoubleTop", "Stas Agapov", "EdTech EU", "Партнер 5"];

export function VideoSection() {
  const isMobile = useMobile();

  const stats = [
    { value: "3–5", label: "партнерів одночасно" },
    { value: "100%", label: "прозорість бюджету" },
    { value: "AI", label: "продакшен 24/7" },
  ];

  return (
    <section id="services" className={`video-section${isMobile ? " is-mobile" : ""}`}>
      <div className={`video-section__container${isMobile ? " is-mobile" : ""}`}>
        <div className={`video-section__grid${isMobile ? " is-mobile" : ""}`}>
          <div className={`video-section__top${isMobile ? " is-mobile" : ""}`}>
            <div className="video-section__left">
              <p className="video-section__proof-label">НАМ ДОВІРЯЮТЬ</p>
              <div className="video-section__logos">
                {clientLogos.map((name) => (
                  <div key={name} className="video-section__logo-card">
                    <span className="video-section__logo-text">{name}</span>
                  </div>
                ))}
              </div>

              <div className="video-section__stat-card">
                <p className="video-section__stat-value">9 років</p>
                <p className="video-section__stat-text">
                  побудови систем залучення трафіку — від органіки до масштабних performance-кампаній
                </p>
              </div>
            </div>

            <div className="video-section__center">
              <div className="video-section__video-card">
                <div className="video-section__play-button">
                  <Play size={22} fill="#fff" color="#fff" className="video-section__play-icon" />
                </div>
                <p className="video-section__video-label">ВІДЕО ЗІ СТУДІЇ</p>
                <span className="video-section__video-subtitle">MP4 · autoplay або click-to-play</span>
              </div>
            </div>

            <div className="video-section__right">
              <div className="why-us__stats">
                {stats.map((s) => (
                  <div key={s.value} className={`why-us__stat-card${isMobile ? " is-mobile" : ""}`}>
                    <div className="why-us__stat-glow" />
                    <div className={`why-us__stat-value${isMobile ? " is-mobile" : ""}`}>{s.value}</div>
                    <div className="why-us__stat-label">{s.label}</div>
                  </div>
                ))}

                <div className="why-us__contract-card">
                  <p className="why-us__contract-title">ФІНАНСОВА ВІДПОВІДАЛЬНІСТЬ</p>
                  <p className="why-us__contract-text">
                    Партнерська модель. Прозорість системи та виконання KPI — зафіксовані в договорі.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="video-section__bottom">
            <div className="video-section__cta-wrap">
              <a href="#cta" className="video-section__cta">
                ЗАБРОНЮВАТИ ДІАГНОСТИКУ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
