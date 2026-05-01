import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard, LayoutDashboard, Sparkles } from "lucide-react";

const cards = [
  {
    icon: CreditCard,
    title: "Entre sem cartão",
    desc: "Crie sua conta gratuita e comece pelo básico.",
  },
  {
    icon: LayoutDashboard,
    title: "Veja o Placar do Mês",
    desc: "Entenda quanto entrou, quanto saiu e quanto ainda dá para jogar no mês.",
  },
  {
    icon: Sparkles,
    title: "Explore os recursos por dentro",
    desc: "Metas, gastos fixos, assinaturas e parcelamentos aparecem no app conforme você organiza seu jogo.",
  },
];

export const PricingSection = () => {
  return (
    <section id="cadastro" className="relative bg-muted py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-apito px-3 py-1 text-xs font-bold uppercase tracking-wider text-campo">
            Entrar em campo
          </span>
          <h2 className="mt-4 font-display text-4xl text-campo sm:text-5xl lg:text-6xl">
            Crie sua conta grátis e veja
            <br />
            seu <span className="text-apito-deep">placar por dentro</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Você não precisa decidir nada agora. Entre no app, veja o Placar do Mês, registre seus primeiros lances e entenda se o jeito do Carlão combina com sua rotina.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="rounded-3xl border border-border bg-card p-7 shadow-card-soft transition-transform hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-campo text-apito">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="font-display text-2xl text-campo">{c.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-12 max-w-md text-center">
          <Button asChild variant="apito" size="xl" className="w-full rounded-full">
            <a href="#cadastro" aria-label="Criar minha conta grátis">
              Criar minha conta grátis <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <p className="mt-3 text-xs text-muted-foreground">
            Sem cartão. Sem compromisso. Primeiro você entra em campo, depois decide se quer avançar.
          </p>
        </div>
      </div>
    </section>
  );
};