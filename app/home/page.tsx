import type { Metadata } from "next";
import { Hero } from "@/components/blocks/hero";

export const metadata: Metadata = {
  title: "Dan Malone | Fractional CTO",
  description:
    "Helping businesses navigate technology and drive real results. Expert guidance in tech strategy, team leadership, and digital transformation.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Simplifying technology and driving real results"
        subtitle="I'm here to help you navigate the tech world without the hassle — so you can focus on growing your business and making a real impact."
        imageUrl="/img/headshot-professional.png"
        imageAlt="Dan Malone - Fractional CTO"
      />

      {/* Services Preview Section - Placeholder */}
      <section className="w-full px-4 py-8 md:px-8 md:py-12 lg:py-16 bg-[#FAF9F7]">
        {/* Services content will be added here */}
      </section>

      {/* Case Studies Preview Section - Placeholder */}
      <section className="w-full px-4 py-8 md:px-8 md:py-12 lg:py-16">
        {/* Case studies content will be added here */}
      </section>

      {/* Contact CTA Section - Placeholder */}
      <section className="w-full px-4 py-8 md:px-8 md:py-12 lg:py-16 bg-[#FAF9F7]">
        {/* Contact CTA content will be added here */}
      </section>
    </main>
  );
}
