import { useState } from "react";
import JSZip from "jszip";
import { Download } from "lucide-react";
import "./DownloadZipButton.scss";

function buildHtmlSnapshot() {
  const html = document.documentElement.cloneNode(true) as HTMLHtmlElement;

  html.querySelectorAll("script").forEach((script) => script.remove());

  return "<!DOCTYPE html>\n" + html.outerHTML;
}

export function DownloadZipButton() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);

      const zip = new JSZip();
      zip.file("index.html", buildHtmlSnapshot());

      const blob = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = "aaa-agency-landing.zip";
      link.click();

      URL.revokeObjectURL(url);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className={`download-zip-button${isDownloading ? " is-downloading" : ""}`}
      aria-label="Download zip archive"
    >
      <Download size={13} />
      {isDownloading ? "Packing..." : "Download ZIP"}
    </button>
  );
}
