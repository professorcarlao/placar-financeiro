import { User, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Marina R.",
    text: "Finalmente consegui ver para onde meu dinheiro estava indo sem me perder em planilha.",
    role: "Usuária do App",
  },
  {
    name: "Carlos M.",
    text: "O placar do mês me ajudou a entender rápido quanto ainda dava pra gastar sem susto.",
    role: "Usuário do App",
  },
  {
    name: "Juliana S.",
    text: "Gostei porque ficou mais fácil acompanhar meus objetivos e gastos recorrentes.",
    role: "Usuária do App",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-campo/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-campo/40">
            Depoimentos
          </span>
          <h2 className="mt-8 font-display text-4xl text-campo sm:text-5xl lg:text-6xl">
            Quem entra em campo <br />
            <span className="text-gramado">começa a ver o jogo.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col rounded-[2.5rem] bg-white p-10 border border-border shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex-1">
                <p className="text-lg leading-relaxed text-campo font-medium italic">"{t.text}"</p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-campo/10 flex items-center justify-center text-campo">
                    <User className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display text-xl text-campo">{t.name}</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
