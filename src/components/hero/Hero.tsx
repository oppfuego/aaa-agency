import {useEffect, useMemo, useRef, useState} from "react";
import {useCountUp} from "../../app/hooks/useCountUp";
import {useMobile} from "../../app/hooks/useMobile";
import heroImage from "../../assets/images/hero-image.png";
import "./Hero.scss";

const serviceTags = [
    "Органічний трафік",
    "Meta · Google · YouTube · TikTok Ads",
    "AI-аватари",
    "Воронка продажів та аналітика",
];

const stats = [
    {value: "$2.4M+", label: "керованого бюджету"},
    {value: "9 років", label: "побудови систем"},
    {value: "220K+", label: "лідів згенеровано"},
    {value: "755%", label: "максимальний ROMI"},
];

type ParsedStatValue = {
    decimals: number;
    prefix: string;
    suffix: string;
    target: number;
};

function parseStatValue(value: string): ParsedStatValue {
    const match = value.match(/^([^0-9]*)(\d+(?:[.,]\d+)?)(.*)$/);

    if (!match) {
        return {
            target: 0,
            prefix: "",
            suffix: value,
            decimals: 0,
        };
    }

    const [, prefix, numericPart, suffix] = match;
    const normalizedNumericPart = numericPart.replace(",", ".");
    const decimals = normalizedNumericPart.includes(".")
        ? normalizedNumericPart.split(".")[1].length
        : 0;

    return {
        target: Number.parseFloat(normalizedNumericPart),
        prefix,
        suffix,
        decimals,
    };
}

function formatAnimatedValue(value: number, {decimals, prefix, suffix, target}: ParsedStatValue) {
    const displayValue = value >= target ? target : value;
    const numericPart = decimals > 0 ? displayValue.toFixed(decimals) : `${Math.round(displayValue)}`;

    return `${prefix}${numericPart}${suffix}`;
}

function AnimatedStatValue({
                               delay,
                               duration,
                               isMobile,
                               shouldStart,
                               value,
                           }: {
    delay: number;
    duration: number;
    isMobile: boolean;
    shouldStart: boolean;
    value: string;
}) {
    const parsedValue = useMemo(() => parseStatValue(value), [value]);
    const animatedValue = useCountUp(parsedValue.target, duration, {
        decimals: parsedValue.decimals,
        start: shouldStart,
        delay,
    });

    return (
        <div className={`hero__stat-value${isMobile ? " is-mobile" : ""}`}>
            {formatAnimatedValue(animatedValue, parsedValue)}
        </div>
    );
}

export function Hero() {
    const isMobile = useMobile();
    const statsRef = useRef<HTMLDivElement | null>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const element = statsRef.current;

        if (!element || hasAnimated) {
            return;
        }

        if (!("IntersectionObserver" in window)) {
            setHasAnimated(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry?.isIntersecting) {
                    return;
                }

                setHasAnimated(true);
                observer.disconnect();
            },
            {
                threshold: 0.3,
                rootMargin: "0px 0px -10% 0px",
            },
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [hasAnimated]);

    return (
        <section id="hero" className={`hero${isMobile ? " is-mobile" : ""}`}>
            <div className="hero__grid"/>
            <div className="hero__glow"/>

            <div className={`hero__container${isMobile ? " is-mobile" : ""}`}>
                <div className={`hero__layout${isMobile ? " is-mobile" : ""}`}>
                    <div className="hero__content">
                        <div className="hero-fade-1">
                            <span className="hero__badge">МАРКЕТИНГОВЕ АГЕНТСТВО</span>
                        </div>

                        <h1 className={`hero-fade-2 hero__title${isMobile ? " is-mobile" : ""}`}>
                            Побудуємо
                            <br/>
                            <span className="hero__title-accent">Системи залучення клієнтів</span>
                            <br/>
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

                        <div ref={statsRef} className={`hero-fade-5 hero__stats${isMobile ? " is-mobile" : ""}`}>
                            {stats.map((stat, index) => (
                                <div key={stat.value} className="hero__stat">
                                    <AnimatedStatValue
                                        delay={index * 100}
                                        duration={1400}
                                        isMobile={isMobile}
                                        shouldStart={hasAnimated}
                                        value={stat.value}
                                    />
                                    <div className="hero__stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hero-fade-4 hero__media">
                        <div className="hero__image-frame">
                            <img className="hero__image" src={heroImage} alt="Команда маркетингового агентства AAA" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
