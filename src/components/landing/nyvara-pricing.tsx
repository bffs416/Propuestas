'use client';

import { useState } from 'react';
import { 
  Check, Sparkles, Gift, Video, Globe, MapPin, 
  Layers, Info, ArrowRight, Compass
} from 'lucide-react';
import ProjectDialog from './project-dialog';

export default function NyvaraPricing() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleOpenDialog = (planName: string) => {
    setSelectedPlan(planName);
    setIsDialogOpen(true);
  };

  return (
    <section className="my-20 space-y-10 max-w-6xl mx-auto px-2" id="planes-inversion">
      {/* Encabezado Principal */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200">
          <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
          <span className="text-xs font-black text-blue-700 uppercase tracking-widest font-outfit">
            Resumen de Inversión Nyvara
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Desglose de Servicios y Valores
        </h2>
        <p className="text-slate-600 text-xs md:text-sm">
          Transparencia directa en el desarrollo web, producción audiovisual y beneficios 360°.
        </p>
      </div>

      {/* RECUADROS DE PRECIOS PRINCIPALES (PÁGINA WEB, FOTOGRAFÍA & VIDEO 4K) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        
        {/* TARJETA 1: PÁGINA WEB BÁSICA + RECORRIDO 360° OBSEQUIO */}
        <div className="bg-gradient-to-b from-sky-50/90 via-white to-white rounded-3xl border-2 border-sky-500 p-6 shadow-2xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-yellow-400 text-slate-950 text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
            <Gift className="w-3 h-3" /> Obsequio 360°
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-black text-sky-700 bg-sky-100 px-2.5 py-1 rounded-full uppercase tracking-wider inline-block">
                Inversión Inicial Web
              </span>
              <h3 className="text-xl font-black text-slate-900 pt-1">
                Página Web + Recorrido 360°
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Landing page principal para C.C. Plaza 80 con sección de asociados, noticias y recorrido 360° gratis.
              </p>
            </div>

            <div className="py-2.5 border-y border-sky-100">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black font-mono text-sky-900">$850.000</span>
                <span className="text-xs font-bold text-sky-700">COP + IVA</span>
              </div>
              <span className="text-[10px] text-sky-600 font-semibold block mt-0.5">Inversión Inicial</span>
            </div>

            <div className="p-3 bg-sky-100/50 rounded-xl border border-sky-200/60 text-xs text-sky-950">
              <span className="font-bold block text-[11px] mb-0.5 text-sky-900">¿Por qué es importante?</span>
              <p className="text-[11px] leading-snug text-slate-700">
                Visibiliza al Centro Comercial Plaza 80 como una opción comercial cercana, cómoda y con amplios beneficios frente a las grandes aglomeraciones del sector Titán.
              </p>
            </div>

            <ul className="space-y-2 text-xs text-slate-700 font-medium">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span><strong>Landing Page Principal</strong> + Sección <strong>Asociados/Locales</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>Sección de <strong>Noticias & Beneficios de Parqueadero</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-emerald-700">Recorrido Virtual 360° de Obsequio</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>Formulario y botón directo a WhatsApp</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => handleOpenDialog('Página Web + Recorrido 360 ($850.000 + IVA)')}
            className="mt-6 w-full py-3 px-4 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-sky-500/25 flex items-center justify-center gap-2"
          >
            <span>Contratar Web ($850.000)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* TARJETA 2: FOTOGRAFÍAS PROFESIONALES (OPCIONAL) */}
        <div className="bg-gradient-to-b from-amber-50/90 via-white to-white rounded-3xl border-2 border-amber-400 p-6 shadow-2xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-amber-400 text-slate-950 text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Opcional
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-black text-amber-800 bg-amber-100 px-2.5 py-1 rounded-full uppercase tracking-wider inline-block">
                Fotografía Web
              </span>
              <h3 className="text-xl font-black text-slate-900 pt-1">
                10 Fotografías para la Web
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                En caso de que no cuenten con fotografías propias para el Centro Comercial Plaza 80.
              </p>
            </div>

            <div className="py-2.5 border-y border-amber-100">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black font-mono text-amber-950">$150.000</span>
                <span className="text-xs font-bold text-amber-800">COP + IVA</span>
              </div>
              <span className="text-[10px] text-amber-700 font-semibold block mt-0.5">Paquete de 10 fotos en alta resolución</span>
            </div>

            <div className="p-3 bg-amber-100/60 rounded-xl border border-amber-200/80 text-xs text-amber-950">
              <span className="font-bold block text-[11px] mb-0.5 text-amber-900">¿Por qué es importante?</span>
              <p className="text-[11px] leading-snug text-slate-700">
                Asegura imágenes atractivas e iluminadas para alimentar la landing page, el directorio de locales y las noticias del centro comercial.
              </p>
            </div>

            <ul className="space-y-2 text-xs text-slate-700 font-medium">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>10 Fotografías Profesionales</strong> de instalaciones y fachadas</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>Edición y retoque fotográfico básico incluido</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>Formato optimizado para rápida carga en la web</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => handleOpenDialog('10 Fotografías Web ($150.000 + IVA)')}
            className="mt-6 w-full py-3 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all shadow-md shadow-amber-500/25 flex items-center justify-center gap-2"
          >
            <span>Agregar Fotografías ($150.000)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* TARJETA 3: PRODUCCIÓN DE VIDEO 4K */}
        <div className="bg-slate-900 text-white rounded-3xl border border-slate-800 p-6 shadow-2xl flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-black text-purple-400 bg-purple-950/80 border border-purple-800 px-2.5 py-1 rounded-full uppercase tracking-wider inline-block">
                Producción Audiovisual 4K
              </span>
              <h3 className="text-xl font-black text-white pt-1">
                Video Corporativo 4K
              </h3>
              <p className="text-xs text-slate-400 font-medium">
                Producción cinematográfica con tomas aéreas de dron y cámara 360°.
              </p>
            </div>

            <div className="py-2.5 border-y border-slate-800">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black font-mono text-purple-200">$250.000</span>
                <span className="text-xs font-bold text-purple-300">COP + IVA / video</span>
              </div>
              <span className="text-[10px] text-slate-400 font-semibold block mt-0.5">Por cada producción de video</span>
            </div>

            <ul className="space-y-2 text-xs text-slate-300 font-medium pt-1">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Duración: <strong className="text-purple-300">Máximo 1:30 min</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Tomas cinematográficas con <strong>Dron 4K</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Tomas inmersivas con <strong>Cámara 360°</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Música licenciada y edición profesional</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => handleOpenDialog('Video Corporativo 4K ($250.000 + IVA)')}
            className="mt-6 w-full py-3 px-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-purple-600/25 flex items-center justify-center gap-2"
          >
            <span>Contratar Video 4K ($250.000)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* NOTA RELEVANTE PARA LOCALES COMERCIALES & FORMA DE PAGO */}
      <div className="space-y-4">
        <div className="bg-amber-50/90 border border-amber-200/90 rounded-3xl p-6 md:p-7 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 font-bold flex items-center justify-center shrink-0 shadow-md">
              <Info className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-black uppercase tracking-widest text-amber-900 bg-amber-200/80 px-2.5 py-0.5 rounded-full">
                  Nota Obligatoria para Locales Comerciales
                </span>
              </div>
              <h4 className="text-base font-black text-amber-950">
                Montaje Técnico de Información en 360° por Local ($80.000 COP + IVA)
              </h4>
              <p className="text-xs text-amber-900 leading-relaxed max-w-3xl">
                El valor de <strong className="text-amber-950">$80.000 COP + IVA</strong> por local corresponde <strong>únicamente al montaje técnico y vinculación del punto interactivo</strong> dentro del Recorrido Virtual 360°.
              </p>
              <div className="mt-2 bg-amber-100/90 border border-amber-300 p-2.5 rounded-xl text-xs text-amber-950 font-bold space-y-0.5">
                <p>⚠️ IMPORTANTE — NO INCLUYE PRODUCCIÓN DE MATERIAL:</p>
                <p className="font-medium text-amber-900">
                  Este monto <strong>NO incluye</strong> la realización de videos, toma de fotografías ni diseño de documentos. Cada local comercial <strong>debe suministrar la información completamente lista</strong> (su video, foto, PDF, imagen o enlace) para su respectiva publicación.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-200/70 border border-amber-300/80 px-4 py-2 rounded-xl text-center shrink-0 self-stretch md:self-auto flex items-center justify-center">
            <span className="text-sm font-black font-mono text-amber-950">$80.000 COP + IVA</span>
          </div>
        </div>

        {/* FORMA DE PAGO BANNER */}
        <div className="bg-blue-50/80 border border-blue-200/80 p-4 rounded-2xl flex items-center justify-between gap-4 text-xs font-medium text-blue-900">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
            <span><strong>Forma de Pago:</strong> 50% de anticipo adelantado al inicio y 50% restante contra entrega final del proyecto.</span>
          </div>
          <span className="font-mono font-bold bg-white px-3 py-1 rounded-xl border border-blue-200 text-blue-800 shadow-sm shrink-0">
            50% Inicio / 50% Entrega
          </span>
        </div>
      </div>

      <ProjectDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
}
