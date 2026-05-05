import { PhoneFrame } from "./PhoneFrame";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Target } from "lucide-react";

const steps = [
  {
    title: "1. Registre o lance",
    desc: "Rápido e sem burocracia.",
    image: "/assets/app-screenshots/gol-contra-lance.png",
  },
  {
    title: "2. Veja na lista",
    desc: "Tudo organizado por categorias.",
    image: "/assets/app-screenshots/estatisticas.png",
  },
  {
    title: "3. Olhe o placar",
    desc: "Descubra quanto ainda dá pra jogar.",
    image: "/assets/app-screenshots/placar-do-mes.png",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="bg-linha py-16 sm:py-24">
      <div className="container max-w-6xl px-4">
        <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-20">
          <h2 className="font-display text-[28px] text-campo sm:text-5xl lg:text-6xl leading-tight">
            Do registro ao placar, <br />
            <span className="text-gramado">sem complicação.</span>
          </h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 sm:gap-6 lg:gap-8">
          {steps.map((s, i) => (
            <div key={i} className="flex-col text-center flex items-center justify-center">
              <div className="mb-5 w-full max-w-[140px] sm:mb-6 sm:max-w-[180px] lg:max-w-[200px]">
                <PhoneFrame className="shadow-xl ring-2 ring-campo/5">
                  <img src={s.image} alt={s.title} className="h-full w-full object-cover" />
                </PhoneFrame>
              </div>
              <p className="font-display text-lg text-campo leading-tight sm:text-xl lg:text-2xl">{s.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground font-medium sm:text-sm px-6 sm:px-0">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center sm:mt-16">
          <Button asChild variant="apito" size="lg" className="h-14 w-full max-w-[320px] rounded-full px-8 text-base font-black shadow-apito transition-all hover:scale-105 active:scale-95 sm:h-12 sm:w-auto">
            <a href="#cadastro">Começar pelo Placar do Mês</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
