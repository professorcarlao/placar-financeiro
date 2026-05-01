import carlao from "@/assets/professor-carlao.png";

const falas = [
  "Craque, primeiro olha quanto dá pra jogar no mês.",
  "Assinatura esquecida também faz gol contra.",
  "Parcelamento sem controle vira campeonato longo.",
  "Meta boa é meta que aparece no placar.",
];

export const CarlaoSection = () => {
  return (
    <section className="relative overflow-hidden bg-linha py-20 lg:py-28">
      <div className="container grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div className="relative mx-auto">
          <div className="absolute inset-0 -z-10 mx-auto h-[380px] w-[380px] rounded-full bg-apito/30 blur-3xl" />
          <div className="rounded-[2rem] border-4 border-campo bg-apito-gradient p-2">
            <img
              src={carlao}
              alt="Professor Carlão, técnico raiz com bigode grisalho, óculos escuros, blazer e cachecol tático"
              className="w-full max-w-sm rounded-[1.6rem] bg-linha"
            />
          </div>
        </div>

        <div>
          <span className="inline-block rounded-full bg-campo px-3 py-1 text-xs font-bold uppercase tracking-wider text-apito">
            O Professor Carlão
          </span>
          <h2 className="mt-4 font-display text-4xl text-campo sm:text-5xl lg:text-6xl">
            O técnico que <br />
            <span className="text-apito-deep">faltava no seu dinheiro</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Sabe aquele técnico raiz que não complica o jogo, fala o que precisa ser feito e mostra onde o time está errando? Essa é a ideia do Carlão. Linguagem simples, visão de placar, zero papo difícil.
          </p>

          <div className="mt-8 space-y-3">
            {falas.map((f, i) => (
              <div key={i} className="relative rounded-2xl rounded-bl-sm bg-campo p-4 text-linha shadow-card-soft">
                <p className="text-sm leading-relaxed">
                  <span className="text-apito">"</span>
                  {f}
                  <span className="text-apito">"</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};