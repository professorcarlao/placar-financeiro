import { Bell, Sparkles, Target, TrendingUp } from "lucide-react";
import carlao from "@/assets/professor-carlao.png";
import { EstatisticasMockup } from "./mockups/EstatisticasMockup";
import { PhoneFrame } from "./PhoneFrame";
import { PlacarMockup } from "./PlacarMockup";

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

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* 1 — Clareza */}
          <article className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card-soft lg:p-8">
            <div className="mb-8 flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-apito text-campo">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl text-campo">Clareza pro mês atual</h3>
                <p className="mt-1 text-sm text-muted-foreground">O Placar do Mês coloca o que importa na sua frente.</p>
              </div>
            </div>
            <div className="mt-auto flex justify-center">
              <PhoneFrame className="max-w-[240px] scale-95 origin-bottom transition-none">
                <PlacarMockup />
              </PhoneFrame>
            </div>
          </article>

          {/* 2 — Objetivos */}
          <article className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card-soft lg:p-8">
            <div className="mb-8 flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gramado/15 text-gramado">
                <Target className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl text-campo">Objetivos que não somem</h3>
                <p className="mt-1 text-sm text-muted-foreground">Veja o progresso de cada meta avançando rumo ao gol.</p>
              </div>
            </div>
            <div className="mt-auto flex justify-center">
              <PhoneFrame className="max-w-[240px] scale-95 origin-bottom transition-none">
                <div className="p-4 bg-campo-flat h-full min-h-[300px]">
                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-wider text-linha/55">Seus objetivos</p>
                  <MetaBar label="Reserva de emergência" value="R$ 10.500 / R$ 30.000" pct={35} />
                  <div className="mt-4"><MetaBar label="Quitar cartão" value="R$ 700 / R$ 1.200" pct={58} /></div>
                  <div className="mt-4"><MetaBar label="Viagem em julho" value="R$ 420 / R$ 2.000" pct={21} /></div>
                  <div className="mt-6 rounded-lg bg-apito/10 border border-apito/20 p-2 text-center">
                    <p className="text-[10px] text-apito-deep font-bold">Faltam 12 gols para a reserva</p>
                  </div>
                </div>
              </PhoneFrame>
            </div>
          </article>

          {/* 3 — Alertas */}
          <article className="flex flex-col relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card-soft lg:p-8">
            <div className="mb-8 flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cartao-amarelo/20 text-apito-deep">
                <Bell className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl text-campo">Alertas do Carlão</h3>
                <p className="mt-1 text-sm text-muted-foreground">Sem sermão. O técnico fala direto.</p>
              </div>
            </div>
            <div className="mt-auto flex items-end gap-3 pb-4">
              <img src={carlao} alt="Professor Carlão" className="h-20 w-20 shrink-0 object-contain grayscale-[0.2]" />
              <div className="relative flex-1 rounded-2xl rounded-bl-sm bg-campo-flat p-4 text-linha">
                <p className="text-sm">
                  <span className="text-apito">Ô, craque…</span> assinatura esquecida também faz gol contra. Confere as recorrentes.
                </p>
                <p className="mt-1 text-[11px] text-linha/60">Aviso do Carlão · há 2h</p>
              </div>
            </div>
          </article>

          {/* 4 — Estatísticas */}
          <article className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card-soft lg:p-8">
            <div className="mb-8 flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-campo text-apito">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl text-campo">Outro ângulo do jogo</h3>
                <p className="mt-1 text-sm text-muted-foreground">Padrões do mês: setores que pesam e evolução.</p>
              </div>
            </div>
            <div className="mt-auto flex justify-center">
              <PhoneFrame className="max-w-[240px] scale-95 origin-bottom transition-none">
                <EstatisticasMockup />
              </PhoneFrame>
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
