import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";

const features = [
  {
    title: "Quanto dá pra jogar",
    desc: "Veja quanto ainda sobra para usar sem entrar no sufoco.",
  },
  {
    title: "Entrou no jogo",
    desc: "Tudo que entrou no mês aparece como ponto a favor.",
  },
  {
    title: "Saiu do jogo",
    desc: "Contas, mercado e lazer aparecem como saídas.",
  },
  {
    title: "Objetivos em dia",
    desc: "Metas aparecem no placar para não serem esquecidas.",
  },
];

export const SolutionSection = () => {
  return (
    <section className="relative overflow-hidden bg-campo py-16 sm:py-24 lg:py-40">
      <div className="absolute inset-0 field-lines opacity-[0.03]" />
      <div className="container relative z-10 max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-32">
          <div>
            <span className="inline-block rounded-full bg-apito/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-apito">
              A Solução
            </span>
            <h2 className="mt-6 font-display text-3xl text-white sm:text-6xl lg:text-8xl leading-tight sm:mt-8">
              Cara de placar, <br />
              <span className="text-apito">não de planilha.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70 lg:text-2xl font-medium sm:mt-8 sm:text-xl">
              O app mostra o que realmente importa para o seu bolso hoje. Uma visão direta e visual do seu jogo financeiro.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-10">
              {features.map((f, i) => (
                <div key={i} className="flex flex-col gap-2 sm:gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-apito/10 text-apito">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-display text-xl text-white leading-tight sm:text-2xl lg:text-3xl">{f.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/40 font-medium sm:mt-2 sm:text-base">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild variant="apito" size="xl" className="mt-10 h-14 w-full sm:w-auto rounded-full px-10 text-lg font-black shadow-apito transition-all hover:scale-105 active:scale-95 sm:mt-12 sm:h-20 sm:px-16 sm:text-xl">
              <a href="#cadastro">
                Ver meu placar grátis
              </a>
            </Button>
          </div>

          <div className="relative flex justify-center lg:justify-end w-full overflow-hidden sm:overflow-visible">
            <div className="relative w-full max-w-[260px] sm:max-w-[360px] lg:max-w-[420px]">
              <div className="absolute -inset-10 -z-10 bg-apito/10 blur-[60px] rounded-full sm:-inset-16 sm:blur-[100px]" />
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
      </div>
    </section>
  );
};
