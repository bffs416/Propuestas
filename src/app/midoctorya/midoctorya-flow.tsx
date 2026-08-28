'use client';

import {
  Search,
  UserCheck,
  Calendar,
  CreditCard,
  Bell,
  Stethoscope,
  MessageSquare,
  TrendingUp,
  RefreshCw,
  Users,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Smartphone,
  Globe,
  Shield,
  BarChart3,
} from 'lucide-react';

const pacientePasos = [
  { icon: Search, label: 'Buscar', desc: 'Encuentra médicos por especialidad, ubicación o disponibilidad' },
  { icon: UserCheck, label: 'Seleccionar', desc: 'Revisa perfil, experiencia y reseñas del médico' },
  { icon: Calendar, label: 'Agendar', desc: 'Elige horario disponible sin llamadas ni filas' },
  { icon: CreditCard, label: 'Pagar', desc: 'Paga desde la app con tarjeta, Nequi o PSE' },
  { icon: Bell, label: 'Asistir', desc: 'Recibe recordatorios y asiste a tu consulta' },
  { icon: MessageSquare, label: 'Calificar', desc: 'Evalúa tu experiencia y ayuda a otros pacientes' },
];

const medicoPasos = [
  { icon: Globe, label: 'Registrarse', desc: 'Crea tu perfil profesional con documentos y precios' },
  { icon: Smartphone, label: 'Gestionar', desc: 'Define tu agenda y disponibilidad desde tu panel' },
  { icon: Bell, label: 'Recibir', desc: 'Notificación automática de nuevas citas pagadas' },
  { icon: Stethoscope, label: 'Atender', desc: 'Recibe al paciente en consulta y marca completada' },
  { icon: BarChart3, label: 'Cobrar', desc: 'Recibe tu pago sin perseguir a nadie, automático' },
  { icon: TrendingUp, label: 'Crecer', desc: 'Pacientes que vuelven y refieren a otros colegas' },
];

