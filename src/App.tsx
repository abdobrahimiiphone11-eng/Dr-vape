/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RepairTracker } from './components/RepairTracker';
import { ServicesSection } from './components/ServicesSection';
import { SparePartsSection } from './components/SparePartsSection';
import { ContactFooter } from './components/ContactFooter';
import { MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from './data/mockData';

export default function App() {
  const [trackerSearchId, setTrackerSearchId] = useState<string>('DV-8921');

  const handleScrollToTracking = (idToSearch?: string) => {
    if (idToSearch) {
      setTrackerSearchId(idToSearch);
    }
    const trackingElement = document.getElementById('tracking');
    if (trackingElement) {
      trackingElement.scrollIntoView({ behavior: 'smooth' });
      // Focus on input if possible
      setTimeout(() => {
        const input = document.getElementById('ticket-search-input');
        if (input) {
          input.focus();
        }
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white font-['Cairo',sans-serif] selection:bg-cyan-500/30 selection:text-cyan-200 antialiased relative">
      
      {/* 1. Header & Navigation */}
      <Header onNavigateToTracking={() => handleScrollToTracking()} />

      <main>
        {/* 2. Hero Section */}
        <Hero onScrollToTracking={() => handleScrollToTracking()} />

        {/* 3. Repair Tracking Section */}
        <RepairTracker initialSearchQuery={trackerSearchId} />

        {/* 4. Technical Services Section */}
        <ServicesSection />

        {/* 5. Spare Parts Catalog Section */}
        <SparePartsSection />
      </main>

      {/* 6. Footer & Contact Information */}
      <ContactFooter />

      {/* Floating Direct WhatsApp Button */}
      <a
        id="floating-whatsapp-btn"
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="مراسلة فني الصيانة عبر الواتساب"
        className="fixed bottom-6 left-6 z-40 p-3.5 sm:p-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30 border border-emerald-400/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 group"
      >
        <MessageSquare className="w-6 h-6 text-white" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-sm font-bold">
          تواصل مع الفني
        </span>
      </a>

    </div>
  );
}
