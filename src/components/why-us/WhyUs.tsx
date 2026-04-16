import { useMobile } from "../../app/hooks/useMobile";
import "./WhyUs.scss";

const reasons = [
  {
    title: "ФОКУС НА РЕЗУЛЬТАТІ",
    text: "Ми не беремо 20 клієнтів одночасно. Тільки 3–5 партнерів, у чий продукт ми занурюємося на рівні СМО.",
  },
  {
    title: "НАСКРІЗНА АНАЛІТИКА",
    text: "Ви бачите не «ціну за клік», а шлях кожної гривні до каси через наскрізну аналітику.",
  },
  {
    title: "ТЕХНОЛОГІЧНІСТЬ",
    text: "Поки ринок використовує застарілі тренди, ми пробиваємо банерну сліпоту за допомогою нейромереж та преміум-продакшену.",
  },
];

const stats = [
  { value: "3–5", label: "партнерів одночасно" },
  { value: "100%", label: "прозорість бюджету" },
  { value: "AI", label: "продакшен 24/7" },
];

export function WhyUs() {
  const isMobile = useMobile();

  return (
    <section id="why-us" className={`why-us${isMobile ? " is-mobile" : ""}`}>
      <div className={`why-us__container${isMobile ? " is-mobile" : ""}`}>
        <div className={`why-us__grid${isMobile ? " is-mobile" : ""}`}>
          <div>
            <span className="why-us__badge">ПЕРЕВАГИ</span>
            <h2 className={`why-us__title${isMobile ? " is-mobile" : ""}`}>ЛІДЕРИ РИНКУ ПРАЦЮЮТЬ З НАМИ, БО:</h2>

            <div className="why-us__reasons">
              {reasons.map((r, i) => (
                <div key={i} className="why-us__reason-card">
                  <div className="why-us__reason-title">{r.title}</div>
                  <div className="why-us__reason-text">{r.text}</div>
                </div>
              ))}
            </div>
          </div>

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
              <p className="why-us__contract-text">Партнерська модель. Прозорість системи та виконання KPI — зафіксовані в договорі.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
