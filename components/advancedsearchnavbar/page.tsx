import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import RightArrow from "../../public/icon/rightarrow.svg";
import LeftArrow from "../../public/icon/leftarrow.svg";
import CategoryIcon from "../../public/icon/category.svg";
import ProfileIcon from "../../public/icon/profile.svg";
import { sendSearchInputToService } from "../../services/Service";

const Navbar: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInputValue, setSearchInputValue] = useState("");
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

  // options for the dropdown as props
  const options = ["آذربایجان شرقی", "فارس", " گیلان", " کرمانشاه", "تهران"];

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setSearchInputValue(value);

    if (value === "" || value.length <= 2) {
      return;
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(async () => {
      await sendSearchInputToService(value);
    }, 2000);
  };

  const handleSearchInputBlur = async () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (searchInputValue.trim() === "" || searchInputValue.length <= 2) return;

    await sendSearchInputToService(searchInputValue);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      !event.target?.closest("input")
    ) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full h-[71px] flex items-center border-2 mt-2 navbar-expand">
      <div className="relative">
        <input
          type="text"
          placeholder="جستجو کنید.."
          className="w-[525px] h-[48px] px-4 rounded-md border border-gray-300 mr-6"
          value={searchInputValue}
          onChange={handleSearchInputChange}
          onBlur={handleSearchInputBlur}
          onFocus={() => setIsFocused(true)}
        />

        {isFocused && (
          <div
            ref={dropdownRef}
            className="absolute top-full left-0 w-[525px] mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-50"
          >
            <input
              type="text"
              placeholder="انتخاب استان"
              className="w-full h-[48px] px-4 rounded-t-md border-b border-gray-300"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            />
            <ul>
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, idx) => (
                  <li
                    key={idx}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSearchQuery(option);
                      setIsFocused(false);
                    }}
                  >
                    {option}
                  </li>
                ))
              ) : (
                <li className="p-2 text-gray-500">No results found</li>
              )}
            </ul>
          </div>
        )}
      </div>

      <div className="relative flex items-center w-[571px] h-[40px] mr-28">
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

      <button className="w-[40px] h-[40px] ml-4 mr-[12rem] shadow-buttonshadow rounded-full flex items-center justify-center">
        <Image src={ProfileIcon} alt="Profile" className="w-[20px] h-[15px]" />
      </button>
    </nav>
  );
};

export default Navbar;
