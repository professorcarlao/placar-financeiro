import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Preciso pagar pra usar?",
    a: "Não. Você cria uma conta gratuita e começa pelo básico. A assinatura serve pra liberar recursos mais completos como histórico, relatórios e alertas avançados.",
  },
  {
    q: "Preciso colocar cartão pra começar?",
    a: "Não. O cadastro grátis é sem cartão e sem compromisso.",
  },
  {
    q: "O app recomenda investimentos?",
    a: "Não. O foco é organização financeira, clareza do mês, metas e controle de gastos. Não oferecemos recomendação de investimento.",
  },
  {
    q: "Preciso cadastrar todos os meus gastos?",
    a: "Não. A ideia é registrar os principais lances. Quanto mais você registra, melhor o placar fica — mas o app foi feito pra ser simples.",
  },
  {
    q: "Isso substitui meu banco?",
    a: "Não. O app não é banco. É uma ferramenta pra organizar e visualizar melhor sua vida financeira.",
  },
  {
    q: "Funciona pra quem odeia planilha?",
    a: "Sim. Foi pensado justamente pra quem quer uma visão mais visual, simples e direta.",
  },
  {
    q: "Posso usar pra metas financeiras?",
    a: "Sim. Você acompanha metas como reserva, pagamento de dívidas, compras planejadas ou outros objetivos pessoais.",
  },
  {
    q: "O que é o Placar do Mês?",
    a: "É a tela principal do app. Ela mostra quanto entrou, quanto saiu, quanto foi pras metas e quanto ainda dá pra gastar no mês.",
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