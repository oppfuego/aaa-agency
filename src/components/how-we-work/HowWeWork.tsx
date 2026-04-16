import { useMobile } from "../../app/hooks/useMobile";
import "./HowWeWork.scss";

const steps = [
  { num: "01.", title: "АУДИТ ПОТОЧНИХ РЕЗУЛЬТАТІВ", desc: "Шукаємо точки росту та декомпозуємо юніт-економіку" },
  { num: "02.", title: "АРХІТЕКТУРА ВОРОНОК", desc: "Будуємо шлях клієнта через Meta, YouTube та Telegram" },
  { num: "03.", title: "СТРАТЕГІЯ", desc: "Пошук контент-рішень для монетизації органічного та платного трафіку" },
  { num: "04.", title: "МАСШТАБУВАННЯ x10", desc: "Нарощування бюджетів зі збереженням стабільного ROI" },
];

export function HowWeWork() {
  const isMobile = useMobile();

  return (
    <section id="process" className={`how-we-work${isMobile ? " is-mobile" : ""}`}>
      <div className={`how-we-work__container${isMobile ? " is-mobile" : ""}`}>
        <div className={`how-we-work__grid${isMobile ? " is-mobile" : ""}`}>
          <div>
            <span className="how-we-work__badge">ПРОЦЕС</span>
            <h2 className={`how-we-work__title${isMobile ? " is-mobile" : ""}`}>ЯК МИ ПРАЦЮЄМО:</h2>

            {steps.map((step, i) => (
              <div key={i} className={`how-we-work__step${i < steps.length - 1 ? " has-border" : ""}`}>
                <div className={`how-we-work__step-num${isMobile ? " is-mobile" : ""}`}>{step.num}</div>
                <div>
                  <div className="how-we-work__step-title">{step.title}</div>
                  <div className="how-we-work__step-desc">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="how-we-work__aside">
            <div className={`how-we-work__timeline${isMobile ? " is-mobile" : ""}`}>
              <div className="how-we-work__timeline-grid" />
              <div className="how-we-work__timeline-content">
                <div className="how-we-work__timeline-label">ВІД ДІАГНОСТИКИ ДО РЕЗУЛЬТАТУ</div>
                {[
                  "7–10 днів → тестові запуски",
                  "2-й місяць → системні показники",
                  "3–6 місяців → масштабування x10",
                ].map((item, i) => (
                  <div key={i} className={`how-we-work__timeline-item${i < 2 ? " has-border" : ""}`}>
                    <span className="how-we-work__timeline-dot" />
                    <span className="how-we-work__timeline-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="how-we-work__note">
              <p className="how-we-work__note-title">Не беремо 20 клієнтів одночасно</p>
              <p className="how-we-work__note-text">Тільки 3–5 партнерів, у чий продукт ми занурюємося на рівні CMO.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
