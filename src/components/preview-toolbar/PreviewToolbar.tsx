import { Monitor, Smartphone } from "lucide-react";
import { usePreviewContext } from "../../app/context/PreviewContext";
import { DownloadZipButton } from "../download-zip-button/DownloadZipButton";
import "./PreviewToolbar.scss";

export function PreviewToolbar() {
  const { isMobilePreview, setIsMobilePreview } = usePreviewContext();

  return (
    <div className="preview-toolbar">
      <div className="preview-toolbar__brand">
        <div className="preview-toolbar__logo">
          <span className="preview-toolbar__logo-text">AAA</span>
        </div>
        <span className="preview-toolbar__label">Превью лендінгу</span>
      </div>

      <div className="preview-toolbar__toggle">
        <button
          onClick={() => setIsMobilePreview(false)}
          className={`preview-toolbar__toggle-button${!isMobilePreview ? " is-active is-desktop" : ""}`}
        >
          <Monitor size={13} />
          Десктоп
        </button>
        <button
          onClick={() => setIsMobilePreview(true)}
          className={`preview-toolbar__toggle-button${isMobilePreview ? " is-active is-mobile" : ""}`}
        >
          <Smartphone size={13} />
          Мобайл
        </button>
      </div>

      <div className="preview-toolbar__actions">
        <span className="preview-toolbar__hint">{isMobilePreview ? "390 × 844px — iPhone 14" : "1440px — Desktop"}</span>
        <DownloadZipButton />
      </div>
    </div>
  );
}
