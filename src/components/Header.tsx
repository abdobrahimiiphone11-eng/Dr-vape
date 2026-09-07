import React, { useState } from 'react';
import { 
  Wrench, 
  Cpu, 
  Search, 
  PhoneCall, 
  Menu, 
  X, 
  Flame, 
  ShieldCheck, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

interface HeaderProps {
  onNavigateToTracking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigateToTracking }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'خدمات الصيانة', href: '#services' },
    { 
      label: 'تتبع جهازك', 
      href: '#tracking', 
      highlight: true,
      onClick: () => {
        onNavigateToTracking();
        setIsMobileMenuOpen(false);
      }
    },
    { label: 'قطع الغيار', href: '#spare-parts' },
    { label: 'اتصل بنا', href: '#contact' },
  ];

  return (
    <header 
      id="main-header"
      className="sticky top-0 z-50 backdrop-blur-md bg-[#0A0A0B]/80 border-b border-white/10 transition-all"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo Brand */}
          <a 
            href="#hero" 
            id="brand-logo"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
              <Cpu className="w-5 h-5 text-white" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-l from-cyan-400 to-purple-400 font-['JetBrains_Mono',monospace]">
                  Dr Vape
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-cyan-400 border border-white/10 font-bold">
                  PRO LAB
                </span>
              </div>
              <span className="text-[11px] text-gray-400 font-medium hidden sm:inline">
                مركز صيانة الشيشة الإلكترونية واللحام المجهري
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-navigation" className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-gray-400">
            {navItems.map((item, index) => {
              if (item.highlight) {
                return (
                  <button
                    key={index}
                    id="nav-track-btn"
                    onClick={() => {
                      if (item.onClick) item.onClick();
                      const el = document.getElementById('tracking');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="relative flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all shadow-sm shadow-cyan-500/10"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    <Search className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.label}</span>
                  </button>
                );
              }

              return (
                <a
                  key={index}
                  href={item.href}
                  className="hover:text-cyan-400 transition-colors py-1"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              id="header-whatsapp-cta"
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold text-white bg-[#161618] border border-white/15 hover:border-cyan-500/50 hover:bg-white/5 transition-all shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>واتساب الصيانة</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-tracking-shortcut"
              onClick={() => {
                onNavigateToTracking();
                const el = document.getElementById('tracking');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-2.5 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold flex items-center gap-1"
            >
              <Search className="w-3.5 h-3.5" />
              <span>تتبع</span>
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-[#161618] border border-white/10 text-gray-300 hover:text-white hover:border-cyan-500/50 transition-colors"
              aria-label="القائمة الرئيسية"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-nav-panel"
          className="md:hidden bg-[#0A0A0B]/95 border-b border-white/10 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => {
                if (item.onClick) {
                  e.preventDefault();
                  item.onClick();
                  const el = document.getElementById('tracking');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  setIsMobileMenuOpen(false);
                }
              }}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                item.highlight
                  ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-between'
                  : 'text-gray-400 hover:text-cyan-400 hover:bg-white/5'
              }`}
            >
              <span>{item.label}</span>
              {item.highlight && (
                <span className="flex items-center gap-1 text-xs bg-cyan-500/20 px-2 py-0.5 rounded text-cyan-300">
                  <Search className="w-3 h-3" /> فحص سريع
                </span>
              )}
            </a>
          ))}

          <div className="pt-2">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold text-white bg-[#161618] border border-white/15 hover:border-cyan-500/50 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>تواصل مع الفني عبر الواتساب</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
