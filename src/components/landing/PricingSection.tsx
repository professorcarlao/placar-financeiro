import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Trophy } from "lucide-react";

const free = [
  "Placar do Mês básico",
  "Registro manual simples",
  "Categorias inteligentes",
  "Visão inicial das metas",
];

const premium = [
  "Histórico completo mês a mês",
  "Relatórios visuais",
  "Metas avançadas",
  "Alertas do Carlão",
  "Melhorias contínuas",
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
            Comece grátis.
            <br />
            Evolua quando fizer sentido.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A conta gratuita serve pra você conhecer o app e começar a enxergar seu mês com clareza.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl items-stretch gap-6 lg:grid-cols-[1.1fr_1fr]">
          {/* Free — destacado */}
          <div className="relative rounded-3xl border-2 border-apito bg-card p-8 shadow-apito">
            <span className="absolute -top-3 left-8 rounded-full bg-apito-gradient px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-campo">
              Comece por aqui
            </span>
            <p className="font-display text-2xl text-campo">Conta grátis</p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-display text-6xl text-campo">R$ 0</span>
              <span className="text-sm text-muted-foreground">/ pra sempre</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Ideal pra começar, organizar o mês e ver o seu primeiro placar.
            </p>

            <Button asChild variant="apito" size="xl" className="mt-6 w-full rounded-full">
              <a href="#cadastro-form">
                Criar minha conta grátis <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              Sem cartão. Sem compromisso.
            </p>

            <ul className="mt-6 space-y-3">
              {free.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-campo">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-apito text-campo">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Premium — discreto */}
          <div className="relative rounded-3xl border border-border bg-campo p-8 text-linha">
            <Trophy className="mb-3 h-7 w-7 text-apito" />
            <p className="font-display text-2xl">Plano completo</p>
            <p className="mt-2 text-sm text-linha/70">
              Quando quiser histórico, relatórios e os alertas do Carlão.
            </p>
            <Button asChild variant="campo-outline" size="lg" className="mt-6 w-full rounded-full">
              <a href="#recursos">Conhecer recursos premium</a>
            </Button>
            <ul className="mt-6 space-y-3">
              {premium.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-linha/85">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-apito/20 text-apito">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Anchor for the form (placeholder) */}
        <div id="cadastro-form" className="mx-auto mt-12 max-w-md rounded-3xl bg-card p-6 text-center shadow-card-soft">
          <p className="font-display text-xl text-campo">Pronto pra entrar em campo?</p>
          <p className="mt-1 text-sm text-muted-foreground">
            O cadastro abre no app. Sem cartão, sem enrolação.
          </p>
          <Button asChild variant="apito" size="xl" className="mt-4 w-full rounded-full">
            <a href="#cadastro-form" aria-label="Criar conta grátis">
              Criar conta grátis
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};