'use client';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';

export const ContactSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center px-4 md:px-0">
        <h2 className="text-3xl font-semibold mb-8 text-primary">
          Entre em Contato
        </h2>
        <p className="text-gray-700 mb-8">
          Estamos prontos para ajudar com suas questões trabalhistas. Entre em
          contato para agendar uma consulta.
        </p>
        <div className="max-w-lg mx-auto">
          <form className="grid grid-cols-1 gap-6">
            <div>
              <Input type="text" placeholder="Seu Nome" className="w-full" />
            </div>
            <div>
              <Input type="email" placeholder="Seu Email" className="w-full" />
            </div>
            <div>
              <Textarea placeholder="Sua Mensagem" className="w-full" />
            </div>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/80">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
