import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Calendar, 
  TrendingUp,
  Share2
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid 
} from 'recharts';

export const LandingHero = () => {
  const navigate = useNavigate();
  const [activeMode, setActiveMode] = useState('surge'); // 'surge' | 'base'

  // Trajectory Dataset matching the reference graph
  const surgeData = [
    { date: 'Aug 01', index: 118.2 },
    { date: 'Aug 08', index: 118.6 },
    { date: 'Aug 15', index: 119.3 },
    { date: 'Aug 22', index: 120.6 },
    { date: 'Aug 31', index: 122.28 }
  ];

  const baseData = [
    { date: 'Aug 01', index: 118.0 },
    { date: 'Aug 08', index: 118.1 },
    { date: 'Aug 15', index: 118.2 },
    { date: 'Aug 22', index: 118.35 },
    { date: 'Aug 31', index: 118.42 }
  ];

  const currentData = activeMode === 'surge' ? surgeData : baseData;
  const currentReading = activeMode === 'surge' ? '122.28' : '118.42';
  const currentChange = activeMode === 'surge' ? '+3.26%' : '+0.35%';

  return (
    <section className="relative bg-[#f8fafc] border-b border-slate-200/80 pt-10 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Sharp Editorial Headline & Action Buttons (col-span-6) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Pill chip */}
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-100 text-blue-600 text-[11px] font-bold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>AIRFARE INTELLIGENCE FOR INDIA</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-slate-900 leading-[1.12]">
              Understand airfare inflation.{' '}
              <span className="text-blue-600 block mt-1">
                See what drives it.
              </span>
            </h1>

            {/* Supporting Subtitle */}
            <p className="text-base sm:text-[17px] text-slate-600 font-normal leading-relaxed max-w-xl">
              AirGo brings fare observations, transparent price comparisons, and explainable index analysis into one proposed platform for statistical research.
            </p>

            {/* Action CTA Buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => navigate('/dashboard')}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all cursor-pointer group"
              >
                <span>Explore Dashboard</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => navigate('/index-apix')}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm transition-colors shadow-2xs cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Try an AI Explanation</span>
              </button>
            </div>

            {/* Three Value Proposition Chips */}
            <div className="pt-4 flex flex-wrap items-center gap-5 text-xs text-slate-700">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50/80 border border-blue-100 text-blue-600 flex items-center justify-center">
                  <Share2 className="w-4 h-4 -rotate-45" />
                </div>
                <span className="font-medium text-slate-800 text-[13px]">Multi-source fare observations</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50/80 border border-blue-100 text-blue-600 flex items-center justify-center">
                  <Calendar className="w-4 h-4" />
                </div>
                <span className="font-medium text-slate-800 text-[13px]">Five advance-booking windows</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50/80 border border-blue-100 text-blue-600 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <span className="font-medium text-slate-800 text-[13px]">Traceable index analysis</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Interactive Analytics Card (col-span-6) */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-slate-200/90 rounded-2xl shadow-sm p-6 sm:p-7 space-y-5">
              
              {/* Card Top Title Bar */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  <span className="font-bold text-slate-900 text-[14px] tracking-tight">
                    India Airfare Price Index (APIx)
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-500 font-mono text-[11px] font-medium border border-slate-200/60">
                  Interactive prototype - Sample data
                </span>
              </div>

              {/* Index Reading & Fare Surge Toggle */}
              <div className="flex items-end justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    INDEX READING
                  </span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900 font-mono tracking-tight">
                      {currentReading}
                    </span>
                    <span className="text-xs font-bold text-amber-600 font-mono">
                      {currentChange}
                    </span>
                  </div>
                </div>

                {/* Toggle Buttons matching screenshot */}
                <div className="flex items-center bg-slate-100/90 p-1 rounded-xl text-xs font-semibold border border-slate-200/50">
                  <button
                    onClick={() => setActiveMode('surge')}
                    className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                      activeMode === 'surge'
                        ? 'bg-blue-600 text-white shadow-xs font-bold'
                        : 'text-slate-600 hover:text-slate-900 font-medium'
                    }`}
                  >
                    Fare Surge
                  </button>
                  <button
                    onClick={() => setActiveMode('base')}
                    className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                      activeMode === 'base'
                        ? 'bg-blue-600 text-white shadow-xs font-bold'
                        : 'text-slate-600 hover:text-slate-900 font-medium'
                    }`}
                  >
                    Normal Base
                  </button>
                </div>
              </div>

              {/* Amber Area Chart */}
              <div className="h-44 w-full pt-1">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={currentData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                    <defs>
                      <linearGradient id="amberGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={activeMode === 'surge' ? '#d97706' : '#2563eb'} stopOpacity={0.25} />
                        <stop offset="95%" stopColor={activeMode === 'surge' ? '#d97706' : '#2563eb'} stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis 
                      dataKey="date" 
                      stroke="#94a3b8" 
                      fontSize={11} 
                      tickLine={false} 
                      axisLine={{ stroke: '#f1f5f9' }}
                    />
                    <YAxis 
                      stroke="#94a3b8" 
                      fontSize={11} 
                      domain={[115, 125]} 
                      ticks={[115, 118, 121, 125]}
                      tickLine={false} 
                      axisLine={false}
                    />
                    <Tooltip
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-white border border-slate-200 rounded-lg p-2 shadow-md text-xs font-mono">
                              <span className="font-bold text-slate-800">{label}:</span>{' '}
                              <span className="font-bold text-amber-600">{payload[0].value}</span>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="index" 
                      stroke={activeMode === 'surge' ? '#d97706' : '#2563eb'} 
                      strokeWidth={2.5} 
                      fill="url(#amberGradient)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* AI Explanation Sub-Box */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-2.5 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 text-xs">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>Why did it rise?</span>
                  </div>
                  <button 
                    onClick={() => navigate('/index-apix')}
                    className="px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-blue-600 font-semibold text-[10px] hover:bg-blue-50 transition-colors cursor-pointer"
                  >
                    AI explanation preview
                  </button>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed font-normal">
                  The increase is concentrated in short-notice fares on two routes.
                </p>

                <div className="pt-1.5 flex items-center justify-between border-t border-slate-200/60 text-xs">
                  <span className="text-slate-500 text-[11px] font-normal">Primary driver:</span>
                  <div className="flex items-center gap-2">
                    <strong className="text-slate-900 font-mono font-bold text-xs">DEL → BOM</strong>
                    <span className="px-2 py-0.5 rounded bg-amber-100/90 text-amber-800 border border-amber-200 text-[11px] font-semibold font-mono">
                      +1.42 pp contribution
                    </span>
                  </div>
                </div>
              </div>

              {/* Footnote Details inside card */}
              <div className="pt-1 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span>Base Basket: Calendar Year 2024 = 100</span>
                <span>Audit Period: August 2026</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Sub-Strip matching reference screenshot */}
        <div className="pt-8 border-t border-slate-200/70 mt-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400 font-mono">
          <span className="tracking-wider uppercase">NATIONAL AIRFARE INTELLIGENCE AT A GLANCE</span>
          <span>Live Application State • Integrated Database</span>
        </div>

      </div>
    </section>
  );
};
