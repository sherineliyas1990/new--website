import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Users, 
  BarChart3, 
  Globe, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Calculator, 
  Sparkles,
  Award,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  ExternalLink
} from 'lucide-react';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '$50k - $100k',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // ROI Calculator state
  const [monthlyVisitors, setMonthlyVisitors] = useState(45000);
  const [avgOrderValue, setAvgOrderValue] = useState(350);
  const [conversionRate, setConversionRate] = useState(2.1);

  // Sync dark mode class on document element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Calculator computations
  const currentMonthlyLeads = Math.round(monthlyVisitors * (conversionRate / 100));
  const currentMonthlyRevenue = Math.round(currentMonthlyLeads * avgOrderValue);
  
  // Vanguard projected uplift (+165% lead conversion efficiency)
  const projectedConversionRate = conversionRate * 2.65;
  const projectedMonthlyLeads = Math.round(monthlyVisitors * (projectedConversionRate / 100));
  const projectedMonthlyRevenue = Math.round(projectedMonthlyLeads * avgOrderValue);
  const monthlyRevenueLift = projectedMonthlyRevenue - currentMonthlyRevenue;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errors.email = 'Valid email is required';
    if (!formData.company.trim()) errors.company = 'Company name is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setFormSubmitted(true);
    setTimeout(() => {
      // Reset after success
      setFormSubmitted(false);
      setConsultationModalOpen(false);
      setFormData({ name: '', email: '', company: '', budget: '$50k - $100k', message: '' });
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* Top Bar Contract: Brand | Nav Links | Primary Action */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Brand Wordmark */}
          <a href="#" className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">V</span>
            Vanguard Studio
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#capabilities" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap shrink-0">Capabilities</a>
            <a href="#calculator" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap shrink-0">ROI Calculator</a>
            <a href="#case-studies" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap shrink-0">Case Studies</a>
            <a href="#approach" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap shrink-0">Our Approach</a>
            <a href="#testimonials" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap shrink-0">Proof</a>
          </nav>

          {/* Zone 3: Primary Action & Theme Toggle */}
          <div className="flex items-center gap-4 shrink-0">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label="Toggle theme"
              className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>

            <button 
              onClick={() => setConsultationModalOpen(true)}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              Request Consultation
            </button>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-slate-700 dark:text-slate-300"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-6 px-6 shadow-xl flex flex-col gap-4">
            <a href="#capabilities" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium py-2 text-slate-700 dark:text-slate-200">Capabilities</a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium py-2 text-slate-700 dark:text-slate-200">ROI Calculator</a>
            <a href="#case-studies" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium py-2 text-slate-700 dark:text-slate-200">Case Studies</a>
            <a href="#approach" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium py-2 text-slate-700 dark:text-slate-200">Our Approach</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium py-2 text-slate-700 dark:text-slate-200">Proof</a>
            <button 
              onClick={() => { setMobileMenuOpen(false); setConsultationModalOpen(true); }}
              className="w-full mt-2 py-3 text-sm font-semibold text-white bg-indigo-600 rounded-lg shadow-sm"
            >
              Request Consultation
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Copy Block */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Premier Digital Growth & Engineering Partner</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-6 text-balance">
                We engineer scalable growth engines for ambitious brands.
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed">
                Vanguard Studio combines high-converting growth strategy, bespoke full-stack engineering, and performance brand design to compound your revenue and dominate your market category.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <button 
                  onClick={() => setConsultationModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <span>Schedule Discovery Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a 
                  href="#case-studies"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl transition-all"
                >
                  <span>Explore Case Studies</span>
                </a>
              </div>

              {/* Trust Metrics Bar */}
              <div className="grid grid-cols-3 gap-8 mt-14 pt-8 border-t border-slate-200 dark:border-slate-800 w-full">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">$140M+</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Client Revenue Generated</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">3.8x</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Average Pipeline ROI</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">98%</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Client Retention Rate</div>
                </div>
              </div>

            </div>

            {/* Right Visual Asset */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 group">
                <img 
                  src="/src/assets/images/hero_marketing_studio_1795685424638.jpg" 
                  alt="Vanguard Studio team in modern workspace"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <div className="text-xs uppercase tracking-widest text-indigo-300 font-bold mb-1">Global Studio HQ</div>
                    <div className="text-sm font-semibold">San Francisco · London · Munich</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Capabilities Section (Bento Grid) */}
      <section id="capabilities" className="py-24 bg-white dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3">Core Disciplines</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              End-to-end execution for high-growth enterprises.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-indigo-500/50 transition-colors">
              <div>
                <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold mb-4">01</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Growth Strategy & Funnels</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Data-backed audience acquisition models, multi-channel attribution mapping, and high-velocity conversion rate optimization.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span>Funnel Architecture</span>
                <span>Conversion UX</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-indigo-500/50 transition-colors">
              <div>
                <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold mb-4">02</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Full-Stack Product Engineering</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Lightning-fast web applications, robust cloud infrastructure, and bespoke software systems built for enterprise scale.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span>React & Node.js</span>
                <span>Cloud Native</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-indigo-500/50 transition-colors md:col-span-2 lg:col-span-1">
              <div>
                <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold mb-4">03</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Performance Brand Design</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Distinctive visual identities, immersive marketing interfaces, and uncompromising design systems that command category leadership.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span>Visual Systems</span>
                <span>UX Research</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive ROI & Growth Calculator */}
      <section id="calculator" className="py-24 bg-slate-100 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-4">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Revenue Estimator</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Calculate your projected revenue uplift.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base">
              Adjust your current traffic and customer metrics below to model the compounding growth enabled by Vanguard Studio's conversion and acquisition engine.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Sliders Control Panel */}
              <div className="space-y-8">
                
                {/* Slider 1 */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Monthly Website Visitors</label>
                    <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400 tabular-nums">
                      {monthlyVisitors.toLocaleString()}
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="5000" 
                    max="250000" 
                    step="5000"
                    value={monthlyVisitors}
                    onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                    className="w-full accent-indigo-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-1">
                    <span>5k</span>
                    <span>250k+</span>
                  </div>
                </div>

                {/* Slider 2 */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Average Customer Order / LTV ($)</label>
                    <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400 tabular-nums">
                      ${avgOrderValue.toLocaleString()}
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="50" 
                    max="5000" 
                    step="50"
                    value={avgOrderValue}
                    onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                    className="w-full accent-indigo-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-1">
                    <span>$50</span>
                    <span>$5,000</span>
                  </div>
                </div>

                {/* Slider 3 */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Current Conversion Rate (%)</label>
                    <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400 tabular-nums">
                      {conversionRate.toFixed(1)}%
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="0.5" 
                    max="5.0" 
                    step="0.1"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className="w-full accent-indigo-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-1">
                    <span>0.5%</span>
                    <span>5.0%</span>
                  </div>
                </div>

              </div>

              {/* Output / Results Card */}
              <div className="bg-slate-900 text-white rounded-2xl p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl"></div>

                <div>
                  <div className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-2">Projected Growth Impact</div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1 tabular-nums">
                    +${monthlyRevenueLift.toLocaleString()} <span className="text-sm font-normal text-slate-400">/ mo</span>
                  </div>
                  <div className="text-xs text-emerald-400 font-medium flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Estimated 2.65x increase in monthly inbound revenue</span>
                  </div>
                </div>

                <div className="space-y-4 my-8 pt-6 border-t border-slate-800">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Current Monthly Revenue:</span>
                    <span className="font-bold tabular-nums">${currentMonthlyRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Projected Vanguard Revenue:</span>
                    <span className="font-bold text-indigo-400 tabular-nums">${projectedMonthlyRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">New Monthly Qualified Leads:</span>
                    <span className="font-bold text-emerald-400 tabular-nums">+{projectedMonthlyLeads - currentMonthlyLeads} leads/mo</span>
                  </div>
                </div>

                <button 
                  onClick={() => setConsultationModalOpen(true)}
                  className="w-full py-3.5 px-6 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md transition-all text-center cursor-pointer"
                >
                  Claim This Growth Potential
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Case Studies / Proof of Impact */}
      <section id="case-studies" className="py-24 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3">Proven Outcomes</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Case studies in market dominance.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Case Study 1 */}
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between">
              <div>
                <div className="aspect-video relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img 
                    src="/src/assets/images/case_study_saas_1795685438870.jpg" 
                    alt="SaaS analytics dashboard case study"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-xs text-indigo-600 dark:text-indigo-400 font-semibold mb-3">
                    <span>FinTech SaaS</span>
                    <span>·</span>
                    <span>Full-Stack Rebuild & Growth Funnel</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    Scaling DataNeuron from $2M to $12M ARR in 14 Months
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    We engineered a lightning-fast React application architecture coupled with an automated enterprise lead generation funnel, reducing acquisition cost by 42%.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-200 dark:border-slate-800">
                    <div>
                      <div className="text-xl font-extrabold text-slate-900 dark:text-white tabular-nums">+510%</div>
                      <div className="text-xs text-slate-500">ARR Growth Rate</div>
                    </div>
                    <div>
                      <div className="text-xl font-extrabold text-slate-900 dark:text-white tabular-nums">4.2M</div>
                      <div className="text-xs text-slate-500">Pipeline Generated</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-8 pb-8">
                <blockquote className="text-xs italic text-slate-500 dark:text-slate-400">
                  "Vanguard Studio completely transformed our web platform and inbound conversion engine. They operate with unmatched engineering rigor." — Sarah Lin, CEO of DataNeuron
                </blockquote>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between">
              <div>
                <div className="aspect-video relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img 
                    src="/src/assets/images/case_study_ecommerce_1795685458933.jpg" 
                    alt="Luxury e-commerce brand case study"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-xs text-indigo-600 dark:text-indigo-400 font-semibold mb-3">
                    <span>Luxury Retail</span>
                    <span>·</span>
                    <span>Brand System & D2C Growth</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    Reimagining Artisan Tableware for Global D2C Dominance
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    Redesigned brand identity and high-end e-commerce experience resulting in an immediate 180% surge in average order value and international conversions.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-200 dark:border-slate-800">
                    <div>
                      <div className="text-xl font-extrabold text-slate-900 dark:text-white tabular-nums">+180%</div>
                      <div className="text-xs text-slate-500">Average Order Value</div>
                    </div>
                    <div>
                      <div className="text-xl font-extrabold text-slate-900 dark:text-white tabular-nums">3.4x</div>
                      <div className="text-xs text-slate-500">ROAS Efficiency</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-8 pb-8">
                <blockquote className="text-xs italic text-slate-500 dark:text-slate-400">
                  "The visual design and performance optimization delivered by Vanguard positioned our brand in an entirely different tier." — Marcus Vance, Founder of Atelier Nola
                </blockquote>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="py-24 bg-slate-100 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3">Our Methodology</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Designed for speed, clarity, and uncompromising ROI.
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm mb-4">01</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Audit & Strategy</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Deep analysis of your current funnel bottlenecks, technical debt, and competitive positioning.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm mb-4">02</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Architecture & Design</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Crafting world-class visual systems and bulletproof software architecture tailored to your goals.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm mb-4">03</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Rapid Engineering</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Agile, high-velocity development sprints delivering production-ready systems with zero downtime.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm mb-4">04</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Scale & Optimization</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Continuous performance monitoring, conversion rate tuning, and expansion strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            
            <div className="md:col-span-2">
              <a href="#" className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">V</span>
                Vanguard Studio
              </a>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm mb-6 leading-relaxed">
                We engineer scalable growth engines and high-performance digital platforms for ambitious market leaders worldwide.
              </p>
              <div className="text-xs text-slate-500">
                © {new Date().getFullYear()} Vanguard Studio Inc. All rights reserved.
              </div>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">Navigation</div>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#capabilities" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Capabilities</a></li>
                <li><a href="#calculator" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">ROI Calculator</a></li>
                <li><a href="#case-studies" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Case Studies</a></li>
                <li><a href="#approach" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Our Approach</a></li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">Global Offices</div>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-indigo-600 shrink-0" /> San Francisco · Market St</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-indigo-600 shrink-0" /> London · Tech City</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-indigo-600 shrink-0" /> Munich · Leopoldstrasse</li>
                <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-indigo-600 shrink-0" /> contact@vanguard.studio</li>
              </ul>
            </div>

          </div>
        </div>
      </footer>

      {/* Consultation Modal */}
      {consultationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-lg w-full p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            
            <button 
              onClick={() => setConsultationModalOpen(false)}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Request Received</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm mx-auto">
                  Thank you! A senior partner from Vanguard Studio will review your requirements and reach out within 4 business hours.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">Schedule Consultation</div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">Let's discuss your growth goals.</h3>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-600 dark:text-slate-400 mb-1.5">Full Name</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Alex Morgan" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                    {formErrors.name && <span className="text-xs text-rose-500 mt-1 block">{formErrors.name}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-600 dark:text-slate-400 mb-1.5">Work Email</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="alex@company.com" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                    {formErrors.email && <span className="text-xs text-rose-500 mt-1 block">{formErrors.email}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-600 dark:text-slate-400 mb-1.5">Company Name</label>
                    <input 
                      type="text" 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Acme Corp" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                    {formErrors.company && <span className="text-xs text-rose-500 mt-1 block">{formErrors.company}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-600 dark:text-slate-400 mb-1.5">Estimated Budget</label>
                    <select 
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    >
                      <option value="$25k - $50k">$25k - $50k</option>
                      <option value="$50k - $100k">$50k - $100k</option>
                      <option value="$100k - $250k">$100k - $250k</option>
                      <option value="$250k+">$250k+</option>
                    </select>
                  </div>

                  <button 
                    type="submit"
                    className="w-full mt-4 py-3.5 px-6 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    Submit Consultation Request
                  </button>
                </form>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
