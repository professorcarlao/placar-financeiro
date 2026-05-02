import carlao from "@/assets/professor-carlao.png";

const quotes = [
  "Craque, primeiro olha quanto dá pra jogar no mês.",
  "Assinatura esquecida também faz gol contra.",
  "Parcelamento sem controle vira campeonato longo.",
  "Meta boa é meta que aparece no placar.",
];

export const CarlaoSection = () => {
  return (
    <section className="relative overflow-hidden bg-campo py-24 lg:py-40">
      <div className="absolute inset-0 field-lines opacity-[0.03]" />
      <div className="container relative z-10 max-w-7xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-32">
          <div className="w-full max-w-[200px] sm:max-w-[280px] lg:max-w-[500px]">
            <div className="relative">
              <div className="absolute -inset-10 -z-10 bg-apito/20 blur-[60px] rounded-full animate-pulse sm:blur-[100px]" />
              <img src={carlao} alt="Professor Carlão" className="w-full drop-shadow-[0_20px_60px_rgba(247,225,53,0.3)] transition-transform hover:scale-105 duration-700" />
            </div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block rounded-full bg-apito/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-apito">
              O Professor
            </span>
            <h2 className="mt-6 font-display text-3xl text-white sm:text-7xl lg:text-8xl leading-tight sm:mt-8">
              O técnico que faltava <br />
              <span className="text-apito">no seu dinheiro.</span>
            </h2>
            
            <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6">
              {quotes.map((q, i) => (
                <div key={i} className="rounded-[1.5rem] bg-white/5 p-4 border border-white/10 transition-all hover:bg-white/10 hover:translate-x-2 sm:rounded-[2rem] sm:p-8">
                  <p className="text-lg font-medium text-white italic sm:text-xl lg:text-2xl">"{q}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};