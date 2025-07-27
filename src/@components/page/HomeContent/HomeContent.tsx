"use client";
import Icon from "@/@components/core/Icon/Icon";
import useScrollPosition from "./useScrollPosition";
import VideoGallery from "../Trailer/VideoGelary";
import Button from "@/@components/core/Button/Button";
import Image from "next/image";
import AskModal from "../AskModal/AskModal";
import { useState } from "react";
import Carousel from "@/@components/core/Carosal/Carosal";
import HTMLParser from "@/@components/core/HtmlParser/HtmlParser";
import Accordion from "@/@components/core/Accordion/Accordion";

export default function ProductContent({ data }: { data: any }) {
  const [modalOpen, setModalOpen] = useState(false);
  const isFixed = useScrollPosition(900);
  const tailer = data?.data.media;
  const checklist = data?.data.checklist;

  const [activeSection, setActiveSection] = useState(0);

  const carouselItems = data?.data.sections?.filter((item: { name: string }) => item.name && item.name.trim() !== "");
  const instructorsSection = carouselItems?.find((item: { type: string }) => item.type === "instructors");
  const featuresSection = carouselItems?.find((item: { type: string }) => item.type === "features");
  const pointersSection = carouselItems?.find((item: { type: string }) => item.type === "pointers");
  const featureExplanationsSection = carouselItems?.find(
    (item: { type: string }) => item.type === "feature_explanations"
  );
  const aboutSection = carouselItems?.find((item: { type: string }) => item.type === "about");

  const handleSectionClick = (orderIdx: number) => {
    setActiveSection(orderIdx);
    const sectionElement = document.getElementById(`section-${orderIdx}`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const handleAccordionClick = (accordionId: number) => {
    setOpenAccordion((prev) => (prev === accordionId ? null : accordionId));
  };

  return (
    <div className="max-w-[1200px] mx-auto relative z-10">
      {/* Original icon that scrolls and then hides */}
      {!isFixed && (
        <div className="absolute top-[-220px] right-0">
          <div className="border border-gray-300 p-1 bg-white w-96">
            <VideoGallery media={tailer} />
            <div className="p-4">
              <div className="mb-4">
                <div className="inline-block text-2xl font-semibold">৳3850</div>
                <span className="inline-flex items-center ml-2 space-x-2">
                  <del className="text-base font-normal md:text-xl">৳5000</del>

                  <div className="bg-yellow-300 text-black text-sm font-semibold px-2 py-1 rounded">1150 ৳ ছাড়</div>
                </span>
              </div>

              <Button className="w-full">{data?.data?.cta_text?.name}</Button>
            </div>

            <div className="p-4">
              <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
              <div className="space-y-3">
                {checklist.map((fact: any) => (
                  <div key={fact.id} className="flex items-center leading-5">
                    <div className="inline-block h-[20px] w-[20px] transition-opacity duration-300 ease-in-out">
                      <Image src={fact.icon} alt={fact.text} width={20} height={20} className="object-contain" />
                    </div>
                    <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">{fact.text}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="text-xs font-bold text-gray-500">কোর্সটি সম্পর্কে বিস্তারিত জানতে</p>
            <div className="flex items-center gap-1 cursor-pointer" onClick={() => setModalOpen(true)}>
              <Icon name={"call"} className="text-green-600" />
              <p className="text-xs font-bold text-green-600">ফোন করুন (16910)</p>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-start justify-between gap-12">
        <div className="flex-1 w-[63%]">
          <div className="w-full ">
            <div className="mb-8">
              <Carousel items={carouselItems} />
            </div>

            {/* Your content sections */}
            {data?.sections?.map((section: any) => (
              <div
                key={section.order_idx}
                id={`section-${section.order_idx}`}
                className="py-8 border-b border-gray-200"
              >
                <h2 className="text-2xl font-bold mb-4">{section.name}</h2>
                {/* Render your section content here */}
                <div>
                  {/* Example: Render features if section type is features */}
                  {section.type === "features" && section.values && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {section.values.map((feature: any) => (
                        <div key={feature.id} className="bg-white p-6 rounded-lg shadow-sm">
                          <img src={feature.icon} alt="" className="w-12 h-12 mb-4" />
                          <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                          <p className="text-gray-600">{feature.subtitle}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold md:text-2xl">{instructorsSection?.name}</h2>

            <div className="flex items-center border border-gray-300 px-5 pt-5 gap-4 rounded">
              <div>
                <Image
                  src={instructorsSection.values[0].image}
                  alt={instructorsSection.values[0].name}
                  height={100}
                  width={100}
                  className=" rounded-full h-20 w-20"
                />
              </div>
              <div className="">
                <p className="text-base font-semibold">{instructorsSection.values[0].name}</p>
                <HTMLParser htmlContent={instructorsSection.values[0].description || ""} />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="mb-4 text-xl font-semibold md:text-xl">{featuresSection?.name}</h2>

            <div className=" mb-16 grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
              {featuresSection?.values?.map((feature: any, index: string) => (
                <div className="  " key={index}>
                  <div className="flex items-start gap-3">
                    <div className="">
                      <Image src={feature.icon} alt={feature.title} width={40} height={40} className="" />
                    </div>
                    <div className="">
                      <p className="text-[18px] font-normal  text-white ">{feature.title}</p>
                      <p className="gap-2 mt-2 text-sm font-[400px] leading-6  text-[#9CA3AF]">{feature.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="mb-4 text-xl font-semibold md:text-xl">{pointersSection?.name}</h2>

            <div className=" mb-16 grid grid-cols-1 gap-4 rounded-md border border-gray-300  p-6 md:grid-cols-2 md:gap-4">
              {pointersSection?.values?.map((pointers: any, index: string) => (
                <div className="  " key={index}>
                  <div className="flex items-start gap-3">
                    <div className="">
                      <Icon name={"done_all"} className="text-blue-300" />
                    </div>
                    <div className="">
                      <p className="gap-2 text-sm font-medium leading-6 text-gray-800">{pointers.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="mb-4 text-xl font-semibold md:text-xl">{featureExplanationsSection?.name}</h2>

            <div className=" border border-gray-300  px-5">
              {featureExplanationsSection?.values?.map((featureExplanations: any, index: string) => (
                <div
                  className=" flex flex-col items-start justify-between gap-3 py-5 md:flex-row border-b border-gray-300"
                  key={index}
                >
                  <div className=" flex items-start justify-between w-full">
                    <div>
                      <h2 className="text-[14px] font-[500px] leading-[30px] text-[#111827] md:text-[16px]">
                        {featureExplanations.title}
                      </h2>
                      {featureExplanations.checklist.map((checkList: any, index: any) => (
                        <div key={index} className="flex items-center gap-2 ">
                          <div className="">
                            <Icon name={"done_all"} className="text-blue-300" />
                          </div>
                          <div className="">
                            <p className="gap-2 text-sm font-medium leading-6 text-gray-800">{checkList}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div>
                      <Image src={featureExplanations.file_url} alt={""} height={200} width={250} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="mb-4 text-xl font-semibold md:text-xl">{aboutSection?.name}</h2>

            <div className=" border border-gray-300  px-5">
              {aboutSection?.values?.map((about: any, index: string) => (
                <Accordion
                  key={about?.id}
                  title={about.title}
                  isOpen={openAccordion === about.id}
                  onToggle={() => handleAccordionClick(about.id)}
                >
                  <div className="bg-white rounded-b-lg mt-3 text-text-secondary lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] font-inter cursor-pointer font-medium">
                    <HTMLParser htmlContent={about?.description} />
                  </div>
                </Accordion>
              ))}
            </div>
          </div>
        </div>

        <div className=" sticky top-20 ml-4 w-8/12">
          {isFixed && (
            <>
              <div className="p-4 mb-4 border border-gray-300 bg-white w-96 ">
                <div className="pb-8">
                  <div className="mb-4">
                    <div className="inline-block text-2xl font-semibold">৳3850</div>
                    <span className="inline-flex items-center ml-2 space-x-2">
                      <del className="text-base font-normal md:text-xl">৳5000</del>

                      <div className="bg-yellow-300 text-black text-sm font-semibold px-2 py-1 rounded">1150 ৳ ছাড়</div>
                    </span>
                  </div>

                  <Button className="w-full ">{data?.data?.cta_text?.name}</Button>
                </div>

                <div className="">
                  <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
                  <div className="space-y-3">
                    {checklist.map((fact: any) => (
                      <div key={fact.id} className="flex items-center leading-5">
                        <div className="inline-block h-[20px] w-[20px] transition-opacity duration-300 ease-in-out">
                          <Image src={fact.icon} alt={fact.text} width={20} height={20} className="object-contain" />
                        </div>
                        <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">{fact.text}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p className="text-xs font-bold text-gray-500">কোর্সটি সম্পর্কে বিস্তারিত জানতে</p>
                <div className="flex items-center gap-1 cursor-pointer" onClick={() => setModalOpen(true)}>
                  <Icon name={"call"} className="text-green-600" />
                  <p className="text-xs font-bold text-green-600">ফোন করুন (16910)</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <AskModal isModalOpen={modalOpen} setIsModalOpen={setModalOpen} />
    </div>
  );
}
