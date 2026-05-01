import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 600px
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 z-50 w-full border-t border-linha/10 bg-campo/95 p-4 backdrop-blur-md transition-transform duration-300 md:hidden ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <p className="text-[10px] font-bold uppercase tracking-wider text-apito">Carlão</p>
          <p className="text-xs font-semibold text-linha">Ver meu placar grátis</p>
        </div>
        <Button asChild variant="apito" size="sm" className="rounded-full px-6">
          <a href="#cadastro">Criar conta grátis</a>
        </Button>
      </div>
    </div>
  );
};
