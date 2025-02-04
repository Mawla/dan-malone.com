import { Hero } from "@/components/blocks/hero";
import { ServicesSection } from "@/components/blocks/services-section";
import { ToolsSection } from "@/components/blocks/tools-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero
        title="Simplifying technology and driving real results"
        subtitle="I'm here to help you navigate the tech world without the hassle — so you can focus on growing your business and making a real impact."
      />
      <ServicesSection />
      <ToolsSection />
    </main>
  );
}
