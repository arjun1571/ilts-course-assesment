"use client";
import React, { useRef } from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

// Define a more specific type for the items
interface CarouselItem {
  name: string;
  order_idx: number; // Add order_idx to identify the section
}

interface CarouselProps {
  items: CarouselItem[];
  onItemClick: (orderIdx: number) => void; // Add a callback prop
}

const Carousel: React.FC<CarouselProps> = ({ items, onItemClick }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div className="relative w-full bg-white">
      <div className="flex items-center h-20">
        <Button
          onClick={() => scroll(-100)}
          className="absolute -left-5 z-10 !p-2 !bg-gray-300 !h-10 !w-10 !rounded-full shadow-md cursor-pointer"
        >
          &lt;
        </Button>
        <div
          ref={scrollContainerRef}
          className="flex items-center w-full overflow-x-auto scrollbar-hide border-b border-gray-300"
          style={{ scrollBehavior: "smooth" }}
        >
          {items?.map((item) => (
            <div
              key={item.order_idx}
              // Use the callback function passed from the parent
              onClick={() => onItemClick(item.order_idx)}
              className="py-2 px-4 mx-2 text-center cursor-pointer whitespace-nowrap text-gray-600 hover:text-blue-600 hover:border-blue-600 border-b-2 border-transparent transition-all font-medium"
            >
              {item.name}
            </div>
          ))}
        </div>
        <Button
          onClick={() => scroll(100)}
          className="absolute -right-8 z-10 !p-2 !bg-gray-300 !h-10 !w-10 !rounded-full shadow-md cursor-pointer"
        >
          &gt;
        </Button>
      </div>
    </div>
  );
};

export default Carousel;
