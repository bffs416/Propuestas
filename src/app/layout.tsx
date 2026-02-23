import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import LandingPageAnimations from '@/components/landing/animations';

export const metadata: Metadata = {
  title: 'Propuesta Integral',
  description: 'Propuesta de servicios de desarrollo y automatización.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Outfit:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased pb-20">
        <div className="bg-canvas">
          <div className="grid-pattern"></div>
          <div className="bg-mesh-container">
            <div className="dynamic-blob blob-blue"></div>
            <div className="dynamic-blob blob-purple"></div>
            <div className="dynamic-blob blob-cyan"></div>
          </div>
          <div className="noise"></div>
        </div>
        {children}
        <Toaster />
        <LandingPageAnimations />
      </body>
    </html>
  );
}
