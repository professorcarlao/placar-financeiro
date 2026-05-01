import { CreditCard, FileWarning, PieChart, Pizza, Receipt } from "lucide-react";

const dores = [
  { icon: PieChart, text: "Não sei pra onde meu dinheiro foi" },
  { icon: Pizza, text: "Delivery e comprinha entram na surdina" },
  { icon: CreditCard, text: "Tenho medo de abrir a fatura" },
  { icon: FileWarning, text: "Planilha me dá preguiça em 3 dias" },
  { icon: Receipt, text: "Só percebo o problema quando o mês acabou" },
];

export const ProblemSection = () => {
  return (
    <section className="relative bg-linha py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-cartao-vermelho/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cartao-vermelho">
            O problema
          </span>
          <h2 className="mt-4 font-display text-4xl text-campo sm:text-5xl lg:text-6xl">
            Começa <span className="text-apito-deep">1×0</span> pra você…
            <br />
            termina parecendo <span className="text-cartao-vermelho">goleada contra</span>.
          </h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            Salário cai, contas saem no automático, cartão passa quietinho, delivery entra no jogo. Quando você olha, o dinheiro saiu correndo pelo túnel do vestiário. <strong className="text-campo">O problema não é falta de inteligência. É falta de placar.</strong>
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {dores.map((d, i) => {
            const Icon = d.icon;
            return (
              <div
                key={i}
                className="group rounded-2xl border border-border bg-card p-5 shadow-card-soft"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cartao-vermelho/10 text-cartao-vermelho">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-display text-lg leading-tight text-campo">
                  {d.text}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center font-display text-2xl text-campo sm:text-3xl">
          O Carlão não veio complicar o jogo.
          <br />
          Veio <span className="bg-apito px-2">colocar o placar</span> na sua frente.
        </p>
      </div>
    </section>
  );
};