import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Wrench, 
  Shield, 
  Headphones, 
  Phone,
  CheckCircle 
} from 'lucide-react';
import Link from 'next/link';
import data from '@/content/camaras.json';

export const metadata: Metadata = {
  title: 'Servicios de Seguridad',
  description: 'Servicios completos de seguridad: instalación profesional, monitoreo 24/7 y mantenimiento técnico especializado.',
};

export default function Servicios() {
  const serviceIcons = [Wrench, Shield, Headphones];

  return (
    <div>
      <Hero
        title="Nuestros Servicios"
        subtitle="Soluciones integrales de seguridad con el respaldo de profesionales certificados"
        cta="Cotiza ahora"
        cta_secondary="Consulta sin compromiso"
        backgroundImage={data.images.hero.technology}
      />

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
              Servicios Especializados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              Ofrecemos servicios completos para garantizar la máxima seguridad y funcionamiento óptimo de tu sistema
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {data.services.map((service, index) => {
              const Icon = serviceIcons[index] || Shield;
              return (
                <Card 
                  key={index} 
                  className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 shadow-xl bg-white/90 backdrop-blur-sm group animate-in fade-in slide-in-from-bottom duration-1000"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader className="text-center pb-8">
                    <div className="mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 w-24 h-24 rounded-3xl flex items-center justify-center mb-8 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 animate-float">
                      <Icon className="h-12 w-12 text-blue-700 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 mb-4">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-8">
                    <ul className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-blue-50/50 transition-all duration-300 group/item">
                          <div className="bg-green-100 p-1 rounded-full group-hover/item:scale-110 transition-transform duration-300">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          </div>
                          <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">
                            {typeof feature === 'string' ? feature : feature.title || feature.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
              Números que nos Respaldan
            </h2>
            <p className="text-xl text-gray-600 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              Experiencia y confianza comprobada en el mercado
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {data.stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para comenzar?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Recibe una evaluación gratuita de seguridad para tu propiedad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button 
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold"
              >
                <Phone className="h-5 w-5 mr-2" />
                Solicitar Evaluación Gratuita
              </Button>
            </Link>
            <Link href={`https://wa.me/${data.contact.whatsapp}`} target="_blank">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 text-lg font-semibold"
              >
                WhatsApp
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}