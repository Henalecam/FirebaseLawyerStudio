'use client';

import Image from 'next/image';

import {Button} from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto flex items-center justify-center">
        <div className="w-1/2 pr-8">
          <h1 className="text-5xl font-bold mb-6 text-primary">
            Especialista em Direito Trabalhista
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Defendendo os direitos dos trabalhadores com experiência e
            dedicação. Conte com Henrique Camargo para soluções jurídicas
            eficazes.
          </p>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/80">
            Agende sua Consulta Gratuita
          </Button>
        </div>
        <div className="w-1/2">
          <Image
            src="https://picsum.photos/500/500"
            alt="Advogado Henrique Camargo"
            width={500}
            height={500}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};
