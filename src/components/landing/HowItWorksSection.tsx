import { PhoneFrame } from "./PhoneFrame";
import { Button } from "@/components/ui/button";

const steps = [
  {
    title: "1. Registrar lance",
    desc: "Você escolhe se foi entrada ou saída, coloca descrição, valor e data.",
    image: "/assets/app-screenshots/gol-contra-lance.png",
  },
  {
    title: "2. Ver na lista",
    desc: "O app organiza os registros por mês, tipo e categoria automaticamente.",
    image: "/assets/app-screenshots/lances-e-filtros.png",
  },
  {
    title: "3. Acompanhar o placar",
    desc: "Você entende quanto entrou, quanto saiu e quanto ainda dá pra jogar.",
    image: "/assets/app-screenshots/placar-do-mes.png",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="bg-linha py-24 lg:py-32">
      <div className="container max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full bg-campo/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-campo/40">
            Passo a Passo
          </span>
          <h2 className="mt-8 font-display text-4xl text-campo sm:text-6xl lg:text-7xl leading-tight">
            Do registro ao placar, <br />
            <span className="text-gramado">sem complicação.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
            Você registra o lance, o app organiza e o placar mostra o jogo do mês.
          </p>
        </div>

        <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-12 w-full max-w-[240px] lg:max-w-[280px]">
                <PhoneFrame className="shadow-2xl ring-4 ring-campo/5 transition-all duration-500 hover:-translate-y-4 hover:rotate-2">
                  <img src={s.image} alt={s.title} className="h-full w-full object-cover" />
                </PhoneFrame>
              </div>
              <p className="font-display text-3xl text-campo leading-tight lg:text-4xl">{s.title}</p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground font-medium lg:text-lg">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Button asChild variant="apito" size="xl" className="h-[72px] rounded-full px-12 text-xl font-black shadow-apito transition-all hover:scale-105 active:scale-95">
            <a href="#cadastro">Começar pelo Placar do Mês</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
