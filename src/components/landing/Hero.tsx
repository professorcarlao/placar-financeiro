import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";
import { PlacarMockup } from "./PlacarMockup";
import carlao from "@/assets/professor-carlao.png";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-campo pb-16 pt-28 text-linha lg:pb-28 lg:pt-36"
    >
      {/* Soft field glow */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-apito/15 blur-3xl" />
      </div>

      <div className="container relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-linha/20 bg-linha/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-linha/80">
            <Sparkles className="h-3 w-3 text-apito" /> Conta grátis · sem cartão
          </span>

          <h1 className="mt-5 font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
            Seu dinheiro está
            <br />
            tomando <span className="text-apito">gol bobo</span>
            <br />
            todo mês?
          </h1>

          <p className="mt-6 max-w-lg text-lg text-linha/80">
            O Carlão coloca o <strong className="text-linha">placar do seu mês</strong> na sua frente. Em segundos você vê quanto entrou, quanto saiu, suas metas e quanto ainda dá pra gastar — sem planilha e sem virar especialista.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="apito" size="xl" className="rounded-full">
              <a href="#cadastro">
                Criar minha conta grátis <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="campo-outline" size="xl" className="rounded-full">
              <a href="#como-funciona">Ver como funciona</a>
            </Button>
          </div>

          <p className="mt-4 flex items-center gap-2 text-xs text-linha/60">
            <ShieldCheck className="h-4 w-4 text-apito" />
            Comece grátis. Sem cartão. Sem compromisso.
          </p>
        </div>

        {/* Mockup + Carlão */}
        <div className="relative">
          <div className="relative mx-auto w-fit">
            <PhoneFrame className="animate-float-soft">
              <PlacarMockup />
            </PhoneFrame>

            {/* Floating apito tag */}
            <div className="absolute -left-6 top-12 hidden rotate-[-6deg] rounded-2xl bg-linha p-3 text-campo shadow-card-soft md:block">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Clareza em segundos
              </p>
              <p className="font-display text-lg">Sem planilha</p>
            </div>
            <div className="absolute -right-4 bottom-16 hidden rotate-[5deg] rounded-2xl bg-apito p-3 text-campo shadow-apito md:block">
              <p className="text-[10px] font-bold uppercase tracking-wider">Apito do Carlão</p>
              <p className="font-display text-lg">+R$ 1.240</p>
            </div>
          </div>

          {/* Carlão (only here, alerts, char section, final CTA) */}
          <img
            src={carlao}
            alt="Professor Carlão, técnico raiz, apontando para o placar do app"
            className="absolute -bottom-10 -right-6 hidden w-48 lg:block"
          />
        </div>
      </div>
    </section>
  );
};