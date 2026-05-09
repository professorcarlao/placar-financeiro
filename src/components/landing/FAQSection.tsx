import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O que é o Finanças em Campo?",
    a: "O Finanças em Campo é um app de controle financeiro pessoal simples e visual. Ele organiza o mês em linguagem de jogo, para você entender seus lances, ver para onde o dinheiro foi e parar de depender de planilha complicada.",
  },
  {
    q: "O que é o Placar do Mês?",
    a: "É a tela principal do app, craque. Ali você vê quanto entrou, quanto saiu, quanto foi separado para objetivos e quanto ainda pode gastar no mês — ou se já está na hora de segurar a bola.",
  },
  {
    q: "O que são lances e preciso cadastrar tudo?",
    a: "Lances são os movimentos do seu dinheiro: salário, contas, mercado, cartão, compras, assinaturas, parcelas e outras entradas ou saídas. Não precisa cadastrar tudo de uma vez; comece pelos principais lances do mês e vá ajustando o jogo.",
  },
  {
    q: "O app conecta com minha conta bancária?",
    a: "Não. O Finanças em Campo não é banco e não acessa sua conta bancária. Você registra as informações manualmente para ter clareza do mês sem conectar seus dados. Aqui o controle fica no seu campo.",
  },
  {
    q: "O que consigo acompanhar no app e preciso colocar cartão?",
    a: "Você pode acompanhar metas, gastos fixos, assinaturas, parcelamentos e estatísticas do mês. Para começar, não precisa colocar cartão: é só criar sua conta grátis e entrar em campo para ver seu placar por dentro.",
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