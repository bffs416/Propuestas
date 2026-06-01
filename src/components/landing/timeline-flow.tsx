'use client';

import { useState, useEffect } from 'react';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Cpu,
  User,
  Stethoscope,
  Activity,
  Layers,
  Users,
  Star,
  ChevronDown,
  ChevronUp,
  Clock,
} from 'lucide-react';

/* ── Data ────────────────────────────────────────────── */

interface Etapa {
  id: number;
  nombre: string;
  icono: string;
  color: string;
  quien_actua: string;
  tipo_actor: 'paciente' | 'ia' | 'sistema' | 'dr';
  descripcion_corta: string;
  descripcion_larga: string;
  modulo_relacionado: string;
  que_pasa_por_detras: string;
  resultado: string;
}

const etapas: Etapa[] = [
  { id:1, nombre:"Descubre",  icono:"🔍",  color:"#3b82f6", quien_actua:"Paciente", tipo_actor:"paciente", descripcion_corta:"Busca en Google y encuentra la clínica", descripcion_larga:"El paciente busca en Google: 'cirujano plástico rinoplastia'. La web del Dr. Muñoz aparece en los primeros resultados gracias al SEO. Ve el hero, los servicios, la galería de resultados, los testimonios. Le da confianza.", modulo_relacionado:"Módulo 1 — Página Web Profesional", que_pasa_por_detras:"Google indexó correctamente la web. El SEO técnico está optimizado. La galería de before/after está activa. El visitante es anónimo aún.", resultado:"Visitante anónimo llega a la web" },
  { id:2, nombre:"Contacta",  icono:"💬",  color:"#10b981", quien_actua:"Paciente + Sistema", tipo_actor:"paciente", descripcion_corta:"Hace clic en WhatsApp o llena el formulario", descripcion_larga:"El paciente hace clic en el botón flotante de WhatsApp o llena el formulario de contacto. Automáticamente, el sistema registra sus datos en el CRM como LEAD con etiquetas: origen (web/google/instagram), interés (procedimiento específico), fecha y hora del contacto.", modulo_relacionado:"Módulo 1 (Web) + Módulo 11 (Pipeline de Leads)", que_pasa_por_detras:"El CRM crea un registro de LEAD. Asigna etiquetas automáticas según la página de donde vino. Si son las 11pm de un domingo, programa el seguimiento para el lunes 9am.", resultado:"Lead registrado en el CRM con etiquetas" },
  { id:3, nombre:"IA Responde", icono:"🤖", color:"#6366f1", quien_actua:"IA", tipo_actor:"ia", descripcion_corta:"La IA recepcionista responde al instante 24/7", descripcion_larga:"La IA toma el control de la conversación. Entiende lenguaje natural en español. Consulta la agenda REAL del CRM vía API para ver horarios disponibles. Responde preguntas de precios, ubicación, preparación. Si no puede resolver algo, escala automáticamente a la recepcionista humana.", modulo_relacionado:"Módulo 3 — WhatsApp con IA", que_pasa_por_detras:"El motor de IA procesa el mensaje en lenguaje natural, consulta la base de datos del CRM en tiempo real (agenda, procedimientos, precios) y genera una respuesta personalizada. Todo en menos de 2 segundos.", resultado:"Paciente recibe respuesta inmediata con horarios reales disponibles" },
  { id:4, nombre:"Agenda",    icono:"📅",  color:"#f59e0b", quien_actua:"IA + CRM", tipo_actor:"ia", descripcion_corta:"El paciente elige horario y la IA agenda automáticamente", descripcion_larga:"El paciente dice 'el miércoles a las 3:30pm'. La IA confirma disponibilidad, registra la cita en el CRM, asigna paciente + procedimiento + duración. Envía confirmación por WhatsApp con todos los datos. Si es paciente nuevo, lo crea automáticamente en la base de datos.", modulo_relacionado:"Módulo 3 (WhatsApp IA) + Módulo 2 (CRM)", que_pasa_por_detras:"API del CRM recibe la solicitud: crea/actualiza paciente, crea cita con estado 'pendiente', asigna color según tipo de procedimiento. La agenda se actualiza en tiempo real. Carolina y el Dr. ven la nueva cita instantáneamente si tienen el CRM abierto.", resultado:"Cita agendada ✅ Confirmación enviada ✅ Agenda actualizada ✅" },
  { id:5, nombre:"Recordatorio", icono:"🔔", color:"#ec4899", quien_actua:"Sistema Automático", tipo_actor:"sistema", descripcion_corta:"24h antes y 2h antes: recordatorio automático por WhatsApp", descripcion_larga:"El sistema envía automáticamente: recordatorio 24 horas antes ('Mañana tienes cita con el Dr. Muñoz a las 3:30pm') y un segundo recordatorio 2 horas antes. El paciente puede confirmar o cancelar. Si confirma, la cita se marca como 'Confirmada ✅'. Si cancela, la IA ofrece reprogramar inmediatamente.", modulo_relacionado:"Módulo 3 (WhatsApp IA)", que_pasa_por_detras:"Cron job diario a las 8am: escanea todas las citas del día siguiente. Por cada una, programa un mensaje. Los mensajes se envían escalonados. Si el paciente no responde al primer recordatorio, se envía el segundo igual.", resultado:"Tasa de no-show se reduce ~30%. El espacio del que cancela se reasigna automáticamente." },
  { id:6, nombre:"Consulta",  icono:"🏥",  color:"#ef4444", quien_actua:"Dr. Muñoz + Staff", tipo_actor:"dr", descripcion_corta:"Todo digital: historia clínica, fotos, recetas a 2 clics", descripcion_larga:"El Dr. ya revisó la ficha de la paciente desde su celular antes de entrar a consulta. Durante la consulta: ve el historial médico completo, las fotos de evolución, las recetas anteriores. Dicta notas y Carolina las registra en el CRM. Si es post-operatorio, compara fotos antes/después en pantalla. Genera receta electrónica al instante.", modulo_relacionado:"Módulo 2 (CRM) + Módulo 15 (PWA)", que_pasa_por_detras:"La ficha clínica carga en <1 segundo desde PostgreSQL. Las fotos se descifran y sirven con URL temporal de 15 minutos. Cada acceso queda registrado en el log de auditoría.", resultado:"Consulta eficiente. Paciente percibe profesionalismo. El Dr. no busca papeles." },
  { id:7, nombre:"Firma",     icono:"✍️",  color:"#8b5cf6", quien_actua:"Paciente", tipo_actor:"paciente", descripcion_corta:"Consentimiento informado firmado desde el celular con validez legal", descripcion_larga:"Antes del procedimiento, el staff genera el consentimiento informado: selecciona paciente + procedimiento → el sistema genera PDF automático con: nombre, cédula, procedimiento detallado, riesgos, cuidados, costos. Se envía por WhatsApp. La paciente lo lee con calma desde su casa, firma con el dedo en la pantalla. El documento firmado se archiva automáticamente en su expediente con trazabilidad completa.", modulo_relacionado:"Módulo 5 — Firma Electrónica", que_pasa_por_detras:"El sistema genera un PDF desde una plantilla dinámica con los datos del paciente y procedimiento. Se envía por mensajería y el paciente firma digitalmente desde su dispositivo. El documento firmado se cifra y archiva en el expediente. Cada acción queda registrada: Pendiente → Enviado → Visto → Firmado → Archivado.", resultado:"Documento con validez legal (Ley 527). Trazabilidad completa. Cero papel." },
  { id:8, nombre:"Post-Op",   icono:"💊",  color:"#14b8a6", quien_actua:"Sistema Automático", tipo_actor:"sistema", descripcion_corta:"Recomendaciones automáticas por WhatsApp según el procedimiento", descripcion_larga:"Al salir de la clínica, el sistema activa una secuencia de mensajes personalizados según el procedimiento realizado. Ejemplo (ácido hialurónico en labios): Día 0 (7pm) — cuidados inmediatos. Día 1 — cómo manejar la inflamación. Día 3 — puedo usar maquillaje. Día 7 — encuesta de satisfacción y oferta de control gratuito. Todo automático. Sin que nadie en la clínica mueva un dedo.", modulo_relacionado:"Módulo 6 — Comunicación Automatizada", que_pasa_por_detras:"Al marcar la cita como 'completada', el sistema busca la plantilla de mensajes para ese tipo de procedimiento. Programa los envíos para las fechas y horas correctas. Cada mensaje se personaliza con el nombre de la paciente.", resultado:"Paciente se siente cuidada. Menos complicaciones. Menos llamadas con preguntas." },
  { id:9, nombre:"Encuesta",  icono:"⭐",  color:"#eab308", quien_actua:"Sistema Automático", tipo_actor:"sistema", descripcion_corta:"Encuesta NPS automática post-consulta", descripcion_larga:"7 días después del procedimiento, el sistema envía: 'En una escala del 1 al 10, ¿qué tan satisfecho estás con tu experiencia?' Si responde 9-10: se activa el programa de referidos. Si responde 7-8: seguimiento para mejorar. Si responde ≤6: ALERTA inmediata al Dr. para intervenir personalmente.", modulo_relacionado:"Módulo 7 — Tracking de Experiencia", que_pasa_por_detras:"La respuesta del paciente se registra en el CRM como métrica NPS. Si NPS ≥9, se envía automáticamente info del programa de referidos. Si NPS ≤6, se genera alerta prioritaria en el dashboard del Dr. y se envía notificación push a su celular.", resultado:"El Dr. sabe exactamente qué tan satisfechos están sus pacientes. Los problemas se detectan temprano." },
  { id:10, nombre:"Reactiva", icono:"🔄", color:"#06b6d4", quien_actua:"Sistema Automático", tipo_actor:"sistema", descripcion_corta:"Recordatorios cíclicos para tratamientos que requieren renovación", descripcion_larga:"El sistema calcula automáticamente cuándo cada paciente debe volver según el procedimiento: toxina botulínica cada 4-6 meses, ácido hialurónico cada 12-18 meses, controles post-cirugía al mes/3 meses/6 meses/1 año. Envía mensaje automático: 'Andrea, han pasado 4 meses desde tu toxina. ¿Quieres renovar?' Si responde SÍ, la IA agenda automáticamente.", modulo_relacionado:"Módulo 14 — Fidelización y Reactivación", que_pasa_por_detras:"Cron job diario escanea pacientes con procedimientos que requieren renovación. Cruza la fecha del último procedimiento con la ventana de reactivación. Genera mensaje personalizado. Si el paciente no responde en 48h, se programa un segundo intento en 2 semanas.", resultado:"Pacientes que vuelven solos. $48M/año estimados solo en renovaciones de toxina (100 pacientes × 60% de retorno × $800.000)." },
  { id:11, nombre:"Refiere",  icono:"👥",  color:"#22c55e", quien_actua:"Paciente + Sistema", tipo_actor:"paciente", descripcion_corta:"Paciente feliz refiere amigas. El sistema rastrea y recompensa.", descripcion_larga:"Una paciente satisfecha (NPS 9-10) comparte su experiencia con amigas. Cuando una amiga contacta a la clínica y menciona 'vengo referida por Laura', la IA lo registra en el CRM: 'Lead referido por Laura Gómez'. Cuando la amiga se opera, el sistema automáticamente: (1) le notifica a Laura que ganó su descuento, (2) aplica el descuento a su próxima cita, (3) actualiza el ranking de referidores en el dashboard del Dr.", modulo_relacionado:"Módulo 14 (Fidelización) + Módulo 3 (WhatsApp IA)", que_pasa_por_detras:"El CRM mantiene un grafo de referencias: quién refirió a quién, fecha, estado (pendiente/operado). Cuando un referido completa un procedimiento, se dispara el trigger de recompensa. El dashboard muestra top referidores, ingresos por referidos y tasa de conversión de referidos vs otros canales.", resultado:"El canal de adquisición más barato y más efectivo, completamente automatizado. Pacientes felices se convierten en vendedores de la clínica." },
];

