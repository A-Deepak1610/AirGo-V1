import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export const LandingNavbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs"
          : "bg-white border-b border-slate-200/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo matching screenshot: AG black badge + AirGo + Airfare Index Platform */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-slate-950 text-white flex items-center justify-center font-bold text-xs tracking-wider shadow-xs group-hover:bg-blue-600 transition-colors">
            AG
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 text-base tracking-tight whitespace-nowrap">
                AirGo
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium leading-none mt-0.5 whitespace-nowrap">
              Airfare Index Platform
            </p>
          </div>
        </div>

        {/* Narrative Links matching screenshot */}
        <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium text-slate-600">
          <a href="#challenge" className="hover:text-slate-900 transition-colors">
            The Challenge
          </a>
          <a href="#how-it-works" className="hover:text-slate-900 transition-colors">
            How It Works
          </a>
          <a href="#ai-insights" className="inline-flex items-center gap-1.5 hover:text-slate-900 transition-colors">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>AI Insights</span>
          </a>
          <a href="#capabilities" className="hover:text-slate-900 transition-colors">
            Capabilities
          </a>
          <a href="#roadmap" className="hover:text-slate-900 transition-colors">
            Roadmap
          </a>
        </nav>

        {/* Action CTA matching screenshot: Blue button Explore Dashboard */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs hover:shadow transition-all cursor-pointer group"
          >
            <span>Explore Dashboard</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </header>
  );
};
