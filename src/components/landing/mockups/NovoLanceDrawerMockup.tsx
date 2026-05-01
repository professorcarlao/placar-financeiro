import { CalendarDays, X } from "lucide-react";

export const NovoLanceDrawerMockup = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-linha/10 bg-campo-flat p-4 text-linha shadow-mockup">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <p className="font-display text-base">Novo lance</p>
        <X className="h-3.5 w-3.5 text-linha/55" />
      </div>

      {/* Toggle Gol contra / Gol a favor */}
      <div className="mb-3 grid grid-cols-2 gap-1.5">
        <div className="rounded-lg border border-cartao-vermelho/50 bg-cartao-vermelho/10 py-1.5 text-center text-[10px] font-semibold text-cartao-vermelho">
          ⚽ Gol Contra
        </div>
        <div className="rounded-lg border border-linha/10 bg-campo-2-flat py-1.5 text-center text-[10px] font-semibold text-linha/65">
          🚩 Gol a Favor
        </div>
      </div>

      {/* Field: Descrição */}
      <Field label="Descrição">
        <p className="text-[10px] text-linha/40">Ex.: iFood, Salário, Academia…</p>
      </Field>

      {/* Field: Valor + Data */}
      <div className="mt-2 grid grid-cols-2 gap-2">
        <Field label="Valor">
          <p className="text-[11px] text-linha/40">R$ 0,00</p>
        </Field>
        <Field label="Data">
          <div className="flex items-center gap-1 text-[10px] text-linha/65">
            <CalendarDays className="h-3 w-3" /> 01/05/2026
          </div>
        </Field>
      </div>

      {/* Buttons */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button className="rounded-lg border border-linha/10 bg-campo-2-flat py-1.5 text-[10px] text-linha/70">
          Cancelar
        </button>
        <button className="rounded-lg bg-apito py-1.5 text-[10px] font-bold text-campo">
          Registrar lance
        </button>
      </div>
    </div>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div>
    <p className="mb-1 text-[9px] font-semibold uppercase tracking-wider text-linha/65">{label}</p>
    <div className="rounded-lg border border-linha/10 bg-campo-2-flat px-2 py-1.5">
      {children}
    </div>
  </div>
);
