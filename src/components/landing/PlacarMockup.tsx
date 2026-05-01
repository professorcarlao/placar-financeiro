import { ArrowDownRight, ArrowUpRight, Clock, Target } from "lucide-react";

export const PlacarMockup = () => {
  return (
    <div className="bg-campo-flat px-4 pb-4 pt-8 text-linha">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-linha/55">
            Placar do Mês
          </p>
          <p className="font-display text-xl text-linha">Novembro</p>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-apito-gradient text-campo">
          <span className="text-xs font-bold">C</span>
        </div>
      </div>

      {/* Big number */}
      <div className="mb-3 rounded-2xl border border-linha/10 bg-campo-2-flat p-4">
        <p className="text-[10px] uppercase tracking-wider text-linha/55">
          Quanto dá pra jogar no mês
        </p>
        <p className="font-display text-3xl text-apito">R$ 1.240</p>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-linha/10">
          <div
            className="h-full rounded-full bg-apito-gradient"
            style={{ width: '62%' }}
          />
        </div>
        <p className="mt-1 text-[9px] text-linha/45">12 dias restantes</p>
      </div>

      {/* 2x2 grid de cards reais */}
      <div className="grid grid-cols-2 gap-2">
        <MiniCard icon={<ArrowUpRight className="h-3 w-3" />} label="Entrou no jogo" value="4.800" tone="green" />
        <MiniCard icon={<ArrowDownRight className="h-3 w-3" />} label="Saiu do jogo" value="3.100" tone="red" />
        <MiniCard icon={<Target className="h-3 w-3" />} label="Separado p/ objetivos" value="450" tone="yellow" />
        <MiniCard icon={<Clock className="h-3 w-3" />} label="Ainda vem por aí" value="620" tone="neutral" />
      </div>

      {/* Chip rodapé */}
      <div className="mt-3 flex items-center justify-between rounded-xl border border-linha/10 bg-campo-3-flat px-3 py-2">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-apito" />
          <p className="text-[10px] text-linha/80">Seus objetivos</p>
        </div>
        <p className="text-[10px] font-semibold text-apito">3 ativos</p>
      </div>
    </div>
  );
};

const MiniCard = ({
  icon,
  label,
  value,
  tone,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  tone: "green" | "red" | "yellow" | "neutral";
}) => {
  const tones = {
    green: "bg-gramado/25 text-apito",
    red: "bg-cartao-vermelho/20 text-cartao-vermelho",
    yellow: "bg-apito/20 text-apito",
    neutral: "bg-linha/10 text-linha/80",
  };
  return (
    <div className="rounded-xl border border-linha/10 bg-campo-2-flat p-2.5">
      <div className={`mb-1.5 inline-flex h-5 w-5 items-center justify-center rounded-md ${tones[tone]}`}>
        {icon}
      </div>
      <p className="text-[9px] uppercase leading-tight text-linha/55">{label}</p>
      <p className="font-display text-base text-linha">R$ {value}</p>
    </div>
  );
};