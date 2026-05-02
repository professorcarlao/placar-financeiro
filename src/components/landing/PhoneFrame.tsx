import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
}

export const PhoneFrame = ({ children, className }: PhoneFrameProps) => {
  return (
    <div
      className={cn(
        "relative mx-auto rounded-[3rem] bg-black p-[12px] shadow-2xl ring-1 ring-white/20 w-full",
        className,
      )}
    >
      {/* Notch */}
      <div className="absolute left-1/2 top-0 z-50 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-black" />
      
      {/* Inner Screen */}
      <div className="relative overflow-hidden rounded-[2.2rem] bg-[#06140D] aspect-[9/19]">
        {/* Subtle Shine/Reflect */}
        <div className="absolute inset-0 pointer-events-none z-40 bg-gradient-to-tr from-white/5 to-transparent opacity-20" />
        <div className="h-full w-full">
          {children}
        </div>
      </div>
      
      {/* Volume Buttons */}
      <div className="absolute -left-[2px] top-24 h-12 w-[2px] rounded-l-md bg-white/10" />
      <div className="absolute -left-[2px] top-40 h-12 w-[2px] rounded-l-md bg-white/10" />
      
      {/* Power Button */}
      <div className="absolute -right-[2px] top-32 h-16 w-[2px] rounded-r-md bg-white/10" />
    </div>
  );
};