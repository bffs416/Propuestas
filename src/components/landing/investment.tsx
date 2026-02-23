'use client';
import { useState, useEffect, useRef } from 'react';
import ProjectDialog from './project-dialog';
import { ProposalData } from '@/lib/proposal-data';
import { Info, Sparkles, X, MapPin, Star } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

export default function Investment({ proposalData }: { proposalData: ProposalData }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCartagenaPopUpOpen, setIsCartagenaPopUpOpen] = useState(false);
  const [hasTriggeredCartagena, setHasTriggeredCartagena] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const investmentBlock = proposalData.bloques.find((b) => b.id === 'paquete');
  if (!investmentBlock) return null;

  const abonoCalculado = (investmentBlock.total_con_iva * 0.3);
  const isMercy = proposalData.cliente.nombre === 'Dra. Mercy Quezada';

  useEffect(() => {
    if (!isMercy || hasTriggeredCartagena) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsCartagenaPopUpOpen(true);
          setHasTriggeredCartagena(true);
        }
      },
      { 
        threshold: 0.2
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isMercy, hasTriggeredCartagena]);

  return (
    <>
      <section 
        ref={sectionRef}
        className="mt-24 hyperglass rounded-[3rem] p-10 md:p-14 text-slate-900 shadow-2xl border-white relative overflow-hidden reveal"
      >
        <div className="flex flex-col lg:flex-row justify-between gap-16 relative z-10">
          <div className="flex-1">
            <h3 className="text-xs uppercase tracking-[0.5em] font-bold text-blue-600 mb-8">
              {investmentBlock.titulo}
            </h3>
            <div className="space-y-5 mb-10">
              {investmentBlock.items.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center text-sm md:text-base"
                >
                  <span className="text-slate-500">{item.nombre}</span>
                  <span className="font-mono font-bold text-slate-700">
                    COP{' '}
                    <span>
                      {item.valor_sin_iva.toLocaleString('es-CO')}
                    </span>
                  </span>
                </div>
              ))}

              <div className="pt-6 border-t border-slate-200 flex justify-between items-center">
                <span className="text-slate-900 font-bold uppercase tracking-[0.2em] text-xs">
                  Subtotal Proyecto con Descuento
                </span>
                <span className="text-3xl font-bold font-mono text-slate-900">
                  COP{' '}
                  <span>
                    {investmentBlock.subtotal_sin_iva.toLocaleString('es-CO')}
                  </span>
                </span>
              </div>
              <div className="flex justify-between items-center text-sm text-slate-500">
                <span>Impuestos (IVA {investmentBlock.iva_porcentaje}%)</span>
                <span className="font-mono">
                  COP{' '}
                  <span>
                    {investmentBlock.iva_valor.toLocaleString('es-CO')}
                  </span>
                </span>
              </div>
            </div>

            {/* Inversión Total Final */}
            <div className="p-8 bg-slate-900 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center text-white shadow-2xl border border-slate-800 mb-8">
              <div className="mb-6 md:mb-0">
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">
                  Inversión Total Final
                </span>
                <div className="text-4xl md:text-6xl font-outfit font-bold tracking-tighter mt-1 text-blue-400">
                  COP{' '}
                  <span>
                    {investmentBlock.total_con_iva.toLocaleString('es-CO')}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsDialogOpen(true)}
                className="bg-blue-600 hover:bg-blue-500 text-white px-12 py-6 rounded-[1.5rem] text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20 uppercase tracking-widest"
              >
                ACEPTAR PROPUESTA
              </button>
            </div>

            {/* Compromiso de Inicio (Después de Inversión Total Final) */}
            <div className="p-6 bg-blue-50/80 rounded-[2rem] border border-blue-100 flex items-start gap-4 shadow-sm mb-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-lg shadow-blue-200">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-blue-900 uppercase tracking-wider">Compromiso de Inicio</p>
                <p className="text-sm text-blue-700 leading-relaxed mt-1">
                  Para dar inicio formal al desarrollo, es necesario un <strong>abono del 30%</strong> inicial: 
                  <span className="ml-1 font-mono font-bold text-blue-900 bg-white/50 px-2 py-0.5 rounded">COP {abonoCalculado.toLocaleString('es-CO')}</span>.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-80 flex flex-col justify-end text-center lg:text-right">
            <div className="mb-8">
              <div className="flex justify-center lg:justify-end mb-4">
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="text-sm font-bold text-slate-900">
                Garantía de Excelencia
              </p>
              <p className="text-[11px] text-slate-400 leading-relaxed mt-2 uppercase tracking-tighter">
                Implementación completa en 25 días hábiles tras recepción de materiales técnicos.
              </p>
            </div>
            <div className="pt-8 border-t border-slate-200/50">
              <p className="text-xs font-bold text-slate-900 mb-1">
                {proposalData.cliente.nombre}
              </p>
              <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em]">
                Acuerdo de Confidencialidad
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pop-up Cartagena (Premium & Único) */}
      <Dialog open={isCartagenaPopUpOpen} onOpenChange={setIsCartagenaPopUpOpen}>
        <DialogContent className="sm:max-w-[550px] p-0 overflow-hidden border-none bg-transparent shadow-none">
          <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 p-10 text-white rounded-[3rem] border border-white/10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] animate-in zoom-in-95 duration-500">
            <button 
              onClick={() => setIsCartagenaPopUpOpen(false)}
              className="absolute top-8 right-8 p-2.5 bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center backdrop-blur-xl border border-blue-500/30">
                <MapPin className="w-7 h-7 text-blue-400" />
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-blue-500/30 to-transparent"></div>
            </div>

            <DialogHeader className="text-left space-y-6">
              <div className="inline-flex items-center px-4 py-1.5 bg-blue-500/10 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] border border-blue-500/20 text-blue-400">
                <Sparkles className="w-3 h-3 mr-2" />
                Obsequio Estratégico Exclusivo
              </div>
              <DialogTitle className="text-4xl md:text-5xl font-outfit font-bold leading-[1.1] tracking-tight text-white">
                Presentación <br /> Cartagena 2026
              </DialogTitle>
              <DialogDescription className="text-blue-100/80 text-lg font-light leading-relaxed">
                Desarrollaremos una <span className="text-white font-semibold">presentación dinámica, profesional y única</span> para su evento en Cartagena. Diseñada para capturar la atención de su audiencia y proyectar su autoridad clínica desde el primer segundo.
              </DialogDescription>
            </DialogHeader>

            <div className="mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-blue-600 flex items-center justify-center text-[10px] font-bold">
                    {i === 3 ? '+' : '✓'}
                  </div>
                ))}
                <span className="ml-6 text-[11px] font-bold text-blue-400 uppercase tracking-widest flex items-center">Alta Fidelidad</span>
              </div>
              <button 
                onClick={() => setIsCartagenaPopUpOpen(false)}
                className="w-full md:w-auto bg-white text-slate-900 px-10 py-4 rounded-2xl font-bold text-sm hover:bg-blue-50 hover:scale-105 transition-all shadow-xl shadow-white/5"
              >
                ¡CONFIRMAR BENEFICIO!
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <ProjectDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  );
}
