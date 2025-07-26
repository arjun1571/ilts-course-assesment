"use client";

import React, { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import logo from "@/@assets/images/10mslogo-svg.svg";
import Button from "@/@components/core/Button/Button";
import Icon from "@/@components/core/Icon/Icon";
import SearchComponent from "@/@components/core/Input/Search";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initialLang = (searchParams.get("lang") === "en" ? "en" : "bn") as "en" | "bn";

  const [lang, setLang] = useState<"en" | "bn">(initialLang);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value as "en" | "bn";
    setLang(newLang);

    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", newLang);
    router.push(`${pathname}?${params.toString()}`);
  };

  const menuItems = [
    {
      title: "Class 6-12",
      submenu: [
        { title: "Class 6", path: "/class-6" },
        { title: "Class 7", path: "/class-7" },
        { title: "Class 8", path: "/class-8" },
        { title: "Class 9", path: "/class-9" },
        { title: "Class 10", path: "/class-10" },
        { title: "Class 11", path: "/class-11" },
        { title: "Class 12", path: "/class-12" },
      ],
    },
    {
      title: "Skills",
      submenu: [
        { title: "Programming", path: "/skills/programming" },
        { title: "Design", path: "/skills/design" },
        { title: "Marketing", path: "/skills/marketing" },
      ],
    },
    {
      title: "Admission",
      submenu: [
        { title: "University", path: "/admission/university" },
        { title: "College", path: "/admission/college" },
        { title: "School", path: "/admission/school" },
      ],
    },
    {
      title: "Online Batch",
      submenu: [
        { title: "Live Classes", path: "/online/live" },
        { title: "Recorded Courses", path: "/online/recorded" },
        { title: "Weekend Batch", path: "/online/weekend" },
      ],
    },
    {
      title: "English Centre",
      submenu: [
        { title: "Spoken English", path: "/english/spoken" },
        { title: "IELTS Preparation", path: "/english/ielts" },
        { title: "TOEFL Preparation", path: "/english/toefl" },
      ],
    },
    {
      title: "More",
      submenu: [
        { title: "About Us", path: "/about" },
        { title: "Contact", path: "/contact" },
        { title: "FAQ", path: "/faq" },
      ],
    },
  ];

  const handleSearch = (term: string) => {
    console.log("Searching for:", term);
    // Implement your search logic here
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-3 bg-white dark:bg-gray-900 border-b border-gray-300">
      <div className="max-w-[1440px] flex justify-between items-center mx-auto px-7 ">
        <div
          className="text-xl font-bold cursor-pointer text-gray-800 dark:text-white flex items-center gap-4"
          onClick={() => router.push("/")}
        >
          <Image src={logo} alt={""} height={27} width={100} />
          <div className=" ">
            <SearchComponent
              placeholder="Search products..."
              onSearch={handleSearch}
              className="!w-full"
              inputClassName="border-2 border-gray-300  rounded-full text-sm"
              icon
            />
          </div>
        </div>

        <div className="flex items-center gap-8">
          {/* Main Menu Items */}
          <ul className="flex items-center space-x-6">
            {menuItems.map((item) => (
              <li
                key={item.title}
                className="relative group"
                onMouseEnter={() => setHoveredItem(item.title)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <button className="text-gray-700 text-sm dark:text-white flex items-center hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors cursor-pointer">
                  {item.title}
                  <Icon name="keyboard_arrow_down" className="text-gray-500" />
                </button>

                {/* Submenu Dropdown */}
                {hoveredItem === item.title && (
                  <div className="absolute left-0 mt-0.5 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.title}
                        href={subItem.path}
                        className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                      >
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            <select
              value={lang}
              onChange={changeLanguage}
              className="border rounded px-2 py-1 bg-white dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="bn">বাংলা</option>
              <option value="en">English</option>
            </select>

            <div className="flex items-center gap-1">
              <Icon name={"call"} className="text-green-600" />
              <p className="text-green-600">16910</p>
            </div>
            <Button className="!py-1 bg-green-600">Log In</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
