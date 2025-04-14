'use client';

import Image from 'next/image';
import {Award, Briefcase, Scale, Users} from 'lucide-react';

export const AboutUsSection = () => {
  return (
    <section id="sobre" className="py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 md:px-0">
        <div className="md:w-1/2 pr-8">
          <h2 className="text-3xl font-semibold mb-6 text-primary">
            Sobre Henrique Camargo
          </h2>
          <p className="text-lg mb-6 text-muted-foreground">
            Henrique Camargo é um advogado trabalhista dedicado, com vasta
            experiência na representação de clientes em diversas questões
            laborais. Seu compromisso com a justiça o torna um forte defensor
            dos direitos dos trabalhadores.
          </p>
          <p className="text-lg mb-6 text-muted-foreground">
            Com um profundo conhecimento das leis e regulamentos trabalhistas,
            Henrique Camargo oferece soluções jurídicas personalizadas,
            adaptadas à situação de cada cliente.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-start space-x-2">
              <Briefcase className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-primary">Experiência</h3>
                <p className="text-sm text-muted-foreground">Mais de 10 anos atuando em direito trabalhista</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Users className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-primary">Clientes Atendidos</h3>
                <p className="text-sm text-muted-foreground">Mais de 1000 casos resolvidos com sucesso</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Scale className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-primary">Especialização</h3>
                <p className="text-sm text-muted-foreground">Pós-graduado em Direito do Trabalho e Processo do Trabalho</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Award className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-primary">Reconhecimento</h3>
                <p className="text-sm text-muted-foreground">Premiado como Advogado Destaque em 2023</p>
              </div>
            </div>
          </div>

          <div className="bg-muted p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-primary mb-2">Áreas de Atuação</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Rescisão de Contrato de Trabalho</li>
              <li>Assédio Moral e Sexual</li>
              <li>Horas Extras e Banco de Horas</li>
              <li>Acidentes de Trabalho</li>
              <li>Reconhecimento de Vínculo Empregatício</li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/2 space-y-6">
          <Image
            src="/images/legal-office.jpg"
            alt="Escritório de Advocacia"
            width={500}
            height={300}
            className="rounded-lg shadow-xl mb-6"
          />
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-primary mb-4">Compromisso com o Cliente</h3>
            <p className="text-muted-foreground mb-4">
              "Minha missão é garantir que cada trabalhador tenha seus direitos respeitados e receba o tratamento justo que merece. Cada caso é único e merece atenção personalizada."
            </p>
            <p className="text-sm text-primary font-semibold">- Dr. Henrique Camargo</p>
          </div>
        </div>
      </div>
    </section>
  );
};
