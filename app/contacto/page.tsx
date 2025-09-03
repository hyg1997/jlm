import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import data from "@/content/camaras.json";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para recibir asesoría personalizada sobre cámaras de seguridad. Llamadas, WhatsApp, email disponible.",
};

export default function Contacto() {
  return (
    <div>
      <Hero
        title="Contáctanos"
        subtitle="Recibe asesoría personalizada de nuestros expertos en seguridad"
        cta="Llamar Ahora"
        cta_secondary="WhatsApp"
        backgroundImage={data.images.hero.contact}
        showSecondary={false}
      />

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
              <div className="animate-in fade-in slide-in-from-bottom duration-1000">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Información de Contacto
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Estamos aquí para ayudarte a proteger lo que más valoras.
                  Contáctanos por el medio que prefieras.
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white/90 backdrop-blur-sm group animate-in fade-in slide-in-from-left duration-1000 delay-200">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-6">
                      <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <Phone className="h-6 w-6 text-blue-700" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                          Teléfono
                        </h3>
                        <Link
                          href={`tel:${data.contact.phone}`}
                          className="text-blue-700 hover:text-blue-800 font-semibold text-lg transition-colors duration-300"
                        >
                          {data.contact.phone}
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white/90 backdrop-blur-sm group animate-in fade-in slide-in-from-left duration-1000 delay-300">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-6">
                      <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <Mail className="h-6 w-6 text-green-700" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                          Email
                        </h3>
                        <Link
                          href={`mailto:${data.contact.email}`}
                          className="text-green-700 hover:text-green-800 font-semibold text-lg transition-colors duration-300"
                        >
                          {data.contact.email}
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* WhatsApp */}
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white/90 backdrop-blur-sm group animate-in fade-in slide-in-from-left duration-1000 delay-400">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-6">
                      <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <MessageSquare className="h-6 w-6 text-green-700" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                          WhatsApp
                        </h3>
                        <Link
                          href={`https://wa.me/${data.contact.whatsapp}`}
                          target="_blank"
                          className="text-green-700 hover:text-green-800 font-semibold text-lg transition-colors duration-300"
                        >
                          Enviar mensaje
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Address */}
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white/90 backdrop-blur-sm group animate-in fade-in slide-in-from-left duration-1000 delay-500">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="bg-gradient-to-br from-orange-100 to-red-100 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="h-6 w-6 text-orange-700" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-orange-700 transition-colors duration-300 mb-2">
                          Dirección
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {data.contact.address}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white/90 backdrop-blur-sm group animate-in fade-in slide-in-from-left duration-1000 delay-600">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="bg-gradient-to-br from-purple-100 to-violet-100 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <Clock className="h-6 w-6 text-purple-700" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-purple-700 transition-colors duration-300 mb-2">
                          Horario de Atención
                        </h3>
                        <div className="text-gray-600">
                          <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                          <p>Sábados: 8:00 AM - 2:00 PM</p>
                          <p className="text-sm text-orange-600 font-bold mt-1">
                            Emergencias 24/7
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>


            </div>

            {/* Contact Form */}
            <div className="flex justify-center animate-in fade-in slide-in-from-right duration-1000 delay-300">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
