import Link from "next/link";
import { Phone, Mail, MapPin, Shield } from "lucide-react";
import data from "@/content/camaras.json";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-1000">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Shield className="h-10 w-10 text-blue-400 transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-blue-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300"></div>
              </div>
              <span className="text-2xl font-bold group-hover:text-blue-400 transition-colors duration-300">
                {data.company.name}
              </span>
            </Link>
            <p className="text-gray-300 text-base leading-relaxed">
              {data.company.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            <h3 className="text-xl font-bold">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/camaras-seguridad"
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Cámaras de Seguridad
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            <h3 className="text-xl font-bold">Nuestros Servicios</h3>
            <div className="space-y-2 text-sm text-gray-300">
              {data.services.map((service, index) => (
                <Link
                  key={index}
                  href={service.link}
                  className="block hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
            <h3 className="text-xl font-bold">Contáctanos</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <Link
                  href={`tel:${data.contact.phone}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {data.contact.phone}
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <Link
                  href={`mailto:${data.contact.email}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {data.contact.email}
                </Link>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  {data.contact.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400 text-base animate-in fade-in duration-1000 delay-500">
            © 2025 {data.company.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
