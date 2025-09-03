import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  CheckCircle,
  Users,
  Zap,
  Shield,
  Headphones
} from 'lucide-react';
import Link from 'next/link';
import data from '@/content/camaras.json';

export const metadata: Metadata = {
  title: `Telefonía IP | ${data.company.name}`,
  description: data.services.find(s => s.id === 'telefonia-ip')?.description || data.meta.description,
  openGraph: {
    title: `Telefonía IP | ${data.company.name}`,
    description: data.services.find(s => s.id === 'telefonia-ip')?.description || data.meta.description,
    type: 'website',
  },
  twitter: {
    title: `Telefonía IP | ${data.company.name}`,
    description: data.services.find(s => s.id === 'telefonia-ip')?.description || data.meta.description,
  },
};

export default function TelefoniaIP() {
  const telefoniaService = data.services.find(s => s.id === 'telefonia-ip');

  return (
    <div>
      <Hero
        title={telefoniaService?.title || 'Telefonía IP'}
        subtitle={telefoniaService?.description || 'Sistemas de comunicación empresarial avanzados'}
        cta="Solicitar Cotización"
        cta_secondary="o contáctanos para más información"
        backgroundImage={data.images.hero.technology}
      />

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
              Características de Telefonía IP
            </h2>
            <p className="text-xl text-gray-600 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              Tecnología VoIP de última generación para tu empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {telefoniaService?.features?.map((feature, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-white/90 backdrop-blur-sm group animate-in fade-in slide-in-from-bottom duration-1000"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-6">
                  <div className="mx-auto bg-gradient-to-br from-green-100 to-emerald-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Phone className="h-10 w-10 text-green-700" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-4">
                    {typeof feature === 'string' ? feature : feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {typeof feature === 'string' ? 'Funcionalidad avanzada de telefonía IP' : feature.description}
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
              Beneficios de la Telefonía IP
            </h2>
            <p className="text-xl text-gray-600 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              Revoluciona la comunicación de tu empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white group">
              <CardHeader className="pb-6 pt-8">
                <div className="mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                  <Zap className="h-10 w-10 text-blue-700" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                  Reducción de Costos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Ahorra hasta un 70% en costos de comunicación comparado con telefonía tradicional.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white group">
              <CardHeader className="pb-6 pt-8">
                <div className="mx-auto bg-gradient-to-br from-green-100 to-emerald-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                  <Users className="h-10 w-10 text-green-700" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                  Escalabilidad
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Crece tu sistema de comunicación fácilmente según las necesidades de tu empresa.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white group">
              <CardHeader className="pb-6 pt-8">
                <div className="mx-auto bg-gradient-to-br from-purple-100 to-pink-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                  <Shield className="h-10 w-10 text-purple-700" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                  Seguridad Avanzada
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Protocolos de seguridad empresarial con encriptación de llamadas y datos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Detail Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
              Funcionalidades Avanzadas
            </h2>
            <p className="text-xl text-gray-600 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              Todo lo que necesitas para una comunicación empresarial eficiente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Conferencias Multipunto</h3>
                  <p className="text-gray-600">Realiza videoconferencias con múltiples participantes con calidad HD.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Grabación de Llamadas</h3>
                  <p className="text-gray-600">Graba y almacena llamadas importantes para capacitación y calidad.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">IVR Inteligente</h3>
                  <p className="text-gray-600">Sistema de respuesta interactiva para mejorar la atención al cliente.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Integración CRM</h3>
                  <p className="text-gray-600">Conecta tu sistema telefónico con tu CRM para mejor gestión.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Reportes Detallados</h3>
                  <p className="text-gray-600">Analítica completa de llamadas, tiempos y productividad del equipo.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Soporte 24/7</h3>
                  <p className="text-gray-600">Asistencia técnica continua para garantizar el funcionamiento óptimo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Resultados Comprobados
            </h2>
            <p className="text-xl text-green-200 animate-fade-in">
              Empresas que confían en nuestra telefonía IP
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
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-green-200 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
            ¿Listo para modernizar tu comunicación?
          </h2>
          <p className="text-xl mb-12 text-blue-100 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            Obtén una demostración gratuita de nuestro sistema de telefonía IP
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
            <Link href="/contacto">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105">
                <Phone className="h-5 w-5 mr-2" />
                Solicitar Demo
              </Button>
            </Link>
            <Link href={`tel:${data.contact.phone}`}>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/80 bg-transparent text-white hover:bg-white hover:text-blue-600 font-bold px-8 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105"
              >
                <Headphones className="h-5 w-5 mr-2" />
                Llamar Ahora
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}