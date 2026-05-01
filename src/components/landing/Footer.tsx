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
        <div className="flex flex-col items-center gap-4 md:items-end">
          <div className="flex gap-4">
            <a href="#" className="text-[10px] uppercase tracking-widest text-linha/40 hover:text-apito transition-colors">Política de Privacidade</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-linha/40 hover:text-apito transition-colors">Termos de Uso</a>
          </div>
          <p className="text-xs text-linha/50 text-center md:text-right">
            © {new Date().getFullYear()} Finanças em Campo. Organização financeira sem cara de planilha.
          </p>
        </div>
      </div>
    </footer>
  );
};