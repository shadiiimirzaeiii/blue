"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import RightArrow from "../../public/icon/rightarrow.svg";
import LeftArrow from "../../public/icon/leftarrow.svg";
import CategoryIcon from "../../public/icon/category.svg";
import ProfileIcon from "../../public/icon/profile.svg";

const SearchNavbar: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full h-[71px] flex items-center border-2 mt-2  ml-0">
      <div className="relative flex items-center w-[571px] h-[40px] mr-28 xlcustom:mr-[17px]">
        <button
          onClick={scrollLeft}
          className="absolute left-[-20px] w-[40px] h-[40px] bg-white shadow-buttonshadow rounded-full flex items-center justify-center z-10 mr-6"
        >
          <Image
            src={LeftArrow}
            alt="Scroll left"
            className="w-[35px] h-[20px]"
          />
        </button>

        <div
          ref={scrollRef}
          className="flex flex-row overflow-x-auto scrollbar-hide w-[619px] h-[40px] pl-[50px] pr-7 mr-2"
        >
          {[...Array(10)].map((_, idx) => (
            <button
              key={idx}
              className="w-[99px] h-[40px] flex-shrink-0 ml-1 mr-1 border-2 border-buttonborder rounded-full flex items-center text-sm"
            >
              <Image
                src={CategoryIcon}
                alt="Category"
                className="w-[25px] h-[20px] mr-1"
              />
              <h6 className="text-sm">کانتینر اداری</h6>
            </button>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-[-20px] w-[40px] h-[40px] bg-white shadow-buttonshadow rounded-full flex items-center justify-center z-10 mr-4"
        >
          <Image
            src={RightArrow}
            alt="Scroll right"
            className="w-[35px] h-[20px]"
          />
        </button>
      </div>

      <button className="w-[40px] h-[40px] ml-4 mr-[9rem] xlcustom:mr-[75px] shadow-buttonshadow rounded-full flex items-center justify-center">
        <Image src={ProfileIcon} alt="Profile" className="w-[20px] h-[15px]" />
      </button>
    </nav>
  );
};

export default SearchNavbar;
