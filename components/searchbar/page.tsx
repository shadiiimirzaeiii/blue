import { Button } from "react-bootstrap";
import style from "./page.module.css";

import React from "react";

function SearchBar() {
  return (
    <>
      <div className={style["search-container"]}>
        <div className={style["input-container"]}>
          <input
            type="text"
            className={style["search-input"]}
            placeholder=" شهر  رزرو تجهیز خود را جستجو کنید"
          />
          <Button className={style["search-button"]} variant="primary">
            رزرو کنید
          </Button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
