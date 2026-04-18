import { useMobile } from "../../app/hooks/useMobile";
import "./PainPoints.scss";

const painItems = [
    {
        pain: "ТРАФІК Є, ОКУПНОСТІ НЕМАЄ.",
        solution: "Монетизуємо будь-яке джерело: від інфлюенсерів до платної реклами, перетворюючи ліди на стабільний прибуток.",
    },
    {
        pain: "РЕКЛАМА ПРАЦЮЄ «ХВИЛЯМИ».",
        solution: "Будуємо жорсткі performance-воронки. Ви отримуєте прогнозовану систему лідогенерації.",
    },
    {
        pain: "ЗАЛЕЖНІСТЬ ВІД БЛОГЕРІВ.",
        solution: "Будуємо ШІ-контент-заводи та продюсуємо AI-аватарів вашого бренду 24/7.",
    },
    {
        pain: "КОНТЕНТ ЗАРАДИ ЛАЙКІВ.",
        solution: "Власний відеопродакшен повного циклу: ідея, зйомка, продюсування.",
    },
    {
        pain: "ХАОС У МАСШТАБУВАННІ.",
        solution: "Поєднуємо 9-річний досвід побудови систем залучення трафіку в єдину воронку.",
    },
];

const results = [
    { icon: "📈", title: "Прогнозований ROI", desc: "Кожна гривня відстежується від кліку до каси через наскрізну аналітику." },
    { icon: "🤖", title: "AI-контент 24/7", desc: "ШІ-аватари та автоматизовані воронки, що генерують трафік без вашої участі." },
    { icon: "🎯", title: "Системне масштабування", desc: "Зростання бюджетів зі збереженням стабільного CAC і ROMI." },
    { icon: "🎥", title: "Преміум-продакшен", desc: "Відеостудія повного циклу: від сценарію до фінального монтажу." },
];

export function PainPoints() {
    const isMobile = useMobile();

    return (
        <section id="pains" className={`pain-points${isMobile ? " is-mobile" : ""}`}>
            <div className={`pain-points__container${isMobile ? " is-mobile" : ""}`}>
                <div className={`pain-points__grid${isMobile ? " is-mobile" : ""}`}>
                    <div className="pain-points__left">
                        <h2 className={`pain-points__title${isMobile ? " is-mobile" : ""}`}>КОМУ МИ НЕОБХІДНІ:</h2>

                        <div className={`pain-points__cards${isMobile ? " is-mobile" : ""}`}>
                            {painItems.map((item, i) => (
                                <div key={i} className={`pain-points__item${isMobile ? " is-mobile" : ""}`}>
                                    <div className="pain-points__pain">{item.pain}</div>
                                    <div className="pain-points__solution">{item.solution}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pain-points__results">
                        <h2 className={`pain-points__title${isMobile ? " is-mobile" : ""}`}>→ РЕЗУЛЬТАТ, ЯКИЙ ВИ ОТРИМАЄТЕ З НАМИ:</h2>
                        <div className="pain-points__results-grid">
                            {results.map((r) => (
                                <div key={r.title} className="pain-points__result-card">
                                    <div className="pain-points__result-image" />
                                    <div className="pain-points__result-content">
                                        <div className="pain-points__result-title">{r.title}</div>
                                        <div className="pain-points__result-desc">{r.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
