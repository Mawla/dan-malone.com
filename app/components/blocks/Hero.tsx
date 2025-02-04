"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export function Hero({
  title = "Simplifying technology and driving real results",
  subtitle = "Fractional CTO",
  description = "I'm here to help you navigate the tech world without the hassle — so you can focus on growing your business and making a real impact.",
}: HeroProps) {
  return (
    <section className="relative w-full min-h-[80vh] bg-[#FAF9F7] flex items-center">
      <div className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm">
            <span className="flex items-center text-sm text-gray-600">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2" />
              {subtitle}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
            {title}
          </h1>

          <p className="text-gray-600 text-lg max-w-xl">{description}</p>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="default"
              className="bg-[#1C1917] hover:bg-[#292524] text-white px-6 py-2 rounded-full"
            >
              Let's Talk
            </Button>
            <Button
              variant="outline"
              className="border-gray-200 hover:bg-gray-50 px-6 py-2 rounded-full"
            >
              Review My Work
            </Button>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative h-[500px] w-full">
          <Image
            src="/hero-image.jpg"
            alt="Dan Malone - Fractional CTO"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
