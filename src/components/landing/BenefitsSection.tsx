import { Bell, Sparkles, Target, TrendingUp } from "lucide-react";
import carlao from "@/assets/professor-carlao.png";
import { EstatisticasMockup } from "./mockups/EstatisticasMockup";

export const BenefitsSection = () => {
  return (
    <section className="relative bg-linha py-16 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-apito/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-apito-deep">
            Benefícios
          </span>
          <h2 className="mt-4 font-display text-4xl text-campo sm:text-5xl">
            Organização sem cara de <span className="text-cartao-vermelho">castigo</span>.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {/* 1 — Clareza */}
          <article className="overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card-soft">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-apito text-campo">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl text-campo">Clareza pro mês atual</h3>
                <p className="mt-1 text-sm text-muted-foreground">O Placar do Mês coloca o que importa na sua frente.</p>
              </div>
            </div>
            <div className="mt-5 rounded-2xl border border-linha/10 bg-campo-flat p-4 text-linha">
              <p className="text-[10px] uppercase tracking-wider text-linha/60">Quanto dá pra jogar no mês</p>
              <p className="font-display text-3xl text-apito">R$ 3.840,00</p>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-linha/10">
                <div className="h-full w-[62%] rounded-full bg-apito-gradient" />
              </div>
              <p className="mt-2 text-[10px] text-linha/60">62% do mês ainda disponível</p>
            </div>
          </article>

          {/* 2 — Objetivos */}
          <article className="overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card-soft">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gramado/15 text-gramado">
                <Target className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl text-campo">Objetivos que não somem</h3>
                <p className="mt-1 text-sm text-muted-foreground">Veja o progresso de cada meta avançando rumo ao gol.</p>
              </div>
            </div>
            <div className="mt-5 rounded-2xl border border-linha/10 bg-campo-flat p-4">
              <MetaBar label="Reserva de emergência" value="R$ 10.500 / R$ 30.000" pct={35} />
              <div className="mt-3"><MetaBar label="Quitar cartão" value="R$ 700 / R$ 1.200" pct={58} /></div>
              <div className="mt-3"><MetaBar label="Viagem em julho" value="R$ 420 / R$ 2.000" pct={21} /></div>
            </div>
          </article>

          {/* 3 — Alertas (única aparição do Carlão aqui) */}
          <article className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card-soft">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cartao-amarelo/20 text-apito-deep">
                <Bell className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl text-campo">Alertas do Carlão</h3>
                <p className="mt-1 text-sm text-muted-foreground">Sem sermão. O técnico fala direto.</p>
              </div>
            </div>
            <div className="mt-5 flex items-end gap-3">
              <img src={carlao} alt="Professor Carlão alertando" className="h-24 w-24 shrink-0 object-contain" />
              <div className="relative flex-1 rounded-2xl rounded-bl-sm bg-campo-flat p-4 text-linha">
                <p className="text-sm">
                  <span className="text-apito">Ô, craque…</span> assinatura esquecida também faz gol contra. Confere as recorrentes do mês.
                </p>
                <p className="mt-1 text-[11px] text-linha/60">Aviso do Carlão · há 2h</p>
              </div>
            </div>
          </article>

          {/* 4 — Estatísticas (mockup novo, sem Carlão) */}
          <article className="overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card-soft">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-campo text-apito">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl text-campo">Outro ângulo do jogo</h3>
                <p className="mt-1 text-sm text-muted-foreground">Padrões do mês: setores que pesam, evolução e leituras direto ao ponto.</p>
              </div>
            </div>
            <div className="mt-5">
              <EstatisticasMockup />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

const MetaBar = ({ label, value, pct }: { label: string; value: string; pct: number }) => (
  <div>
    <div className="mb-1 flex items-baseline justify-between text-[11px]">
      <span className="font-semibold text-linha">{label}</span>
      <span className="text-linha/55">{value}</span>
    </div>
    <div className="h-1.5 overflow-hidden rounded-full bg-linha/10">
      <div className="h-full rounded-full bg-apito-gradient" style={{ width: `${pct}%` }} />
    </div>
  </div>
);
