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
  const isFixedTitle = useScrollPosition(320);
  const tailer = data?.data.media;
  const checklist = data?.data.checklist;

  const allowedTypes: string[] = ["instructors", "features", "pointers", "feature_explanations", "about"];

  const carouselItems = data?.data.sections?.filter(
    (item: { type: string; name: string }) => item.name && item.name.trim() !== "" && allowedTypes.includes(item.type)
  );

  const instructorsSection = carouselItems?.find((item: { type: string }) => item.type === "instructors");
  const featuresSection = carouselItems?.find((item: { type: string }) => item.type === "features");
  const pointersSection = carouselItems?.find((item: { type: string }) => item.type === "pointers");
  const featureExplanationsSection = carouselItems?.find(
    (item: { type: string }) => item.type === "feature_explanations"
  );
  const aboutSection = carouselItems?.find((item: { type: string }) => item.type === "about");

  const handleSectionClick = (orderIdx: number) => {
    const sectionElement = document.getElementById(`section-${orderIdx}`);
    if (sectionElement) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = sectionElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
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
                  <div className="bg-yellow-300 text-black text-sm font-semibold px-2 py-1 rounded-md">1150 ৳ ছাড়</div>
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
        <div className="flex-1 !w-[63%]">
          <div className="w-full">
            <div className="mb-8">
              <Carousel items={carouselItems} onItemClick={handleSectionClick} />
            </div>
          </div>
          {isFixedTitle && (
            <div className="w-12/12 sticky top-14">
              <div className="mb-8">
                <Carousel items={carouselItems} onItemClick={handleSectionClick} />
              </div>
            </div>
          )}

          {/* Instructors Section */}
          {instructorsSection && (
            <div id={`section-${instructorsSection.order_idx}`} className="py-8">
              <h2 className="mb-4 text-2xl font-bold">{instructorsSection.name}</h2>
              <div className="flex items-center border border-gray-300 px-5 pt-5 gap-4 rounded-md">
                <div>
                  <Image
                    src={instructorsSection.values[0].image}
                    alt={instructorsSection.values[0].name}
                    height={100}
                    width={100}
                    className="rounded-full h-20 w-20 object-cover"
                  />
                </div>
                <div className="">
                  <p className="text-base font-semibold">{instructorsSection.values[0].name}</p>
                  <HTMLParser htmlContent={instructorsSection.values[0].description || ""} />
                </div>
              </div>
            </div>
          )}

          {/* Features Section */}
          {featuresSection && (
            <div id={`section-${featuresSection.order_idx}`} className="py-8">
              <h2 className="mb-4 text-2xl font-bold">{featuresSection.name}</h2>
              <div className="grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
                {featuresSection.values?.map((feature: any) => (
                  <div className="" key={feature.id}>
                    <div className="flex items-start gap-3">
                      <div>
                        <Image src={feature.icon} alt={feature.title} width={40} height={40} />
                      </div>
                      <div>
                        <p className="text-[18px] font-normal text-white">{feature.title}</p>
                        <p className="gap-2 mt-2 text-sm font-normal leading-6 text-[#9CA3AF]">{feature.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pointers Section */}
          {pointersSection && (
            <div id={`section-${pointersSection.order_idx}`} className="py-8">
              <h2 className="mb-4 text-2xl font-bold">{pointersSection.name}</h2>
              <div className="grid grid-cols-1 gap-4 rounded-md border border-gray-300 p-6 md:grid-cols-2 md:gap-4">
                {pointersSection.values?.map((pointer: any) => (
                  <div className="" key={pointer.id}>
                    <div className="flex items-start gap-3">
                      <div>
                        <Icon name={"done_all"} className="text-blue-500" />
                      </div>
                      <div>
                        <p className="gap-2 text-sm font-medium leading-6 text-gray-800">{pointer.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Feature Explanations Section */}
          {featureExplanationsSection && (
            <div id={`section-${featureExplanationsSection.order_idx}`} className="py-8">
              <h2 className="mb-4 text-2xl font-bold">{featureExplanationsSection.name}</h2>
              <div className="border border-gray-300 rounded-md px-5">
                {featureExplanationsSection.values?.map((explanation: any, index: number) => (
                  <div
                    className={`flex flex-col items-start justify-between gap-3 py-5 md:flex-row ${
                      index < featureExplanationsSection.values.length - 1 ? "border-b border-gray-300" : ""
                    }`}
                    key={explanation.id}
                  >
                    <div className="flex items-start justify-between w-full">
                      <div>
                        <h3 className="text-base font-semibold leading-8 text-[#111827] md:text-lg">
                          {explanation.title}
                        </h3>
                        {explanation.checklist.map((checklistItem: string, idx: number) => (
                          <div key={idx} className="flex items-center gap-2 mt-1">
                            <div>
                              <Icon name={"done"} className="text-green-500" />
                            </div>
                            <div>
                              <p className="gap-2 text-sm font-medium leading-6 text-gray-700">{checklistItem}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <Image src={explanation.file_url} alt={explanation.title} height={150} width={200} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* About Section */}
          {aboutSection && (
            <div id={`section-${aboutSection.order_idx}`} className="py-8 w-full">
              <h2 className="mb-4 text-2xl font-bold">{aboutSection.name}</h2>
              <div className="border border-gray-300 rounded-md">
                {aboutSection.values?.map((about: any) => (
                  <Accordion
                    key={about.id}
                    title={about.title}
                    isOpen={openAccordion === about.id}
                    onToggle={() => handleAccordionClick(about.id)}
                  >
                    <div className="p-4 bg-white rounded-b-lg text-text-secondary font-inter font-medium">
                      <HTMLParser htmlContent={about?.description} />
                    </div>
                  </Accordion>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="sticky top-20 ml-4 w-4/12">
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
                        <div className="inline-block h-[20px] w-[20px]">
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
