import { cn } from "@/lib/utils";
import { ArrowRight, Code2, GitBranch, LineChart, Users } from "lucide-react";
import Link from "next/link";
import { FeatureServiceCard } from "./feature-service-card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <div className="group relative rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="mb-6 w-fit rounded-lg bg-green-50 p-3">
        <div className="h-8 w-8 text-green-600">{icon}</div>
      </div>
      <h3 className="mb-4 heading-card">{title}</h3>
      <p className="mb-6 card-body">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center font-medium text-slate-900 transition hover:text-slate-700"
      >
        <span className="feature-title">Learn more</span>
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
}

const services: ServiceCardProps[] = [
  {
    title: "Technical Leadership",
    description:
      "Strategic guidance and leadership for your technology initiatives, helping you make informed decisions and drive innovation.",
    icon: <Users />,
    href: "/services/technical-leadership",
  },
  {
    title: "Architecture Design",
    description:
      "Scalable and maintainable system architecture design that aligns with your business goals and future growth.",
    icon: <GitBranch />,
    href: "/services/architecture-design",
  },
  {
    title: "Development Strategy",
    description:
      "Optimized development processes and best practices to improve team efficiency and code quality.",
    icon: <Code2 />,
    href: "/services/development-strategy",
  },
  {
    title: "Performance Optimization",
    description:
      "Identify and resolve bottlenecks to enhance system performance and user experience.",
    icon: <LineChart />,
    href: "/services/performance-optimization",
  },
];

interface ServicesSectionProps {
  className?: string;
}

export function ServicesSection({ className }: ServicesSectionProps) {
  return (
    <section className={cn("w-full py-24", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 heading-3">Services That Drive Growth</h2>
          <p className="body-large">
            Comprehensive technical leadership and strategic guidance to help
            your business thrive in the digital age.
          </p>
        </div>

        <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureServiceCard
            title="Tech Stack Guidance"
            description="I help you choose the right tools and technologies for your engineering team, ensuring they're optimized for productivity and scalability."
            features={[
              "Digital Brand Assets",
              "Brand Strategy",
              "UX/UI design",
            ]}
            question="Why does my Tech Stack matter?"
            answer="Your Tech Stack will set the tone for a lot of your future success and issues."
          />

          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
