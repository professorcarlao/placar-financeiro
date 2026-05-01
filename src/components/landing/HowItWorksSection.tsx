import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { NovoLanceDrawerMockup } from "./mockups/NovoLanceDrawerMockup";
import { LancesListMockup } from "./mockups/LancesListMockup";
import { PhoneFrame } from "./PhoneFrame";
import { PlacarMockup } from "./PlacarMockup";

const passos = [
  {
    n: "01",
    title: "Adicione um lance",
    desc: "Escolha Gol a Favor ou Gol Contra, descrição, valor e data. Pronto.",
    mockup: (
      <PhoneFrame className="max-w-[240px]">
        <div className="p-4 bg-campo-flat h-full min-h-[320px]">
           <NovoLanceDrawerMockup />
        </div>
      </PhoneFrame>
    ),
  },
  {
    n: "02",
    title: "O lance entra na lista",
    desc: "Salário, mercado, assinaturas e parcelas aparecem organizados por mês.",
    mockup: (
      <PhoneFrame className="max-w-[240px]">
        <div className="p-4 bg-campo-flat h-full min-h-[320px]">
          <LancesListMockup />
        </div>
      </PhoneFrame>
    ),
  },
  {
    n: "03",
    title: "O placar atualiza",
    desc: "Você vê quanto entrou, quanto saiu e quanto ainda dá pra jogar.",
    mockup: (
      <PhoneFrame className="max-w-[240px]">
        <PlacarMockup />
      </PhoneFrame>
    ),
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="relative bg-campo py-16 text-linha lg:py-20">
      <div className="absolute inset-0 opacity-[0.05] field-lines" />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-apito px-3 py-1 text-xs font-bold uppercase tracking-wider text-campo">
            Como o jogo começa
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            Registrou. Organizou. <span className="text-apito">Apareceu no placar.</span>
          </h2>
          <p className="mt-3 text-base text-linha/75">
            Três passos. Sem planilha. Sem cadastro infinito.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {passos.map((p, i) => (
            <div key={i} className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="mb-3 flex items-center gap-3">
                <span className="font-display text-3xl text-apito">{p.n}</span>
                <p className="font-display text-xl">{p.title}</p>
              </div>
              <p className="mb-6 text-sm text-linha/70 max-w-[280px]">{p.desc}</p>
              <div className="w-full flex justify-center lg:justify-start">
                {p.mockup}
              </div>
              {i < passos.length - 1 && (
                <div className="absolute -right-5 top-1/2 hidden lg:block translate-x-1/2">
                   <ArrowRight className="h-6 w-6 text-apito/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild variant="apito" size="xl" className="rounded-full">
            <a href="#cadastro">Começar pelo Placar do Mês</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
