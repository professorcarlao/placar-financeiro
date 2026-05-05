import carlao from "@/assets/professor-carlao.png";

const quotes = [
  "Primeiro olha o placar.",
  "Assinatura esquecida também faz gol contra.",
  "Meta boa aparece no jogo.",
];

export const CarlaoSection = () => {
  return (
    <section className="relative overflow-hidden bg-campo py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 field-lines opacity-[0.03]" />
      <div className="container relative z-10 max-w-6xl px-4">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-24">
          <div className="w-full max-w-[160px] sm:max-w-[240px] lg:max-w-[420px] order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-6 -z-10 bg-apito/20 blur-[40px] rounded-full sm:blur-[80px]" />
              <img 
                src={carlao} 
                alt="Professor Carlão" 
                className="w-full drop-shadow-[0_10px_30px_rgba(247,225,53,0.15)] transition-transform hover:scale-105 duration-700 sm:drop-shadow-[0_15px_40px_rgba(247,225,53,0.2)]" 
              />
            </div>
          </div>
          
          <div className="flex-1 text-center lg:text-left order-1 lg:order-2">
            <h2 className="font-display text-[28px] text-white sm:text-6xl leading-tight">
              Quem é o <br />
              <span className="text-apito">Professor Carlão?</span>
            </h2>
            
            <p className="mt-5 text-sm leading-relaxed text-white/70 font-medium sm:mt-6 sm:text-lg">
              O técnico que traduz seu dinheiro em linguagem de jogo. Sem economês, sem palestra chata: só o placar do mês, os lances e o que precisa de atenção.
            </p>
            
            <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              {quotes.map((q, i) => (
                <div key={i} className="w-full rounded-xl bg-white/5 px-5 py-3 border border-white/10 sm:w-auto sm:rounded-2xl sm:px-6">
                  <p className="text-[13px] font-bold text-white italic sm:text-base">"{q}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};