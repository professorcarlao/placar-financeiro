import { cn } from "@/lib/utils";

export const ProblemIllustration = () => {
  return (
    <div className="relative aspect-square w-full mx-auto overflow-hidden rounded-2xl bg-white shadow-inner">
      <img 
        src="/assets/illustrations/problem-man-v3.jpg" 
        alt="Homem preocupado com as contas e balões de pensamento" 
        className="h-full w-full object-cover"
      />
      
      {/* Overlay sutil para integração */}
      <div className="absolute inset-0 bg-campo/5 mix-blend-multiply pointer-events-none" />
    </div>
  );
};
