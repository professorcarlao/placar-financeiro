import { User, Calculator, Target, Bell, CreditCard } from "lucide-react";

const audiences = [
  {
    icon: User,
    title: "Para quem sente que o dinheiro some",
    subtitle: "Saldo evaporando?",
    desc: "Você recebe, paga algumas contas e de repente o mês já apertou.",
  },
  {
    icon: Calculator,
    title: "Para quem foge de planilha",
    subtitle: "Sem tabelas gigantes",
    desc: "Você quer organizar o dinheiro sem abrir uma tabela gigante e complexa.",
  },
  {
    icon: Target,
    title: "Para quem quer acompanhar metas",
    subtitle: "Ver o progresso",
    desc: "Ver o crescimento dos seus objetivos de forma visual e diária.",
  },
  {
    icon: Bell,
    title: "Para quem esquece assinaturas",
    subtitle: "Chega de surpresas",
    desc: "Serviços recorrentes vão se acumulando sem você perceber no dia a dia.",
  },
  {
    icon: CreditCard,
    title: "Para quem tem parcelamentos",
    subtitle: "Peso do futuro",
    desc: "Entenda exatamente quanto da sua renda futura já está comprometida.",
  },
];

export const AudienceSection = () => {
  return (
    <section id="para-quem" className="bg-linha py-16 sm:py-24 lg:py-32">
      <div className="container max-w-7xl">
        <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-16">
          <span className="inline-block rounded-full bg-campo/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-campo/40">
            Público
          </span>
          <h2 className="mt-6 font-display text-3xl text-campo sm:text-6xl lg:text-7xl leading-tight sm:mt-8">
            Para quem joga o <br />
            <span className="text-gramado">campeonato das finanças.</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {audiences.map((a, i) => {
            const Icon = a.icon;
            return (
              <div
                key={i}
                className="group relative flex flex-col rounded-[2rem] bg-white p-6 shadow-card-soft border border-border transition-all hover:shadow-xl hover:-translate-y-2 overflow-hidden sm:rounded-[2.5rem] sm:p-10"
              >
                <div className="absolute top-0 right-0 h-24 w-24 bg-campo/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-campo text-white shadow-lg group-hover:scale-110 transition-transform sm:mb-8 sm:h-16 sm:w-16">
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                
                <div className="flex flex-col gap-1 sm:gap-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gramado">
                    {a.subtitle}
                  </span>
                  <p className="font-display text-xl text-campo leading-tight sm:text-2xl lg:text-3xl">
                    {a.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground font-medium sm:mt-3 sm:text-base">
                    {a.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};