'use client';

import { useState } from 'react';
import { 
  Compass, Eye, Play, Film, Smartphone, Monitor, Sparkles, 
  Layers, MapPin, CheckCircle2, ChevronRight, Maximize2, RotateCw, Volume2, ShieldCheck, Zap
} from 'lucide-react';

import Video4KShowcase from '@/components/landing/video-4k-showcase';
import WebVideoShowcase from '@/components/landing/web-video-showcase';

export default function MultimediaViewer() {
  const [activeTab, setActiveTab] = useState<'360' | 'video' | 'web'>('360');
  
  // States for 360 Simulator
  const [activeHotspot, setActiveHotspot] = useState<number | null>(1);
  const [rotationAngle, setRotationAngle] = useState(0);

  // States for Video Simulator
  const [videoFormat, setVideoFormat] = useState<'16:9' | '9:16'>('16:9');
  const [isPlaying, setIsPlaying] = useState(false);

  // States for Web Simulator
  const [webTab, setWebTab] = useState<'home' | 'tour' | 'contacto'>('home');

  const hotspots = [
    { id: 1, x: '35%', y: '45%', title: 'Punto de Interés #1: Hall Principal', desc: 'Captura HDR 360° en 8K con ficha técnica interactiva flotante.' },
    { id: 2, x: '65%', y: '35%', title: 'Punto de Interés #2: Zona de Exhibición / Renders', desc: 'Enlace directo a catálogo digital y reproductor de video promocional.' },
    { id: 3, x: '50%', y: '70%', title: 'Punto de Interés #3: Dollhouse & Plano 3D', desc: 'Navegación interactiva 3D con cambio de piso instantáneo.' },
  ];

  const scenes = [
    { title: 'Tomas de Dron Aéreo 4K', time: '00:00 - 00:25', desc: 'Perspectiva cinemática exterior con corrección de color profesional.' },
    { title: 'Recorrido Interactivo Interno', time: '00:25 - 00:55', desc: 'Tomas fluidas con estabilizador Gimbal de 3 ejes y lente ultra gran angular.' },
    { title: 'Reel Vertical (9:16 TikTok / Instagram)', time: '00:55 - 01:30', desc: 'Cortes rápidos con ritmo dinámico, subtítulos animados y música licenciada.' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto my-8" id="simulador-multimedia">
      {/* Clean Header Badge */}
      <div className="flex items-center justify-between gap-4 mb-4 bg-white/90 p-3.5 rounded-2xl border border-slate-200/90 backdrop-blur-xl shadow-md">
        <div className="flex items-center gap-2.5 px-3 font-outfit">
          <Sparkles className="w-5 h-5 text-sky-600 animate-pulse" />
          <span className="font-extrabold text-xs md:text-sm uppercase tracking-wider text-slate-800">
            Visor de Recorridos Virtuales 360° en Vivo
          </span>
        </div>
        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 font-extrabold text-xs px-3.5 py-1 rounded-full border border-emerald-200">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          Tecnología VR Ready
        </div>
      </div>

      {/* Main Display Canvas */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden relative p-3 md:p-5">
        
        {/* TAB 1: 360 TOUR SIMULATOR & LIVE PORTFOLIO */}
        {activeTab === '360' && (
          <div className="relative flex flex-col justify-between overflow-hidden space-y-3">
            {/* Top Bar Controls */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 bg-slate-900 px-5 py-3 rounded-2xl border border-slate-800 shadow-md">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-white text-xs font-extrabold tracking-wider">PORTAFOLIO RECORRIDOS 360° EN VIVO</span>
              </div>
              
              <div className="flex items-center gap-2">
                <a
                  href="https://nyvaragroup.com/portafolio-360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-sky-300 hover:text-white bg-sky-950 hover:bg-sky-900 px-3.5 py-1.5 rounded-xl border border-sky-800 font-bold transition-all"
                >
                  <Maximize2 className="w-3.5 h-3.5" /> Abrir Portafolio 360° en Web ↗
                </a>
              </div>
            </div>

            {/* Live Interactive iframe with panoramic aspect ratio - Expanded Large View */}
            <div className="relative z-10 w-full rounded-2xl overflow-hidden border border-slate-300 shadow-2xl bg-black min-h-[600px] md:min-h-[780px] lg:min-h-[840px]">
              <iframe
                src="https://nyvaragroup.com/portafolio-360"
                className="w-full h-[600px] md:h-[780px] lg:h-[840px] border-0 rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; xr-spatial-tracking; fullscreen"
                allowFullScreen
                title="Portafolio 360° Nyvara Group"
              />
            </div>

            {/* Bottom Controls Bar */}
            <div className="relative z-10 bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs text-slate-700 font-medium">
                <Compass className="w-5 h-5 text-sky-600 animate-spin" style={{ animationDuration: '10s' }} />
                <span>Navega directamente en el portafolio 360° interactivo en vivo de Nyvara Group.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-white text-slate-700 text-[11px] font-bold rounded-lg border border-slate-200 shadow-sm">
                  Compatibilidad Oculus / VR Ready
                </span>
                <a
                  href="https://nyvaragroup.com/portafolio-360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 bg-sky-600 hover:bg-sky-500 text-white text-[11px] font-bold rounded-lg transition-colors shadow-sm"
                >
                  Ver en nyvaragroup.com ↗
                </a>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: VIDEO PRODUCTION SHOWCASE 4K */}
        {activeTab === 'video' && (
          <div className="py-2">
            <Video4KShowcase />
          </div>
        )}

        {/* TAB 3: WEB PLATFORM SIMULATOR */}
        {activeTab === 'web' && (
          <div className="py-2">
            <WebVideoShowcase />
          </div>
        )}
      </div>
    </div>
  );
}
