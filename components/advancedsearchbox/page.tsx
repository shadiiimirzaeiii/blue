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
    <div className="relative w-[516px] h-auto flex flex-col border-2 mt-2 mr-0 rounded-lg shadow-md bg-white">
      <div className="flex items-center border-b border-gray-200 p-2">
        <input
          type="text"
          placeholder="جستجو کنید.."
          className="w-full h-[48px] px-4 rounded-md focus:outline-none"
          value={searchInputValue}
          onChange={handleSearchInputChange}
          onBlur={handleSearchInputBlur}
          onFocus={() => setIsFocused(true)}
        />
        <span className="px-2 cursor-pointer">🔍</span>
      </div>

      {isFocused && (
        <div className="w-full bg-[#f7f9fc] p-2 rounded-b-lg">
          <div className="flex items-center border border-gray-300 rounded-lg p-2">
            <input
              type="text"
              placeholder="جستجو استان"
              className="w-full h-[48px] px-4 bg-transparent rounded-lg focus:outline-none"
              onChange={(e) => setProvinceSearch(e.target.value)}
              value={provinceSearch}
            />
            <span className="px-2 cursor-pointer">📍</span>
          </div>
          <ul className="mt-2">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, idx) => (
                <li
                  key={idx}
                  className="p-2 hover:bg-gray-100 cursor-pointer rounded-md"
                  onClick={() => {
                    setProvinceSearch(option);
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
  );
};

export default Searchbox;
