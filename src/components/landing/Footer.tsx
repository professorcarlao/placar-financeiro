import carlao from "@/assets/professor-carlao.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="relative bg-campo py-20 text-white/40 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 field-lines opacity-[0.02]" />
      <div className="container relative z-10 max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row md:items-start">
          <div className="flex flex-col items-center gap-6 md:items-start">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-apito/30 bg-white shadow-xl">
                <img src={carlao} alt="Finanças em Campo" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl tracking-tight text-white leading-none">
                  Finanças em Campo
                </span>
                <p className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-apito">
                  Seu placar financeiro pessoal.
                </p>
              </div>
            </div>
            <p className="max-w-xs text-center text-sm font-medium leading-relaxed md:text-left text-white/50">
              O placar do Professor Carlão que coloca você no controle do jogo financeiro.
            </p>
          </div>

          <div className="flex flex-col items-center gap-8 md:items-end">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] font-black uppercase tracking-[0.2em]">
              <Link to="/politica-de-privacidade" className="transition-colors hover:text-apito">Política de privacidade</Link>
              <Link to="/termos-de-uso" className="transition-colors hover:text-apito">Termos de uso</Link>
            </div>
            <div className="flex flex-col items-center gap-2 md:items-end">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
                © {new Date().getFullYear()} Finanças em Campo
              </p>
              <p className="text-[9px] font-black uppercase tracking-[0.1em] text-white/10">
                Feito para quem joga sério.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};