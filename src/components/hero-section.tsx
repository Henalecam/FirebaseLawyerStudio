'use client';

import Image from 'next/image';

import {Button} from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto flex items-center justify-center">
        <div className="w-1/2">
          <Image
            src="https://picsum.photos/500/500"
            alt="Advogado Henrique Camargo"
            width={500}
            height={500}
            className="rounded-full shadow-lg"
          />
        </div>
        <div className="w-1/2 pl-16">
          <h1 className="text-5xl font-bold mb-6">Henrique Camargo</h1>
          <p className="text-lg text-gray-700 mb-8">
            Advogado Trabalhista, especializado em defender os direitos dos
            trabalhadores.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/80">
            Agende sua Consulta
          </Button>
        </div>
      </div>
    </section>
  );
};
