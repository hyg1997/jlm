import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  cta: string;
  cta_secondary: string;
  backgroundImage?: string;
  showSecondary?: boolean;
}

export default function Hero({ 
  title, 
  subtitle, 
  cta, 
  cta_secondary, 
  backgroundImage = "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg",
  showSecondary = true 
}: HeroProps) {
  return (
    <section className="relative h-[80vh] min-h-[600px] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse will-change-transform"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse will-change-transform" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-[20s] hover:scale-105"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center animate-in fade-in slide-in-from-bottom duration-1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight animate-in slide-in-from-left duration-1000 delay-300">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed animate-in slide-in-from-left duration-1000 delay-500">
              {subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 animate-in slide-in-from-bottom duration-1000 delay-700">
              <Link href="/contacto">
                <Button 
                  variant="gradient-primary"
                  size="lg" 
                  className="px-10 py-5 text-lg font-bold rounded-2xl hover:scale-105"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  {cta}
                </Button>
              </Link>
              
              {showSecondary && (
                <Link href="tel:+51974598249">
                  <Button 
                    variant="outline-light" 
                    size="lg"
                    className="px-10 py-5 text-lg font-bold rounded-2xl"
                  >
                    {cta_secondary}
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}