'use client';

import Image from 'next/image';
import {Button} from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-office.jpg"
          alt="Escritório de Advocacia"
          fill
          priority
          className="object-cover brightness-[0.85] scale-x-[-1]"
          quality={100}
          sizes="100vw"
          style={{
            objectPosition: 'center 25%'
          }}
        />
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/95" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto h-full px-4">
        <div className="flex h-full flex-col items-start justify-center max-w-3xl py-20">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-primary md:text-6xl lg:text-7xl">
            Protegendo Seus Direitos,
            <span className="block mt-2">Garantindo Seu Futuro</span>
          </h1>
          
          <p className="mb-8 text-lg text-muted-foreground/90 md:text-2xl max-w-2xl">
            Especialistas em direito trabalhista com mais de 10 anos defendendo profissionais contra injustiças no ambiente de trabalho.
            <span className="block mt-2">Agende uma análise gratuita do seu caso e conheça seus direitos.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8"
            >
              Avalie Seu Caso Gratuitamente
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 text-base"
            >
              Áreas de Atuação
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-8 border-t border-muted/20 pt-8">
            <div className="text-center sm:text-left">
              <p className="text-3xl font-bold text-primary">+2500</p>
              <p className="text-sm text-muted-foreground/90">Causas Ganhas</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-3xl font-bold text-primary">98%</p>
              <p className="text-sm text-muted-foreground/90">Taxa de Sucesso</p>
            </div>
            <div className="text-center sm:text-left col-span-2 sm:col-span-1">
              <p className="text-3xl font-bold text-primary">R$50M+</p>
              <p className="text-sm text-muted-foreground/90">Em Indenizações</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
