import { User, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Marina R.",
    text: "Consegui ver meu dinheiro sem me perder em planilha.",
    role: "Usuária",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Carlos M.",
    text: "O placar me ajudou a saber quanto ainda dava pra gastar.",
    role: "Usuário",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Ricardo S.",
    text: "Ficou mais fácil acompanhar metas e gastos fixos.",
    role: "Usuário",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="bg-background py-16 sm:py-24 lg:py-32">
      <div className="container max-w-7xl px-4">
        <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-20">
          <h2 className="font-display text-campo sm:text-6xl lg:text-7xl leading-tight text-4xl">
            Quem entra em campo <br />
            <span className="text-gramado">começa a ver o jogo.</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative flex flex-col rounded-[2rem] bg-white p-8 border border-gramado/35 transition-all hover:shadow-lg sm:rounded-[2.5rem] sm:p-10"
            >
              <Quote className="absolute top-6 right-6 h-6 w-6 text-campo/5 sm:top-8 sm:right-8 sm:h-8 sm:w-8" />
              <div className="flex-1 relative z-10">
                <p className="text-base leading-relaxed text-campo font-medium italic sm:text-lg lg:text-xl">"{t.text}"</p>
              </div>
              <div className="mt-8 flex items-center gap-4 relative z-10">
                <div className="h-12 w-12 rounded-full overflow-hidden border border-gramado/10 bg-campo/5 sm:h-14 sm:w-14">
                  <img 
                    src={t.avatar} 
                    alt={t.name}
                    className="h-full w-full object-cover"
                  />
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
