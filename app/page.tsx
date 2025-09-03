// Next.js imports
import Link from 'next/link';

// UI Components
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import Image from 'next/image';

// Icons
import { 
  ArrowRight,
  Camera, 
  CheckCircle,
  Cloud, 
  Eye, 
  Phone,
  Shield, 
  Smartphone
} from 'lucide-react';

// Data
import data from '@/content/camaras.json';

// Types
import type { Feature } from '@/types';

export default function Home(): JSX.Element {
  const features: Feature[] = [
    { 
      icon: Camera, 
      title: 'Cámaras HD', 
      description: 'Resolución Full HD 1080p para imágenes nítidas' 
    },
    { 
      icon: Eye, 
      title: 'Visión Nocturna', 
      description: 'Vigilancia efectiva las 24 horas del día' 
    },
    { 
      icon: Smartphone, 
      title: 'App Móvil', 
      description: 'Monitoreo remoto desde tu smartphone' 
    },
    { 
      icon: Cloud, 
      title: 'Nube Segura', 
      description: 'Almacenamiento protegido de grabaciones' 
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen min-h-[600px] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden"
        aria-label="Sección principal de bienvenida"
      >
        {/* Subtle Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-subtle-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-subtle-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
        
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg')",
          }}
          role="img"
          aria-label="Imagen de fondo de sistema de seguridad"
        ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        <div className="relative z-10 h-full flex items-center animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Protege lo que{' '}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                más valoras
              </span>
            </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Sistemas de seguridad profesionales con monitoreo 24/7 y respuesta inmediata.
            </p>
            <p className="text-base md:text-lg text-slate-300 mb-10 max-w-xl animate-slide-up" style={{ animationDelay: '0.25s' }}>
              Tecnología de vanguardia para tu tranquilidad y protección total.
            </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <Link href="/contacto">
                  <Button 
                    variant="gradient-primary"
                    size="lg" 
                    className="px-10 py-5 text-lg font-bold rounded-2xl hover:scale-105"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Cotiza Gratis Ahora
                  </Button>
                </Link>
                
                <Link href="/camaras-de-seguridad">
                  <Button 
                    variant="outline-light" 
                    size="lg"
                    className="px-10 py-5 text-lg font-bold rounded-2xl"
                  >
                    Ver Cámaras
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 text-blue-100 animate-in fade-in duration-1000 delay-1000" role="list" aria-label="Beneficios del servicio">
                <div className="flex items-center space-x-2" role="listitem">
                  <CheckCircle className="h-5 w-5 text-green-400" aria-hidden="true" />
                  <span>Instalación profesional</span>
                </div>
                <div className="flex items-center space-x-2" role="listitem">
                  <CheckCircle className="h-5 w-5 text-green-400" aria-hidden="true" />
                  <span>Garantía completa</span>
                </div>
                <div className="flex items-center space-x-2" role="listitem">
                  <CheckCircle className="h-5 w-5 text-green-400" aria-hidden="true" />
                  <span>Soporte 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight animate-fade-in">
              Tecnología de Seguridad Avanzada
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed animate-fade-in">
              Sistemas integrados con las últimas tecnologías para brindarte máxima protección
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="text-center border border-slate-200 hover:border-slate-300 transition-all duration-300 hover-lift bg-white group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4 pt-8">
                  <div className="mx-auto bg-slate-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-blue-50">
                    <feature.icon className="h-8 w-8 text-slate-700 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-8 px-6">
                  <CardDescription className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                ¿Por qué elegir Arcring Perú?
              </h2>
              <div className="space-y-4">
                {data.benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200 group animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-blue-100 p-2 rounded-lg transition-colors duration-200 group-hover:bg-blue-200">
                      <Shield className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-base text-slate-700 leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/camaras-de-seguridad">
                  <Button 
                    variant="gradient-secondary"
                    className="px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105"
                  >
                    Conoce Nuestras Cámaras
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-scale-in" style={{ animationDelay: '0.4s' }}>
               <Image
                 src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg"
                 alt="Sistema de seguridad profesional"
                 width={600}
                 height={400}
                 className="rounded-xl shadow-lg w-full h-[400px] object-cover hover-lift"
                 sizes="(max-width: 768px) 100vw, 50vw"
               />
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 relative">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight animate-fade-in">
            ¿Listo para proteger tu propiedad?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Obtén una cotización personalizada sin compromiso
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
            <Link href="/contacto">
              <Button 
                variant="gradient-primary"
                size="lg"
                className="px-10 py-5 text-lg font-bold rounded-2xl hover:scale-105"
              >
                <Phone className="h-5 w-5 mr-2" />
                Cotizar Ahora
              </Button>
            </Link>
            <Link href={`tel:${data.contact.phone}`}>
              <Button 
                variant="outline-light" 
                size="lg"
                className="px-10 py-5 text-lg font-bold rounded-2xl hover:text-blue-700"
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