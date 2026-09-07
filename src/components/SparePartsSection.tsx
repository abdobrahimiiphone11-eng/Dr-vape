import React, { useState } from 'react';
import { 
  Layers, 
  Search, 
  CheckCircle, 
  AlertCircle, 
  Cpu, 
  ShieldCheck, 
  Tag, 
  MessageSquare,
  Sparkles,
  SlidersHorizontal
} from 'lucide-react';
import { SPARE_PARTS, CONTACT_INFO } from '../data/mockData';
import { SparePart } from '../types';

export const SparePartsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'كافة قطع الغيار' },
    { id: 'منافذ الشحن', label: 'منافذ الشحن (Type-C)' },
    { id: 'الأزرار والمفاتيح', label: 'الأزرار وسويتشات الباور' },
    { id: 'الشاشات والعرض', label: 'شاشات TFT & OLED' },
    { id: 'الدوائر الإلكترونية', label: 'ترانزستورات وشرائح' },
    { id: 'الموصلات والأقطاب', label: 'موصلات 510 وعوازل' },
  ];

  const filteredParts = SPARE_PARTS.filter(part => {
    const matchesCategory = selectedCategory === 'all' || part.category === selectedCategory;
    const matchesSearch = 
      part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      part.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      part.compatibility.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="spare-parts" className="py-20 md:py-24 bg-[#0A0A0B] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>مخزون قطع الغيار والمكونات الأصلية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center justify-center gap-3">
            <span className="w-1.5 h-8 bg-purple-500 rounded-full inline-block"></span>
            <span>قطع غيار أصلية ومطابقة للمواصفات</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            نوفر مكونات عالية الجودة للعلامات الرائدة (GeekVape, Vaporesso, Voopoo, Lost Vape, DotMod) لضمان عمر أطول لجهازك.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/20'
                    : 'bg-[#161618] text-gray-400 hover:text-white hover:bg-white/5 border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن قطعة أو موديل..."
              className="w-full px-3.5 py-2 pl-9 bg-[#161618] text-sm text-white placeholder-gray-500 rounded-lg border border-white/10 focus:border-cyan-500 focus:outline-none"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

        </div>

        {/* Spare Parts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredParts.map((part) => (
            <div
              key={part.id}
              className="rounded-xl bg-[#161618] border border-white/10 hover:border-cyan-500/50 p-5 flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#232326] text-gray-400 border border-white/5">
                    {part.id}
                  </span>
                  
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs px-2 py-0.5 rounded bg-white/5 text-cyan-400 border border-white/10 font-semibold">
                      {part.quality}
                    </span>
                    {part.inStock ? (
                      <span className="text-xs text-emerald-400 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> متوفر
                      </span>
                    ) : (
                      <span className="text-xs text-amber-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> عند الطلب
                      </span>
                    )}
                  </div>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
                  {part.name}
                </h4>
                <p className="text-xs font-mono text-gray-400 mb-3" dir="ltr">
                  {part.nameEn}
                </p>

                {/* Compatibility */}
                <div className="mb-4">
                  <span className="text-[11px] text-gray-400 block mb-1">متوافق مع:</span>
                  <div className="flex flex-wrap gap-1">
                    {part.compatibility.map((comp, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-[11px] px-2 py-0.5 rounded bg-[#232326] text-gray-300 border border-white/5"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price and CTA */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                <div>
                  <span className="text-xs text-gray-400 block">السعر التقديري:</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-bold text-white font-mono">
                      {part.price}
                    </span>
                    <span className="text-xs text-cyan-400 font-bold">
                      {part.currency}
                    </span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(
                    `مرحباً دكتور فيب، أرغب بالاستفسار عن توفر وتركيب قطعة الغيار: ${part.name} (${part.id})`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-lg text-xs font-bold text-white border border-white/15 hover:border-cyan-500/50 hover:bg-white/5 transition-all flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>طلب تركيب</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Order Banner */}
        <div className="mt-10 p-5 rounded-xl bg-[#161618] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">لم تجد قطعة الغيار الخاصة بجهازك؟</h4>
              <p className="text-xs text-gray-400">نوفر خدمة الطلب الخاص وتوريد الشرائح النادرة عبر شبكة وكلائنا المعتمدين.</p>
            </div>
          </div>

          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-xs sm:text-sm font-bold text-white border border-white/20 hover:bg-white/5 transition-all whitespace-nowrap"
          >
            طلب قطعة نادرة عبر الواتساب
          </a>
        </div>

      </div>
    </section>
  );
};
