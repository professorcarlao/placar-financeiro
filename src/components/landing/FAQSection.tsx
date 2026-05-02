import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Preciso pagar para começar?",
    a: "Não. Você pode criar sua conta gratuitamente para conhecer o Placar do Mês e as funcionalidades do app.",
  },
  {
    q: "Preciso colocar cartão?",
    a: "Não pedimos cartão de crédito para o cadastro inicial. O foco é que você conheça o app sem compromisso.",
  },
  {
    q: "O que é o Placar do Mês?",
    a: "É a visão principal do app que mostra o saldo que ainda dá pra jogar, baseado nas suas entradas e saídas registradas.",
  },
  {
    q: "Preciso cadastrar todos os gastos?",
    a: "O ideal é registrar o que impacta seu orçamento para que o placar seja o mais fiel possível à sua realidade.",
  },
  {
    q: "O app recomenda investimentos?",
    a: "Não. O Finanças em Campo é focado em organização, controle de gastos e visibilidade do seu jogo financeiro mensal.",
  },
  {
    q: "Isso substitui meu banco?",
    a: "Não. O app é um apoio para você enxergar o que o banco às vezes esconde em faturas e extratos complexos.",
  },
  {
    q: "Funciona para quem odeia planilha?",
    a: "Com certeza. O app foi feito justamente para quem quer fugir das células e fórmulas do Excel.",
  },
  {
    q: "O que consigo organizar dentro do app?",
    a: "Lances (entradas/saídas), Gastos Fixos, Assinaturas, Parcelamentos e Objetivos Financeiros.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="bg-linha py-16 sm:py-24 lg:py-40">
      <div className="container max-w-5xl">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full bg-campo/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-campo/40">
            Dúvidas
          </span>
          <h2 className="mt-6 font-display text-3xl text-campo sm:text-6xl lg:text-7xl leading-tight sm:mt-8">
            Perguntas <span className="text-gramado">frequentes.</span>
          </h2>
        </div>

        <div className="mt-12 rounded-[2rem] bg-white p-4 shadow-card-soft border border-border sm:mt-16 sm:p-10 lg:p-16">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border py-2 last:border-0 sm:py-4 lg:py-6">
                <AccordionTrigger className="text-left font-display text-base text-campo hover:no-underline sm:text-2xl lg:text-3xl">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground font-medium pt-3 sm:text-lg sm:pt-4 lg:text-xl lg:pt-6">
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