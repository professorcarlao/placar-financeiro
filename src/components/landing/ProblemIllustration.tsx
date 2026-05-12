import { cn } from "@/lib/utils";

export const ProblemIllustration = () => {
  return (
    <div className="relative w-full mx-auto overflow-hidden rounded-[28px] sm:rounded-[32px] border border-gramado/10 bg-white shadow-xl shadow-campo/5 aspect-square sm:aspect-[4/3] flex items-center justify-center">
      <img 
        src="/assets/illustrations/problem-ruminations-man.jpg" 
        alt="Homem preocupado com as finanças e balões de pensamentos" 
        className="w-full h-full object-contain"
        loading="lazy"
      />
      {/* Subtle Shine/Overlay to maintain premium feel */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-campo/5 to-transparent opacity-20" />
    </div>
  );
};

