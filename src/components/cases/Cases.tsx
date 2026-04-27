import { useMobile } from "../../app/hooks/useMobile";
import "./Cases.scss";
import case1 from "../../assets/images/case1.png";
import case2 from "../../assets/images/case2.png";
import case3 from "../../assets/images/case3.png";

const cases = [
  {
    image: case1,
    client: "EDTECH / UA — ОНЛАЙН IT-АКАДЕМІЯ",
    title: "РІСТ БЮДЖЕТУ З $3,000 ДО $100,000+ / МІС",
    stat: "$2,400,000+",
    statSub: "керованого бюджету · 5 років партнерства",
    tags: ["220,000+ лідів", "4 країни", "Юніт-економіка"],
  },
  {
    image: case2,
    client: "CRYPTO EDTECH — DOUBLETOP",
    title: "ПОБУДОВА СИСТЕМИ ЗАЛУЧЕННЯ ХОЛОДНОГО ТРАФІКУ",
    stat: "$200,000+",
    statSub: "керованого бюджету · 2,5 роки",
    tags: ["Meta Ads", "YouTube Ads", "110+ роликів", "KPI-Driven"],
  },
  {
    image: case3,
    client: "EDTECH / UA — STAS AGAPOV P2P",
    title: "$385,000 ВИРУЧКИ / ROMI 620%+",
    stat: "75+",
    statSub: "креативних сценаріїв · 4 потоки · 1.5 роки",
    tags: ["Meta Ads", "Viral Hooks"],
  },
  {
    image: case1,
    client: "EDTECH / EU — NDA",
    title: "$830,000 ПРИБУТКУ · 48,000 ЛІДІВ",
    stat: "ROMI 755%",
    statSub: "Автоматизовані воронки · мульти-платформа",
    tags: ["Meta Ads", "Google Ads", "TikTok Ads", "Telegram Ads"],
  },
];

export function Cases() {
  const isMobile = useMobile();

  return (
    <section id="cases" className={`cases${isMobile ? " is-mobile" : ""}`}>
      <div className={`cases__container${isMobile ? " is-mobile" : ""}`}>
        <div className="cases__heading">
          <span className="cases__badge">РЕЗУЛЬТАТИ</span>
          <h2 className={`cases__title${isMobile ? " is-mobile" : ""}`}>КЕЙСИ — РЕЗУЛЬТАТИ ПАРТНЕРІВ</h2>
        </div>

        <div className={`cases__grid${isMobile ? " is-mobile" : ""}`}>
          {cases.map((c, i) => (
            <div key={i} className={`cases__card${isMobile ? " is-mobile" : ""}`}>
              <div className="cases__client">{c.client}</div>

              <div className={`cases__card-title${isMobile ? " is-mobile" : ""}`}>{c.title}</div>

              <div>
                <div className={`cases__stat${isMobile ? " is-mobile" : ""}`}>{c.stat}</div>
                <div className="cases__stat-sub">{c.statSub}</div>
              </div>

              <div className="cases__media">
                <img className="cases__image" src={c.image} alt={c.title} />
              </div>

              <div className="cases__tags">
                {c.tags.map((tag) => (
                  <span key={tag} className="cases__tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="cases__cta-wrap">
          <a href="#cta" className="cases__cta">ОТРИМАТИ ТАКІ РЕЗУЛЬТАТИ →</a>
        </div>
      </div>
    </section>
  );
}
