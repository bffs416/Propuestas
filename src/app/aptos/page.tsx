'use client';

import { useEffect, useState } from 'react';
import {
  Target, Bot, Shield, BarChart, Calendar,
  Eye, Award, TrendingUp, Heart, ChevronDown,
  ExternalLink, Sparkles, AlertCircle, CheckCircle2,
  Video, Laptop, Users, GraduationCap, Wrench, Settings,
  Activity, Truck
} from 'lucide-react';

export default function AptosPage() {
  const [mounted, setMounted] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    // Scroll reveal observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [mounted]);

  if (!mounted) return null;

  const steps = [
    {
      title: "1. Captación Profesional",
      subtitle: "Atracción & Congresos",
      description: "Captura digital de médicos en congresos nacionales o campañas online. En vez de hojas sueltas o tarjetas físicas, los leads se integran automáticamente en la base centralizada en tiempo real.",
      icon: <Users className="w-5 h-5" />,
      badge: "Captación B2B"
    },
    {
      title: "2. Calificación & Filtro",
      subtitle: "Agente IA 24/7",
      description: "El Agente de IA califica al especialista, verifica sus credenciales médicas (Rethus, especialidad) y le presenta la inducción técnica de hilos o dispositivos médicos estéticos.",
      icon: <Bot className="w-5 h-5" />,
      badge: "Pre-Filtro Inteligente"
    },
    {
      title: "3. Taller Hands-On",
      subtitle: "Certificación Práctica",
      description: "Programación automatizada de talleres de certificación. El CRM notifica al médico, envía recordatorios automáticos de asistencia y gestiona la logística de insumos y equipos necesarios para la práctica.",
      icon: <GraduationCap className="w-5 h-5" />,
      badge: "Educación Continua"
    },
    {
      title: "4. Soporte en Quirófano",
      subtitle: "Acompañamiento Clínico",
      description: "Asistencia en el consultorio o quirófano del médico durante sus primeros casos reales de hilos tensores o tecnologías. Aseguramos su confianza técnica en la aplicación clínica del dispositivo.",
      icon: <Shield className="w-5 h-5" />,
      badge: "Post-Venta Técnica"
    },
    {
      title: "5. Activación de Sell-Out",
      subtitle: "Recompra y Demanda",
      description: "Entrega de kits de marketing digital y recursos audiovisuales para que el médico promocione el tratamiento. Aceleramos su sell-out para generar pedidos recurrentes de hilos o consumibles de dispositivos.",
      icon: <TrendingUp className="w-5 h-5" />,
      badge: "Escala de Ventas"
    }
  ];

  return (
    <div className="min-h-screen relative text-slate-800 antialiased font-outfit">
      {/* ─── FONDO DE CANVAS DINÁMICO ─── */}
      <div className="bg-canvas">
        <div className="bg-mesh-container">
          <div className="dynamic-blob blob-blue" style={{ background: 'radial-gradient(circle, rgba(37, 99, 235, 0.25) 0%, rgba(29, 78, 216, 0.05) 100%)' }} />
          <div className="dynamic-blob blob-purple" style={{ background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, rgba(107, 33, 168, 0.02) 100%)' }} />
          <div className="dynamic-blob blob-cyan" style={{ background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(13, 148, 136, 0.02) 100%)' }} />
        </div>
        <div className="grid-pattern" />
        <div className="noise" />
      </div>

      {/* ─── HEADER / NAVBAR FLOTANTE DE VIDRIO ─── */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl glass-header rounded-2xl shadow-xl transition-all duration-300">
        <div className="px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-black tracking-wider bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
            FF
          </span>
          <div className="flex items-center gap-6 text-xs font-semibold text-slate-600">
            <a href="#video" className="hover:text-blue-600 transition-colors">Video</a>
            <a href="#diagnostico" className="hover:text-blue-600 transition-colors">Diagnóstico</a>
            <a href="#solucion" className="hover:text-blue-600 transition-colors">Servicios B2B</a>
            <a href="#capacitacion" className="hover:text-blue-600 transition-colors">Método</a>
            <a href="#sobre-mi" className="hover:text-blue-600 transition-colors">Trayectoria</a>
            <a
              href="https://wa.me/573004570442?text=Hola%20Felipe,%20me%20gustaría%20agendar%20una%20reunión%20técnica%20sobre%20la%20propuesta%20de%20Aptos%20y%20Dispositivos."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-white text-xs font-bold transition-all duration-300 hover:scale-[1.05] active:scale-[0.95] hover:shadow-lg hover:shadow-blue-500/25"
              style={{ background: 'linear-gradient(135deg, #2563eb, #0891b2)', boxShadow: '0 4px 15px rgba(37,99,235,0.2)' }}
            >
              Agendar reunión
            </a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="min-h-screen flex flex-col justify-center relative px-6 max-w-5xl mx-auto pt-28 pb-16">
        <div className="flex flex-wrap gap-3 mb-8 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-100/50 backdrop-blur-sm shadow-sm hover:scale-[1.03] transition-transform duration-300">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[11px] font-bold text-blue-700 uppercase tracking-widest">
              Aesthetic B2B Distribution
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-50/80 border border-indigo-100/50 backdrop-blur-sm shadow-sm hover:scale-[1.03] transition-transform duration-300">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span className="text-[11px] font-semibold text-indigo-700 uppercase tracking-widest">
              Hilos & Dispositivos Médicos
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-8xl font-black mb-6 leading-none tracking-tight reveal" style={{ transitionDelay: '0.1s' }}>
          <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-600 bg-clip-text text-transparent">
            Felipe Franco
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-slate-500 max-w-3xl font-light leading-relaxed mb-6 reveal" style={{ transitionDelay: '0.2s' }}>
          Infraestructura comercial digital, CRM y modelos de capacitación avanzados para distribuidores de hilos tensores y dispositivos médicos estéticos.
        </p>
        
        <div className="max-w-3xl border-l-4 border-blue-500 pl-6 py-4 my-6 bg-blue-50/30 backdrop-blur-sm rounded-r-2xl pr-4 reveal hover:bg-blue-50/40 transition-colors duration-300" style={{ transitionDelay: '0.3s' }}>
          <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed italic">
            &ldquo;No se trata de softwares aislados. Es un ecosistema integrado que automatiza el proceso de certificación técnica de médicos, optimiza el soporte post-venta clínico y acelera la recompra recurrente de insumos y tecnologías.&rdquo;
          </p>
        </div>

        <div className="mt-16 flex flex-col items-center text-slate-400 reveal" style={{ transitionDelay: '0.4s' }}>
          <span className="text-[10px] uppercase tracking-[0.4em] mb-3 font-semibold">
            Conoce mi propuesta
          </span>
          <ChevronDown className="w-5 h-5 scroll-indicator text-blue-500" />
        </div>
      </section>

      {/* ─── VIDEO RESUMEN DE ALTA GAMA ─── */}
      <section className="py-20 px-6 max-w-5xl mx-auto reveal" id="video">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-blue-600 mb-2 block">
            Video Resumen
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            La infraestructura en 1 minuto
          </h2>
        </div>

        <div
          className="w-full max-w-[400px] mx-auto aspect-[9/16] rounded-3xl border border-slate-200/60 bg-slate-950 flex items-center justify-center cursor-pointer transition-all duration-500 hover:shadow-2xl shadow-xl overflow-hidden relative group"
          style={{ boxShadow: '0 25px 60px -15px rgba(37,99,235,0.15)' }}
          onClick={() => setVideoReady(true)}
        >
          {videoReady ? (
            <video controls autoPlay className="w-full h-full object-cover">
              <source src="/Portafolio.mp4" type="video/mp4" />
            </video>
          ) : (
            <div className="text-center p-8 z-10 transition-transform duration-500 group-hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-white/10 group-hover:bg-blue-600/90 text-white flex items-center justify-center mx-auto mb-6 shadow-md transition-all duration-300">
                <svg className="w-6 h-6 ml-1 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white text-sm font-medium">
                Haz clic para ver el video interactivo
              </p>
              <p className="text-white/40 text-xs mt-2 font-light">
                Portafolio.mp4 (cargado localmente)
              </p>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />
        </div>
      </section>

      {/* ─── DIAGNÓSTICO B2B (EL PROBLEMA) ─── */}
      <section className="py-28 px-6 max-w-5xl mx-auto reveal" id="diagnostico">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-blue-600 mb-2 block">
              El Diagnóstico B2B
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Desafíos comerciales en la distribución médico-estética
            </h2>
            <div className="text-slate-600 space-y-6 font-light leading-relaxed text-lg md:text-xl">
              <p>
                He liderado la dirección de ventas y producto en la industria B2B de estética. Sé perfectamente que el obstáculo principal radica en <strong>la fragmentación del contacto y la falta de un seguimiento post-venta estructurado</strong> al especialista.
              </p>
              <p>
                Las marcas invierten grandes sumas en congresos, patrocinios y entrenamientos hands-on. Sin embargo, los leads de médicos nuevos se enfrían, las certificaciones técnicas se retrasan y el soporte clínico o técnico post-venta se vuelve lento, frenando la compra recurrente de hilos y consumibles.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {[
              {
                icon: <AlertCircle className="w-6 h-6" />,
                title: "Leads de médicos desatendidos",
                desc: "Especialistas interesados en hilos o dispositivos que se enfrían post-evento por falta de una distribución automática e inmediata al representante comercial de la zona.",
                color: "border-red-100/50 bg-white/70 text-red-500"
              },
              {
                icon: <GraduationCap className="w-6 h-6" />,
                title: "Capacitaciones y certificaciones lentas",
                desc: "Talleres hands-on programados manualmente en Excel. La falta de trazabilidad digital retrasa la habilitación del médico para comprar y usar la tecnología o los hilos.",
                color: "border-amber-100/50 bg-white/70 text-amber-500"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Cuentas médicas descentralizadas",
                desc: "El historial de compras de consumibles, inquietudes clínicas del especialista e interacciones de valor quedan atrapadas en los WhatsApp personales de cada vendedor.",
                color: "border-blue-100/50 bg-white/70 text-blue-600"
              },
              {
                icon: <BarChart className="w-6 h-6" />,
                title: "Retorno de eventos sin trazabilidad",
                desc: "Grandes inversiones en congresos sin un embudo digital integrado para saber con exactitud cuántos médicos nuevos se activaron y compraron post-congreso.",
                color: "border-indigo-100/50 bg-white/70 text-indigo-600"
              },
              {
                icon: <Wrench className="w-6 h-6" />,
                title: "Post-venta clínico y técnico desconectado",
                desc: "La falta de acompañamiento en el primer caso real del médico y las demoras en el soporte preventivo de dispositivos reducen drásticamente la fidelización y recompra.",
                color: "border-emerald-100/50 bg-emerald-50/10 text-emerald-600"
              }
            ].map((prob, idx) => (
              <div
                key={idx}
                className={`p-6 md:p-8 rounded-2xl border backdrop-blur-md shadow-sm flex items-start gap-5 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 reveal`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 shadow-sm ${prob.color}`}>
                  {prob.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1.5 text-lg md:text-xl">{prob.title}</h4>
                  <p className="text-sm md:text-base text-slate-500 font-light leading-relaxed">{prob.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOLUCIÓN INTEGRADORA B2B ─── */}
      <section className="py-28 px-6 bg-slate-50/50 backdrop-blur-md border-y border-slate-100 reveal" id="solucion">
        <div className="max-w-5xl mx-auto">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-blue-600 mb-2 block">
            La Solución
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
            Ecosistema de distribución integrado y escalable
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mb-16 font-light leading-relaxed">
            He diseñado un sistema digital integral para fabricantes y distribuidores de medicina estética. Conectamos la captación de médicos especialistas, la calificación, la certificación clínica y el servicio post-venta en un solo flujo comercial estructurado.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Laptop className="w-6 h-6" />,
                title: 'Portal B2B & Captación',
                desc: 'Plataforma web profesional orientada a captar, educar y calificar a médicos cirujanos, dermatólogos y especialistas de todo el país.',
                color: 'text-blue-600',
                bg: 'bg-blue-50/80 border-blue-100',
              },
              {
                icon: <Bot className="w-6 h-6" />,
                title: 'Calificador Técnico IA 24/7',
                desc: 'Agente de IA en WhatsApp y web que responde preguntas técnicas de hilos y tecnologías, filtra perfiles profesionales e integra de inmediato al comercial de zona.',
                color: 'text-purple-600',
                bg: 'bg-purple-50/80 border-purple-100',
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: 'CRM de Certificación B2B',
                desc: 'CRM a la medida para distribución médica: controla habilitaciones de médicos, ventas de insumos, stock comercial y trazabilidad técnica, integrado con SIIGO / ERP.',
                color: 'text-indigo-600',
                bg: 'bg-indigo-50/80 border-indigo-100',
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                title: 'Gestor de Workshops Automático',
                desc: 'Programación de talleres hands-on, envío de confirmaciones automáticas de asistencia y recordatorios para asegurar la asistencia de los médicos inscritos.',
                color: 'text-emerald-600',
                bg: 'bg-emerald-50/80 border-emerald-100',
              },
              {
                icon: <Activity className="w-6 h-6" />,
                title: 'Servicio Post-Venta Clínico y Técnico',
                desc: 'Acompañamiento en los primeros casos en quirófano de los médicos para asegurar la técnica correcta y programación de mantenimiento preventivo de equipos.',
                color: 'text-amber-600',
                bg: 'bg-amber-50/80 border-amber-100',
              },
              {
                icon: <Eye className="w-6 h-6" />,
                title: 'Simuladores y Anatomía 3D',
                desc: 'Presentaciones interactivas 3D de vectores y planos anatómicos para explicar de forma visual la colocación de hilos y el alcance de las tecnologías en consulta.',
                color: 'text-cyan-600',
                bg: 'bg-cyan-50/80 border-cyan-100',
              },
              {
                icon: <Video className="w-6 h-6" />,
                title: 'Videos Académicos & Sell-Out',
                desc: 'Producción de videos de alta calidad de casos clínicos e inyección/inserción técnica, además de material de marketing digital para impulsar el sell-out del médico.',
                color: 'text-rose-600',
                bg: 'bg-rose-50/80 border-rose-100',
              },
            ].map((s, i) => (
              <div
                key={i}
                className="service-card hyperglass p-8 rounded-2xl border transition-all duration-500 flex flex-col justify-between reveal"
                style={{ borderColor: 'rgba(148,163,184,0.15)', transitionDelay: `${i * 0.05}s` }}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm ${s.bg} ${s.color}`}>
                    {s.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-slate-900">{s.title}</h3>
                  <p className="text-sm md:text-base text-slate-500 leading-relaxed font-light">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE CAPACITACIÓN & MÉTODOS STEPPER ─── */}
      <section className="py-28 px-6 max-w-5xl mx-auto reveal" id="capacitacion">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-blue-600 mb-2 block">
            El Flujo de Activación
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Embudo de Capacitación B2B y Post-Venta
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-light">
            Haz clic en cada etapa para ver cómo llevamos al médico especialista desde el primer contacto hasta la recompra recurrente y exitosa.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center bg-white/40 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-slate-100 shadow-xl">
          {/* Stepper Navigation */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-4 border ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md translate-x-2'
                      : 'bg-white/50 text-slate-700 border-slate-100 hover:bg-white/80 hover:translate-x-1'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    isActive ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600'
                  }`}>
                    {step.icon}
                  </div>
                  <div>
                    <span className={`text-[10px] uppercase tracking-wider block font-bold ${
                      isActive ? 'text-blue-100' : 'text-blue-600'
                    }`}>
                      {step.badge}
                    </span>
                    <span className="text-sm font-bold block leading-tight">{step.title}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Stepper Content Display */}
          <div className="lg:col-span-7 h-full flex flex-col justify-center p-6 md:p-10 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl relative overflow-hidden min-h-[300px]">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-6 transition-all duration-500 ease-out transform translate-y-0 opacity-100">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-semibold">
                {steps[activeStep].badge}
              </div>
              <div>
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider block mb-1">
                  {steps[activeStep].subtitle}
                </span>
                <h3 className="text-2xl md:text-3xl font-black">{steps[activeStep].title}</h3>
              </div>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light">
                {steps[activeStep].description}
              </p>
              
              <div className="pt-4 border-t border-white/10 flex items-center gap-3 text-xs text-slate-400 font-light">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Controlado e integrado digitalmente mediante el CRM.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── QUÉ LOGRAMOS (RESULTADOS DE ALTO IMPACTO) ─── */}
      <section className="py-28 px-6 max-w-5xl mx-auto reveal">
        <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-blue-600 mb-2 block">
          Resultados B2B
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-14 text-slate-900 leading-tight">
          ¿Qué logramos con este ecosistema corporativo?
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: <Target className="w-5 h-5" />, highlight: 'Seguimiento garantizado', desc: 'Cada lead de médico especialista que llega de congresos o canales digitales tiene una asignación y seguimiento comercial instantáneo.' },
            { icon: <Eye className="w-5 h-5" />, highlight: 'Soporte y recursos claros', desc: 'Los médicos certificados disponen de videos técnicos, vectores 3D y materiales de marketing de sell-out listos para su uso.' },
            { icon: <Calendar className="w-5 h-5" />, highlight: 'Control total de workshops', desc: 'Cada taller hands-on y curso de certificación cuenta con registro digital de asistencia, alertas automáticas y encuestas de satisfacción.' },
            { icon: <Shield className="w-5 h-5" />, highlight: 'Trazabilidad y control legal', desc: 'Control centralizado de credenciales de especialistas, consentimientos informados de demostración y aprobaciones de marca.' },
            { icon: <TrendingUp className="w-5 h-5" />, highlight: 'Embudo de recompra B2B', desc: 'La finalización de la capacitación técnica activa una secuencia de activación que guía al médico hasta la compra recurrente de hilos o consumibles.' },
            { icon: <Wrench className="w-5 h-5" />, highlight: 'Soporte post-venta simplificado', desc: 'Centralización de solicitudes de acompañamiento clínico y reportes de mantenimiento correctivo/preventivo de dispositivos médicos.' },
          ].map((item, i) => (
            <div key={i} className="hyperglass p-6 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 flex gap-5 items-start reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
              <div className="w-12 h-12 rounded-xl bg-blue-50/80 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  {item.highlight}
                </h4>
                <p className="text-sm md:text-base text-slate-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SOBRE MÍ (TRAYECTORIA CORPORATIVA Y RED MÉDICA) ─── */}
      <section className="py-28 px-6 bg-slate-900 text-white relative overflow-hidden reveal" id="sobre-mi">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.12),transparent_50%)]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-6">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-amber-400 block">
                Trayectoria & Negocio B2B
              </span>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Detrás del sistema
              </h2>

              <div className="space-y-5 text-slate-300 font-light leading-relaxed text-base md:text-lg">
                <p>
                  Soy <strong>instrumentador quirúrgico de profesión</strong>. Me desempeñé como <strong>Director de Ventas y Producto de HansBiomed</strong>, marca global de primer nivel que comercializa hilos tensores (MINT Lift), implantes capilares, cosmecéuticos de alta gama y skinboosters.
                </p>
                <p>
                  Además de mi rol comercial y de producto, poseo un trasfondo técnico riguroso con amplia experiencia en <strong>capacitación intraquirúrgica</strong> para dispositivos y tecnologías médicas de gigantes globales como <strong>Karl Storz</strong>, <strong>Smith & Nephew</strong> y <strong>Mathys</strong>.
                </p>
                <p>
                  A lo largo de mi trayectoria he construido una sólida relación de confianza técnica y comercial con cirujanos plásticos, dermatólogos y médicos estéticos a nivel nacional. Conozco en detalle el modelo de negocio B2B, la logística de importación, y el rigor necesario para dar soporte clínico e instrumental dentro y fuera del quirófano.
                </p>
                <p className="text-white border-l-4 border-amber-400 pl-6 italic bg-white/5 py-4 rounded-r-lg font-medium pr-4">
                  &ldquo;He diseñado e implementado modelos de capacitación avanzada que elevaron los procesos de entrenamiento práctico y las ventas de insumos y equipos estéticos a otros niveles. No soy un programador externo vendiendo software; entiendo el negocio de la distribución médico-estética desde adentro.&rdquo;
                </p>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl relative overflow-hidden hover:border-amber-400/30 transition-all duration-500">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                <h4 className="font-bold text-xl mb-4 text-amber-400">¿Por qué trabajar con Felipe Franco?</h4>
                <ul className="space-y-4 text-sm text-slate-300 font-light">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Ex-Director de Ventas y Producto</strong> en HansBiomed (Hilos, Implantes, Skinboosters, Equipos)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Capacitación Intraquirúrgica</strong> (Experiencia con Karl Storz, Smith & Nephew, y Mathys)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Modelos de Capacitación Avanzados</strong> (Hands-on de alto rendimiento comercial y sell-out)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Red de Especialistas Nacional</strong> (Acceso directo a dermatólogos y cirujanos plásticos en el país)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Soporte Técnico & Clínico</strong> (Acompañamiento en quirófano, logística ágil de insumos y consumibles)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL (TARJETA DE CONVERSIÓN FLOTANTE) ─── */}
      <section className="py-28 px-6 relative overflow-hidden bg-slate-50/30 backdrop-blur-md reveal">
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-blue-600 mb-2 block">
            Hablemos de Negocio B2B
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 leading-tight">
            ¿Agendamos una reunión técnica?
          </h2>
          <p className="text-lg md:text-xl text-slate-500 mb-10 font-light leading-relaxed max-w-2xl mx-auto">
            ¿Te parece si agendamos una breve sesión virtual para mostrarte cómo mi experiencia en el sector médico-estético y este ecosistema digital impulsarán las metas comerciales de <strong>APTOS</strong> e impulsarán la rotación de tus tecnologías?
          </p>
          <a
            href="https://wa.me/573004570442?text=Hola%20Felipe,%20me%20gustaría%20agendar%20la%20reunión%20técnica%20sobre%20la%20propuesta%20de%20Aptos%20y%20Dispositivos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-white font-bold text-base transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-xl hover:shadow-blue-500/35"
            style={{
              background: 'linear-gradient(135deg, #2563eb, #0891b2)',
              boxShadow: '0 10px 30px rgba(37,99,235,0.3)',
            }}
          >
            Agendar reunión técnica B2B
            <ExternalLink className="w-5 h-5" />
          </a>
          <p className="text-xs text-slate-400 mt-5 font-light">
            Atención prioritaria para laboratorios y fabricantes estéticos · Bogotá, Colombia
          </p>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-12 px-6 text-center border-t border-slate-200/50">
        <p className="text-xs font-light text-slate-400">
          Felipe Franco · Ecosistemas de Distribución B2B para Hilos y Dispositivos Médicos Estéticos
        </p>
      </footer>
    </div>
  );
}
