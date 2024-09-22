"use client";

import { Button, Row } from "react-bootstrap";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (query) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <Row className="absolute top-[57%] left-[11%] w-[94%] flex flex-row bg-[rgba(182,184,177,0.4)] h-[128px] justify-center p-2 rounded-lg xlcustom:right-[74px] lg:left-[51px] lg:!pl-[16px] lg:!pr-[16px] 2xl:right-[5%] lg:right-[5%]  twoxl:w-[92%] ">
      <div className="w-[98%] bg-white rounded-lg p-1 h-[95px] pt-2 pb-1 mt-2 ">
        <input
          type="text"
          className="w-[77%] twoxl:w-[84%] xlcustom:w-[82%] h-[60px] rounded-lg border-none p-1 text-lg mt-1 box-border outline-none !pr-5 mr-1 "
          placeholder="شهر رزرو تجهیز خود را جستجو کنید"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          className="h-[60px] w-[173px] bg-mainblue text-white text-lg mt-2 mb-2 pt-2 rounded-lg mr-6"
          onClick={handleSearch}
        >
          رزرو کنید
        </Button>
      </div>
    </Row>
  );
}

export default SearchBar;
