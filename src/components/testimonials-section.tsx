'use client';

import Image from 'next/image';

const testimonials = [
  {
    name: 'Maria Silva',
    role: 'Profissional de TI',
    text:
      'O Dr. Henrique foi fundamental na resolução do meu caso de assédio moral. Sua abordagem profissional e conhecimento profundo das leis trabalhistas garantiram uma indenização justa. Muito grata pelo suporte em um momento tão delicado.',
    image: '/images/maria.jpg',
  },
  {
    name: 'João Pereira',
    role: 'Gerente Comercial',
    text:
      'Após 15 anos de empresa, enfrentei uma demissão injusta. O escritório conduziu meu processo com excelência, recuperando todos os meus direitos e garantindo uma negociação favorável. Profissionalismo e dedicação excepcionais.',
    image: '/images/joao.jpg',
  },
  {
    name: 'Rodrigo Souza',
    role: 'Analista Financeiro',
    text:
      'Questões de horas extras e banco de horas resolvidas com maestria. A equipe do Dr. Henrique não só ganhou minha causa como também garantiu que a empresa regularizasse a situação. Recomendo fortemente seus serviços.',
    image: '/images/rodrigo.jpg',
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-24 bg-muted/30">
      <div className="container mx-auto text-center px-4 md:px-0">
        <h2 className="text-4xl font-bold mb-4 text-primary">
          Histórias de Sucesso
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Conheça alguns dos milhares de profissionais que já recuperaram seus direitos trabalhistas com nossa assessoria jurídica especializada.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                    sizes="48px"
                  />
                </div>
                <div className="text-left ml-4">
                  <p className="text-primary font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground italic text-left">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
