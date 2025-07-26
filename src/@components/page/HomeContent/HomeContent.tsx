// src/components/ProductContent.tsx
"use client";

import Icon from "@/@components/core/Icon/Icon";
import Title from "@/@components/page/Navbar/Title";
import useScrollPosition from "./useScrollPosition";
import VideoGallery from "../Trailer/VideoGelary";
import Button from "@/@components/core/Button/Button";
import Image from "next/image";
import AskModal from "../AskModal/AskModal";
import { useState } from "react";

export default function ProductContent({ data }: { data: any }) {
  const [modalOpen, setModalOpen] = useState(false);
  const isFixed = useScrollPosition(900);
  const tailer = data?.data.media;
  const checklist = data?.data.checklist;

  return (
    <div className="max-w-[1200px] mx-auto relative z-10">
      {/* Original icon that scrolls and then hides */}
      {!isFixed && (
        <div className="absolute top-[-260px] right-0">
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

      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="mt-20"> {data?.data?.title}</p>
          <p>isofisdoifjsdoifj</p>
          <p className="mt-20"> {data?.title}</p>
          <Title title={data.title} />

          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
          <h1>sdofposdfposdpf</h1>
        </div>

        <div className=" sticky top-20 ml-4">
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
