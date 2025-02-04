import Image from "next/image";

interface ToolCardProps {
  name: string;
  description: string;
  icon: string;
  link: string;
}

function ToolCard({ name, description, icon, link }: ToolCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 w-[86px] h-[86px] rounded-[32px] bg-[#f4f2ef] relative group overflow-hidden"
    >
      <Image
        src={icon}
        alt={name}
        width={42}
        height={42}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity p-3">
        <p className="text-white text-sm font-medium">{name}</p>
        <p className="text-white text-xs mt-1">{description}</p>
      </div>
    </a>
  );
}

const tools = [
  {
    name: "Spline",
    description: "Place to design and collaborate in 3D",
    icon: "/icons/spline.png",
    link: "#",
  },
  {
    name: "Figma",
    description: "Design tool for creating and collaborating",
    icon: "/icons/figma.png",
    link: "https://psxid.figma.com/v9jp9sgvhkam",
  },
  {
    name: "Framer",
    description: "Where teams design and publish stunning sites",
    icon: "/icons/framer.png",
    link: "https://www.framer.com?via=babarogic",
  },
  {
    name: "Relume",
    description: "Access the world's largest library of Figma",
    icon: "/icons/relume.png",
    link: "https://library.relume.io/?via=goran",
  },
  {
    name: "Webflow",
    description: "Take control of HTML, CSS, and JavaScript",
    icon: "/icons/webflow.png",
    link: "https://webflow.grsm.io/4uhrx286ybkh",
  },
  {
    name: "Hotjar",
    description: "Behaviour analytical tool to track users",
    icon: "/icons/hotjar.svg",
    link: "https://invite.hotjar.com/w542hgt4yjgo",
  },
  {
    name: "Fireflies AI",
    description: "AI Notetaker for Meetings",
    icon: "/icons/fireflies.png",
    link: "https://fireflies.ai/?fpr=babarogic",
  },
];

export function ToolsSection() {
  return (
    <section className="w-full bg-[#f9f7f6] py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-[#111011]/60 text-center mb-10 text-lg font-medium">
          Tools & Tech That Work for You
        </h3>
        <div className="flex gap-6 overflow-hidden px-4 sm:px-8">
          <div className="flex animate-scroll gap-6">
            {tools.map((tool, index) => (
              <ToolCard key={index} {...tool} />
            ))}
          </div>
          <div className="flex animate-scroll gap-6" aria-hidden="true">
            {tools.map((tool, index) => (
              <ToolCard key={`clone-${index}`} {...tool} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
