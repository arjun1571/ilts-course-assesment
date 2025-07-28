"use client";
import { Collapse } from "react-collapse";
import Icon from "../Icon/Icon";
import HTMLParser from "../HtmlParser/HtmlParser";

interface AccordionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  isLast?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ title, isOpen, onToggle, children, isLast }) => {
  return (
    <div
      className={`accordion w-full mt-4 cursor-pointer accordion-header  justify-between bg-white  transition-all duration-300 ease-in-out ${
        isLast ? "" : "border-b border-gray-300"
      }`}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between">
        <h3 className=" text-sm lg:text-[16px] text-text-primary font-inter font-medium p-[10px]">
          <HTMLParser htmlContent={title} />
        </h3>
        <>
          {isOpen ? (
            <div className=" flex justify-center items-center w-[36px] h-[36px] rounded-full ">
              <Icon name="keyboard_arrow_up" variant="outlined" className="text-gray-700 text-sm" />
            </div>
          ) : (
            <div className=" flex justify-center items-center w-[36px] h-[36px] rounded-full ">
              <Icon name="keyboard_arrow_down" variant="outlined" className="text-gray-700 text-sm" />
            </div>
          )}
        </>
      </div>
      <Collapse isOpened={isOpen} className="">
        <div className="accordion-content pb-4 transition-all duration-300 ease-in-out md:text-[18px] text-[14px] font-medium font-inter text-[#48505E]  px-[10px]">
          {children}
        </div>
      </Collapse>
    </div>
  );
};

export default Accordion;
