'use client';

import { useState } from 'react';
import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Objective from '@/components/landing/objective';
import Services from '@/components/landing/services';
import Investment from '@/components/landing/investment';
import Benefits from '@/components/landing/benefits';
import Footer from '@/components/landing/footer';
import { mildredProposalData, mildredSocialData } from '@/lib/proposal-data';
import { Layout } from 'lucide-react';

export default function MildredMorenoProposalPage() {
  const [activeTab, setActiveTab] = useState<'web' | 'social'>('web');
  const currentData = activeTab === 'web' ? mildredProposalData : mildredSocialData;

  return (
    <>
      <Header proposalData={currentData} />
      <main className="max-w-6xl mx-auto px-6 mt-16 relative">
        {/* Tab Switcher */}
        <div className="flex justify-center mb-12 relative z-20">
          <div className="bg-slate-100/80 backdrop-blur-xl p-1.5 rounded-2xl inline-flex shadow-lg shadow-slate-200/50 border border-white/50">
            <button
              onClick={() => setActiveTab('web')}
              className={`px-8 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 ${activeTab === 'web'
                  ? 'bg-white text-blue-600 shadow-md shadow-slate-200/50 scale-100'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-white/50 scale-95'
                }`}
            >
              <Layout className="w-4 h-4" />
              Imagen y Web
            </button>
            <button
              onClick={() => setActiveTab('social')}
              className={`px-8 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 ${activeTab === 'social'
                  ? 'bg-white text-blue-600 shadow-md shadow-slate-200/50 scale-100'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-white/50 scale-95'
                }`}
            >
              <Layout className="w-4 h-4" />
              Manejo de Redes Sociales
            </button>
          </div>
        </div>

        <Hero proposalData={currentData} />
        <Objective proposalData={currentData} />
        <div className="space-y-24">
          <Services proposalData={currentData} />
        </div>
        <Investment proposalData={currentData} />
        <Benefits proposalData={currentData} />
      </main>
      <Footer proposalData={currentData} />
    </>
  );
}
