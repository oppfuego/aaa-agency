import { createContext, useContext, useState, ReactNode } from "react";

interface PreviewContextType {
  isMobilePreview: boolean;
  setIsMobilePreview: (v: boolean) => void;
}

export const PreviewContext = createContext<PreviewContextType>({
  isMobilePreview: false,
  setIsMobilePreview: () => {},
});

export function PreviewProvider({ children }: { children: ReactNode }) {
  const [isMobilePreview, setIsMobilePreview] = useState(false);
  return (
    <PreviewContext.Provider value={{ isMobilePreview, setIsMobilePreview }}>
      {children}
    </PreviewContext.Provider>
  );
}

export function usePreviewContext() {
  return useContext(PreviewContext);
}
