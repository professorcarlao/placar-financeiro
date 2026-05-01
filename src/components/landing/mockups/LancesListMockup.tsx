import { Film, Plane, ShoppingCart, Wallet } from "lucide-react";

const items = [
  { icon: Wallet, name: "salario", cat: "Entrada", value: "+ R$ 5.000", positive: true, color: "text-gramado bg-gramado/15" },
  { icon: ShoppingCart, name: "mercado", cat: "Essenciais › Mercado", value: "- R$ 600", positive: false, color: "text-cartao-vermelho bg-cartao-vermelho/15" },
  { icon: Film, name: "netflix", cat: "Estilo de Vida › Assinaturas", value: "- R$ 30", positive: false, color: "text-cartao-vermelho bg-cartao-vermelho/15" },
  { icon: Plane, name: "viagem 2/3", cat: "Viagem & Transporte", value: "- R$ 5.000", positive: false, color: "text-cartao-vermelho bg-cartao-vermelho/15" },
];

export const LancesListMockup = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-linha/10 bg-campo-flat p-4 text-linha shadow-mockup">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-display text-base">Lances</p>
        <p className="text-[9px] text-linha/55">Maio de 2026 · 4 registros</p>
      </div>

      <div className="space-y-1.5">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-2 rounded-lg border border-linha/10 bg-campo-2-flat px-2.5 py-2"
            >
              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${it.color}`}>
                <Icon className="h-3 w-3" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-semibold text-linha">{it.name}</p>
                <p className="truncate text-[9px] text-linha/55">{it.cat}</p>
              </div>
              <p className={`font-display text-xs ${it.positive ? "text-gramado" : "text-cartao-vermelho"}`}>
                {it.value}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
