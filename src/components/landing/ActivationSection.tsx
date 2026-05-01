import { Button } from "@/components/ui/button";
import { ArrowRight, LayoutDashboard, ListChecks, UserPlus } from "lucide-react";

const passos = [
  {
    icon: UserPlus,
    title: "Crie sua conta",
    desc: "Sem cartão. Sem cadastro infinito.",
  },
  {
    icon: ListChecks,
    title: "Registre alguns lances",
    desc: "Salário, mercado, contas. O que tiver na cabeça.",
  },
  {
    icon: LayoutDashboard,
    title: "Veja o Placar do Mês",
    desc: "Entenda o que entrou, saiu e quanto ainda dá pra jogar.",
  },
];

export const ActivationSection = () => {
  return (
    <section id="cadastro" className="relative bg-muted py-16 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-apito px-3 py-1 text-xs font-bold uppercase tracking-wider text-campo">
            Entrar em campo
          </span>
          <h2 className="mt-4 font-display text-4xl text-campo sm:text-5xl">
            Crie sua conta grátis e veja
            <br />
            seu <span className="text-apito-deep">placar por dentro</span>.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Em poucos minutos, você já entende o jogo do mês. Seu primeiro passo não é decidir nada — é enxergar o placar.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
          {passos.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="rounded-2xl border border-border bg-card p-5 shadow-card-soft">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-campo text-apito">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-display text-lg text-campo">{c.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-md text-center">
          <Button asChild variant="apito" size="xl" className="w-full rounded-full">
            <a href="#cadastro" aria-label="Criar minha conta grátis">
              Criar minha conta grátis <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <p className="mt-3 text-xs text-muted-foreground">
            Sem cartão. Sem compromisso.
          </p>
        </div>
      </div>
    </section>
  );
};
