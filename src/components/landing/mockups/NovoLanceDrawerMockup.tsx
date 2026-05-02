import { Calendar, X } from "lucide-react";

export const NovoLanceDrawerMockup = () => {
  return (
    <div className="flex flex-col h-full bg-[#06140D] text-white p-4 font-sans">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex-1" />
        <p className="text-base font-black">Novo lance</p>
        <div className="flex-1 flex justify-end">
          <X className="h-5 w-5 text-white/40" />
        </div>
      </div>

      {/* Toggle */}
      <div className="mb-6 grid grid-cols-2 gap-3">
        <div className="flex items-center justify-center gap-2 rounded-xl border-2 border-[#FF5252] bg-[#FF5252]/10 py-2.5 text-[11px] font-black uppercase text-[#FF5252]">
          <span>⚽</span> Gol Contra
        </div>
        <div className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 text-[11px] font-black uppercase text-white/40">
          <span>🥅</span> Gol a Favor
        </div>
      </div>

      <div className="space-y-6">
        {/* Descrição */}
        <div>
          <label className="mb-2 block text-[11px] font-black uppercase tracking-widest text-white">Descrição</label>
          <div className="rounded-xl border border-white/10 bg-[#11241B] p-4">
            <p className="text-sm text-white/40 font-bold">Ex.: iFood, Salário, Academia...</p>
          </div>
        </div>

        {/* Row Valor / Data */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-2 block text-[11px] font-black uppercase tracking-widest text-white">Valor</label>
            <div className="rounded-xl border border-white/10 bg-[#11241B] p-4">
              <p className="text-sm text-white font-bold">R$ 0,00</p>
            </div>
          </div>
          <div>
            <label className="mb-2 block text-[11px] font-black uppercase tracking-widest text-white">Data</label>
            <div className="rounded-xl border border-white/10 bg-[#11241B] p-4 flex items-center gap-2">
              <Calendar className="h-4 w-4 text-white/40" />
              <p className="text-sm text-white font-bold">02/05/2026</p>
            </div>
          </div>
        </div>

        {/* Observações */}
        <div>
          <label className="mb-2 block text-[11px] font-black uppercase tracking-widest text-white">Observações (opcional)</label>
          <div className="rounded-2xl border border-white/10 bg-[#11241B] p-4 min-h-[100px]">
            <p className="text-sm text-white/40 font-bold">Notas adicionais...</p>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="mt-auto grid grid-cols-2 gap-4 pt-8">
        <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 py-3.5 text-xs font-black uppercase text-white">
          Cancelar
        </div>
        <div className="flex items-center justify-center rounded-xl bg-[#F7E135] py-3.5 text-xs font-black uppercase text-black shadow-lg shadow-[#F7E135]/20">
          Registrar lance
        </div>
      </div>
    </div>
  );
};
