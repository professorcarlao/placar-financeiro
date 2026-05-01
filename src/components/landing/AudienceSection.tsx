import { Coins, Eye, Goal, NotebookPen, UserCheck } from "lucide-react";

const perfis = [
  { icon: Coins, title: "Pra quem sente que o dinheiro some", desc: "Recebe, paga umas contas e logo já não entende o que aconteceu." },
  { icon: NotebookPen, title: "Pra quem foge de planilha", desc: "Já baixou modelo pronto, abriu duas vezes e abandonou." },
  { icon: Goal, title: "Pra quem quer criar metas", desc: "Quer guardar dinheiro ou pagar dívidas, mas perde força no caminho." },
  { icon: Eye, title: "Pra quem quer visão simples do mês", desc: "Saber se pode gastar, se precisa segurar ou se está tudo bem." },
  { icon: UserCheck, title: "Pra quem precisa de um técnico no banco", desc: "Falta um jeito simples de enxergar o jogo e tomar boas decisões." },
];

export const AudienceSection = () => {
  return (
    <section id="para-quem" className="bg-linha py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-apito/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-apito-deep">
            Pra quem é
          </span>
          <h2 className="mt-4 font-display text-4xl text-campo sm:text-5xl lg:text-6xl">
            Organizar o dinheiro <br />
            sem virar <span className="text-apito-deep">contador de si mesmo</span>.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {perfis.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="rounded-2xl border-l-4 border-apito bg-card p-6 shadow-card-soft transition-transform hover:-translate-y-1"
              >
                <Icon className="mb-3 h-7 w-7 text-campo" strokeWidth={2} />
                <p className="font-display text-xl text-campo">{p.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center font-display text-2xl text-campo">
          Se você já terminou o mês pensando <em className="not-italic text-apito-deep">"onde foi parar meu dinheiro?"</em>, o Carlão entrou nesse jogo por você.
        </p>
      </div>
    </section>
  );
};