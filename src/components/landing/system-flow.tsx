'use client';

import { useState } from 'react';
import {
  Search,
  MessageCircle,
  Bot,
  Calendar,
  Bell,
  Stethoscope,
  PenTool,
  Pill,
  Star,
  RefreshCw,
  Users,
  ChevronRight,
  Sparkles,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Cpu,
  User,
  Activity,
  Layers,
} from 'lucide-react';

interface Etapa {
  id: number;
  nombre: string;
  icono: string;
  iconName: any;
  color: string;
  quien_actua: string;
  tipo_actor: 'paciente' | 'ia' | 'sistema' | 'dr';
  descripcion_corta: string;
  descripcion_larga: string;
  modulo_relacionado: string;
  que_pasa_por_detras: string;
  resultado: string;
}

const etapasData: Etapa[] = [
  {
    id: 1,
    nombre: "Descubre",
    icono: "🔍",
    iconName: Search,
    color: "#3b82f6",
    quien_actua: "Paciente",
    tipo_actor: "paciente",
    descripcion_corta: "Busca en Google y encuentra la clínica",
    descripcion_larga: "El paciente busca en Google: 'cirujano plástico rinoplastia'. La web del Dr. Muñoz aparece en los primeros resultados gracias al SEO. Ve el hero, los servicios, la galería de resultados, los testimonios. Le da confianza.",
    modulo_relacionado: "Módulo 1 — Página Web Profesional",
    que_pasa_por_detras: "Google indexó correctamente la web. El SEO técnico está optimizado. La galería de before/after está activa. El visitante es anónimo aún.",
    resultado: "Visitante anónimo llega a la web"
  },
  {
    id: 2,
    nombre: "Contacta",
    icono: "💬",
    iconName: MessageCircle,
    color: "#10b981",
    quien_actua: "Paciente + Sistema",
    tipo_actor: "paciente",
    descripcion_corta: "Hace clic en WhatsApp o llena el formulario",
    descripcion_larga: "El paciente hace clic en el botón flotante de WhatsApp o llena el formulario de contacto. Automáticamente, el sistema registra sus datos en el CRM como LEAD con etiquetas: origen (web/google/instagram), interés (procedimiento específico), fecha y hora del contacto.",
    modulo_relacionado: "Módulo 1 (Web) + Módulo 11 (Pipeline de Leads)",
    que_pasa_por_detras: "El CRM crea un registro de LEAD. Asigna etiquetas automáticas según la página de donde vino. Si son las 11pm de un domingo, programa el seguimiento para el lunes 9am.",
    resultado: "Lead registrado en el CRM con etiquetas"
  },
  {
    id: 3,
    nombre: "IA Responde",
    icono: "🤖",
    iconName: Bot,
    color: "#6366f1",
    quien_actua: "IA (DeepSeek)",
    tipo_actor: "ia",
    descripcion_corta: "La IA recepcionista responde al instante 24/7",
    descripcion_larga: "La IA toma el control de la conversación. Entiende lenguaje natural en español. Consulta la agenda REAL del CRM vía API para ver horarios disponibles. Responde preguntas de precios, ubicación, preparación. Si no puede resolver algo, escala automáticamente a la recepcionista humana.",
    modulo_relacionado: "Módulo 3 — WhatsApp con IA",
    que_pasa_por_detras: "DeepSeek-V3 procesa el mensaje. n8n ejecuta el workflow: recibe mensaje → consulta CRM (agenda, paciente, procedimientos) → genera respuesta → envía por Evolution API. Latencia total: <2 segundos.",
    resultado: "Paciente recibe respuesta inmediata con horarios reales disponibles"
  },
  {
    id: 4,
    nombre: "Agenda",
    icono: "📅",
    iconName: Calendar,
    color: "#f59e0b",
    quien_actua: "IA + CRM",
    tipo_actor: "ia",
    descripcion_corta: "El paciente elige horario y la IA agenda automáticamente",
    descripcion_larga: "El paciente dice 'el miércoles a las 3:30pm'. La IA confirma disponibilidad, registra la cita en el CRM, asigna paciente + procedimiento + duración. Envía confirmación por WhatsApp con todos los datos. Si es paciente nuevo, lo crea automáticamente en la base de datos.",
    modulo_relacionado: "Módulo 3 (WhatsApp IA) + Módulo 2 (CRM)",
    que_pasa_por_detras: "API del CRM recibe la solicitud: crea/actualiza paciente, crea cita con estado 'pendiente', asigna color según tipo de procedimiento. La agenda se actualiza en tiempo real. Carolina y el Dr. ven la nueva cita instantáneamente si tienen el CRM abierto.",
    resultado: "Cita agendada ✅ Confirmación enviada ✅ Agenda actualizada ✅"
  },
  {
    id: 5,
    nombre: "Recordatorio",
    icono: "🔔",
    iconName: Bell,
    color: "#ec4899",
    quien_actua: "Sistema Automático",
    tipo_actor: "sistema",
    descripcion_corta: "24h antes y 2h antes: recordatorio automático",
    descripcion_larga: "El sistema envía automáticamente: recordatorio 24 horas antes ('Mañana tienes cita con el Dr. Muñoz a las 3:30pm') y un segundo recordatorio 2 horas antes. El paciente puede confirmar o cancelar. Si confirma, la cita se marca como 'Confirmada ✅'. Si cancela, la IA ofrece reprogramar inmediatamente.",
    modulo_relacionado: "Módulo 3 (WhatsApp IA)",
    que_pasa_por_detras: "Cron job diario a las 8am: escanea todas las citas del día siguiente. Por cada una, programa un mensaje. Los mensajes se envían escalonados. Si el paciente no responde al primer recordatorio, se envía el segundo igual.",
    resultado: "Tasa de no-show se reduce ~30%. El espacio del que cancela se reasigna automáticamente."
  },
  {
    id: 6,
    nombre: "Consulta",
    icono: "🏥",
    iconName: Stethoscope,
    color: "#ef4444",
    quien_actua: "Dr. Muñoz + Staff",
    tipo_actor: "dr",
    descripcion_corta: "Todo digital: historia clínica, fotos, recetas a 2 clics",
    descripcion_larga: "El Dr. ya revisó la ficha de la paciente desde su celular antes de entrar a consulta. Durante la consulta: ve el historial médico completo, las fotos de evolución, las recetas anteriores. Dicta notas y Carolina las registra en el CRM. Si es post-operatorio, compara fotos antes/después en pantalla. Genera receta electrónica al instante.",
    modulo_relacionado: "Módulo 2 (CRM) + Módulo 15 (PWA)",
    que_pasa_por_detras: "La ficha clínica carga en <1 segundo desde PostgreSQL. Las fotos se descifran y sirven con URL temporal de 15 minutos. Cada acceso queda registrado en el log de auditoría.",
    resultado: "Consulta eficiente. Paciente percibe profesionalismo. El Dr. no busca papeles."
  },
  {
    id: 7,
    nombre: "Firma",
    icono: "✍️",
    iconName: PenTool,
    color: "#8b5cf6",
    quien_actua: "Paciente",
    tipo_actor: "paciente",
    descripcion_corta: "Consentimiento firmado digitalmente con validez legal",
    descripcion_larga: "Antes del procedimiento, el staff genera el consentimiento informado: selecciona paciente + procedimiento → el sistema genera PDF automático con: nombre, cédula, procedimiento detallado, riesgos, cuidados, costos. Se envía por WhatsApp. La paciente lo lee con calma desde su casa, firma con el dedo en la pantalla. El documento firmado se archiva automáticamente en su expediente con trazabilidad completa.",
    modulo_relacionado: "Módulo 5 — Firma Electrónica",
    que_pasa_por_detras: "Generación de PDF con plantilla dinámica. Envío vía Evolution API. El proveedor de firma electrónica registra: IP, dispositivo, fecha/hora, firma biométrica. El documento se cifra y archiva. Tracking de estado se actualiza: Pendiente → Enviado → Visto → Firmado → Archivado.",
    resultado: "Documento con validez legal (Ley 527). Trazabilidad completa. Cero papel."
  },
  {
    id: 8,
    nombre: "Post-Op",
    icono: "💊",
    iconName: Pill,
    color: "#14b8a6",
    quien_actua: "Sistema Automático",
    tipo_actor: "sistema",
    descripcion_corta: "Recomendaciones automáticas según procedimiento",
    descripcion_larga: "Al salir de la clínica, el sistema activa una secuencia de mensajes personalizados según el procedimiento realizado. Ejemplo (ácido hialurónico en labios): Día 0 (7pm) — cuidados inmediatos. Día 1 — cómo manejar la inflamación. Día 3 — puedo usar maquillaje. Día 7 — encuesta de satisfacción y oferta de control gratuito. Todo automático. Sin que nadie en la clínica mueva un dedo.",
    modulo_relacionado: "Módulo 6 — Comunicación Automatizada",
    que_pasa_por_detras: "Al marcar la cita como 'completada', el sistema busca la plantilla de mensajes para ese tipo de procedimiento. Programa los envíos para las fechas y horas correctas. Cada mensaje se personaliza con el nombre de la paciente.",
    resultado: "Paciente se siente cuidada. Menos complicaciones. Menos llamadas con preguntas."
  },
  {
    id: 9,
    nombre: "Encuesta",
    icono: "⭐",
    iconName: Star,
    color: "#eab308",
    quien_actua: "Sistema Automático",
    tipo_actor: "sistema",
    descripcion_corta: "Encuesta NPS automática post-consulta",
    descripcion_larga: "7 días después del procedimiento, el sistema envía: 'En una escala del 1 al 10, ¿qué tan satisfecho estás con tu experiencia?' Si responde 9-10: se activa el programa de referidos. Si responde 7-8: seguimiento para mejorar. Si responde ≤6: ALERTA inmediata al Dr. para intervenir personalmente.",
    modulo_relacionado: "Módulo 7 — Tracking de Experiencia",
    que_pasa_por_detras: "La respuesta del paciente se registra en el CRM como métrica NPS. Si NPS ≥9, se envía automáticamente info del programa de referidos. Si NPS ≤6, se genera alerta prioritaria en el dashboard del Dr. y se envía notificación push a su celular.",
    resultado: "El Dr. sabe exactamente qué tan satisfechos están sus pacientes. Los problemas se detectan temprano."
  },
  {
    id: 10,
    nombre: "Reactiva",
    icono: "🔄",
    iconName: RefreshCw,
    color: "#06b6d4",
    quien_actua: "Sistema Automático",
    tipo_actor: "sistema",
    descripcion_corta: "Recordatorios cíclicos para tratamientos que expiran",
    descripcion_larga: "El sistema calcula automáticamente cuándo cada paciente debe volver según el procedimiento: toxina botulínica cada 4-6 meses, ácido hialurónico cada 12-18 meses, controles post-cirugía al mes/3 meses/6 meses/1 año. Envía mensaje automático: 'Andrea, han pasado 4 meses desde tu toxina. ¿Quieres renovar?' Si responde SÍ, la IA agenda automáticamente.",
    modulo_relacionado: "Módulo 14 — Fidelización y Reactivación",
    que_pasa_por_detras: "Cron job diario escanea pacientes con procedimientos que requieren renovación. Cruza la fecha del último procedimiento con la ventana de reactivación. Genera mensaje personalizado. Si el paciente no responde en 48h, se programa un segundo intento en 2 semanas.",
    resultado: "Pacientes que vuelven solos. $48M/año estimados solo en renovaciones de toxina (100 pacientes × 60% de retorno × $800.000)."
  },
  {
    id: 11,
    nombre: "Refiere",
    icono: "👥",
    iconName: Users,
    color: "#22c55e",
    quien_actua: "Paciente + Sistema",
    tipo_actor: "paciente",
    descripcion_corta: "Paciente feliz refiere amigas. El sistema premia.",
    descripcion_larga: "Una paciente satisfecha (NPS 9-10) comparte su experiencia con amigas. Cuando una amiga contacta a la clínica y menciona 'vengo referida por Laura', la IA lo registra en el CRM: 'Lead referido por Laura Gómez'. Cuando la amiga se opera, el sistema automáticamente: (1) le notifica a Laura que ganó su descuento, (2) aplica el descuento a su próxima cita, (3) actualiza el ranking de referidores en el dashboard del Dr.",
    modulo_relacionado: "Módulo 14 (Fidelización) + Módulo 3 (WhatsApp IA)",
    que_pasa_por_detras: "El CRM mantiene un grafo de referencias: quién refirió a quién, fecha, estado (pendiente/operado). Cuando un referido completa un procedimiento, se dispara el trigger de recompensa. El dashboard muestra top referidores, ingresos por referidos y tasa de conversión de referidos vs otros canales.",
    resultado: "El canal de adquisición más barato y más efectivo, completamente automatizado. Pacientes felices se convierten en vendedores de la clínica."
  }
];

