import React from 'react';
import { 
  Search, 
  MessageSquare, 
  Cpu, 
  ShieldCheck, 
  Wrench, 
  Sparkles, 
  CheckCircle2, 
  Zap,
  Activity,
  Microscope,
  Radio
} from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

interface HeroProps {
  onScrollToTracking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToTracking }) => {
  return (
    <section 
      id="hero" 
      className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-[#0A0A0B]"
    >
      {/* Subtle Geometric Dots pattern overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none geometric-dots" />
      
      {/* Subtle atmospheric glow */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-24 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tech Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#161618] border border-white/10 text-gray-300 text-xs sm:text-sm font-semibold shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>مختبر معتمد للتقنيات الدقيقة ومكافحة الشورت والحرارة</span>
            <span className="hidden sm:inline-block text-white/20">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-gray-400">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              أحدث محطات لحام JBC المجهرية
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title strictly as requested */}
          <h1 
            id="hero-main-title"
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.25] sm:leading-[1.25] mb-6"
          >
            Dr Vape - مركزك الاحترافي لصيانة <br className="hidden sm:inline" />
            <span className="text-cyan-400">
              أجهزة الشيشة الإلكترونية
            </span>
          </h1>

          {/* Subtitle strictly as requested */}
          <p 
            id="hero-subtitle"
            className="text-base sm:text-lg md:text-xl text-gray-400 font-normal leading-relaxed max-w-3xl mx-auto mb-10"
          >
            متخصصون في اللحام المجهري الدقيق (Micro-soldering)، إصلاح اللوحات الإلكترونية، واستبدال منافذ الشحن والشاشات.
          </p>

          {/* CTAs strictly as requested */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            {/* Button 1: Track Device */}
            <button
              id="hero-btn-track"
              onClick={onScrollToTracking}
              className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-bold text-black transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-3 cursor-pointer group"
            >
              <Search className="w-5 h-5 text-black group-hover:rotate-12 transition-transform" />
              <span>استعلم عن حالة جهازك</span>
            </button>

            {/* Button 2: WhatsApp contact with tech */}
            <a
              id="hero-btn-whatsapp"
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-white/20 hover:bg-white/5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-bold flex items-center justify-center gap-2.5 text-white transition-all"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              <span>تواصل مع الفني عبر الواتساب</span>
            </a>
          </div>

          {/* Quick Metrics Bar / Tech Features with Geometric Balance */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-right">
            
            <div className="bg-[#161618] border border-white/5 hover:border-cyan-500/50 p-4 sm:p-5 rounded-xl transition-all group">
              <div className="w-10 h-10 bg-cyan-500/20 text-cyan-400 rounded-lg flex items-center justify-center mb-3">
                <Microscope className="w-5 h-5" />
              </div>
              <div className="text-xl font-bold text-white font-['JetBrains_Mono',monospace]">
                4K Optical
              </div>
              <div className="text-xs text-gray-400 mt-1">
                فحص مجهري إلكتروني بدقة تصل لـ 0.02 ملم
              </div>
            </div>

            <div className="bg-[#161618] border border-white/5 hover:border-purple-500/50 p-4 sm:p-5 rounded-xl transition-all group">
              <div className="w-10 h-10 bg-purple-500/20 text-purple-400 rounded-lg flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xl font-bold text-white font-['JetBrains_Mono',monospace]">
                60 يوماً
              </div>
              <div className="text-xs text-gray-400 mt-1">
                ضمان فني معتمد على قطع الغيار واللحام
              </div>
            </div>

            <div className="bg-[#161618] border border-white/5 hover:border-cyan-500/50 p-4 sm:p-5 rounded-xl transition-all group">
              <div className="w-10 h-10 bg-cyan-500/20 text-cyan-400 rounded-lg flex items-center justify-center mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <div className="text-xl font-bold text-white font-['JetBrains_Mono',monospace]">
                2 ساعة
              </div>
              <div className="text-xs text-gray-400 mt-1">
                خدمة استبدال منافذ الشحن السريعة بنفس اليوم
              </div>
            </div>

            <div className="bg-[#161618] border border-white/5 hover:border-purple-500/50 p-4 sm:p-5 rounded-xl transition-all group">
              <div className="w-10 h-10 bg-purple-500/20 text-purple-400 rounded-lg flex items-center justify-center mb-3">
                <Activity className="w-5 h-5" />
              </div>
              <div className="text-xl font-bold text-white font-['JetBrains_Mono',monospace]">
                +4,800
              </div>
              <div className="text-xs text-gray-400 mt-1">
                جهاز شيشة تم إنقاذ لوحاتها الإلكترونية
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
