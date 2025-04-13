'use client';

import {Button} from '@/components/ui/button';
import {CheckCircle} from 'lucide-react';

export const LeadCaptureSection = () => {
  return (
    <section className="bg-background py-12">
      <div className="container mx-auto text-center px-4 md:px-0">
        <h1 className="text-4xl font-extrabold text-primary mb-4">
          Você foi demitido ou teve seus direitos violados no trabalho?
        </h1>
        <h2 className="text-2xl text-muted-foreground mb-8">
          Calcule agora quanto pode ter direito a receber!
        </h2>

        <div className="mb-8">
          <Button className="bg-accent text-accent-foreground hover:bg-accent/80 font-semibold">
            Calcular Meus Direitos
          </Button>
          <p className="text-sm text-muted-foreground mt-2">
            👉 Use nossa Calculadora Trabalhista Gratuita e descubra em menos de 1
            minuto se a empresa te deve algo.
          </p>
        </div>

        <div className="mb-8">
          <p className="text-lg text-muted-foreground font-semibold">
            🎯 Faça um diagnóstico rápido e confidencial:
          </p>
          <ul className="list-none text-left pl-6 text-muted-foreground">
            <li className="mb-1">Trabalhou sem registro?</li>
            <li className="mb-1">Não recebeu horas extras?</li>
            <li>Sofreu assédio ou pressão no trabalho?</li>
          </ul>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/80 mt-4 font-semibold">
            Fazer Diagnóstico Agora
          </Button>
          <p className="text-sm text-muted-foreground mt-2">
            Responda 5 perguntas e veja um raio-x do seu caso. Não leva nem 2
            minutos.
          </p>
        </div>

        <div className="mb-8">
          <p className="text-lg text-muted-foreground">
            💬 Fale agora com um especialista.
          </p>
          <Button className="bg-green-500 text-primary-foreground hover:bg-green-600 font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="mr-2 h-4 w-4"
              viewBox="0 0 512 512"
            >
              <path d="M411.8 28.3c-46.1-27.9-104.4-43.6-165.1-43.6-180.6 0-327.7 147-327.7 327.6 0 57.4 18.1 112.2 51.2 160.2L0 512l141.4-37.1c47.9 33.1 102.7 51.2 160.1 51.2 180.6 0 327.7-147 327.7-327.6 0-60.8-16-118.9-45.4-171.8zm-147.3 334.6c-7.1 13.3-36.2 21.2-49.5 14.1-13.3-7.1-22.6-26.2-15.5-39.5 6-11.2 20.1-18 32.9-15.8 13.3 7.1 22.6 26.2 15.5 39.5-6 11.2-20.1 18-32.9 15.8zm86.9-64.1c-7.1 13.3-36.2 21.2-49.5 14.1-13.3-7.1-22.6-26.2-15.5-39.5 6-11.2 20.1-18 32.9-15.8 13.3 7.1 22.6 26.2 15.5 39.5-6 11.2-20.1 18-32.9 15.8zm-202.5-14c-7.1 13.3-36.2 21.2-49.5 14.1-13.3-7.1-22.6-26.2-15.5-39.5 6-11.2 20.1-18 32.9-15.8 13.3 7.1 22.6 26.2 15.5 39.5-6 11.2-20.1 18-32.9 15.8zm138.1-63.4c-7.1 13.3-36.2 21.2-49.5 14.1-13.3-7.1-22.6-26.2-15.5-39.5 6-11.2 20.1-18 32.9-15.8 13.3 7.1 22.6 26.2 15.5 39.5-6 11.2-20.1 18-32.9 15.8zm64.7-63.4c-7.1 13.3-36.2 21.2-49.5 14.1-13.3-7.1-22.6-26.2-15.5-39.5 6-11.2 20.1-18 32.9-15.8 13.3 7.1 22.6 26.2 15.5 39.5-6 11.2-20.1 18-32.9 15.8zm-273.2 77.4c-7.1 13.3-36.2 21.2-49.5 14.1-13.3-7.1-22.6-26.2-15.5-39.5 6-11.2 20.1-18 32.9-15.8 13.3 7.1 22.6 26.2 15.5 39.5-6 11.2-20.1 18-32.9 15.8z" />
            </svg>
            Falar com Advogado no WhatsApp
          </Button>
          <p className="text-sm text-muted-foreground mt-2">
            Atendimento direto, sigiloso e gratuito.
          </p>
        </div>

        <div className="mb-8 text-left">
          <ul className="list-none pl-6">
            <li className="flex items-center mb-2">
              <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
              <span className="text-muted-foreground">
                R$ 18.000 para trabalhador sem carteira
              </span>
            </li>
            <li className="flex items-center mb-2">
              <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
              <span className="text-muted-foreground">
                R$ 12.500 em acordo por horas extras
              </span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
              <span className="text-muted-foreground">
                R$ 7.300 por assédio moral e psicológico
              </span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs text-muted-foreground italic">
            🔐 Garantia de sigilo absoluto: Você pode nos consultar com total
            segurança. Nenhuma empresa será informada — sua privacidade é nossa
            prioridade.
          </p>
        </div>
      </div>
    </section>
  );
};
