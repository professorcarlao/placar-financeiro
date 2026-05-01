import { Button } from "@/components/ui/button";
import { ClipboardList, LineChart, UserPlus, Whistle } from "lucide-react";

const passos = [
  {
    n: "01",
    icon: UserPlus,
    title: "Crie sua conta grátis",
    desc: "Você entra em campo sem pagar nada. Sem cartão, sem cadastro infinito.",
  },
  {
    n: "02",
    icon: ClipboardList,
    title: "Registre seus lances",
    desc: "Adicione entradas, saídas, contas e valores das suas metas. Simples assim.",
  },
  {
    n: "03",
    icon: LineChart,
    title: "Veja o placar atualizar",
    desc: "O app mostra o que entrou, o que saiu e quanto ainda dá pra usar no mês.",
  },
  {
    n: "04",
    icon: Whistle,
    title: "Ajuste o jogo no tempo",
    desc: "Com o placar na frente, você corrige a rota antes do apito final.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="relative bg-campo py-20 text-linha lg:py-28">
      <div className="absolute inset-0 opacity-[0.07] field-lines" />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-apito px-3 py-1 text-xs font-bold uppercase tracking-wider text-campo">
            Como o jogo começa
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl">
            4 lances e o placar <span className="text-apito">tá rolando</span>.
          </h2>
          <p className="mt-4 text-lg text-linha/75">
            Não é sobre controlar cada moeda com sofrimento. É sobre parar de jogar sem saber o placar.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {passos.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="relative rounded-2xl border border-linha/10 bg-campo-2 p-6 transition-transform hover:-translate-y-1"
              >
                <span className="absolute right-4 top-4 font-display text-4xl text-apito/30">
                  {p.n}
                </span>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-apito text-campo">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="font-display text-2xl">{p.title}</p>
                <p className="mt-2 text-sm text-linha/70">{p.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="apito" size="xl" className="rounded-full">
            <a href="#cadastro">Começar grátis agora</a>
          </Button>
        </div>
      </div>
    </section>
  );
};