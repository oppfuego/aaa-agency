import "./HowWeWork.scss";

const steps = [
  { num: "01.", title: "АУДИТ ПОТОЧНИХ РЕЗУЛЬТАТІВ", desc: "Шукаємо точки росту та декомпозуємо юніт-економіку" },
  { num: "02.", title: "АРХІТЕКТУРА ВОРОНОК", desc: "Будуємо шлях клієнта через Meta, YouTube та Telegram" },
  { num: "03.", title: "СТРАТЕГІЯ", desc: "Пошук контент-рішень для монетизації органічного та платного трафіку" },
  { num: "04.", title: "МАСШТАБУВАННЯ x10", desc: "Нарощування бюджетів зі збереженням стабільного ROI" },
];

const timeline = [
  "7–10 днів → тестові запуски",
  "2-й місяць → системні показники",
  "3–6 місяців → масштабування x10",
];

export function HowWeWork() {
  return (
    <section id="process" className="how-we-work">
      <div className="how-we-work__container">
        <div className="how-we-work__hero">
          <div className="how-we-work__timeline">
            <div className="how-we-work__timeline-grid" />
            <div className="how-we-work__timeline-content">
              <p className="how-we-work__timeline-label">ВІД ДІАГНОСТИКИ ДО РЕЗУЛЬТАТУ</p>
              <div className="how-we-work__timeline-list">
                {timeline.map((item, i) => (
                  <div key={item} className={`how-we-work__timeline-item${i < timeline.length - 1 ? " has-border" : ""}`}>
                    <span className="how-we-work__timeline-dot" />
                    <span className="how-we-work__timeline-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>ч
          </div>

          <div className="how-we-work__note">
            <p className="how-we-work__note-title">Не беремо 20 клієнтів одночасно</p>
            <p className="how-we-work__note-text">Тільки 3–5 партнерів, у чий продукт ми занурюємося на рівні CMO.</p>
          </div>
        </div>

        <div className="how-we-work__steps-block">
          <span className="how-we-work__badge">ПРОЦЕС. ЯК МИ ПРАЦЮЄМО:</span>

          <div className="how-we-work__steps-grid">
            {steps.map((step) => (
              <article key={step.num} className="how-we-work__step">
                <div className="how-we-work__step-num">{step.num}</div>
                <div className="how-we-work__step-body">
                  <h3 className="how-we-work__step-title">{step.title}</h3>
                  <p className="how-we-work__step-desc">{step.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
