import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { NovoLanceDrawerMockup } from "./mockups/NovoLanceDrawerMockup";

const pontos = [
  "Gol a Favor ou Gol Contra",
  "Descrição, valor e data",
  "Pronto: o lance entra no jogo",
];

export const RegistroSimplesSection = () => {
  return (
    <section className="relative bg-muted py-16 lg:py-20">
      <div className="container grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <span className="inline-block rounded-full bg-campo px-3 py-1 text-xs font-bold uppercase tracking-wider text-apito">
            Simples assim
          </span>
          <h2 className="mt-4 font-display text-4xl text-campo sm:text-5xl">
            Registrar um lance <br />
            <span className="text-apito-deep">não precisa virar planilha</span>.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Você escolhe se foi Gol a Favor ou Gol Contra, coloca descrição, valor e data. O placar atualiza sozinho.
          </p>

          <ul className="mt-5 space-y-2">
            {pontos.map((p, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-campo">
                <CheckCircle2 className="h-4 w-4 text-apito-deep" />
                {p}
              </li>
            ))}
          </ul>

          <Button asChild variant="apito" size="lg" className="mt-7 rounded-full">
            <a href="#cadastro">
              Ver meu placar grátis <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 -z-10 mx-auto h-[300px] w-[300px] rounded-full bg-apito/20 blur-3xl" />
          <NovoLanceDrawerMockup />
        </div>
      </div>
    </section>
  );
};
