import Image from "next/image";
import HTMLParser from "@/@components/core/HtmlParser/HtmlParser";
import React from "react";

type Instructor = {
  name: string;
  image: string;
  description?: string;
};

type InstructorsProps = {
  orderIdx: number;
  sectionName: string;
  instructors: Instructor[];
};

const Instructors: React.FC<InstructorsProps> = ({ orderIdx, sectionName, instructors }) => {
  if (!instructors || instructors.length === 0) return null;

  const instructor = instructors[0];

  return (
    <section id={`section-${orderIdx}`} className="pb-8" aria-labelledby={`instructor-heading-${orderIdx}`}>
      <h2 id={`instructor-heading-${orderIdx}`} className="mb-4 text-2xl font-bold">
        {sectionName}
      </h2>

      <div className="flex items-center gap-4 rounded-md border border-gray-300 px-5 pt-5">
        <div className="relative h-20 w-20 overflow-hidden rounded-full">
          <Image
            src={instructor.image}
            alt={`${instructor.name}'s profile picture`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100px, 100px"
            priority={false}
          />
        </div>

        <div className="flex-1">
          <h3 className="text-base font-semibold">{instructor.name}</h3>
          {instructor.description && (
            <div className="prose prose-sm mt-2 max-w-none">
              <HTMLParser htmlContent={instructor.description} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
