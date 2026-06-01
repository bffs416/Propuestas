'use client';

import { useEffect, useState } from 'react';
import {
  FileText,
  Map,
  Target,
  Layers,
  DollarSign,
  GitCompare,
  Gift,
  Shield,
  ChevronDown,
} from 'lucide-react';

interface Section {
  id: string;
  label: string;
  icon: React.ReactNode;
  desc: string;
}

const sections: Section[] = [
  {
    id: 'hero',
    label: 'Inicio',
    icon: <FileText className="w-3.5 h-3.5" />,
    desc: 'Vista general de la propuesta',
  },
  {
    id: 'timeline',
    label: 'Viaje del Paciente',
    icon: <Map className="w-3.5 h-3.5" />,
    desc: 'Las 11 etapas automatizadas',
  },
  {
    id: 'objective',
    label: 'Objetivo',
    icon: <Target className="w-3.5 h-3.5" />,
    desc: 'Qué logra este sistema',
  },
  {
    id: 'services',
    label: 'Servicios',
    icon: <Layers className="w-3.5 h-3.5" />,
    desc: 'Módulos incluidos',
  },
  {
    id: 'investment',
    label: 'Inversión',
    icon: <DollarSign className="w-3.5 h-3.5" />,
    desc: 'Precio y forma de pago',
  },
  {
    id: 'compare',
    label: 'Comparar Planes',
    icon: <GitCompare className="w-3.5 h-3.5" />,
    desc: 'Starter vs 360°',
  },
  {
    id: 'bonos',
    label: 'Bonos',
    icon: <Gift className="w-3.5 h-3.5" />,
    desc: 'Beneficios adicionales',
  },
  {
    id: 'benefits',
    label: 'Beneficios',
    icon: <Shield className="w-3.5 h-3.5" />,
    desc: 'Valor del ecosistema',
  },
];

export default function ProposalGuide() {
  const [active, setActive] = useState('hero');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    const ids = ['hero', 'timeline', 'objective', 'services', 'investment', 'bonos', 'benefits'];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <>
      {/* FAB — visible solo en mobile (<768px) */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl border md:hidden transition-all duration-300 hover:scale-105 active:scale-95"
        style={{
          background: open
            ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
            : 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)',
          borderColor: 'rgba(255,255,255,0.1)',
          boxShadow: '0 8px 32px rgba(37,99,235,0.3)',
        }}
        aria-label="Navegación rápida"
      >
        <ChevronDown
          className={`w-5 h-5 text-white transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed z-50 transition-all duration-400 ease-out ${
          open
            ? 'bottom-24 right-6 w-72 max-h-[70vh] overflow-y-auto rounded-2xl'
            : 'bottom-6 right-6 w-0 h-0 overflow-hidden md:bottom-auto md:left-6 md:top-1/3 md:-translate-y-1/2 md:w-auto md:h-auto md:rounded-xl md:overflow-visible'
        }`}
        style={{
          background: open ? 'rgba(15,23,42,0.97)' : 'transparent',
          border: open ? '1px solid rgba(255,255,255,0.08)' : 'none',
          boxShadow: open ? '0 20px 60px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        {/* Desktop sidebar — hidden on mobile, visible md+ */}
        <div className="hidden md:block">
          <div
            className="p-3 rounded-xl border backdrop-blur-md"
            style={{
              background: 'rgba(15,23,42,0.85)',
              borderColor: 'rgba(255,255,255,0.06)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}
          >
            <div className="text-[9px] uppercase font-extrabold tracking-[0.2em] text-center mb-3 pb-2 border-b"
              style={{ color: '#64748b', borderColor: 'rgba(255,255,255,0.06)' }}>
              Guía Rápida
            </div>

            <nav className="space-y-0.5">
              {sections.map((s) => {
                const isActive = active === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[11px] font-medium transition-all duration-200 text-left group"
                    style={{
                      background: isActive ? 'rgba(37,99,235,0.15)' : 'transparent',
                      color: isActive ? '#60a5fa' : '#94a3b8',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    <span
                      className={`shrink-0 transition-colors ${
                        isActive ? 'text-amber-400' : 'text-slate-500 group-hover:text-slate-300'
                      }`}
                    >
                      {s.icon}
                    </span>
                    <span className="truncate">{s.label}</span>
                    {isActive && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="mt-3 pt-2 border-t text-center"
              style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
              <span className="text-[8px] font-medium tracking-wider"
                style={{ color: '#475569' }}>
                Navega por la propuesta
              </span>
            </div>
          </div>
        </div>

        {/* Mobile expanded menu */}
        {open && (
          <div className="md:hidden p-4">
            <div className="text-[10px] uppercase font-extrabold tracking-[0.2em] text-center mb-4 pb-3 border-b"
              style={{ color: '#64748b', borderColor: 'rgba(255,255,255,0.06)' }}>
              Navegar en la Propuesta
            </div>
            <nav className="space-y-1">
              {sections.map((s) => {
                const isActive = active === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-left"
                    style={{
                      background: isActive ? 'rgba(37,99,235,0.15)' : 'transparent',
                      color: isActive ? '#60a5fa' : '#cbd5e1',
                    }}
                  >
                    <span
                      className={`shrink-0 ${isActive ? 'text-amber-400' : 'text-slate-500'}`}
                    >
                      {s.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="truncate">{s.label}</div>
                      <div className="text-[10px] font-normal truncate"
                        style={{ color: '#64748b' }}>
                        {s.desc}
                      </div>
                    </div>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
