'use client';

import Image from 'next/image';

const testimonials = [
  {
    name: 'Maria Silva',
    text:
      'Excelente advogado, me ajudou muito com meu processo trabalhista. Recomendo!',
    image: '/images/maria.jpg',
  },
  {
    name: 'João Pereira',
    text:
      'Profissional competente e dedicado, me orientou em todas as etapas do processo.',
    image: '/images/joao.jpg',
  },
  {
    name: 'Rodrigo Souza',
    text:
      'Superou minhas expectativas! Atendimento atencioso e eficiente. Muito satisfeito com o resultado.',
    image: '/images/rodrigo.jpg',
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center px-4 md:px-0">
        <h2 className="text-3xl font-semibold mb-8 text-primary">
          Depoimentos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full w-12 h-12 mr-4"
                />
                <div>
                  <p className="text-primary font-semibold">{testimonial.name}</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
