// Global Types for the Security Camera Website

// Feature interface for homepage features section
export interface Feature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

// Camera data interface
export interface Camera {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  image: string;
  category: 'indoor' | 'outdoor' | 'wireless' | 'wired';
}

// Contact form data interface
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
}

// FAQ item interface
export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

// Company data interface
export interface CompanyData {
  name: string;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  benefits: string[];
  services: string[];
}

// Navigation item interface
export interface NavigationItem {
  name: string;
  href: string;
  description?: string;
}

// SEO metadata interface
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

// API Response interfaces
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ContactSubmissionResponse {
  id: string;
  timestamp: string;
  status: 'pending' | 'processed' | 'completed';
}

// Component prop interfaces
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AnimatedComponentProps extends BaseComponentProps {
  delay?: number;
  duration?: number;
  animation?: 'fade-in' | 'slide-up' | 'scale-in';
}

// Utility types
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;