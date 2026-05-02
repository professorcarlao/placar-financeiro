import { Button } from "@/components/ui/button";
import carlao from "@/assets/professor-carlao.png";

export const FinalCTASection = () => {
  return (
    <section className="relative overflow-hidden bg-campo py-16 sm:py-24 lg:py-40">
      <div className="absolute inset-0 field-lines opacity-[0.03]" />
      <div className="container relative z-10 max-w-6xl">
        <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:text-left lg:gap-24">
          <div className="w-full max-w-[200px] lg:max-w-[380px] shrink-0 sm:max-w-[240px]">
            <div className="relative">
              <div className="absolute -inset-10 -z-10 bg-apito/20 blur-[60px] rounded-full animate-pulse sm:blur-[80px]" />
              <img src={carlao} alt="Professor Carlão" className="w-full drop-shadow-[0_20px_50px_rgba(247,225,53,0.4)] transition-transform duration-500 hover:scale-105" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="font-display text-3xl text-white sm:text-7xl lg:text-8xl leading-[1.05]">
              O mês já tá rolando. <br />
              <span className="text-apito">Vai jogar sem olhar o placar?</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/80 lg:text-2xl font-medium sm:mt-10 sm:text-xl">
              Crie sua conta grátis e veja em poucos minutos como está o jogo do seu dinheiro.
            </p>
            <div className="mt-10 sm:mt-12">
              <Button asChild variant="apito" size="xl" className="h-16 w-full sm:w-auto rounded-full px-12 text-lg font-black shadow-apito transition-all hover:scale-105 active:scale-95 sm:h-[84px] sm:px-16 sm:text-2xl">
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