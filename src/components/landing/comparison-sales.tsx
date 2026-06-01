'use client';

import { useState } from 'react';
import {
  DollarSign,
  Clock,
  Shield,
  TrendingUp,
  Heart,
  Check,
  X,
  Award,
  ChevronRight,
  Sparkles,
  Flame,
  ArrowRight,
  Gift,
  Timer,
  Star,
  ArrowUpRight,
  Zap,
} from 'lucide-react';

type Plan = '360' | 'starter';
type TabId = 'value' | 'vs_competitor' | 'vs_hubspot' | 'vs_plans' | 'bonos';
type ValueSubTab = 'dinero' | 'tiempo' | 'seguridad' | 'crecimiento' | 'emocional';

interface Props {
  activePlan?: Plan;
}

// ─── VALUE ARGUMENTS PER PLAN ────────────────────────────────────────────────

const valueArgs360 = {
  dinero: [
    {
      title: 'Se paga con 2–3 cirugías',
      quote: 'Doctor, $14.000.000 son apenas 2 o 3 cirugías. Después de eso, el sistema completo se pagó solo y todo lo demás es ganancia pura cada mes.',
      tag: 'Retorno Directo', metric: '2–3 Pacientes',
    },
    {
      title: 'Pérdidas silenciosas que ya suman más',
      quote: 'Cada paciente que no agendó porque nadie contestó el WhatsApp a tiempo, cada inasistencia sin recordatorio, cada insumo vencido... todo suma más de $14M al año en pérdidas invisibles.',
      tag: 'Costo de No Actuar', metric: '–$14M+ Anuales',
    },
    {
      title: '360° sale más barato que actualizar módulos',
      quote: 'Si arranca con el Starter a $7M y luego agrega los 9 módulos avanzados progresivamente, pagará $19M en total. El 360° desde el inicio le ahorra $5.000.000 de inmediato.',
      tag: 'Decisión Inteligente', metric: 'Ahorra $5M COP',
    },
    {
      title: 'ROI en menos de 6 meses',
      quote: 'Con reducir inasistencias un 30% gracias a los recordatorios de IA, recupera la inversión antes del mes 6. Una sola cirugía que no se cancela son $5M–$8M recuperados.',
      tag: 'Eficiencia', metric: 'ROI < 6 Meses',
    },
    {
      title: 'Activo de marca a largo plazo',
      quote: 'Si en el futuro vende o asocia la clínica, un ecosistema digital robusto con historias clínicas, fotos blindadas y consentimientos firmados eleva sustancialmente el valor comercial del negocio.',
      tag: 'Activo Fijo', metric: 'Valor de Marca',
    },
  ],
  tiempo: [
    {
      title: 'Piloto automático entre cirugías',
      quote: 'Usted entra a sala de operaciones. Cuando sale, la IA ya agendó 3 pacientes nuevos, confirmó 5 citas de control y envió 10 recomendaciones de post-operatorio. Sin mover un solo dedo.',
      tag: 'Automatización Total', metric: '100% Piloto Auto',
    },
    {
      title: 'Dashboard ejecutivo en 5 segundos',
      quote: 'Usted delega la agenda y el WhatsApp al asistente IA. En lugar de preguntar cómo va el día, abre el panel gerencial y ve facturación, citas y stock en tiempo real.',
      tag: 'Control Total', metric: 'Visión 360°',
    },
    {
      title: 'Cero llamadas para confirmar citas',
      quote: 'La IA confirma y recuerda citas por WhatsApp las 24 horas del día, con el tono del Dr. Muñoz. Cero llamadas molestas del personal, máxima tasa de asistencia.',
      tag: 'Productividad', metric: 'Cero Teléfono',
    },
    {
      title: 'Historial clínico en 2 segundos',
      quote: 'Durante la consulta, usted accede a historial, fotos y consentimiento del paciente desde su iPad en 2 segundos — no en archivadores de papel. El paciente percibe máxima modernidad.',
      tag: 'Velocidad Clínica', metric: 'Acceso en 2s',
    },
  ],
  seguridad: [
    {
      title: 'Blindaje legal ante demandas',
      quote: 'Doctor, publicar fotos antes/después sin autorización firmada expone su marca a demandas costosas. El módulo de consentimientos y uso de imagen lo blinda: solo se publica lo que el paciente firmó digitalmente.',
      tag: 'Legal', metric: 'Blindaje Civil',
    },
    {
      title: 'Habeas Data y Ley 1581',
      quote: 'La Ley 1581 en Colombia obliga a proteger los datos médicos. Las sanciones de la SIC son severas. El blindaje antiihack de la base de datos garantiza cumplimiento sin preocupaciones.',
      tag: 'Normativa', metric: 'Ley 1581 SIC',
    },
    {
      title: 'Historias clínicas por 20 años',
      quote: 'La Resolución 1995 exige retención de historias por 20 años. El almacenamiento en nube cifrada con backups diarios automáticos resuelve el espacio físico y elimina el riesgo de pérdida.',
      tag: 'Custodia', metric: 'Res. 1995',
    },
    {
      title: 'Accesos por roles de usuario',
      quote: 'La recepcionista no ve diagnósticos ni historias médicas. La enfermera no ve finanzas. Los accesos están segmentados por rol: eso es cumplimiento ético y paz mental garantizada.',
      tag: 'Privacidad', metric: 'Roles Seguros',
    },
  ],
  crecimiento: [
    {
      title: 'Escala sin contratar personal',
      quote: 'Si hoy atiende 50 pacientes/mes y mañana escala a 150, no necesita otra recepcionista. El asistente IA y el CRM médico gestionan el volumen de forma automática e ilimitada.',
      tag: 'Escalabilidad', metric: '3× Volumen',
    },
    {
      title: 'Multi-sede desde el primer día',
      quote: 'Si en el futuro abre otra sede en Medellín o Cali, el mismo sistema centralizado la gestiona. Misma base de datos, mismo asistente IA, mismo panel — sin empezar desde cero.',
      tag: 'Expansión', metric: 'Multi-Sede Listo',
    },
    {
      title: 'Ventas recurrentes automáticas',
      quote: 'El sistema recuerda: «Este paciente se realizó toxina hace 6 meses». La IA le sugiere de forma sutil un control de retoque por WhatsApp. Es una venta segura que hoy se está perdiendo.',
      tag: 'Fidelización', metric: '+25% Retorno',
    },
  ],
  emocional: [
    {
      title: 'Paz quirúrgica garantizada',
      quote: 'Doctor, usted entra a sala sabiendo que en el exterior su clínica, sus citas, su chatbot y sus finanzas están operando solos, de forma perfecta y en piloto automático. Eso no tiene precio.',
      tag: 'Paz Mental', metric: 'Cero Estrés',
    },
    {
      title: 'Estatus de clínica de élite',
      quote: 'Cuando un paciente de alto perfil ingresa y experimenta un ecosistema 100% digital, veloz e interactivo, percibe de inmediato que está en una clínica internacional de élite. El estatus atrae mejores tarifas.',
      tag: 'Prestigio', metric: 'Élite Digital',
    },
    {
      title: 'Legado profesional construido',
      quote: 'Esto no es un gasto operativo. Es el activo intangible de su clínica — estructura digital organizada, blindada y moderna que vale más cada año y representa su legado científico.',
      tag: 'Legado', metric: 'Activo de Vida',
    },
  ],
};

