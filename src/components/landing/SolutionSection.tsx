import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";

const features = [
  {
    title: "Quanto dá pra jogar",
    desc: "Saldo real para usar sem susto.",
  },
  {
    title: "Entrou no jogo",
    desc: "Tudo que entrou no seu mês.",
  },
  {
    title: "Saiu do jogo",
    desc: "Contas e gastos sob controle.",
  },
  {
    title: "Objetivos",
    desc: "Progresso visual das suas metas.",
  },
];

export const SolutionSection = () => {
  return (
    <section className="relative overflow-hidden bg-campo py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 field-lines opacity-[0.03]" />
      <div className="container relative z-10 max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div className="text-center lg:text-left px-[24px] py-[24px]">
            <h2 className="font-display text-white sm:text-6xl lg:text-7xl leading-tight text-5xl">
              Cara de placar, <br />
              <span className="text-apito">não de planilha.</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-lg lg:text-xl font-medium px-4 lg:px-0">
              O app mostra o que realmente importa para o seu bolso hoje. Uma visão direta e visual do seu jogo financeiro.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4">
              {features.map((f, i) => (
                <div key={i} className="flex flex-col gap-2 rounded-xl bg-white/5 p-5 border border-white/10 text-center sm:text-left sm:gap-3 sm:rounded-2xl sm:p-6">
                  <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-apito/10 text-apito sm:mx-0 sm:h-10 sm:w-10 sm:rounded-xl">
                    <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <p className="font-display text-lg text-white leading-tight sm:text-xl">{f.title}</p>
                    <p className="mt-1 text-[11px] leading-relaxed text-white/40 font-medium sm:text-xs">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild variant="apito" size="xl" className="mt-10 h-14 w-full max-w-[320px] rounded-full px-8 text-base font-black shadow-apito transition-all hover:scale-105 active:scale-95 sm:w-auto sm:px-10 sm:text-lg">
              <a href="#cadastro">
                Ver meu placar grátis
              </a>
            </Button>
          </div>

          <div className="relative flex justify-center lg:justify-end w-full my-[80px] mt-0">
            <div className="relative w-full max-w-[240px] sm:max-w-[320px] lg:max-w-[420px]">
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
        <div className="mt-16 rounded-[2rem] bg-white/5 p-6 border border-white/10 sm:mt-24 sm:rounded-[2.5rem] sm:p-12">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-3 lg:gap-12">
            <div className="text-center lg:text-left px-[24px] py-[24px]">
              <p className="font-display text-xl text-white sm:text-2xl">Não é banco.</p>
              <p className="mt-1 text-xs text-white/40 sm:mt-2 sm:text-sm sm:text-white/50">Mostra movimentações, mas nem sempre o jogo.</p>
            </div>
            <div className="text-center lg:text-left px-[24px] py-[24px]">
              <p className="font-display text-xl text-white sm:text-2xl">Não é planilha.</p>
              <p className="mt-1 text-xs text-white/40 sm:mt-2 sm:text-sm sm:text-white/50">Exige disciplina e manutenção manual constante.</p>
            </div>
            <div className="rounded-xl bg-apito p-5 text-center sm:rounded-2xl sm:p-6 lg:text-left">
              <p className="font-display text-xl text-campo sm:text-2xl">É o Placar.</p>
              <p className="mt-1 text-xs text-campo/60 sm:mt-2 sm:text-sm sm:text-campo/70">Quanto ainda dá pra jogar hoje.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
