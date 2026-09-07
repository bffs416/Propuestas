'use client';

import { useState, useRef } from 'react';
import { Play, Pause, Film, Sparkles, CheckCircle2, Volume2, VolumeX, Maximize, Video, Zap } from 'lucide-react';

export interface Video4KItem {
  id: string;
  title: string;
  category: string;
  src: string;
  description: string;
  tags: string[];
}

export const videos4KList: Video4KItem[] = [
  {
    id: 'graffiti',
    title: 'Graffiti 4K - Arte & Producción Urbana',
    category: 'Cinematografía 4K',
    src: '/Videos 4k/Grafitti.mp4',
    description: 'Filmación en 4K con movimiento de cámara fluido, etalonaje de color y edición rítmica.',
    tags: ['4K HDR', 'Arte Urbano', 'Color Grading']
  },
  {
    id: 'lourdes',
    title: 'Lourdes - Producción Institucional',
    category: 'Video Corporativo / Documental',
    src: '/Videos 4k/Lourdes Corregido.mp4',
    description: 'Video masterizado con corrección de color y calidad broadcast 4K.',
    tags: ['Masterizado 4K', 'Institucional', 'Sonido HD']
  },
  {
    id: 'ecos-papel',
    title: 'Ecos de Papel - Edición & Narrativa 4K',
    category: 'Producción Audiovisual 4K',
    src: '/Videos 4k/Que hay pa contar - Ecos de Papel.mp4',
    description: 'Producción documental y de entrevistas con iluminación suave y encuadres cinematográficos.',
    tags: ['Entrevistas', 'Producción 4K', 'Narrativa']
  },
  {
    id: 'mana-cielo',
    title: 'Maná del Cielo - Historias de Impacto',
    category: 'Producción Audiovisual 4K',
    src: '/Videos 4k/Que hay pa contar - Mana de Cielo.mp4',
    description: 'Cobertura audiovisual enfocada en historias humanas e impacto social.',
    tags: ['Documental', 'Impacto Social', '4K Ultra']
  },
  {
    id: 'sos-colombia',
    title: 'S.O.S. Colombia - Cobertura Documental 4K',
    category: 'Documental & Campaña Social',
    src: '/Videos 4k/Que hay pa contar - S.O.S. COLOMBIA ❤️.mp4',
    description: 'Campaña audiovisual de alto impacto emocional con edición de ritmo y mensaje directo.',
    tags: ['Campaña Social', '4K Cinematic', 'Edición Pro']
  }
];

interface Video4KShowcaseProps {
  layout?: 'default' | 'column';
}

export default function Video4KShowcase({ layout = 'default' }: Video4KShowcaseProps) {
  const [selectedVideo, setSelectedVideo] = useState<Video4KItem>(videos4KList[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleSelectVideo = (video: Video4KItem) => {
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
      id="videos-4k-section"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 mb-2">
            <Zap className="w-4 h-4 text-purple-600 animate-pulse" />
            <span className="text-xs font-black text-purple-700 uppercase tracking-widest font-outfit">
              Producción Audiovisual 4K
            </span>
          </div>
          <h3 className={`${isColumn ? 'text-xl md:text-2xl' : 'text-2xl md:text-4xl'} font-extrabold text-slate-900`}>
            Videos 4K Cinematográficos
          </h3>
        </div>
        <span className="text-xs text-slate-600 font-bold font-mono bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm shrink-0">
          5 Videos 4K Reales
        </span>
      </div>

      {/* Main Player & List */}
      <div className={`grid ${isColumn ? 'grid-cols-1 gap-6' : 'lg:grid-cols-12 gap-8'} items-start`}>
        {/* Video Player Box */}
        <div className={`${isColumn ? 'w-full' : 'lg:col-span-8'} bg-slate-900 rounded-2xl border border-slate-200 overflow-hidden shadow-xl relative`}>
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

          {/* Details below player */}
          <div className="p-4 md:p-5 bg-white border-t border-slate-200 space-y-2.5">
            <div className="flex items-center justify-between gap-3">
              <h4 className="text-lg font-black text-slate-900 truncate">{selectedVideo.title}</h4>
              <span className="text-[11px] text-purple-700 font-extrabold bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-200 shrink-0">
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

        {/* Video Selector List */}
        <div className={`${isColumn ? 'w-full' : 'lg:col-span-4'} space-y-3`}>
          <h4 className="text-xs uppercase tracking-widest text-slate-500 font-extrabold mb-2 flex items-center gap-1.5">
            <Film className="w-4 h-4 text-purple-600" /> Selecciona un Video 4K
          </h4>

          <div className={`space-y-2.5 ${isColumn ? 'max-h-[340px]' : 'max-h-[540px]'} overflow-y-auto pr-1`}>
            {videos4KList.map((video) => {
              const isSelected = selectedVideo.id === video.id;
              return (
                <div
                  key={video.id}
                  onClick={() => handleSelectVideo(video)}
                  className={`p-3 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center gap-3 ${
                    isSelected
                      ? 'bg-purple-50/90 border-purple-500 shadow-md scale-[1.01]'
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
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shadow-md ${isSelected ? 'bg-purple-600 text-white' : 'bg-white/90 text-slate-900'}`}>
                        <Play className="w-3 h-3 fill-current translate-x-0.5" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h5 className={`text-xs font-black truncate ${isSelected ? 'text-purple-900' : 'text-slate-900'}`}>
                      {video.title}
                    </h5>
                    <span className="text-[11px] text-slate-500 block truncate font-semibold">
                      {video.category}
                    </span>
                  </div>

                  {isSelected && (
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
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
