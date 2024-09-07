import { Button } from "react-bootstrap";
import React from "react";

function SearchBar() {
  return (
    <>
      <div className="absolute top-[55%] left-[10%] w-[1160px] flex flex-row bg-[rgba(182,184,177,0.4)] h-[118px] justify-center p-2 rounded-lg">
        <div className="w-[1118px] bg-white rounded-lg p-1 h-[95px]v pt-2 pb-1">
          <input
            type="text"
            className="w-[900px] h-[80px] rounded-lg border-none p-1 text-lg mt-1  box-border focus:border-none "
            placeholder="شهر رزرو تجهیز خود را جستجو کنید"
          />
          <Button className="h-[60px] w-[173px] bg-mainblue text-white text-lg mt-0 mb-2 pt-0 rounded-lg">
            رزرو کنید
          </Button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
