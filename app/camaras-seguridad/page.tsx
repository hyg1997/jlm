import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Phone,
  CheckCircle 
} from 'lucide-react';
import Link from 'next/link';
import data from '@/content/camaras.json';

export const metadata: Metadata = {
  title: `Cámaras de Seguridad | ${data.company.name}`,
  description: data.services.find(s => s.id === 'camaras-seguridad')?.description || data.meta.description,
  openGraph: {
    title: `Cámaras de Seguridad | ${data.company.name}`,
    description: data.services.find(s => s.id === 'camaras-seguridad')?.description || data.meta.description,
    type: 'website',
  },
  twitter: {
    title: `Cámaras de Seguridad | ${data.company.name}`,
    description: data.services.find(s => s.id === 'camaras-seguridad')?.description || data.meta.description,
  },
};

export default function CamarasDeSeguridad() {
  const cameraService = data.services.find(s => s.id === 'camaras-seguridad');

  return (
    <div>
      <Hero
        title={cameraService?.hero?.title || 'Cámaras de Seguridad'}
        subtitle={cameraService?.hero?.description || 'Protege tu negocio y hogar'}
        cta="Solicitar Cotización"
        cta_secondary="o contáctanos para más información"
        backgroundImage="https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg"
      />

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
              Características Avanzadas
            </h2>
            <p className="text-xl text-gray-600 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              Tecnología de vanguardia para tu seguridad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cameraService?.features?.filter(feature => typeof feature === 'object' && feature.icon).map((feature, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-white/90 backdrop-blur-sm group animate-in fade-in slide-in-from-bottom duration-1000"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-6">
                  <div className="mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <span className="text-3xl">{(feature as any).icon}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-4">
                    {(feature as any).title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {(feature as any).description}
                  </p>
                </CardContent>
              </Card>
            )) || []}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
              Beneficios Principales
            </h2>
            <p className="text-xl text-gray-600 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              Por qué elegir nuestras cámaras de seguridad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {cameraService?.benefits?.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-xl transition-all duration-500 animate-in fade-in slide-in-from-bottom duration-1000"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            )) || []}
          </div>
        </div>
      </section>

      {/* General Benefits */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
              ¿Por qué elegir {data.company.name}?
            </h2>
            <p className="text-xl text-gray-600 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              Ventajas que nos distinguen en el mercado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-1000"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
              Números que nos Respaldan
            </h2>
            <p className="text-xl text-blue-200 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              Experiencia y confianza comprobada
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {data.stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-in fade-in slide-in-from-bottom duration-1000"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-blue-200 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
            ¿Listo para proteger tu propiedad?
          </h2>
          <p className="text-xl mb-12 text-green-100 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            Obtén una cotización personalizada sin compromiso
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
            <Link href="/contacto">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105">
                <Phone className="h-5 w-5 mr-2" />
                Cotizar Ahora
              </Button>
            </Link>
            <Link href={`tel:${data.contact.phone}`}>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/80 bg-transparent text-white hover:bg-white hover:text-green-600 font-bold px-8 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105"
              >
                Llamar Directamente
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}