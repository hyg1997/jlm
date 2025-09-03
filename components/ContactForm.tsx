'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    message: '',
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', propertyType: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-2xl shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
          Solicita tu Cotización
        </CardTitle>
        <CardDescription className="text-lg text-gray-600">
          Completa el formulario y nos contactaremos contigo en menos de 24 horas
        </CardDescription>
      </CardHeader>
      <CardContent className="px-8 pb-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                Nombre completo *
              </Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="Tu nombre completo"
                className="h-12 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="tu@email.com"
                className="h-12 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                Teléfono *
              </Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="+51 999 999 999"
                className="h-12 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="propertyType" className="text-sm font-semibold text-gray-700">
                Tipo de propiedad *
              </Label>
              <Select required value={formData.propertyType} onValueChange={(value) => handleChange('propertyType', value)}>
                <SelectTrigger className="h-12 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300">
                  <SelectValue placeholder="Selecciona el tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="casa">Casa</SelectItem>
                  <SelectItem value="departamento">Departamento</SelectItem>
                  <SelectItem value="oficina">Oficina</SelectItem>
                  <SelectItem value="local-comercial">Local Comercial</SelectItem>
                  <SelectItem value="almacen">Almacén</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
              Mensaje adicional
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              placeholder="Cuéntanos más detalles sobre tus necesidades de seguridad..."
              rows={4}
              className="rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300 resize-none"
            />
          </div>

          <Button 
            type="submit" 
            disabled={status === 'loading'}
            className="w-full bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white py-4 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {status === 'loading' ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Enviando...</span>
              </div>
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" />
                Enviar Solicitud
              </>
            )}
          </Button>

          {status === 'success' && (
            <div className="flex items-center space-x-2 text-green-700 bg-green-50 p-4 rounded-xl border border-green-200 animate-in fade-in slide-in-from-bottom duration-500">
              <CheckCircle className="h-5 w-5" />
              <span>¡Mensaje enviado exitosamente! Te contactaremos pronto.</span>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center space-x-2 text-red-700 bg-red-50 p-4 rounded-xl border border-red-200 animate-in fade-in slide-in-from-bottom duration-500">
              <AlertCircle className="h-5 w-5" />
              <span>Error al enviar el mensaje. Por favor, intenta nuevamente.</span>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}