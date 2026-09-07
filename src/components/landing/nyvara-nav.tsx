'use client';

import { Sparkles, Layers } from 'lucide-react';

export default function NyvaraNav() {
  return (
    <div className="w-full max-w-6xl mx-auto my-6 px-2">
      <div className="bg-white/90 border border-slate-200/90 p-3.5 rounded-2xl backdrop-blur-2xl shadow-xl flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 px-4 py-2 bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl border border-sky-100">
          <Sparkles className="w-4 h-4 text-sky-600 animate-pulse" />
          <span className="text-xs font-black text-slate-900 uppercase tracking-widest font-outfit">
            Propuesta Digital C.C. Plaza 80
          </span>
        </div>

        <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs md:text-sm font-black bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20">
          <Layers className="w-4 h-4" />
          <span>Ecosistema Completo Plaza 80</span>
        </div>
      </div>
    </div>
  );
}
