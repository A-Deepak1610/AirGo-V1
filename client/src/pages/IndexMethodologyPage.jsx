import React, { useState } from 'react';
import { 
  Sliders, 
  Binary, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Calculator, 
  Clock, 
  Tag, 
  Layers, 
  RotateCcw,
  Info,
  Calendar,
  Settings,
  Sigma,
  FileText
} from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { ActionGuard } from '../components/common/ActionGuard';
import { METHODOLOGY_CONFIG } from '../data/methodologyData';

// Pristine Mathematical Formula Display Component
const MathFormulaCard = ({ type }) => {
  if (type === 'quote') {
    return (
      <div className="flex items-center justify-center gap-1.5 font-mono text-xs text-slate-800 font-semibold tracking-tight py-1">
        <span>Obs<sub>r,h,c,t</sub></span>
        <span className="text-slate-400">=</span>
        <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 text-[11px] font-semibold">
          Live Direct Quote
        </span>
      </div>
    );
  }

  if (type === 'jevons') {
    return (
      <div className="flex items-center justify-center gap-1 font-serif text-slate-900 text-xs sm:text-[13px] font-medium tracking-tight py-1">
        <span className="font-bold italic">P<sub>r,h,t</sub></span>
        <span className="text-slate-400 font-sans">=</span>
        <span className="text-lg font-light text-slate-400">(</span>
        <div className="inline-flex items-center gap-0.5">
          <span className="text-base font-semibold text-slate-900">∏</span>
          <sub className="text-[10px] text-slate-500 font-mono -ml-0.5">i=1..N</sub>
          <span className="italic ml-1 font-medium">p<sub>r,h,i,t</sub></span>
        </div>
        <span className="text-lg font-light text-slate-400">)</span>
        <sup className="text-[10px] font-bold text-blue-700 bg-blue-50 px-1 py-0.5 rounded border border-blue-200 ml-0.5">1/N</sup>
      </div>
    );
  }

  if (type === 'horizon') {
    return (
      <div className="flex items-center justify-center gap-1.5 font-serif text-slate-900 text-xs sm:text-[13px] font-medium tracking-tight py-1">
        <span className="font-bold italic">P<sub>r,t</sub></span>
        <span className="text-slate-400 font-sans">=</span>
        <div className="inline-flex items-center gap-0.5">
          <span className="text-base font-bold text-purple-700">∑</span>
          <sub className="text-[10px] text-slate-500 font-mono -ml-0.5">h ∈ H</sub>
        </div>
        <span className="italic font-medium text-slate-800 ml-1">w<sub>h</sub></span>
        <span className="text-slate-400 font-sans">·</span>
        <span className="italic font-medium text-slate-800">P<sub>r,h,t</sub></span>
      </div>
    );
  }

  if (type === 'laspeyres') {
    return (
      <div className="flex items-center justify-center gap-1.5 font-serif text-slate-900 text-xs sm:text-[13px] tracking-tight py-0.5">
        <span className="font-bold italic text-blue-700">APIx<sub>t</sub></span>
        <span className="text-slate-400 font-sans">=</span>
        <span className="text-xl font-light text-slate-400">[</span>
        <div className="inline-flex flex-col items-center justify-center mx-1">
          <div className="border-b-2 border-slate-700 px-2 pb-0.5 text-center leading-tight">
            <span className="text-xs font-semibold text-slate-900">∑ (W<sub>r</sub> · P<sub>r,t</sub>)</span>
          </div>
          <div className="px-2 pt-0.5 text-center leading-tight">
            <span className="text-xs font-semibold text-slate-600">∑ (W<sub>r</sub> · P<sub>r,0</sub>)</span>
          </div>
        </div>
        <span className="text-xl font-light text-slate-400">]</span>
        <span className="text-slate-500 font-sans text-xs">×</span>
        <span className="font-mono font-bold text-xs text-slate-900">100</span>
      </div>
    );
  }

  if (type === 'fisher') {
    return (
      <div className="flex items-center justify-center gap-1.5 font-serif text-slate-900 text-xs sm:text-[13px] tracking-tight py-1">
        <span className="font-bold italic text-emerald-700">F<sub>t</sub></span>
        <span className="text-slate-400 font-sans">=</span>
        <span className="text-base font-bold text-emerald-600">√</span>
        <span className="text-base font-light text-slate-400">(</span>
        <span className="italic font-semibold text-slate-800">L<sub>t</sub></span>
        <span className="text-slate-500 font-sans text-xs">×</span>
        <span className="italic font-semibold text-slate-800">P<sub>t</sub></span>
        <span className="text-base font-light text-slate-400">)</span>
      </div>
    );
  }

  return null;
};

