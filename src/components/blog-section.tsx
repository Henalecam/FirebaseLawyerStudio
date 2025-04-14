'use client';

import Image from 'next/image';
import {Button} from '@/components/ui/button';
import {ArrowRight, Clock, Calendar} from 'lucide-react';

const blogPosts = [
  {
    title: 'Reforma Trabalhista 2024: O Que Mudou?',
    excerpt: 'Entenda as principais alterações na legislação trabalhista e como elas podem afetar seus direitos como trabalhador.',
    image: '/images/hero-office.jpg',
    date: '15 Mar 2024',
    readTime: '5 min',
    category: 'Legislação',
  },
  {
    title: 'Como Identificar e Combater o Assédio Moral no Trabalho',
    excerpt: 'Guia completo sobre as diferentes formas de assédio moral, seus impactos e as medidas legais para se proteger.',
    image: '/images/hero-office.jpg',
    date: '10 Mar 2024',
    readTime: '7 min',
    category: 'Direitos',
  }
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Últimos Artigos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mantenha-se atualizado sobre seus direitos trabalhistas e as últimas mudanças na legislação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <div 
              key={index}
              className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-muted/20"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime} de leitura</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground/90 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Button 
                  className="w-full bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary transition-colors group/btn"
                >
                  Ler artigo completo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors px-8"
          >
            Ver Todos os Artigos
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
