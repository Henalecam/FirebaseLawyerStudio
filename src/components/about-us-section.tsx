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
            src="https://images.unsplash.com/photo-1505664194779-8be206e3a81c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxlZ2FsJTIwb2ZmaWNlfGVufDB8fDB8fHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
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
