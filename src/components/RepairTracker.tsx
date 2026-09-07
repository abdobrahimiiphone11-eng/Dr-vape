import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Wrench, 
  Cpu, 
  Smartphone, 
  Receipt, 
  Sparkles, 
  Check, 
  ArrowLeft,
  Calendar,
  Layers,
  MessageSquare,
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';
import { RepairTicket } from '../types';
import { INITIAL_TICKETS, CONTACT_INFO } from '../data/mockData';

interface RepairTrackerProps {
  initialSearchQuery?: string;
}

export const RepairTracker: React.FC<RepairTrackerProps> = ({ initialSearchQuery }) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery || 'DV-8921');
  const [selectedTicket, setSelectedTicket] = useState<RepairTicket | null>(null);
  const [hasSearched, setHasSearched] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [notFoundQuery, setNotFoundQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize with the first demo ticket on load so the user immediately sees the rich UI
  useEffect(() => {
    const found = INITIAL_TICKETS.find(
      t => t.id.toLowerCase() === (initialSearchQuery || 'DV-8921').toLowerCase()
    );
    if (found) {
      setSelectedTicket(found);
    }
  }, [initialSearchQuery]);

  const handleSearch = (codeToSearch?: string) => {
    const query = (codeToSearch ?? searchQuery).trim();
    if (!query) return;

    setIsLoading(true);
    setHasSearched(true);
    setNotFoundQuery('');

    // Simulate realistic instant tech-query feedback
    setTimeout(() => {
      const match = INITIAL_TICKETS.find(
        t => t.id.toLowerCase() === query.toLowerCase() || 
             t.customerName.includes(query) ||
             t.deviceModel.toLowerCase().includes(query.toLowerCase())
      );

      if (match) {
        setSelectedTicket(match);
        setNotFoundQuery('');
      } else {
        setSelectedTicket(null);
        setNotFoundQuery(query);
      }
      setIsLoading(false);
    }, 280);
  };

  const selectDemoCode = (code: string) => {
    setSearchQuery(code);
    handleSearch(code);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const steps = [
    { title: 'استلام الجهاز', desc: 'تسجيل الدخول والبيانات' },
    { title: 'الفحص المجهري 4K', desc: 'تشخيص البوردة والمسارات' },
    { title: 'اللحام المجهري والإصلاح', desc: 'استبدال القطع واللحام' },
    { title: 'جاهز للاستلام', desc: 'اختبار الأداء والتغليف' },
  ];

  return (
    <section 
      id="tracking" 
      className="py-16 md:py-24 relative bg-[#0A0A0B] border-t border-b border-white/10 overflow-hidden"
    >
      {/* Subtle Geometric background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none geometric-dots" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>نظام الاستعلام المباشر لحظة بلحظة</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center justify-center gap-3">
            <span className="w-1.5 h-7 bg-purple-500 rounded-full inline-block"></span>
            <span>تتبع حالة الصيانة (Live Repair Status)</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            تابع مراحل الفحص المجهري، تقارير اللحام، وتكلفة قطع الغيار لجهازك بكل شفافية ودقة هندسية.
          </p>
        </div>

        {/* The Center Interactive Card */}
        <div 
          id="repair-tracker-card"
          className="relative rounded-2xl bg-[#161618] border border-white/10 shadow-2xl shadow-cyan-950/20 overflow-hidden p-6 sm:p-8 md:p-10"
        >
          {/* Subtle Ambient Accents */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-600/5 rounded-full blur-2xl pointer-events-none" />

          {/* Search Input Box Section */}
          <div className="max-w-2xl mx-auto mb-8">
            <label 
              htmlFor="ticket-search-input"
              className="block text-sm sm:text-base font-bold text-gray-200 mb-2.5 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-4 bg-cyan-400 rounded-full"></span>
                أدخل رقم تتبع الجهاز الخاص بك:
              </span>
              <span className="text-xs text-gray-400 font-mono">رقم تذكرة الصيانة</span>
            </label>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  id="ticket-search-input"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="أدخل رقم التتبع (مثلاً: DV-8921)"
                  dir="auto"
                  className="w-full px-4 py-3 bg-[#232326] text-white placeholder-gray-500 rounded-lg border border-white/5 focus:border-cyan-500 focus:outline-none transition-all font-['JetBrains_Mono',monospace] text-sm"
                />
              </div>

              <button
                id="ticket-search-submit-btn"
                type="submit"
                disabled={isLoading}
                className="bg-white hover:bg-gray-100 text-black font-bold px-6 py-3 rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <span className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent"></span>
                    <span>جاري البحث...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4 text-black" />
                    <span>بحث واستعلام</span>
                  </>
                )}
              </button>
            </form>

            {/* Quick Demo Chips */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-gray-400 font-medium">أجهزة تحت التجربة السريعة:</span>
              {INITIAL_TICKETS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => selectDemoCode(t.id)}
                  className={`px-2.5 py-1 rounded-md font-mono transition-all border ${
                    searchQuery === t.id && selectedTicket?.id === t.id
                      ? 'bg-cyan-500/15 border-cyan-400 text-cyan-300 font-bold'
                      : 'bg-[#232326] border-white/5 text-gray-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  {t.id} ({t.status === 'ready' ? 'جاهز' : 'قيد الصيانة'})
                </button>
              ))}
            </div>
          </div>

          {/* Results Area inside the Card */}
          {selectedTicket ? (
            <div 
              id="ticket-result-details"
              className="mt-6 border-t border-white/10 pt-6 animate-in fade-in duration-300"
            >
              {/* Header of the Result Card */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-xl bg-[#232326] border border-white/5 mb-6">
                
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-cyan-300 border border-white/10 font-bold">
                        {selectedTicket.id}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        تاريخ الاستلام: {selectedTicket.receivedDate}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      {selectedTicket.deviceModel}
                    </h3>

                    <p className="text-sm text-gray-400">
                      النوع: <span className="text-gray-200">{selectedTicket.deviceType}</span>
                      {selectedTicket.color && (
                        <span className="mr-3">| اللون: <span className="text-gray-200">{selectedTicket.color}</span></span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Live Status Badge */}
                <div className="flex flex-col items-start md:items-end gap-2">
                  <span className="text-xs text-gray-400">حالة الجهاز الحالية:</span>
                  {selectedTicket.status === 'ready' ? (
                    <div 
                      id="status-badge-ready"
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-bold text-xs sm:text-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      <span>{selectedTicket.statusLabel}</span>
                    </div>
                  ) : (
                    <div 
                      id="status-badge-progress"
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30 font-bold text-xs sm:text-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping"></span>
                      <Clock className="w-4 h-4 text-purple-400" />
                      <span>{selectedTicket.statusLabel}</span>
                    </div>
                  )}
                </div>

              </div>

              {/* Progress Steps Visualizer */}
              <div className="mb-8 px-1">
                <div className="text-xs font-bold text-gray-400 uppercase mb-3 flex items-center gap-2">
                  <span className="w-1 h-3 bg-purple-400 rounded-full"></span>
                  <span>خط سير الصيانة الفنية:</span>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {steps.map((step, idx) => {
                    const isDone = idx < selectedTicket.currentStepIndex;
                    const isCurrent = idx === selectedTicket.currentStepIndex;
                    return (
                      <div 
                        key={idx}
                        className={`p-3.5 rounded-xl border text-right transition-all ${
                          isDone 
                            ? 'bg-[#232326] border-emerald-500/40 text-emerald-300'
                            : isCurrent
                            ? 'bg-[#232326] border-cyan-400 text-cyan-300 shadow-sm'
                            : 'bg-[#1e1e21]/40 border-white/5 text-gray-500'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[11px] font-mono font-bold">
                            0{idx + 1}
                          </span>
                          {isDone ? (
                            <Check className="w-4 h-4 text-emerald-400" />
                          ) : isCurrent ? (
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                          ) : (
                            <Clock className="w-3.5 h-3.5 text-gray-600" />
                          )}
                        </div>
                        <div className="text-xs sm:text-sm font-bold truncate">
                          {step.title}
                        </div>
                        <div className="text-[11px] text-gray-400 mt-0.5">
                          {step.desc}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Geometric Balance Data Rows: Customer Name, Issue Description, Total Cost */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                
                {/* 1. Customer Name */}
                <div className="p-4 rounded-xl bg-[#232326] border border-white/5">
                  <div className="text-xs text-gray-400 font-medium mb-1">اسم العميل:</div>
                  <div className="text-base font-bold text-white flex items-center gap-2">
                    <span>{selectedTicket.customerName}</span>
                  </div>
                  {selectedTicket.customerPhone && (
                    <div className="text-xs text-gray-400 font-mono mt-1" dir="ltr">
                      {selectedTicket.customerPhone}
                    </div>
                  )}
                </div>

                {/* 2. Total Repair Cost */}
                <div className="p-4 rounded-xl bg-[#232326] border border-white/5">
                  <div className="text-xs text-gray-400 font-medium mb-1 flex items-center justify-between">
                    <span>تكلفة الإصلاح الإجمالية:</span>
                    <Receipt className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-bold text-white font-['JetBrains_Mono',monospace]">
                      {selectedTicket.repairCost}
                    </span>
                    <span className="text-sm font-bold text-cyan-400">
                      {selectedTicket.currency}
                    </span>
                  </div>
                  <div className="text-[11px] text-gray-400 mt-1 flex items-center gap-1 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                    شامل قطع الغيار + ضمان معتمد {selectedTicket.warrantyDays} يوماً
                  </div>
                </div>

                {/* 3. Replacement Parts */}
                <div className="p-4 rounded-xl bg-[#232326] border border-white/5">
                  <div className="text-xs text-gray-400 font-medium mb-1">قطع الغيار المستخدمة:</div>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {selectedTicket.replacedParts && selectedTicket.replacedParts.length > 0 ? (
                      selectedTicket.replacedParts.map((part, pIdx) => (
                        <span 
                          key={pIdx}
                          className="text-xs px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/10"
                        >
                          {part}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-gray-400">قيد تحديد المكونات التالفة</span>
                    )}
                  </div>
                </div>

              </div>

              {/* Detailed Issue Description */}
              <div className="p-5 rounded-xl bg-[#232326] border border-white/5 mb-6">
                <div className="flex items-center gap-2 text-sm font-bold text-white mb-2">
                  <AlertCircle className="w-4 h-4 text-purple-400" />
                  <span>وصف العطل والمشكلة بالتفصيل:</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed bg-[#19191c] p-3.5 rounded-lg border border-white/5">
                  {selectedTicket.issueDescription}
                </p>

                {/* Technician Notes */}
                {selectedTicket.technicianNotes && (
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <div className="text-xs font-bold text-cyan-400 flex items-center gap-1.5 mb-1.5">
                      <Cpu className="w-4 h-4 text-cyan-400" />
                      <span>تقرير الفني المباشر (Micro-soldering Lab Notes):</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-mono">
                      {selectedTicket.technicianNotes}
                    </p>
                  </div>
                )}
              </div>

              {/* Action Buttons for this Ticket */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-[#232326] border border-white/5">
                <div className="text-xs text-gray-400">
                  هل لديك استفسار إضافي حول هذا الجهاز مع فني الصيانة؟
                </div>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(
                    `مرحباً دكتور فيب، أستفسر بخصوص جهازي رقم التتبع: ${selectedTicket.id} (${selectedTicket.deviceModel}) - حالة: ${selectedTicket.statusLabel}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-bold text-white border border-white/20 hover:bg-white/5 transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>مراسلة الفني عبر الواتساب برقم {selectedTicket.id}</span>
                </a>
              </div>

            </div>
          ) : hasSearched && notFoundQuery ? (
            /* Not Found State */
            <div 
              id="ticket-not-found"
              className="mt-6 border-t border-white/10 pt-8 text-center animate-in fade-in"
            >
              <div className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto mb-4 text-red-400">
                <AlertCircle className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                لم يتم العثور على تذكرة صيانة برقم: <span className="text-cyan-400 font-mono">{notFoundQuery}</span>
              </h4>
              <p className="text-sm text-gray-400 max-w-md mx-auto mb-6">
                يرجى التأكد من كتابة رمز التتبع بالشكل الصحيح المدون في إيصال الاستلام، أو تجربة أحد أرقام الأجهزة التجريبية.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => selectDemoCode('DV-8921')}
                  className="px-4 py-2 rounded-lg text-sm font-bold text-cyan-400 bg-[#232326] border border-white/10 hover:border-cyan-500/50 transition-colors"
                >
                  عرض مثال: DV-8921 (منفذ USB-C جاهز)
                </button>
                <button
                  type="button"
                  onClick={() => selectDemoCode('DV-7412')}
                  className="px-4 py-2 rounded-lg text-sm font-bold text-purple-400 bg-[#232326] border border-white/10 hover:border-purple-500/50 transition-colors"
                >
                  عرض مثال: DV-7412 (احتراق البوردة وقيد الصيانة)
                </button>
              </div>
            </div>
          ) : null}

        </div>

      </div>
    </section>
  );
};
