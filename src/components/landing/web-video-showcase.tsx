'use client';

import { useState, useRef } from 'react';
import { Play, Pause, Monitor, Sparkles, Film, CheckCircle2, Volume2, VolumeX, Maximize } from 'lucide-react';

export interface WebVideo {
  id: string;
  title: string;
  category: string;
  src: string;
  description: string;
  tags: string[];
}

export const webVideosList: WebVideo[] = [
  {
    id: 'cete',
    title: 'CETE - Plataforma Institucional',
    category: 'Plataforma Web',
    src: '/WebsSites/CETE.mp4',
    description: 'Demostración de navegación fluida, estructura institucional y catálogo de servicios.',
    tags: ['Web Corporativa', 'UI/UX', 'Full Responsive']
  },
  {
    id: 'corazon-selva',
    title: 'Corazón de Selva',
    category: 'E-Commerce & Experiencia Visual',
    src: '/WebsSites/Corazon de selva.mp4',
    description: 'Plataforma con alta carga estética, paleta de colores orgánica y catálogo de productos.',
    tags: ['E-Commerce', 'Branding', 'Animación Web']
  },
  {
    id: 'costenita',
    title: 'La Costeñita',
    category: 'Sitio Web Comercial',
    src: '/WebsSites/Costeñita.mp4',
    description: 'Presentación interactiva de marca comercial con conversión rápida a canales de venta.',
    tags: ['Sitio Web Comercial', 'Lead Generation']
  },
  {
    id: 'jonathan-web',
    title: 'Jonathan Web Showcase',
    category: 'Portafolio Personal & Marca',
    src: '/WebsSites/Jonathan_WEB.mp4',
    description: 'Diseño de portafolio profesional con animaciones dinámicas y estructura de servicios.',
    tags: ['Portafolio Pro', 'Marca Personal']
  },
  {
    id: 'medicina-estetica',
    title: 'Medicina Estética',
    category: 'Clínica & Salud Estética',
    src: '/WebsSites/Medicina Estetica.mp4',
    description: 'Plataforma médica de alto nivel con galería de procedimientos y agendación de citas.',
    tags: ['Salud & Estética', 'Agendación Citas']
  },
  {
    id: 'sara-sanchez',
    title: 'Dra. Sara Sánchez',
    category: 'Especialidad Tricología',
    src: '/WebsSites/Sara Sanchez.mp4',
    description: 'Sitio de autoridad médica con artículos educativos, tratamientos capilares y contacto.',
    tags: ['Autoridad Médica', 'Tricología', 'WhatsApp IA']
  }
];

interface WebVideoShowcaseProps {
  layout?: 'default' | 'column';
}

export default function WebVideoShowcase({ layout = 'default' }: WebVideoShowcaseProps) {
  const [selectedVideo, setSelectedVideo] = useState<WebVideo>(webVideosList[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleSelectVideo = (video: WebVideo) => {
    setSelectedVideo(video);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => setIsPlaying(false));
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const isColumn = layout === 'column';

  return (
    <div
      className={`w-full bg-white/95 rounded-3xl border border-slate-200/90 shadow-2xl space-y-6 ${
        isColumn ? 'p-5 md:p-6 my-2' : 'p-6 md:p-10 my-10 max-w-6xl mx-auto'
      }`}
      id="videos-web-section"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 mb-2">
            <Sparkles className="w-4 h-4 text-sky-600 animate-pulse" />
            <span className="text-xs font-black text-sky-700 uppercase tracking-widest font-outfit">
              Proyectos Web Realizados
            </span>
          </div>
          <h3 className={`${isColumn ? 'text-xl md:text-2xl' : 'text-2xl md:text-4xl'} font-extrabold text-slate-900`}>
            Videos de Sitios Web
          </h3>
        </div>
        <span className="text-xs text-slate-600 font-bold font-mono bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm shrink-0">
          6 Videos Demos HD
        </span>
      </div>

      {/* Main Player & Info */}
      <div className={`grid ${isColumn ? 'grid-cols-1 gap-6' : 'lg:grid-cols-12 gap-8'} items-start`}>
        {/* Video Player Display */}
        <div className={`${isColumn ? 'w-full' : 'lg:col-span-8'} bg-slate-900 rounded-2xl border border-slate-200 overflow-hidden shadow-xl group relative`}>
          <div className="relative aspect-video w-full bg-black flex items-center justify-center">
            <video
              ref={videoRef}
              src={selectedVideo.src}
              className="w-full h-full object-contain"
              muted={isMuted}
              controls
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            />
          </div>

          {/* Selected Video Details Below Player */}
          <div className="p-4 md:p-5 bg-white border-t border-slate-200 space-y-2.5">
            <div className="flex items-center justify-between gap-3">
              <h4 className="text-lg font-black text-slate-900 truncate">{selectedVideo.title}</h4>
              <span className="text-[11px] text-sky-700 font-extrabold bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-200 shrink-0">
                {selectedVideo.category}
              </span>
            </div>
            <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
              {selectedVideo.description}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {selectedVideo.tags.map((tag, idx) => (
                <span key={idx} className="text-[11px] font-bold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-lg border border-slate-200">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Video Selector Grid/List */}
        <div className={`${isColumn ? 'w-full' : 'lg:col-span-4'} space-y-3`}>
          <h4 className="text-xs uppercase tracking-widest text-slate-500 font-extrabold mb-2 flex items-center gap-1.5">
            <Film className="w-4 h-4 text-sky-600" /> Selecciona un Video Web
          </h4>

          <div className={`space-y-2.5 ${isColumn ? 'max-h-[340px]' : 'max-h-[540px]'} overflow-y-auto pr-1`}>
            {webVideosList.map((video) => {
              const isSelected = selectedVideo.id === video.id;
              return (
                <div
                  key={video.id}
                  onClick={() => handleSelectVideo(video)}
                  className={`p-3 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center gap-3 ${
                    isSelected
                      ? 'bg-sky-50/90 border-sky-500 shadow-md scale-[1.01]'
                      : 'bg-slate-50/80 border-slate-200/80 hover:bg-white hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <div className="relative w-16 h-12 rounded-xl bg-slate-900 overflow-hidden shrink-0 border border-slate-300 shadow-sm">
                    <video
                      src={video.src}
                      className="w-full h-full object-cover opacity-80"
                      muted
                      preload="metadata"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shadow-md ${isSelected ? 'bg-sky-600 text-white' : 'bg-white/90 text-slate-900'}`}>
                        <Play className="w-3 h-3 fill-current translate-x-0.5" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h5 className={`text-xs font-black truncate ${isSelected ? 'text-sky-900' : 'text-slate-900'}`}>
                      {video.title}
                    </h5>
                    <span className="text-[11px] text-slate-500 block truncate font-semibold">
                      {video.category}
                    </span>
                  </div>

                  {isSelected && (
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
