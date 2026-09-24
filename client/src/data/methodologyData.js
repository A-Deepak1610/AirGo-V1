/**
 * Index Methodology & Econometric Configuration Dataset.
 * Transparent mathematical specification of the Real-time Airfare Price Index (APIx).
 */

export const METHODOLOGY_CONFIG = {
  currentVersion: 'v1.2.0',
  effectiveDate: '2026-06-01',
  approvedBy: 'MoSPI National Accounts & DGCA Statistical Steering Committee',
  basePeriod: 'FY 2024-25 = 100.0',
  headlineFormula: 'Laspeyres Price Index with Jevons Elementary Aggregation',
  calculationFrequency: 'Real-time (every 15 minutes) + Daily Settlement (23:59 IST)',
  
  pipelineStages: [
    {
      step: 1,
      name: 'Data Collection & Verification',
      description: 'Headless browser automation captures ground-truth flight prices across 25 representative city-pairs at T+1, T+7, T+15, T+30, and T+45 days.',
      mathType: 'quote',
      formula: 'Obs_{r, h, c, t} = Live Direct Quote',
      rules: ['Zero dummy data policy', 'Mandatory 4-step screenshot proof', 'Fail-fast on blocking']
    },
    {
      step: 2,
      name: 'Elementary Price Aggregation (Jevons)',
      description: 'Carrier quotes for each corridor and advance-purchase horizon are synthesized using unweighted geometric mean to eliminate volatility bias.',
      mathType: 'jevons',
      formula: 'P_{r, h, t} = ( ∏_{i=1}^{N} p_{r, h, i, t} )^{1/N}',
      rules: ['99th percentile winsorization', 'Geometric route imputation for canceled flights']
    },
    {
      step: 3,
      name: 'Lead-Time Horizon Weighting',
      description: 'Advance-purchase horizons are weighted by empirical booking volume shares derived from DGCA ticketing curves.',
      mathType: 'horizon',
      formula: 'P_{r, t} = ∑_{h ∈ H} w_h · P_{r, h, t}',
      rules: ['T+1: 18%', 'T+7: 24%', 'T+15: 32%', 'T+30: 16%', 'T+45: 10%']
    },
    {
      step: 4,
      name: 'National Route Basket Synthesis (Laspeyres)',
      description: 'The national headline index aggregates all 25 corridor price relatives weighted by passenger traffic volume within the basket.',
      mathType: 'laspeyres',
      formula: 'APIx_t = [ ∑ W_r · P_{r, t} / ∑ W_r · P_{r, 0} ] × 100',
      rules: ['Weights normalized to ∑ W_r = 1.0', 'Base FY 2024-25 = 100.0']
    }
  ],

  mathSpecifications: [
    {
      id: 'laspeyres_national',
      title: 'National Headline Laspeyres Route Aggregator',
      badge: 'Primary Formula',
      mathType: 'laspeyres',
      purpose: 'Aggregates all 25 representative domestic corridors into the single national price index, using fixed base-period passenger traffic weights (FY 2024-25).',
      formulaText: 'APIx(t) = [ ∑(W_r · P_{r,t}) / ∑(W_r · P_{r,0}) ] × 100',
      variables: [
        { symbol: 'W_r', label: 'Route Passenger Weight', desc: 'DGCA annual scheduled domestic passenger density normalized so that ∑ W_r = 1.0.' },
        { symbol: 'P_{r,t}', label: 'Corridor Price at Time t', desc: 'Multi-horizon weighted consumer price observed for route r at period t.' },
        { symbol: 'P_{r,0}', label: 'Base Period Benchmark Tariff', desc: 'Fixed base reference tariff for corridor r established in baseline FY 2024-25 (Index = 100.0).' },
        { symbol: 'M', label: 'Basket Size', desc: '25 representative trunk, metro-to-non-metro, and regional tourist corridors.' }
      ]
    },
    {
      id: 'jevons_elementary',
      title: 'Jevons Geometric Elementary Price Aggregator',
      badge: 'Micro Level',
      mathType: 'jevons',
      purpose: 'Synthesizes all individual airline quotes captured within a single corridor and advance-purchase horizon to eliminate arithmetic upward substitution bias.',
      formulaText: 'P_{r,h,t} = ( ∏_{i=1}^{N} p_{r,h,i,t} )^{1/N}',
      variables: [
        { symbol: 'p_{r,h,i,t}', label: 'Carrier Observed Quote', desc: 'Direct fare extracted for airline i on route r at advance horizon h during batch t.' },
        { symbol: 'N', label: 'Observation Count', desc: 'Number of active non-winsorized carrier observations captured in the harvesting cycle.' }
      ]
    },
    {
      id: 'horizon_weighting',
      title: 'Multi-Horizon Advance Purchase Curve Synthesis',
      badge: 'Lead-Time Integration',
      mathType: 'horizon',
      purpose: 'Blends elementary price indexes across 5 distinct booking horizons using passenger reservation lead-time probability distributions.',
      formulaText: 'P_{r,t} = ∑_{h ∈ H} w_h · P_{r,h,t}',
      variables: [
        { symbol: 'w_h', label: 'Horizon Density Weight', desc: 'Empirical domestic booking density: T+1 (18%), T+7 (24%), T+15 (32%), T+30 (16%), T+45 (10%).' },
        { symbol: 'H', label: 'Horizon Set', desc: '{T+1, T+7, T+15, T+30, T+45} tracking urgent, weekly, fortnight, monthly, and advance leisure.' }
      ]
    },
    {
      id: 'fisher_ideal',
      title: 'Superlative Fisher Ideal Validation Formulation',
      badge: 'Axiomatic Cross-Check',
      mathType: 'fisher',
      purpose: 'Geometric mean of base-weighted Laspeyres and current-weighted Paasche indexes, satisfying time-reversal and circularity tests for econometric certification.',
      formulaText: 'F_t = √( L_t × P_t )',
      variables: [
        { symbol: 'L_t', label: 'Laspeyres Index', desc: 'Base-period quantity weighted airfare index number.' },
        { symbol: 'P_t', label: 'Paasche Index', desc: 'Current-period traffic weighted airfare index number.' }
      ]
    }
  ],

  parameters: [
    {
      id: 'PARAM-01',
      name: 'Index Formula Type',
      currentValue: 'Laspeyres (Fixed Base Weights)',
      options: ['Laspeyres (Base Weighted)', 'Paasche (Current Weighted)', 'Fisher Ideal (Geometric Average)', 'Törnqvist (Superlative)'],
      rationale: 'Laspeyres maintains operational stability and aligns directly with MoSPI CPI Transport Sub-Index guidelines.'
    },
    {
      id: 'PARAM-02',
      name: 'Elementary Aggregator',
      currentValue: 'Jevons (Geometric Mean)',
      options: ['Jevons (Geometric Mean)', 'Carli (Arithmetic Mean)', 'Dutot (Ratio of Averages)'],
      rationale: 'Satisfies time-reversal and transitivity statistical axioms without upward substitution bias.'
    },
    {
      id: 'PARAM-03',
      name: 'Outlier Treatment',
      currentValue: 'Winsorization at 99th Percentile',
      options: ['Winsorization (99th %tile)', 'Hard Trimming (Top/Bottom 1%)', 'No Filtering'],
      rationale: 'Prevents single-seat emergency medical or high-fare anomalies from distorting sector indexes.'
    },
    {
      id: 'PARAM-04',
      name: 'Missing Observation Imputation',
      currentValue: 'Geometric Corridor Carryover with Sector Drift',
      options: ['Geometric Carryover with Drift', 'Last Price Carried Forward', 'Exclusion from Period Basket'],
      rationale: 'Ensures uninterrupted index continuity even if an individual flight is temporarily unavailable.'
    },
    {
      id: 'PARAM-05',
      name: 'Tax & Fee Scope',
      currentValue: 'All-Inclusive Consumer Fare (Base + Fuel + UDF + PSF + GST)',
      options: ['All-Inclusive Consumer Fare', 'Base Fare Only', 'Base + Fuel Surcharge Only'],
      rationale: 'Measures the true economic price paid by travelers for inflation monitoring.'
    }
  ],

  advancePurchaseWeights: [
    { horizon: 'T+1', label: '1 Day Advance (Urgent / Business)', weightPct: 18.0, shareExplanation: 'High price elasticity, last-minute corporate travelers' },
    { horizon: 'T+7', label: '7 Days Advance (Short Lead)', weightPct: 24.0, shareExplanation: 'Standard weekly business and unplanned personal trips' },
    { horizon: 'T+15', label: '15 Days Advance (Fortnight)', weightPct: 32.0, shareExplanation: 'Highest volume domestic booking window across trunk sectors' },
    { horizon: 'T+30', label: '30 Days Advance (1 Month)', weightPct: 16.0, shareExplanation: 'Planned leisure and early booking incentives' },
    { horizon: 'T+45', label: '45 Days Advance (Long Lead)', weightPct: 10.0, shareExplanation: 'Peak holiday, seasonal, and low-fare promotional seats' }
  ],

  versionHistory: [
    {
      version: 'v1.2.0',
      date: '2026-06-01',
      author: 'Dr. Ananya Rao',
      changes: 'Added T+45 advance purchase window; switched elementary aggregator from Carli to Jevons.'
    },
    {
      version: 'v1.1.0',
      date: '2025-10-15',
      author: 'Rohan Sen',
      changes: 'Implemented 99th percentile winsorization for last-minute emergency fare spikes.'
    },
    {
      version: 'v1.0.0',
      date: '2024-04-01',
      author: 'MoSPI Technical Committee',
      changes: 'Initial baseline Laspeyres specification on 20 top trunk corridors.'
    }
  ]
};
