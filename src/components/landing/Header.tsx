import { Button } from "@/components/ui/button";
import carlao from "@/assets/professor-carlao.png";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const links = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#recursos", label: "Recursos" },
  { href: "#para-quem", label: "Para quem é" },
  { href: "#faq", label: "Dúvidas" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled 
          ? "h-16 bg-campo/95 backdrop-blur-md shadow-lg border-b border-white/10" 
          : "h-24 bg-transparent"
      )}
    >
      <div className="container max-w-7xl flex h-full items-center justify-between gap-2 px-4 sm:gap-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2 text-white min-w-0 shrink group sm:gap-3">
          <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full border-2 border-apito bg-white shadow-lg shadow-apito/20 sm:h-12 sm:w-12">
            <img src={carlao} alt="Finanças em Campo" className="h-full w-full object-cover transition-transform group-hover:scale-110" />
          </div>
          <span className="font-display text-base tracking-tight sm:text-2xl lg:text-3xl whitespace-nowrap leading-none pt-1 truncate sm:overflow-visible">
            Finanças em Campo
          </span>
        </a>
        
        <nav className="hidden items-center gap-10 lg:flex flex-1 justify-center">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-black uppercase tracking-[0.15em] text-white/80 transition-colors hover:text-apito"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0 sm:gap-4">
          <Button asChild variant="apito" className="h-9 rounded-full px-3 text-[10px] font-black uppercase shadow-apito transition-transform hover:scale-105 active:scale-95 sm:h-14 sm:px-8 sm:text-sm">
            <a href="#cadastro">
              <span className="xs:hidden">Criar</span>
              <span className="hidden xs:inline sm:hidden">Criar conta</span>
              <span className="hidden sm:inline">Criar conta grátis</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};