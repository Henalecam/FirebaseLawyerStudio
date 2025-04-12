'use client';

import {Briefcase, Scale, Gavel} from 'lucide-react';

const services = [
  {
    title: 'Litígios Trabalhistas',
    description:
      'Representação em ações judiciais, defendendo os direitos dos trabalhadores em todas as instâncias.',
    icon: Gavel,
  },
  {
    title: 'Negociação Coletiva',
    description:
      'Atuação em negociações com sindicatos e empresas, buscando acordos justos e equilibrados.',
    icon: Scale,
  },
  {
    title: 'Consultoria Jurídica',
    description:
      'Orientação jurídica preventiva, visando evitar conflitos e garantir o cumprimento das leis trabalhistas.',
    icon: Briefcase,
  },
  {
    title: 'Assessoria em Rescisão Contratual',
    description:
      'Assistência na rescisão de contratos, assegurando o pagamento correto de todas as verbas rescisórias.',
    icon: Briefcase,
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center px-4 md:px-0">
        <h2 className="text-3xl font-semibold mb-8 text-primary">Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-secondary rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <service.icon className="text-3xl text-accent mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
