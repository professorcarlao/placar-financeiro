import {
  BarChart3,
  Bell,
  Boxes,
  Clipboard,
  History,
  Moon,
  Target,
  Trophy,
} from "lucide-react";

type Status = "free" | "premium" | "soon";

const recursos: { icon: any; title: string; desc: string; status: Status }[] = [
  { icon: Trophy, title: "Placar do Mês", desc: "Entradas, saídas, metas e quanto ainda pode gastar.", status: "free" },
  { icon: Clipboard, title: "Registro simples", desc: "Cadastre os lances importantes sem burocracia.", status: "free" },
  { icon: Target, title: "Metas financeiras", desc: "Reserva, dívidas, viagem ou compras importantes.", status: "free" },
  { icon: History, title: "Histórico completo", desc: "Veja como seu jogo financeiro evolui mês a mês.", status: "premium" },
  { icon: BarChart3, title: "Relatórios visuais", desc: "Padrões de gasto sem montar gráfico manualmente.", status: "premium" },
  { icon: Bell, title: "Alertas do Carlão", desc: "Avisos simples quando algum setor começa a pesar.", status: "premium" },
  { icon: Boxes, title: "Categorias inteligentes", desc: "Organize gastos por áreas da vida, sem complicação.", status: "free" },
  { icon: Moon, title: "Modo claro e escuro", desc: "Use do jeito que combina melhor com sua rotina.", status: "soon" },
];

const labels: Record<Status, { text: string; cls: string }> = {
  free: { text: "Grátis", cls: "bg-gramado/15 text-gramado" },
  premium: { text: "Premium", cls: "bg-apito/20 text-apito-deep" },
  soon: { text: "Em breve", cls: "bg-muted text-muted-foreground" },
};

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
            const lbl = labels[r.status];
            return (
              <div
                key={i}
                className="group relative rounded-2xl border border-border bg-card p-5 shadow-card-soft transition-all hover:-translate-y-1"
              >
                <span className={`absolute right-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${lbl.cls}`}>
                  {lbl.text}
                </span>
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