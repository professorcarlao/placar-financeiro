import { Bell, CalendarClock, CreditCard, Film, Home, ShoppingCart, Target, Wallet } from "lucide-react";

const card = "rounded-xl border border-linha/10 bg-campo-2-flat p-3";

export const MiniPlacarCard = () => (
  <div className={card}>
    <p className="text-[8px] uppercase tracking-wider text-linha/55">Quanto dá pra jogar</p>
    <p className="font-display text-2xl text-apito">R$ 3.840</p>
    <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-linha/10">
      <div className="h-full w-[62%] rounded-full bg-apito-gradient" />
    </div>
  </div>
);

export const MiniLancesCard = () => (
  <div className={card}>
    <p className="mb-1.5 text-[8px] uppercase tracking-wider text-linha/55">Lances · Maio</p>
    <div className="space-y-1">
      <Row icon={Wallet} name="salário" value="+R$ 5.000" pos />
      <Row icon={ShoppingCart} name="mercado" value="-R$ 600" />
      <Row icon={Film} name="netflix" value="-R$ 30" />
    </div>
  </div>
);

export const MiniEstatisticasCard = () => (
  <div className={card}>
    <p className="mb-1.5 text-[8px] uppercase tracking-wider text-linha/55">6 meses</p>
    <div className="flex h-10 items-end gap-1">
      {[35, 60, 45, 80, 55, 70].map((h, i) => (
        <div key={i} className="w-full rounded-sm bg-apito-gradient" style={{ height: `${h}%` }} />
      ))}
    </div>
  </div>
);

export const MiniObjetivoCard = () => (
  <div className={card}>
    <div className="mb-1 flex items-center gap-1.5">
      <Target className="h-3 w-3 text-apito" />
      <p className="text-[10px] font-semibold text-linha">reserva</p>
      <span className="ml-auto text-[10px] text-apito">35%</span>
    </div>
    <div className="h-1.5 overflow-hidden rounded-full bg-linha/10">
      <div className="h-full w-[35%] rounded-full bg-apito-gradient" />
    </div>
    <p className="mt-1 text-[9px] text-linha/55">R$ 10.500 / R$ 30.000</p>
  </div>
);

export const MiniGastoFixoCard = () => (
  <div className={card}>
    <div className="flex items-center gap-1.5">
      <Home className="h-3 w-3 text-linha/70" />
      <p className="text-[10px] font-semibold text-linha">aluguel</p>
      <span className="ml-auto rounded bg-gramado/20 px-1 py-0.5 text-[8px] text-gramado">Ativa</span>
    </div>
    <p className="mt-1 text-[9px] text-linha/55">vence dia 1 · Moradia</p>
    <p className="mt-1 font-display text-base text-cartao-vermelho">R$ 5.000</p>
  </div>
);

export const MiniAssinaturaCard = () => (
  <div className={card}>
    <div className="flex items-center gap-1.5">
      <Film className="h-3 w-3 text-linha/70" />
      <p className="text-[10px] font-semibold text-linha">netflix</p>
      <span className="ml-auto rounded bg-gramado/20 px-1 py-0.5 text-[8px] text-gramado">Ativa</span>
    </div>
    <p className="mt-1 text-[9px] text-linha/55">próx. 01/06 · mensal</p>
    <p className="mt-1 font-display text-base text-cartao-vermelho">R$ 30</p>
  </div>
);

export const MiniParcelamentoCard = () => (
  <div className={card}>
    <div className="flex items-center gap-1.5">
      <CreditCard className="h-3 w-3 text-linha/70" />
      <p className="text-[10px] font-semibold text-linha">viagem</p>
      <span className="ml-auto text-[8px] text-linha/55">3x</span>
    </div>
    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-linha/10">
      <div className="h-full w-[33%] rounded-full bg-apito-gradient" />
    </div>
    <p className="mt-1 text-[9px] text-linha/55">saldo R$ 10.000 · 33%</p>
  </div>
);

export const MiniAlertaCarlaoCard = () => (
  <div className={card}>
    <div className="mb-1.5 flex items-center gap-1.5">
      <span className="flex h-5 w-5 items-center justify-center rounded-md bg-apito text-campo">
        <Bell className="h-3 w-3" />
      </span>
      <p className="text-[9px] font-bold uppercase tracking-wider text-apito">Aviso do Carlão</p>
    </div>
    <p className="text-[10px] leading-snug text-linha/85">
      <span className="text-apito">"</span>Assinatura esquecida também faz gol contra.<span className="text-apito">"</span>
    </p>
  </div>
);

export const MiniGastosFixosFallback = () => (
  <div className={card}>
    <p className="text-[8px] uppercase tracking-wider text-linha/55">Gastos fixos</p>
    <p className="font-display text-base text-linha">R$ 5.000</p>
    <p className="text-[9px] text-linha/55">1 ativo · vence dia 1</p>
  </div>
);

const Row = ({ icon: Icon, name, value, pos }: { icon: any; name: string; value: string; pos?: boolean }) => (
  <div className="flex items-center gap-1.5">
    <Icon className="h-2.5 w-2.5 text-linha/55" />
    <span className="text-[9px] text-linha/85">{name}</span>
    <span className={`ml-auto text-[9px] font-bold ${pos ? "text-gramado" : "text-cartao-vermelho"}`}>{value}</span>
  </div>
);

export const CalendarClockIcon = CalendarClock;
