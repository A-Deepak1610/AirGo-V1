import React from 'react';
import { ShieldCheck, CheckCircle2, FileCode, Landmark, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const RoadmapSection = () => {
  const navigate = useNavigate();

  const standards = [
    {
      icon: ShieldCheck,
      title: 'Zero Dummy Data Policy',
      desc: 'Never placeholder variables, fake seat numbers, or synthetic quotes. If live airline data cannot be extracted, our scrapers fail explicitly with diagnostic logs.'
    },
    {
      icon: FileCode,
      title: 'Visual & DOM Verification',
      desc: 'All multi-step extraction runs capture high-resolution screenshots and rendered HTML dumps in isolated local timestamped folders for full audit reproducibility.'
    },
    {
      icon: Landmark,
      title: 'Statistical Alignment',
      desc: 'Strict Fisher Ideal and Laspeyres mathematical formulations weighted by DGCA route passenger counts, built for national macroeconomic statistics.'
    }
  ];

  const milestones = [
    { period: 'Phase 1 · Q1 2026', label: 'Continuous Ingestion', status: 'COMPLETED', note: '42 Core trunk corridors across IndiGo, Air India, SpiceJet & Akasa' },
    { period: 'Phase 2 · Q2 2026', label: 'AI Scraper Auto-Healing', status: 'COMPLETED', note: 'DOM drift detection and automated semantic selector repair' },
    { period: 'Phase 3 · Q3 2026', label: 'APIx Index & Backtesting', status: 'LIVE', note: 'Daily Fisher Ideal index, 30-day longitudinal backtests, and AI narratives' },
    { period: 'Phase 4 · Q4 2026', label: 'Regional UDAN Expansion', status: 'UPCOMING', note: 'Extending to 80+ Tier-2/Tier-3 regional city-pairs and nowcasting APIs' }
  ];

  return (
    <section id="roadmap" className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
            ROADMAP & INSTITUTIONAL STANDARDS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
            Institutional rigor at every layer.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            From scraper telemetry to mathematical index formulations, AirGo is engineered for complete transparency and auditability.
          </p>
        </div>

        {/* 3 Rigor Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {standards.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{s.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{s.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Roadmap Milestones Sub-Section */}
        <div className="mt-10 p-6 sm:p-7 rounded-2xl bg-slate-900 text-white border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                DEVELOPMENT TRAJECTORY
              </span>
              <h4 className="text-lg font-bold text-white mt-1">Platform Evolution Milestones</h4>
            </div>
            <button
              onClick={() => navigate('/system-status')}
              className="self-start sm:self-auto flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
            >
              <span>View System Status</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {milestones.map((m, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400">{m.period}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    m.status === 'LIVE' 
                      ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40' 
                      : m.status === 'COMPLETED'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'bg-slate-700 text-slate-300'
                  }`}>
                    {m.status}
                  </span>
                </div>
                <h5 className="text-sm font-bold text-white">{m.label}</h5>
                <p className="text-xs text-slate-400 leading-normal">{m.note}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
