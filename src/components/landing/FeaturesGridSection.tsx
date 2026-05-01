import {
  MiniAlertaCarlaoCard,
  MiniAssinaturaCard,
  MiniEstatisticasCard,
  MiniGastoFixoCard,
  MiniLancesCard,
  MiniObjetivoCard,
  MiniParcelamentoCard,
  MiniPlacarCard,
} from "./mockups/MiniCardMockups";

const recursos = [
  { title: "Placar do Mês", desc: "Quanto entrou, saiu e ainda dá pra jogar.", mockup: <MiniPlacarCard /> },
  { title: "Lances", desc: "Registre entradas e saídas em segundos.", mockup: <MiniLancesCard /> },
  { title: "Estatísticas", desc: "Setores que pesam e evolução do período.", mockup: <MiniEstatisticasCard /> },
  { title: "Objetivos", desc: "Reserva, viagem, dívida — com progresso visível.", mockup: <MiniObjetivoCard /> },
  { title: "Gastos Fixos", desc: "Aluguel, luz, internet — tudo organizado.", mockup: <MiniGastoFixoCard /> },
  { title: "Assinaturas", desc: "Cobranças mensais deixam de passar escondidas.", mockup: <MiniAssinaturaCard /> },
  { title: "Parcelamentos", desc: "Saldo restante e próxima cobrança à vista.", mockup: <MiniParcelamentoCard /> },
  { title: "Alertas do Carlão", desc: "Avisos diretos quando algo começa a pesar.", mockup: <MiniAlertaCarlaoCard /> },
];

export const FeaturesGridSection = () => {
  return (
    <section id="recursos" className="bg-campo py-16 text-linha lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-apito px-3 py-1 text-xs font-bold uppercase tracking-wider text-campo">
            Recursos
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            O que rola dentro do app
          </h2>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {recursos.map((r, i) => (
            <div
              key={i}
              className="rounded-2xl border border-linha/10 bg-campo-2-flat p-4 transition-all hover:-translate-y-1"
            >
              <div className="mb-3">{r.mockup}</div>
              <p className="font-display text-base text-linha">{r.title}</p>
              <p className="mt-1 text-xs text-linha/65">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
