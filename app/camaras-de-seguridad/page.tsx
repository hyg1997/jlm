import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import CameraCard from '@/components/CameraCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Eye, 
  Zap, 
  Shield, 
  Cloud, 
  Smartphone, 
  MapPin,
  Phone,
  CheckCircle 
} from 'lucide-react';
import Link from 'next/link';
import data from '@/content/camaras.json';

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  openGraph: {
    title: data.meta.title,
    description: data.meta.description,
    type: 'website',
  },
  twitter: {
    title: data.meta.title,
    description: data.meta.description,
  },
};

export default function CamarasDeSeguridad() {
  const functionIcons = [Eye, Cloud, Zap, Eye, Shield, Smartphone];

  return (
    <div>
      <Hero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        cta={data.hero.cta}
        cta_secondary={data.hero.cta_secondary}
        backgroundImage="https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg"
      />

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
              Beneficios de Nuestras Cámaras
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              Tecnología avanzada respaldada por años de experiencia en seguridad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-white/90 backdrop-blur-sm group animate-in fade-in slide-in-from-bottom duration-1000"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300 leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Camera Types Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
              Tipos de Cámaras de Seguridad
            </h2>
            <p className="text-xl text-gray-600 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              Soluciones adaptadas para cada necesidad y ambiente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {data.types.map((type, index) => (
              <CameraCard
                key={index}
                title={type.title}
                features={type.features}
                className={`animate-in fade-in slide-in-from-${index === 0 ? 'left' : 'right'} duration-1000 delay-300`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Functions Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
              Funciones Avanzadas
            </h2>
            <p className="text-xl text-gray-600 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              Tecnología inteligente que se adapta a tus necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.functions.map((func, index) => {
              const Icon = functionIcons[index] || Shield;
              return (
                <Card 
                  key={index} 
                  className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-white/90 backdrop-blur-sm group animate-in fade-in slide-in-from-bottom duration-1000"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-6">
                    <div className="mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 animate-float">
                      <Icon className="h-10 w-10 text-blue-700 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                      {func}
                    </CardTitle>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Installation Places Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
              Lugares de Instalación
            </h2>
            <p className="text-xl text-gray-600 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              Ideales para diferentes tipos de propiedades y espacios
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {data.installation.map((place, index) => (
              <div 
                key={index} 
                className="text-center animate-in fade-in slide-in-from-bottom duration-1000"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Badge 
                  variant="secondary" 
                  className="px-6 py-3 text-base bg-white/90 backdrop-blur-sm border border-blue-200 text-blue-700 hover:bg-blue-50 hover:scale-105 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  {place}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
              Cobertura Nacional
            </h2>
            <p className="text-xl text-gray-600 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              Servicio disponible en las principales ciudades del Perú
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {data.coverage.map((city, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-100 group animate-in fade-in slide-in-from-bottom duration-1000"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <span className="font-bold text-lg text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                  {city}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-800 via-indigo-800 to-blue-900 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-in fade-in slide-in-from-bottom duration-1000">
            ¿Necesitas más información?
          </h2>
          <p className="text-xl text-blue-100 mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            Nuestros expertos están listos para asesorarte
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
            <Link href="/contacto">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-10 py-5 text-lg font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25"
              >
                <Phone className="h-5 w-5 mr-2" />
                Solicitar Cotización
              </Button>
            </Link>
            <Link href="/faq">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white/80 text-white hover:bg-white hover:text-blue-700 px-10 py-5 text-lg font-bold rounded-2xl transition-all duration-300 backdrop-blur-sm hover:shadow-xl"
              >
                Ver Preguntas Frecuentes
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}