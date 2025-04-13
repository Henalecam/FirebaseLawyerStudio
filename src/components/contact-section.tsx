'use client';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';

export const ContactSection = () => {
  return (
    <section className="py-16" id="contact-section">
      <div className="container mx-auto text-center px-4 md:px-0">
        <h2 className="text-3xl font-semibold mb-8 text-primary">
          Entre em Contato
        </h2>
        <p className="text-muted-foreground mb-8">
          Precisa de ajuda com questões trabalhistas? Entre em contato conosco
          para agendar uma consulta e descobrir como Henrique Camargo pode
          proteger seus direitos.
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
            <Button className="bg-primary text-primary-foreground hover:bg-primary/80">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
