'use client';

import { useEffect, useState } from 'react';
import {
  ChevronDown, ChevronLeft, ChevronRight,
  ExternalLink, Sparkles, CheckCircle2,
  Video, Users, Image as ImageIcon, Film
} from 'lucide-react';

export default function GlucoscacaoPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState(0); // 0 to 3 for ideas
  const [activeSketch, setActiveSketch] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    // Scroll reveal observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [mounted]);

  // Reset active sketch to 0 when changing tab
  useEffect(() => {
    setActiveSketch(0);
  }, [activeTab]);

  if (!mounted) return null;

  // Generamos 4 ideas, cada una con 20 escenas.
  const ideas = Array.from({ length: 4 }).map((_, ideaIndex) => ({
    id: ideaIndex + 1,
    tabName: `Idea ${ideaIndex + 1}`,
    scenes: Array.from({ length: 20 }).map((_, sceneIndex) => ({
      title: `Escena ${sceneIndex + 1}`,
      image: `/glucoscacao/idea${ideaIndex + 1}/${sceneIndex + 1}.png`,
      description: `Aquí va el texto descriptivo del guion visual para la Escena ${sceneIndex + 1} de la Idea ${ideaIndex + 1}.`,
      action: `Aquí va la descripción técnica o lo que se haría en cámara para la Escena ${sceneIndex + 1}.`
    }))
  }));

  const currentScenes = ideas[activeTab].scenes;

  return (
    <div className="min-h-screen relative text-slate-800 antialiased font-outfit">
      {/* ─── FONDO DE CANVAS DINÁMICO ─── */}
      <div className="bg-canvas">
        <div className="bg-mesh-container">
          <div className="dynamic-blob blob-blue" style={{ background: 'radial-gradient(circle, rgba(217, 119, 6, 0.25) 0%, rgba(180, 83, 9, 0.05) 100%)' }} />
          <div className="dynamic-blob blob-purple" style={{ background: 'radial-gradient(circle, rgba(146, 64, 14, 0.15) 0%, rgba(120, 53, 15, 0.02) 100%)' }} />
        </div>
        <div className="grid-pattern" />
        <div className="noise" />
      </div>

      {/* ─── HEADER / NAVBAR ─── */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl glass-header rounded-2xl shadow-xl transition-all duration-300">
        <div className="px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-black tracking-wider bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
            GLUCOSCACAO
          </span>
          <div className="flex items-center gap-6 text-xs font-semibold text-slate-600">
            <a href="#cinematografia" className="hover:text-orange-600 transition-colors">Cinematografía</a>
            <a href="#contacto" className="hover:text-orange-600 transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="min-h-screen flex flex-col justify-center relative px-6 max-w-5xl mx-auto pt-28 pb-16">
        <div className="flex flex-wrap gap-3 mb-8 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50/80 border border-orange-100/50 backdrop-blur-sm shadow-sm">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-[11px] font-bold text-orange-700 uppercase tracking-widest">
              Producción Audiovisual
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-50/80 border border-amber-100/50 backdrop-blur-sm shadow-sm">
            <Film className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-[11px] font-semibold text-amber-700 uppercase tracking-widest">
              Guion Cinematográfico
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-8xl font-black mb-6 leading-none tracking-tight reveal" style={{ transitionDelay: '0.1s' }}>
          <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-orange-600 bg-clip-text text-transparent">
            Glucoscacao
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-slate-500 max-w-3xl font-light leading-relaxed mb-6 reveal" style={{ transitionDelay: '0.2s' }}>
          Propuesta conceptual y desglose técnico para la producción de su historia y esencia.
        </p>

        <div className="mt-16 flex flex-col items-center text-slate-400 reveal" style={{ transitionDelay: '0.4s' }}>
          <span className="text-[10px] uppercase tracking-[0.4em] mb-3 font-semibold">
            Ver Sketches
          </span>
          <ChevronDown className="w-5 h-5 scroll-indicator text-orange-500" />
        </div>
      </section>

      {/* ─── GALERÍA DE SKETCHES POR PESTAÑAS ─── */}
      <section className="py-28 px-6 max-w-5xl mx-auto reveal" id="cinematografia">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-orange-600 mb-2 block">
            Desglose Visual
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Sketches de Cinematografía
          </h2>
        </div>

        {/* TABS CONTROLS */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {ideas.map((idea, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                activeTab === idx
                ? 'bg-orange-600 text-white border-orange-600 shadow-lg scale-105'
                : 'bg-white/50 text-slate-500 border-slate-200 hover:bg-white/80 hover:border-orange-300'
              }`}
            >
              {idea.tabName}
            </button>
          ))}
        </div>

        <div className="bg-white/60 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-slate-200/60 shadow-2xl transition-all">
          {/* Main Display */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-900 relative group">
              <img 
                src={currentScenes[activeSketch].image} 
                alt={currentScenes[activeSketch].title}
                className="w-full h-full object-cover transition-opacity duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://placehold.co/800x450/451a03/ffffff?text=${encodeURIComponent(ideas[activeTab].tabName + ' - ' + currentScenes[activeSketch].title)}`;
                }}
              />
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-semibold tracking-wider z-10">
                {currentScenes[activeSketch].title.toUpperCase()}
              </div>

              {/* Controles de navegación de imagen */}
              <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={() => setActiveSketch(prev => Math.max(prev - 1, 0))}
                  disabled={activeSketch === 0}
                  className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-orange-600 transition-colors disabled:opacity-30 disabled:hover:bg-black/50 z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => setActiveSketch(prev => Math.min(prev + 1, currentScenes.length - 1))}
                  disabled={activeSketch === currentScenes.length - 1}
                  className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-orange-600 transition-colors disabled:opacity-30 disabled:hover:bg-black/50 z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-3xl font-black text-slate-900 mb-4">{currentScenes[activeSketch].title}</h3>
                <div className="space-y-4">
                  <div className="bg-orange-50/50 p-4 rounded-xl border border-orange-100">
                    <h4 className="text-sm font-bold text-orange-800 mb-2 flex items-center gap-2">
                      <ImageIcon className="w-4 h-4" /> En el Guion (Visual)
                    </h4>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">{currentScenes[activeSketch].description}</p>
                  </div>
                  <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100">
                    <h4 className="text-sm font-bold text-amber-800 mb-2 flex items-center gap-2">
                      <Video className="w-4 h-4" /> Qué se haría (Técnica)
                    </h4>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">{currentScenes[activeSketch].action}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnails (Scrollable / Wrap) */}
          <div className="border-t border-slate-200 pt-8">
            <h4 className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-widest text-center">Selecciona una escena</h4>
            {/* Scroll Area horizontal para muchas imágenes o Wrap */}
            <div className="flex flex-wrap justify-center gap-3">
              {currentScenes.map((sketch, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSketch(idx)}
                  className={`relative w-20 h-14 md:w-24 md:h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 shrink-0 ${
                    activeSketch === idx 
                    ? 'border-orange-500 shadow-lg scale-110 z-10' 
                    : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'
                  }`}
                  title={sketch.title}
                >
                  <img 
                    src={sketch.image} 
                    alt={sketch.title} 
                    className="w-full h-full object-cover" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/200x150/451a03/ffffff?text=${idx + 1}`;
                    }}
                  />
                  {activeSketch === idx && (
                    <div className="absolute inset-0 bg-orange-500/20 mix-blend-overlay" />
                  )}
                  {/* Pequeño número de escena en la miniatura */}
                  <div className="absolute bottom-0 right-0 bg-black/60 text-white text-[10px] px-1.5 rounded-tl-md font-bold">
                    {idx + 1}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-12 px-6 text-center border-t border-slate-200/50 mt-20">
        <p className="text-xs font-light text-slate-400">
          Propuesta Creativa · Glucoscacao
        </p>
      </footer>
    </div>
  );
}
