import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";
import { PlacarMockup } from "./PlacarMockup";
import carlao from "@/assets/professor-carlao.png";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-campo pb-16 pt-28 text-linha lg:pb-24 lg:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-apito/15 blur-3xl" />
      </div>

      <div className="container relative grid items-center gap-10 lg:grid-cols-[1fr_1.15fr]">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-linha/20 bg-linha/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-linha/80">
            <Sparkles className="h-3 w-3 text-apito" /> Conta grátis · sem cartão
          </span>

          <h1 className="mt-5 font-display text-4xl leading-[0.95] xs:text-5xl sm:text-6xl lg:text-7xl">
            Veja o <span className="text-apito">placar do seu mês</span> em segundos.
          </h1>

          <p className="mt-5 max-w-lg mx-auto lg:mx-0 text-lg text-linha/80">
            Registre os lances, acompanhe entradas, saídas e objetivos. Em poucos minutos você entende o jogo do mês — sem planilha, sem complicação.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row justify-center lg:justify-start">
            <Button asChild variant="apito" size="xl" className="rounded-full">
              <a href="#cadastro">
                Criar minha conta grátis <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="campo-outline" size="xl" className="rounded-full">
              <a href="#como-funciona">Ver como funciona</a>
            </Button>
          </div>

          <p className="mt-4 flex items-center justify-center lg:justify-start gap-2 text-xs text-linha/60">
            <ShieldCheck className="h-4 w-4 text-apito" />
            Sem cartão. Sem compromisso.
          </p>
        </div>

        {/* Phone mockup + Carlão */}
        <div className="relative mx-auto lg:ml-auto lg:mr-0">
          <PhoneFrame>
            <PlacarMockup />
          </PhoneFrame>

          {/* Floating dark cards (discretos e estáticos) */}
          <div className="absolute -left-6 top-24 hidden rotate-[-4deg] rounded-xl border border-linha/10 bg-campo-2-flat p-2.5 shadow-mockup md:block">
            <p className="text-[9px] uppercase tracking-wider text-linha/55 text-left">Entrou no jogo</p>
            <p className="font-display text-base text-gramado text-left">R$ 5.400</p>
          </div>
          <div className="absolute -right-6 bottom-24 hidden rotate-[3deg] rounded-xl border border-apito/20 bg-campo-2-flat p-2.5 shadow-apito/10 md:block">
            <p className="text-[9px] uppercase tracking-wider text-linha/55 text-left">Para objetivos</p>
            <p className="font-display text-base text-apito text-left">R$ 450</p>
          </div>

          {/* Carlão guia (lateral, menor) */}
          <img
            src={carlao}
            alt="Professor Carlão"
            className="absolute -bottom-6 -right-12 hidden w-28 lg:block grayscale-[0.2]"
          />
        </div>
      </div>
    </section>
  );
};
