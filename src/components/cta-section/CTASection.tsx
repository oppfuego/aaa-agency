import "./CTASection.scss";

const ctaItems = [
  "Аудит вашої поточної воронки та офферів",
  "Декомпозиція юніт-економіки та точки масштабування",
  "План впровадження ШІ та преміум-продакшену",
  "Аналіз конкурентів та пошук точок росту",
  "Персональний план виходу на стабільний ріст",
];

export function CTASection() {
  return (
    <section id="cta" className="cta-section">
      <div className="cta-section__grid" />
      <div className="cta-section__glow" />

      <div className="cta-section__container">
        <p className="cta-section__eyebrow">ТІЛЬКИ ДЛЯ ТИХ, ХТО ГОТОВИЙ ДО МАСШТАБУ Х10</p>

        <h2 className="cta-section__title">ЗАБРОНЮЙТЕ СТРАТЕГІЧНУ ДІАГНОСТИКУ</h2>

        <div className="cta-arrow cta-section__arrows">
          {["↓", "↓", "↓"].map((a, i) => (
            <span key={i} className="cta-section__arrow">{a}</span>
          ))}
        </div>

        <div className="cta-section__list">
          {ctaItems.map((item, i) => (
            <div key={i} className={`cta-section__list-item${i < ctaItems.length - 1 ? " has-border" : ""}`}>
              <span className="cta-section__list-index">{String(i + 1).padStart(2, "0")} /</span>
              <span className="cta-section__list-text">{item}</span>
            </div>
          ))}
        </div>

        <a href="mailto:hello@aaa.agency" className="cta-section__cta">
          ЗАБРОНЮВАТИ СТРАТЕГІЧНУ ДІАГНОСТИКУ
        </a>

        <p className="cta-section__footnote">Безкоштовно · Без зобов'язань · Тільки для підготовлених бізнесів</p>
      </div>
    </section>
  );
}
