import { companyItemsData, otherItemsData } from "@/utils/data";
import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and App Download */}
          <div className="space-y-4">
            <Image
              src="https://10minuteschool.com/images/logo.svg"
              alt="10 Minute School Logo"
              width={120}
              height={40}
              className="h-auto"
            />
            <p className="font-medium">Download Our Mobile App</p>
            <div className="flex flex-wrap gap-2">
              <a href="#" aria-label="Download on Google Play">
                <Image
                  src="https://cdn.10minuteschool.com/images/google-play-icon_1695731678094.png"
                  alt="Google Play"
                  width={120}
                  height={40}
                  className="h-auto"
                />
              </a>
              <a href="#" aria-label="Download on App Store">
                <Image
                  src="https://cdn.10minuteschool.com/images/ios-store-icon_1695731704002.png"
                  alt="App Store"
                  width={120}
                  height={40}
                  className="h-auto"
                />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyItemsData?.map((item: string, index: number) => (
                <li key={index}>
                  <a href="#" className="hover:text-green-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Others</h3>
            <ul className="space-y-2">
              {otherItemsData?.map((item: string, index: number) => (
                <li key={index}>
                  <a href="#" className="hover:text-green-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Keep up with us at</h3>
            <ul className="space-y-2">
              <li>
                <span>Call Us: </span>
                <a href="tel:16910" className="text-green-500 hover:underline">
                  16910
                </a>{" "}
                (24x7)
              </li>
              <li>
                <span>WhatsApp: </span>
                <a href="https://wa.me/8801896016252" className="text-green-500 hover:underline">
                  +8801896016252
                </a>{" "}
                (24x7)
              </li>
              <li>
                <span>Outside Bangladesh: </span>
                <a href="tel:+8809610916910" className="text-green-500 hover:underline">
                  +880 9610916910
                </a>
              </li>
              <li>
                <span>Email Us: </span>
                <a href="mailto:support@10minuteschool.com" className="text-green-500 hover:underline">
                  support@10minuteschool.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-10 pt-6">
          <p className="text-gray-500 text-center">
            2015 - {new Date().getFullYear()} Copyright © 10 Minute School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
