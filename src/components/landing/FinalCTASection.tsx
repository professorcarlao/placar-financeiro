import { Button } from "@/components/ui/button";
import carlao from "@/assets/professor-carlao.png";

export const FinalCTASection = () => {
  return (
    <section className="relative overflow-hidden bg-campo py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 field-lines opacity-[0.03]" />
      <div className="container relative z-10 max-w-7xl px-4">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-4xl">
            <h2 className="font-display text-white sm:text-7xl lg:text-8xl leading-tight text-5xl">
              O mês já tá rolando. <br />
              <span className="text-apito uppercase">Vai jogar sem o placar?</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/80 sm:mt-8 sm:text-lg lg:text-xl font-medium">
              Crie sua conta grátis e veja seu jogo em poucos minutos.
            </p>
            <div className="mt-10 flex justify-center">
              <Button asChild variant="apito" size="xl" className="h-14 w-full max-w-[320px] rounded-full px-8 text-base font-black shadow-apito transition-all hover:scale-105 active:scale-95 sm:h-16 sm:w-auto sm:px-12 sm:text-lg">
                <a href="#cadastro">
                  Criar minha conta grátis
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};