import { PhoneFrame } from "./PhoneFrame";
import carlao from "@/assets/professor-carlao.png";

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
          <h2 className="mt-6 font-display text-3xl text-campo sm:text-6xl lg:text-7xl leading-[1.1] sm:mt-8">
            O técnico <br />
            que faltava <br />
            <span className="text-gramado">no seu dinheiro.</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="group relative flex flex-row items-center gap-4 rounded-3xl bg-white p-4 shadow-card-soft border border-border transition-all hover:shadow-xl sm:gap-5 sm:p-5"
            >
              <div className="w-[88px] shrink-0 sm:w-[104px]">
                {b.isApp ? (
                  <PhoneFrame mini>
                    <img src={b.image} alt={b.title} className="h-full w-full object-cover" />
                  </PhoneFrame>
                ) : (
                  <div className="aspect-square overflow-hidden rounded-2xl border-2 border-apito/40 bg-apito/10 shadow-sm">
                    <img src={b.image} alt={b.title} className="h-full w-full object-cover" />
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-xl text-campo leading-tight sm:text-2xl lg:text-3xl">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-snug text-muted-foreground font-medium">
                  {b.desc}
                </p>
                {!b.isApp && (
                  <div className="mt-3 inline-flex flex-col rounded-xl bg-campo/5 border border-campo/10 px-3 py-2">
                    <span className="text-[9px] font-black uppercase tracking-wider text-gramado">
                      Leitura do jogo
                    </span>
                    <span className="text-xs font-bold text-campo leading-tight mt-0.5">
                      Seu mês está sob controle, mas o crédito ainda pesa.
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
