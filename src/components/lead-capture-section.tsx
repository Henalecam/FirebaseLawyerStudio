'use client';

import {CheckCircle} from 'lucide-react';
import Image from 'next/image';
import {useState, useEffect} from 'react';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';

export const LeadCaptureSection = () => {
  const [estimatedValue, setEstimatedValue] = useState<number>(0);

  // State variables for user inputs
  const [workedWithoutRegistration, setWorkedWithoutRegistration] = useState<boolean | null>(null);
  const [unpaidOvertime, setUnpaidOvertime] = useState<number>(0);
  const [sufferedHarassment, setSufferedHarassment] = useState<boolean | null>(null);

  useEffect(() => {
    let baseValue = 0;

    if (workedWithoutRegistration === true) {
      baseValue += 18000;
    }
    baseValue += unpaidOvertime;
    if (sufferedHarassment === true) {
      baseValue += 7300;
    }

    setEstimatedValue(baseValue);
  }, [workedWithoutRegistration, unpaidOvertime, sufferedHarassment]);

  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-primary mb-4">
          Descubra Seus Direitos Trabalhistas!
        </h1>
        <h2 className="text-2xl text-muted-foreground mb-8">
          Calcule agora uma estimativa do que você pode ter direito a receber.
        </h2>

        {/* Added Inputs */}
        <div className="mb-4 flex flex-col items-center">
          <label className="text-lg text-muted-foreground font-semibold mb-2">
            Trabalhou sem registro?
          </label>
          <Select
            onValueChange={value => setWorkedWithoutRegistration(value === 'true')}
          >
            <SelectTrigger className="w-48">
              <SelectValue
                placeholder="Selecione"
                defaultValue={
                  null === workedWithoutRegistration
                    ? undefined
                    : workedWithoutRegistration.toString()
                }
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="false">Não</SelectItem>
              <SelectItem value="true">Sim</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mb-4 flex flex-col items-center">
          <label className="text-lg text-muted-foreground font-semibold mb-2">
            Horas extras não pagas? (estimativa em R$)
          </label>
          <Input
            type="number"
            placeholder="Valor Estimado"
            className="w-48 text-black border-2 border-gray-300 bg-white [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            onChange={e => {
              const value = Math.max(0, Number(e.target.value));
              setUnpaidOvertime(value);
            }}
            min="0"
          />
        </div>

        <div className="mb-4 flex flex-col items-center">
          <label className="text-lg text-muted-foreground font-semibold mb-2">
            Sofreu assédio ou pressão no trabalho?
          </label>
          <Select
            onValueChange={value => setSufferedHarassment(value === 'true')}
          >
            <SelectTrigger className="w-48">
              <SelectValue
                placeholder="Selecione"
                defaultValue={
                  null === sufferedHarassment
                    ? undefined
                    : sufferedHarassment.toString()
                }
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="false">Não</SelectItem>
              <SelectItem value="true">Sim</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mb-8">
          <div className="font-semibold text-primary">
            Estimativa: R$ {estimatedValue}
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            👉 Descubra em menos de 1 minuto se a empresa te deve algo.
          </p>
        </div>

        <div className="mb-8">
          <p className="text-lg text-muted-foreground font-semibold">
            Entenda seus direitos:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {/* Card 1: Trabalho sem registro */}
            <div className="p-4 bg-card rounded-lg shadow-md text-left">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Trabalho sem registro
              </h3>
              <p className="text-muted-foreground">
                O trabalho sem registro (ou "trabalho informal") ocorre quando o
                empregador não formaliza o vínculo empregatício através do
                registro na Carteira de Trabalho e Previdência Social (CTPS).
                Essa prática é ilegal e priva o trabalhador de diversos direitos.
              </p>
            </div>

            {/* Card 2: Horas extras não pagas */}
            <div className="p-4 bg-card rounded-lg shadow-md text-left">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Horas extras não pagas
              </h3>
              <p className="text-muted-foreground">
                A legislação trabalhista estabelece que a jornada de trabalho
                padrão é de 8 horas diárias e 44 horas semanais. As horas
                trabalhadas além desse limite devem ser pagas como horas extras,
                com um adicional de, no mínimo, 50% sobre o valor da hora normal.
              </p>
            </div>

            {/* Card 3: Assédio ou pressão no trabalho */}
            <div className="p-4 bg-card rounded-lg shadow-md text-left">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Assédio ou pressão no trabalho
              </h3>
              <p className="text-muted-foreground">
                O assédio moral no trabalho é caracterizado por condutas
                abusivas, repetitivas e prolongadas, que expõem o trabalhador a
                situações humilhantes e constrangedoras.
              </p>
            </div>
          </div>
        </div>

        <Button
          onClick={() => {
            window.open(
              'https://wa.me/5541999155948?text=' +
                encodeURIComponent('Quero saber mais sobre os seus serviços'),
              '_blank'
            );
          }}
          className="mx-auto bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-2"
            style={{ minWidth: '20px' }}
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span>Fale com um advogado no WhatsApp</span>
        </Button>
        <p className="text-sm text-muted-foreground mt-2">
          Atendimento direto, sigiloso e gratuito.
        </p>

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
