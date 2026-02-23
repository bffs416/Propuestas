import { NyvaraLogo } from '@/components/icons';
import { ProposalData } from '@/lib/proposal-data';

export default function Footer({ proposalData }: { proposalData: ProposalData }) {
  const notaFinalBlock = proposalData.bloques.find(
    (b) => b.id === 'nota_final'
  );
  return (
    <footer className="mt-32 pt-12 border-t border-slate-200/50 text-center reveal">
      <div className="max-w-2xl mx-auto px-6 text-slate-500 text-xs space-y-2 mb-8">
        <h4 className="text-sm font-bold text-slate-800">{notaFinalBlock?.titulo}</h4>
        {notaFinalBlock?.contenido.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div className="flex items-center justify-center space-x-3 mb-8">
        <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center shadow-lg">
          <span className="text-white text-[10px] font-bold">N</span>
        </div>
        <p className="text-slate-900 font-bold text-sm tracking-widest uppercase">
          Nyvara Group · Innovation Studio
        </p>
      </div>
      <p className="text-slate-400 text-[10px] uppercase tracking-[0.5em] mb-4">
        Confidencial · Todos los derechos reservados 2026
      </p>
      <div className="flex justify-center space-x-4">
        <div className="w-2 h-2 rounded-full bg-slate-200"></div>
        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
        <div className="w-2 h-2 rounded-full bg-slate-200"></div>
      </div>
    </footer>
  );
}
