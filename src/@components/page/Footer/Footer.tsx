import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="">
      <div className="max-w-[1200px] mx-auto grid-cols-1  sm:grid-cols-2 grid xl:gap-10 gap-5 py-14 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
          <div className="">
            <Image src={"https://10minuteschool.com/images/logo.svg"} alt={"footer logo"} height={100} width={100} />
            <p className="py-3 font-semibold">Download Our Mobile App</p>
            <div className="flex items-center gap-4">
              <Image
                src={"https://cdn.10minuteschool.com/images/google-play-icon_1695731678094.png"}
                alt={"footer logo"}
                height={130}
                width={130}
              />
              <Image
                src={"https://cdn.10minuteschool.com/images/ios-store-icon_1695731704002.png"}
                alt={"footer logo"}
                height={130}
                width={130}
              />
            </div>
          </div>
          <div>
            <p className=" font-bold text-lg">Company</p>
            <ul className="">
              <li className="mt-1.5  hover:cursor-pointer">Career / Recruitment</li>
              <li className="mt-1.5 hover:text-green-500 hover:cursor-pointer">Join as a Teacher</li>
              <li className="mt-1.5  hover:text-green-500 hover:cursor-pointer">Join as an Affiliate</li>
              <li className="mt-1.5  hover:text-green-500 hover:cursor-pointer">Privacy policy</li>
              <li className="mt-1.5  hover:text-green-500 hover:cursor-pointer">Refund policy</li>
              <li className="mt-1.5  hover:text-green-500 hover:cursor-pointer">Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          <div>
            <p className=" font-bold">Others</p>

            <ul className="">
              <li className="mt-1.5  hover:text-green-500 hover:cursor-pointer">Blog</li>
              <li className="mt-1.5  hover:text-green-500 hover:cursor-pointer">Book Store</li>
              <li className="mt-1.5  hover:text-green-500 hover:cursor-pointer">Free Notes & Guides</li>
              <li className="mt-1.5  hover:text-green-500 hover:cursor-pointer">Job Preparation Courses</li>
              <li className="mt-1.5  hover:text-green-500 hover:cursor-pointer">Verify Certificate</li>
              <li className="mt-1.5  hover:text-green-500 hover:cursor-pointer">Free Download</li>
            </ul>
          </div>
          <div>
            <p className=" font-bold">Keep up with us at</p>
            <ul className="">
              <li className="mt-1.5   hover:cursor-pointer text-nowrap">
                Call Us: <span className="text-green-500">16910</span> (24x7)
              </li>
              <li className="mt-1.5   hover:cursor-pointer text-nowrap">
                whatsapp: <span className="text-green-500"> +8801896016252(24x7)</span>
              </li>
              <li className="mt-1.5  hover:cursor-pointer text-nowrap">
                Outside Bangladesh: <span className="text-green-500">+880 9610916910</span>
              </li>
              <li className="mt-1.5   hover:cursor-pointer text-nowrap">
                Email Us: <span className="text-green-500"> support@10minuteschool.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t  border-gray-300  p-4">
        <div className="max-w-[1200px] mx-auto ">
          <p className="text-gray-400 text-center pt-4">
            2015 - 2025 Copyright © 10 Minute School. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