const resumenActores = {
  todos: { label: "Viaje Completo", color: "#64748b", icon: Layers },
  paciente: { label: "Paciente", color: "#10b981", stages: [1, 2, 7, 11], icon: User },
  ia: { label: "IA (DeepSeek)", color: "#6366f1", stages: [3, 4], icon: Cpu },
  sistema: { label: "Sistema Automático", color: "#06b6d4", stages: [5, 8, 9, 10], icon: Activity },
  dr: { label: "Dr. Muñoz & Staff", color: "#ef4444", stages: [6], icon: Stethoscope }
};

const metricasAntesDespues = [
  { metrica: "Tasa de no-show", antes: "25%", despues: "8%", impacto: "67% menos inasistencias", color: "#ec4899" },
  { metrica: "Tiempo de respuesta a WhatsApp", antes: "3-4 horas (o nunca)", despues: "<5 segundos", impacto: "Respuesta 24/7", color: "#6366f1" },
  { metrica: "Leads que se pierden", antes: "40% sin seguimiento", despues: "0%", impacto: "100% automatizado", color: "#10b981" },
  { metrica: "Pacientes que vuelven (renovación)", antes: "20%", despues: "60%+", impacto: "3x más renovaciones", color: "#06b6d4" },
  { metrica: "Tiempo buscando historias clínicas", antes: "5-10 min", despues: "2 segundos", impacto: "Eficiencia total", color: "#ef4444" }
];

