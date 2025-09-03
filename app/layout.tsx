import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Arcring Perú',
    default: 'Cámaras de Seguridad | Arcring Perú'
  },
  description: 'Protege tu hogar u oficina con cámaras de seguridad: Full HD, visión nocturna, grabación en la nube y conexión con central receptora.',
  keywords: 'cámaras de seguridad, monitoreo, alarmas, Arcring Peru, seguridad hogar, videovigilancia',
  authors: [{ name: 'Arcring Perú' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: 'https://www.arcringperu.com',
    title: 'Arcring Perú - Cámaras de Seguridad',
    description: 'Protege tu hogar u oficina con cámaras de seguridad profesionales.',
    siteName: 'Arcring Perú',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arcring Perú - Cámaras de Seguridad',
    description: 'Protege tu hogar u oficina con cámaras de seguridad profesionales.',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg"
          as="image"
          type="image/jpeg"
        />
        <link
          rel="preload"
          href="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg"
          as="image"
          type="image/jpeg"
        />
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//images.pexels.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        {/* Optimize viewport and performance */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="color-scheme" content="light" />
        {/* Performance hints */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col gpu-accelerated">
          <Header />
          <main className="flex-1 relative">
            {children}
          </main>
          <Footer />
        </div>
        {/* Performance monitoring script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              if ('performance' in window) {
                window.addEventListener('load', function() {
                  setTimeout(function() {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData && perfData.loadEventEnd > 0) {
                      console.log('Page load time:', perfData.loadEventEnd - perfData.navigationStart, 'ms');
                    }
                  }, 0);
                });
              }
              // Reduce motion for accessibility
              if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                document.documentElement.style.setProperty('--animation-duration-fast', '0.01s');
                document.documentElement.style.setProperty('--animation-duration-normal', '0.01s');
                document.documentElement.style.setProperty('--animation-duration-slow', '0.01s');
              }
            `,
          }}
        />
      </body>
    </html>
  );
}