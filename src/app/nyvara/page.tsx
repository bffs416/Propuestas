'use client';

import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Objective from '@/components/landing/objective';
import Services from '@/components/landing/services';
import Investment from '@/components/landing/investment';
import NyvaraPricing from '@/components/landing/nyvara-pricing';
import Benefits from '@/components/landing/benefits';
import Footer from '@/components/landing/footer';
import NyvaraNav from '@/components/landing/nyvara-nav';
import MultimediaViewer from '@/components/landing/multimedia-viewer';
import WebVideoShowcase from '@/components/landing/web-video-showcase';
import Video4KShowcase from '@/components/landing/video-4k-showcase';
import { nyvaraProposalData } from '@/lib/proposal-data';

export default function NyvaraProposalPage() {
  return (
    <>
      <Header proposalData={nyvaraProposalData} />
      <main className="max-w-7xl mx-auto px-4 md:px-8 mt-16 relative">
        <NyvaraNav />
        <Hero proposalData={nyvaraProposalData} />
        <Objective proposalData={nyvaraProposalData} />
        
        {/* Seccion Interactiva Ecosistema Multimedia Nyvara (Disposición en Escalerita) */}
        <section className="my-16 space-y-8" id="ecosistema-multimedia">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase font-extrabold tracking-widest text-sky-600 mb-2 block font-outfit">
              Ecosistema Audiovisual & Inmersivo Nyvara
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Muestras Interactivas en Vivo
            </h2>
            <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto mt-3">
              Navegación dinámica en disposición escalonada
            </p>
          </div>

          {/* Disposición Escalerita: 
              1. Extremo Derecho (Videos de la Web)
              2. Abajo a la Izquierda (Videos 4K)
              3. Centro Abajo (Recorridos 360° más grande)
          */}
          <div className="space-y-10 lg:space-y-14">
            
            {/* ESCALÓN 1: Extremo Derecho (Videos Web) */}
            <div className="flex justify-end w-full">
              <div className="w-full lg:w-[75%] xl:w-[70%] transform hover:-translate-y-1 transition-all duration-300">
                <div className="mb-2 flex items-center justify-end gap-2 pr-2">
                  <span className="text-[11px] font-black uppercase tracking-widest text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                    1. Derecha · Sitios Web
                  </span>
                </div>
                <WebVideoShowcase layout="column" />
              </div>
            </div>

            {/* ESCALÓN 2: Abajo a la Izquierda (Videos 4K) */}
            <div className="flex justify-start w-full lg:-mt-8">
              <div className="w-full lg:w-[75%] xl:w-[70%] transform hover:-translate-y-1 transition-all duration-300">
                <div className="mb-2 flex items-center justify-start gap-2 pl-2">
                  <span className="text-[11px] font-black uppercase tracking-widest text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                    2. Izquierda · Producción 4K
                  </span>
                </div>
                <Video4KShowcase layout="column" />
              </div>
            </div>

            {/* ESCALÓN 3: Centro Abajo (Recorridos Virtuales 360° - Cuadro de Tarjeta Mucho Más Grande) */}
            <div className="pt-10 w-full" id="simulador-multimedia">
              <div className="text-center mb-6">
                <span className="text-xs uppercase font-black tracking-widest text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200 inline-block mb-2 font-outfit shadow-sm">
                  3. Centro Inferior · Experiencia 3D Inmersiva
                </span>
                <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                  Portafolio Principal de Recorridos Virtuales 360°
                </h3>
                <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto mt-2">
                  Visor interactivo panorámico de alta definición a gran formato
                </p>
              </div>
              
              <div className="bg-white/95 rounded-3xl border border-slate-200/90 p-3 md:p-6 shadow-2xl">
                <MultimediaViewer />
              </div>
            </div>

          </div>
        </section>

        <div className="space-y-24">
          <Services proposalData={nyvaraProposalData} />
        </div>
        
        {/* Tabla de Inversión y Precios Detallados Nyvara */}
        <NyvaraPricing />
        
        <Investment proposalData={nyvaraProposalData} />
        <Benefits proposalData={nyvaraProposalData} />
      </main>
      <Footer proposalData={nyvaraProposalData} />
    </>
  );
}
