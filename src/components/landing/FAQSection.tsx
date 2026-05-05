import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Preciso pagar para começar?",
    a: "Não. Você pode criar sua conta gratuitamente para conhecer as funcionalidades do app.",
  },
  {
    q: "Preciso colocar cartão?",
    a: "Não pedimos cartão para o cadastro inicial. O foco é conhecer o app sem compromisso.",
  },
  {
    q: "O que é o Placar do Mês?",
    a: "É a visão que mostra o saldo que ainda dá pra jogar, baseado nas suas entradas e saídas.",
  },
  {
    q: "Preciso cadastrar tudo?",
    a: "O ideal é registrar o que impacta seu orçamento para que o placar seja fiel à sua realidade.",
  },
  {
    q: "O app indica investimentos?",
    a: "Não. O foco é organização, controle de gastos e visibilidade do seu jogo financeiro mensal.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="bg-linha py-14 sm:py-24">
      <div className="container max-w-5xl px-4">
        <div className="mx-auto max-w-4xl text-center mb-10 sm:mb-20">
          <h2 className="font-display text-4xl leading-none text-campo sm:text-6xl lg:text-7xl sm:leading-tight max-w-[320px] mx-auto sm:max-w-none">
            Perguntas <span className="text-gramado">frequentes.</span>
          </h2>
        </div>

        <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-6 shadow-card-soft border border-border sm:rounded-[2.5rem] sm:p-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border py-1.5 last:border-0 sm:py-4">
                <AccordionTrigger className="text-left font-display text-base text-campo hover:no-underline sm:text-2xl lg:text-3xl">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground font-medium pt-2.5 sm:text-lg sm:pt-4">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};