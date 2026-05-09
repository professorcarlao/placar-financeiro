import { Button } from "@/components/ui/button";
import { CheckCircle2, UserPlus, Zap } from "lucide-react";

const benefits = [
  { icon: UserPlus, text: "Crie sua conta" },
  { icon: CheckCircle2, text: "Registre lances" },
  { icon: Zap, text: "Veja seu placar" },
];

export const ActivationSection = () => {
  return (
    <section id="cadastro" className="relative bg-linha py-14 sm:py-24 px-4">
      <div className="container relative z-10 max-w-5xl px-0">
        <div className="rounded-[2.5rem] bg-campo p-6 text-center border border-white/5 shadow-2xl sm:rounded-[3rem] sm:p-16 ring-1 ring-white/10">
          <h2 className="font-display text-4xl leading-none text-white sm:text-6xl lg:text-7xl sm:leading-tight max-w-[320px] mx-auto sm:max-w-none">
            Crie sua conta grátis e veja <br />
            <span className="text-apito uppercase">seu placar por dentro.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[320px] text-base leading-7 text-white/75 sm:mt-6 sm:text-lg lg:text-xl font-medium sm:max-w-2xl">
            Entre no app, registre seus primeiros lances e veja como o Finanças em Campo ajuda no controle financeiro do mês.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 sm:mt-10 sm:gap-10">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="flex items-center gap-2.5 sm:gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-apito shadow-inner sm:h-10 sm:w-10 sm:rounded-xl">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <span className="text-xs font-bold text-white/85 sm:text-base">{b.text}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col items-center gap-5 sm:mt-16 sm:gap-6">
            <Button asChild variant="apito" className="h-12 w-full max-w-[320px] mx-auto rounded-full px-5 text-base font-black shadow-apito transition-all hover:scale-105 active:scale-95 sm:h-20 sm:px-20 sm:text-xl sm:w-auto">
              <a href="https://app.financasemcampo.com.br/signup">
                Criar minha conta grátis
              </a>
            </Button>
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-apito animate-pulse sm:h-2 sm:w-2" />
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 sm:text-[11px]">
                Sem cartão para começar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
