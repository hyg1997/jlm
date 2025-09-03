import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Network, 
  CheckCircle,
  Zap,
  Shield,
  Settings,
  Award,
  Phone
} from 'lucide-react';
import Link from 'next/link';
import data from '@/content/camaras.json';

export const metadata: Metadata = {
  title: `Cableado Estructurado | ${data.company.name}`,
  description: data.services.find(s => s.id === 'cableado-estructurado')?.description || data.meta.description,
  openGraph: {
    title: `Cableado Estructurado | ${data.company.name}`,
    description: data.services.find(s => s.id === 'cableado-estructurado')?.description || data.meta.description,
    type: 'website',
  },
  twitter: {
    title: `Cableado Estructurado | ${data.company.name}`,
    description: data.services.find(s => s.id === 'cableado-estructurado')?.description || data.meta.description,
  },
};

export default function RedesCableado() {
  const cableadoService = data.services.find(s => s.id === 'cableado-estructurado');

  return (
    <div>
      <Hero
        title={cableadoService?.title || 'Cableado Estructurado'}
        subtitle={cableadoService?.description || 'Infraestructura de red profesional y certificada'}
        cta="Solicitar Cotización"
        cta_secondary="o contáctanos para más información"
        backgroundImage={data.images.hero.networking}
      />

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
              Características del Cableado Estructurado
            </h2>
            <p className="text-xl text-gray-600 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              Infraestructura de red confiable y escalable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cableadoService?.features?.map((feature, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-white/90 backdrop-blur-sm group animate-in fade-in slide-in-from-bottom duration-1000"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-6">
                  <div className="mx-auto bg-gradient-to-br from-orange-100 to-red-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Network className="h-10 w-10 text-orange-700" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-4">
                    {typeof feature === 'string' ? feature : feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {typeof feature === 'string' ? 'Infraestructura de red profesional' : feature.description}
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
              Beneficios del Cableado Estructurado
            </h2>
            <p className="text-xl text-gray-600 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              Una base sólida para tu infraestructura tecnológica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white group">
              <CardHeader className="pb-6 pt-8">
                <div className="mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                  <Zap className="h-10 w-10 text-blue-700" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                  Alto Rendimiento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Velocidades de hasta 10 Gbps con cables Cat 6A y fibra óptica para máximo rendimiento.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white group">
              <CardHeader className="pb-6 pt-8">
                <div className="mx-auto bg-gradient-to-br from-green-100 to-emerald-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                  <Award className="h-10 w-10 text-green-700" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                  Certificación Internacional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Instalaciones certificadas bajo estándares TIA/EIA e ISO para garantizar calidad.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white group">
              <CardHeader className="pb-6 pt-8">
                <div className="mx-auto bg-gradient-to-br from-purple-100 to-pink-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                  <Shield className="h-10 w-10 text-purple-700" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                  Garantía Extendida
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  25 años de garantía en materiales y mano de obra con soporte técnico especializado.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
              Especificaciones Técnicas
            </h2>
            <p className="text-xl text-gray-600 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              Tecnología de vanguardia para tu infraestructura
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Cable Cat 6A</h3>
                  <p className="text-gray-600">Soporte para 10 Gigabit Ethernet hasta 100 metros de distancia.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fibra Óptica</h3>
                  <p className="text-gray-600">Conexiones de alta velocidad para backbone y enlaces críticos.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Racks Profesionales</h3>
                  <p className="text-gray-600">Gabinetes de 19" con ventilación y organización de cables.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Patch Panels</h3>
                  <p className="text-gray-600">Paneles de parcheo de 24 y 48 puertos para organización óptima.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Certificación</h3>
                  <p className="text-gray-600">Pruebas con equipos Fluke para garantizar rendimiento óptimo.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Documentación</h3>
                  <p className="text-gray-600">Planos as-built y etiquetado completo de toda la instalación.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Aplicaciones
            </h2>
            <p className="text-xl text-gray-600">
              Sectores que confían en nuestro cableado estructurado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl hover:shadow-lg transition-all duration-300">
              <Settings className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Oficinas Corporativas</h3>
              <p className="text-gray-600 text-sm">Infraestructura para empresas de todos los tamaños</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:shadow-lg transition-all duration-300">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Centros de Datos</h3>
              <p className="text-gray-600 text-sm">Conectividad crítica para servidores y equipos</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-lg transition-all duration-300">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Hospitales</h3>
              <p className="text-gray-600 text-sm">Redes confiables para equipos médicos críticos</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl hover:shadow-lg transition-all duration-300">
              <Network className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Instituciones Educativas</h3>
              <p className="text-gray-600 text-sm">Conectividad para aulas y laboratorios</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Experiencia Comprobada
            </h2>
            <p className="text-xl text-orange-200 animate-fade-in">
              Proyectos de cableado estructurado exitosos
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
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-orange-200 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
            ¿Necesitas una infraestructura confiable?
          </h2>
          <p className="text-xl mb-12 text-indigo-100 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            Obtén una evaluación gratuita de tu infraestructura de red actual
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
            <Link href="/contacto">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105">
                <Network className="h-5 w-5 mr-2" />
                Evaluación Gratuita
              </Button>
            </Link>
            <Link href={`tel:${data.contact.phone}`}>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/80 bg-transparent text-white hover:bg-white hover:text-indigo-600 font-bold px-8 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105"
              >
                <Phone className="h-5 w-5 mr-2" />
                Llamar Ahora
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}