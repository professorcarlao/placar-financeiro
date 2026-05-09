import { Button } from "@/components/ui/button";
import carlao from "@/assets/professor-carlao.png";

export const FinalCTASection = () => {
  return (
    <section className="relative overflow-hidden bg-campo py-14 sm:py-24 px-4">
      <div className="absolute inset-0 field-lines opacity-[0.03]" />
      <div className="container relative z-10 max-w-7xl px-0">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-[320px] mx-auto sm:max-w-4xl">
            <h2 className="font-display text-4xl leading-none text-white sm:text-7xl lg:text-8xl sm:leading-tight">
              O mês já tá rolando. <br />
              <span className="text-apito uppercase">Vai jogar sem olhar o placar?</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-white/80 sm:mt-8 sm:text-lg lg:text-xl font-medium">
              Crie sua conta grátis, registre seus primeiros lances e veja quanto ainda pode gastar no mês.
            </p>
            <div className="mt-10 flex justify-center">
              <Button asChild variant="apito" className="h-12 w-full max-w-[320px] mx-auto rounded-full px-5 text-base font-black shadow-apito transition-all hover:scale-105 active:scale-95 sm:h-16 sm:w-auto sm:px-12 sm:text-lg">
                <a href="https://app.financasemcampo.com.br/signup">
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