import { Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  question?: string;
  answer?: string;
}

export function ServiceCard({
  title,
  description,
  features,
  question,
  answer,
}: ServiceCardProps) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <h3 className="font-lora text-2xl font-bold text-slate-900">{title}</h3>

      <p className="mt-4 font-satoshi text-base text-slate-600">
        {description}
      </p>

      <div className="mt-6 space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E7F5EF]">
              <Check className="h-3 w-3 text-[#16A34A]" />
            </div>
            <span className="font-satoshi text-sm text-slate-600">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {question && answer && (
        <div className="mt-8">
          <h4 className="font-lora text-lg font-bold text-slate-900">
            {question}
          </h4>
          <p className="mt-2 font-satoshi text-base text-slate-600">{answer}</p>
        </div>
      )}
    </div>
  );
}
