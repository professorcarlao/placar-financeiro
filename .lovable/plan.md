## Ajuste da BenefitsSection

Refinar apenas a `BenefitsSection` (e pequeno ajuste opcional no `PhoneFrame` para variante "mini"). Sem mudar estrutura da LP, ordem de seções, ou criar imagens novas.

### 1. PhoneFrame — nova variante `mini`

Em `src/components/landing/PhoneFrame.tsx`, adicionar prop `mini?: boolean` (mantendo `minimal` e `hideButtons` existentes). Quando `mini`:
- Padding externo `p-[2px]` em vez de `p-[10px]`/`p-[4px]`.
- Sem ring externo visível (apenas `ring-1 ring-white/10` muito sutil).
- Notch reduzida: `top-1 h-2 w-8`.
- Bordas: `rounded-[1.4rem]` externo, `rounded-[1.2rem]` interno.
- Sempre `hideButtons` forçado (sem botões laterais decorativos).
- Cor do chassi mais escura/neutra (`bg-[#0a0a0a]`) para reduzir presença das laterais pretas.

Isso resolve "laterais pretas chamando atenção" e "mockup parece cortado".

### 2. BenefitsSection — composição compacta

Reescrever `src/components/landing/BenefitsSection.tsx`:

**Estrutura geral:**
- Manter grid `md:grid-cols-2` com `gap-5 lg:gap-6` (mais apertado).
- Padding da seção mantido.
- Header da seção inalterado.

**Card individual (layout horizontal sempre que `sm:` ou maior):**
- `flex flex-row items-center` (no mobile também — fica natural com visuais pequenos).
- Padding reduzido: `p-4 sm:p-5` (era `p-6/8/10`).
- Gap interno: `gap-4 sm:gap-5` (era `gap-6/10`).
- `rounded-3xl` (era `2.5rem` — mais proporcional ao tamanho menor).
- Altura controlada por conteúdo, sem `min-h`.

**Coluna visual (esquerda):**
- Largura fixa: `w-[88px] sm:w-[104px]` shrink-0.
- Para os 3 cards de app screenshot: usar `<PhoneFrame mini hideButtons>` com a imagem.
- Visual centralizado verticalmente.

**Coluna texto (direita):**
- `flex-1 min-w-0`.
- Título: `font-display text-xl sm:text-2xl lg:text-3xl` (menor que antes), `leading-tight`.
- Descrição: `text-sm` (era `sm:text-base lg:`), `leading-snug`, `mt-2`.
- Largura de leitura confortável, sem `max-w` exagerado — deixa o `flex-1` controlar.

### 3. Card "Insights do Carlão" — sem PhoneFrame

Renderização condicional quando `isApp === false`:
- Substitui a coluna visual por um bloco quadrado `w-[88px] sm:w-[104px] aspect-square`:
  - `rounded-2xl` com `border-2 border-apito/40` e `bg-apito/10`.
  - `overflow-hidden`, contém `<img src={carlao}>` `object-cover`.
  - Sombra suave.
- Coluna direita: além do título e descrição, incluir o mini card de insight EMBAIXO do parágrafo (não absoluto/flutuante — empilhado, contido):
  - `mt-3 inline-flex flex-col rounded-xl bg-campo/5 border border-campo/10 px-3 py-2`.
  - Linha 1: `text-[9px] font-black uppercase tracking-wider text-gramado` → "Leitura do jogo".
  - Linha 2: `text-xs font-bold text-campo leading-tight` → "Seu mês está sob controle, mas o crédito ainda pesa."
- Texto descritivo atualizado para a copy solicitada.

Remove o mini card absoluto atual (`-right-10 -bottom-4`) que causava sobreposição/desalinhamento.

### 4. Conteúdo dos 4 cards (mantido)

1. Clareza para o mês atual — screenshot `placar-do-mes.png` (PhoneFrame mini).
2. Objetivos visíveis — screenshot `Objetivos.png` (PhoneFrame mini).
3. Insights do Carlão — Carlão em card quadrado + mini insight embutido.
4. Estatísticas diretas — screenshot `estatisticas.png` (PhoneFrame mini).

### Arquivos modificados

- `src/components/landing/BenefitsSection.tsx` — recomposto.
- `src/components/landing/PhoneFrame.tsx` — adiciona variante `mini`.

Nenhuma outra seção é tocada. Nenhuma imagem nova. Carlão continua restrito às 4 seções permitidas.
