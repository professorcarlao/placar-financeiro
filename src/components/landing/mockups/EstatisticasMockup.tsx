import { ClipboardList } from "lucide-react";

const leituras = [
  { color: "bg-cartao-vermelho", text: "Crédito concentrou a maior parte dos gastos." },
  { color: "bg-gramado", text: "Você terminou o período no positivo." },
  { color: "bg-apito", text: "Gastos variáveis dominaram o mês." },
];

const bars = [10, 0, 0, 0, 35, 78, 22];

export const EstatisticasMockup = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-linha/10 bg-campo-flat p-4 text-linha shadow-mockup">
      {/* Leitura do jogo */}
      <div className="mb-3 rounded-xl border border-linha/10 bg-campo-2-flat p-3">
        <div className="flex items-start gap-2">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-apito text-campo">
            <ClipboardList className="h-3.5 w-3.5" />
          </span>
          <div>
            <p className="text-[8px] uppercase tracking-wider text-linha/55">Leitura do jogo</p>
            <p className="text-[11px] font-semibold leading-tight">
              Seu jogo está sob controle, mas o crédito ainda pesa.
            </p>
          </div>
        </div>
      </div>

      {/* 3 leituras */}
      <div className="mb-3 space-y-1.5">
        {leituras.map((l, i) => (
          <div key={i} className="flex items-center gap-2 rounded-lg border border-linha/10 bg-campo-2-flat px-2 py-1.5">
            <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${l.color}`} />
            <p className="text-[10px] leading-tight text-linha/85">{l.text}</p>
          </div>
        ))}
      </div>

      {/* Resumo */}
      <div className="mb-3 grid grid-cols-2 gap-2">
        <SummaryCard label="Entradas" value="R$ 25 mil" tone="green" />
        <SummaryCard label="Saídas" value="R$ 5,6 mil" tone="red" />
      </div>

      {/* Bar chart + donut */}
      <div className="grid grid-cols-[1.4fr_1fr] gap-2">
        <div className="rounded-xl border border-linha/10 bg-campo-2-flat p-2">
          <p className="mb-1.5 text-[8px] uppercase tracking-wider text-linha/55">Receitas × despesas</p>
          <div className="flex h-16 items-end gap-1">
            {bars.map((h, i) => (
              <div
                key={i}
                className={`w-full rounded-sm ${i === 5 ? "bg-gramado" : i === 6 ? "bg-cartao-vermelho" : "bg-linha/15"}`}
                style={{ height: `${Math.max(h, 6)}%` }}
              />
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-linha/10 bg-campo-2-flat p-2">
          <p className="mb-1 text-[8px] uppercase tracking-wider text-linha/55">Por setor</p>
          <div className="flex items-center gap-1.5">
            <div
              className="h-12 w-12 shrink-0 rounded-full"
              style={{
                background:
                  "conic-gradient(hsl(var(--apito)) 0 88%, hsl(var(--gramado)) 88% 99%, hsl(var(--cartao-vermelho)) 99% 100%)",
              }}
            >
              <div className="m-1.5 h-9 w-9 rounded-full bg-campo-2-flat" />
            </div>
            <div className="min-w-0 space-y-0.5 text-[8px]">
              <Legend color="bg-apito" label="Viagem" pct="88%" />
              <Legend color="bg-gramado" label="Essenciais" pct="11%" />
              <Legend color="bg-cartao-vermelho" label="Estilo" pct="1%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SummaryCard = ({ label, value, tone }: { label: string; value: string; tone: "green" | "red" }) => (
  <div className="rounded-xl border border-linha/10 bg-campo-2-flat p-2">
    <p className="text-[8px] uppercase tracking-wider text-linha/55">{label}</p>
    <p className={`font-display text-base ${tone === "green" ? "text-gramado" : "text-cartao-vermelho"}`}>{value}</p>
  </div>
);

const Legend = ({ color, label, pct }: { color: string; label: string; pct: string }) => (
  <div className="flex items-center gap-1">
    <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${color}`} />
    <span className="truncate text-linha/75">{label}</span>
    <span className="ml-auto text-linha/55">{pct}</span>
  </div>
);
