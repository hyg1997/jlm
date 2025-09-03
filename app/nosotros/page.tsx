import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Phone,
  CheckCircle,
  Users,
  Award,
  Target
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import data from '@/content/camaras.json';

export const metadata: Metadata = {
  title: `Nosotros | ${data.company.name}`,
  description: `Conoce más sobre ${data.company.name}. ${data.company.description}`,
  openGraph: {
    title: `Nosotros | ${data.company.name}`,
    description: `Conoce más sobre ${data.company.name}. ${data.company.description}`,
    type: 'website',
  },
  twitter: {
    title: `Nosotros | ${data.company.name}`,
    description: `Conoce más sobre ${data.company.name}. ${data.company.description}`,
  },
};

export default function Nosotros() {
  return (
    <div>
      <Hero
        title={`Conoce ${data.company.name}`}
        subtitle={data.company.tagline}
        cta="Contáctanos"
        cta_secondary="Descubre nuestros servicios"
        backgroundImage={data.images.hero.team}
      />

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Quiénes Somos
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {data.company.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{data.company.experience_years}</div>
                  <div className="text-gray-600 font-medium">Años de Experiencia</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">{data.company.projects_completed}</div>
                  <div className="text-gray-600 font-medium">Proyectos Completados</div>
                </div>
              </div>

              <Link href="/contacto">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-bold rounded-2xl transition-all duration-300 hover:scale-105"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Habla con Nosotros
                </Button>
              </Link>
            </div>
            
            <div className="relative animate-scale-in">
              <Image
                src={data.images.content.team_photo}
                alt={`Equipo de ${data.company.name}`}
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in">
              Los principios que guían nuestro trabajo y compromiso con la excelencia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white group">
              <CardHeader className="pb-6 pt-8">
                <div className="mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                  <Shield className="h-10 w-10 text-blue-700" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                  Seguridad
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Priorizamos la protección y seguridad de nuestros clientes con las mejores tecnologías disponibles.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white group">
              <CardHeader className="pb-6 pt-8">
                <div className="mx-auto bg-gradient-to-br from-green-100 to-emerald-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                  <Award className="h-10 w-10 text-green-700" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                  Excelencia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Nos comprometemos a entregar servicios de la más alta calidad, superando las expectativas de nuestros clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white group">
              <CardHeader className="pb-6 pt-8">
                <div className="mx-auto bg-gradient-to-br from-purple-100 to-pink-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                  <Users className="h-10 w-10 text-purple-700" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                  Compromiso
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Mantenemos un compromiso constante con nuestros clientes, brindando soporte {data.company.support}.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Logros que nos Enorgullecen
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed animate-fade-in">
              Números que reflejan nuestro compromiso y dedicación
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {data.stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-in fade-in slide-in-from-bottom duration-1000"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-5xl md:text-6xl mb-4">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-blue-200 font-medium text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <Target className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestra Misión
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transformar la manera en que las empresas y hogares se conectan y protegen, 
              proporcionando soluciones tecnológicas innovadoras que generen tranquilidad 
              y confianza en nuestros clientes.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Por qué elegirnos?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {data.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para conocer más?
          </h2>
          <p className="text-xl mb-12 text-green-100">
            Contáctanos y descubre cómo podemos ayudarte con nuestras soluciones tecnológicas
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contacto">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105">
                <Phone className="h-5 w-5 mr-2" />
                Contáctanos
              </Button>
            </Link>
            <Link href="/servicios">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/80 bg-transparent text-white hover:bg-white hover:text-green-600 font-bold px-8 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105"
              >
                Ver Servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}