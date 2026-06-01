'use client';

import { useState } from 'react';
import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Objective from '@/components/landing/objective';
import Services from '@/components/landing/services';
import Investment from '@/components/landing/investment';
import ComparisonSales from '@/components/landing/comparison-sales';
import SystemFlow from '@/components/landing/system-flow';
import Benefits from '@/components/landing/benefits';
import Footer from '@/components/landing/footer';
import { wilmer360ProposalData, wilmerEconomicaProposalData } from '@/lib/proposal-data';
import { Shield, Sparkles, Star, TrendingUp } from 'lucide-react';

export default function DrWilmerMunozProposalPage() {
  const [activePlan, setActivePlan] = useState<'360' | 'starter'>('360');

  const currentProposalData = activePlan === '360' ? wilmer360ProposalData : wilmerEconomicaProposalData;

  return (
    <>
      <Header proposalData={currentProposalData} />
      
      <main className="max-w-6xl mx-auto px-6 mt-16 relative">
        {/* Premium Plan Toggle Switch */}
        <div className="w-full flex flex-col items-center mb-12 relative z-20">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-slate-500 mb-4">
            Selecciona la propuesta que deseas revisar
          </span>
          
          <div className="flex p-2 bg-blue-50/60 border border-blue-100/80 rounded-[2.5rem] shadow-lg relative max-w-xl w-full backdrop-blur-md">
            {/* Economica / Starter Pill */}
            <button
              onClick={() => setActivePlan('starter')}
              className={`flex-1 flex flex-col items-center justify-center py-4 px-5 rounded-[2rem] transition-all duration-500 relative ${
                activePlan === 'starter'
                  ? 'bg-white text-slate-900 border border-slate-200 shadow-md'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <span className="text-xs uppercase font-bold tracking-wider mb-1">
                Plan Starter (Económica)
              </span>
              <span className={`text-lg font-bold transition-colors duration-500 ${
                activePlan === 'starter' ? 'text-blue-600' : 'text-slate-400'
              }`}>
                $7'000.000 COP
              </span>
              <span className="text-[9px] text-slate-500 font-medium mt-0.5">
                Ecosistema Esencial
              </span>
            </button>

            {/* 360° / Completa Pill */}
            <button
              onClick={() => setActivePlan('360')}
              className={`flex-1 flex flex-col items-center justify-center py-4 px-5 rounded-[2rem] transition-all duration-500 relative ${
                activePlan === '360'
                  ? 'bg-gradient-to-r from-blue-600 to-sky-600 text-white shadow-lg shadow-blue-500/25 border-t border-white/15'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {/* Premium Glow Badge */}
              <span className="absolute -top-3 px-3 py-0.5 bg-yellow-400 text-slate-950 text-[9px] uppercase font-bold rounded-full tracking-widest flex items-center gap-1 shadow-md shadow-yellow-400/25 border border-yellow-300">
                <Star className="w-2.5 h-2.5 fill-slate-950 text-slate-950" /> Recomendado
              </span>
              
              <span className="text-xs uppercase font-bold tracking-wider mb-1">
                Plan 360° (Completa)
              </span>
              <span className={`text-lg font-bold transition-colors duration-500 ${
                activePlan === '360' ? 'text-yellow-300' : 'text-slate-400'
              }`}>
                $14'000.000 COP
              </span>
              <span className={`text-[9px] font-medium mt-0.5 ${
                activePlan === '360' ? 'text-blue-100' : 'text-slate-500'
              }`}>
                Infraestructura Médica Total
              </span>
            </button>
          </div>
          
          {/* Dynamic Switch Notice */}
          <p className="text-xs text-slate-500 mt-4 text-center max-w-md leading-relaxed font-light">
            {activePlan === '360' 
              ? '✓ Estás visualizando la propuesta integral de alta gama que incluye los 9 módulos avanzados de seguridad, automatizaciones CRM e integraciones post-op.' 
              : '✓ Estás visualizando la propuesta Starter enfocada en control digital inicial y portal web informativo con pre-consulta en WhatsApp.'
            }
          </p>
        </div>

        {/* Dynamic Rendered Content */}
        <Hero proposalData={currentProposalData} />
        <SystemFlow />
        <Objective proposalData={currentProposalData} />
        
        <div className="space-y-24">
          <Services proposalData={currentProposalData} />
        </div>
        
        <Investment proposalData={currentProposalData} />
        <ComparisonSales activePlan={activePlan} />
        <Benefits proposalData={currentProposalData} />
      </main>
      
      <Footer proposalData={currentProposalData} />
    </>
  );
}
