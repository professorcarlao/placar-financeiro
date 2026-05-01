import { ArrowDownRight, ArrowUpRight, CalendarClock, CreditCard, Repeat, Target } from "lucide-react";

interface Props {
  /** Compact = menos altura para usar dentro de Benefits */
  compact?: boolean;
}

export const PlacarDashboardMockup = ({ compact = false }: Props) => {
  return (
    <div className={`p-3 sm:p-4 ${compact ? "" : "sm:p-5"}`}>
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="font-display text-base sm:text-lg">Placar do Mês</p>
          <p className="text-[9px] uppercase tracking-wider text-linha/55">Maio de 2026</p>
        </div>
        <div className="rounded-md bg-apito px-2 py-1 text-[9px] font-bold text-campo">
          + Novo lance
        </div>
      </div>

      {/* Big number */}
      <div className="mb-3 rounded-xl border border-linha/10 bg-campo-2-flat p-3 text-center sm:p-4">
        <p className="text-[9px] uppercase tracking-wider text-linha/55">
          Quanto dá pra jogar no mês
        </p>
        <p className="font-display text-3xl text-apito sm:text-4xl">R$ 3.840,00</p>
        <p className="mt-1 text-[10px] text-linha/65">Tá bonito. Ainda dá pra gastar sem susto.</p>
      </div>

      {/* 3 cards */}
      <div className="mb-3 grid grid-cols-3 gap-2">
        <MetricCard icon={<ArrowUpRight className="h-3 w-3" />} label="Entrou no jogo" value="R$ 20 mil" tone="green" />
        <MetricCard icon={<ArrowDownRight className="h-3 w-3" />} label="Saiu do jogo" value="R$ 5.630" tone="red" />
        <MetricCard icon={<Target className="h-3 w-3" />} label="Para objetivos" value="R$ 500" tone="yellow" />
      </div>

      {/* Objetivo */}
      {!compact && (
        <div className="mb-3 rounded-xl border border-linha/10 bg-campo-2-flat p-3">
          <div className="mb-1 flex items-center justify-between">
            <p className="text-[10px] font-semibold text-linha">Seus objetivos · reserva</p>
            <p className="text-[10px] text-apito">35%</p>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-linha/10">
            <div className="h-full w-[35%] rounded-full bg-apito-gradient" />
          </div>
          <p className="mt-1 text-[9px] text-linha/55">R$ 10.500 de R$ 30.000</p>
        </div>
      )}

      {/* Ainda vem por aí */}
      <div className="rounded-xl border border-linha/10 bg-campo-2-flat p-3">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[10px] font-semibold text-linha">Ainda vem por aí</p>
          <p className="text-[10px] font-bold text-cartao-vermelho">R$ 10.030</p>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          <ChipMini icon={<Repeat className="h-2.5 w-2.5" />} label="Assinaturas" value="R$ 30" />
          <ChipMini icon={<CreditCard className="h-2.5 w-2.5" />} label="Parcelas" value="R$ 5.000" />
          <ChipMini icon={<CalendarClock className="h-2.5 w-2.5" />} label="Fixos" value="R$ 5.000" />
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({
  icon,
  label,
  value,
  tone,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  tone: "green" | "red" | "yellow";
}) => {
  const tones = {
    green: "text-gramado",
    red: "text-cartao-vermelho",
    yellow: "text-apito",
  };
  const valueTones = {
    green: "text-gramado",
    red: "text-cartao-vermelho",
    yellow: "text-apito",
  };
  return (
    <div className="rounded-xl border border-linha/10 bg-campo-2-flat p-2.5">
      <div className={`mb-1 inline-flex items-center justify-center ${tones[tone]}`}>
        {icon}
      </div>
      <p className="text-[8px] uppercase leading-tight text-linha/55">{label}</p>
      <p className={`font-display text-base ${valueTones[tone]}`}>{value}</p>
    </div>
  );
};

const ChipMini = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="rounded-lg border border-linha/10 bg-campo-3-flat px-1.5 py-1">
    <div className="flex items-center gap-1 text-linha/65">
      {icon}
      <p className="text-[8px] uppercase">{label}</p>
    </div>
    <p className="text-[10px] font-bold text-linha">{value}</p>
  </div>
);
