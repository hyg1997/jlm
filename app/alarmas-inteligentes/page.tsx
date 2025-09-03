import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  CheckCircle,
  Smartphone,
  Zap,
  Eye,
  Bell,
  Phone,
  Settings
} from 'lucide-react';
import Link from 'next/link';
import data from '@/content/camaras.json';

export const metadata: Metadata = {
  title: `Alarmas Inteligentes | ${data.company.name}`,
  description: data.services.find(s => s.id === 'alarmas-inteligentes')?.description || data.meta.description,
  openGraph: {
    title: `Alarmas Inteligentes | ${data.company.name}`,
    description: data.services.find(s => s.id === 'alarmas-inteligentes')?.description || data.meta.description,
    type: 'website',
  },
  twitter: {
    title: `Alarmas Inteligentes | ${data.company.name}`,
    description: data.services.find(s => s.id === 'alarmas-inteligentes')?.description || data.meta.description,
  },
};

export default function AlarmasInteligentes() {
  const alarmasService = data.services.find(s => s.id === 'alarmas-inteligentes');

  return (
    <div>
      <Hero
        title={alarmasService?.title || 'Alarmas Inteligentes'}
        subtitle={alarmasService?.description || 'Sistemas de seguridad perimetral avanzados'}
        cta="Solicitar Cotización"
        cta_secondary="o contáctanos para más información"
        backgroundImage="https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg"
      />

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
              Características de Alarmas Inteligentes
            </h2>
            <p className="text-xl text-gray-600 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              Protección perimetral con tecnología de vanguardia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alarmasService?.features?.map((feature, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-white/90 backdrop-blur-sm group animate-in fade-in slide-in-from-bottom duration-1000"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-6">
                  <div className="mx-auto bg-gradient-to-br from-red-100 to-pink-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Shield className="h-10 w-10 text-red-700" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-4">
                    {typeof feature === 'string' ? feature : feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {typeof feature === 'string' ? 'Sistema de alarma inteligente avanzado' : feature.description}
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
              Beneficios de las Alarmas Inteligentes
            </h2>
            <p className="text-xl text-gray-600 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              Protección integral para tu tranquilidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white group">
              <CardHeader className="pb-6 pt-8">
                <div className="mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                  <Zap className="h-10 w-10 text-blue-700" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                  Respuesta Inmediata
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Notificaciones instantáneas en tu smartphone ante cualquier evento de seguridad.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white group">
              <CardHeader className="pb-6 pt-8">
                <div className="mx-auto bg-gradient-to-br from-green-100 to-emerald-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                  <Eye className="h-10 w-10 text-green-700" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                  Detección Inteligente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Sensores avanzados que distinguen entre intrusos reales y falsas alarmas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white group">
              <CardHeader className="pb-6 pt-8">
                <div className="mx-auto bg-gradient-to-br from-purple-100 to-pink-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                  <Smartphone className="h-10 w-10 text-purple-700" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                  Control Remoto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Arma y desarma tu sistema desde cualquier lugar con nuestra app móvil.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sensor Types Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
              Tipos de Sensores
            </h2>
            <p className="text-xl text-gray-600 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              Tecnología avanzada para cada necesidad de seguridad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sensores de Movimiento PIR</h3>
                  <p className="text-gray-600">Detectan movimiento por calor corporal con tecnología infrarroja pasiva.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sensores Magnéticos</h3>
                  <p className="text-gray-600">Para puertas y ventanas, detectan apertura no autorizada.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sensores de Vibración</h3>
                  <p className="text-gray-600">Detectan intentos de rotura en cristales y superficies.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Detectores de Humo</h3>
                  <p className="text-gray-600">Protección contra incendios con alertas tempranas.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sensores Perimetrales</h3>
                  <p className="text-gray-600">Protección exterior con barreras invisibles de microondas.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Botones de Pánico</h3>
                  <p className="text-gray-600">Activación manual silenciosa para emergencias.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Integración Completa
            </h2>
            <p className="text-xl text-gray-600">
              Conecta tu sistema de alarmas con otros dispositivos de seguridad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl hover:shadow-lg transition-all duration-300">
              <Eye className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cámaras de Seguridad</h3>
              <p className="text-gray-600 text-sm">Activación automática de grabación</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:shadow-lg transition-all duration-300">
              <Smartphone className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">App Móvil</h3>
              <p className="text-gray-600 text-sm">Control total desde tu smartphone</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-lg transition-all duration-300">
              <Bell className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Central de Monitoreo</h3>
              <p className="text-gray-600 text-sm">Vigilancia profesional 24/7</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl hover:shadow-lg transition-all duration-300">
              <Settings className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Domótica</h3>
              <p className="text-gray-600 text-sm">Integración con sistemas inteligentes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-red-900 via-pink-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Protección Garantizada
            </h2>
            <p className="text-xl text-red-200 animate-fade-in">
              Sistemas de alarmas que brindan tranquilidad
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
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-red-200 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-red-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
            ¿Listo para proteger tu propiedad?
          </h2>
          <p className="text-xl mb-12 text-red-100 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            Obtén una evaluación gratuita de seguridad para tu hogar o empresa
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
            <Link href="/contacto">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105">
                <Shield className="h-5 w-5 mr-2" />
                Evaluación Gratuita
              </Button>
            </Link>
            <Link href={`tel:${data.contact.phone}`}>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/80 bg-transparent text-white hover:bg-white hover:text-red-600 font-bold px-8 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105"
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