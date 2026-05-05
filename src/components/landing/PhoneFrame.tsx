import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
  hideButtons?: boolean;
  minimal?: boolean;
  mini?: boolean;
}

export const PhoneFrame = ({ children, className, hideButtons, minimal, mini }: PhoneFrameProps) => {
  if (mini) {
    return (
      <div
        className={cn(
          "relative mx-auto aspect-[9/19.5] w-full bg-[#0a0a0a] p-[2px] rounded-[1.4rem] ring-1 ring-white/10 shadow-lg",
          className,
        )}
      >
        <div className="relative h-full w-full overflow-hidden rounded-[1.2rem] bg-black">
          <div className="absolute left-1/2 top-1 z-50 h-2 w-8 -translate-x-1/2 rounded-full bg-black" />
          <div className="h-full w-full">{children}</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative mx-auto aspect-[9/19.5] w-full bg-[#1a1a1a] shadow-2xl transition-all duration-300",
        minimal ? "rounded-[2rem] p-[4px] ring-1 ring-white/5" : "rounded-[3rem] p-[10px] ring-1 ring-white/10",
        className,
      )}
    >
      {/* Outer Glow/Border */}
      <div className={cn(
        "absolute inset-0 ring-1 ring-white/20",
        minimal ? "rounded-[2rem]" : "rounded-[3rem]"
      )} />
      
      {/* Inner Screen Container */}
      <div className={cn(
        "relative h-full w-full overflow-hidden bg-black",
        minimal ? "rounded-[1.8rem]" : "rounded-[2.4rem]"
      )}>
        {/* Notch / Dynamic Island */}
        <div className={cn(
          "absolute left-1/2 z-50 rounded-full bg-black shadow-inner",
          minimal ? "top-1.5 h-3 w-12 -translate-x-1/2" : "top-3 h-5 w-24 -translate-x-1/2"
        )} />
        
        {/* Subtle Shine */}
        <div className="absolute inset-0 pointer-events-none z-40 bg-gradient-to-tr from-white/5 to-transparent opacity-10" />
        
        <div className="h-full w-full">
          {children}
        </div>
      </div>
      
      {/* Side Buttons */}
      {!hideButtons && !minimal && (
        <>
          {/* Volume */}
          <div className="absolute -left-[2px] top-28 h-10 w-[3px] rounded-l-sm bg-[#333]" />
          <div className="absolute -left-[2px] top-44 h-14 w-[3px] rounded-l-sm bg-[#333]" />
          <div className="absolute -left-[2px] top-60 h-14 w-[3px] rounded-l-sm bg-[#333]" />
          
          {/* Power */}
          <div className="absolute -right-[2px] top-48 h-20 w-[3px] rounded-r-sm bg-[#333]" />
        </>
      )}
    </div>
  );
};