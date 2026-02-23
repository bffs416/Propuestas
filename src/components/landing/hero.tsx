import { ProposalData } from '@/lib/proposal-data';

export default function Hero({ proposalData }: { proposalData: ProposalData }) {
  const [firstName, ...lastNameParts] =
    proposalData.cliente.nombre.split(' ');
  const lastName = lastNameParts.join(' ');

  const heroFrase = (proposalData as any).hero_frase || "Una infraestructura diseñada para proyectar autoridad clínica.";

  return (
    <section className="mb-20 animate-fade-up min-h-[70vh] flex flex-col justify-center">
      <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 mb-8 backdrop-blur-md">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
          Propuesta Integral Premium
        </span>
      </div>
      <h1 className="text-6xl md:text-7xl font-outfit font-bold mb-6 gradient-text leading-tight tracking-tighter">
        {firstName}
        <br />
        <span className="text-blue-600">{lastName}</span>
      </h1>
      <p className="text-xl md:text-2xl text-slate-500 max-w-2xl font-light leading-relaxed">
        {proposalData.subtitulo}: {heroFrase}
      </p>

      <div className="flex flex-wrap gap-4 mt-12">
        <div className="hyperglass px-5 py-3 rounded-2xl flex items-center shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-3 animate-pulse"></span>
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            {proposalData.cliente.especialidad}
          </span>
        </div>
      </div>

      <div className="mt-24 flex flex-col items-center justify-center text-slate-400 scroll-indicator">
        <span className="text-[9px] uppercase tracking-[0.4em] mb-3 font-semibold">
          Descubrir Solución
        </span>
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </section>
  );
}
