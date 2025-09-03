'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQ {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  faqs: FAQ[];
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {faqs.map((faq, index) => (
        <AccordionItem 
          key={index} 
          value={`item-${index}`}
          className="border border-gray-200 rounded-xl px-6 py-2 hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm"
        >
          <AccordionTrigger className="text-left text-lg font-semibold hover:text-blue-700 transition-all duration-300 hover:no-underline py-6">
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6 animate-in slide-in-from-top duration-300">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}