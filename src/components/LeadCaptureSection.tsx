'use client';

import {useState, useEffect} from 'react';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {WhatsAppLogo} from 'lucide-react';
import {cn} from '@/lib/utils';

export const LeadCaptureSection = () => {
  const [estimatedValue, setEstimatedValue] = useState<number>(0);

  // State variables for user inputs
  const [workedWithoutRegistration, setWorkedWithoutRegistration] =
    useState<boolean | null>(null);
  const [unpaidOvertime, setUnpaidOvertime] = useState<number>(0);
  const [sufferedHarassment, setSufferedHarassment] =
    useState<boolean | null>(null);

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

  const handleWhatsAppClick = () => {
    const whatsappNumber = '5511999999999';
    const message = encodeURIComponent(
      `Olá! Gostaria de saber mais sobre a estimativa de meus direitos trabalhistas:
      - Trabalhou sem registro: ${
        workedWithoutRegistration === true ? 'Sim' : 'Não'
      }
      - Horas extras não pagas: R$ ${unpaidOvertime}
      - Sofreu assédio: ${sufferedHarassment === true ? 'Sim' : 'Não'}
      - Estimativa: R$ ${estimatedValue}`
    );

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
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

        <div className="mb-4 flex flex-col items-center">
          <label className="text-lg text-muted-foreground font-semibold mb-2">
            Trabalhou sem registro?
          </label>
          <Select
            onValueChange={value =>
              setWorkedWithoutRegistration(value === 'true')
            }
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
            onValueChange={value =>
              setSufferedHarassment(value === 'true')
            }
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
        </div>

        <div className="mb-8">
          <p className="text-lg text-muted-foreground font-semibold">
            Entenda seus direitos:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
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
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          <WhatsAppLogo className="mr-2" /> Fale com um advogado no WhatsApp
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
