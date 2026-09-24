import React, { useState } from 'react';
import { 
  Database, 
  Clock, 
  TrendingUp, 
  Sparkles, 
  Layers, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

export const HowItWorksSection = () => {
  const [activeHorizon, setActiveHorizon] = useState('T+15');

  const horizons = {
    'T+45': {
      label: '45 Days Prior',
      multiplier: '1.00x Base',
      behavior: 'Early Leisure Tranche',
      detail: 'Base inventory released at equilibrium prices before algorithmic yield optimization engages.'
    },
    'T+30': {
      label: '30 Days Prior',
      multiplier: '1.18x Shift',
      behavior: 'Corporate Demand Surge',
      detail: 'Corporate travel policies trigger early booking velocities on dense trunk corridors.'
    },
    'T+15': {
      label: '15 Days Prior',
      multiplier: '1.45x Dynamic',
      behavior: 'Algorithmic Yield Escalation',
      detail: 'Revenue management systems tighten seat classes. Spread between morning and evening peaks widens.'
    },
    'T+7': {
      label: '7 Days Prior',
      multiplier: '1.92x Inelastic',
      behavior: 'Inelastic Price Window',
      detail: 'Discretionary seats sell out. Inflexible travellers are forced into top-tier yield brackets.'
    },
    'T+1': {
      label: '24 Hours Prior',
      multiplier: '2.50x Spot',
      behavior: 'Terminal Spot Pricing',
      detail: 'Remaining seats reprice dynamically right up to gate closure based on acute intraday availability.'
    }
  };

  const current = horizons[activeHorizon];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
            From checkout DOM to national index.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            A continuous three-tier econometric pipeline transforming millions of raw, disparate booking quotes into a single verifiable benchmark.
          </p>
        </div>

        {/* 3-Step Interactive Process Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1: Extraction */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                  STEP 01
                </span>
                <Database className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Continuous DOM Extraction
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated Playwright/Chrome sessions capture actual final booking review DOMs across IndiGo, Air India, SpiceJet, and Akasa with zero synthetic placeholders.
              </p>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1 text-[11px] font-mono text-slate-600">
                <div className="flex justify-between">
                  <span>Inspection:</span>
                  <span className="text-emerald-600 font-semibold">Live Review Step</span>
                </div>
                <div className="flex justify-between">
                  <span>Engine:</span>
                  <span className="text-slate-900 font-semibold">Chrome Dedicated</span>
                </div>
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>Full DOM screenshot proof saved</span>
            </div>
          </div>

          {/* Card 2: Advance Horizon Normalization */}
          <div className="bg-white border border-blue-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between relative overflow-hidden ring-1 ring-blue-500/10">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                  STEP 02
                </span>
                <Clock className="w-4 h-4 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Advance Purchase Buckets
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Airfares vary by lead-time. AirGo stratifies every flight into 5 calibrated temporal tranches:
              </p>
              
              {/* Interactive Horizon Selector */}
              <div className="grid grid-cols-5 gap-1 bg-slate-100 p-1 rounded-xl text-center text-xs font-mono">
                {Object.keys(horizons).map((h) => (
                  <button
                    key={h}
                    onClick={() => setActiveHorizon(h)}
                    className={`py-1 rounded-lg font-bold transition-all cursor-pointer ${
                      activeHorizon === h
                        ? 'bg-blue-600 text-white shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {h}
                  </button>
                ))}
              </div>

              {/* Dynamic Horizon Detail Box */}
              <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-xl space-y-1 text-xs">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-900">{current.behavior}</span>
                  <span className="font-mono font-bold text-blue-700 bg-white px-1.5 py-0.5 rounded border border-blue-200 text-[11px]">
                    {current.multiplier}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed pt-0.5">
                  {current.detail}
                </p>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Selected: {current.label}</span>
              <span className="font-mono text-blue-600">Fixed-weight basket</span>
            </div>
          </div>

          {/* Card 3: Indexation & AI Root Cause */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                  STEP 03
                </span>
                <TrendingUp className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Fisher Ideal & AI Insights
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Aggregates Laspeyres and Paasche index weights to neutralize substitution bias, with automated AI root-cause attribution across corridors.
              </p>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5 text-[11px] font-mono text-slate-600">
                <div className="flex justify-between">
                  <span>Index Formula:</span>
                  <span className="text-slate-900 font-bold">√(L × P) Fisher Ideal</span>
                </div>
                <div className="flex justify-between">
                  <span>AI Driver Engine:</span>
                  <span className="text-amber-700 font-semibold">Shapley / Delta pp</span>
                </div>
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Explainable inflation reporting</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
