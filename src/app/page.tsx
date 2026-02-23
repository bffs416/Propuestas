'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/landing/header';

const phoneToSlug: Record<string, string> = {
  '3017865139': '/sara-sanchez-salazar',
  '3104950697': '/mildred-moreno',
  '3173655829': '/mercy-quezada',
};

export default function LoginPage() {
  const [phone, setPhone] = useState('');
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const path = phoneToSlug[phone];
    if (path) {
      router.push(path);
    } else {
      toast({
        title: 'Acceso Denegado',
        description:
          'El número de teléfono no está asociado a ninguna propuesta.',
        variant: 'destructive',
      });
    }
  };

  return (
    <>
      <Header />
      <main className="max-w-md mx-auto px-6 mt-32 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="text-center mb-12 reveal active">
          <h1 className="text-4xl font-outfit font-bold mb-4 gradient-text">
            Acceso a Propuesta
          </h1>
          <p className="text-slate-500">
            Por favor, ingrese el número de teléfono asociado a su propuesta para
            continuar.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full space-y-6 reveal active"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-slate-700 sr-only"
            >
              Número de Teléfono
            </label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Ej: 3012345678"
              required
              className="text-center text-lg h-14"
              autoComplete="tel"
            />
          </div>
          <Button
            type="submit"
            className="w-full h-14 bg-blue-600 hover:bg-blue-500 text-lg font-bold"
          >
            Ver Propuesta
          </Button>
        </form>
      </main>
    </>
  );
}
