import { Goal } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-linha/10 bg-campo py-10 text-linha">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-apito-gradient text-campo">
            <Goal className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg">Finanças em Campo</span>
        </div>
        <p className="text-xs text-linha/50">
          © {new Date().getFullYear()} Finanças em Campo. Organização financeira sem cara de planilha.
        </p>
      </div>
    </footer>
  );
};