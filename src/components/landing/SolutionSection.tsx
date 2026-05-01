import { Button } from "@/components/ui/button";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Target, Wallet } from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";
import { PlacarMockup } from "./PlacarMockup";

const blocos = [
  { icon: Wallet, title: "Quanto dá pra jogar", desc: "O número principal do mês.", tone: "text-apito-deep bg-apito/15" },
  { icon: ArrowUpRight, title: "Entrou no jogo", desc: "Salário, renda extra, recebimentos.", tone: "text-gramado bg-gramado/10" },
  { icon: ArrowDownRight, title: "Saiu do jogo", desc: "Contas, cartão, mercado, delivery.", tone: "text-cartao-vermelho bg-cartao-vermelho/10" },
  { icon: Target, title: "Para objetivos", desc: "Reserva, viagem, dívida, qualquer meta.", tone: "text-apito-deep bg-apito/15" },
];

export const SolutionSection = () => {
  return (
    <section className="relative bg-muted py-16 lg:py-20">
      <div className="container grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <span className="inline-block rounded-full bg-campo px-3 py-1 text-xs font-bold uppercase tracking-wider text-apito">
            A solução
          </span>
          <h2 className="mt-4 font-display text-4xl text-campo sm:text-5xl">
            Cara de <span className="text-apito-deep">placar</span>.
            <br />
            Não cara de planilha.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Você registra os lances, acompanha o placar e entende rápido se o mês está sob controle ou se precisa ajustar a marcação.
          </p>

          <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {blocos.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="rounded-xl border border-border bg-card p-3 shadow-card-soft">
                  <div className={`mb-1.5 inline-flex h-8 w-8 items-center justify-center rounded-lg ${b.tone}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="font-display text-base text-campo">{b.title}</p>
                  <p className="text-xs text-muted-foreground">{b.desc}</p>
                </div>
              );
            })}
          </div>

          <Button asChild variant="apito" size="lg" className="mt-6 rounded-full">
            <a href="#cadastro">
              Ver meu placar grátis <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="relative mx-auto w-full max-w-[300px]">
          <div className="absolute inset-0 -z-10 mx-auto h-[400px] w-[400px] -translate-y-10 rounded-full bg-apito/20 blur-3xl" />
          <PhoneFrame>
            <PlacarMockup />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
};
