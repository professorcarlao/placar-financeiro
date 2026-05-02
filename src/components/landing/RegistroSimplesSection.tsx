import { PhoneFrame } from "./PhoneFrame";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export const RegistroSimplesSection = () => {
  return (
    <section className="bg-linha py-16 sm:py-20 lg:py-28">
      <div className="container max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-block rounded-full bg-campo/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-campo/40">
              Praticidade
            </span>
            <h2 className="mt-6 font-display text-3xl text-campo sm:text-5xl lg:text-6xl sm:mt-8">
              Registrar um lance não <br />
              <span className="text-gramado">precisa virar planilha.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-xl sm:mt-6 sm:text-lg">
              Você escolhe o tipo do lance, coloca descrição, valor e data. O resto entra no placar automaticamente, sem esforço.
            </p>

            <div className="mt-10 flex flex-col gap-6 sm:mt-12">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-campo/5 text-campo">
                  <PlusCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-display text-xl text-campo">Rápido e Direto</p>
                  <p className="text-sm text-muted-foreground">Nada de formulários infinitos. Apenas o essencial para o seu placar.</p>
                </div>
              </div>
            </div>

            <Button asChild variant="apito" size="xl" className="mt-10 h-14 rounded-full px-10 text-lg font-black shadow-apito transition-transform hover:scale-105 active:scale-95 sm:mt-12 sm:h-16">
              <a href="#cadastro">
                Começar pelo Placar do Mês
              </a>
            </Button>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[340px]">
              <div className="absolute -inset-10 -z-10 bg-campo/5 blur-[80px] rounded-full sm:blur-[100px]" />
              <PhoneFrame className="shadow-2xl ring-4 ring-white/10">
                <img 
                  src="/assets/app-screenshots/gol-contra-lance.png" 
                  alt="Registro de Lance" 
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
