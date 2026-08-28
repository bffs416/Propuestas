import { ProposalData } from '@/lib/proposal-data';

export default function Header({ proposalData }: { proposalData?: ProposalData }) {
  const refId = proposalData?.ref || "GEN_2026";
  
  return (
    <header className="sticky top-0 z-50 glass-header">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-sm">N</span>
          </div>
          <span className="font-outfit font-bold text-base tracking-wider text-slate-900">NYVARA GROUP</span>
        </div>
        <div className="text-[10px] text-slate-500 font-mono bg-white/60 border border-white/50 px-3 py-1.5 rounded-full shadow-sm">
          REF: PROP_{refId}
        </div>
      </div>
    </header>
  );
}
