import { Landmark, FileText, Trophy } from "lucide-react";

const options = [
  {
    icon: Landmark,
    title: "Banco",
    desc: "Mostra movimentações e faturas, mas nem sempre mostra o jogo do mês de forma clara.",
  },
  {
    icon: FileText,
    title: "Planilha",
    desc: "Pode funcionar para alguns, mas exige muita disciplina e manutenção manual constante.",
  },
  {
    icon: Trophy,
    title: "Finanças em Campo",
    desc: "Mostra entradas, saídas, objetivos e exatamente quanto ainda dá pra jogar no mês.",
    highlight: true,
  },
];

export const DifferentiationSection = () => {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-campo/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-campo/40">
            Diferenciais
          </span>
          <h2 className="mt-6 font-display text-2xl text-campo sm:text-5xl lg:text-6xl sm:mt-8">
            Não é banco. Não é planilha. <br />
            <span className="text-gramado">É o placar do seu dinheiro.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 sm:mt-16 sm:gap-8">
          {options.map((o, i) => {
            const Icon = o.icon;
            return (
              <div
                key={i}
                className={`relative flex flex-col rounded-[2rem] p-6 transition-all sm:rounded-[2.5rem] sm:p-10 ${
                  o.highlight 
                    ? "bg-campo text-white shadow-2xl shadow-campo/20 lg:scale-105 lg:z-10" 
                    : "bg-linha text-campo border border-border"
                }`}
              >
                <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl sm:mb-8 sm:h-14 sm:w-14 ${
                  o.highlight ? "bg-apito text-campo" : "bg-campo/5 text-campo"
                }`}>
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <p className="font-display text-2xl leading-tight sm:text-3xl">{o.title}</p>
                <p className={`mt-3 text-sm leading-relaxed font-medium sm:mt-4 sm:text-base ${
                  o.highlight ? "text-white/60" : "text-muted-foreground"
                }`}>
                  {o.desc}
                </p>
                {o.highlight && (
                  <div className="mt-6 h-px w-full bg-white/10 sm:mt-8" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};