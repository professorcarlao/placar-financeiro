const resources = [
  { title: "Placar do Mês", img: "/assets/app-screenshots/placar-do-mes.png" },
  { title: "Lances", img: "/assets/app-screenshots/lances-e-filtros.png" },
  { title: "Estatísticas", img: "/assets/app-screenshots/estatisticas.png" },
  { title: "Objetivos", img: "/assets/app-screenshots/Objetivos.png" },
  { title: "Gastos Fixos", img: "/assets/app-screenshots/gastos-fixos.png" },
  { title: "Assinaturas", img: "/assets/app-screenshots/assinatura.png" },
  { title: "Parcelamentos", img: "/assets/app-screenshots/parcelas.png" },
  { title: "Vestiário", img: "/assets/app-screenshots/vestiario.png" },
];

export const FeaturesGridSection = () => {
  return (
    <section id="recursos" className="relative overflow-hidden bg-campo py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 field-lines opacity-[0.03]" />
      <div className="container relative z-10 max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full bg-apito/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-apito">
            Recursos
          </span>
          <h2 className="mt-6 font-display text-3xl text-white sm:text-6xl lg:text-7xl leading-tight sm:mt-8">
            Tudo o que você precisa <br />
            <span className="text-apito">para vencer o mês.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:mt-20 sm:gap-10 lg:grid-cols-4">
          {resources.map((r, i) => (
            <div
              key={i}
              className="group flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10 hover:-translate-y-2 sm:rounded-[2.5rem] sm:p-8"
            >
              <div className="aspect-[4/3] overflow-hidden mb-6 sm:mb-8">
                <div className="h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-campo shadow-2xl sm:rounded-3xl">
                  <img
                    src={r.img}
                    alt={r.title}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="text-center">
                <p className="font-display text-xl text-white sm:text-2xl lg:text-3xl">{r.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