function EcosystemStep({ number, text, icon }: { number: string; text: string; icon?: boolean }) {
  return (
    <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/80 border border-slate-100 hover:border-slate-200 transition-colors">
      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[9px] font-bold ${
        icon ? 'bg-purple-100 text-purple-700' : 'bg-slate-100 text-slate-600'
      }`}>
        {number}
      </div>
      <span className="text-[11px] text-slate-700 leading-snug">{text}</span>
    </div>
  );
}

function FlowCard({ icon: Icon, label, desc, color }: { icon: any; label: string; desc: string; color: string }) {
  return (
    <div className="flex flex-col items-center text-center p-4 min-w-[140px]">
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 shadow-lg"
        style={{
          background: `linear-gradient(135deg, ${color}20, ${color}08)`,
          border: `1px solid ${color}30`,
          color: color,
        }}
      >
        <Icon className="w-6 h-6" />
      </div>
      <span className="text-sm font-bold text-slate-800 mb-1">{label}</span>
      <span className="text-[10px] text-slate-500 leading-relaxed max-w-[140px]">{desc}</span>
    </div>
  );
}

export default function MidoctoryaFlow() {
  const arrowColor = '#cbd5e1';
  const pacienteColor = '#2563eb';
  const medicoColor = '#059669';

  return (
    <section className="py-16 px-6 md:px-12 rounded-[3rem] bg-white border border-slate-200 shadow-sm relative overflow-hidden">
      {/* Header */}
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center mb-5">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] uppercase font-bold tracking-[0.25em] border bg-slate-100/80 text-slate-600 border-slate-300">
            Modelo de Negocio
          </span>
        </div>

        <h3 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl mb-3 text-slate-900 tracking-tight">
          ¿Cómo funciona MIDOCTORYA?
        </h3>
        <p className="text-center text-slate-500 text-sm md:text-base max-w-2xl mx-auto mb-16 leading-relaxed">
          Una plataforma que conecta pacientes con médicos independientes en un ciclo completo:
          desde la búsqueda hasta el pago, sin intermediarios y con total transparencia.
        </p>

        {/* ── FLUJO PACIENTES ── */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${pacienteColor}15`, color: pacienteColor }}>
              <Users className="w-5 h-5" />
            </div>
            <div className="h-[1px] flex-1" style={{ background: `linear-gradient(to right, ${pacienteColor}40, transparent)` }} />
          </div>

          <h4 className="text-xl font-bold text-slate-800 mb-2 flex items-center gap-2">
            Flujo del Paciente
          </h4>
          <p className="text-sm text-slate-500 mb-8 max-w-xl">
            El paciente accede a MIDOCTORYA y completa todo el ciclo de atención desde su celular o computador.
          </p>

          <div className="relative">
            {/* Horizontal flow */}
            <div className="flex items-start justify-center md:justify-start gap-0 overflow-x-auto pb-4">
              {pacientePasos.map((paso, i) => (
                <div key={i} className="flex items-start shrink-0">
                  <FlowCard icon={paso.icon} label={paso.label} desc={paso.desc} color={pacienteColor} />
                  {i < pacientePasos.length - 1 && (
                    <div className="flex items-center pt-7 px-1">
                      <ArrowRight className="w-4 h-4 text-slate-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom connecting bar */}
            <div className="mt-2 h-1 rounded-full w-full max-w-[900px]" style={{ background: `linear-gradient(to right, ${pacienteColor}40, ${pacienteColor}15)` }} />
          </div>
        </div>

        {/* ── FLUJO MÉDICOS ── */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${medicoColor}15`, color: medicoColor }}>
              <Stethoscope className="w-5 h-5" />
            </div>
            <div className="h-[1px] flex-1" style={{ background: `linear-gradient(to right, ${medicoColor}40, transparent)` }} />
          </div>

          <h4 className="text-xl font-bold text-slate-800 mb-2 flex items-center gap-2">
            Flujo del Médico
          </h4>
          <p className="text-sm text-slate-500 mb-8 max-w-xl">
            El médico se registra una vez y recibe pacientes sin hacer marketing, sin inversión inicial.
          </p>

          <div className="relative">
            <div className="flex items-start justify-center md:justify-start gap-0 overflow-x-auto pb-4">
              {medicoPasos.map((paso, i) => (
                <div key={i} className="flex items-start shrink-0">
                  <FlowCard icon={paso.icon} label={paso.label} desc={paso.desc} color={medicoColor} />
                  {i < medicoPasos.length - 1 && (
                    <div className="flex items-center pt-7 px-1">
                      <ArrowRight className="w-4 h-4 text-slate-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-2 h-1 rounded-full w-full max-w-[900px]" style={{ background: `linear-gradient(to right, ${medicoColor}40, ${medicoColor}15)` }} />
          </div>
        </div>

        {/* ── ECOSISTEMA MIDOCTORYA ── */}
        <div className="mt-16">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] uppercase font-bold tracking-[0.25em] border bg-purple-100/80 text-purple-700 border-purple-300">
              <RefreshCw className="w-3.5 h-3.5" /> Ecosistema MIDOCTORYA
            </span>
          </div>
          <h4 className="text-center text-xl font-bold text-slate-800 mb-2">¿Cómo conecta todo?</h4>
          <p className="text-center text-sm text-slate-500 mb-10 max-w-2xl mx-auto">
            Desde que el paciente busca un médico hasta que recibe sus resultados, todo pasa por MIDOCTORYA.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {/* ── COLUMNA PACIENTE ── */}
            <div className="rounded-2xl border border-blue-200 bg-gradient-to-b from-blue-50/80 to-white overflow-hidden">
              <div className="bg-blue-600 text-white text-center py-3 px-4">
                <Users className="w-5 h-5 mx-auto mb-1" />
                <span className="text-xs font-bold uppercase tracking-wider">Paciente</span>
              </div>
              <div className="p-4 space-y-2.5">
                <EcosystemStep number="1" text="Busca médicos por geolocalización, especialidad o disponibilidad" />
                <EcosystemStep number="2" text="Chatea con el agente IA para resolver dudas antes de agendar" />
                <EcosystemStep number="3" text="Paga desde la web o app con tarjeta, Nequi o PSE" />
                <EcosystemStep number="4" text="Asiste a la consulta y recibe tratamiento digital" />
                <EcosystemStep number="5" text="Recibe orden de examen y la lleva al laboratorio aliado" />
                <EcosystemStep number="6" text="Consulta resultados desde la plataforma" />
              </div>
            </div>

            {/* ── COLUMNA PLATAFORMA ── */}
            <div className="rounded-2xl border border-purple-200 bg-gradient-to-b from-purple-50/80 to-white overflow-hidden relative">
              <div className="bg-purple-700 text-white text-center py-3 px-4">
                <Globe className="w-5 h-5 mx-auto mb-1" />
                <span className="text-xs font-bold uppercase tracking-wider">MIDOCTORYA</span>
              </div>
              <div className="p-4 space-y-2.5">
                <EcosystemStep number="①" text="Web + App (iOS/Android) — siempre disponible" icon />
                <EcosystemStep number="②" text="Chatbot IA resuelve dudas 24/7" icon />
                <EcosystemStep number="③" text="Wompi recauda el pago y retiene la comisión" icon />
                <EcosystemStep number="④" text="Libera el pago neto al médico al completar la consulta" icon />
                <EcosystemStep number="⑤" text="Historia clínica digital: tratamientos, exámenes, resultados" icon />
                <EcosystemStep number="⑥" text="Red de laboratorios aliados integrados" icon />
              </div>
              {/* Connecting arrows decoration */}
              <div className="hidden md:block absolute top-1/2 -left-3 text-purple-300 text-2xl">◀</div>
              <div className="hidden md:block absolute top-1/2 -right-3 text-purple-300 text-2xl">▶</div>
            </div>

            {/* ── COLUMNA MÉDICO ── */}
            <div className="rounded-2xl border border-green-200 bg-gradient-to-b from-green-50/80 to-white overflow-hidden">
              <div className="bg-green-600 text-white text-center py-3 px-4">
                <Stethoscope className="w-5 h-5 mx-auto mb-1" />
                <span className="text-xs font-bold uppercase tracking-wider">Médico</span>
              </div>
              <div className="p-4 space-y-2.5">
                <EcosystemStep number="1" text="Recibe notificación de nueva cita pagada" />
                <EcosystemStep number="2" text="Agenda la consulta en su panel" />
                <EcosystemStep number="3" text="Atiende al paciente y diligencia historia clínica" />
                <EcosystemStep number="4" text="Recibe el pago neto automáticamente (comisión descontada)" />
                <EcosystemStep number="5" text="Prescribe tratamiento y/o envía orden de examen" />
                <EcosystemStep number="6" text="Recibe resultados del laboratorio y los revisa" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
