import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-campo pt-24 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32 text-white"
    >
      {/* Background Decorative Elements */}
      <div className="pointer-events-none absolute inset-0 field-lines opacity-[0.03]" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-apito/10 blur-[100px] sm:h-[800px] sm:w-[1200px] sm:blur-[140px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 sm:gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-[320px] mx-auto sm:max-w-none">
            {/* Eyebrow / Support Line */}
            <span className="mb-4 inline-block rounded-full bg-white/5 px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-white/40 sm:mb-6 sm:text-[10px]">
              Simples • Visual • Direto
            </span>

            {/* H1 Headline */}
            <h1 className="font-display text-[52px] leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Veja quanto ainda <br />
              <span className="text-apito">dá pra jogar</span> <br />
              no mês.
            </h1>

            {/* Supporting Paragraph */}
            <div className="mt-6 max-w-xl sm:mt-10">
              <p className="text-base leading-7 text-white/80 sm:text-lg lg:text-xl font-medium">
                Um app de controle financeiro pessoal simples e visual para organizar entradas, gastos, metas, assinaturas e parcelamentos e entender quanto você ainda pode gastar no mês.
              </p>
            </div>

            {/* Social Proof - Avatars Row */}
            <div className="mt-8 flex -space-x-3 overflow-hidden sm:mt-10 sm:-space-x-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="relative inline-block h-8 w-8 rounded-full border-2 border-campo bg-campo shadow-xl sm:h-11 sm:w-11">
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 20}`}
                    alt="Usuário"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              ))}
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/10 text-[11px] font-black text-campo shadow-xl backdrop-blur-sm sm:h-11 sm:w-11 bg-apito sm:text-sm">
                +500
              </div>
            </div>

            {/* CTA Row */}
            <div className="mt-10 flex flex-col items-center gap-3 w-full max-w-[320px] mx-auto sm:flex-row sm:max-w-none">
              <Button asChild variant="apito" className="h-12 w-full rounded-full px-5 text-base font-black shadow-apito transition-all hover:scale-105 active:scale-95 sm:h-16 sm:px-12 sm:text-lg sm:w-auto">
                <a href="https://app.financasemcampo.com.br/signup?utm_source=lp&utm_medium=cta&utm_campaign=landing_page&utm_content=hero_criar_conta">
                  Ver meu placar grátis
                </a>
              </Button>
              <Button asChild variant="campo-outline" className="h-12 w-full rounded-full px-5 text-base font-black transition-all hover:scale-105 sm:h-16 sm:px-10 sm:text-base sm:w-auto opacity-70 hover:opacity-100">
                <a href="#como-funciona">
                  <PlayCircle className="mr-3 h-5 w-5 text-apito" />
                  Ver como funciona
                </a>
              </Button>
            </div>

            {/* Microcopy */}
            <div className="mt-6 flex items-center gap-2 lg:ml-2">
              <div className="h-1 w-1 rounded-full bg-apito animate-pulse sm:h-1.5 sm:w-1.5" />
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/60 sm:text-[10px]">
                Sem cartão para começar.
              </p>
            </div>
          </div>

          {/* Real App Screenshot Mockup */}
          <div className="relative flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-[190px] sm:max-w-[240px] lg:max-w-[260px] shrink-0">
              <div className="absolute -inset-10 -z-10 bg-apito/10 blur-[60px] rounded-full sm:blur-[100px]" />
              <PhoneFrame className="shadow-2xl ring-4 ring-white/10" hideButtons={false}>
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
