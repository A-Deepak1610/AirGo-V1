import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  TrendingUp, 
  History, 
  Layers, 
  Cpu, 
  ArrowUpRight, 
  Sparkles,
  ShieldCheck,
  BarChart3
} from 'lucide-react';

export const CapabilitiesSection = () => {
  const navigate = useNavigate();

  const capabilities = [
    {
      id: 'index',
      title: 'India Airfare Price Index (APIx)',
      tag: 'MACRO BENCHMARK',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      icon: TrendingUp,
      desc: 'National domestic inflation index computed with Fisher Ideal, Laspeyres, and Paasche aggregations. Track daily spot movements and weighted baskets.',
      actionText: 'View Price Index',
      path: '/index-apix',
      meta: 'Base: 2024 = 100 • Daily / Weekly cadences'
    },
    {
      id: 'backtesting',
      title: 'Longitudinal Backtesting & Accuracy',
      tag: 'MODEL VALIDATION',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      icon: History,
      desc: 'Evaluate index forecasting integrity against ground-truth carrier checkout fares. Continuously monitors Mean Absolute Percentage Error (MAPE).',
      actionText: 'Open Backtest Engine',
      path: '/backtesting',
      meta: '30-Day Empirical Window • 2.14% MAPE'
    },
    {
      id: 'analytics',
      title: 'Corridor Yield & Route Dispersion',
      tag: 'SECTOR INTELLIGENCE',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      icon: BarChart3,
      desc: 'Dissect individual city-pairs (DEL-BOM, BOM-BLR, DEL-BLR). Inspect price dispersion, yield decay curves, and departure bank spikes.',
      actionText: 'Analyze Corridors',
      path: '/analytics',
      meta: '42 Trunk Routes • Peak vs Off-Peak Gaps'
    },
    {
      id: 'healing',
      title: 'AI Scraper Auto-Healing Console',
      tag: 'SELF-HEALING PIPELINE',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      icon: Cpu,
      desc: 'Autonomous scraper telemetry detecting airline DOM mutations in real time. Generates semantic selector repairs and runs isolated dry-runs before rollout.',
      actionText: 'Open Healing Manager',
      path: '/ai-healing-scrapers',
      meta: '100% Real DOM Data • Zero Synthetic Fallbacks'
    }
  ];

  return (
    <section id="capabilities" className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
              CAPABILITIES & PLATFORM MODULES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
              A comprehensive intelligence suite.
            </h2>
            <p className="text-sm text-slate-600 font-normal max-w-xl">
              Engineered for macroeconomists, aviation policy researchers, and data engineers requiring high-frequency ground truth.
            </p>
          </div>

          <button
            onClick={() => navigate('/dashboard')}
            className="self-start md:self-auto flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold transition-all cursor-pointer"
          >
            <span>Launch All Modules</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4-Card Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                onClick={() => navigate(item.path)}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-3.5 border-b border-slate-100">
                    <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-mono font-bold uppercase tracking-wider ${item.badgeColor}`}>
                      {item.tag}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-50 group-hover:bg-blue-50 text-slate-600 group-hover:text-blue-600 flex items-center justify-center transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mt-4 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-slate-400">
                    {item.meta}
                  </span>
                  <div className="flex items-center gap-1 font-bold text-blue-600 group-hover:translate-x-0.5 transition-transform text-xs">
                    <span>{item.actionText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
