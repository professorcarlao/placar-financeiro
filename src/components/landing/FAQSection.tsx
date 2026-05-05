import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como organizar minhas finanças pessoais sem planilha?",
    a: "O Finanças em Campo ajuda você a organizar o mês de forma visual, sem fórmulas ou tabelas complicadas. Você registra seus principais lances e acompanha quanto entrou, quanto saiu, quanto foi para objetivos e quanto ainda pode gastar.",
  },
  {
    q: "O que é o Placar do Mês no Finanças em Campo?",
    a: "É a tela principal do app. Ela mostra com clareza quanto entrou, quanto saiu, quanto foi separado para objetivos e, principalmente, quanto você ainda pode gastar no mês — ou se precisa segurar o jogo.",
  },
  {
    q: "Preciso cadastrar todos os meus gastos no app?",
    a: "Não. Você pode começar pelos principais gastos e entradas do mês, como salário, mercado, contas, cartão, assinaturas, parcelas e objetivos. Quanto mais você registra, mais claro fica o seu placar financeiro.",
  },
  {
    q: "O Finanças em Campo conecta com minha conta bancária?",
    a: "Não. O app não acessa sua conta bancária e não é banco. Você registra as informações manualmente para ter mais clareza sobre o seu dinheiro, sem precisar conectar dados bancários.",
  },
  {
    q: "Qual é a diferença entre o Finanças em Campo e uma planilha financeira?",
    a: "Uma planilha financeira exige fórmulas, manutenção e disciplina constante. O Finanças em Campo organiza seu dinheiro em uma lógica visual e simples: entrou, saiu, objetivos e quanto ainda dá para usar no mês.",
  },
  {
    q: "O app ajuda a controlar gastos fixos, assinaturas e parcelamentos?",
    a: "Sim. Você pode acompanhar gastos fixos, assinaturas recorrentes e parcelamentos para entender o que já está comprometido no mês e evitar que cobranças passem despercebidas.",
  },
  {
    q: "Posso usar o app para acompanhar metas financeiras ou dívidas?",
    a: "Sim. Você pode acompanhar objetivos como reserva de emergência, viagem, quitar dívida ou qualquer meta importante, vendo o progresso de forma visual dentro do app.",
  },
  {
    q: "O Finanças em Campo dá dicas de investimento?",
    a: "Não. O foco do app é organização financeira pessoal, clareza do mês, controle de gastos, objetivos e planejamento do dinheiro. Ele não faz recomendação de investimentos.",
  },
  {
    q: "Preciso colocar cartão para começar?",
    a: "Não. Você pode criar sua conta grátis e começar a usar sem cartão.",
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