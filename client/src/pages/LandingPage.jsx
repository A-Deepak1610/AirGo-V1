import React, { useEffect } from "react";
import { LandingNavbar } from "../components/landing/LandingNavbar";
import { LandingHero } from "../components/landing/LandingHero";
import { DataGapSection } from "../components/landing/DataGapSection";
import { HowItWorksSection } from "../components/landing/HowItWorksSection";
import { AiInsightsSection } from "../components/landing/AiInsightsSection";
import { CapabilitiesSection } from "../components/landing/CapabilitiesSection";
import { RoadmapSection } from "../components/landing/RoadmapSection";
import { LandingCTA } from "../components/landing/LandingCTA";

export const LandingPage = () => {
  useEffect(() => {
    document.title = "AirGo · India Airfare Price Index Platform";
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* 1. Header Navigation */}
      <LandingNavbar />

      {/* 2. Interactive Reference Hero Section */}
      <LandingHero />

      {/* 3. The Challenge (The Measurement Blindspot) */}
      <DataGapSection />

      {/* 4. How It Works (End-to-End Extraction & Advance Purchase Pipeline) */}
      <HowItWorksSection />

      {/* 5. AI Insights (Explainable Macro Driver Decomposition) */}
      <AiInsightsSection />

      {/* 6. Capabilities & Functional Modules (APIx, Backtesting, Corridors, Self-Healing) */}
      <CapabilitiesSection />

      {/* 7. Roadmap & Institutional Standards */}
      <RoadmapSection />

      {/* 8. Bottom Statement & Comprehensive Footer */}
      <LandingCTA />
    </div>
  );
};
