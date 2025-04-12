'use client';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';

export const ContactSection = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Entre em Contato</h2>
        <p className="text-gray-700 mb-6">
          Estamos prontos para ajudar com suas questões trabalhistas. Entre em
          contato para agendar uma consulta.
        </p>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <Input type="text" placeholder="Seu Nome" className="w-full" />
          </div>
          <div className="mb-4">
            <Input type="email" placeholder="Seu Email" className="w-full" />
          </div>
          <div className="mb-4">
            <Textarea placeholder="Sua Mensagem" className="w-full" />
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/80">
            Enviar Mensagem
          </Button>
        </form>
      </div>
    </section>
  );
};
