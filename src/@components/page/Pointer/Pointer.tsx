"use client";

import React from "react";
import Icon from "@/@components/core/Icon/Icon";

type Pointer = {
  id: string;
  text: string;
};

type PointerSectionProps = {
  orderIdx: number;
  sectionName: string;
  pointers: Pointer[];
};

const Pointer: React.FC<PointerSectionProps> = ({ orderIdx, sectionName, pointers }) => {
  if (!pointers || pointers.length === 0) return null;

  return (
    <div id={`section-${orderIdx}`} className="pb-8">
      <h2 className="mb-4 text-2xl font-bold">{sectionName}</h2>
      <div className="grid grid-cols-1 gap-4 rounded-md border border-gray-300 p-6 md:grid-cols-2 md:gap-4">
        {pointers.map((pointer) => (
          <div key={pointer.id}>
            <div className="flex items-start gap-3">
              <div>
                <Icon name="done_all" className="text-green-500" />
              </div>
              <div>
                <p className="text-sm font-medium leading-6 text-gray-800">{pointer.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pointer;
