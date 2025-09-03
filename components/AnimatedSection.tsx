'use client';

import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right';
  delay?: number;
  duration?: number;
  id?: string;
  ariaLabel?: string;
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade-in',
  delay = 0,
  duration = 0.8,
  id,
  ariaLabel
}: AnimatedSectionProps) {
  const getAnimationClass = () => {
    switch (animation) {
      case 'slide-up':
        return 'animate-smooth-slide-up';
      case 'slide-left':
        return 'animate-smooth-slide-left';
      case 'slide-right':
        return 'animate-smooth-slide-right';
      default:
        return 'animate-smooth-fade-in';
    }
  };

  const animationStyle = {
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`
  };

  return (
    <section
      id={id}
      className={`${getAnimationClass()} ${className}`}
      style={animationStyle}
      aria-label={ariaLabel}
    >
      {children}
    </section>
  );
}

// Componente para elementos animados individuales
interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right';
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}

export function AnimatedElement({
  children,
  className = '',
  animation = 'fade-in',
  delay = 0,
  as: Component = 'div'
}: AnimatedElementProps) {
  const getAnimationClass = () => {
    switch (animation) {
      case 'slide-up':
        return 'animate-smooth-slide-up';
      case 'slide-left':
        return 'animate-smooth-slide-left';
      case 'slide-right':
        return 'animate-smooth-slide-right';
      default:
        return 'animate-smooth-fade-in';
    }
  };

  const animationStyle = {
    animationDelay: `${delay}s`
  };

  return (
    <Component
      className={`${getAnimationClass()} ${className}`}
      style={animationStyle}
    >
      {children}
    </Component>
  );
}

// Hook para animaciones programáticas
export function useAnimationSequence(elements: string[], delay = 0.2) {
  const animateSequence = () => {
    elements.forEach((selector, index) => {
      const element = document.querySelector(selector);
      if (element) {
        setTimeout(() => {
          element.classList.add('animate-smooth-slide-up');
        }, index * delay * 1000);
      }
    });
  };

  return { animateSequence };
}