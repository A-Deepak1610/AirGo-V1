import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Plane } from 'lucide-react';

export const LandingCTA = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* FINAL STATEMENT & CTA */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
              NATIONAL AVIATION BENCHMARK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              India's airfare market is always moving.{' '}
              <span className="text-blue-600 block mt-0.5">Now we can measure it.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 font-normal max-w-xl mx-auto leading-relaxed">
            High-frequency price transparency and explainable inflation metrics for researchers, economists, and civil aviation regulators.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm hover:shadow transition-all cursor-pointer group"
            >
              <span>Explore Dashboard</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={() => navigate('/index-apix')}
              className="px-6 py-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-colors shadow-2xs cursor-pointer"
            >
              <span>View the Price Index</span>
            </button>

            <button
              onClick={() => navigate('/ai-healing-scrapers')}
              className="px-6 py-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-colors shadow-2xs cursor-pointer"
            >
              <span>Scraper Fleet Status</span>
            </button>
          </div>

        </div>
      </section>

      {/* MINIMAL EDITORIAL FOOTER */}
      <footer className="bg-slate-950 text-white py-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs tracking-wider">
                AG
              </div>
              <div>
                <span className="font-bold text-sm tracking-tight text-white block">
                  AirGo · Airfare Index Platform
                </span>
                <span className="text-[11px] text-slate-400">
                  National Airfare Price Index (APIx) Infrastructure for India
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6 text-xs text-slate-400 font-mono">
              <button onClick={() => navigate('/dashboard')} className="hover:text-white transition-colors cursor-pointer">
                Dashboard
              </button>
              <button onClick={() => navigate('/index-apix')} className="hover:text-white transition-colors cursor-pointer">
                APIx Index
              </button>
              <button onClick={() => navigate('/backtesting')} className="hover:text-white transition-colors cursor-pointer">
                Backtesting
              </button>
              <button onClick={() => navigate('/analytics')} className="hover:text-white transition-colors cursor-pointer">
                Corridors
              </button>
              <button onClick={() => navigate('/ai-healing-scrapers')} className="hover:text-white transition-colors cursor-pointer">
                AI Healing
              </button>
              <button onClick={() => navigate('/system-status')} className="hover:text-white transition-colors cursor-pointer">
                System Status
              </button>
            </div>

            <div className="text-[11px] text-slate-500 font-mono">
              DGCA Corridor Weights · Calendar Year 2024 = 100.0
            </div>

          </div>
        </div>
      </footer>
    </>
  );
};
