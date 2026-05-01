import {
  BarChart3,
  Bell,
  CalendarClock,
  ClipboardList,
  CreditCard,
  Repeat,
  Target,
  Trophy,
} from "lucide-react";

const recursos = [
  { icon: Trophy, title: "Placar do Mês", desc: "A visão central do mês: entrou, saiu, separado para objetivos e quanto ainda dá pra jogar." },
  { icon: ClipboardList, title: "Lances", desc: "Registre entradas e saídas de forma rápida, sem complicar a sua rotina." },
  { icon: BarChart3, title: "Estatísticas", desc: "Veja como seu jogo financeiro evolui ao longo dos meses, em gráficos simples." },
  { icon: Target, title: "Objetivos", desc: "Reserva, viagem, quitar dívida ou qualquer meta importante com progresso visível." },
  { icon: CalendarClock, title: "Gastos Fixos", desc: "Aluguel, luz, internet, condomínio e outras cobranças recorrentes ficam organizadas para você saber o que já entra no jogo todo mês." },
  { icon: Repeat, title: "Assinaturas", desc: "Netflix, aplicativos, serviços e cobranças mensais deixam de passar escondidos pelo campo." },
  { icon: CreditCard, title: "Parcelamentos", desc: "Compras parceladas aparecem com progresso, saldo restante e próxima cobrança, para você não esquecer o que ainda está no campeonato." },
  { icon: Bell, title: "Alertas do Carlão", desc: "Avisos diretos quando algum setor começa a pesar no seu mês." },
];

export const FeaturesGridSection = () => {
  return (
    <section id="recursos" className="bg-muted py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-campo px-3 py-1 text-xs font-bold uppercase tracking-wider text-apito">
            Recursos
          </span>
          <h2 className="mt-4 font-display text-4xl text-campo sm:text-5xl">
            O que rola dentro do app
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {recursos.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="group relative rounded-2xl border border-border bg-card p-5 shadow-card-soft transition-all hover:-translate-y-1"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-campo text-apito transition-colors group-hover:bg-apito group-hover:text-campo">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-display text-lg text-campo">{r.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};