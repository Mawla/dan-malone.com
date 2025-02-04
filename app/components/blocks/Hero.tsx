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
    <div className={cn("w-full bg-[#FAF9F7]", className)}>
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col max-w-[1200px] mx-auto">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center text-sm text-gray-600">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2" />
              Fractional CTO
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="flex flex-col space-y-6">
              <h1 className="font-serif text-[2.75rem]/[1.2] md:text-[3.5rem]/[1.2] font-medium text-gray-900">
                {title}
              </h1>

              <p className="text-gray-600 text-lg/relaxed">
                {subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  className="rounded-full bg-black hover:bg-gray-800 text-white px-8 h-12"
                >
                  <Link href="/contact">Let's Talk</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-gray-200 hover:bg-gray-50 px-8 h-12"
                >
                  <Link href="/portfolio">Review My Work</Link>
                </Button>
              </div>
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