const actores = {
  todos:   { label: "Viaje Completo", color: "#64748b", icon: Layers },
  paciente:{ label: "Paciente",       color: "#10b981", stages: [1,2,7,11], icon: User },
  ia:      { label: "IA",             color: "#6366f1", stages: [3,4],       icon: Cpu },
  sistema: { label: "Sistema Autom.", color: "#06b6d4", stages: [5,8,9,10],  icon: Activity },
  dr:      { label: "Dr. & Staff",   color: "#ef4444", stages: [6],         icon: Stethoscope },
};

type ActorKey = keyof typeof actores;

/* ── Component ───────────────────────────────────────── */

export default function TimelineFlow() {
  const [mounted, setMounted] = useState(false);
  const [selectedActor, setSelectedActor] = useState<ActorKey>('todos');
  const [activeStep, setActiveStep] = useState<number>(1);
  const [expandedUnderTheHood, setExpandedUnderTheHood] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;

  const filteredStages = etapas.filter(e => {
    if (selectedActor === 'todos') return true;
    return actores[selectedActor].stages.includes(e.id);
  });

  const current = etapas.find(e => e.id === activeStep) ?? etapas[0];

  /* ----- layout helpers ----- */
  const stageIndex = filteredStages.findIndex(e => e.id === activeStep);
  const progress = filteredStages.length > 1
    ? (stageIndex / (filteredStages.length - 1)) * 100
    : 0;

  return (
    <section className="py-16 md:py-24 px-4 md:px-8">

      {/* ── Header ── */}
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <div className="flex justify-center mb-5">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] uppercase font-bold tracking-[0.25em] border bg-blue-50/60 text-blue-700 border-blue-200/80">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Línea de Tiempo del Sistema
          </span>
        </div>

        <h3 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4 tracking-tight text-slate-900">
          El Viaje del Paciente en 11 Etapas
        </h3>

        <p className="max-w-2xl mx-auto text-slate-500 text-sm md:text-base font-light leading-relaxed">
          Desde que descubre la clínica hasta que la recomienda.
          Cada etapa es un nodo en la línea de tiempo — haz clic para ver los detalles técnicos y humanos que ocurren por detrás.
        </p>
      </div>

      {/* ── Actor filter pills ── */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-slate-100/70 border border-slate-200/80 backdrop-blur-sm">
          {(Object.keys(actores) as ActorKey[]).map((key) => {
            const a = actores[key];
            const sel = selectedActor === key;
            const Icon = a.icon;
            return (
              <button key={key} onClick={() => { setSelectedActor(key); setActiveStep('stages' in a ? a.stages[0] : 1); }}
                className="flex-1 min-w-[120px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold transition-all duration-300 border"
                style={sel
                  ? { background: a.color, color: '#fff', borderColor: a.color, boxShadow: `0 4px 15px ${a.color}30` }
                  : { background: 'transparent', color: '#64748b', borderColor: 'transparent' }
                }>
                <Icon className="w-4 h-4" />
                {a.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Timeline ── */}
      <div className="max-w-6xl mx-auto">
        {/* Horizontal scrollable timeline */}
        <div className="relative mb-10">
          {/* Progress bar */}
          <div className="absolute top-5 left-0 right-0 h-[3px] bg-slate-200 rounded-full" />

          {/* Active progress fill */}
          <div
            className="absolute top-5 left-0 h-[3px] rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%`, background: current.color }}
          />

          {/* Nodes */}
          <div className="flex gap-0 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent"
            style={{ scrollbarWidth: 'thin' }}>
            {filteredStages.map((etapa, idx) => {
              const isActive = activeStep === etapa.id;
              return (
                <button key={etapa.id} onClick={() => setActiveStep(etapa.id)}
                  className="flex flex-col items-center shrink-0 relative min-w-[90px] md:min-w-[110px] group cursor-pointer">

                  {/* Connector line (except last) */}
                  {idx < filteredStages.length - 1 && (
                    <div className="absolute top-5 left-[52%] w-full h-[3px] bg-slate-200 -z-10" />
                  )}

                  {/* Dot */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all duration-300 border-2 z-10
                    ${isActive ? 'scale-110 shadow-lg' : 'group-hover:scale-105'}
                  `}
                    style={{
                      background: isActive ? `${etapa.color}15` : '#fff',
                      borderColor: isActive ? etapa.color : '#e2e8f0',
                      boxShadow: isActive ? `0 0 0 4px ${etapa.color}20` : 'none',
                    }}>
                    {etapa.icono}
                  </div>

                  {/* Label */}
                  <span className="mt-2 text-[10px] font-extrabold uppercase tracking-wider text-center leading-tight transition-colors duration-300"
                    style={{ color: isActive ? etapa.color : '#94a3b8' }}>
                    {etapa.nombre}
                  </span>

                  {/* Mini tag */}
                  <span className={`text-[7px] uppercase font-bold px-1.5 py-0.5 rounded mt-0.5 transition-all duration-300
                    ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}
                  `}
                    style={{ background: `${etapa.color}15`, color: etapa.color }}>
                    {etapa.quien_actua.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Detail card ── */}
        <div
          className="rounded-[2rem] border p-6 md:p-10 transition-all duration-500 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
            borderColor: `${current.color}30`,
            boxShadow: `0 10px 40px -15px ${current.color}40`,
          }}
        >
          {/* Large watermark */}
          <span className="absolute -bottom-8 -right-8 text-[140px] font-bold opacity-[0.04] select-none pointer-events-none">
            {current.icono}
          </span>

          <div className="relative z-10">
            {/* Header row */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: `${current.color}12` }}>
                  {current.icono}
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest block"
                    style={{ color: current.color }}>
                    Etapa {String(current.id).padStart(2, '0')} · {current.quien_actua}
                  </span>
                  <h4 className="text-xl md:text-2xl font-bold text-slate-900">
                    {current.nombre}
                  </h4>
                </div>
              </div>

              <span className="text-[10px] font-bold tracking-wide uppercase px-3 py-1.5 rounded-lg bg-slate-100 text-slate-500 border border-slate-200/60 whitespace-nowrap">
                {current.modulo_relacionado}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6 max-w-3xl">
              {current.descripcion_larga}
            </p>

            {/* Under the hood — collapsible */}
            <div className="mb-6">
              <button onClick={() => setExpandedUnderTheHood(!expandedUnderTheHood)}
                className="flex items-center gap-2 text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-2 hover:text-slate-600 transition-colors">
                <Cpu className="w-3.5 h-3.5" />
                Bajo el Capó (Ingeniería Técnica)
                {expandedUnderTheHood ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${expandedUnderTheHood ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {current.que_pasa_por_detras}
                  </p>
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="pt-5 border-t border-slate-200 flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{ background: `${current.color}15`, color: current.color }}>
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400 block">
                  Resultado de la Etapa
                </span>
                <p className="text-sm font-semibold text-slate-800">
                  {current.resultado}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
