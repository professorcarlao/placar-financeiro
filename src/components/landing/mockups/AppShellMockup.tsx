import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { BarChart3, ListChecks, Settings, Target, Trophy } from "lucide-react";

interface Props {
  children: ReactNode;
  className?: string;
  active?: "placar" | "lances" | "estatisticas" | "objetivos" | "ajustes";
  title?: string;
}

const navItems = [
  { key: "placar", label: "Placar do Mês", icon: Trophy },
  { key: "lances", label: "Lances", icon: ListChecks },
  { key: "estatisticas", label: "Estatísticas", icon: BarChart3 },
  { key: "objetivos", label: "Objetivos", icon: Target },
  { key: "ajustes", label: "Ajustes", icon: Settings },
] as const;

export const AppShellMockup = ({ children, className, active = "placar" }: Props) => {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-linha/10 bg-campo-flat text-linha shadow-mockup",
        className,
      )}
    >
      {/* Top bar (window-like) */}
      <div className="flex items-center gap-1.5 border-b border-linha/10 bg-campo-2-flat px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-cartao-vermelho/70" />
        <span className="h-2 w-2 rounded-full bg-apito/70" />
        <span className="h-2 w-2 rounded-full bg-gramado" />
        <div className="ml-3 hidden rounded-md bg-campo-flat px-2 py-0.5 text-[9px] text-linha/50 sm:block">
          app.financasemcampo.com
        </div>
      </div>

      <div className="grid grid-cols-[110px_1fr] sm:grid-cols-[150px_1fr]">
        {/* Sidebar */}
        <aside className="border-r border-linha/10 bg-campo-2-flat p-2.5">
          <div className="mb-3 flex items-center gap-1.5">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-apito-gradient text-[8px] font-bold text-campo">
              FC
            </span>
            <span className="hidden font-display text-[11px] tracking-wide sm:inline">
              Finanças
            </span>
          </div>
          <nav className="space-y-0.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.key === active;
              return (
                <div
                  key={item.key}
                  className={cn(
                    "flex items-center gap-1.5 rounded-md px-1.5 py-1.5 text-[10px]",
                    isActive
                      ? "bg-campo-3-flat text-apito"
                      : "text-linha/65",
                  )}
                >
                  <Icon className="h-3 w-3 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </div>
              );
            })}
          </nav>
        </aside>

        {/* Content */}
        <div className="min-w-0 bg-campo-flat">{children}</div>
      </div>
    </div>
  );
};
