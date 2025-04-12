'use client';

import Image from 'next/image';

export const AboutUsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 md:px-0">
        <div className="md:w-1/2 pr-8">
          <h2 className="text-3xl font-semibold mb-6 text-primary">
            About Henrique Camargo
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Henrique Camargo is a dedicated labor law attorney with a proven
            track record of successfully representing clients in a wide range of
            labor-related issues. His expertise and commitment to justice make
            him a strong advocate for workers' rights.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            With a deep understanding of labor laws and regulations, Henrique
            Camargo provides personalized legal solutions tailored to each
            client's unique situation.
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
