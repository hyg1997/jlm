"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import data from '@/content/camaras.json';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navigation = data.navigation;

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Shield className="h-10 w-10 text-blue-700 transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-blue-700/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300"></div>
              </div>
              <span className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-700">
                {data.company.name}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="relative text-gray-700 hover:text-blue-700 px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-blue-50 group flex items-center"
                  >
                    {item.name}
                    {(item as any).submenu && (
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
                  </Link>
                  
                  {/* Submenu */}
                  {(item as any).submenu && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="py-2">
                        {(item as any).submenu.map((subItem: any) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors duration-200"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="tel:+51974598249">
                <Button className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  <Phone className="h-4 w-4 mr-2" />
                  Cotiza ahora
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative z-50 p-2 text-gray-700 hover:text-blue-700 transition-all duration-300 hover:bg-blue-50 rounded-lg"
              >
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                      isMenuOpen ? "rotate-45 top-3" : "top-1"
                    }`}
                  ></span>
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                      isMenuOpen ? "opacity-0" : "top-3"
                    }`}
                  ></span>
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                      isMenuOpen ? "-rotate-45 top-3" : "top-5"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Menu Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-full bg-white transform transition-transform duration-500 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header Space */}
            <div className="h-20"></div>

            {/* Navigation Links */}
            <div className="flex-1 px-8 py-12">
              <nav className="space-y-8">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-2xl font-semibold text-gray-900 hover:text-blue-700 transition-all duration-300 transform hover:translate-x-2 ${
                      isMenuOpen ? "animate-in slide-in-from-right" : ""
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* CTA Button */}
              <div className="mt-12 space-y-4">
                <Link
                  href="tel:+51974598249"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="w-full bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                    <Phone className="h-4 w-4 mr-2" />
                    Cotiza ahora
                  </Button>
                </Link>

                {/* Contact Info */}
                <div className="pt-8 space-y-4 text-center">
                  <p className="text-gray-600">O contáctanos directamente:</p>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-gray-900">
                      +51 974 598 249
                    </p>
                    <p className="text-gray-600">farias@arcringperu.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
