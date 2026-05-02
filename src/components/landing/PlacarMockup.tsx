import { cn } from "@/lib/utils";
import carlao from "@/assets/professor-carlao.png";
import { Eye, Moon, Share2, ChevronLeft, ChevronRight, LayoutGrid, ListChecks, BarChart2, Target, Settings, Plus, Activity } from "lucide-react";

export const PlacarMockup = () => {
  return (
    <div className="flex flex-col h-full bg-[#06140D] text-white overflow-hidden font-sans">
      {/* Status Bar / Header */}
      <div className="px-4 pt-3 pb-2 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full border-2 border-[#F7E135]/30 overflow-hidden bg-white/10">
            <img src={carlao} alt="User" className="h-full w-full object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <p className="text-[11px] font-bold">Olá, Jose</p>
              <span>👋</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 text-white/40">
          <Eye className="h-4 w-4" />
          <Moon className="h-4 w-4" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
        {/* Title & Selector */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-black">Placar do Mês</h2>
            <p className="text-[10px] text-white/40 uppercase font-bold">Maio de 2026</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-4 rounded-lg bg-white/5 px-2 py-1.5 border border-white/5">
              <ChevronLeft className="h-4 w-4 text-white/40" />
              <span className="text-[11px] font-bold">Mai/26</span>
              <ChevronRight className="h-4 w-4 text-white/40" />
            </div>
          </div>
        </div>

        {/* Main Dashboard Card */}
        <div className="rounded-3xl bg-[#11241B] p-6 text-center border border-white/5 relative overflow-hidden">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 mb-2">Quanto dá pra jogar no mês</p>
          <p className="text-4xl font-black text-[#00C853] mb-3">R$ 3.840,00</p>
          <p className="text-xs text-white/80 font-medium">Tá bonito. Ainda dá pra gastar sem susto.</p>
          <p className="text-[10px] text-white/40 mt-1 uppercase font-bold">Restam 29 dias no mês</p>

          <div className="mt-6 rounded-2xl bg-black/20 border border-[#F7E135]/20 p-3 flex items-center gap-3 text-left">
            <Activity className="h-5 w-5 text-[#F7E135]" />
            <p className="text-[10px] text-white/80 leading-snug">Você ainda tem espaço no mês. Dá pra seguir com calma.</p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 text-left border-t border-white/5 pt-4">
            <div>
              <p className="text-[11px] font-bold text-[#00C853]">+R$ 20.000,00</p>
              <p className="text-[9px] text-white/30 uppercase font-bold">(entradas)</p>
              <p className="mt-2 text-[11px] font-bold text-white/40">-R$ 500,00</p>
              <p className="text-[9px] text-white/30 uppercase font-bold">(objetivos)</p>
            </div>
            <div className="text-right">
              <p className="text-[11px] font-bold text-[#FF5252]">-R$ 5.630,00</p>
              <p className="text-[9px] text-white/30 uppercase font-bold">(saídas)</p>
              <p className="mt-2 text-[11px] font-bold text-[#F7E135]">-R$ 10.030,00</p>
              <p className="text-[9px] text-white/30 uppercase font-bold">(ainda vem por aí)</p>
            </div>
          </div>
        </div>

        {/* Triple Summary Cards */}
        <div className="grid grid-cols-3 gap-3">
          <SummarySmall icon={LayoutGrid} label="Entrou" value="R$ 20 mil" color="text-[#00C853]" />
          <SummarySmall icon={Activity} label="Saiu" value="R$ 5.630" color="text-[#FF5252]" />
          <SummarySmall icon={Target} label="Metas" value="R$ 500" color="text-[#F7E135]" />
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="absolute bottom-20 right-6">
        <div className="h-14 w-14 rounded-full bg-[#F7E135] flex items-center justify-center shadow-xl shadow-[#F7E135]/20">
          <Plus className="h-8 w-8 text-black" strokeWidth={3} />
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="px-4 py-3 flex items-center justify-between border-t border-white/5 bg-[#06140D]">
        <NavItem icon={LayoutGrid} label="Placar" active />
        <NavItem icon={ListChecks} label="Lances" />
        <NavItem icon={BarChart2} label="Análises" />
        <NavItem icon={Target} label="Metas" />
        <NavItem icon={Settings} label="Vestiário" />
      </div>
    </div>
  );
};

const SummarySmall = ({ icon: Icon, label, value, color }: any) => (
  <div className="rounded-2xl bg-[#11241B] p-3 border border-white/5">
    <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 text-white/20">
      <Icon className="h-4 w-4" />
    </div>
    <p className="text-[9px] font-bold text-white/40 leading-tight uppercase mb-1">{label}</p>
    <p className={cn("text-sm font-black", color)}>{value}</p>
  </div>
);

const NavItem = ({ icon: Icon, label, active }: any) => (
  <div className={cn("flex flex-col items-center gap-1", active ? "text-[#F7E135]" : "text-white/40")}>
    <Icon className="h-5 w-5" />
    <span className="text-[9px] font-bold uppercase">{label}</span>
  </div>
);