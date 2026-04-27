import { Expand, Pause, Play, Shrink, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useMobile } from "../../app/hooks/useMobile";
import brandLogo1 from "../../assets/logos/content-logos/1.png";
import brandLogo2 from "../../assets/logos/content-logos/2.png";
import brandLogo3 from "../../assets/logos/content-logos/3.png";
import brandLogo4 from "../../assets/logos/content-logos/4.png";
import brandLogo5 from "../../assets/logos/content-logos/5.png";
import trustVideo from "../../assets/videos/trust.mp4";
import "./VideoSection.scss";

const clientLogos = [
  { src: brandLogo1, alt: "Client logo 1" },
  { src: brandLogo2, alt: "Client logo 2" },
  { src: brandLogo3, alt: "Client logo 3" },
  { src: brandLogo4, alt: "Client logo 4" },
  { src: brandLogo5, alt: "Client logo 5" },
];

type FullscreenVideoElement = HTMLVideoElement & {
  webkitEnterFullscreen?: () => void;
  webkitSupportsFullscreen?: boolean;
};

export function VideoSection() {
  const isMobile = useMobile();
  const cardRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hideControlTimeoutRef = useRef<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showCenterControl, setShowCenterControl] = useState(false);

  const stats = [
    { value: "3–5", label: "партнерів одночасно" },
    { value: "100%", label: "прозорість бюджету" },
    { value: "AI", label: "продакшен 24/7" },
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.volume = 1;

    const autoplay = async () => {
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };

    autoplay();
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === cardRef.current);
    };

    const video = videoRef.current as FullscreenVideoElement | null;
    const handleWebkitBeginFullscreen = () => setIsFullscreen(true);
    const handleWebkitEndFullscreen = () => setIsFullscreen(false);

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    video?.addEventListener("webkitbeginfullscreen", handleWebkitBeginFullscreen as EventListener);
    video?.addEventListener("webkitendfullscreen", handleWebkitEndFullscreen as EventListener);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      video?.removeEventListener("webkitbeginfullscreen", handleWebkitBeginFullscreen as EventListener);
      video?.removeEventListener("webkitendfullscreen", handleWebkitEndFullscreen as EventListener);
    };
  }, []);

  useEffect(() => {
    if (!isPlaying) {
      setShowCenterControl(true);
      if (hideControlTimeoutRef.current) {
        window.clearTimeout(hideControlTimeoutRef.current);
        hideControlTimeoutRef.current = null;
      }
      return;
    }

    setShowCenterControl(false);
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      if (hideControlTimeoutRef.current) {
        window.clearTimeout(hideControlTimeoutRef.current);
      }
    };
  }, []);

  const scheduleHideCenterControl = () => {
    if (hideControlTimeoutRef.current) {
      window.clearTimeout(hideControlTimeoutRef.current);
    }

    if (!isPlaying) {
      return;
    }

    hideControlTimeoutRef.current = window.setTimeout(() => {
      setShowCenterControl(false);
      hideControlTimeoutRef.current = null;
    }, 1200);
  };

  const handlePointerActivity = () => {
    setShowCenterControl(true);
    scheduleHideCenterControl();
  };

  const handlePointerLeave = () => {
    if (hideControlTimeoutRef.current) {
      window.clearTimeout(hideControlTimeoutRef.current);
      hideControlTimeoutRef.current = null;
    }

    if (isPlaying) {
      setShowCenterControl(false);
    }
  };

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    video.pause();
    setIsPlaying(false);
  };

  const toggleMuted = () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const toggleFullscreen = async () => {
    const card = cardRef.current;
    const video = videoRef.current as FullscreenVideoElement | null;

    if (!card || !video) return;

    if (document.fullscreenElement === card) {
      await document.exitFullscreen();
      return;
    }

    if (isMobile && typeof video.webkitEnterFullscreen === "function") {
      try {
        video.webkitEnterFullscreen();
        setIsFullscreen(true);
        return;
      } catch {
        setIsFullscreen(false);
      }
    }

    if (typeof video.requestFullscreen === "function") {
      try {
        await video.requestFullscreen();
        return;
      } catch {
        // Fall through to the card fullscreen fallback below.
      }
    }

    try {
      await card.requestFullscreen();
    } catch {
      setIsFullscreen(false);
    }
  };

  return (
    <section id="services" className={`video-section${isMobile ? " is-mobile" : ""}`}>
      <div className={`video-section__container${isMobile ? " is-mobile" : ""}`}>
        <div className={`video-section__grid${isMobile ? " is-mobile" : ""}`}>
          <div className={`video-section__top${isMobile ? " is-mobile" : ""}`}>
            <div className="video-section__left">
              <p className="video-section__proof-label">НАМ ДОВІРЯЮТЬ</p>
              <div className="video-section__logos">
                {clientLogos.map((logo, index) => (
                  <div key={logo.alt} className={`video-section__logo-card${index === 4 ? " is-wide" : ""}`}>
                    <img className="video-section__logo-image" src={logo.src} alt={logo.alt} />
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
              <div
                ref={cardRef}
                className="video-section__video-card"
                onMouseMove={handlePointerActivity}
                onMouseLeave={handlePointerLeave}
              >
                <video
                  ref={videoRef}
                  className="video-section__video-media"
                  src={trustVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
                <button
                  type="button"
                  className={`video-section__video-control${showCenterControl ? " is-visible" : ""}`}
                  onClick={togglePlayback}
                  aria-label={isPlaying ? "Поставити відео на паузу" : "Запустити відео"}
                >
                  {isPlaying ? (
                    <Pause size={24} color="#fff" className="video-section__control-icon" />
                  ) : (
                    <Play size={24} fill="#fff" color="#fff" className="video-section__control-icon is-play" />
                  )}
                </button>
                <div className="video-section__video-overlay">
                  <div className="video-section__video-meta">
                    <p className="video-section__video-label">НАМ ДОВІРЯЮТЬ</p>
                    <span className="video-section__video-status">
                      {isPlaying ? "PLAYING" : "PAUSED"} · {isMuted ? "SOUND OFF" : "SOUND ON"}
                    </span>
                  </div>

                  <div className="video-section__video-actions">
                    <button
                      type="button"
                      className="video-section__action-button"
                      onClick={toggleMuted}
                      aria-label={isMuted ? "Увімкнути звук відео" : "Вимкнути звук відео"}
                    >
                      {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </button>

                    <button
                      type="button"
                      className="video-section__action-button"
                      onClick={toggleFullscreen}
                      aria-label={isFullscreen ? "Вийти з повноекранного режиму" : "Розгорнути відео на весь екран"}
                    >
                      {isFullscreen ? <Shrink size={18} /> : <Expand size={18} />}
                    </button>
                  </div>
                </div>
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
