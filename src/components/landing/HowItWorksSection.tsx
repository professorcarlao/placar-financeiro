import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { NovoLanceDrawerMockup } from "./mockups/NovoLanceDrawerMockup";
import { LancesListMockup } from "./mockups/LancesListMockup";
import { PlacarDashboardMockup } from "./mockups/PlacarDashboardMockup";
import { AppShellMockup } from "./mockups/AppShellMockup";

const passos = [
  {
    n: "01",
    title: "Adicione um lance",
    desc: "Escolha Gol a Favor ou Gol Contra, descrição, valor e data. Pronto.",
    mockup: <NovoLanceDrawerMockup />,
  },
  {
    n: "02",
    title: "O lance entra na lista",
    desc: "Salário, mercado, assinaturas e parcelas aparecem organizados por mês.",
    mockup: <LancesListMockup />,
  },
  {
    n: "03",
    title: "O placar atualiza",
    desc: "Você vê quanto entrou, quanto saiu e quanto ainda dá pra jogar.",
    mockup: (
      <AppShellMockup active="placar">
        <PlacarDashboardMockup compact />
      </AppShellMockup>
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

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {passos.map((p, i) => (
            <div key={i} className="relative">
              <div className="mb-3 flex items-center gap-3">
                <span className="font-display text-3xl text-apito">{p.n}</span>
                <p className="font-display text-xl">{p.title}</p>
              </div>
              <p className="mb-4 text-sm text-linha/70">{p.desc}</p>
              <div className="transition-transform hover:-translate-y-1">{p.mockup}</div>
              {i < passos.length - 1 && (
                <ArrowRight className="absolute -right-4 top-1/2 hidden h-6 w-6 text-apito lg:block" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="apito" size="xl" className="rounded-full">
            <a href="#cadastro">Começar pelo Placar do Mês</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
