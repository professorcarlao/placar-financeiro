import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 p-3 lg:hidden pb-[calc(0.75rem+env(safe-area-inset-bottom))] transition-transform duration-500 ease-in-out",
        isVisible ? "translate-y-0" : "translate-y-[200%]"
      )}
    >
      <div className="mx-auto flex w-full max-w-[400px] items-center justify-between gap-3 rounded-full border border-white/10 bg-campo/95 p-1.5 shadow-2xl backdrop-blur-md">
        <div className="pl-4 shrink min-w-0">
          <p className="font-black uppercase tracking-[0.1em] text-white/40 leading-none truncate text-xs">
            Placar do mês
            <span className="block mt-1 text-apito lowercase tracking-normal font-bold text-sm">grátis agora</span>
          </p>
        </div>
        <Button asChild variant="apito" className="h-[44px] rounded-full px-5 text-[11px] font-black uppercase shadow-lg shadow-apito/20 shrink-0">
          <a href="#cadastro" className="whitespace-nowrap">
            Criar conta
          </a>
        </Button>
      </div>
    </div>
  );
};
