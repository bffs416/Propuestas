'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DrWilmerEconomicaRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/dr-wilmer-munoz');
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400 text-sm">
      Redireccionando a la propuesta unificada del Dr. Wilmer Muñoz...
    </div>
  );
}
