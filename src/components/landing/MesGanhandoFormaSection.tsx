import { PhoneFrame } from "./PhoneFrame";
import { TrendingUp, TrendingDown, Target } from "lucide-react";

export const MesGanhandoFormaSection = () => {
  return (
    <section className="relative overflow-hidden bg-campo py-16 sm:py-24">
      <div className="absolute inset-0 field-lines opacity-[0.03]" />
      <div className="container relative z-10 max-w-7xl">
        <div className="grid items-center gap-20 lg:grid-cols-2 lg:gap-32">
          <div className="order-2 lg:order-1 relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[480px]">
              <div className="absolute -inset-20 -z-10 bg-apito/10 blur-[120px] rounded-full" />
              <PhoneFrame className="shadow-2xl ring-4 ring-white/10">
                <img 
                  src="/assets/app-screenshots/estatisticas.png" 
                  alt="Estatísticas do App" 
                  className="w-full h-full object-cover"
                />
              </PhoneFrame>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block rounded-full bg-apito/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-apito">
              Análise do Jogo
            </span>
            <h2 className="mt-6 sm:mt-8 font-display text-3xl sm:text-6xl lg:text-8xl text-white leading-tight">
              Veja o mês <br />
              <span className="text-apito">ganhando forma.</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-white/70 lg:text-2xl font-medium">
              Cada lance registrado ajuda o app a mostrar o que mais pesou, o que entrou e o que ainda está comprometido no seu placar mensal.
            </p>

            <div className="mt-12 space-y-4 sm:space-y-6">
              <div className="flex items-center gap-4 sm:gap-8 rounded-[2.5rem] bg-white/5 p-4 sm:p-8 border border-white/10 transition-all hover:bg-white/10">
                <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gramado/20 text-gramado">
                  <TrendingUp className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-[11px] font-black uppercase tracking-widest text-white/30">Entrou no jogo</p>
                  <p className="text-3xl font-display text-white mt-1">R$ 25.000,00</p>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-8 rounded-[2.5rem] bg-white/5 p-4 sm:p-8 border border-white/10 transition-all hover:bg-white/10">
                <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-cartao-vermelho/20 text-cartao-vermelho">
                  <TrendingDown className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-[11px] font-black uppercase tracking-widest text-white/30">Saiu do jogo</p>
                  <p className="text-3xl font-display text-white mt-1">R$ 5.630,00</p>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-8 rounded-[2.5rem] bg-white/5 p-4 sm:p-8 border border-white/10 transition-all hover:bg-white/10">
                <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-apito/20 text-apito">
                  <Target className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-[11px] font-black uppercase tracking-widest text-white/30">Ganhando o jogo</p>
                  <p className="text-3xl font-display text-white mt-1">R$ 19.370,00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
