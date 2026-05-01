import { User } from "lucide-react";

const testimonials = [
  {
    name: "Marina R.",
    context: "Sempre se perdia em planilhas",
    quote: "Finalmente consegui ver para onde meu dinheiro estava indo sem me perder em planilha. O visual de placar mudou tudo.",
  },
  {
    name: "Carlos M.",
    context: "Precisava de rapidez no dia a dia",
    quote: "O placar do mês me ajudou a entender rápido quanto ainda dava pra gastar sem susto. É muito direto ao ponto.",
  },
  {
    name: "Juliana S.",
    context: "Gastos que passavam batidos",
    quote: "Gostei porque ficou muito mais fácil acompanhar meus objetivos e os gastos que sempre passavam batidos no fim do mês.",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="bg-linha py-16 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-apito/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-apito-deep">
            Prova Social
          </span>
          <h2 className="mt-4 font-display text-4xl text-campo sm:text-5xl">
            Quem entra em campo começa a ver o <span className="text-apito-deep">jogo com mais clareza.</span>
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Algumas percepções de quem começou a organizar o mês com o Carlão.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-card-soft"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-campo/5 text-campo/40">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display text-base text-campo">{t.name}</p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{t.context}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground italic">
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
