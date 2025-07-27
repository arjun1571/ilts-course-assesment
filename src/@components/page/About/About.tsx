import Accordion from "@/@components/core/Accordion/Accordion";
import HTMLParser from "@/@components/core/HtmlParser/HtmlParser";
import React, { useState } from "react";

type AboutItem = {
  id: string;
  title: string;
  description: string;
};

type AboutSectionProps = {
  orderIdx: number;
  sectionName: string;
  abouts: AboutItem[];
};

const About: React.FC<AboutSectionProps> = ({ orderIdx, sectionName, abouts }) => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const handleAccordionClick = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  if (!abouts || abouts.length === 0) return null;

  return (
    <div id={`section-${orderIdx}`} className="pb-8 w-full">
      <h2 className="mb-4 text-2xl font-bold">{sectionName}</h2>
      <div className="border border-gray-300 rounded-md pb-5 px-5">
        {abouts.map((about) => (
          <Accordion
            key={about.id}
            title={about.title}
            isOpen={openAccordion === about.id}
            onToggle={() => handleAccordionClick(about.id)}
          >
            <div className="p-4 bg-white rounded-b-lg text-text-secondary font-inter font-medium">
              <HTMLParser htmlContent={about.description} />
            </div>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default About;
