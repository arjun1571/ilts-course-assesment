import React from "react";
import Image from "next/image";

type Feature = {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
};

type FeatureSectionProps = {
  orderIdx: number;
  sectionName: string;
  features: Feature[];
};

const Features: React.FC<FeatureSectionProps> = ({ orderIdx, sectionName, features }) => {
  if (!features || features.length === 0) return null;

  return (
    <div id={`section-${orderIdx}`} className="pb-8">
      <h2 className="mb-4 text-2xl font-bold">{sectionName}</h2>
      <div className="grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
        {features.map((feature) => (
          <div key={feature.id}>
            <div className="flex items-start gap-3">
              <div>
                <Image src={feature.icon} alt={feature.title} width={40} height={40} />
              </div>
              <div>
                <p className="text-[18px] font-normal text-white">{feature.title}</p>
                <p className="mt-2 text-sm font-normal leading-6 text-[#9CA3AF]">{feature.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
