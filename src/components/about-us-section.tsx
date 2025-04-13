'use client';

import Image from 'next/image';

export const AboutUsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 md:px-0">
        <div className="md:w-1/2 pr-8">
          <h2 className="text-3xl font-semibold mb-6 text-primary">
            Sobre Henrique Camargo
          </h2>
          <p className="text-lg  mb-8 text-muted-foreground">
            Henrique Camargo é um advogado trabalhista dedicado, com vasta
            experiência na representação de clientes em diversas questões
            laborais. Seu compromisso com a justiça o torna um forte defensor
            dos direitos dos trabalhadores.
          </p>
          <p className="text-lg  mb-8 text-muted-foreground">
            Com um profundo conhecimento das leis e regulamentos trabalhistas,
            Henrique Camargo oferece soluções jurídicas personalizadas,
            adaptadas à situação de cada cliente.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/legal-office.jpg"
            alt="Equipe do Escritório"
            width={500}
            height={300}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

