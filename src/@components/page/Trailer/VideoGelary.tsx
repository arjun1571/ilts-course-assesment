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
  const [isPlaying, setIsPlaying] = useState(false); // track if video is playing

  const currentVideo = videos[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : videos.length - 1));
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < videos.length - 1 ? prev + 1 : 0));
    setIsPlaying(false);
  };

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto text-white">
      {/* Main Player or Thumbnail */}
      <div className="relative aspect-video mb-4 rounded-md overflow-hidden bg-black">
        {!isPlaying ? (
          <div className="w-full h-full relative cursor-pointer" onClick={() => setIsPlaying(true)}>
            <Image src={currentVideo.thumbnail_url || ""} alt="Video thumbnail" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <Button className="!bg-white  !px-3.5 py-2 !rounded-full !text-green-600 border-4 border-gray-400 !text-xl cursor-pointer">
                ▶
              </Button>
            </div>
          </div>
        ) : (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${currentVideo.resource_value}?autoplay=1`}
            title="Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}

        {/* Prev/Next Buttons */}
        <Button
          className="absolute !h-10 !w-10 cursor-pointer left-2 top-1/2 transform -translate-y-1/2 bg-black/60 !p-2 !rounded-full hover:bg-black"
          onClick={handlePrev}
        >
          <Icon name="chevron_left" />
        </Button>
        <Button
          className="absolute !h-10 !w-10 cursor-pointer right-2 top-1/2 transform -translate-y-1/2 bg-black/60 !p-2 !rounded-full hover:bg-black"
          onClick={handleNext}
        >
          <Icon name="chevron_right" />
        </Button>
      </div>

      {/* Thumbnails */}
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
