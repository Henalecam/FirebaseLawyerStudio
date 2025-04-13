'use client';

import {Button} from '@/components/ui/button';
import {CheckCircle} from 'lucide-react';
import {useState, useEffect} from 'react';
import {Input} from '@/components/ui/input';
import {toast} from '@/hooks/use-toast';

export const LeadCaptureSection = () => {
  const [estimatedValue, setEstimatedValue] = useState<number>(0);

  // State variables for user inputs
  const [workedWithoutRegistration, setWorkedWithoutRegistration] = useState(false);
  const [unpaidOvertime, setUnpaidOvertime] = useState<number>(0);
  const [sufferedHarassment, setSufferedHarassment] = useState(false);

  useEffect(() => {
    let baseValue = 0;

    if (workedWithoutRegistration) {
      baseValue += 18000;
    }
    baseValue += unpaidOvertime;
    if (sufferedHarassment) {
      baseValue += 7300;
    }

    setEstimatedValue(baseValue);
  }, [workedWithoutRegistration, unpaidOvertime, sufferedHarassment]);

  const handleDiagnose = () => {
    // Scroll to ContactSection
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({behavior: 'smooth'});
    } else {
      toast({
        title: 'Erro',
        description: 'Não foi possível encontrar a seção de contato.',
      });
    }
  };

  const handleWhatsApp = () => {
    // Replace with your WhatsApp link
    window.open('https://wa.me/YOUR_WHATSAPP_NUMBER', '_blank');
  };

  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-primary mb-4">
          Você foi demitido ou teve seus direitos violados no trabalho?
        </h1>
        <h2 className="text-2xl text-muted-foreground mb-8">
          Calcule agora quanto pode ter direito a receber!
        </h2>

        {/* Added Inputs */}
        <div className="mb-4 flex flex-col items-center">
          <label className="text-lg text-muted-foreground font-semibold mb-2">
            Trabalhou sem registro?
          </label>
          <select
            className="w-48 p-2 border rounded text-black"
            onChange={e => setWorkedWithoutRegistration(e.target.value === 'true')}
          >
            <option value={false}>Não</option>
            <option value={true}>Sim</option>
          </select>
        </div>

        <div className="mb-4 flex flex-col items-center">
          <label className="text-lg text-muted-foreground font-semibold mb-2">
            Horas extras não pagas? (estimativa em R$)
          </label>
          <Input
            type="number"
            placeholder="Valor Estimado"
            className="w-48 text-black"
            onChange={e => setUnpaidOvertime(Number(e.target.value))}
          />
        </div>

        <div className="mb-4 flex flex-col items-center">
          <label className="text-lg text-muted-foreground font-semibold mb-2">
            Sofreu assédio ou pressão no trabalho?
          </label>
          <select
            className="w-48 p-2 border rounded text-black"
            onChange={e => setSufferedHarassment(e.target.value === 'true')}
          >
            <option value={false}>Não</option>
            <option value={true}>Sim</option>
          </select>
        </div>

        <div className="mb-8">
          <div className="font-semibold text-primary">
            Estimativa: R$ {estimatedValue}
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            👉 Use nossa Calculadora Trabalhista Gratuita e descubra em menos de 1
            minuto se a empresa te deve algo.
          </p>
        </div>

        <div className="mb-8">
          <p className="text-lg text-muted-foreground font-semibold">
            🎯 Saiba mais sobre seus direitos:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {/* Card 1: Trabalho sem registro */}
            <div className="p-4 bg-card rounded-lg shadow-md text-left">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Trabalho sem registro
              </h3>
              <p className="text-muted-foreground">
                O trabalho sem registro (ou "trabalho informal") ocorre quando o empregador não formaliza o vínculo empregatício através do registro na Carteira de Trabalho e Previdência Social (CTPS). Essa prática é ilegal e priva o trabalhador de diversos direitos.
              </p>
            </div>

            {/* Card 2: Horas extras não pagas */}
            <div className="p-4 bg-card rounded-lg shadow-md text-left">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Horas extras não pagas
              </h3>
              <p className="text-muted-foreground">
                A legislação trabalhista estabelece que a jornada de trabalho padrão é de 8 horas diárias e 44 horas semanais. As horas trabalhadas além desse limite devem ser pagas como horas extras, com um adicional de, no mínimo, 50% sobre o valor da hora normal.
              </p>
            </div>

            {/* Card 3: Assédio ou pressão no trabalho */}
            <div className="p-4 bg-card rounded-lg shadow-md text-left">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Assédio ou pressão no trabalho
              </h3>
              <p className="text-muted-foreground">
                O assédio moral no trabalho é caracterizado por condutas abusivas, repetitivas e prolongadas, que expõem o trabalhador a situações humilhantes e constrangedoras.
              </p>
            </div>
          </div>

          <Button
            variant="secondary"
            onClick={handleDiagnose}
            className="mt-4 font-semibold"
          >
            Fale com um especialista
          </Button>
          <p className="text-sm text-muted-foreground mt-2">
            Tenha uma consulta e veja um raio-x do seu caso.
          </p>
        </div>

        <div className="mb-8">
          <p className="text-lg text-muted-foreground">
            💬 Ou, fale agora com um especialista.
          </p>
          <Button
            className="bg-green-500 hover:bg-green-600 text-primary-foreground font-semibold"
            onClick={handleWhatsApp}
          >
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
