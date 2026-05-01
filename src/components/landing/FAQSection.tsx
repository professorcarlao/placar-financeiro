import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Preciso pagar para começar?",
    a: "Você pode começar criando uma conta grátis. Recursos extras podem aparecer dentro do app, depois que você conhecer a ferramenta.",
  },
  {
    q: "Preciso colocar cartão?",
    a: "Não. O cadastro grátis é sem cartão e sem compromisso.",
  },
  {
    q: "O que é o Placar do Mês?",
    a: "É a tela principal do app: mostra quanto entrou, quanto saiu, quanto foi para objetivos e quanto ainda dá pra jogar no mês.",
  },
  {
    q: "Preciso cadastrar todos os gastos?",
    a: "Não. Você registra os principais lances. Quanto mais informação, melhor o placar — mas o app foi feito pra ser simples.",
  },
  {
    q: "O app recomenda investimentos?",
    a: "Não. O foco é organização financeira, clareza do mês, objetivos e controle de gastos.",
  },
  {
    q: "Isso substitui meu banco?",
    a: "Não. O app não é banco. É uma ferramenta para organizar e visualizar melhor o seu mês.",
  },
  {
    q: "Funciona para quem odeia planilha?",
    a: "Sim. Foi pensado justamente pra quem quer uma visão visual, simples e direta.",
  },
  {
    q: "O que consigo organizar dentro do app?",
    a: "Lances do mês, objetivos, gastos fixos, assinaturas e parcelamentos, tudo no mesmo lugar.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="bg-linha py-20 lg:py-28">
      <div className="container max-w-3xl">
        <div className="text-center">
          <span className="inline-block rounded-full bg-campo px-3 py-1 text-xs font-bold uppercase tracking-wider text-apito">
            FAQ
          </span>
          <h2 className="mt-4 font-display text-4xl text-campo sm:text-5xl">
            Tirando dúvidas no vestiário
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-card-soft"
            >
              <AccordionTrigger className="text-left font-display text-lg text-campo hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};