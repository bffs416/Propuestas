'use client';

import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Objective from '@/components/landing/objective';
import Benefits from '@/components/landing/benefits';
import Footer from '@/components/landing/footer';
import MidoctoryaFlow from './midoctorya-flow';
import { midoctoryaProposalData } from '@/lib/proposal-data';
import {
  TrendingUp,
  CheckCircle2,
  Shield,
  FileText,
  ArrowRight,
  Award,
  Star,
  Target,
  Rocket,
  Sparkles,
} from 'lucide-react';

export default function MidoctoryaProposalPage() {

  return (
    <>
      <Header proposalData={midoctoryaProposalData} />

      <main className="max-w-6xl mx-auto px-6 mt-16 relative">
        <Hero proposalData={midoctoryaProposalData} />

        {/* ── 1. OBJETIVO ── */}
        <Objective proposalData={midoctoryaProposalData} />

        {/* ── 2. FLUJOGRAMA GRÁFICO ── */}
        <section id="flujo-interactivo" className="my-16">
          <MidoctoryaFlow />
        </section>

        {/* ── 3. VALOR REAL DE LA PROPUESTA ── */}
        <section className="my-16 p-8 md:p-16 rounded-[2.5rem] border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-amber-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full blur-[120px] opacity-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-300 rounded-full blur-[100px] opacity-15 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="flex justify-center mb-5">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] uppercase font-bold tracking-[0.25em] border bg-amber-100/80 text-amber-800 border-amber-300">
                <Award className="w-3.5 h-3.5" /> Valor de la Propuesta
              </span>
            </div>

            <h3 className="text-center font-bold text-slate-900 text-3xl md:text-4xl lg:text-5xl mb-4">
              Su Inversión como Socio Fundador
            </h3>

            <p className="text-center text-slate-600 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              MIDOCTORYA no es solo un desarrollo de software. Es la creación de una empresa de tecnología en salud.
              Como socio fundador, usted invierte en el desarrollo de la plataforma y cede el <strong>25%</strong> de las acciones al socio técnico, manteniendo el control mayoritario de la compañía.
            </p>

            {/* ── DOS COLUMNAS: $18M vs 25% ── */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Columna izquierda: Efectivo */}
              <div className="p-8 md:p-10 rounded-2xl bg-white border-2 border-blue-200 shadow-md text-center">
                <span className="text-[11px] uppercase font-bold tracking-widest text-blue-600 mb-3 block">
                  Inversión en Desarrollo
                </span>
                <p className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-2">
                  $18.000.000
                </p>
                <p className="text-sm text-slate-500 mb-5">
                  Pago único por la plataforma completa
                </p>
                <div className="text-left space-y-3 bg-blue-50/50 rounded-xl p-4 border border-blue-100">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">Plataforma web completa (buscador, perfiles, agenda, pagos, paneles)</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">App móvil iOS + Android con geolocalización y notificaciones</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">Plataforma completa: web, app móvil, base de datos, seguridad y todo listo para operar</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">Mantenimiento, soporte técnico y actualizaciones hasta que dure la sociedad</p>
                  </div>
                </div>
              </div>

              {/* Columna derecha: Participación */}
              <div className="p-8 md:p-10 rounded-2xl bg-white border-2 border-amber-200 shadow-md text-center">
                <span className="text-[11px] uppercase font-bold tracking-widest text-amber-600 mb-3 block">
                  Participación Accionaria
                </span>
                <p className="text-5xl md:text-6xl font-extrabold text-amber-600 mb-2">
                  25%
                </p>
                <p className="text-sm text-slate-500 mb-5">
                  De las acciones de MIDOCTORYA para el socio técnico
                </p>
                <div className="text-left space-y-3 bg-amber-50/50 rounded-xl p-4 border border-amber-100">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Dr. Wilmer</strong> mantiene el <strong>75%</strong> de las acciones — socio mayoritario con control estratégico y decisión final sobre el rumbo de la empresa.</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">Yo recibo el <strong>25%</strong> de las acciones como socio técnico — comprometido con el crecimiento, mantenimiento y evolución de la plataforma.</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">Al ser socio, no soy un contratista externo. Mi incentivo es que MIDOCTORYA crezca, porque mi renta depende del éxito del negocio.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── EXPLICACIÓN DEL 25% ── */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm mb-4">
              <h4 className="text-base font-bold text-slate-800 mb-4">¿Por qué el 25%?</h4>
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  <strong>1. Lo que vale el desarrollo.</strong> Una plataforma como esta —web, app móvil, backend, pagos—
                  cuesta entre <strong>$30 y $50 millones</strong> si la encargas a una agencia.
                  Al recibir $18M y el 25%, estoy poniendo parte de mi trabajo como capital en la sociedad, no como un cobro aparte.
                </p>
                <p>
                  <strong>2. Sin costos escondidos.</strong> Como socio, no cobro mantenimiento mensual, no cobro actualizaciones,
                  no cobro soporte. Mi ingreso futuro solo crece si MIDOCTORYA crece.
                  Eso me mantiene enfocado en que el negocio funcione.
                </p>
                <p>
                  <strong>3. Compromiso garantizado.</strong> Al recibir $18M y el 25%, estoy poniendo parte de mi trabajo como capital en la sociedad, no como un cobro aparte. Mi incentivo es el mismo que el tuyo: que MIDOCTORYA sea rentable.
                </p>
              </div>
            </div>

            {/* ── COMPARATIVA: SOCIO vs CONTRATISTA ── */}
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 shadow-sm relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-sm">A</div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-800">Contratar Desarrollo Externo</h5>
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Gasto operativo · Sin socio</span>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-slate-600">Inversión inicial</span>
                      <span className="font-bold text-slate-900">$30 - $50M</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-slate-600">Costo mensual recurrente</span>
                      <span className="font-bold text-slate-700">$2 - $3M / mes</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-slate-600">Actualizaciones y mejoras</span>
                      <span className="font-bold text-slate-700">$500K - $2M c/u</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-slate-600">¿Alguien impulsa el negocio?</span>
                      <span className="font-bold text-slate-500">No, entrega y se va</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block">Total primer año</span>
                    <span className="font-extrabold text-2xl text-slate-900">$54 - $86M</span>
                    <span className="text-xs text-slate-500 ml-1">y al 100% de su bolsillo</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border-2 border-amber-200 shadow-sm relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-sm">B</div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-800">Modelo de Socio (25%)</h5>
                      <span className="text-[10px] text-amber-600 font-bold uppercase tracking-wider">Inversión única · Socio comprometido</span>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-slate-600">Inversión inicial</span>
                      <span className="font-bold text-amber-600">$18M (único pago)</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-slate-600">Costo mensual recurrente</span>
                      <span className="font-bold text-green-600">$0 / mes</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-slate-600">Actualizaciones y mejoras</span>
                      <span className="font-bold text-green-600">$0</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-slate-600">¿Alguien impulsa el negocio?</span>
                      <span className="font-bold text-amber-600">Sí, un socio dedicado</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-100">
                    <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider block">Inversión total única</span>
                    <span className="font-extrabold text-2xl text-slate-900">$18M</span>
                    <span className="text-xs text-slate-500 ml-1">y un socio que trabaja para que la empresa crezca</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-blue-50 border border-blue-200 text-sm text-blue-800 mb-6">
              <strong>Importante:</strong> El 25% no es un sueldo mensual. Es participación accionaria.
              Si la empresa genera utilidades, se reparten según el porcentaje de cada socio.
              Si MIDOCTORYA crece, el valor de su 75% crece más que cualquier ahorro mensual.
              La diferencia clave: un contratista cobra y se va — un socio se queda y trabaja <strong>para que el negocio sea rentable</strong>.
            </div>

            {/* Resumen visual */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white text-center shadow-xl border border-blue-800/50">
              <p className="text-sm font-bold uppercase tracking-wider mb-1">
                Resumen de la Sociedad
              </p>
              <p className="text-base font-semibold">
                Dr. Wilmer: <strong>75%</strong> · Inversión: <strong>$18.000.000</strong> · Costos operativos + ventas + marketing
              </p>
              <p className="text-sm opacity-90 mt-1">
                Yo (socio técnico): <strong>25%</strong> · Plataforma completa + mantenimiento hasta que dure la sociedad + dirección técnica (CTO)
              </p>
              <p className="text-[11px] text-blue-200/70 mt-2 max-w-xl mx-auto">
                La plataforma y el código fuente son propiedad de MIDOCTORYA SAS, no del Dr. ni del socio técnico a título personal. Es un activo de la empresa.
              </p>
            </div>
          </div>
        </section>

        {/* ── 4. BENEFICIOS DEL MODELO MIDOCTORYA ── */}
        <section className="my-16 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50">
          <div className="flex justify-center mb-5">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] uppercase font-bold tracking-[0.25em] border bg-blue-50/60 text-blue-700 border-blue-200/80">
              <Sparkles className="w-3.5 h-3.5" /> Beneficios del Modelo
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            ¿Por qué este modelo funciona para todos?
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-800 mb-2">Para el Dr. Wilmer</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Socio mayoritario con control estratégico. Plataforma lista para operar a una fracción del costo de mercado.
                Un aliado técnico comprometido con el éxito del negocio, no un contratista más.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-4">
                <Star className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-800 mb-2">Para los Médicos</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Vitrina digital para mostrar su perfil y experiencia. Agenda gestionada y pagos automatizados.
                Llegan nuevos pacientes sin invertir en publicidad. Sin compromisos ni exclusividad.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-800 mb-2">Para los Pacientes</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Encontrar especialistas cerca, conocer sus precios y horarios, agendar y pagar desde el celular.
                Sin llamadas, sin filas de espera, sin perder medio día.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
                <Rocket className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-800 mb-2">Para el Negocio</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Modelo de ingresos recurrentes: comisión por consulta + suscripción de médicos.
                Escalable geográficamente. Preparado para expansión a otras ciudades y países.
              </p>
            </div>
          </div>
        </section>

        {/* ── 5. HITOS + GARANTÍA + CONDICIONES ── */}
        <section className="my-16">
          <div className="flex justify-center mb-5">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] uppercase font-bold tracking-[0.25em] border bg-indigo-50/60 text-indigo-700 border-indigo-200/80">
              <FileText className="w-3.5 h-3.5" /> Plan de Trabajo y Condiciones
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* Hito 1 */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white relative">
              <span className="absolute -top-3 left-6 px-3 py-0.5 bg-blue-600 text-white text-[9px] uppercase font-bold rounded-full tracking-widest">Hito 1</span>
              <div className="mt-3">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 mb-3 block">Arranque</span>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                    Arquitectura de la plataforma definida
                  </li>
                  <li className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                    Base de datos diseñada e implementada
                  </li>
                  <li className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                    Cuentas cloud y dominio configurados
                  </li>
                  <li className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                    Cronograma detallado de trabajo
                  </li>
                </ul>
              </div>
            </div>

            {/* Hito 2 */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white relative">
              <span className="absolute -top-3 left-6 px-3 py-0.5 bg-indigo-600 text-white text-[9px] uppercase font-bold rounded-full tracking-widest">Hito 2</span>
              <div className="mt-3">
                <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-600 mb-3 block">Plataforma Web</span>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                    Landing page y buscador de médicos
                  </li>
                  <li className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                    Perfiles de médicos con agenda y precios
                  </li>
                  <li className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                    Sistema de pagos con Wompi integrado
                  </li>
                  <li className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                    Paneles de control (médico, paciente, admin)
                  </li>
                </ul>
              </div>
            </div>

            {/* Hito 3 */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white relative">
              <span className="absolute -top-3 left-6 px-3 py-0.5 bg-green-600 text-white text-[9px] uppercase font-bold rounded-full tracking-widest">Hito 3</span>
              <div className="mt-3">
                <span className="text-[10px] uppercase font-bold tracking-widest text-green-600 mb-3 block">App + Lanzamiento</span>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                    App móvil iOS + Android publicada
                  </li>
                  <li className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                    Todo sincronizado y en producción
                  </li>
                  <li className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                    Médicos cargados y plataforma operativa
                  </li>
                  <li className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                    Soporte y ajustes post-lanzamiento
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Time bar */}
          <div className="mb-10 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between text-xs text-slate-600 mb-3">
              <span className="font-bold text-slate-800">Tiempo estimado: 10 semanas</span>
              <span className="text-slate-400">Semana 0 → Semana 10</span>
            </div>
            <div className="h-2 rounded-full bg-slate-200 flex overflow-hidden">
              <div className="h-full bg-blue-500 rounded-l-full" style={{ width: '15%' }} />
              <div className="h-full bg-indigo-500" style={{ width: '40%' }} />
              <div className="h-full bg-green-500 rounded-r-full" style={{ width: '45%' }} />
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>Hito 1</span>
              <span>Hito 2</span>
              <span>Hito 3</span>
            </div>
          </div>

          {/* Garantía */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-green-600" />
                <h4 className="text-sm font-bold text-slate-800">Garantía del Desarrollo</h4>
              </div>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                  Todo el código fuente es propiedad de MIDOCTORYA SAS
                </li>
                <li className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                  Garantía de funcionamiento por 30 días post-entrega
                </li>
                <li className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                  Corrección de errores sin costo durante el primer año
                </li>
                <li className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                  Corrección de errores sin costo durante el primer año
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-blue-600" />
                <h4 className="text-sm font-bold text-slate-800">Condiciones de la Propuesta</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-sm text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">1</div>
                  <div>
                    <span className="font-bold text-slate-800 text-sm">Creación de la empresa</span>
                    <p className="text-xs text-slate-500 mt-0.5">MIDOCTORYA SAS debe estar constituida legalmente antes de iniciar el desarrollo. Esto lo gestiona su abogado.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">2</div>
                  <div>
                    <span className="font-bold text-slate-800 text-sm">Cuentas y recursos</span>
                    <p className="text-xs text-slate-500 mt-0.5">El Dr. provee: dominio midoctorya.com.co, acceso a Wompi y los costos operativos de la empresa. Las cuentas de desarrollador para publicar la app corren por mi cuenta como socio técnico.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">3</div>
                  <div>
                    <span className="font-bold text-slate-800 text-sm">Documentación legal</span>
                    <p className="text-xs text-slate-500 mt-0.5">Términos y condiciones, política de datos (Ley 1581), contratos con médicos y registro SIC son responsabilidad del abogado de MIDOCTORYA.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">4</div>
                  <div>
                    <span className="font-bold text-slate-800 text-sm">Límite de responsabilidad</span>
                    <p className="text-xs text-slate-500 mt-0.5">El desarrollador no se hace responsable por temas legales, regulatorios o de facturación electrónica. Es responsabilidad del abogado y contador de MIDOCTORYA SAS.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Condiciones de sociedad */}
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white border border-blue-800/50 shadow-xl">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-300" />
              Acuerdo de Sociedad
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <ArrowRight className="w-3.5 h-3.5 text-blue-300 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-100">Dr. Wilmer — 75% acciones</span>
                    <p className="text-[10px] text-blue-200/70">Inversión inicial, costos operativos, ventas, marketing, abogado</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <ArrowRight className="w-3.5 h-3.5 text-blue-300 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-100">Yo (socio técnico) — 25% acciones</span>
                    <p className="text-[10px] text-blue-200/70">Desarrollo completo, mantenimiento, CTO, dirección técnica</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <ArrowRight className="w-3.5 h-3.5 text-blue-300 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-100">Vesting</span>
                    <p className="text-[10px] text-blue-200/70">4 años con 1 año de periodo de prueba (cliff)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <ArrowRight className="w-3.5 h-3.5 text-blue-300 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-100">Gobierno</span>
                    <p className="text-[10px] text-blue-200/70">Decisiones técnicas: CTO. Decisiones financieras: ambos aprueban</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRÓXIMOS PASOS ── */}
        <section className="my-16">
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-slate-50 to-white border border-slate-200 text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-5">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] uppercase font-bold tracking-[0.25em] border bg-slate-100/80 text-slate-600 border-slate-300">
                <FileText className="w-3.5 h-3.5" /> Próximos Pasos
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              ¿Siguiente paso?
            </h3>
            <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-8">
              Esta propuesta es el punto de partida. Una vez que estés de acuerdo con los términos generales,
              agendamos una reunión presencial para definir el acuerdo de sociedad, revisar la letra pequeña
              y firmar el contrato que formalice todo.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-left">
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-3 font-bold text-xs">1</div>
                <h4 className="text-sm font-bold text-slate-800 mb-1">Acuerdo de sociedad</h4>
                <p className="text-[11px] text-slate-500">Vesting, gobierno corporativo, distribución de utilidades y participación accionaria</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mb-3 font-bold text-xs">2</div>
                <h4 className="text-sm font-bold text-slate-800 mb-1">Plan de trabajo</h4>
                <p className="text-[11px] text-slate-500">Cronograma detallado, hitos de pago y fechas de entrega</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-3 font-bold text-xs">3</div>
                <h4 className="text-sm font-bold text-slate-800 mb-1">Firma y arranque</h4>
                <p className="text-[11px] text-slate-500">Constitución de MIDOCTORYA SAS e inicio del desarrollo</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── BENEFITS COMPONENT ── */}
        <section id="benefits">
          <Benefits proposalData={midoctoryaProposalData} />
        </section>
      </main>

      <Footer proposalData={midoctoryaProposalData} />
    </>
  );
}
