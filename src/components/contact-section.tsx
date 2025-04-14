'use client';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Phone, Mail, MapPin, Clock} from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para ajudar você a defender seus direitos. Entre em contato para uma avaliação gratuita do seu caso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Formulário */}
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Nome
                  </label>
                  <Input placeholder="Seu nome completo" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Telefone
                  </label>
                  <Input placeholder="(00) 00000-0000" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">
                  Email
                </label>
                <Input type="email" placeholder="seu@email.com" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">
                  Assunto
                </label>
                <Input placeholder="Tipo de caso ou consulta" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">
                  Mensagem
                </label>
                <Textarea 
                  placeholder="Descreva brevemente seu caso..."
                  className="min-h-[120px]"
                />
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-muted-foreground">(11) 99999-9999</p>
                    <p className="text-muted-foreground">(11) 3333-3333</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">contato@camargolegal.com.br</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Endereço</p>
                    <p className="text-muted-foreground">
                      Av. Paulista, 1000 - Bela Vista
                      <br />
                      São Paulo - SP, 01310-100
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Horário de Atendimento</p>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 9h às 18h
                      <br />
                      Sábados: 9h às 13h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Atendimento Emergencial</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Disponível 24/7 para casos urgentes de acidentes de trabalho ou situações que exijam intervenção imediata.
              </p>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                <Phone className="w-4 h-4 mr-2" />
                Ligar Agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
