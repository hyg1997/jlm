'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'gradient-primary' | 'gradient-secondary' | 'outline-light' | 'default';
  size?: 'sm' | 'default' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}

export default function CTAButton({
  href,
  children,
  variant = 'gradient-primary',
  size = 'lg',
  icon: Icon,
  iconPosition = 'left',
  className = '',
  external = false,
  ariaLabel
}: CTAButtonProps) {
  const baseClasses = 'px-10 py-5 text-lg font-bold rounded-2xl hover:scale-105 transition-transform duration-300';
  const combinedClasses = `${baseClasses} ${className}`;

  const buttonContent = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="h-5 w-5 mr-2" aria-hidden="true" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="h-5 w-5 ml-2" aria-hidden="true" />}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className="inline-block"
      >
        <Button
          variant={variant}
          size={size}
          className={combinedClasses}
        >
          {buttonContent}
        </Button>
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel}>
      <Button
        variant={variant}
        size={size}
        className={combinedClasses}
      >
        {buttonContent}
      </Button>
    </Link>
  );
}

// Componente especializado para botones de contacto
interface ContactCTAProps {
  text?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export function ContactCTA({ 
  text = 'Cotizar Ahora', 
  className = '',
  variant = 'primary' 
}: ContactCTAProps) {
  return (
    <CTAButton
      href="/contacto"
      variant={variant === 'primary' ? 'gradient-primary' : 'outline-light'}
      className={className}
      ariaLabel={`${text} - Ir a página de contacto`}
    >
      {text}
    </CTAButton>
  );
}

// Componente especializado para botones de teléfono
interface PhoneCTAProps {
  phoneNumber: string;
  text?: string;
  className?: string;
}

export function PhoneCTA({ 
  phoneNumber, 
  text = 'Llamar Ahora', 
  className = '' 
}: PhoneCTAProps) {
  return (
    <CTAButton
      href={`tel:${phoneNumber}`}
      variant="outline-light"
      external
      className={className}
      ariaLabel={`${text} - Llamar al ${phoneNumber}`}
    >
      {text}
    </CTAButton>
  );
}