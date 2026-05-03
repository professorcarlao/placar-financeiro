import { Button } from "@/components/ui/button";
import { CheckCircle2, UserPlus, Zap } from "lucide-react";

const benefits = [
  { icon: UserPlus, text: "Crie sua conta" },
  { icon: CheckCircle2, text: "Registre lances" },
  { icon: Zap, text: "Veja seu placar" },
];

export const ActivationSection = () => {
  return (
    <section id="cadastro" className="relative bg-linha py-16 sm:py-24 lg:py-40">
      <div className="container relative z-10 max-w-5xl">
        <div className="rounded-[2.5rem] bg-white p-8 text-center border border-border shadow-2xl sm:rounded-[4rem] sm:p-16 lg:p-24">
          <span className="inline-block rounded-full bg-campo/5 px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-campo/40">
            Comece agora
          </span>
          <h2 className="mt-6 font-display text-3xl text-campo sm:text-6xl lg:text-8xl leading-[1.1] sm:mt-8">
            Crie sua conta <br />
            grátis e veja <br />
            <span className="text-gramado">seu placar por dentro.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-2xl font-medium sm:mt-8 sm:text-lg">
            Você não precisa decidir nada agora. Entre no app, registre seus primeiros lances e entenda se o jeito do Carlão combina com sua rotina.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6 sm:mt-16 sm:gap-12">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="flex items-center gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-campo/5 text-campo">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-bold text-campo sm:text-base">{b.text}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col items-center gap-6 sm:mt-16 sm:gap-8">
            <Button asChild variant="apito" size="xl" className="h-14 w-full sm:w-auto rounded-full px-8 text-base font-black shadow-apito transition-all hover:scale-105 active:scale-95 sm:h-[84px] sm:px-16 sm:text-2xl">
              <a href="#">
                Criar minha conta grátis
              </a>
            </Button>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gramado animate-pulse" />
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-campo/40 sm:text-[11px]">
                Sem cartão para começar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
