import React from 'react';
import { 
  Clock, 
  MessageSquare, 
  Send, 
  Phone, 
  MapPin, 
  Cpu, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldAlert,
  Flame,
  ArrowUp
} from 'lucide-react';
import { WORK_HOURS, CONTACT_INFO } from '../data/mockData';

export const ContactFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0A0A0B] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      
      {/* Subtle Background glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Emergency First-Aid Tip for Vape Devices */}
        <div className="mb-14 rounded-xl bg-[#161618] border border-amber-500/30 p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h4 className="text-base font-bold text-amber-300 mb-1">
                بروتوكول الطوارئ في حال تسرب السوائل أو سقوط الجهاز في الماء:
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                انزع البطاريات والتانك فوراً! لا تضغط على زر الإطلاق ولا تقم بتوصيل كابل الشاحن إطلاقاً لتجنب تفحم اللوحة الرئيسية وتلف شريحة الـ MOSFET. تواصل معنا مباشرة لإجراء تنظيف كيميائي فوري بالموجات فوق الصوتية.
              </p>
            </div>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-xs sm:text-sm font-bold text-black bg-amber-400 hover:bg-amber-300 transition-colors whitespace-nowrap"
            >
              استغاثة صيانة طارئة
            </a>
          </div>
        </div>

        {/* Main Grid: Info, Working Hours, Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-l from-cyan-400 to-purple-400 font-['JetBrains_Mono',monospace]">
                Dr Vape
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
              المركز المتقدم المتخصص في هندسة وفحص وإصلاح اللوحات الإلكترونية لأجهزة الشيشة والمودات بنظام اللحام المجهري الدقيق.
            </p>
            <div className="text-xs text-gray-500">
              {CONTACT_INFO.emergencyTechNotice}
            </div>
          </div>

          {/* Column 2: Working Hours strictly as requested */}
          <div className="bg-[#161618] p-5 rounded-xl border border-white/5">
            <div className="flex items-center gap-2 text-white font-bold mb-4 text-base">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>ساعات العمل اليومية</span>
            </div>

            <div className="space-y-3">
              {WORK_HOURS.map((wh, idx) => (
                <div key={idx} className="border-b border-white/5 pb-2.5 last:border-b-0">
                  <div className="text-xs font-bold text-gray-300">{wh.days}:</div>
                  <div className="text-sm font-mono text-cyan-400 mt-0.5">{wh.hours}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-emerald-400 flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>المختبر مفتوح حالياً لاستقبال الأجهزة</span>
            </div>
          </div>

          {/* Column 3: Quick Direct Links strictly as requested (WhatsApp & Telegram) */}
          <div className="bg-[#161618] p-5 rounded-xl border border-white/5">
            <div className="text-white font-bold mb-4 text-base flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span>قنوات التواصل المباشر</span>
            </div>

            <div className="space-y-3">
              {/* WhatsApp Link */}
              <a
                id="footer-whatsapp-link"
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-[#232326] hover:bg-white/5 border border-white/5 hover:border-cyan-500/50 transition-all text-white group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">محادثة واتساب مباشرة</div>
                    <div className="text-[11px] text-gray-400 font-mono" dir="ltr">
                      {CONTACT_INFO.phone}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-400 group-hover:translate-x-[-3px] transition-transform">
                  تواصل الآن ←
                </span>
              </a>

              {/* Telegram Link */}
              <a
                id="footer-telegram-link"
                href={CONTACT_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-[#232326] hover:bg-white/5 border border-white/5 hover:border-cyan-500/50 transition-all text-white group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-600/20 text-sky-400 flex items-center justify-center">
                    <Send className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">قناة التليجرام الفنية</div>
                    <div className="text-[11px] text-gray-400 font-mono" dir="ltr">
                      {CONTACT_INFO.telegram}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-sky-400 group-hover:translate-x-[-3px] transition-transform">
                  انضم إلينا ←
                </span>
              </a>
            </div>
          </div>

          {/* Column 4: Location & Address */}
          <div className="bg-[#161618] p-5 rounded-xl border border-white/5">
            <div className="text-white font-bold mb-3 text-base flex items-center gap-2">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span>موقع المركز والمختبر</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
              {CONTACT_INFO.address}
            </p>
            <div className="p-2.5 rounded-lg bg-[#232326] border border-white/5 text-[11px] text-gray-400 font-mono">
              GPS: 24.7136° N, 46.6753° E
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          
          <div className="text-xs sm:text-sm text-gray-400">
            حقوق الملكية محفوظة لـ <span className="font-bold text-white font-['JetBrains_Mono',monospace]">Dr Vape</span> © {new Date().getFullYear()} — مركز الصيانة المعتمد
          </div>

          <div className="flex items-center gap-4 text-xs text-gray-500">
            <a href="#services" className="hover:text-cyan-400 transition-colors">خدمات الصيانة</a>
            <span>•</span>
            <a href="#tracking" className="hover:text-cyan-400 transition-colors">نظام التتبع</a>
            <span>•</span>
            <a href="#spare-parts" className="hover:text-cyan-400 transition-colors">قطع الغيار</a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-[#161618] border border-white/10 text-gray-400 hover:text-white transition-colors"
              title="للأعلى"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
