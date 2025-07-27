"use client";
import Icon from "@/@components/core/Icon/Icon";
import useScrollPosition from "./useScrollPosition";
import VideoGallery from "../Trailer/VideoGelary";
import Button from "@/@components/core/Button/Button";
import Image from "next/image";
import AskModal from "../AskModal/AskModal";
import { useState } from "react";
import Carousel from "@/@components/core/Carosal/Carosal";
import Instructors from "../Instructors/Instructors";
import Features from "../Features/Features";
import Pointer from "../Pointer/Pointer";
import FeatureExplanations from "../FeatureExplanations/FeatureExplanations";
import About from "../About/About";
import {
  IAboutSection,
  IChecklist,
  IFeatureExplanationsSection,
  IFeaturesSection,
  IInstructorsSection,
  IPointersSection,
} from "@/@interface/global.interface";

export default function ProductContent({ data }: { data: any }) {
  const [modalOpen, setModalOpen] = useState(false);
  const isFixed = useScrollPosition(900);
  const isFixedTitle = useScrollPosition(320);
  const tailer = data?.data.media;
  const checklist: IChecklist[] = data?.data.checklist;
  const allowedTypes: string[] = ["instructors", "features", "pointers", "feature_explanations", "about"];
  const carouselItems = data?.data.sections?.filter(
    (item: { type: string; name: string }) => item.name && item.name.trim() !== "" && allowedTypes.includes(item.type)
  );
  const instructorsSection: IInstructorsSection = carouselItems?.find(
    (item: { type: string }) => item.type === "instructors"
  );
  const featuresSection: IFeaturesSection = carouselItems?.find((item: { type: string }) => item.type === "features");
  const pointersSection: IPointersSection = carouselItems?.find((item: { type: string }) => item.type === "pointers");
  const featureExplanationsSection: IFeatureExplanationsSection = carouselItems?.find(
    (item: { type: string }) => item.type === "feature_explanations"
  );
  const aboutSection: IAboutSection = carouselItems?.find((item: { type: string }) => item.type === "about");

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

  return (
    <div className="max-w-[1200px] mx-auto relative z-10 lg:mt-0 mt-[65px]">
      <div className="lg:hidden block mb-6">
        <div className="border border-gray-300 p-1 bg-white w-full">
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
              {checklist.map((fact: any) => {
                return (
                  <div key={fact.id} className="flex items-center leading-5">
                    <div className="inline-block h-[20px] w-[20px] transition-opacity duration-300 ease-in-out">
                      <Image src={fact.icon} alt={fact.text} width={20} height={20} className="object-contain" />
                    </div>
                    <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">{fact.text}</h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4 lg:px-0 px-2">
          <p className="text-xs font-bold text-gray-500">কোর্সটি সম্পর্কে বিস্তারিত জানতে</p>
          <div className="flex items-center gap-1 cursor-pointer" onClick={() => setModalOpen(true)}>
            <Icon name={"call"} className="text-green-600" />
            <p className="text-xs font-bold text-green-600">ফোন করুন (16910)</p>
          </div>
        </div>
      </div>

      {!isFixed && (
        <div className="lg:absolute lg:top-[-220px] lg:right-0 lg:block hidden">
          <div className="border border-gray-300 p-1 bg-white lg:w-96 w-full">
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
            <div className="lg:p-4 p-0">
              <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
              <div className="space-y-3">
                {checklist.map((fact: any) => {
                  return (
                    <div key={fact.id} className="flex items-center leading-5">
                      <div className="inline-block h-[20px] w-[20px] transition-opacity duration-300 ease-in-out">
                        <Image src={fact.icon} alt={fact.text} width={20} height={20} className="object-contain" />
                      </div>
                      <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">{fact.text}</h4>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 lg:px-0 px-2">
            <p className="text-xs font-bold text-gray-500">কোর্সটি সম্পর্কে বিস্তারিত জানতে</p>
            <div className="flex items-center gap-1 cursor-pointer" onClick={() => setModalOpen(true)}>
              <Icon name={"call"} className="text-green-600" />
              <p className="text-xs font-bold text-green-600">ফোন করুন (16910)</p>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-start justify-between gap-12">
        <div className="flex-1 !w-full lg:!w-[63%] lg:px-0 px-2">
          <div className="w-full xl:block hidden">
            <div className="mb-8">
              <Carousel items={carouselItems} onItemClick={handleSectionClick} />
            </div>
          </div>
          {isFixedTitle && (
            <div className="w-12/12 sticky top-14 xl:block hidden">
              <div className="mb-8">
                <Carousel items={carouselItems} onItemClick={handleSectionClick} />
              </div>
            </div>
          )}

          {/* Instructors Section */}
          {instructorsSection && (
            <Instructors
              orderIdx={instructorsSection.order_idx}
              sectionName={instructorsSection.name}
              instructors={instructorsSection.values}
            />
          )}

          {/* Features Section */}
          {featuresSection && (
            <Features
              orderIdx={featuresSection.order_idx}
              sectionName={featuresSection.name}
              features={featuresSection.values}
            />
          )}

          {/* Pointers Section */}
          {pointersSection && (
            <Pointer
              orderIdx={pointersSection.order_idx}
              sectionName={pointersSection.name}
              pointers={pointersSection.values}
            />
          )}

          {/* Feature Explanations Section */}
          {featureExplanationsSection && (
            <FeatureExplanations
              orderIdx={featureExplanationsSection.order_idx}
              sectionName={featureExplanationsSection.name}
              explanations={featureExplanationsSection.values}
            />
          )}

          {/* About Section */}
          {aboutSection && (
            <About orderIdx={aboutSection.order_idx} sectionName={aboutSection.name} abouts={aboutSection.values} />
          )}
        </div>

        <div className="lg:sticky lg:top-20 ml-4 w-full lg:w-4/12 lg:block hidden">
          {isFixed && (
            <>
              <div className="p-4 mb-4 border border-gray-300 bg-white w-96">
                <div className="pb-8">
                  <div className="mb-4">
                    <div className="inline-block text-2xl font-semibold">৳3850</div>
                    <span className="inline-flex items-center ml-2 space-x-2">
                      <del className="text-base font-normal md:text-xl">৳5000</del>
                      <div className="bg-yellow-300 text-black text-sm font-semibold px-2 py-1 rounded">1150 ৳ ছাড়</div>
                    </span>
                  </div>
                  <Button className="w-full">{data?.data?.cta_text?.name}</Button>
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
              <div className="flex items-center justify-between mt-4 lg:px-0 px-2">
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
