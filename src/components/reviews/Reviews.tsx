import { useMobile } from "../../app/hooks/useMobile";
import "./Reviews.scss";

const reviews = [
  {
    name: "ІМ'Я ПАРТНЕРА",
    role: "CEO · IT-Академія",
    initials: "ІП",
    text: "За 5 років співпраці команда AAA Agency вивела нас з $3k на $100k+ рекламного бюджету/місяць. Системний підхід, наскрізна аналітика та розуміння юніт-економіки — це їхня ДНК.",
  },
  {
    name: "ІМ'Я ПАРТНЕРА",
    role: "Founder · DoubleTop",
    initials: "ІП",
    text: "За 2,5 роки — $200,000+ керованого бюджету та 110+ відеокреативів. AAA не просто «запускають рекламу», вони будують цілу систему залучення холодного трафіку.",
  },
  {
    name: "ІМ'Я ПАРТНЕРА",
    role: "CEO · Stas Agapov P2P",
    initials: "ІП",
    text: "$385,000 виручки за 1.5 роки при ROMI 620%+. Вони знайшли viral hooks, які пробивали банерну сліпоту краще за всіх, з ким ми працювали раніше.",
  },
];

export function Reviews() {
  const isMobile = useMobile();

  return (
    <section id="reviews" className={`reviews${isMobile ? " is-mobile" : ""}`}>
      <div className={`reviews__container${isMobile ? " is-mobile" : ""}`}>
        <div className="reviews__heading">
          <span className="reviews__badge">ВІДГУКИ</span>
          <h2 className={`reviews__title${isMobile ? " is-mobile" : ""}`}>ІСТОРІЇ МАСШТАБУВАННЯ</h2>
        </div>

        <div className={`reviews__grid${isMobile ? " is-mobile" : ""}`}>
          {reviews.map((review, i) => (
            <div key={i} className={`reviews__card${isMobile ? " is-mobile" : ""}`}>
              <div className="reviews__person">
                <div className="reviews__avatar">
                  <span className="reviews__avatar-text">{review.initials}</span>
                </div>
                <div>
                  <div className="reviews__name">{review.name}</div>
                  <div className="reviews__role">{review.role}</div>
                </div>
              </div>

              <div className="reviews__stars">★★★★★</div>

              <p className="reviews__text">{review.text}</p>
            </div>
          ))}
        </div>

        <div className="reviews__cta-wrap">
          <a href="#cta" className="reviews__cta">ЗАБРОНЮВАТИ ДІАГНОСТИКУ →</a>
        </div>
      </div>
    </section>
  );
}
