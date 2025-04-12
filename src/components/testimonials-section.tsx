'use client';

const testimonials = [
  {
    name: 'Maria Silva',
    text:
      'Excelente advogado, me ajudou muito com meu processo trabalhista. Recomendo!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b82a10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'João Pereira',
    text:
      'Profissional competente e dedicado, me orientou em todas as etapas do processo.',
    image: 'https://images.unsplash.com/photo-1534528741702-a0c51b6972db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'Ana Souza',
    text:
      'Superou minhas expectativas! Atendimento atencioso e eficiente. Muito satisfeita com o resultado.',
    image: 'https://images.unsplash.com/photo-1573496800685-a280ab9afc5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
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
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
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
