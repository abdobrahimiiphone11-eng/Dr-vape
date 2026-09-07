import React, { useState } from 'react';
import { 
  Cpu, 
  Usb, 
  Tv, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Zap, 
  Wrench,
  Microscope,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { TECHNICAL_SERVICES, CONTACT_INFO } from '../data/mockData';
import { ServiceItem } from '../types';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (icon: ServiceItem['icon']) => {
    switch (icon) {
      case 'cpu':
        return <Cpu className="w-8 h-8 text-cyan-400" />;
      case 'usb':
        return <Usb className="w-8 h-8 text-teal-400" />;
      case 'monitor':
        return <Tv className="w-8 h-8 text-purple-400" />;
      case 'sparkles':
      default:
        return <Sparkles className="w-8 h-8 text-cyan-300" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>خدمات الصيانة واللحام المجهري المتخصص</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight flex items-center justify-center gap-3">
            <span className="w-1.5 h-8 bg-purple-500 rounded-full inline-block"></span>
            <span>حلول هندسية متقدمة لأعطال الفيب</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            نجمع بين الدقة وأحدث معدات اللحام والمجاهر الإلكترونية لإنقاذ أجهزتك المفضلة بدلاً من التكلفة المرتفعة لجهاز جديد.
          </p>
        </div>

        {/* 4 Cards Grid as strictly requested */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TECHNICAL_SERVICES.map((service) => {
            const isSelected = selectedService?.id === service.id;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`relative rounded-xl bg-[#161618] border transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group hover:border-cyan-500/50 ${
                  isSelected
                    ? 'border-cyan-400 shadow-md shadow-cyan-500/10'
                    : 'border-white/10'
                }`}
              >
                <div>
                  {/* Service Header & Icon */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-lg bg-[#232326] border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getServiceIcon(service.icon)}
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10 font-medium">
                        {service.avgTime}
                      </span>
                      <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        {service.warranty}
                      </span>
                    </div>
                  </div>

                  {/* Titles */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {service.titleAr}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400/80 mb-3 tracking-wide" dir="ltr">
                    {service.titleEn}
                  </p>

                  {/* Short Description */}
                  <p className="text-sm text-gray-300 font-medium leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Full Description & Features list */}
                  <p className="text-xs text-gray-400 leading-relaxed mb-5">
                    {service.fullDesc}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(
                      `مرحباً دكتور فيب، أود الاستفسار وحجز صيانة لخدمة: ${service.titleAr}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-lg text-xs sm:text-sm font-bold text-white border border-white/15 hover:border-cyan-500/50 hover:bg-white/5 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>طلب حجز الصيانة عبر الواتساب</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Technical Process Workflow Banner */}
        <div className="mt-16 rounded-2xl bg-[#161618] border border-white/10 p-6 sm:p-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              بروتوكول الفحص والإصلاح المعتمد في مختبرنا
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              خطوات هندسية دقيقة تضمن أعلى معدلات الأمان وسلامة البطاريات والدوائر الإلكترونية
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#232326] border border-white/5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center font-mono font-bold mb-3">
                01
              </div>
              <h4 className="font-bold text-white text-sm mb-1">استلام وتفكيك وقائي</h4>
              <p className="text-xs text-gray-400">عزل البطاريات وفحص أولي للمنافذ والأزرار وتوثيق الحالة الخارجية.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#232326] border border-white/5">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center font-mono font-bold mb-3">
                02
              </div>
              <h4 className="font-bold text-white text-sm mb-1">التشخيص الحراري والمجهري</h4>
              <p className="text-xs text-gray-400">فحص الدوائر عبر كاميرا حرارية لتحديد أماكن الشورت، وفحص 4K تحت المجهر.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#232326] border border-white/5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center font-mono font-bold mb-3">
                03
              </div>
              <h4 className="font-bold text-white text-sm mb-1">اللحام المجهري الدقيق</h4>
              <p className="text-xs text-gray-400">استبدال المكونات المتفحمة أو المنافذ التالفة وإعادة بناء المسارات بأسلاك ميكرو.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#232326] border border-white/5">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center font-mono font-bold mb-3">
                04
              </div>
              <h4 className="font-bold text-white text-sm mb-1">اختبار الجهد وإصدار الضمان</h4>
              <p className="text-xs text-gray-400">فحص قراءة الأوم واستقرار الشحن الكامل قبل التسليم النهائي مع بطاقة الضمان.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
