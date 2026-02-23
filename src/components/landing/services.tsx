import { ProposalData } from '@/lib/proposal-data';
import {
  MessageCircle,
  ClipboardList,
  Clock,
  BrainCircuit,
  LayoutTemplate,
  Award,
  Target,
  Server,
} from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  MessageCircle,
  ClipboardList,
  Clock,
  BrainCircuit,
  LayoutTemplate,
  Award,
  Target,
  Server,
};

const WebService = ({ proposalData }: { proposalData: ProposalData }) => {
  const service = proposalData.bloques.find((b) => b.id === 'servicio_web');
  if (!service || service.tipo !== 'card') return null;

  const features = {
    enfoque: service.caracteristicas.find((c) => c.titulo === 'Enfoque') || service.caracteristicas.find((c) => c.titulo === 'Logotipo y Sistema') || service.caracteristicas.find((c) => c.titulo === 'Desarrollo'),
    incluye: service.caracteristicas.find((c) => c.titulo === 'Incluye'),
    valoresAgregados: service.caracteristicas.find(
      (c) => c.titulo === 'Valores agregados'
    ),
    noIncluye: service.caracteristicas.find(
      (c) => c.titulo === 'No incluye'
    ),
  };

  return (
    <div className="service-card hyperglass rounded-[2.5rem] overflow-hidden reveal">
      <div className="p-8 md:p-14">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
          <div>
            <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white/60 rounded-lg border border-white">
              Solución 01
            </span>
            <h3 className="text-4xl font-outfit font-bold mt-4 text-slate-900">
              {service.titulo.split('·')[1].trim()}
            </h3>
            <p className="text-blue-600 font-medium mt-2">
              {service.bullet_principal}
            </p>
            {(service as any).porque_es_importante && (
              <div className="mt-6 p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                <h5 className="font-bold text-sm text-blue-800 mb-2">¿Por qué es importante?</h5>
                <p className="text-sm text-slate-600 leading-relaxed">{(service as any).porque_es_importante}</p>
              </div>
            )}
          </div>
          <div className="text-left md:text-right bg-white/60 p-5 rounded-2xl border border-white shadow-sm">
            <span className="text-slate-400 text-[10px] block uppercase font-bold tracking-widest mb-1">
              Inversión Inicial
            </span>
            <span className="text-3xl font-bold font-mono text-slate-900">
              COP{' '}
              <span>
                {service.precio_sin_iva.toLocaleString('es-CO')}
              </span>
              <span className="text-xs font-normal text-slate-400 ml-1">
                (Neto)
              </span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.enfoque && (
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase font-bold tracking-widest text-slate-400 border-b border-slate-200/50 pb-3">
                {features.enfoque.titulo}
              </h4>
              <ul className="space-y-3 text-sm text-slate-600">
                {features.enfoque.items.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>{' '}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {features.incluye && (
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase font-bold tracking-widest text-slate-400 border-b border-slate-200/50 pb-3">
                {features.incluye.titulo}
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                {features.incluye.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2 font-bold">✓</span>{' '}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {features.valoresAgregados && (
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase font-bold tracking-widest text-slate-400 border-b border-slate-200/50 pb-3">
                {features.valoresAgregados.titulo}
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                {features.valoresAgregados.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2 font-bold">✓</span>{' '}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {features.noIncluye && (
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase font-bold tracking-widest text-slate-400 border-b border-slate-200/50 pb-3">
                {features.noIncluye.titulo}
              </h4>
              <ul className="space-y-2 text-sm text-slate-400 italic">
                {features.noIncluye.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const AiService = ({ proposalData }: { proposalData: ProposalData }) => {
  const service = proposalData.bloques.find((b) => b.id === 'servicio_auto') as any;
  if (!service || service.tipo !== 'card') return null;

  const featureCards = service.feature_cards || [];

  const techIncludes = service.caracteristicas.find(
    (c: any) => c.titulo === 'Incluye técnicamente' || c.titulo === 'Entregables'
  );

  const noIncluye = service.caracteristicas.find(
    (c: any) => c.titulo === 'No incluye'
  );

  return (
    <div className="service-card hyperglass rounded-[2.5rem] overflow-hidden relative reveal">
      <div className="p-8 md:p-14">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
          <div>
            <span className="text-blue-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-blue-50 rounded-lg border border-blue-100">
              Solución 02
            </span>
            <h3 className="text-4xl font-outfit font-bold mt-4 text-slate-900">
              {service.titulo.split('·')[1].trim()}
            </h3>
            <p className="text-blue-600 font-medium mt-2">
              {service.bullet_principal}
            </p>
             {service.porque_es_importante && (
              <div className="mt-6 p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                <h5 className="font-bold text-sm text-blue-800 mb-2">¿Por qué es importante?</h5>
                <p className="text-sm text-slate-600 leading-relaxed">{service.porque_es_importante}</p>
              </div>
            )}
          </div>
          <div className="text-left md:text-right bg-blue-600 p-5 rounded-2xl shadow-xl shadow-blue-200">
            <span className="text-blue-100 text-[10px] block uppercase font-bold tracking-widest mb-1">
              Inversión Implementación
            </span>
            <span className="text-3xl font-bold font-mono text-white">
              COP{' '}
              <span>
                {service.precio_sin_iva.toLocaleString('es-CO')}
              </span>
              <span className="text-xs font-normal text-blue-200 ml-1">
                (Neto)
              </span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featureCards.map((feature: any, index: number) => {
            const Icon = iconMap[feature.icon];
            if (!Icon) return null;
            return (
              <div
                key={index}
                className="p-6 bg-white/40 rounded-3xl border border-white/60 hover:bg-white transition-all shadow-sm"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                  <Icon className="w-5 h-5" />
                </div>
                <h5 className="font-bold text-slate-900 text-sm mb-2">
                  {feature.title}
                </h5>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {techIncludes && (
            <div className="bg-slate-900/5 p-6 rounded-3xl border border-white/40 backdrop-blur-sm">
              <h4 className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-5">
                {techIncludes?.titulo}
              </h4>
              <div className="flex flex-wrap gap-3">
                {techIncludes?.items.map((item: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-white/80 rounded-lg text-[11px] font-semibold text-slate-700 shadow-sm border border-slate-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {noIncluye && (
            <div className="bg-red-50/20 p-6 rounded-3xl border border-white/40 backdrop-blur-sm">
              <h4 className="text-[10px] uppercase font-bold tracking-widest text-red-400 mb-5">
                {noIncluye?.titulo}
              </h4>
              <ul className="space-y-2 text-[11px] text-slate-400 italic">
                {noIncluye?.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-red-300">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Services({ proposalData }: { proposalData: ProposalData }) {
  const webServiceData = proposalData.bloques.find(b => b.id === 'servicio_web');
  const aiServiceData = proposalData.bloques.find(b => b.id === 'servicio_auto');

  return (
    <>
      <div className="space-y-24">
        {webServiceData && <WebService proposalData={proposalData} />}
        {aiServiceData && <AiService proposalData={proposalData} />}
      </div>
    </>
  );
}
