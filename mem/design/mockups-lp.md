---
name: Mockups da LP
description: Padrão visual obrigatório dos mockups na landing page (devem replicar o app real)
type: design
---
Os mockups da landing devem parecer o app real (dashboard dark green), nunca cards brancos genéricos.

Padrão obrigatório:
- Fundo principal: bg-campo-flat (HSL 145 55% 12%)
- Cards internos: bg-campo-2-flat com border border-linha/10
- Cards aninhados: bg-campo-3-flat
- Números grandes: font-display + text-apito (verde/amarelo destaque)
- Negativos (saídas): text-cartao-vermelho
- Positivos (entradas): text-gramado
- Botões primários: bg-apito text-campo
- Labels: uppercase tracking-wider text-linha/55

Componentes em src/components/landing/mockups/:
- AppShellMockup (sidebar com Placar do Mês, Lances, Estatísticas, Objetivos, Ajustes — SEM "Recursos PRO")
- PlacarDashboardMockup
- NovoLanceDrawerMockup
- LancesListMockup
- EstatisticasMockup (sem avatar do Carlão — usa ícone de prancheta)
- MiniCardMockups (cards de cada recurso)

Carlão NUNCA aparece em mockups. Restrito a: Hero, BenefitsSection (Alertas), CarlaoSection, FinalCTASection.
