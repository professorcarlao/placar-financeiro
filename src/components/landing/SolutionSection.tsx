import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";

const features = [
  {
    title: "Quanto dá pra jogar",
    desc: "Veja quanto ainda pode gastar sem susto.",
  },
  {
    title: "Entrou no jogo",
    desc: "Acompanhe suas entradas do mês.",
  },
  {
    title: "Saiu do jogo",
    desc: "Organize seus gastos mensais.",
  },
  {
    title: "Objetivos",
    desc: "Veja suas metas financeiras com progresso claro.",
  },
];

export const SolutionSection = () => {
  return (
    <section className="relative overflow-hidden bg-campo py-14 sm:py-24 lg:py-32">
      <div className="absolute inset-0 field-lines opacity-[0.03]" />
      <div className="container relative z-10 max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div className="text-center lg:text-left max-w-[320px] mx-auto sm:max-w-none">
            <h2 className="font-display text-4xl leading-none text-white sm:text-6xl lg:text-7xl sm:leading-tight">
              Cara de placar, <br />
              <span className="text-apito">não de planilha.</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg lg:text-xl font-medium sm:px-0">
              Uma alternativa visual à planilha financeira: veja o que entrou, o que saiu, seus objetivos e o dinheiro disponível para o mês.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4">
              {features.map((f, i) => (
                <div key={i} className="flex flex-col gap-2 rounded-xl bg-white/5 p-4 border border-white/10 text-center sm:text-left sm:gap-3 sm:rounded-2xl sm:p-6">
                  <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-apito/10 text-apito sm:mx-0 sm:h-10 sm:w-10 sm:rounded-xl">
                    <CheckCircle2 className="h-4 w-4 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <p className="font-display text-lg text-white leading-tight sm:text-xl">{f.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-white/40 font-medium">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild variant="apito" className="mt-10 h-12 w-full max-w-[320px] mx-auto rounded-full px-5 text-base font-black shadow-apito transition-all hover:scale-105 active:scale-95 sm:h-14 sm:w-auto sm:px-10 sm:text-lg">
              <a href="https://app.financasemcampo.com.br/signup?utm_source=lp&utm_medium=cta&utm_campaign=landing_page&utm_content=section_criar_conta">
                Ver meu placar grátis
              </a>
            </Button>
          </div>

          <div className="relative flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-[180px] sm:max-w-[250px] lg:max-w-[280px]">
              <div className="absolute -inset-8 -z-10 bg-apito/10 blur-[50px] rounded-full sm:blur-[100px]" />
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
        
        {/* Differentiation Block */}
        <div className="mt-16 rounded-[2rem] bg-white/5 border border-white/10 sm:mt-24 sm:rounded-[2.5rem] overflow-hidden">
          <div className="grid grid-cols-1 items-stretch sm:grid-cols-3">
            <div className="flex flex-col justify-center p-8 text-center sm:p-10 lg:p-12 lg:text-left">
              <p className="font-display text-xl text-white sm:text-2xl">Não é banco.</p>
              <p className="mt-2 text-[1.1rem] font-medium leading-[1.5] text-white/60">Mostra movimentações, mas nem sempre explica o jogo.</p>
            </div>
            <div className="flex flex-col justify-center p-8 text-center sm:p-10 lg:p-12 lg:text-left border-y border-white/10 sm:border-y-0 sm:border-x">
              <p className="font-display text-xl text-white sm:text-2xl">Não é planilha.</p>
              <p className="mt-2 text-[1.1rem] font-medium leading-[1.5] text-white/60">Evita fórmulas, abas e manutenção manual.</p>
            </div>
            <div className="flex flex-col justify-center bg-apito p-8 text-center sm:p-10 lg:p-12 lg:text-left">
              <p className="font-display text-xl text-campo sm:text-2xl">É o placar.</p>
              <p className="mt-2 text-[1.1rem] font-medium leading-[1.5] text-campo/80">Mostra com clareza quanto você ainda pode gastar no mês.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
