"use client";

import React, { useState, useEffect, useRef } from "react";
import { sendSearchInputToService } from "../../services/Service";

interface SearchboxProps {
  initialQuery: string;
  onSearchChange: (query: string) => void;
}

const Searchbox: React.FC<SearchboxProps> = ({
  initialQuery,
  onSearchChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState(initialQuery);
  const [provinceSearch, setProvinceSearch] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const options = ["آذربایجان شرقی", "فارس", "گیلان", "کرمانشاه", "تهران"];
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(provinceSearch.toLowerCase())
  );

  useEffect(() => {
    console.log(
      `Page loaded, sending request with initial query: ${initialQuery}`
    );
    sendSearchInputToService(initialQuery);
  }, [initialQuery]);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setSearchInputValue(value);

    onSearchChange(value);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(async () => {
      console.log(`Sending request with query: ${value}`);
      await sendSearchInputToService(value);
    }, 2000);
  };

  const handleSearchInputBlur = async () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (searchInputValue.trim() === "" || searchInputValue.length <= 2) return;

    console.log(`Sending request on blur with query: ${searchInputValue}`);
    await sendSearchInputToService(searchInputValue);
  };

  return (
    <div className="relative w-[516px] xlcustom:w-[498px] h-auto flex flex-col  mt-2 mr-2 rounded-lg  bg-white">
      <input
        type="text"
        placeholder="جستجو کنید.."
        className="mt-2 w-full h-[48px] px-4 rounded-md border border-gray-200 bg-searchnavbarbg focus: focus:outline-focusoutline"
        value={searchInputValue}
        onChange={handleSearchInputChange}
        onBlur={handleSearchInputBlur}
        onFocus={() => setIsFocused(true)}
      />

      {isFocused && (
        <div className="w-[516px] xlcustom:w-[498px] p-0 rounded-b-lg mt-2">
          <input
            type="text"
            placeholder="جستجو استان"
            className=" ! bg-searchnavbarbg w-full h-[48px] px-4  rounded-lg border border-gray-200 focus:border-focusoutline focus:outline-focusoutline"
            onChange={(e) => setProvinceSearch(e.target.value)}
            value={provinceSearch}
          />
          <ul className="mt-2 bg-searchnavbarbg ">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, idx) => (
                <li
                  key={idx}
                  className="p-2 hover:bg-dropdownhover hover:text-mainblue cursor-pointer rounded-md"
                  onClick={() => {
                    setProvinceSearch(option);
                    setIsFocused(false);
                  }}
                >
                  {option}
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-500">نتیجه ای پیدا نشد</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Searchbox;
