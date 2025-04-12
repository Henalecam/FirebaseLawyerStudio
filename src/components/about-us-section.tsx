'use client';

import Image from 'next/image';

export const AboutUsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 md:px-0">
        <div className="md:w-1/2 pr-8">
          <h2 className="text-3xl font-semibold mb-6 text-primary">
            Sobre Nós
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Somos um escritório de advocacia especializado em direito
            trabalhista, com anos de experiência e dedicação aos nossos
            clientes. Nossa missão é garantir que seus direitos sejam
            respeitados e que você receba a melhor representação jurídica
            possível.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Entendemos as complexidades do mundo do trabalho e estamos aqui
            para oferecer soluções jurídicas eficazes e personalizadas para cada
            cliente.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="https://picsum.photos/500/300"
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

