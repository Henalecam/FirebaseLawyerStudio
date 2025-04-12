'use client';

import {List} from 'lucide-react';

const services = [
  'Litígios Trabalhistas',
  'Negociação Coletiva',
  'Consultoria Jurídica',
  'Assessoria em Rescisão Contratual',
];

export const ServicesSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Serviços</h2>
        <ul className="list-none pl-0">
          {services.map((service, index) => (
            <li
              key={index}
              className="text-lg text-gray-700 mb-2 flex items-center justify-center"
            >
              <List className="mr-2 text-primary" />
              {service}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

