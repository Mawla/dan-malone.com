"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import "./hero.css";
import { GradientDivider } from "@/components/gradient-divider";

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
    <section
      className={cn("w-full rounded-[36px] overflow-hidden", className)}
      style={{
        background:
          "linear-gradient(180deg, #f9f7f6 0%, rgba(247, 244, 242, 0) 83.55%)",
      }}
    >
      <div className="container mx-auto px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,0.6fr] gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-[20%]">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-black/10 mb-8">
              <div className="w-1.5 h-1.5 bg-[#16A34A] rounded-full mr-2" />
              <span className="font-satoshi text-sm tracking-normal">
                Fractional CTO
              </span>
            </div>

            <div className="space-y-6 max-w-[480px] mb-8">
              <h1 className="font-serif text-[56px] leading-[1.1] tracking-[-0.02em] text-[#1C1917] font-light">
                {title}
              </h1>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button
                  asChild
                  className="h-12 px-6 rounded-full bg-[#1C1917] hover:bg-[#1C1917]/90 text-white text-base font-medium"
                >
                  <Link href="/contact">Let's Talk</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 px-6 rounded-full border-[#1C1917]/10 hover:bg-[#1C1917]/5 text-[#1C1917] text-base font-medium"
                >
                  <Link href="/portfolio">Review My Work</Link>
                </Button>
              </div>
            </div>

            {/* Divider */}
            <GradientDivider className="mb-8" />

            <p className="text-[#1C1917]/70 text-xl leading-[1.6] font-normal max-w-[480px]">
              {subtitle}
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full aspect-[5/6] rounded-2xl overflow-hidden lg:pr-[15%]">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, 30vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