type ActorKey = 'todos' | 'paciente' | 'ia' | 'sistema' | 'dr';

export default function SystemFlow() {
  const [selectedActor, setSelectedActor] = useState<ActorKey>('todos');
  const [activeStep, setActiveStep] = useState<number>(1);

  const filteredEtapas = etapasData.filter(etapa => {
    if (selectedActor === 'todos') return true;
    return resumenActores[selectedActor].stages.includes(etapa.id);
  });

  const activeEtapaInfo = etapasData.find(e => e.id === activeStep) || etapasData[0];

  return (
    <section className="mt-12 py-16 px-6 md:px-12 rounded-[3rem] relative overflow-hidden bg-slate-900 text-white shadow-2xl border border-slate-800">
      {/* Background glow highlights */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 75%)', filter: 'blur(70px)' }} />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(16,185,129,0.08) 0%, transparent 75%)', filter: 'blur(70px)' }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-center mb-5">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] uppercase font-bold tracking-[0.25em] border border-slate-700 bg-slate-800/80 text-blue-400">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-blue-400" />
            Flujo de Ingeniería RIEE
          </span>
        </div>

        <h3 className="text-center font-outfit font-bold text-3xl md:text-4xl lg:text-5xl mb-4 tracking-tight">
          El Viaje Automatizado del Paciente
        </h3>
        
        <p className="text-center max-w-2xl mx-auto text-slate-400 text-sm md:text-base font-light mb-12 leading-relaxed">
          El viaje digital completo: desde que un paciente potencial busca en Google hasta que recomienda la clínica a sus contactos. Selecciona un actor o haz clic en cualquier paso para ver el flujo técnico que opera por detrás.
        </p>

        {/* Actor Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-3xl mx-auto p-1.5 rounded-2xl bg-slate-950/80 border border-slate-800/60 backdrop-blur-md">
          {(Object.keys(resumenActores) as ActorKey[]).map((actorKey) => {
            const actor = resumenActores[actorKey];
            const isSelected = selectedActor === actorKey;
            const ActorIcon = actor.icon;
            
            return (
              <button
                key={actorKey}
                onClick={() => {
                  setSelectedActor(actorKey);
                  // Auto-select first stage of this actor
                  if (actorKey !== 'todos' && 'stages' in actor) {
                    setActiveStep(actor.stages[0]);
                  } else {
                    setActiveStep(1);
                  }
                }}
                className="flex-1 min-w-[130px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold transition-all duration-300 border"
                style={
                  isSelected
                    ? { background: 'white', color: '#0f172a', borderColor: 'white', boxShadow: '0 4px 15px rgba(255,255,255,0.1)' }
                    : { background: 'transparent', color: '#94a3b8', borderColor: 'transparent' }
                }
              >
                <ActorIcon className="w-4 h-4" />
                {actor.label}
              </button>
            );
          })}
        </div>

        {/* Main Flow Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left / Top Side: Vertical Steps List */}
          <div className="lg:col-span-5 space-y-2.5 max-h-[520px] overflow-y-auto pr-2 custom-scrollbar">
            {etapasData.map((etapa) => {
              const isActive = activeStep === etapa.id;
              const isFilteredOut = selectedActor !== 'todos' && !resumenActores[selectedActor].stages.includes(etapa.id);
              const Icon = etapa.iconName;

              return (
                <button
                  key={etapa.id}
                  onClick={() => setActiveStep(etapa.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 border flex items-center justify-between gap-4 group ${
                    isFilteredOut ? 'opacity-30 hover:opacity-50' : 'opacity-100'
                  }`}
                  style={
                    isActive
                      ? {
                          background: 'rgba(30, 41, 59, 0.9)',
                          borderColor: etapa.color,
                          boxShadow: `0 0 20px -5px ${etapa.color}`,
                        }
                      : {
                          background: 'rgba(15, 23, 42, 0.4)',
                          borderColor: 'rgba(51, 65, 85, 0.4)',
                        }
                  }
                >
                  <div className="flex items-center gap-3.5">
                    {/* Circle number / indicator */}
                    <div
                      className="w-8 h-8 rounded-lg font-mono text-xs font-extrabold flex items-center justify-center border shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        borderColor: isActive ? etapa.color : 'rgba(148, 163, 184, 0.3)',
                        color: etapa.color,
                        background: isActive ? `${etapa.color}15` : 'transparent',
                      }}
                    >
                      {etapa.id < 10 ? `0${etapa.id}` : etapa.id}
                    </div>
                    <div>
                      <span className="text-xs uppercase font-extrabold tracking-widest text-[9px] block opacity-60 mb-0.5" style={{ color: etapa.color }}>
                        {etapa.quien_actua}
                      </span>
                      <h4 className="font-outfit font-bold text-sm text-slate-100 group-hover:text-white transition-colors duration-300">
                        {etapa.nombre}
                      </h4>
                      <p className="text-xs text-slate-400 font-light truncate max-w-[200px] md:max-w-[280px]">
                        {etapa.descripcion_corta}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center shrink-0">
                    <Icon className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1" style={{ color: etapa.color }} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side: Interactive Focus Card */}
          <div className="lg:col-span-7 h-full">
            <div
              className="p-8 rounded-3xl border flex flex-col justify-between min-h-[500px] transition-all duration-500 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)',
                borderColor: activeEtapaInfo.color,
                boxShadow: `0 10px 40px -15px ${activeEtapaInfo.color}40`,
              }}
            >
              {/* Large absolute background emoji / icon */}
              <span className="absolute -bottom-10 -right-10 text-[180px] font-bold opacity-[0.03] select-none pointer-events-none">
                {activeEtapaInfo.icono}
              </span>

              <div>
                {/* Card Header Info */}
                <div className="flex justify-between items-start gap-4 flex-wrap mb-6">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest font-mono border px-3 py-1.5 rounded-lg"
                      style={{
                        borderColor: `${activeEtapaInfo.color}40`,
                        color: activeEtapaInfo.color,
                        background: `${activeEtapaInfo.color}10`,
                      }}>
                      Etapa {activeEtapaInfo.id < 10 ? `0${activeEtapaInfo.id}` : activeEtapaInfo.id} · {activeEtapaInfo.quien_actua}
                    </span>
                  </div>
                  
                  {/* Module Badge */}
                  <span className="text-[10px] font-bold tracking-wide uppercase px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700/60">
                    {activeEtapaInfo.modulo_relacionado}
                  </span>
                </div>

                {/* Title */}
                <h4 className="font-outfit font-black text-2xl md:text-3xl tracking-tight mb-4 flex items-center gap-2">
                  <span className="text-3xl shrink-0">{activeEtapaInfo.icono}</span>
                  {activeEtapaInfo.nombre}
                </h4>

                {/* Description Larga */}
                <p className="text-sm md:text-base font-light text-slate-300 leading-relaxed mb-6">
                  {activeEtapaInfo.descripcion_larga}
                </p>

                {/* Under the hood (Por Detrás) */}
                <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 mb-6">
                  <h5 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-blue-400" />
                    Bajo el Capó (Ingeniería Técnica)
                  </h5>
                  <p className="text-xs font-light text-slate-400 leading-relaxed">
                    {activeEtapaInfo.que_pasa_por_detras}
                  </p>
                </div>
              </div>

              {/* Action / Result Footer */}
              <div className="pt-5 border-t border-slate-800/80 flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: `${activeEtapaInfo.color}15`,
                    color: activeEtapaInfo.color,
                  }}>
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] uppercase font-bold tracking-widest text-slate-500 block">
                    Resultado de la Etapa
                  </span>
                  <p className="text-sm font-semibold text-slate-200">
                    {activeEtapaInfo.resultado}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Antes vs Después Metrics Dashboard */}
        <div className="p-8 rounded-[2.5rem] relative overflow-hidden bg-slate-950/60 border border-slate-800">
          <div className="absolute top-0 left-0 w-full h-[5px]" style={{ background: 'linear-gradient(90deg, #3b82f6, #10b981, #6366f1, #ec4899, #ef4444)' }} />
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-slate-500 block mb-1">Impacto de Negocio</span>
              <h4 className="font-outfit font-bold text-xl md:text-2xl text-slate-100">
                Métricas Clave: Antes vs. Después de RIEE
              </h4>
            </div>
            <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-emerald-400" /> ROI Directo y Eficiencia
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {metricasAntesDespues.map((m, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h5 className="text-xs font-bold text-slate-400 leading-snug mb-3">
                    {m.metrica}
                  </h5>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-xs text-red-500 font-mono line-through opacity-75">{m.antes}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
                    <span className="text-2xl font-black font-mono tracking-tight" style={{ color: m.color }}>
                      {m.despues}
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-800/60 text-[10px] font-extrabold uppercase tracking-wider text-emerald-400">
                  {m.impacto}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
