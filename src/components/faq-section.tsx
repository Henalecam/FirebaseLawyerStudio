'use client';

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion';

const faqData = [
  {
    question: 'Quais são meus direitos como trabalhador?',
    answer:
      'Você tem direito a salário justo, férias, décimo terceiro, FGTS, seguro-desemprego, entre outros. Consulte-nos para saber mais.',
  },
  {
    question: 'Como funciona uma ação trabalhista?',
    answer:
      'A ação trabalhista é um processo judicial para reivindicar seus direitos. Nós cuidamos de todo o processo para você.',
  },
  {
    question: 'Quanto tempo demora para resolver um caso?',
    answer:
      'O tempo varia de caso a caso, mas estamos sempre empenhados em resolver o mais rápido possível.',
  },
];

export const FAQSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center px-4 md:px-0">
        <h2 className="text-3xl font-semibold mb-8 text-primary">
          Perguntas Frequentes
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
