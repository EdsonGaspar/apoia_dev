import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface CardProps extends ComponentProps<"div"> {
  icon: React.ReactNode;
  title: string;
  description: string;
}
export function Card({ icon, title, description, className }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white flex flex-col gap-4 items-center justify-center border border-gray-100 shadow-sm rounded-xl p-6",
        className
      )}
    >
      <h3 className="p-3 rounded-full text-5xl bg-amber-100 text-amber-600 font-bold flex items-center justify-center">
        {icon}
      </h3>
      <h2 className="text-lg font-semibold ">{title}</h2>
      <p className="text-zinc-800 font-light tracking-wide text-center">
        {description}
      </p>
    </div>
  );
}