const valueArgsStarter = {
  dinero: [
    {
      title: 'El punto de entrada inteligente',
      quote: 'Doctor, $7.000.000 son una o dos cirugías. Por ese precio, su clínica arranca con presencia digital profesional y un asistente IA que responde WhatsApp 24/7 — sin necesitar más personal.',
      tag: 'Inversión Inicial', metric: '1–2 Pacientes',
    },
    {
      title: 'Lo que cuesta no tener nada',
      quote: 'Un lead que escribe el domingo en la noche y nadie responde hasta el lunes a las 10am... ya cotizó en otra clínica. Eso pasa hoy. El Plan Starter detiene esa hemorragia de pacientes perdidos.',
      tag: 'Costo de No Actuar', metric: '$7M+ Perdidos',
    },
    {
      title: 'El Starter se paga con 1 paciente',
      quote: 'Una sola cirugía o procedimiento estético cubre la inversión total del Plan Starter. A partir del segundo paciente, el sistema está generando retorno puro mes a mes.',
      tag: 'ROI Inmediato', metric: '1 Paciente = ROI',
    },
    {
      title: 'Actualización siempre disponible',
      quote: 'El Plan Starter está diseñado para crecer. Cuando el Dr. esté listo, puede incorporar los módulos avanzados del 360°. La diferencia de valor entre los dos planes es solo $7M.',
      tag: 'Escalable', metric: 'Upgrade en Cualquier Momento',
    },
  ],
  tiempo: [
    {
      title: 'El asistente que nunca duerme',
      quote: 'El asistente IA en WhatsApp responde consultas básicas, resuelve dudas frecuentes y registra pre-consultas mientras usted opera. Cero carga de trabajo para la recepcionista en horario no laboral.',
      tag: 'Automatización', metric: '24/7 sin Pausas',
    },
    {
      title: 'Adiós a gestionar WhatsApp manualmente',
      quote: 'Con el Starter, las preguntas repetitivas ("¿cuánto vale una lipo?", "¿cómo agendo?") las responde el bot automáticamente. Su recepcionista solo atiende casos que realmente requieren intervención humana.',
      tag: 'Eficiencia', metric: '80% Menos Carga',
    },
    {
      title: 'Portal web que trabaja solo',
      quote: 'Su portal web profesional actúa como representante digital de su clínica las 24 horas: responde dudas, muestra procedimientos, genera confianza y captura leads — sin que usted intervenga.',
      tag: 'Presencia Digital', metric: 'Trabaja Solo',
    },
  ],
  seguridad: [
    {
      title: 'Credibilidad digital desde el día 1',
      quote: 'Un portal web profesional proyecta autoridad médica. Los pacientes de alto perfil investigan en Google antes de agendar. Sin presencia digital sólida, usted no existe para ellos.',
      tag: 'Posicionamiento', metric: 'Confianza Online',
    },
    {
      title: 'Pacientes más informados = menos conflictos',
      quote: 'El portal informa procedimientos, tiempos de recuperación y cuidados post-operatorios con claridad. Un paciente bien informado antes de la cirugía genera menos quejas y expectativas mejor alineadas.',
      tag: 'Educación Digital', metric: 'Menos Fricciones',
    },
    {
      title: 'Datos básicos centralizados',
      quote: 'El registro de pre-consultas por WhatsApp queda organizado en un panel centralizado. No más datos perdidos en chats, hojas sueltas o agendas físicas que nadie puede encontrar al día siguiente.',
      tag: 'Organización', metric: 'Cero Papeles',
    },
  ],
  crecimiento: [
    {
      title: 'Base para escalar',
      quote: 'El Plan Starter es el cimiento digital de la clínica. Una vez implementado y funcionando, añadir el módulo CRM completo, consentimientos digitales o finanzas es un paso natural — no un proyecto desde cero.',
      tag: 'Fundación Sólida', metric: 'Paso 1 de 3',
    },
    {
      title: 'Más pacientes desde el mes 1',
      quote: 'Un portal web bien posicionado con SEO médico local captura pacientes que hoy buscan en Google. Esos pacientes existen — la diferencia es si encuentran su clínica o la de la competencia.',
      tag: 'Captación', metric: '+Pacientes Mes 1',
    },
    {
      title: 'Diferenciarse de la competencia hoy',
      quote: 'La mayoría de cirujanos estéticos en Colombia no tienen automatización de WhatsApp ni portal SEO. Adoptar el Starter hoy posiciona al Dr. Muñoz con 2–3 años de ventaja tecnológica sobre su competencia directa.',
      tag: 'Ventaja', metric: '2 Años Adelante',
    },
  ],
  emocional: [
    {
      title: 'Confianza desde el primer contacto',
      quote: 'Cuando un paciente visita su portal y recibe respuesta inmediata del asistente IA — incluso a las 11pm — la percepción de profesionalismo se eleva de inmediato. Eso genera conversión antes de la primera cita.',
      tag: 'Primera Impresión', metric: 'Convierte Antes',
    },
    {
      title: 'El "queda bien visto"',
      quote: 'Doctor, enviarle a un paciente potencial un link de portal web profesional con su foto, sus procedimientos y su asistente de WhatsApp dice mucho más que un número de celular en Instagram.',
      tag: 'Imagen Médica', metric: 'Autoridad Digital',
    },
    {
      title: 'Sin cambios bruscos de operación',
      quote: 'El Starter se integra al flujo de trabajo actual sin necesidad de cambiar procesos complejos. La recepcionista aprende el sistema en horas — no en semanas — y el doctor no necesita intervenir.',
      tag: 'Transición Suave', metric: 'Implementación Rápida',
    },
  ],
};

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function ComparisonSales({ activePlan = '360' }: Props) {
  const is360 = activePlan === '360';

  const defaultTab: TabId = is360 ? 'value' : 'vs_plans';
  const [activeTab, setActiveTab] = useState<TabId>(defaultTab);
  const [activeValueSubTab, setActiveValueSubTab] = useState<ValueSubTab>('dinero');

  const valueArguments = is360 ? valueArgs360 : valueArgsStarter;

  const tabs: { id: TabId; label: string; icon?: React.ReactNode; highlight?: boolean }[] = is360
    ? [
        { id: 'value',         label: 'Pilares de Valor' },
        { id: 'vs_competitor', label: 'Clínica Muñoz vs. Otros' },
        { id: 'vs_hubspot',    label: 'CRM vs. HubSpot' },
        { id: 'vs_plans',      label: 'Starter vs. 360°', icon: <Flame className="w-3.5 h-3.5" /> },
        { id: 'bonos',         label: '🎁 Bonos Exclusivos' },
      ]
    : [
        { id: 'vs_plans',      label: '🔥 Compara los Planes', highlight: true },
        { id: 'value',         label: 'Por Qué el Starter' },
        { id: 'vs_competitor', label: 'Clínica Muñoz vs. Otros' },
        { id: 'vs_hubspot',    label: 'CRM vs. HubSpot' },
        { id: 'bonos',         label: '🎁 Bono Starter' },
      ];

  return (
    <section
      className="mt-28 py-16 px-6 md:px-12 rounded-[3rem] relative overflow-hidden reveal"
      style={{ background: 'linear-gradient(160deg, #f8fafc 0%, #eef2ff 50%, #f0f9ff 100%)' }}
    >
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(14,165,233,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="relative z-10">

        {/* Header */}
        <div className="flex justify-center mb-5">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] uppercase font-bold tracking-[0.25em] border"
            style={{ background: 'rgba(99,102,241,0.06)', borderColor: 'rgba(99,102,241,0.18)', color: '#6366f1' }}>
            <Sparkles className="w-3.5 h-3.5" />
            {is360 ? 'Análisis Estratégico · Por Qué Vale la Inversión de $14M' : 'Análisis Estratégico · Por Qué el Plan Starter es tu Primer Gran Paso'}
          </span>
        </div>

        <h4 className="text-center font-outfit font-bold text-3xl md:text-4xl mb-3 tracking-tight" style={{ color: '#0f172a' }}>
          {is360 ? 'El Valor Real Detrás de los $14.000.000' : 'El Inicio Inteligente: $7M que Trabajan por Ti'}
        </h4>
        <p className="text-center max-w-xl mx-auto text-sm md:text-base font-light mb-12 leading-relaxed" style={{ color: '#64748b' }}>
          {is360
            ? 'Un desglose táctico para demostrar cómo la inversión premium se traduce en retorno financiero, blindaje legal y paz mental absoluta.'
            : 'Por qué el Plan Starter es la decisión más inteligente para digitalizar hoy — y cómo escalar al 360° cuando esté listo.'}
        </p>

        {/* Tab Bar */}
        <div className="flex flex-wrap justify-center gap-1 mb-12 p-1.5 rounded-2xl max-w-4xl mx-auto border"
          style={{ background: 'rgba(255,255,255,0.7)', borderColor: 'rgba(148,163,184,0.25)', backdropFilter: 'blur(12px)' }}>
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex-1 min-w-[130px] px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-1.5"
                style={isActive
                  ? { background: '#1e293b', color: '#f8fafc', boxShadow: '0 2px 12px rgba(15,23,42,0.15)' }
                  : tab.highlight
                    ? { background: 'rgba(239,68,68,0.06)', color: '#dc2626', border: '1px solid rgba(239,68,68,0.15)' }
                    : { color: '#64748b' }
                }
              >
                {tab.icon}
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ── TAB: VALUE PILLARS ── */}
        {activeTab === 'value' && (
          <div className="space-y-8">
            {/* Sub-tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-2">
              {(['dinero', 'tiempo', 'seguridad', 'crecimiento', 'emocional'] as const).map((sub) => {
                const icons = {
                  dinero: <DollarSign className="w-3.5 h-3.5" />,
                  tiempo: <Clock className="w-3.5 h-3.5" />,
                  seguridad: <Shield className="w-3.5 h-3.5" />,
                  crecimiento: <TrendingUp className="w-3.5 h-3.5" />,
                  emocional: <Heart className="w-3.5 h-3.5" />,
                };
                const labels = {
                  dinero: 'Dinero & ROI',
                  tiempo: 'Tiempo',
                  seguridad: is360 ? 'Blindaje Legal' : 'Organización',
                  crecimiento: 'Crecimiento',
                  emocional: is360 ? 'Paz Mental' : 'Imagen',
                };
                const isSubActive = activeValueSubTab === sub;
                return (
                  <button
                    key={sub}
                    onClick={() => setActiveValueSubTab(sub)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all duration-300 border"
                    style={isSubActive
                      ? { background: '#f0f9ff', color: '#0284c7', borderColor: '#bae6fd' }
                      : { background: 'transparent', color: '#94a3b8', borderColor: 'transparent' }}
                  >
                    {icons[sub]}
                    {labels[sub]}
                  </button>
                );
              })}
            </div>

            {/* Argument Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {valueArguments[activeValueSubTab].map((arg, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
                  style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(148,163,184,0.2)', boxShadow: '0 2px 24px rgba(15,23,42,0.05)' }}
                >
                  <div>
                    <div className="flex justify-between items-center mb-5">
                      <span className="px-2.5 py-1 rounded-lg text-[9px] uppercase font-extrabold tracking-widest"
                        style={{ background: 'rgba(14,165,233,0.08)', color: '#0284c7', border: '1px solid rgba(14,165,233,0.15)' }}>
                        {arg.tag}
                      </span>
                      <span className="text-[10px] font-bold tracking-wider font-mono" style={{ color: '#6366f1' }}>
                        {arg.metric}
                      </span>
                    </div>
                    <h5 className="font-outfit font-bold text-base mb-3 transition-colors duration-300 group-hover:text-sky-600" style={{ color: '#0f172a' }}>
                      {arg.title}
                    </h5>
                    <p className="text-sm leading-relaxed font-light italic" style={{ color: '#475569' }}>
                      "{arg.quote}"
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider mt-5 transition-colors duration-300 group-hover:text-sky-500" style={{ color: '#94a3b8' }}>
                    <span>Estrategia RIEE</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              ))}
            </div>

            {/* Starter upgrade nudge */}
            {!is360 && (
              <div className="mt-4 p-6 rounded-2xl flex items-center justify-between gap-6 flex-wrap"
                style={{ background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.15)' }}>
                <div>
                  <p className="text-sm font-bold" style={{ color: '#0f172a' }}>
                    ¿Listo para ver qué incluye el Plan 360° completo?
                  </p>
                  <p className="text-xs font-light mt-1" style={{ color: '#64748b' }}>
                    La diferencia entre los dos planes es solo $7M — pero el salto en capacidad es enorme.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('vs_plans')}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 hover:scale-105 shrink-0"
                  style={{ background: '#0f172a', color: '#ffffff' }}
                >
                  Ver Comparativa <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* ── TAB: VS COMPETITOR ── */}
        {activeTab === 'vs_competitor' && (
          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Dr. Muñoz con sistema */}
            <div className="p-8 md:p-10 rounded-2xl relative overflow-hidden group transition-all duration-500 hover:-translate-y-1"
              style={{ background: 'rgba(255,255,255,0.95)', border: '1px solid rgba(14,165,233,0.2)', boxShadow: '0 4px 32px rgba(14,165,233,0.08)' }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.2)' }}>
                  <Check className="w-5 h-5" style={{ color: '#0284c7' }} />
                </div>
                <div>
                  <h5 className="font-outfit font-bold text-lg" style={{ color: '#0f172a' }}>Dr. Wilmer Muñoz</h5>
                  <p className="text-xs uppercase tracking-widest font-extrabold mt-0.5" style={{ color: '#0284c7' }}>
                    {is360 ? 'Ecosistema Clínico RIEE 360°' : 'Plan Starter RIEE'}
                  </p>
                </div>
              </div>
              <ul className="space-y-5">
                {[
                  { strong: 'Atención 24/7 sin límites:', desc: 'Si un paciente escribe un sábado a las 10 PM por WhatsApp, la IA le responde con el tono del Dr. Muñoz y le agenda su cita de inmediato.' },
                  { strong: 'Seguimiento de evolución activo:', desc: 'A los 6 meses, la IA envía un WhatsApp de cortesía: «¿Vemos tus retoques?». Agendamiento automático y recurrente.' },
                  ...(is360
                    ? [
                        { strong: 'Seguridad legal blindada:', desc: 'Fotografías antes/después guardadas de forma encriptada, con firmas legales e identificaciones del paciente al instante.' },
                        { strong: 'Finanzas y stock a un toque:', desc: 'En 5 segundos, el panel gerencial muestra facturación exacta del mes, comisiones y stock de inventario médico.' },
                        { strong: 'Consultas estéticas ágiles:', desc: 'El doctor busca historial o consentimiento digitalizado en 2 segundos desde su iPad, proyectando máximo estatus.' },
                      ]
                    : [
                        { strong: 'Portal web profesional activo:', desc: 'Su presencia digital trabaja sola 24/7: informa procedimientos, genera confianza y captura leads sin intervención.' },
                        { strong: 'Diferenciación inmediata:', desc: 'La mayoría de cirujanos no tienen automatización de WhatsApp. El Starter posiciona al Dr. Muñoz 2 años adelante de su competencia.' },
                      ]
                  ),
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm leading-relaxed">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 shrink-0" style={{ background: 'rgba(14,165,233,0.1)', color: '#0284c7' }}>✓</span>
                    <span style={{ color: '#374151' }}><strong style={{ color: '#0f172a' }}>{item.strong}</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clínica Tradicional */}
            <div className="p-8 md:p-10 rounded-2xl relative overflow-hidden transition-all duration-500"
              style={{ background: 'rgba(248,250,252,0.7)', border: '1px solid rgba(148,163,184,0.15)' }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.15)' }}>
                  <X className="w-5 h-5" style={{ color: '#ef4444' }} />
                </div>
                <div>
                  <h5 className="font-outfit font-bold text-lg" style={{ color: '#374151' }}>Clínica Tradicional</h5>
                  <p className="text-xs uppercase tracking-widest font-extrabold mt-0.5" style={{ color: '#9ca3af' }}>Operación de Papel y Silencio</p>
                </div>
              </div>
              <ul className="space-y-5">
                {[
                  { strong: 'Pérdida masiva de pacientes:', desc: 'El lead escribe el domingo en la noche. Nadie responde hasta el lunes tarde. El paciente ya reservó en otra clínica.' },
                  { strong: 'Olvidar al paciente operado:', desc: 'Tras el pago final, el paciente jamás vuelve a recibir contacto. Se pierden seguimientos y tratamientos recurrentes.' },
                  { strong: 'Caos fotográfico en WhatsApp:', desc: 'Las fotos de pacientes están en el chat de la asistente o en el celular del doctor, con inmenso riesgo de filtración.' },
                  { strong: 'Sin presencia digital sólida:', desc: 'Los pacientes de alto perfil investigan en Google antes de agendar. Sin portal profesional, la clínica no existe para ellos.' },
                  { strong: 'Procesos manuales costosos:', desc: 'Hojas físicas, llamadas para confirmar, agendas en papel — todo eso consume tiempo y personal que podría evitarse.' },
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm leading-relaxed">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 shrink-0" style={{ background: 'rgba(239,68,68,0.06)', color: '#ef4444' }}>✗</span>
                    <span style={{ color: '#6b7280' }}><strong style={{ color: '#374151' }}>{item.strong}</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* ── TAB: CRM VS HUBSPOT ── */}
        {activeTab === 'vs_hubspot' && (
          <div className="space-y-5 max-w-5xl mx-auto">
            <div className="overflow-x-auto rounded-2xl border"
              style={{ background: 'rgba(255,255,255,0.9)', borderColor: 'rgba(148,163,184,0.2)', boxShadow: '0 4px 24px rgba(15,23,42,0.05)' }}>
              <table className="w-full text-left border-collapse min-w-[750px]">
                <thead>
                  <tr className="border-b text-xs uppercase tracking-widest font-bold"
                    style={{ borderColor: 'rgba(148,163,184,0.15)', background: '#f8fafc', color: '#94a3b8' }}>
                    <th className="p-5 pl-6">Métrica de Comparación</th>
                    <th className="p-5" style={{ color: '#0284c7', background: 'rgba(14,165,233,0.04)' }}>
                      Nuestro CRM Médico a Medida
                    </th>
                    <th className="p-5">HubSpot Pro (Sales &amp; Marketing Hub)</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y" style={{ color: '#374151', borderColor: 'rgba(148,163,184,0.1)' }}>
                  {[
                    { metric: 'Mensualidad Fija', ours: '$500.000 COP / mes', theirs: '$1.800+ USD/año (~$8M–$12M COP/año)', ourStyle: { color: '#0284c7', fontWeight: 700 } },
                    { metric: 'Proyección 3 Años', ours: '$20.000.000 COP (Desarrollo + Soporte)', theirs: 'Desde $27.000.000 COP (sujeto al dólar)', ourStyle: { color: '#0284c7', fontWeight: 700 } },
                    { metric: 'Proyección 5 Años', ours: '$26.000.000 COP (infraestructura propia)', theirs: 'Desde $45.000.000 COP (gastos que nunca cesan)', ourStyle: { color: '#0284c7', fontWeight: 700 } },
                    { metric: 'Propiedad del Sistema', ours: '✓ 100% Suyo — el código es su activo permanente', theirs: '✗ Alquiler perpetuo — si no paga, borran su clínica', ourStyle: { color: '#059669', fontWeight: 600 }, theirStyle: { color: '#dc2626' } },
                    { metric: 'Módulo Clínico', ours: '✓ Historias, fotos de evolución e imágenes integradas', theirs: '✗ Inexistente — es software comercial genérico', ourStyle: { color: '#059669', fontWeight: 600 }, theirStyle: { color: '#dc2626' } },
                    { metric: 'Consentimientos Informados', ours: '✓ Firma electrónica legal integrada y nativa', theirs: '✗ Sin soporte legal médico de ningún tipo', ourStyle: { color: '#059669', fontWeight: 600 }, theirStyle: { color: '#dc2626' } },
                    { metric: 'Facturación y DIAN', ours: '✓ Homologado 100% para normativa colombiana', theirs: '✗ Requiere costosa programación externa y adaptaciones', ourStyle: { color: '#059669', fontWeight: 600 }, theirStyle: { color: '#dc2626' } },
                  ].map((row, idx) => (
                    <tr key={idx} className="transition-colors hover:bg-sky-50/50">
                      <td className="p-5 pl-6 font-semibold" style={{ color: '#0f172a' }}>{row.metric}</td>
                      <td className="p-5" style={{ background: 'rgba(14,165,233,0.03)', ...(row.ourStyle || {}) }}>{row.ours}</td>
                      <td className="p-5" style={{ color: '#94a3b8', ...(row.theirStyle || {}) }}>{row.theirs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-center leading-relaxed" style={{ color: '#94a3b8' }}>
              * HubSpot es excelente para marketing B2B corporativo genérico, pero no tiene capacidad nativa de gestionar pacientes, insumos de cirugía ni normativa médica colombiana.
            </p>
          </div>
        )}

        {/* ── TAB: STARTER VS 360° ── */}
        {activeTab === 'vs_plans' && (
          <div className="max-w-5xl mx-auto space-y-6">

            {/* Hero card — mensaje diferente según plan activo */}
            <div className="p-8 rounded-2xl relative overflow-hidden"
              style={{
                background: is360
                  ? 'linear-gradient(135deg, rgba(251,191,36,0.06) 0%, rgba(99,102,241,0.06) 100%)'
                  : 'linear-gradient(135deg, rgba(239,68,68,0.05) 0%, rgba(251,191,36,0.06) 100%)',
                border: is360 ? '1px solid rgba(251,191,36,0.2)' : '1px solid rgba(239,68,68,0.15)',
              }}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <span className="inline-block px-3 py-1 rounded-lg text-[9px] uppercase font-extrabold tracking-widest mb-3"
                    style={is360
                      ? { background: 'rgba(251,191,36,0.1)', color: '#d97706', border: '1px solid rgba(251,191,36,0.2)' }
                      : { background: 'rgba(239,68,68,0.08)', color: '#dc2626', border: '1px solid rgba(239,68,68,0.2)' }
                    }>
                    {is360 ? 'Por Qué el 360° es la Decisión Correcta' : '¿Vale la Pena el Upgrade al 360°?'}
                  </span>
                  <h5 className="font-outfit font-bold text-2xl md:text-3xl mb-3" style={{ color: '#0f172a' }}>
                    {is360 ? 'La Decisión Financiera Más Inteligente' : 'Solo $7M Separan el Starter del Ecosistema Completo'}
                  </h5>
                  <p className="text-sm font-light leading-relaxed max-w-2xl" style={{ color: '#64748b' }}>
                    {is360
                      ? <>Comprar el Plan Starter y complementarlo después costará <strong style={{ color: '#0f172a' }}>$19.000.000 COP</strong>. Adquirir el 360° desde el inicio genera un <strong style={{ color: '#0f172a' }}>ahorro neto de $5.000.000 COP</strong>.</>
                      : <>El Plan Starter a $7M es el primer paso sólido. Cuando decida escalar, el upgrade al 360° cuesta <strong style={{ color: '#0f172a' }}>$7M adicionales</strong> — pero lo que gana en capacidad, blindaje y automatización vale mucho más.</>
                    }
                  </p>
                </div>
                <div className="p-6 rounded-2xl shrink-0 text-center"
                  style={{ background: 'rgba(255,255,255,0.9)', border: is360 ? '1px solid rgba(251,191,36,0.2)' : '1px solid rgba(239,68,68,0.15)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                  <span className="text-[10px] font-bold uppercase tracking-wider block mb-1" style={{ color: '#0284c7' }}>
                    {is360 ? 'Ahorro Neto Inmediato' : 'Diferencia de Inversión'}
                  </span>
                  <span className="text-3xl font-extrabold font-mono tracking-tight" style={{ color: is360 ? '#d97706' : '#dc2626' }}>
                    $7'000.000
                  </span>
                  <span className="text-[9px] font-medium block mt-1 uppercase tracking-widest" style={{ color: '#94a3b8' }}>COP</span>
                </div>
              </div>
            </div>

            {/* Comparison cards — diseño visual tipo tarjeta */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Plan Starter */}
              <div className={`rounded-2xl border p-6 transition-all duration-300 ${!is360 ? 'ring-2 ring-sky-400 shadow-lg' : 'hover:-translate-y-0.5'}`}
                style={{ background: !is360 ? 'rgba(14,165,233,0.03)' : 'rgba(255,255,255,0.8)', borderColor: !is360 ? 'rgba(14,165,233,0.3)' : 'rgba(148,163,184,0.2)' }}>
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest" style={{ color: '#64748b' }}>Plan</span>
                    <h5 className="text-xl font-bold mt-0.5" style={{ color: '#0f172a' }}>Starter</h5>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black font-mono" style={{ color: '#0f172a' }}>$7M</span>
                    <span className="text-[9px] font-medium block uppercase tracking-wider" style={{ color: '#94a3b8' }}>COP</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Portal Web', check: '✅', detail: 'Landing informativa con catálogo básico', good: true },
                    { label: 'WhatsApp IA', check: '⚠️', detail: 'FAQ básico — dudas repetitivas', good: false },
                    { label: 'CRM Médico', check: '❌', detail: 'No incluye', good: false },
                    { label: 'Firmas Electrónicas', check: '❌', detail: 'PDF plano sin firma', good: false },
                    { label: 'Facturación DIAN', check: '❌', detail: 'No incluye', good: false },
                    { label: 'Fidelización', check: '❌', detail: 'No incluye', good: false },
                    { label: 'Mantenimiento', check: '✅', detail: '$500K/mes', good: true },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs py-1.5">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0
                        ${item.good ? '' : 'opacity-60'}`}
                        style={{ background: item.good ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.06)', color: item.good ? '#059669' : '#ef4444' }}>
                        {item.check}
                      </span>
                      <div>
                        <span className="font-semibold" style={{ color: '#1e293b' }}>{item.label}</span>
                        <span className="ml-1.5 font-light" style={{ color: '#64748b' }}>{item.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
                {!is360 && (
                  <div className="mt-5 pt-4 border-t text-center" style={{ borderColor: 'rgba(14,165,233,0.15)' }}>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest" style={{ color: '#0284c7' }}>← Visualizando este plan</span>
                  </div>
                )}
              </div>

              {/* Plan 360° */}
              <div className={`rounded-2xl border p-6 transition-all duration-300 relative overflow-hidden ${is360 ? 'ring-2 ring-amber-400 shadow-lg' : 'hover:-translate-y-0.5'}`}
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,251,235,0.6) 100%)', borderColor: is360 ? 'rgba(251,191,36,0.4)' : 'rgba(148,163,184,0.2)' }}>
                {/* Premium badge */}
                <div className="absolute -top-3 -right-3 px-4 py-1.5 rounded-bl-xl text-[8px] uppercase font-extrabold tracking-widest"
                  style={{ background: '#fbbf24', color: '#0f172a', boxShadow: '0 2px 8px rgba(251,191,36,0.3)' }}>
                  ⭐ RECOMENDADO
                </div>
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest" style={{ color: '#d97706' }}>Plan</span>
                    <h5 className="text-xl font-bold mt-0.5" style={{ color: '#0f172a' }}>360° Completo</h5>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black font-mono" style={{ color: '#0f172a' }}>$14M</span>
                    <span className="text-[9px] font-medium block uppercase tracking-wider" style={{ color: '#94a3b8' }}>COP</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Portal Web', check: '✅', detail: 'Premium con SEO quirúrgico + galería cifrada', good: true },
                    { label: 'WhatsApp IA', check: '✅', detail: 'Auto-Pilot completo: post-op, recordatorios, fidelización', good: true },
                    { label: 'CRM Médico', check: '✅', detail: 'Historias, evolución, fotos, consentimientos', good: true },
                    { label: 'Firmas Electrónicas', check: '✅', detail: 'Firma en pantalla + trazabilidad IP/fecha', good: true },
                    { label: 'Facturación DIAN', check: '✅', detail: 'Dashboard + integración con proveedor timbrador', good: true },
                    { label: 'Fidelización', check: '✅', detail: 'Recordatorios cíclicos + referidos automatizados', good: true },
                    { label: 'Mantenimiento', check: '✅', detail: '$500K/mes — mismo precio del Starter', good: true },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs py-1.5">
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
                        style={{ background: 'rgba(16,185,129,0.1)', color: '#059669' }}>
                        {item.check}
                      </span>
                      <div>
                        <span className="font-semibold" style={{ color: '#1e293b' }}>{item.label}</span>
                        <span className="ml-1.5 font-light" style={{ color: '#64748b' }}>{item.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
                {is360 && (
                  <div className="mt-5 pt-4 border-t text-center" style={{ borderColor: 'rgba(251,191,36,0.15)' }}>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest" style={{ color: '#d97706' }}>← Visualizando este plan</span>
                  </div>
                )}
              </div>
            </div>

            {/* Ahorro highlight */}
            <div className="p-5 rounded-2xl text-center border"
              style={{ background: 'rgba(251,191,36,0.05)', borderColor: 'rgba(251,191,36,0.2)' }}>
              <p className="text-sm font-semibold" style={{ color: '#0f172a' }}>
                {is360
                  ? 'Comprar el Starter y luego actualizar progresivamente costaría $19M total. El 360° desde ahora te ahorra $5.000.000 COP.'
                  : 'El Starter es tu puerta de entrada. Cuando quieras escalar, el upgrade al 360° cuesta $7M adicionales — y mantienes todo lo construido.'}
              </p>
            </div>

            {/* Starter CTA para upgrade */}
            {!is360 && (
              <div className="p-6 rounded-2xl flex items-center justify-between gap-4 flex-wrap"
                style={{ background: 'rgba(251,191,36,0.05)', border: '1px solid rgba(251,191,36,0.2)' }}>
                <div>
                  <p className="text-sm font-bold" style={{ color: '#0f172a' }}>¿Convencido de arrancar con el 360° completo?</p>
                  <p className="text-xs font-light mt-1" style={{ color: '#64748b' }}>Recuerde: el upgrade progresivo costará $19M total vs. $14M ahora.</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl"
                  style={{ background: '#d97706', color: '#fff' }}>
                  <Zap className="w-3.5 h-3.5" /> Ahorra $5M eligiendo el 360° hoy
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── TAB: BONOS ── */}
        {activeTab === 'bonos' && (
          <div className="max-w-4xl mx-auto space-y-8">

            {/* Hero */}
            <div className="p-8 rounded-2xl relative overflow-hidden text-center"
              style={{
                background: is360
                  ? 'linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(99,102,241,0.06) 100%)'
                  : 'linear-gradient(135deg, rgba(14,165,233,0.06) 0%, rgba(99,102,241,0.06) 100%)',
                border: is360 ? '1px solid rgba(16,185,129,0.2)' : '1px solid rgba(14,165,233,0.2)',
              }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-widest mb-4"
                style={is360
                  ? { background: 'rgba(16,185,129,0.08)', color: '#059669', border: '1px solid rgba(16,185,129,0.2)' }
                  : { background: 'rgba(14,165,233,0.08)', color: '#0284c7', border: '1px solid rgba(14,165,233,0.2)' }}>
                <Gift className="w-3.5 h-3.5" />
                {is360 ? 'Si decide el Plan 360° Completo esta semana' : 'Si firma el Plan Starter esta semana'}
              </div>
              <h5 className="font-outfit font-bold text-2xl md:text-3xl mb-3" style={{ color: '#0f172a' }}>
                {is360 ? 'Se lleva $3.500.000 en Bonos GRATIS' : 'Bono de Arranque por $500.000 GRATIS'}
              </h5>
              <p className="text-sm font-light leading-relaxed max-w-xl mx-auto" style={{ color: '#64748b' }}>
                {is360
                  ? 'Bonos exclusivos por comprometerse con el ecosistema completo esta semana. No están en el precio base.'
                  : 'Un bono especial para quienes arrancan rápido con el Plan Starter esta semana.'}
              </p>
            </div>

            {/* Bonos */}
            <div className={`grid gap-5 ${is360 ? 'md:grid-cols-2' : 'md:grid-cols-1 max-w-xl mx-auto'}`}>
              {(is360
                ? [
                    { num: '01', icon: <Shield className="w-5 h-5" />, title: '3 Meses de Mantenimiento GRATIS', value: '$1.500.000 COP', desc: 'Soporte técnico, servidor y actualizaciones sin costo los primeros 3 meses. Empieza a pagar desde el mes 4, cuando el sistema ya genera retorno.', color: { bg: 'rgba(14,165,233,0.05)', border: 'rgba(14,165,233,0.2)', accent: '#0284c7', tag: 'rgba(14,165,233,0.08)' } },
                    { num: '02', icon: <Star className="w-5 h-5" />, title: 'Módulo de Fidelización GRATIS', value: '$1.000.000 COP', desc: 'Recordatorios cíclicos, reactivación de pacientes inactivos y programa de referidos automatizado. Sus pacientes vuelven solos cada 4–6 meses.', color: { bg: 'rgba(99,102,241,0.05)', border: 'rgba(99,102,241,0.2)', accent: '#6366f1', tag: 'rgba(99,102,241,0.08)' } },
                    { num: '03', icon: <Award className="w-5 h-5" />, title: 'Capacitación VIP + Videos Tutoriales', value: '$800.000 COP', desc: '5 videos tutoriales personalizados para que su recepcionista y usted aprendan el sistema de forma autónoma, grabados con su flujo real de trabajo.', color: { bg: 'rgba(251,191,36,0.05)', border: 'rgba(251,191,36,0.2)', accent: '#d97706', tag: 'rgba(251,191,36,0.08)' } },
                    { num: '04', icon: <ChevronRight className="w-5 h-5" />, title: 'Dominio .com + SSL Configurado GRATIS', value: '$200.000 COP', desc: 'Su dominio www.drwilmer.com configurado, apuntado al servidor y con SSL instalado. Listo desde el primer día de entrega sin costo adicional.', color: { bg: 'rgba(16,185,129,0.05)', border: 'rgba(16,185,129,0.2)', accent: '#059669', tag: 'rgba(16,185,129,0.08)' } },
                  ]
                : [
                    { num: '01', icon: <Zap className="w-5 h-5" />, title: '1 Mes de Mantenimiento GRATIS', value: '$500.000 COP', desc: 'El primer mes de soporte técnico, actualizaciones y ajustes post-entrega va incluido sin costo. Ideal para estabilizar el sistema y resolver cualquier detalle antes de arrancar a pagar.', color: { bg: 'rgba(14,165,233,0.05)', border: 'rgba(14,165,233,0.2)', accent: '#0284c7', tag: 'rgba(14,165,233,0.08)' } },
                  ]
              ).map((bono) => (
                <div
                  key={bono.num}
                  className="p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 border"
                  style={{
                    background: bono.color.bg,
                    borderColor: bono.color.border,
                  }}
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center border"
                        style={{
                          background: 'rgba(255, 255, 255, 0.8)',
                          borderColor: bono.color.border,
                          color: bono.color.accent,
                        }}
                      >
                        {bono.icon}
                      </div>
                      <span
                        className="px-2.5 py-1 rounded-lg text-[9px] uppercase font-extrabold tracking-widest border"
                        style={{
                          background: bono.color.tag,
                          borderColor: bono.color.border,
                          color: bono.color.accent,
                        }}
                      >
                        Valor: {bono.value}
                      </span>
                    </div>
                    <h6 className="font-outfit font-bold text-base mb-2" style={{ color: '#0f172a' }}>
                      {bono.title}
                    </h6>
                    <p className="text-xs leading-relaxed font-light" style={{ color: '#475569' }}>
                      {bono.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA urgencia */}
            <div className="p-8 rounded-2xl text-center relative overflow-hidden" style={{ background: '#0f172a', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.15), transparent 60%)' }} />
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-6 mb-5 flex-wrap">
                  <div className="text-center">
                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#64748b' }}>Valor total en bonos</p>
                    <p className="text-3xl font-black font-mono" style={{ color: '#ffffff' }}>{is360 ? '$3.500.000' : '$500.000'} COP</p>
                  </div>
                  <span className="text-3xl font-light" style={{ color: '#334155' }}>·</span>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6 text-xs font-bold"
                  style={{ background: 'rgba(251,191,36,0.1)', color: '#fbbf24', border: '1px solid rgba(251,191,36,0.2)' }}>
                  <Timer className="w-4 h-4" />
                  Esta promo vence en 7 días · Solo para quienes firmen esta semana
                </div>

                <blockquote className="text-sm italic font-light max-w-2xl mx-auto leading-relaxed" style={{ color: '#94a3b8' }}>
                  {is360
                    ? <>"Doctor, el sistema completo son $14.000.000. Pero si decide arrancar esta semana, le incluyo gratis <span style={{ color: '#e2e8f0', fontWeight: 600 }}>3 meses de mantenimiento, el módulo de fidelización, los videos tutoriales y su dominio</span> — $3.500.000 en bonos sin costo adicional. Pero solo si firmamos esta semana."</>
                    : <>"Doctor, el Plan Starter son $7.000.000. Si decide arrancar esta semana, le incluyo <span style={{ color: '#e2e8f0', fontWeight: 600 }}>el primer mes de mantenimiento sin costo</span>. Y cuando esté listo para el 360°, lo hacemos sin recargo de integración."</>
                  }
                </blockquote>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