export const IndexMethodologyPage = () => {
  const [activeTab, setActiveTab] = useState('pipeline'); // pipeline, formulas, parameters, windows, history
  const [config, setConfig] = useState(METHODOLOGY_CONFIG);
  const [selectedParam, setSelectedParam] = useState(null);
  const [paramValue, setParamValue] = useState('');
  const [saveNotice, setSaveNotice] = useState('');

  const handleUpdateParam = (e) => {
    e.preventDefault();
    if (!selectedParam) return;

    setConfig(prev => ({
      ...prev,
      parameters: prev.parameters.map(p => p.id === selectedParam.id ? { ...p, currentValue: paramValue } : p)
    }));

    setSaveNotice(`Updated parameter "${selectedParam.name}" to "${paramValue}"`);
    setTimeout(() => setSaveNotice(''), 3000);
    setSelectedParam(null);
  };

  return (
    <div className="space-y-6 text-[#111827] font-sans animate-in fade-in duration-200">
      {/* 1. Page Header */}
      <PageHeader
        title="Index Methodology & Econometric Configuration"
        description="Transparent mathematical and statistical specification governing the Real-time Airfare Price Index (APIx), Laspeyres aggregation, Jevons elementary formulation, and booking window weightings."
        badge={
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            Active Specification: {config.currentVersion} · Laspeyres-Jevons
          </div>
        }
        actions={
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('pipeline')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'pipeline' ? 'bg-slate-900 text-white shadow-xs' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              Synthesis Flow
            </button>
            <button
              onClick={() => setActiveTab('formulas')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'formulas' ? 'bg-slate-900 text-white shadow-xs' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Sigma className="w-3.5 h-3.5 text-blue-500" />
              <span>Index Formulas</span>
            </button>
            <button
              onClick={() => setActiveTab('parameters')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'parameters' ? 'bg-slate-900 text-white shadow-xs' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              Parameters ({config.parameters.length})
            </button>
            <button
              onClick={() => setActiveTab('windows')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'windows' ? 'bg-slate-900 text-white shadow-xs' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              Advance Window Weights
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'history' ? 'bg-slate-900 text-white shadow-xs' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              Version History
            </button>
          </div>
        }
      />

      {/* Save Notification */}
      {saveNotice && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          {saveNotice}
        </div>
      )}

      {/* Key Methodological Metadata Banner */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="text-slate-400 font-semibold text-[10px] uppercase">Base Period</span>
            <p className="text-base font-bold text-slate-900 mt-0.5">{config.basePeriod}</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Aligned with MoSPI CPI revision</p>
          </div>
          <div>
            <span className="text-slate-400 font-semibold text-[10px] uppercase">Headline Formula</span>
            <p className="text-base font-bold text-blue-700 mt-0.5">{config.headlineFormula.split(' with ')[0]}</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Fixed passenger volume base</p>
          </div>
          <div>
            <span className="text-slate-400 font-semibold text-[10px] uppercase">Calculation Cadence</span>
            <p className="text-base font-bold text-slate-900 mt-0.5">Every 15 Minutes</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Daily settlement at 23:59 IST</p>
          </div>
          <div>
            <span className="text-slate-400 font-semibold text-[10px] uppercase">Approved By</span>
            <p className="text-base font-bold text-emerald-700 mt-0.5">MoSPI / DGCA</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Certified on {config.effectiveDate}</p>
          </div>
        </div>
      </div>

      {/* Tab 1: Synthesis Flow (Methodology -> Data -> Calculation -> Index) */}
      {activeTab === 'pipeline' && (
        <div className="space-y-6">
          <div className="p-4 bg-slate-900 text-white rounded-xl flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-blue-400 tracking-wider">Econometric Architecture</span>
              <h3 className="text-sm font-bold text-white mt-0.5">
                Methodology → Data Ingestion → Weight Normalization → Real-Time APIx
              </h3>
            </div>
            <span className="text-xs bg-slate-800 px-3 py-1 rounded text-slate-300 font-mono">
              v1.2.0 Active
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {config.pipelineStages.map((stage) => (
              <div key={stage.step} className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center font-mono">
                      {stage.step}
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase">Step {stage.step} of 4</span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 mt-2">{stage.name}</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{stage.description}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200/90 flex items-center justify-center min-h-[50px] shadow-2xs">
                    <MathFormulaCard type={stage.mathType} />
                  </div>
                  <ul className="text-[10px] text-slate-500 space-y-0.5 list-disc list-inside">
                    {stage.rules.map((rule, rIdx) => (
                      <li key={rIdx}>{rule}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Dedicated Formula Alignment Breakdown Card inside Pipeline */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-blue-600" />
                  <span>National Aggregate Index Mathematical Formulation</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Laspeyres fixed-base aggregator with Jevons micro-index and multi-horizon passenger density normalization.
                </p>
              </div>
              <span className="px-2.5 py-1 rounded bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold font-mono">
                Official MoSPI Specification
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Formula Display Box */}
              <div className="p-5 rounded-xl bg-slate-900 text-white flex flex-col justify-center items-center shadow-inner space-y-4">
                <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider">
                  Headline Index Formula
                </span>
                
                <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700/80 w-full flex items-center justify-center">
                  <div className="flex items-center justify-center gap-2 font-serif text-white text-sm sm:text-base tracking-tight">
                    <span className="font-bold italic text-blue-400 text-lg">APIx<sub>t</sub></span>
                    <span className="text-slate-400 font-sans text-lg">=</span>
                    <span className="text-2xl font-light text-slate-500">[</span>
                    <div className="inline-flex flex-col items-center justify-center mx-2">
                      <div className="border-b-2 border-slate-400 px-3 pb-1 text-center">
                        <span className="text-sm sm:text-base font-semibold text-white tracking-wide">
                          ∑<sub>r=1</sub><sup>M</sup> ( W<sub>r</sub> · P<sub>r,t</sub> )
                        </span>
                      </div>
                      <div className="px-3 pt-1 text-center">
                        <span className="text-sm sm:text-base font-semibold text-slate-300 tracking-wide">
                          ∑<sub>r=1</sub><sup>M</sup> ( W<sub>r</sub> · P<sub>r,0</sub> )
                        </span>
                      </div>
                    </div>
                    <span className="text-2xl font-light text-slate-500">]</span>
                    <span className="text-slate-400 font-sans text-sm">×</span>
                    <span className="font-mono font-bold text-sm text-emerald-400">100</span>
                  </div>
                </div>

                <div className="text-center text-[11px] text-slate-400 leading-relaxed max-w-md">
                  Calculated dynamically every 15 minutes across all 25 representative domestic corridors, benchmarked to base year tariffs (100.0).
                </div>
              </div>

              {/* Variable Definitions Table */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2.5">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Mathematical Variables & Glossary</h4>
                <div className="space-y-2 text-xs">
                  <div className="p-2 rounded bg-white border border-slate-200 flex items-start gap-2.5">
                    <span className="font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 shrink-0">W_r</span>
                    <div>
                      <strong className="text-slate-900">Route Passenger Weight:</strong>
                      <span className="text-slate-600 block text-[11px]">Normalized baseline domestic traffic volume share of corridor r, where ∑ W_r = 1.0.</span>
                    </div>
                  </div>

                  <div className="p-2 rounded bg-white border border-slate-200 flex items-start gap-2.5">
                    <span className="font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 shrink-0">P_r,t</span>
                    <div>
                      <strong className="text-slate-900">Observed Route Price at Time t:</strong>
                      <span className="text-slate-600 block text-[11px]">Multi-horizon synthesized fare for corridor r, calculated as ∑ w_h · P(r,h,t).</span>
                    </div>
                  </div>

                  <div className="p-2 rounded bg-white border border-slate-200 flex items-start gap-2.5">
                    <span className="font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 shrink-0">P_r,0</span>
                    <div>
                      <strong className="text-slate-900">Base Period Tariff Benchmark:</strong>
                      <span className="text-slate-600 block text-[11px]">Fixed baseline reference tariff for corridor r from FY 2024-25 (Base Index = 100.0).</span>
                    </div>
                  </div>

                  <div className="p-2 rounded bg-white border border-slate-200 flex items-start gap-2.5">
                    <span className="font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 shrink-0">M</span>
                    <div>
                      <strong className="text-slate-900">Basket Corridor Count:</strong>
                      <span className="text-slate-600 block text-[11px]">25 representative Indian domestic city-pairs capturing ~62% of all scheduled passenger traffic.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab: Dedicated Mathematical Formulas Showcase */}
      {activeTab === 'formulas' && (
        <div className="space-y-5">
          <div className="p-4 bg-slate-900 text-white rounded-xl flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-blue-400 tracking-wider">Axiomatic Formulation Suite</span>
              <h3 className="text-sm font-bold text-white mt-0.5">
                Full Mathematical Specifications & Econometric Formulations
              </h3>
            </div>
            <span className="text-xs bg-slate-800 px-3 py-1 rounded text-slate-300 font-mono">
              MoSPI & DGCA Certified
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(config.mathSpecifications || []).map((spec) => (
              <div key={spec.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">{spec.title}</span>
                    <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-bold">
                      {spec.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">{spec.purpose}</p>

                  {/* High Visibility Rendered Math Card */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center min-h-[64px] shadow-inner">
                    <MathFormulaCard type={spec.mathType} />
                  </div>
                </div>

                {/* Variable Breakdown */}
                <div className="pt-3 border-t border-slate-100 space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Variables</span>
                  <div className="space-y-1">
                    {spec.variables.map((v) => (
                      <div key={v.symbol} className="text-[11px] flex items-start gap-2">
                        <span className="font-mono font-bold text-blue-700 bg-blue-50/80 px-1.5 py-0.2 rounded border border-blue-200/60 shrink-0">
                          {v.symbol}
                        </span>
                        <span className="text-slate-600">
                          <strong className="text-slate-800">{v.label}:</strong> {v.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Parameters Table */}
      {activeTab === 'parameters' && (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
          <div className="p-4 border-b border-slate-100 bg-slate-50/70 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900">Econometric Parameter Tuning</h3>
            <span className="text-xs text-slate-500">Authorized configuration overrides</span>
          </div>
          <div className="divide-y divide-slate-100">
            {config.parameters.map((param) => (
              <div key={param.id} className="p-4 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="space-y-1 max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-slate-400">{param.id}</span>
                    <h4 className="font-bold text-slate-900 text-sm">{param.name}</h4>
                  </div>
                  <p className="text-slate-600 text-xs">{param.rationale}</p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="text-right">
                    <span className="font-bold font-mono text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded text-xs inline-block">
                      {param.currentValue}
                    </span>
                  </div>

                  <ActionGuard permission="canConfigureMethodology" requiredRoleLabel="Data Analyst or Admin">
                    <button
                      onClick={() => {
                        setSelectedParam(param);
                        setParamValue(param.currentValue);
                      }}
                      className="px-2.5 py-1 rounded border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors cursor-pointer inline-flex items-center gap-1"
                    >
                      <Settings className="w-3 h-3 text-slate-500" />
                      <span>Tune</span>
                    </button>
                  </ActionGuard>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Advance Purchase Weights */}
      {activeTab === 'windows' && (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs p-5 space-y-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900">Advance Purchase Lead-Time Weights</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Derived empirically from DGCA passenger reservation manifests to reflect true domestic booking curve distributions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {config.advancePurchaseWeights.map((win) => (
              <div key={win.horizon} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold font-mono text-sm text-slate-900">{win.horizon}</span>
                  <span className="text-base font-bold text-blue-700">{win.weightPct}%</span>
                </div>
                <p className="text-xs font-semibold text-slate-800">{win.label}</p>
                <p className="text-[11px] text-slate-500 leading-relaxed">{win.shareExplanation}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Version History */}
      {activeTab === 'history' && (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
          <div className="p-4 border-b border-slate-100 bg-slate-50/70">
            <h3 className="text-sm font-bold text-slate-900">Methodology Version Audit Log</h3>
          </div>
          <div className="divide-y divide-slate-100">
            {config.versionHistory.map((ver) => (
              <div key={ver.version} className="p-4 hover:bg-slate-50 transition-colors flex items-start gap-4 text-xs">
                <span className="font-mono font-bold text-blue-700 bg-blue-50 px-2 py-1 rounded text-xs shrink-0">
                  {ver.version}
                </span>
                <div className="space-y-0.5 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-900">{ver.author}</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-500">{ver.date}</span>
                  </div>
                  <p className="text-slate-700">{ver.changes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tune Parameter Modal */}
      {selectedParam && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-md w-full overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
              <div>
                <h3 className="text-sm font-bold text-slate-900">Tune Econometric Parameter</h3>
                <p className="text-xs text-slate-500">{selectedParam.name}</p>
              </div>
              <button
                onClick={() => setSelectedParam(null)}
                className="w-7 h-7 rounded-md border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleUpdateParam} className="p-5 space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Select Active Formulation</label>
                <select
                  value={paramValue}
                  onChange={(e) => setParamValue(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-800 text-xs focus:outline-none focus:border-blue-500 font-medium"
                >
                  {selectedParam.options.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-slate-600">
                <span className="font-bold text-slate-800 block mb-0.5">Statistical Rationale:</span>
                <p className="text-[11px] leading-relaxed">{selectedParam.rationale}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedParam(null)}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700"
                >
                  Save Parameter
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
