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

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center gap-6 rounded-[2.5rem] bg-white p-6 shadow-card-soft border border-border transition-all hover:shadow-xl sm:p-8 lg:flex-row lg:items-center lg:gap-10 lg:p-10"
            >
              <div className="w-full max-w-[120px] shrink-0 sm:max-w-[140px] lg:max-w-[160px]">
                {b.isApp ? (
                  <PhoneFrame minimal hideButtons className="shadow-xl">
                    <img src={b.image} alt={b.title} className="h-full w-full object-cover" />
                  </PhoneFrame>
                ) : (
                  <div className="relative">
                    <div className="relative overflow-hidden rounded-3xl border-2 border-apito/30 bg-apito/5 p-1 shadow-inner aspect-square">
                      <img src={b.image} alt={b.title} className="w-full h-full object-cover rounded-2xl" />
                    </div>
                    {/* Mini Insight Card */}
                    <div className="absolute -right-10 -bottom-4 z-10 w-32 rounded-2xl bg-white p-3 shadow-2xl border border-border sm:-right-12 lg:-right-10">
                      <p className="text-[8px] font-black uppercase tracking-wider text-gramado mb-1">Leitura do jogo</p>
                      <p className="text-[10px] leading-tight font-bold text-campo">Seu mês está sob controle.</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="font-display text-2xl text-campo leading-tight sm:text-3xl lg:text-4xl">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground font-medium sm:text-base lg:max-w-[320px]">
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
