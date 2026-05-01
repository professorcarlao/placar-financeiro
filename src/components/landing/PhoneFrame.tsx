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
        "relative mx-auto w-full max-w-[300px] rounded-[2.5rem] bg-campo p-3 shadow-mockup",
        className,
      )}
    >
      <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-campo" />
      <div className="overflow-hidden rounded-[2rem] bg-linha">
        {children}
      </div>
    </div>
  );
};