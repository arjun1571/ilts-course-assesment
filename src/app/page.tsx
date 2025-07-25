"use client";
import Icon from "@/@components/core/Icon/Icon";
import { useEffect, useState } from "react";

export default function Home() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Adjust 100 to the position where you want the icon to become fixed
      if (scrollPosition > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <div>
        <div className="relative">
          <div className="bg-gradient-to-br from-black to-blue-900 min-h-[300px] w-full absolute top-0 left-0"></div>
          <div className="relative flex items-center min-h-[300px] text-white max-w-[1200px] mx-auto my-[40px]">
            <div className="w-[720px] mx-4">
              <h2 className="text-4xl font-semibold">IELTS Course by Munzereen Shahid</h2>
              <p className="my-2">(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</p>
              <p>
                Get complete preparation of Academic IELTS and General Training IELTS in one course! Join our IELTS
                Course today to achieve your desired band score under the guidance of the best IELTS Instructor in the
                country.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      {/* Content container */}
      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Original icon that scrolls and then hides */}
        {!isFixed && (
          <div className="absolute top-[-100px] right-0">
            <div className="border p-4">
              <Icon name="delete" variant="outlined" size={150} className="text-red-400" />
            </div>
          </div>
        )}

        <div className="flex items-start justify-between">
          <div className="flex-1">
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
            {/* ... rest of your content ... */}
          </div>

          {/* Right sidebar with fixed icon when scrolling */}
          <div className="w-[300px] sticky top-20 ml-4">
            {isFixed && (
              <div className="border p-4 mb-4">
                <Icon name="delete" variant="outlined" size={150} className="text-red-400" />
              </div>
            )}
            <div>faka</div>
          </div>
        </div>
      </div>
    </div>
  );
}
