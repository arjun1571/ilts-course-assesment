import React, { useRef } from "react";
import Button from "../Button/Button";

interface CarouselItem {
  name: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollOffset;
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  console.log(items);

  return (
    <div className="relative w-full">
      <div className="flex items-center h-20">
        <Button
          onClick={() => scroll(-100)}
          className="absolute -left-8 z-10 !p-2 !bg-gray-400 !h-10 !w-10 !rounded-full shadow-md cursor-pointer"
        >
          &lt;
        </Button>
        <div
          ref={scrollContainerRef}
          className="flex items-center w-full overflow-x-auto scrollbar-hide border-b border-gray-300"
        >
          {items?.map((item, index) => (
            <div
              key={index}
              onClick={() => scrollToSection(item.name)}
              className=" py-2 mx-2 text-center  cursor-pointer whitespace-nowrap text-gray-500"
            >
              {item.name}
            </div>
          ))}
        </div>
        <Button
          onClick={() => scroll(100)}
          className="absolute right-0 z-10 !p-2 !bg-gray-400 !h-10 !w-10 !rounded-full shadow-md cursor-pointer"
        >
          &gt;
        </Button>
      </div>
    </div>
  );
};

export default Carousel;
