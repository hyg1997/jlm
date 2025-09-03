import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import data from '@/content/camaras.json';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: `%s | ${data.company.name}`,
    default: data.meta.title
  },
  description: data.meta.description,
  keywords: 'telecomunicaciones, seguridad, telefonía IP, cámaras de seguridad, cableado estructurado, alarmas inteligentes',
  authors: [{ name: data.company.name }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: 'https://www.techsecure.com',
    title: data.meta.title,
    description: data.meta.description,
    siteName: data.company.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: data.meta.title,
    description: data.meta.description,
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