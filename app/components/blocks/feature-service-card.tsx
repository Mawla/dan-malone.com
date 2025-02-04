import { Check } from "lucide-react";
import { GradientDivider } from "../gradient-divider";

interface FeatureServiceCardProps {
  title: string;
  description: string;
  features: string[];
  question?: string;
  answer?: string;
}

export function FeatureServiceCard({
  title,
  description,
  features,
  question,
  answer,
}: FeatureServiceCardProps) {
  return (
    <div className="group relative rounded-lg bg-white p-6 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-lg opacity-0 translate-y-8 animate-in">
      <div className="mb-6 w-fit rounded-lg bg-secondary p-3">
        <Check className="h-8 w-8 text-green-600" />
      </div>
      <h3 className="mb-4 heading-card">{title}</h3>
      <p className="mb-6 card-body">{description}</p>

      <div className="space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-green-600" />
            <span className="feature-description">{feature}</span>
          </div>
        ))}
      </div>

      {question && answer && (
        <>
          <div className="my-8">
            <GradientDivider width="100%" />
          </div>
          <div>
            <h4 className="heading-card-small">{question}</h4>
            <p className="mt-2 card-body-small">{answer}</p>
          </div>
        </>
      )}
    </div>
  );
}
