import { AlertCircle, TrendingDown, Clock, Ghost, ShieldAlert } from "lucide-react";

const pains = [
  {
    icon: Ghost,
    title: "Dinheiro sumindo",
    desc: "O saldo some da conta e você não faz ideia de qual foi o ralo da vez.",
  },
  {
    icon: ShieldAlert,
    title: "Medo da fatura",
    desc: "Aquele frio na barriga na hora de abrir o app do banco no fim do mês.",
  },
  {
    icon: Clock,
    title: "Gol contra esquecido",
    desc: "Aquelas assinaturas que você nem usa mais, mas continuam cobrando.",
  },
  {
    icon: TrendingDown,
    title: "Campeonato longo",
    desc: "As parcelas se acumulam e viram um peso cansativo no orçamento.",
  },
  {
    icon: AlertCircle,
    title: "Meta no banco",
    desc: "O objetivo era poupar, mas a falta de visão impediu o avanço.",
  },
];

export const ProblemSection = () => {
  return (
    <section className="bg-linha py-16 sm:py-24 lg:py-32">
      <div className="container max-w-6xl">
        <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-16">
          <span className="inline-block rounded-full bg-campo/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-campo/40">
            O Problema
          </span>
          <h2 className="mt-6 font-display text-3xl text-campo sm:text-6xl lg:text-7xl leading-tight sm:mt-8">
            Começa 1x0 pra você... <br />
            <span className="text-cartao-vermelho">termina em goleada contra.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground lg:text-xl font-medium sm:mt-6 sm:text-lg">
            O salário entra, os gastos saem e no fim ninguém sabe o placar real. O cartão passa, a assinatura fica e o mês vira contra você.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {pains.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="group rounded-[1.5rem] bg-white p-5 shadow-card-soft border border-border transition-all hover:shadow-xl hover:-translate-y-2 sm:rounded-[2.5rem] sm:p-10"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl bg-cartao-vermelho/5 text-cartao-vermelho group-hover:scale-110 transition-transform sm:mb-8 sm:h-14 sm:w-14">
                  <Icon className="h-5 w-5 sm:h-7 sm:w-7" />
                </div>
                <p className="font-display text-xl text-campo leading-tight sm:text-2xl lg:text-3xl">{p.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground font-medium sm:mt-4 sm:text-base">{p.desc}</p>
              </div>
            );
          })}
          
          {/* Final "Support" Element */}
          <div className="flex items-center justify-center sm:col-span-2 lg:col-span-1">
            <div className="w-full h-full rounded-[1.5rem] bg-apito/10 p-6 border-2 border-apito/20 flex flex-col justify-center items-center text-center sm:rounded-[2.5rem] sm:p-10">
              <p className="font-display text-lg text-campo leading-tight sm:text-2xl">
                O Carlão veio colocar o <br />
                <span className="underline decoration-campo/20 underline-offset-4">placar</span> na sua frente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};