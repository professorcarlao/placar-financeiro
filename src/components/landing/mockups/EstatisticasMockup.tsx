import { ClipboardList, BarChart3, TrendingUp, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

export const EstatisticasMockup = () => {
  return (
    <div className="flex flex-col h-full bg-[#06140D] text-white p-4 font-sans">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-[#F7E135]/10 flex items-center justify-center border border-[#F7E135]/20">
            <BarChart3 className="h-4 w-4 text-[#F7E135]" />
          </div>
          <p className="text-sm font-black">Análises</p>
        </div>
      </div>

      {/* Leitura do Jogo (Carlão) */}
      <div className="mb-6 rounded-2xl bg-[#11241B] p-4 border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2 opacity-10">
          <TrendingUp className="h-12 w-12" />
        </div>
        <div className="flex items-center gap-2 mb-2">
          <div className="h-5 w-5 rounded-full bg-[#F7E135] flex items-center justify-center text-black">
            <Star className="h-3 w-3 fill-black" />
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F7E135]">Leitura do jogo</p>
        </div>
        <p className="text-xs font-bold leading-relaxed pr-8">
          "Seu ataque (renda) está forte, mas a defesa (gastos fixos) precisa de atenção este mês."
        </p>
      </div>

      {/* Evolução Chart */}
      <div className="mb-6 rounded-2xl bg-[#11241B] p-4 border border-white/5">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-4">Evolução de lances</p>
        <div className="flex items-end justify-between h-20 gap-2">
          {[30, 50, 40, 90, 55, 75, 45].map((h, i) => (
            <div key={i} className={cn("w-full rounded-t-sm", i === 3 ? "bg-[#F7E135]" : "bg-white/5")} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="space-y-4">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Maiores despesas</p>
        <div className="space-y-4">
          <CategoryRow label="Moradia & Contas" value="R$ 5.000" pct={45} color="bg-[#FF5252]" />
          <CategoryRow label="Lazer & Viagem" value="R$ 3.840" pct={35} color="bg-[#F7E135]" />
          <CategoryRow label="Estilo de Vida" value="R$ 1.200" pct={15} color="bg-white/20" />
        </div>
      </div>
    </div>
  );
};

const CategoryRow = ({ label, value, pct, color }: any) => (
  <div className="space-y-1.5">
    <div className="flex justify-between items-center text-[11px] font-bold">
      <span>{label}</span>
      <span>{value}</span>
    </div>
    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
      <div className={cn("h-full rounded-full", color)} style={{ width: `${pct}%` }} />
    </div>
  </div>
);

import { Star } from "lucide-react";
