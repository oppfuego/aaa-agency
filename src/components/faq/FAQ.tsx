import { useState } from "react";
import { Plus, X } from "lucide-react";
import { useMobile } from "../../app/hooks/useMobile";
import "./FAQ.scss";

const faqItems = [
  {
    q: "ЯК ШВИДКО ВИ ПОБАЧИТЕ ПЕРШІ РЕЗУЛЬТАТИ?",
    a: "Перші тестові запуски та креативи ми готуємо за 7–10 днів. Вихід на системні показники — на 2-й місяць. Повноцінне масштабування x10 — на 3–6-й місяць.",
  },
  {
    q: "У ЧОМУ РІЗНИЦЯ МІЖ AAA ТА ІНШИМИ АГЕНЦІЯМИ?",
    a: "ФОКУС: не беремо 20 клієнтів — лише 3–5 партнерів глибокого занурення. ТЕХНОЛОГІЧНІСТЬ: AI-аватари, нейромережі, преміум-продакшен замість шаблонів. ФІНАНСОВА ВІДПОВІДАЛЬНІСТЬ: партнерська модель з KPI у договорі.",
  },
  {
    q: "ЯКІ ГАРАНТІЇ ВИ НАДАЄТЕ?",
    a: "Прозорість системи та виконання KPI — зафіксовані в договорі. Партнерська модель означає, що ми зацікавлені у вашому зростанні так само, як ви.",
  },
  {
    q: "КОМУ НАЛЕЖАТЬ ПРАВА НА AI-АВАТАРІВ?",
    a: "Усі права на AI-аватарів, сценарії та вироблений контент — повністю вашому бренду. Ми не залишаємо собі жодних прав на ваш контент.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isMobile = useMobile();

  return (
      <section id="faq" className={`faq${isMobile ? " is-mobile" : ""}`}>
        <div className={`faq__container${isMobile ? " is-mobile" : ""}`}>
          <div className="faq__content">
            <span className="faq__badge">FAQ</span>
            <h2 className={`faq__title${isMobile ? " is-mobile" : ""}`}>ЧАСТІ ЗАПИТАННЯ</h2>
            <p className="faq__subtitle">Якщо не знайшли відповіді — забронюйте діагностику.</p>

            <div className="faq__list">
              {faqItems.map((item, i) => (
                  <div key={i} className="faq__item">
                    <button
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className="faq__button"
                    >
                  <span
                      className={`faq__question${isMobile ? " is-mobile" : ""}${openIndex === i ? " is-open" : ""}`}
                  >
                    {item.q}
                  </span>
                      <span className={`faq__icon${openIndex === i ? " is-open" : ""}`}>
                    {openIndex === i ? <X size={16} /> : <Plus size={16} />}
                  </span>
                    </button>

                    <div className={`faq__answer-wrap${openIndex === i ? " is-open" : ""}`}>
                      <p className="faq__answer">{item.a}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>

        <div className="faq__cta-section">
          <div className={`faq__cta-card${isMobile ? " is-mobile" : ""}`}>
            <div className="faq__cta-grid" />
            <div className="faq__cta-content">
              <p className="faq__cta-eyebrow">ЗАЛИШИЛИСЬ ПИТАННЯ?</p>
              <h3 className={`faq__cta-title${isMobile ? " is-mobile" : ""}`}>
                Отримайте відповіді на безкоштовній діагностиці
              </h3>
              <p className="faq__cta-text">
                45 хвилин — і ви матимете чіткий план виходу на системний ріст.
              </p>
              <a href="#cta" className="faq__cta-link">
                ЗАБРОНЮВАТИ ДІАГНОСТИКУ →
              </a>
            </div>
          </div>
        </div>
      </section>
  );
}