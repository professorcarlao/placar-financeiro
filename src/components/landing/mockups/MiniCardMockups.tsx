import { Bell, CreditCard, Film, Home, Target, Wallet, ListChecks, BarChart3, Star, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

const cardStyle = "rounded-3xl border border-white/5 bg-[#11241B] p-5 shadow-2xl";

export const MiniPlacarCard = () => (
  <div className={cardStyle}>
    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 mb-2">Placar</p>
    <p className="text-2xl font-black text-[#00C853]">R$ 3.840,00</p>
    <div className="mt-4 flex items-center gap-2">
      <div className="h-1 flex-1 rounded-full bg-white/5 overflow-hidden">
        <div className="h-full w-[65%] bg-[#00C853]" />
      </div>
      <span className="text-[9px] font-black text-[#00C853]">65%</span>
    </div>
  </div>
);

export const MiniLancesCard = () => (
  <div className={cardStyle}>
    <div className="flex items-center justify-between mb-4">
      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">Lances</p>
      <ListChecks className="h-3 w-3 text-[#F7E135]" />
    </div>
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-bold">salario</p>
        <p className="text-[10px] font-black text-[#00C853]">+R$ 20k</p>
      </div>
      <div className="flex items-center justify-between opacity-40">
        <p className="text-[10px] font-bold">mercado</p>
        <p className="text-[10px] font-black text-[#FF5252]">-R$ 600</p>
      </div>
    </div>
  </div>
);

export const MiniEstatisticasCard = () => (
  <div className={cardStyle}>
    <div className="flex items-center justify-between mb-4">
      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">Análises</p>
      <BarChart3 className="h-3 w-3 text-white/20" />
    </div>
    <div className="flex items-end justify-between h-12 gap-1">
      {[40, 70, 45, 90, 60, 80].map((h, i) => (
        <div key={i} className={cn("w-full rounded-sm", i === 3 ? "bg-[#F7E135]" : "bg-white/10")} style={{ height: `${h}%` }} />
      ))}
    </div>
  </div>
);

export const MiniObjetivoCard = () => (
  <div className={cardStyle}>
    <div className="flex items-center gap-2 mb-3">
      <div className="h-6 w-6 rounded-lg bg-[#00C853]/10 flex items-center justify-center">
        <Target className="h-3 w-3 text-[#00C853]" />
      </div>
      <p className="text-[10px] font-black uppercase tracking-widest">Reserva</p>
      <span className="ml-auto text-[10px] font-black text-white/20">35%</span>
    </div>
    <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden mb-2">
      <div className="h-full w-[35%] bg-[#F7E135]" />
    </div>
    <div className="flex justify-between items-end">
      <div>
        <p className="text-[8px] font-bold text-white/20 uppercase">Meta</p>
        <p className="text-[10px] font-black">R$ 30.000</p>
      </div>
      <p className="text-[8px] font-black text-[#FF5252]">Faltam R$ 19k</p>
    </div>
  </div>
);

export const MiniGastoFixoCard = () => (
  <div className={cardStyle}>
    <div className="flex items-center gap-3 mb-4">
      <div className="h-8 w-8 rounded-xl bg-white/5 flex items-center justify-center">
        <Home className="h-4 w-4 text-white/40" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-black truncate">aluguel</p>
        <p className="text-[8px] font-black uppercase text-[#00C853]">Ativa</p>
      </div>
    </div>
    <p className="text-lg font-black text-[#FF5252]">R$ 5.000,00</p>
    <p className="text-[8px] font-bold text-white/20 uppercase mt-1">Vence dia 1</p>
  </div>
);

export const MiniAssinaturaCard = () => (
  <div className={cardStyle}>
    <div className="flex items-center gap-3 mb-4">
      <div className="h-8 w-8 rounded-xl bg-white/5 flex items-center justify-center">
        <Film className="h-4 w-4 text-white/40" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-black truncate">netflix</p>
        <p className="text-[8px] font-black uppercase text-[#00C853]">Ativa</p>
      </div>
    </div>
    <div className="flex items-center justify-between">
      <p className="text-sm font-black text-[#FF5252]">R$ 30,00</p>
      <p className="text-[8px] font-bold text-white/20 uppercase">Próx: 01/06</p>
    </div>
  </div>
);

export const MiniParcelamentoCard = () => (
  <div className={cardStyle}>
    <div className="flex justify-between items-start mb-3">
      <div className="flex items-center gap-2">
        <CreditCard className="h-3 w-3 text-white/40" />
        <p className="text-[10px] font-black uppercase tracking-widest">Viagem</p>
      </div>
      <span className="text-[10px] font-black text-white/20">33%</span>
    </div>
    <div className="h-1 w-full rounded-full bg-white/5 overflow-hidden mb-3">
      <div className="h-full w-[33%] bg-[#F7E135]" />
    </div>
    <div className="grid grid-cols-2 gap-2">
      <div>
        <p className="text-[7px] font-bold text-white/20 uppercase">Total</p>
        <p className="text-[9px] font-black">R$ 15k</p>
      </div>
      <div className="text-right">
        <p className="text-[7px] font-bold text-white/20 uppercase">Restam</p>
        <p className="text-[9px] font-black text-[#FF5252]">R$ 10k</p>
      </div>
    </div>
  </div>
);

export const MiniAlertaCarlaoCard = () => (
  <div className={cn(cardStyle, "border-[#F7E135]/20")}>
    <div className="flex items-center gap-2 mb-3">
      <Star className="h-3 w-3 text-[#F7E135] fill-[#F7E135]" />
      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#F7E135]">Dica do Carlão</p>
    </div>
    <p className="text-[11px] font-bold leading-relaxed text-white/80 italic">
      "Placar zerado não é empate, é derrota. Sempre guarde um pouco pro segundo tempo."
    </p>
  </div>
);
