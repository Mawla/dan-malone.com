import { Hero } from "@/components/blocks/hero";

export default function HeroTestPage() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-100">
      <Hero
        title="Simplifying technology and driving real results"
        subtitle="I'm here to help you navigate the tech world without the hassle — so you can focus on growing your business and making a real impact."
        imageUrl="/img/headshot-professional.png"
      />
    </main>
  );
}
