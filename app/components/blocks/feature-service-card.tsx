import { Check } from "lucide-react";

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
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h3 className="heading-card">{title}</h3>

      <p className="mt-4 card-body">{description}</p>

      <div className="mt-6 space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-50">
              <Check className="h-3 w-3 text-green-600" />
            </div>
            <span className="feature-description">{feature}</span>
          </div>
        ))}
      </div>

      {question && answer && (
        <div className="mt-8">
          <h4 className="heading-card-small">{question}</h4>
          <p className="mt-2 card-body-small">{answer}</p>
        </div>
      )}
    </div>
  );
}
