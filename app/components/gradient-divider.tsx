import { cn } from "@/lib/utils";

interface GradientDividerProps {
  className?: string;
  width?: string;
  direction?: "ltr" | "rtl";
}

export function GradientDivider({
  className,
  width = "75%",
  direction = "rtl",
}: GradientDividerProps) {
  const gradientDirection = direction === "rtl" ? "270deg" : "90deg";

  return (
    <div
      className={cn("relative h-px overflow-hidden rounded-[10px]", className)}
      style={{
        width,
        background: `linear-gradient(${gradientDirection}, rgba(234,232,225,0.2) 0%, rgba(17,16,17,0.2) 75.67567567567568%, rgba(17,16,17,0) 100%)`,
        transform: "perspective(1200px)",
        willChange: "transform",
      }}
    />
  );
}
