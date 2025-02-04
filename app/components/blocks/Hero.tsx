"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
  imageAlt?: string;
  className?: string;
}

export function Hero({
  title = "Simplifying technology and driving real results",
  subtitle = "I'm here to help you navigate the tech world without the hassle — so you can focus on growing your business and making a real impact.",
  imageUrl = "/img/headshot-professional.png",
  imageAlt = "Dan Malone - Fractional CTO",
  className,
}: HeroProps) {
  return (
    <div className={cn("w-full bg-[hsl(45,9%,91%)]", className)}>
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col max-w-[1200px] mx-auto">
          {/* Badge */}
          <div className="mb-8">
            <span className="badge border border-[#111011] rounded-full px-4 py-1 inline-flex items-center">
              Fractional CTO
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="flex flex-col space-y-6">
              <h1 className="heading-1">{title}</h1>

              <div className="flex flex-col items-start gap-6">
                <p className="body-20 text-[#111011]">{subtitle}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  asChild
                  className="body-18 rounded-full bg-[#111011] hover:bg-[#333333] text-white px-8 py-4 h-auto"
                >
                  <Link href="/contact">Let's Talk</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="body-18 rounded-full bg-white hover:bg-[#f5f5f5] px-8 py-4 h-auto"
                >
                  <Link href="/portfolio">Review My Work</Link>
                </Button>
              </div>

              {/* Gradient Line */}
              <div
                style={{
                  background:
                    "linear-gradient(270deg,rgba(234,232,225,.2) 0%,rgba(17,16,17,.2) 75.67567567567568%,rgba(17,16,17,0) 100%)",
                  borderRadius: "10px",
                  height: "1px",
                  width: "75%",
                  overflow: "hidden",
                  position: "relative",
                  willChange: "transform",
                  opacity: 1,
                  transform: "perspective(1200px)",
                  WebkitFontSmoothing: "inherit",
                }}
              />
            </div>

            {/* Right Column - Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
