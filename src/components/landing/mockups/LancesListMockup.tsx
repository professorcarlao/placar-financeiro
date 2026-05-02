import { Film, Plane, ShoppingCart, Wallet, Search, Filter, Share2 } from "lucide-react";

export const LancesListMockup = () => {
  return (
    <div className="flex flex-col h-full bg-[#06140D] text-white p-4 font-sans">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-[#F7E135]/10 flex items-center justify-center border border-[#F7E135]/20">
            <ListChecks className="h-4 w-4 text-[#F7E135]" />
          </div>
          <div>
            <p className="text-sm font-black">Lances</p>
            <p className="text-[9px] text-white/40 font-bold uppercase">7 registros</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-white/5 p-2 border border-white/5">
            <Filter className="h-4 w-4 text-white/40" />
          </div>
          <div className="rounded-lg bg-white/5 p-2 border border-white/5">
            <Share2 className="h-4 w-4 text-white/40" />
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6 rounded-xl border border-white/10 bg-[#11241B] p-3 flex items-center gap-3">
        <Search className="h-4 w-4 text-white/20" />
        <p className="text-sm text-white/20 font-bold">Buscar lances...</p>
      </div>

      {/* Section Header */}
      <div className="mb-4 flex items-center justify-between border-b border-white/5 pb-2">
        <p className="text-[10px] font-black uppercase text-[#00C853]">Maio De 2026</p>
        <p className="text-[10px] font-black text-[#00C853]">R$ 14.370,00</p>
      </div>

      {/* Day Group */}
      <div className="mb-2 flex items-center justify-between">
        <p className="text-[9px] font-black uppercase text-white/30">Sexta-feira, 01 de maio</p>
        <p className="text-[9px] font-black text-[#00C853]">R$ 14.370,00</p>
      </div>

      <div className="space-y-3">
        <LanceItem icon={Film} name="netflix" cat="Estilo de Vida › Assinaturas" value="- R$ 30,00" color="text-[#FF5252]" />
        <LanceItem icon={Plane} name="viagem ..." cat="Viagem & Transporte" value="- R$ 5.000,00" color="text-[#FF5252]" badge="1/3" />
        <LanceItem icon={Wallet} name="salario" cat="Renda" value="+ R$ 20.000,00" color="text-[#00C853]" />
        <LanceItem icon={ShoppingCart} name="mercado" cat="Essenciais › Mercado" value="- R$ 600,00" color="text-[#FF5252]" />
      </div>
    </div>
  );
};

const LanceItem = ({ icon: Icon, name, cat, value, color, badge }: any) => (
  <div className="rounded-2xl bg-[#11241B] p-4 border border-white/5 flex items-center gap-4">
    <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-white/20 shrink-0">
      <Icon className="h-5 w-5" />
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2">
        <p className="text-sm font-black truncate">{name}</p>
        {badge && <span className="rounded bg-white/10 px-1 py-0.5 text-[8px] font-bold text-white/40 uppercase">{badge}</span>}
      </div>
      <p className="text-[9px] text-white/30 font-bold uppercase truncate">{cat}</p>
    </div>
    <p className={cn("text-sm font-black whitespace-nowrap", color)}>{value}</p>
  </div>
);

import { ListChecks } from "lucide-react";
import { cn } from "@/lib/utils";
