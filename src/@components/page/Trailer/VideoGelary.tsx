"use client";

import Button from "@/@components/core/Button/Button";
import Icon from "@/@components/core/Icon/Icon";
import Image from "next/image";
import { useState } from "react";

type MediaItem = {
  name: string;
  resource_type: "video" | "image";
  resource_value: string;
  thumbnail_url?: string;
};

export default function VideoGallery({ media }: { media: MediaItem[] }) {
  const videos = media.filter((item) => item.resource_type === "video");

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentVideo = videos[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : videos.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < videos.length - 1 ? prev + 1 : 0));
  };

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto text-white">
      {/* Main Player */}
      <div className="relative aspect-video mb-4">
        <iframe
          className="w-full h-full rounded-md"
          src={`https://www.youtube.com/embed/${currentVideo.resource_value}?autoplay=1`}
          title="Demo Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <Button
          className="absolute !h-10 !w-10 cursor-pointer  left-2 top-1/2 transform -translate-y-1/2 bg-black/60 !p-2 !rounded-full hover:bg-black"
          onClick={handlePrev}
        >
          <Icon name="chevron_left" />
        </Button>
        <Button
          className="absolute !h-10 !w-10 cursor-pointer !rounded-full right-2 top-1/2 transform -translate-y-1/2 bg-black/60 !p-2  hover:bg-black"
          onClick={handleNext}
        >
          <Icon name="chevron_right" />
        </Button>
      </div>

      {/* Suggestion Thumbnails */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 px-4">
        {videos.map((video, index) => (
          <div
            key={video.resource_value}
            className={`cursor-pointer border-2 ${
              index === currentIndex ? "border-blue-500" : "border-transparent hover:border-gray-400"
            } rounded-md overflow-hidden`}
            onClick={() => handleSelect(index)}
          >
            <Image
              src={video.thumbnail_url || ""}
              alt="Video thumbnail"
              className="w-full h-10 object-cover"
              height={100}
              width={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
