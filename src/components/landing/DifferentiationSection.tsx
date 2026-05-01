import { Building2, Sheet, Trophy } from "lucide-react";

const cards = [
  {
    icon: Sheet,
    title: "Planilha tradicional",
    desc: "Muitas abas, fórmulas, manutenção manual. Cansa rápido.",
    tone: "muted",
  },
  {
    icon: Building2,
    title: "App do banco",
    desc: "Mostra movimentações, mas não explica o jogo do mês.",
    tone: "muted",
  },
  {
    icon: Trophy,
    title: "Finanças em Campo",
    desc: "Mostra o placar, organiza seus lances e ajuda você a entender o mês.",
    tone: "highlight",
  },
];

export const DifferentiationSection = () => {
  return (
    <section className="relative overflow-hidden bg-campo py-20 text-linha lg:py-28">
      <div className="absolute inset-0 opacity-[0.06] field-lines" />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-apito px-3 py-1 text-xs font-bold uppercase tracking-wider text-campo">
            Por que é diferente
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl">
            Você não precisa de mais <br />
            uma <span className="text-apito">tela cheia de número</span>.
          </h2>
          <p className="mt-4 text-lg text-linha/75">
            Precisa de um placar que faça sentido.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {cards.map((c, i) => {
            const Icon = c.icon;
            const isHL = c.tone === "highlight";
            return (
              <div
                key={i}
                className={`rounded-2xl p-7 transition-transform hover:-translate-y-1 ${
                  isHL
                    ? "border-2 border-apito bg-apito-gradient text-campo shadow-apito"
                    : "border border-linha/10 bg-campo-2"
                }`}
              >
                <Icon className={`mb-4 h-8 w-8 ${isHL ? "text-campo" : "text-apito"}`} strokeWidth={2} />
                <p className={`font-display text-2xl ${isHL ? "text-campo" : ""}`}>{c.title}</p>
                <p className={`mt-2 text-sm ${isHL ? "text-campo/80" : "text-linha/70"}`}>
                  {c.desc}
                </p>
                {isHL && (
                  <span className="mt-4 inline-block rounded-full bg-campo px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-apito">
                    O placar do seu dinheiro
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};