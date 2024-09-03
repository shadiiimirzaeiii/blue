import Image from "next/image";
import landingBanner from "../public/Landing-Banner.png";
import NavbarComponent from "../components/navbar/page";
import style from "./page.module.css";
import SearchBar from "../components/searchbar/page";
import CategoryCard from "../components/categorycard/page";
export default function Home() {
  const categories = [
    {
      title: "کانتینر  ادارای",
      description: "تمام خودروهای کارنت به سیستم ناوبری جی پی اس مجهزند.",
    },
    {
      title: "کانتینر نگهداری",
      description: "تمام خودروها دارای بیمه نامه معتبر می باشند.",
    },
    {
      title: "کانتینر بهداشتی",
      description: "در تمام ساعات شبانه روز و در طول هفته پشتیبان شما هستیم.",
    },
    {
      title: "کانتینر مدولار",
      description: "در تمام ساعات شبانه روز و در طول هفته پشتیبان شما هستیم.",
    },
    {
      title: "کانتینر  ادارای",
      description: "تمام خودروهای کارنت به سیستم ناوبری جی پی اس مجهزند.",
    },
    {
      title: "کانتینر نگهداری",
      description: "تمام خودروها دارای بیمه نامه معتبر می باشند.",
    },
    {
      title: "کانتینر بهداشتی",
      description: "در تمام ساعات شبانه روز و در طول هفته پشتیبان شما هستیم.",
    },
    {
      title: "کانتینر مدولار",
      description: "در تمام ساعات شبانه روز و در طول هفته پشتیبان شما هستیم.",
    },
  ];

  return (
    <div className={style["container-wrapper"]}>
      <NavbarComponent />

      <div className={style["image-container"]}>
        <Image
          src={landingBanner}
          alt="banner"
          layout="responsive"
          className={style["landing-banner"]}
        />
        <h1 className={style["title-dir"]}>
          با انتخاب ما از اجاره تجهیز خود مطمئن شوید!
        </h1>
        <h4 className={style["description-dir"]}>
          بلو لاین آماده ارائه بهترین خدمات در زمینه اجاره تجهیزات صنعتی کارآمد
          و راحت، به شماست.
        </h4>
        <SearchBar />
      </div>
      <h1 className={style["title-category"]}>دسته بندی تجهیزات</h1>
      <h4 className={style["description-category"]}>
        بلو لاین به عنوان یک کمپانی با سابقه درخشان، گستره وسیعی از خدمات
        کاربردی و مفید را به مشتریان خود عرضه می کند.
      </h4>
      <div className={style["category-container"]}>
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            description={category.description}
          />
        ))}
      </div>
    </div>
  );
}
