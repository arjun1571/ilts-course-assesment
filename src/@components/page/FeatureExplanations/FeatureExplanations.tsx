"use client";

import React from "react";
import Image from "next/image";
import Icon from "@/@components/core/Icon/Icon";

type FeatureExplanation = {
  id: string;
  title: string;
  checklist: string[];
  file_url: string;
};

type FeatureExplanationsSectionProps = {
  orderIdx: number;
  sectionName: string;
  explanations: FeatureExplanation[];
};

const FeatureExplanations: React.FC<FeatureExplanationsSectionProps> = ({ orderIdx, sectionName, explanations }) => {
  if (!explanations || explanations.length === 0) return null;

  return (
    <div id={`section-${orderIdx}`} className="pb-8">
      <h2 className="mb-4 text-2xl font-bold">{sectionName}</h2>
      <div className="border border-gray-300 rounded-md pb-5 px-5">
        {explanations.map((explanation, index) => (
          <div
            key={explanation.id}
            className={`flex flex-col items-start justify-between gap-3 py-5 md:flex-row ${
              index < explanations.length - 1 ? "border-b border-gray-300" : ""
            }`}
          >
            <div className="lg:flex items-start justify-between w-full">
              <div>
                <h3 className="text-base font-semibold leading-8 text-[#111827] md:text-lg">{explanation.title}</h3>
                {explanation.checklist.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 mt-1">
                    <Icon name="done" className="text-green-500" />
                    <p className="text-sm font-medium leading-6 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              <div className="flex-shrink-0 ml-4 lg:mt-0 mt-6 lg:justify-normal justify-center flex lg:flex-none">
                <Image src={explanation.file_url} alt={explanation.title} height={150} width={200} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureExplanations;
