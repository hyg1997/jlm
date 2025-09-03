import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import FaqAccordion from '@/components/FaqAccordion';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import data from '@/content/camaras.json';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes - FAQ',
  description: `Resuelve todas tus dudas sobre cámaras de seguridad, instalación, precios y servicios de ${data.company.name}.`,
};

export default function FAQ() {
  const faqs = [
    {
      q: `¿Qué servicios ofrece ${data.company.name}?`,
      a: "Ofrecemos servicios integrales de telecomunicaciones y seguridad incluyendo Telefonía IP, Cámaras de Seguridad, Cableado Estructurado y Alarmas Inteligentes para empresas y hogares."
    },
    {
      q: "¿Cómo funcionan las cámaras de seguridad?",
      a: "Nuestras cámaras utilizan tecnología avanzada con resolución 4K y Full HD, monitoreo remoto, reconocimiento facial inteligente, visión nocturna y almacenamiento seguro en la nube."
    },
    {
      q: "¿Incluyen instalación profesional?",
      a: "Sí, todos nuestros servicios incluyen instalación profesional realizada por técnicos certificados, configuración completa y capacitación de uso."
    },
    {
      q: "¿Qué garantía ofrecen?",
      a: "Ofrecemos garantía completa en todos nuestros equipos y servicios, además de soporte técnico 24/7 para asegurar el funcionamiento óptimo de tu sistema."
    },
    {
      q: "¿Cuánto tiempo toma la instalación?",
      a: "La instalación profesional se completa en menos de 24 horas, dependiendo de la complejidad del proyecto y el número de dispositivos a instalar."
    },
    {
      q: "¿Ofrecen soporte técnico?",
      a: "Sí, contamos con soporte técnico 24/7, mantenimiento preventivo, actualizaciones de software y respuesta inmediata ante cualquier incidencia."
    }
  ];

  return (
    <div>
      <Hero
        title="Preguntas Frecuentes"
        subtitle="Resuelve todas tus dudas sobre nuestros servicios de seguridad"
        cta="Contáctanos"
        cta_secondary="¿No encuentras tu respuesta?"
        backgroundImage={data.images.hero.faq}
      />

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
              Preguntas Más Frecuentes
            </h2>
            <p className="text-xl text-gray-600 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              Todo lo que necesitas saber sobre nuestros servicios
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 animate-in fade-in slide-in-from-bottom duration-1000">
            ¿No encontraste tu respuesta?
          </h2>
          <p className="text-xl text-gray-600 mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            Nuestros expertos están disponibles para resolver cualquier duda específica
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
            <Link href="/contacto">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white px-10 py-5 text-lg font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Escribir Consulta
              </Button>
            </Link>
            <Link href={`tel:${data.contact.phone}`}>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-10 py-5 text-lg font-bold rounded-2xl transition-all duration-300 hover:shadow-xl"
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