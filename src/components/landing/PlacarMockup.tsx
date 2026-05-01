import { ArrowDownRight, ArrowUpRight, Target, Wallet } from "lucide-react";

export const PlacarMockup = () => {
  return (
    <div className="bg-linha p-4 pt-8">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Placar do mês
          </p>
          <p className="font-display text-xl text-campo">Novembro</p>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-campo text-apito">
          <span className="text-xs font-bold">C</span>
        </div>
      </div>

      {/* Big number */}
      <div className="mb-3 rounded-2xl bg-campo p-4 text-linha">
        <p className="text-[10px] uppercase tracking-wider text-linha/60">
          Ainda posso gastar
        </p>
        <p className="font-display text-3xl text-apito">R$ 1.240</p>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-linha/15">
          <div
            className="h-full animate-fill-bar rounded-full bg-apito-gradient"
            style={{ ['--bar-target' as string]: '62%' } as React.CSSProperties}
          />
        </div>
      </div>

      {/* 3 mini cards */}
      <div className="grid grid-cols-3 gap-2">
        <MiniCard icon={<ArrowUpRight className="h-3 w-3" />} label="Entrou" value="4.8k" tone="green" />
        <MiniCard icon={<ArrowDownRight className="h-3 w-3" />} label="Saiu" value="3.1k" tone="red" />
        <MiniCard icon={<Target className="h-3 w-3" />} label="Metas" value="450" tone="yellow" />
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-xl bg-muted p-2">
        <Wallet className="h-3 w-3 text-campo" />
        <p className="text-[10px] text-campo">14 lances no mês</p>
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
  tone: "green" | "red" | "yellow";
}) => {
  const tones = {
    green: "bg-gramado/15 text-gramado",
    red: "bg-cartao-vermelho/10 text-cartao-vermelho",
    yellow: "bg-apito/15 text-apito-deep",
  };
  return (
    <div className="rounded-xl bg-muted p-2">
      <div className={`mb-1 inline-flex h-5 w-5 items-center justify-center rounded-md ${tones[tone]}`}>
        {icon}
      </div>
      <p className="text-[9px] uppercase text-muted-foreground">{label}</p>
      <p className="font-display text-sm text-campo">R$ {value}</p>
    </div>
  );
};