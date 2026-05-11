import { cn } from "@/lib/utils";
import { 
  Target, 
  ShoppingBag, 
  HelpCircle, 
  FileText, 
  RefreshCcw, 
  PieChart,
  Clock
} from "lucide-react";

export const ProblemIllustration = () => {
  return (
    <>
      {/* MOBILE VERSION: Clean, grid-based layout to avoid overlaps */}
      <div className="flex flex-col gap-4 sm:hidden mx-auto w-full max-w-[360px] overflow-hidden rounded-[28px] border border-gramado/20 bg-white/80 p-4 shadow-xl shadow-campo/5 relative">
        {/* Background Tactics Lines (Simplified for mobile) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="h-full w-full" viewBox="0 0 100 100" fill="none">
            <path d="M50 0V100" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>

        {/* Top Bubbles */}
        <div className="grid grid-cols-2 gap-2 relative z-10">
          <MobileBubble 
            text="Esse mês eu ia me organizar" 
            icon={Target} 
          />
          <MobileBubble 
            text="Comprinhas pequenas viraram um rombo" 
            icon={ShoppingBag} 
          />
        </div>

        {/* Goal Area */}
        <div className="relative h-[160px] w-full flex items-center justify-center z-10">
          <GoalStructure className="w-[85%] h-[80%] border-x-2 border-t-2" />
          
          {/* Balls (Reduced for mobile) */}
          <div className="absolute inset-0 pointer-events-none">
            <Ball className="top-[40%] right-[30%] w-8 h-8 shadow-md" />
            <Ball className="top-[55%] left-[35%] w-10 h-10 shadow-lg scale-110" />
            <Ball className="bottom-[15%] left-[25%] w-7 h-7 shadow-sm opacity-80" />
          </div>
        </div>

        {/* Bottom Bubbles */}
        <div className="grid grid-cols-2 gap-2 relative z-10">
          <MobileBubble 
            text="Eu nunca sei pra onde foi meu salário" 
            icon={HelpCircle} 
          />
          <MobileBubble 
            text="A fatura sempre me pega de surpresa" 
            icon={FileText} 
          />
        </div>

        {/* Bottom Tags */}
        <div className="flex flex-wrap justify-center gap-2 pt-2 relative z-10 border-t border-gramado/5 mt-1">
          <Tag text="FATURA" icon={FileText} />
          <Tag text="ASSINATURA" icon={RefreshCcw} />
          <Tag text="PARCELA" icon={Clock} />
          <Tag text="META" icon={Target} />
        </div>
      </div>

      {/* DESKTOP VERSION: Rich, absolute-positioned composition */}
      <div className="hidden sm:flex relative aspect-[4/3] w-full mx-auto overflow-hidden rounded-[32px] border border-gramado/10 bg-white shadow-xl shadow-campo/5 items-center justify-center p-10">
        {/* Background Tactics Lines */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.06] text-campo"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M200 0V300" stroke="currentColor" strokeWidth="1" />
          <circle cx="200" cy="150" r="40" stroke="currentColor" strokeWidth="1" />
          <path d="M0 150H400" stroke="currentColor" strokeWidth="1" />
          <rect x="0" y="80" width="60" height="140" stroke="currentColor" strokeWidth="1" />
          <rect x="340" y="80" width="60" height="140" stroke="currentColor" strokeWidth="1" />
          <text x="50" y="50" fontSize="10" fontWeight="bold" fill="currentColor">X</text>
          <text x="70" y="70" fontSize="12" fill="currentColor">O</text>
          <text x="320" y="40" fontSize="10" fontWeight="bold" fill="currentColor">X</text>
          <text x="350" y="240" fontSize="12" fill="currentColor">O</text>
          <text x="40" y="260" fontSize="10" fontWeight="bold" fill="currentColor">X</text>
          <path d="M80,60 Q120,40 160,80" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M300,50 Q260,80 220,60" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M100,240 Q150,260 180,220" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        {/* Soccer Goal (Trave) */}
        <div className="absolute inset-x-16 top-20 bottom-20 flex items-center justify-center pointer-events-none z-10">
          <GoalStructure className="w-full h-full border-x-[4px] border-t-[4px]" />
        </div>

        {/* Balls */}
        <div className="absolute inset-0 pointer-events-none z-20">
          <Ball className="top-[32%] right-[18%] w-14 h-14 shadow-xl rotate-[15deg]" />
          <MotionLine className="top-[15%] right-[5%] w-[20%] h-[20%] -rotate-[30deg] opacity-20" />
          <Ball className="top-[45%] left-[58%] w-16 h-16 shadow-2xl scale-110 z-30" />
          <MotionLine className="top-[40%] left-[25%] w-[35%] h-[15%] rotate-[5deg] opacity-30" />
          <Ball className="top-[52%] left-[12%] w-12 h-12 shadow-lg -rotate-[10deg]" />
          <MotionLine className="top-[65%] left-[5%] w-[15%] h-[10%] -rotate-[20deg] opacity-15" />
          <Ball className="bottom-[28%] right-[12%] w-11 h-11 shadow-md rotate-[45deg]" />
          <Ball className="bottom-[22%] left-[32%] w-9 h-9 shadow-sm" />
          <Ball className="top-[25%] left-[35%] w-8 h-8 opacity-60" />
        </div>

        {/* Speech Bubbles */}
        <div className="absolute inset-0 p-5 z-40">
          <DesktopBubble 
            text="Esse mês eu ia me organizar" 
            icon={Target}
            className="top-[6%] left-[10%]" 
          />
          <DesktopBubble 
            text="Comprinhas pequenas viraram um rombo" 
            icon={ShoppingBag}
            className="top-[10%] right-[10%]" 
          />
          <DesktopBubble 
            text="Eu nunca sei pra onde foi meu salário" 
            icon={HelpCircle}
            className="top-[42%] left-[4%]" 
          />
          <DesktopBubble 
            text="A fatura sempre me pega de surpresa" 
            icon={FileText}
            className="top-[45%] right-[4%]" 
          />
          <DesktopBubble 
            text="Tem assinatura cobrando e eu nem lembro" 
            icon={RefreshCcw}
            className="bottom-[22%] left-[8%]" 
          />
          <DesktopBubble 
            text="As parcelas não acabam nunca" 
            icon={PieChart}
            className="bottom-[25%] right-[8%]" 
          />
        </div>

        {/* Bottom Tags */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-6 px-4 flex-wrap z-50">
          <Tag text="FATURA" icon={FileText} />
          <Tag text="ASSINATURA" icon={RefreshCcw} />
          <Tag text="PARCELA" icon={Clock} />
          <Tag text="META" icon={Target} />
        </div>
      </div>
    </>
  );
};

const GoalStructure = ({ className }: { className: string }) => (
  <div className={cn("relative border-campo/30 rounded-t-sm shadow-sm bg-white/5", className)}>
    {/* Net (Rede) */}
    <svg className="absolute inset-0 w-full h-full opacity-25 text-campo" preserveAspectRatio="none">
       <defs>
         <pattern id="net-grid-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
           <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
         </pattern>
       </defs>
       <rect width="100%" height="100%" fill="url(#net-grid-pattern)" />
    </svg>
    {/* Depth Effect */}
    <div className="absolute -inset-x-[4px] bottom-0 h-4 bg-gradient-to-t from-campo/5 to-transparent" />
  </div>
);

const Ball = ({ className }: { className: string }) => (
  <div className={cn("absolute flex items-center justify-center bg-white rounded-full border border-black/10 select-none shadow-sm", className)}>
    <img src="https://api.iconify.design/noto:soccer-ball.svg" alt="ball" className="w-4/5 h-4/5" />
  </div>
);

const MotionLine = ({ className }: { className: string }) => (
  <svg className={cn("absolute pointer-events-none", className)} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5,5 Q50,20 95,95" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
  </svg>
);

const MobileBubble = ({ text, icon: Icon }: { text: string; icon: any }) => (
  <div className="bg-white border border-gramado/20 rounded-[16px] p-2.5 shadow-sm transition-all">
    <div className="flex items-center gap-2">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gramado/10 text-gramado">
        <Icon className="h-3.5 w-3.5" />
      </div>
      <span className="text-[10px] font-bold text-campo leading-tight">
        {text}
      </span>
    </div>
  </div>
);

const DesktopBubble = ({ text, icon: Icon, className }: { text: string; icon: any; className: string }) => (
  <div className={cn("absolute bg-white border border-gramado/20 rounded-[20px] px-3 py-2.5 shadow-md max-w-[160px] z-50 transition-all hover:scale-105", className)}>
    <div className="flex items-center gap-2.5">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gramado/10 text-gramado">
        <Icon className="h-4 w-4" />
      </div>
      <span className="text-[10px] font-bold text-campo leading-[1.2]">
        {text}
      </span>
    </div>
    <div className="absolute -bottom-1 left-1/3 w-2 h-2 bg-white border-b border-r border-gramado/20 rotate-45" />
  </div>
);

const Tag = ({ text, icon: Icon }: { text: string; icon: any }) => (
  <div className="flex items-center gap-1.5 rounded-full border border-gramado/20 bg-white/90 px-2.5 py-1 text-[9px] sm:text-[10px] font-black text-campo shadow-sm backdrop-blur-sm transition-all hover:bg-white">
    <Icon className="h-3 w-3 sm:h-4 w-4 text-gramado" />
    <span className="tracking-widest uppercase">{text}</span>
  </div>
);
