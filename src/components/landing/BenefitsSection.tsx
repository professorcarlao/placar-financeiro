import { Bell, Sparkles, Target, TrendingUp } from "lucide-react";
import carlao from "@/assets/professor-carlao.png";

export const BenefitsSection = () => {
  return (
    <section className="relative bg-linha py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-apito/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-apito-deep">
            Benefícios
          </span>
          <h2 className="mt-4 font-display text-4xl text-campo sm:text-5xl lg:text-6xl">
            Organização sem cara de <span className="text-cartao-vermelho">castigo</span>.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Bloco 1 — Quanto dá pra jogar no mês */}
          <article className="overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card-soft">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-apito text-campo">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-campo">Clareza pro mês atual</h3>
                <p className="mt-1 text-muted-foreground">Sem abrir cinco telas. O Placar do Mês coloca o que importa na sua frente.</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-linha/10 bg-campo-flat p-5 text-linha">
              <p className="text-xs uppercase tracking-wider text-linha/60">Quanto dá pra jogar no mês</p>
              <p className="font-display text-4xl text-apito">R$ 1.240,00</p>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-linha/10">
                <div className="h-full w-[62%] rounded-full bg-apito-gradient" />
              </div>
              <p className="mt-2 text-xs text-linha/60">62% do mês ainda disponível · 12 dias restantes</p>
            </div>
          </article>

          {/* Bloco 2 — Objetivos */}
          <article className="overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card-soft">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gramado/15 text-gramado">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-campo">Objetivos que não somem</h3>
                <p className="mt-1 text-muted-foreground">Veja o progresso de cada meta como ataque avançando rumo ao gol.</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-linha/10 bg-campo-flat p-5">
              <MetaBar label="Reserva de emergência" value="R$ 1.800 / R$ 3.000" pct={60} />
              <div className="mt-4">
                <MetaBar label="Quitar cartão" value="R$ 700 / R$ 1.200" pct={58} />
              </div>
              <div className="mt-4">
                <MetaBar label="Viagem em julho" value="R$ 420 / R$ 2.000" pct={21} />
              </div>
            </div>
          </article>

          {/* Bloco 3 — Alertas do Carlão (Carlão pode aparecer aqui) */}
          <article className="relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card-soft">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cartao-amarelo/20 text-apito-deep">
                <Bell className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-campo">Alertas do Carlão</h3>
                <p className="mt-1 text-muted-foreground">Sem sermão. O técnico fala direto, com aquele toque de humor.</p>
              </div>
            </div>
            <div className="mt-6 flex items-end gap-3">
              <img
                src={carlao}
                alt="Professor Carlão alertando sobre gastos"
                className="h-28 w-28 shrink-0 object-contain"
              />
              <div className="relative flex-1 rounded-2xl rounded-bl-sm bg-campo-flat p-4 text-linha">
                <p className="text-sm">
                  <span className="text-apito">Ô, craque…</span> assinatura esquecida também faz gol contra. Confere as recorrentes do mês.
                </p>
                <p className="mt-1 text-[11px] text-linha/60">Aviso do Carlão · há 2h</p>
              </div>
            </div>
          </article>

          {/* Bloco 4 — Estatísticas */}
          <article className="overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card-soft">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-campo text-apito">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-campo">Estatísticas mês a mês</h3>
                <p className="mt-1 text-muted-foreground">Veja como seu jogo financeiro evolui ao longo dos meses, em gráficos simples.</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-linha/10 bg-campo-flat p-5">
              <div className="grid grid-cols-6 items-end gap-2" style={{ height: 100 }}>
                {[35, 60, 45, 80, 55, 70].map((h, i) => (
                  <div key={i} className="flex h-full flex-col items-center justify-end gap-1">
                    <div
                      className="w-full rounded-md bg-apito-gradient"
                      style={{ height: `${h}%` }}
                    />
                    <span className="text-[9px] text-linha/60">M{i + 1}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-linha/55">Saldo final dos últimos 6 meses</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

const MetaBar = ({ label, value, pct }: { label: string; value: string; pct: number }) => (
  <div>
    <div className="mb-1 flex items-baseline justify-between text-xs">
      <span className="font-semibold text-linha">{label}</span>
      <span className="text-linha/55">{value}</span>
    </div>
    <div className="h-2 overflow-hidden rounded-full bg-linha/10">
      <div className="h-full rounded-full bg-apito-gradient" style={{ width: `${pct}%` }} />
    </div>
  </div>
);