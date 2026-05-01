import { Button } from "@/components/ui/button";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Target, Wallet } from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";
import { PlacarMockup } from "./PlacarMockup";

const blocos = [
  {
    icon: ArrowUpRight,
    title: "Gols a favor",
    desc: "Tudo que entrou: salário, renda extra, qualquer recebimento.",
    tone: "text-gramado bg-gramado/10",
  },
  {
    icon: ArrowDownRight,
    title: "Gols contra",
    desc: "Contas, cartão, mercado, delivery, transporte e gastos do dia a dia.",
    tone: "text-cartao-vermelho bg-cartao-vermelho/10",
  },
  {
    icon: Target,
    title: "Metas do mês",
    desc: "Quanto você está separando pra reserva, dívida, viagem ou compra importante.",
    tone: "text-apito-deep bg-apito/15",
  },
  {
    icon: Wallet,
    title: "Ainda posso gastar",
    desc: "O número que muita gente queria saber todo dia. Sem culpa, sem susto.",
    tone: "text-campo bg-campo/10",
  },
];

export const SolutionSection = () => {
  return (
    <section className="relative bg-muted py-20 lg:py-28">
      <div className="container grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <span className="inline-block rounded-full bg-campo px-3 py-1 text-xs font-bold uppercase tracking-wider text-apito">
            A solução
          </span>
          <h2 className="mt-4 font-display text-4xl text-campo sm:text-5xl lg:text-6xl">
            Cara de <span className="text-apito-deep">placar</span>.
            <br />
            Não cara de planilha.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Você registra os lances importantes, acompanha o placar e entende rápido se o mês está sob controle ou se é hora de ajustar a marcação.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {blocos.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-border bg-card p-4 shadow-card-soft"
                >
                  <div className={`mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg ${b.tone}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="font-display text-lg text-campo">{b.title}</p>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </div>
              );
            })}
          </div>

          <Button asChild variant="apito" size="lg" className="mt-8 rounded-full">
            <a href="#cadastro">
              Quero ver meu placar grátis <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 mx-auto h-[420px] w-[420px] rounded-full bg-apito/20 blur-3xl" />
          <PhoneFrame>
            <PlacarMockup />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
};