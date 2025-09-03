import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import OptimizedImage from '@/components/OptimizedImage';
import { 
  Shield, 
  Camera, 
  Smartphone, 
  Eye, 
  Cloud, 
  Phone,
  ArrowRight,
  CheckCircle 
} from 'lucide-react';
import data from '@/content/camaras.json';

export default function Home() {
  const features = [
    { icon: Camera, title: 'Cámaras HD', description: 'Resolución Full HD 1080p para imágenes nítidas' },
    { icon: Eye, title: 'Visión Nocturna', description: 'Vigilancia efectiva las 24 horas del día' },
    { icon: Smartphone, title: 'App Móvil', description: 'Monitoreo remoto desde tu smartphone' },
    { icon: Cloud, title: 'Nube Segura', description: 'Almacenamiento protegido de grabaciones' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen min-h-[600px] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden"
        aria-label="Sección principal de bienvenida"
      >
        {/* GPU-Accelerated Background Elements */}
         <div className="absolute inset-0 pointer-events-none">
           <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-smooth-pulse"></div>
           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-smooth-pulse" style={{ animationDelay: '2s' }}></div>
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
        <div className="relative z-10 h-full flex items-center animate-smooth-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight animate-smooth-slide-up" style={{ animationDelay: '0.2s' }}>
                Protege lo que{' '}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent animate-pulse">
                  más valoras
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed animate-smooth-slide-up" style={{ animationDelay: '0.4s' }}>
                Sistemas de seguridad profesionales con monitoreo 24/7 y respuesta inmediata.
                <span className="block mt-2 text-lg text-blue-200">Tecnología de vanguardia para tu tranquilidad.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-12 animate-smooth-slide-up" style={{ animationDelay: '0.6s' }}>
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
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
              Tecnología de Seguridad Avanzada
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              Nuestros sistemas integran las últimas tecnologías para brindarte la máxima protección
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-white/80 backdrop-blur-sm group animate-in fade-in slide-in-from-bottom duration-1000"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="pb-6">
                  <div className="mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <feature.icon className="h-10 w-10 text-blue-700 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-8">
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-left duration-1000">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                ¿Por qué elegir Arcring Perú?
              </h2>
              <div className="space-y-6">
                {data.benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300 group animate-in fade-in slide-in-from-left duration-1000"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="bg-green-100 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
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
            
            <div className="relative animate-smooth-slide-up" style={{ animationDelay: '0.8s' }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-20 animate-smooth-pulse will-change-opacity pointer-events-none"></div>
              <OptimizedImage
                src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg"
                alt="Sistema de seguridad profesional"
                width={600}
                height={500}
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 via-indigo-800 to-blue-900 relative overflow-hidden">
        {/* Optimized Background Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse will-change-opacity"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse will-change-opacity" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
            ¿Listo para proteger tu propiedad?
          </h2>
          <p className="text-xl text-blue-100 mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
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