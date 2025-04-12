'use client';

const testimonials = [
  {
    name: 'Maria Silva',
    text:
      'Excelente advogado, me ajudou muito com meu processo trabalhista. Recomendo!',
  },
  {
    name: 'João Pereira',
    text:
      'Profissional competente e dedicado, me orientou em todas as etapas do processo.',
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Depoimentos</h2>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mb-4"
          >
            <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
            <p className="text-primary font-semibold">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

