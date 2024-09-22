import Image from "next/image";
import Logo from "../../public/image/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 ">
      <div className="container mx-auto flex flex-wrap  items-start px-4 w-[1300px] ">
        <div className="col-6 w-[580px] mb-6 md:mb-0 text-center md:text-left lg:w-[446px]">
          <Image src={Logo} alt="Logo" width={150} height={60} />
          <p className="mt-4 w-[580px] text-lg text-right leading-10 lg:text-[15px] lg:w-[504px] ">
            ما یک تیم متخصص و پویا هستیم که به ارائه خدمات اجاره تجهیزات با
            کیفیت و قابل اعتماد، متعهد می باشیم. از مزایای اجاره تجهیزات از ما،
            ارائه قیمت‌های رقابتی و شفاف است.
          </p>
        </div>
<div className="col-6 mr-5 flex flex-row">
        <div className="w-[150px] mb-6 mr-12 text-center pr-8">
          <ul className="list-none text-right">
            <li className="mb-2">اجاره تجهیز</li>
            <li className="mb-2 pt-2">درباره ما</li>
            <li className="mb-2 pt-2">تماس با ما</li>
            <li className="mb-2 pt-2">سوالات متداول </li>
          </ul>
        </div>

        <div className="w-[150px] text-right mb-6 mr-7  pr-8">
          <ul className="list-none">
            <li className="mb-2">دسته بندی ها</li>
            <li className="mb-2 pt-2">کانتینر نگهداری</li>
            <li className="mb-2 pt-2">کانتینر دولتی</li>
          </ul>
        </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-6 pt-4 text-center">
        <text>
          کلیه حقوق مادی و معنوی متعلق به سایت بوده و هر گونه کپی برداری پیگرد
          قانونی دارد.
        </text>
      </div>
    </footer>
  );
};

export default Footer;
