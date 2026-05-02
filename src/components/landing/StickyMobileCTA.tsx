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
        "fixed inset-x-0 bottom-0 z-50 p-2 lg:hidden pb-[calc(0.5rem+env(safe-area-inset-bottom))] transition-transform duration-500 ease-in-out px-3",
        isVisible ? "translate-y-0" : "translate-y-[200%]"
      )}
    >
      <div className="mx-auto flex w-full max-w-[360px] items-center justify-between gap-2 rounded-full border border-white/10 bg-campo/95 p-1.5 pr-1.5 shadow-2xl backdrop-blur-md">
        <div className="pl-3 shrink min-w-0">
          <p className="text-[7px] font-black uppercase tracking-[0.05em] text-white/50 leading-none truncate sm:text-[8px]">
            Ver meu placar <br />
            <span className="text-apito text-[9px] sm:text-[10px]">grátis agora</span>
          </p>
        </div>
        <Button asChild variant="apito" className="h-[42px] rounded-full px-4 text-[10px] font-black uppercase shadow-lg shadow-apito/10 shrink-0">
          <a href="#cadastro" className="whitespace-nowrap">
            Criar conta
          </a>
        </Button>
      </div>
    </div>
  );
};
