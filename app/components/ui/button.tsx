"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50",
          variant === "default" &&
            "bg-gray-900 text-gray-50 hover:bg-gray-900/90",
          variant === "outline" &&
            "border border-gray-200 bg-white hover:bg-gray-100",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
