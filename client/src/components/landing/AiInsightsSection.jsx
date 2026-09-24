import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, BrainCircuit, CheckCircle2, TrendingUp } from 'lucide-react';

export const AiInsightsSection = () => {
  const navigate = useNavigate();
  const [selectedCase, setSelectedCase] = useState(0);

  const cases = [
    {
      title: 'Short-Notice Corridor Surge',
      period: 'T+1 to T+3 Window',
      driver: 'DEL → BOM (+1.42 pp)',
      secondary: 'BOM → BLR (+0.88 pp)',
      explanation: 'Airfare index rose +3.26% driven primarily by immediate business traveler demand on Mumbai–Delhi. Seat availability in sub-₹7,000 fare buckets collapsed under 8% remaining capacity.',
      action: 'View Delta Decomposition'
    },
    {
      title: 'Festival Peak Congestion',
      period: 'Diwali T+15 Travel Bank',
      driver: 'DEL → CCU (+2.10 pp)',
      secondary: 'BLR → PAT (+1.25 pp)',
      explanation: 'Advance purchases outpaced historical seasonal velocity by 18%. Yield engines accelerated fare adjustments 12 days earlier than the 2024 calendar baseline.',
      action: 'Inspect Horizon Trajectory'
    },
    {
      title: 'Monsoon Network Rebalancing',
      period: 'South-West Monsoon T+7',
      driver: 'DEL → COK (+0.95 pp)',
      secondary: 'BOM → GOI (-0.40 pp)',
      explanation: 'Adverse weather reroutings curtailed coastal frequency. Index absorbed selective fare increases offset by leisure discounting on secondary tourism corridors.',
      action: 'Analyze Sector Shifts'
    }
  ];

  const activeCase = cases[selectedCase];

  return (
    <section id="ai-insights" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
            EXPLAINABLE MACRO INTELLIGENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
            See the exact drivers behind every price swing.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Index movements aren't black boxes. AirGo translates complex multi-corridor aggregations into plain, verified econometric narratives.
          </p>
        </div>

        {/* Interactive Scenario Cards */}
        <div className="mt-10 bg-white border border-slate-200/90 rounded-2xl shadow-sm overflow-hidden p-6 sm:p-8">
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 pb-6 border-b border-slate-100">
            {cases.map((c, i) => (
              <button
                key={i}
                onClick={() => setSelectedCase(i)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCase === i
                    ? 'bg-blue-600 text-white shadow-xs font-bold'
                    : 'bg-slate-100/80 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>

          {/* Active Scenario Content */}
          <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Explanation Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  TIMEFRAME: {activeCase.period}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100/80 space-y-2">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>AI Econometric Narrative</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  "{activeCase.explanation}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <button
                  onClick={() => navigate('/index-apix')}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                >
                  <span>{activeCase.action}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs text-slate-500">Live APIx Decomposition</span>
              </div>
            </div>

            {/* Right Driver Breakdown Cards */}
            <div className="lg:col-span-5 space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-200/80">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                ROOT-CAUSE CONTRIBUTION MATRIX
              </span>

              <div className="bg-white p-3.5 rounded-lg border border-slate-200/70 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 block">Top Contributing Route</span>
                  <span className="text-sm font-bold text-slate-900 font-mono">{activeCase.driver}</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold font-mono">
                  Primary
                </span>
              </div>

              <div className="bg-white p-3.5 rounded-lg border border-slate-200/70 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 block">Secondary Sector Impact</span>
                  <span className="text-sm font-bold text-slate-900 font-mono">{activeCase.secondary}</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 text-xs font-medium font-mono">
                  Secondary
                </span>
              </div>

              <div className="pt-2 text-[11px] text-slate-400 font-mono flex items-center justify-between border-t border-slate-200">
                <span>Methodology: Shapley Index Attribution</span>
                <span>Audit Verified</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
