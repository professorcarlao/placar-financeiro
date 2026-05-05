import { Button } from "@/components/ui/button";
import { Wallet, CreditCard, RefreshCcw, Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProblemIllustration } from "./ProblemIllustration";

const pains = [
  {
    title: "DINHEIRO SUMINDO",
    text: "Você recebe e logo perde o rastro.",
    icon: Wallet,
    iconColor: "text-green-500",
    iconBg: "bg-green-500/10",
  },
  {
    title: "MEDO DA FATURA",
    text: "O susto aparece só no fim do mês.",
    icon: CreditCard,
    iconColor: "text-apito",
    iconBg: "bg-apito/12",
  },
  {
    title: "ASSINATURA ESQUECIDA",
    text: "Cobranças pequenas passam batido.",
    icon: RefreshCcw,
    iconColor: "text-apito",
    iconBg: "bg-apito/12",
  },
  {
    title: "PARCELAS ACUMULANDO",
    text: "Compras antigas seguem pesando.",
    icon: Calendar,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-600/10",
  },
];

export const ProblemSection = () => {
  return (
    <section className="bg-linha py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="container max-w-6xl px-4">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-20">
          <h2 className="font-display text-[28px] leading-tight sm:text-5xl lg:text-6xl text-center">
            <span className="block text-campo uppercase text-4xl">Começa 1x0 pra você...</span>
            <span className="block text-cartao-vermelho uppercase text-3xl">Termina em goleada contra.</span>
          </h2>
          <p className="mt-5 text-sm font-semibold text-campo/60 sm:mt-8 sm:text-base lg:text-xl">
            O salário entra, os gastos saem e o mês escapa sem você perceber.
          </p>
        </div>

        {/* Desktop: 2 Columns / Mobile: Stacked */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Column Left: Main Illustration Card */}
          <div className="lg:pr-4">
            <div className="overflow-hidden rounded-[2rem] bg-white p-2 shadow-2xl shadow-campo/5 border border-white sm:rounded-[2.5rem] sm:p-4">
              <ProblemIllustration />
            </div>
          </div>

          {/* Column Right: Compact Pain Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
            {pains.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="group flex flex-col rounded-[22px] bg-white p-5 border border-black/5 shadow-sm transition-all hover:shadow-md sm:rounded-[28px] sm:p-8"
                >
                  <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl border border-black/5 shadow-sm sm:h-16 sm:w-16 sm:rounded-2xl", p.iconBg === "bg-apito/12" ? "bg-green-100" : p.iconBg, p.iconColor)}>
                    <Icon className={cn("h-6 w-6 sm:h-8 sm:w-8", p.iconBg === "bg-apito/12" && "text-gramado")} />
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <h3 className="font-display leading-none tracking-tight uppercase sm:text-2xl lg:text-[30px] text-gramado text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-relaxed text-campo/60 font-medium sm:mt-4 sm:text-[15px] lg:text-[17px] lg:leading-7">
                      {p.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final CTA Button */}
        <div className="mt-12 flex justify-center sm:mt-20">
          <Button 
            asChild 
            variant="apito" 
            size="xl" 
            className="h-14 w-full max-w-[320px] rounded-full px-8 text-base font-black shadow-apito transition-all hover:scale-105 active:scale-95 sm:h-16 sm:w-auto sm:px-12"
          >
            <a href="#cadastro">
              Quero ver meu placar
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};