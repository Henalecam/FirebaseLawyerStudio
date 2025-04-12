'use client';

import Image from 'next/image';

import {Button} from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 md:px-0">
        <div className="md:w-1/2 pr-8">
          <h1 className="text-5xl font-bold mb-6 text-primary">
            Your Advocate in Labor Law
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Navigating the complexities of labor law can be daunting. With
            years of experience and a commitment to justice, Henrique Camargo
            provides effective legal solutions tailored to your unique needs.
            Trust in a dedicated professional to defend your rights.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/80">
            Schedule Your Free Consultation
          </Button>
        </div>
        <div className="md:w-1/2">
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
