'use client';

import { NyvaraLogo } from '@/components/icons';
import { ProposalData } from '@/lib/proposal-data';
import {
  Calendar,
  DollarSign,
  FileText,
  Lock,
  Server,
  ShieldCheck,
  Cpu,
  Flame,
  CheckCircle,
} from 'lucide-react';

export default function Footer({ proposalData }: { proposalData: ProposalData }) {
  const notaFinalBlock = proposalData.bloques.find(
    (b) => b.id === 'nota_final'
  );

  // Helper to select an icon based on content keywords
  const getIcon = (text: string) => {
    const lower = text.toLowerCase();
    if (lower.includes('validez') || lower.includes('días calendario')) return <Calendar className="w-5 h-5 text-sky-600" />;
    if (lower.includes('pago') || lower.includes('inversión')) return <DollarSign className="w-5 h-5 text-emerald-600" />;
    if (lower.includes('propiedad') || lower.includes('dueño')) return <ShieldCheck className="w-5 h-5 text-amber-600" />;
    if (lower.includes('datos') || lower.includes('ley 1581') || lower.includes('sic')) return <Lock className="w-5 h-5 text-red-600" />;
    if (lower.includes('arquitectura') || lower.includes('vps') || lower.includes('hostinger')) return <Server className="w-5 h-5 text-violet-600" />;
    if (lower.includes('estimado') || lower.includes('costos de terceros') || lower.includes('dian')) return <Cpu className="w-5 h-5 text-sky-600" />;
    if (lower.includes('soporte') || lower.includes('mantenimiento')) return <Flame className="w-5 h-5 text-amber-600" />;
    return <CheckCircle className="w-5 h-5 text-slate-400" />;
  };

  // Helper to format text and bold content before colon
  const formatText = (text: string) => {
    const parts = text.split(':');
    if (parts.length > 1) {
      return (
        <span>
          <strong className="text-slate-900 font-bold block md:inline mb-1 md:mb-0 mr-1.5">{parts[0]}:</strong>
          <span className="text-slate-600 font-light">{parts.slice(1).join(':')}</span>
        </span>
      );
    }
    return <span className="text-slate-600 font-light">{text}</span>;
  };

  return (
    <footer className="mt-32 pt-16 border-t border-slate-200 reveal">
      {/* Premium Conditions Sheet Container - Clinical Blue Themed */}
      {notaFinalBlock && (
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-10 md:py-12 rounded-[2.5rem] bg-blue-50/50 border border-blue-100 shadow-md backdrop-blur-md mb-16">
          <div className="flex items-center gap-3 mb-8 border-b border-blue-100 pb-5">
            <FileText className="w-6 h-6 text-blue-600" />
            <h4 className="text-lg md:text-xl font-outfit font-bold text-slate-800 uppercase tracking-wider">
              {notaFinalBlock.titulo}
            </h4>
          </div>

          <div className="grid gap-4">
            {notaFinalBlock.contenido.map((item, index) => (
              <div key={index} className="flex gap-4 items-start p-4 rounded-2xl hover:bg-white/60 border border-transparent hover:border-blue-100/50 transition-all duration-300">
                <div className="p-2.5 rounded-xl bg-white border border-blue-100/50 shrink-0 shadow-sm">
                  {getIcon(item)}
                </div>
                <p className="text-sm leading-relaxed text-slate-700">
                  {formatText(item)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Corporate Brand Identity */}
      <div className="text-center pb-12">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="w-9 h-9 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-500 hover:scale-105">
            <span className="text-white text-xs font-black tracking-tighter">N</span>
          </div>
          <p className="text-slate-800 font-outfit font-extrabold text-sm tracking-[0.2em] uppercase">
            Nyvara Group · Innovation Studio
          </p>
        </div>
        
        <p className="text-[10px] text-slate-400 uppercase tracking-[0.4em] mb-4">
          Propuesta Comercial Confidencial · Todos los derechos reservados © 2026
        </p>
        
        <div className="flex justify-center space-x-3">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
        </div>
      </div>
    </footer>
  );
}
