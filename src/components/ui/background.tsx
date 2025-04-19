import { cn } from "@/lib/utils";
import React from "react";

export function DotBackgroundDemo({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full">
      {/* Fixed background */}
      <div className="fixed inset-0 bg-white dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />


      {/* Center fade effect */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      {/* 🌟 Right radial brand glow */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse at right, var(--brand-color) 0%, transparent 50%)",
          opacity: 0.3,
        }}
      />
       
      </div>

      {/* Scrollable content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
