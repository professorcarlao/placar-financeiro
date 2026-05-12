import { Button } from "@/components/ui/button";
import { Wallet, CreditCard, RefreshCcw, Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProblemIllustration } from "./ProblemIllustration";

const pains = [
  {
    title: "Dinheiro sumindo",
    text: "Você recebe e logo perde o rastro.",
    icon: Wallet,
    iconColor: "text-green-500",
    iconBg: "bg-green-500/10",
  },
  {
    title: "Medo da fatura",
    text: "O susto aparece só no fim do mês.",
    icon: CreditCard,
    iconColor: "text-green-500",
    iconBg: "bg-green-500/10",
  },
  {
    title: "Assinatura esquecida",
    text: "Cobranças pequenas passam batido.",
    icon: RefreshCcw,
    iconColor: "text-green-500",
    iconBg: "bg-green-500/10",
  },
  {
    title: "Parcelas acumulando",
    text: "Compras antigas seguem pesando.",
    icon: Calendar,
    iconColor: "text-green-500",
    iconBg: "bg-green-500/10",
  },
];

export const ProblemSection = () => {
  return (
    <section className="bg-linha py-14 sm:py-24 lg:py-32 overflow-hidden px-4">
      <div className="container max-w-6xl px-0">
        {/* Header */}
        <div className="mx-auto max-w-[320px] text-center mb-10 sm:mb-20 sm:max-w-4xl">
          <h2 className="font-display text-4xl leading-none sm:text-5xl lg:text-6xl text-center sm:leading-tight">
            <span className="block text-campo uppercase">O dinheiro entra.</span>
            <span className="block text-cartao-vermelho uppercase">O mês escapa sem você perceber.</span>
          </h2>
          <p className="mt-5 text-base leading-7 font-semibold text-campo/60 sm:mt-8 sm:text-base lg:text-xl">
            Gastos pequenos, fatura, assinaturas e parcelas vão se acumulando. Quando você percebe, já não sabe para onde foi o dinheiro nem quanto ainda pode gastar no mês.
          </p>
        </div>

        {/* Desktop: 2 Columns / Mobile: Stacked */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Column Left: Main Illustration Visual */}
          <div className="w-full mx-auto lg:mx-0">
            <ProblemIllustration />
          </div>

          {/* Column Right: Compact Pain Cards */}
          <div className="grid grid-cols-1 gap-5">
            {pains.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="group flex items-center gap-5 rounded-[24px] bg-white p-6 border border-gramado/10 shadow-sm transition-all hover:shadow-md sm:rounded-[32px] sm:p-7"
                >
                  <div className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gramado/10 shadow-sm sm:h-14 sm:w-14 sm:rounded-2xl", p.iconBg, "text-green-600")}>
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg leading-tight tracking-tight text-campo uppercase sm:text-xl lg:text-[24px]">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-campo/60 font-medium lg:leading-7">
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
            className="h-12 w-full max-w-[320px] mx-auto rounded-full px-5 text-base font-black shadow-apito transition-all hover:scale-105 active:scale-95 sm:h-16 sm:w-auto sm:px-12"
          >
            <a href="https://app.financasemcampo.com.br/signup?utm_source=lp&utm_medium=cta&utm_campaign=landing_page&utm_content=section_criar_conta">
              Quero ver meu placar
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};