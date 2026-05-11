import { Button } from "@/components/ui/button";
import carlao from "@/assets/professor-carlao.png";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#recursos", label: "Recursos" },
  { href: "#duvidas", label: "Dúvidas" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 h-16",
        scrolled || !isHomePage
          ? "bg-campo/95 backdrop-blur-md shadow-md border-b border-white/5" 
          : "bg-transparent"
      )}
    >
      <div className="mx-auto h-full max-w-6xl px-4 flex items-center justify-between gap-2 sm:px-6 lg:px-8">
        {/* Logo / Marca */}
        <Link to="/" className="flex items-center gap-1.5 min-w-0 group shrink">
          <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full border border-apito/30 bg-white sm:h-10 sm:w-10">
            <img 
              src={carlao} 
              alt="Finanças em Campo" 
              className="h-full w-full object-cover transition-transform group-hover:scale-110" 
            />
          </div>
          <span className="font-display text-sm tracking-tight text-white whitespace-nowrap pt-0.5 truncate sm:text-lg lg:text-xl">
            Finanças em Campo
          </span>
        </Link>

        {/* Links do Menu - Desktop */}
        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {isHomePage && links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white lg:text-xs"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA do Header */}
        <div className="flex items-center shrink-0">
          <Button 
            asChild 
            variant="apito" 
            className="rounded-full font-bold shadow-apito transition-transform hover:scale-105 active:scale-95 h-10 px-4 text-sm shrink-0"
          >
            <a href="https://app.financasemcampo.com.br/signup?utm_source=lp&utm_medium=cta&utm_campaign=landing_page&utm_content=header_criar_conta">
              <span className="sm:hidden">Criar conta</span>
              <span className="hidden sm:inline">Criar conta grátis</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};