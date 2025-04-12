'use client';

const testimonials = [
  {
    name: 'Maria Silva',
    text:
      'Excelente advogado, me ajudou muito com meu processo trabalhista. Recomendo!',
    image: 'https://picsum.photos/50/50',
  },
  {
    name: 'João Pereira',
    text:
      'Profissional competente e dedicado, me orientou em todas as etapas do processo.',
    image: 'https://picsum.photos/50/50',
  },
  {
    name: 'Ana Souza',
    text:
      'Superou minhas expectativas! Atendimento atencioso e eficiente. Muito satisfeita com o resultado.',
    image: 'https://picsum.photos/50/50',
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto text-center px-4 md:px-0">
        <h2 className="text-3xl font-semibold mb-8 text-primary">
          Depoimentos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full w-12 h-12 mr-4"
                />
                <div>
                  <p className="text-primary font-semibold">{testimonial.name}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
