import { cn } from "@/lib/utils";

const features = [
  { title: "Placar do Mês", desc: "Veja quanto entrou, saiu e ainda pode gastar.", img: "/assets/app-screenshots/placar-do-mes.png" },
  { title: "Lances", desc: "Registre entradas e gastos de forma simples.", img: "/assets/app-screenshots/lances-e-filtros.png" },
  { title: "Estatísticas", desc: "Entenda padrões do seu mês financeiro.", img: "/assets/app-screenshots/estatisticas.png" },
  { title: "Objetivos", desc: "Acompanhe metas financeiras com progresso visível.", img: "/assets/app-screenshots/Objetivos.png" },
  { title: "Gastos Fixos", desc: "Organize contas recorrentes como aluguel, luz e internet.", img: "/assets/app-screenshots/gastos-fixos.png" },
  { title: "Assinaturas", desc: "Controle cobranças mensais que podem passar despercebidas.", img: "/assets/app-screenshots/assinatura.png" },
  { title: "Parcelamentos", desc: "Veja compras parceladas e o que ainda está comprometido.", img: "/assets/app-screenshots/parcelas.png" },
  { title: "Vestiário", desc: "Ajuste perfil, preferências e configurações do app.", img: "/assets/app-screenshots/vestiario.png" },
];

export const FeaturesGridSection = () => {
  return (
    <section id="recursos" className="relative overflow-hidden bg-campo py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 field-lines opacity-[0.03]" />
      <div className="container relative z-10 max-w-7xl px-4">
        <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-20">
          <h2 className="font-display text-[28px] text-white sm:text-6xl leading-tight">
            O que você acompanha <br />
            <span className="text-apito">dentro do app</span>
          </h2>
          <p className="mt-4 text-sm text-white/40 font-medium sm:mt-6 sm:text-xl sm:text-white/60">
            Controle gastos, objetivos, assinaturas, parcelamentos e estatísticas em uma visão simples do mês.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group flex flex-col rounded-[22px] bg-white/[0.03] p-3 border border-white/10 transition-all hover:bg-white/[0.08] sm:rounded-[28px] sm:p-4 lg:p-5"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px] bg-black/20 sm:rounded-[18px]">
                <img
                  src={f.img}
                  alt={f.title}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 text-center sm:mt-6">
                <h3 className="font-display text-lg leading-none tracking-tight text-white uppercase sm:text-[22px] lg:text-[28px]">
                  {f.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/40 font-medium sm:text-sm">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
