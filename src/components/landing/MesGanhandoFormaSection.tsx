import { ArrowDown, ArrowDownRight, ArrowUpRight, Film, Plane, ShoppingCart, Target, Wallet } from "lucide-react";

const lances = [
  { icon: Wallet, name: "salário", value: "+ R$ 5.000", positive: true },
  { icon: ShoppingCart, name: "mercado", value: "- R$ 600", positive: false },
  { icon: Film, name: "netflix", value: "- R$ 30", positive: false },
  { icon: Plane, name: "parcela viagem", value: "- R$ 500", positive: false },
  { icon: Target, name: "meta reserva", value: "- R$ 300", positive: false, alert: true },
];

export const MesGanhandoFormaSection = () => {
  return (
    <section className="relative overflow-hidden bg-campo py-16 text-linha lg:py-20">
      <div className="absolute inset-0 opacity-[0.05] field-lines" />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-apito px-3 py-1 text-xs font-bold uppercase tracking-wider text-campo">
            Demonstração
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            Veja um mês <span className="text-apito">ganhando forma</span> no placar.
          </h2>
          <p className="mt-3 text-base text-linha/75">
            Cada lance entra. O placar atualiza ao vivo.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
          {/* Lista de lances */}
          <div className="space-y-2">
            {lances.map((l, i) => {
              const Icon = l.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-linha/10 bg-campo-2-flat px-3 py-2.5"
                  style={{ animation: `fade-in 0.6s ease-out ${i * 0.1}s both` }}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                      l.positive ? "bg-gramado/15 text-gramado" : l.alert ? "bg-apito/15 text-apito" : "bg-cartao-vermelho/15 text-cartao-vermelho"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="flex-1 text-sm font-medium text-linha">{l.name}</p>
                  <p
                    className={`font-display text-base ${
                      l.positive ? "text-gramado" : l.alert ? "text-apito" : "text-cartao-vermelho"
                    }`}
                  >
                    {l.value}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Seta central */}
          <div className="flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-apito text-campo lg:rotate-0">
              <ArrowDown className="h-5 w-5 lg:hidden" />
              <ArrowUpRight className="hidden h-5 w-5 -rotate-90 lg:block" />
            </div>
          </div>

          {/* Resultado */}
          <div className="rounded-2xl border border-apito/30 bg-campo-2-flat p-5 shadow-apito">
            <p className="text-[10px] uppercase tracking-wider text-linha/55">
              Quanto dá pra jogar no mês
            </p>
            <p className="font-display text-5xl text-apito">R$ 3.570</p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-linha/10">
              <div className="h-full animate-fill-bar rounded-full bg-apito-gradient" style={{ ['--bar-target' as any]: '70%' } as any} />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <Mini icon={<ArrowUpRight className="h-3 w-3" />} label="Entrou" value="R$ 5.000" tone="green" />
              <Mini icon={<ArrowDownRight className="h-3 w-3" />} label="Saiu" value="R$ 1.130" tone="red" />
              <Mini icon={<Target className="h-3 w-3" />} label="Objetivo" value="R$ 300" tone="yellow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Mini = ({ icon, label, value, tone }: { icon: React.ReactNode; label: string; value: string; tone: "green" | "red" | "yellow" }) => {
  const t = { green: "text-gramado", red: "text-cartao-vermelho", yellow: "text-apito" }[tone];
  return (
    <div className="rounded-lg border border-linha/10 bg-campo-3-flat p-2">
      <div className={`flex items-center gap-1 ${t}`}>{icon}<span className="text-[8px] uppercase">{label}</span></div>
      <p className={`font-display text-sm ${t}`}>{value}</p>
    </div>
  );
};
