import { Button } from "@/components/ui/button";
import { PlayCircle, Star } from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-campo pb-24 pt-40 text-white lg:pb-56 lg:pt-64"
    >
      {/* Background Decorative Elements */}
      <div className="pointer-events-none absolute inset-0 field-lines opacity-[0.03]" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-apito/10 blur-[100px] sm:h-[800px] sm:w-[1200px] sm:blur-[140px]" />
      </div>

      <div className="container relative z-10 max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="font-display text-3xl leading-[1.1] tracking-tight text-white xs:text-4xl sm:text-7xl lg:text-8xl">
              Veja o placar do seu mês <br />
              <span className="text-apito">em segundos.</span>
            </h1>

            <div className="mt-8 max-w-2xl sm:mt-10">
              <p className="text-lg leading-relaxed text-white/90 lg:text-2xl font-medium sm:text-xl">
                Pare de terminar o mês sem saber para onde seu dinheiro foi.
              </p>
              <p className="mt-3 text-base leading-relaxed text-white/70 lg:text-xl sm:mt-4 sm:text-lg">
                Com o Finanças em Campo, você entende quanto entrou, quanto saiu, quanto foi para seus objetivos e quanto ainda dá pra jogar — sem planilha complicada.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4 sm:mt-12 sm:flex-row sm:gap-5 lg:justify-start w-full sm:w-auto">
              <Button asChild variant="apito" size="xl" className="h-14 w-full sm:w-auto rounded-full px-8 text-base font-black shadow-apito transition-all hover:scale-105 active:scale-95 sm:h-[72px] sm:px-12 sm:text-xl">
                <a href="#cadastro">
                  Criar minha conta grátis
                </a>
              </Button>
              <Button asChild variant="campo-outline" size="xl" className="h-14 w-full sm:w-auto rounded-full px-8 text-sm transition-all hover:scale-105 sm:h-[72px] sm:px-10 sm:text-lg">
                <a href="#como-funciona">
                  <PlayCircle className="mr-3 h-5 w-5 text-apito sm:h-6 sm:w-6" />
                  Ver como funciona
                </a>
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <Star className="h-4 w-4 text-apito fill-apito" />
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                Sem cartão para começar.
              </p>
            </div>
          </div>

          {/* Real App Screenshot Mockup */}
          <div className="relative flex justify-center lg:justify-end w-full overflow-hidden sm:overflow-visible">
            <div className="relative w-full max-w-[260px] sm:max-w-[380px] lg:max-w-[420px]">
              <div className="absolute -inset-10 -z-10 bg-apito/20 blur-[60px] rounded-full sm:blur-[100px]" />
              <PhoneFrame className="shadow-2xl ring-4 ring-white/10">
                <img 
                  src="/assets/app-screenshots/placar-do-mes.png" 
                  alt="Placar do Mês" 
                  className="w-full h-full object-cover"
                />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
