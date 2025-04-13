'use client';

import Image from 'next/image';

import {Button} from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="py-32  text-center relative">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 md:px-0">
        {/* Overlay with a subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background opacity-80 z-0"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold mb-8 text-primary drop-shadow-md">
            Defendendo Seus Direitos no Trabalho
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Representação jurídica experiente para questões trabalhistas. Agende
            uma consulta gratuita hoje mesmo.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/80">
            Agende sua Consulta Gratuita
          </Button>
        </div>
         <Image
          src="/images/default-hero-image.jpg" // Replace with your actual image path
          alt="Lawyer"
          width={500}
          height={300}
          className="rounded-lg shadow-xl"
        />
        {/* Image */}
        {/* Note: You might consider placing the image on the background with CSS for a more dynamic effect */}
      </div>
    </section>
  );
};
