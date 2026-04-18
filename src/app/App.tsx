import "../styles/fonts.css";
import "./App.scss";
import {PreviewProvider, usePreviewContext} from "./context/PreviewContext";
import {PreviewToolbar} from "../components/preview-toolbar/PreviewToolbar";
import {Header} from "../components/header/Header";
import {Hero} from "../components/hero/Hero";
import {VideoSection} from "../components/video-section/VideoSection";
import {Cases} from "../components/cases/Cases";
import {HowWeWork} from "../components/how-we-work/HowWeWork";
import {WhyUs} from "../components/why-us/WhyUs";
import {CTASection} from "../components/cta-section/CTASection";
import {Reviews} from "../components/reviews/Reviews";
import {FAQ} from "../components/faq/FAQ";
import {Footer} from "../components/footer/Footer";
import {StickyButton} from "../components/sticky-button/StickyButton";
import {PainPoints} from "../components/pain-points/PainPoints.tsx";

function LandingPage() {
    return (
        <div className="app-shell">
            <Header/>
            <main>
                <Hero/>
                <VideoSection/>
                <PainPoints/>
                <Cases/>
                <HowWeWork/>
                <WhyUs/>
                <CTASection/>
                <Reviews/>
                <FAQ/>
            </main>
            <Footer/>
        </div>
    );
}

function AppContent() {
    const {isMobilePreview} = usePreviewContext();

    return (
        <div className="app-content">
            <PreviewToolbar/>

            {isMobilePreview ? (
                <div className="app-preview">
                    <div className="app-preview__grid"/>

                    <div className="app-preview__device-wrap">
                        <div className="app-preview__device">
                            <div className="app-preview__side-button app-preview__side-button--left-1"/>
                            <div className="app-preview__side-button app-preview__side-button--left-2"/>
                            <div className="app-preview__side-button app-preview__side-button--left-3"/>
                            <div className="app-preview__side-button app-preview__side-button--right"/>

                            <div className="app-preview__screen">
                                <div className="app-preview__island"/>

                                <div className="app-preview__scroll">
                                    <LandingPage/>
                                </div>
                            </div>
                        </div>

                        <p className="app-preview__label">iPhone 14 Pro · 390 × 844 px</p>
                    </div>
                </div>
            ) : (
                <div className="app-desktop">
                    <LandingPage/>
                    <StickyButton/>
                </div>
            )}
        </div>
    );
}

export default function App() {
    return (
        <PreviewProvider>
            <AppContent/>
        </PreviewProvider>
    );
}
