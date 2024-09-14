"use client";

import { Button, Row } from "react-bootstrap";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (query) {
      router.push(`/advancedsearch?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <Row className="absolute top-[57%] left-[11%] w-[1160px] flex flex-row bg-[rgba(182,184,177,0.4)] h-[128px] justify-center p-2 rounded-lg   ">
      <div className="w-[1118px] bg-white rounded-lg p-1 h-[95px] pt-2 pb-1 mt-2">
        <input
          type="text"
          className="w-[900px] h-[60px] rounded-lg border-none p-1 text-lg mt-1 box-border outline-none !pr-5 mr-1 "
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
