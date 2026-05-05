import { User, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Marina R.",
    text: "Consegui ver meu dinheiro sem me perder em planilha.",
    role: "Usuária",
  },
  {
    name: "Carlos M.",
    text: "O placar me ajudou a saber quanto ainda dava pra gastar.",
    role: "Usuário",
  },
  {
    name: "Juliana S.",
    text: "Ficou mais fácil acompanhar metas e gastos fixos.",
    role: "Usuária",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="bg-background py-16 sm:py-24 lg:py-32">
      <div className="container max-w-7xl px-4">
        <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-20">
          <h2 className="font-display text-[28px] text-campo sm:text-6xl lg:text-7xl leading-tight">
            Quem entra em campo <br />
            <span className="text-gramado">começa a ver o jogo.</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative flex flex-col rounded-[2rem] bg-white p-8 border border-border transition-all hover:shadow-lg sm:rounded-[2.5rem] sm:p-10"
            >
              <Quote className="absolute top-6 right-6 h-6 w-6 text-campo/5 sm:top-8 sm:right-8 sm:h-8 sm:w-8" />
              <div className="flex-1 relative z-10">
                <p className="text-base leading-relaxed text-campo font-medium italic sm:text-lg lg:text-xl">"{t.text}"</p>
              </div>
              <div className="mt-8 flex items-center gap-4 relative z-10">
                <div className="h-10 w-10 rounded-xl bg-campo/10 flex items-center justify-center text-campo sm:h-12 sm:w-12">
                    <User className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <p className="font-display text-lg text-campo sm:text-xl">{t.name}</p>
                  <p className="text-[9px] font-black uppercase tracking-widest text-gramado/60 sm:text-[10px]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
