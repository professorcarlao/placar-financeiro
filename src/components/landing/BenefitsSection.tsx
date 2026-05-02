import { PhoneFrame } from "./PhoneFrame";
import carlao from "@/assets/professor-carlao.png";
import { Sparkles } from "lucide-react";

const benefits = [
  {
    title: "Clareza para o mês atual",
    desc: "O Placar do Mês mostra na hora se o jogo está sob controle ou se você precisa recuar.",
    image: "/assets/app-screenshots/placar-do-mes.png",
    isApp: true,
  },
  {
    title: "Objetivos visíveis",
    desc: "Suas metas não ficam esquecidas no meio da bagunça. O progresso é visual e diário.",
    image: "/assets/app-screenshots/Objetivos.png",
    isApp: true,
  },
  {
    title: "Insights do Carlão",
    desc: "O app traz leituras e insights rápidos sobre o seu mês, para te ajudar a entender o que está pesando no jogo.",
    image: carlao,
    isApp: false,
  },
  {
    title: "Estatísticas diretas",
    desc: "Veja o que mais pesou no seu bolso de forma visual, rápida e sem complicação.",
    image: "/assets/app-screenshots/estatisticas.png",
    isApp: true,
  },
];

export const BenefitsSection = () => {
  return (
    <section className="bg-linha py-16 sm:py-24 lg:py-32">
      <div className="container max-w-7xl">
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <span className="inline-block rounded-full bg-campo/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-campo/40">
            Benefícios
          </span>
          <h2 className="mt-6 font-display text-3xl text-campo sm:text-6xl lg:text-7xl leading-tight sm:mt-8">
            O técnico que faltava <br />
            <span className="text-gramado">no seu dinheiro.</span>
          </h2>
        </div>

        <div className="grid gap-3 sm:gap-8 md:grid-cols-2">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="group flex flex-col items-center gap-4 rounded-[2rem] bg-white p-5 shadow-card-soft border border-border transition-all hover:shadow-xl sm:p-10 lg:flex-row lg:gap-10 lg:p-12"
            >
              <div className="w-full max-w-[120px] shrink-0 sm:max-w-[180px]">
                {b.isApp ? (
                  <PhoneFrame className="shadow-xl">
                    <img src={b.image} alt={b.title} className="h-full w-full object-cover" />
                  </PhoneFrame>
                ) : (
                  <div className="relative overflow-hidden rounded-[2rem] border-4 border-apito/20 bg-apito/5 p-2 aspect-[9/19]">
                    <img src={b.image} alt={b.title} className="w-full h-full object-cover rounded-[1.5rem] grayscale transition-all group-hover:grayscale-0" />
                    <div className="absolute right-2 bottom-2 flex h-8 w-8 items-center justify-center rounded-full bg-apito text-campo shadow-lg sm:h-10 sm:w-10">
                      <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                  </div>
                )}
              </div>
              <div className="flex-1 text-center lg:text-left">
                <p className="font-display text-xl text-campo leading-tight sm:text-2xl lg:text-3xl">{b.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground font-medium sm:mt-4 sm:text-base">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
