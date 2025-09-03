"use client";

// Next.js imports
import Link from "next/link";

// UI Components
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

// Icons
import { ArrowRight, Camera, Eye, Phone, Shield } from "lucide-react";

// Data
import data from "@/content/camaras.json";
import { useState, useEffect } from "react";

export default function Home(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.hero.slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % data.hero.slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + data.hero.slides.length) % data.hero.slides.length
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {data.hero.slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/${
                  index === 0 ? "8566473" : index === 1 ? "5380664" : "430208"
                }/pexels-photo-${
                  index === 0 ? "8566473" : index === 1 ? "5380664" : "430208"
                }.jpeg')`,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>

            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed max-w-3xl">
                    {slide.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6">
                    <Link href={slide.cta_link}>
                      <Button
                        variant="gradient-primary"
                        size="lg"
                        className="px-10 py-5 text-lg font-bold rounded-2xl hover:scale-105"
                      >
                        {slide.cta}
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Button>
                    </Link>

                    <Link href="/contacto">
                      <Button
                        variant="outline-light"
                        size="lg"
                        className="px-10 py-5 text-lg font-bold rounded-2xl"
                      >
                        <Phone className="h-5 w-5 mr-2" />
                        Cotizar Ahora
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {data.hero.slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            ></button>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-20 backdrop-blur-sm"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-20 backdrop-blur-sm"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight animate-fade-in">
              Nuestros Servicios
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed animate-fade-in">
              Soluciones tecnológicas completas para empresas y hogares
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.services.map((service, index) => (
              <Card
                key={service.id}
                className="text-center border border-slate-200 hover:border-slate-300 transition-all duration-500 hover:-translate-y-2 bg-white group animate-scale-in hover:shadow-xl"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-4 pt-8">
                  <div className="mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {service.id === "telefonia-ip" && (
                      <Phone className="h-10 w-10 text-blue-700" />
                    )}
                    {service.id === "camaras-seguridad" && (
                      <Camera className="h-10 w-10 text-blue-700" />
                    )}
                    {service.id === "cableado-estructurado" && (
                      <Shield className="h-10 w-10 text-blue-700" />
                    )}
                    {service.id === "alarmas-inteligentes" && (
                      <Eye className="h-10 w-10 text-blue-700" />
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-8 px-6">
                  <CardDescription className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </CardDescription>
                  <Link href={service.link}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                    >
                      Ver Detalles
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
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
                ¿Por qué elegir {data.company.name}?
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
                <Link href="/camaras-seguridad">
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

            <div
              className="relative animate-scale-in"
              style={{ animationDelay: "0.4s" }}
            >
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

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
              Números que nos Respaldan
            </h2>
            <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed animate-fade-in">
              Más de una década construyendo confianza y excelencia
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
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
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
