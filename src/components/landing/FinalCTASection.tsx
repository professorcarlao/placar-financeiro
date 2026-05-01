import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import carlao from "@/assets/professor-carlao.png";

export const FinalCTASection = () => {
  return (
    <section className="relative overflow-hidden bg-campo py-20 text-linha lg:py-28">
      <div className="absolute inset-0 opacity-[0.08] field-lines" />
      <div className="absolute left-1/2 top-0 -z-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-apito/20 blur-3xl" />

      <div className="container relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <span className="inline-block rounded-full bg-apito px-3 py-1 text-xs font-bold uppercase tracking-wider text-campo">
            Apito final
          </span>
          <h2 className="mt-4 font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
            O mês já tá rolando.
            <br />
            Vai jogar <span className="text-apito">sem olhar o placar</span>?
          </h2>
          <p className="mt-5 max-w-xl text-lg text-linha/80">
            Crie sua conta grátis e veja, em poucos minutos, como tá o jogo do seu dinheiro.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="apito" size="xl" className="rounded-full">
              <a href="#cadastro">
                Criar minha conta grátis <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <p className="mt-4 text-xs text-linha/60">
            Sem cartão. Sem compromisso.
          </p>

          <div className="mt-10 max-w-md rounded-2xl rounded-bl-sm bg-campo-2 p-4 text-linha">
            <p className="text-base">
              <span className="text-apito">"</span>
              Bora arrumar esse meio-campo financeiro antes do apito final.
              <span className="text-apito">"</span>
            </p>
            <p className="mt-1 text-xs text-linha/60">— Professor Carlão</p>
          </div>
        </div>

        <div className="relative mx-auto mt-10 lg:mt-0">
          <div className="absolute inset-0 -z-10 h-full w-full rounded-full bg-apito/20 blur-3xl" />
          <img
            src={carlao}
            alt="Professor Carlão"
            className="w-full max-w-[240px] drop-shadow-2xl grayscale-[0.2]"
          />
        </div>
      </div>
    </section>
  );
};