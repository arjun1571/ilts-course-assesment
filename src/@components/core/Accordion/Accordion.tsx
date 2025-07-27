"use client";
import { Collapse } from "react-collapse";
import Icon from "../Icon/Icon";
import HTMLParser from "../HtmlParser/HtmlParser";

interface AccordionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, isOpen, onToggle, children }) => {
  return (
    <div
      className={`accordion w-full mt-4 cursor-pointer accordion-header  justify-between bg-white border-b border-gray-300  transition-all duration-300 ease-in-out`}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between">
        <h3 className=" text-[14px] lg:text-[16px] text-text-primary font-inter font-medium p-[10px]">
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
        <div className="accordion-content transition-all duration-300 ease-in-out md:text-[16px] text-[14px] font-medium font-inter text-[#48505E] pb-[10px] px-[10px]">
          {children}
        </div>
      </Collapse>
    </div>
  );
};

export default Accordion;
