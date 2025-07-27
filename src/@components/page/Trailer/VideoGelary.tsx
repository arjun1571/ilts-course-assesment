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

type VideoGalleryProps = {
  media: MediaItem[];
};

const VideoGallery: React.FC<VideoGalleryProps> = ({ media }) => {
  const videos = media.filter((item) => item.resource_type === "video");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

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

  const togglePlay = () => {
    if (currentVideo.resource_value) {
      setIsPlaying(true);
    }
  };

  if (videos.length === 0) {
    return <div className="w-full max-w-4xl mx-auto text-center py-10 text-gray-500">No videos available</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto text-white">
      {/* Main Video Player */}
      <div className="relative aspect-video mb-4 rounded-md overflow-hidden bg-black">
        {!isPlaying ? (
          <div
            className="w-full h-full relative cursor-pointer"
            onClick={togglePlay}
            aria-label="Play video"
            role="button"
          >
            {currentVideo.thumbnail_url && (
              <Image
                src={currentVideo.thumbnail_url}
                alt={`${currentVideo.name} thumbnail`}
                fill
                className="object-cover"
                priority={currentIndex === 0}
              />
            )}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <Button
                className="!bg-white !px-3.5 py-2 !rounded-full !text-green-600 border-4 border-gray-400 !text-xl"
                aria-label="Play button"
              >
                ▶
              </Button>
            </div>
          </div>
        ) : (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${currentVideo.resource_value}?autoplay=1`}
            title={currentVideo.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        )}

        {/* Navigation Buttons */}
        {videos.length > 1 && (
          <>
            <Button
              className="absolute !h-10 !w-10 left-2 top-1/2 transform -translate-y-1/2 bg-black/60 !p-2 !rounded-full hover:bg-black z-10"
              onClick={handlePrev}
              aria-label="Previous video"
            >
              <Icon name="chevron_left" />
            </Button>
            <Button
              className="absolute !h-10 !w-10 right-2 top-1/2 transform -translate-y-1/2 bg-black/60 !p-2 !rounded-full hover:bg-black z-10"
              onClick={handleNext}
              aria-label="Next video"
            >
              <Icon name="chevron_right" />
            </Button>
          </>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {videos.length > 1 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 px-4">
          {videos.map((video, index) => (
            <div
              key={`${video.resource_value}-${index}`}
              className={`cursor-pointer border-2 transition-all ${
                index === currentIndex ? "border-blue-500 scale-105" : "border-transparent hover:border-gray-400"
              } rounded-md overflow-hidden`}
              onClick={() => handleSelect(index)}
              aria-label={`Select video: ${video.name}`}
              role="button"
            >
              {video.thumbnail_url && (
                <Image
                  src={video.thumbnail_url}
                  alt={`${video.name} thumbnail`}
                  width={160}
                  height={90}
                  className="w-full aspect-video object-cover"
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
