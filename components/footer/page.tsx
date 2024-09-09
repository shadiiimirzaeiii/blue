import Image from 'next/image';
import Logo from '../../public/logo.svg'; 

const Footer = () => {
 return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-center items-start px-4 w-[1300px]">
        <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
          <Image src={Logo} alt="Logo" width={150} height={60} />
          <p className="mt-4 w-[580px] text-sm text-right">
            ما یک تیم متخصص و پویا هستیم که به ارائه خدمات اجاره تجهیزات با کیفیت و قابل اعتماد، متعهد می باشیم. از مزایای اجاره تجهیزات از ما، ارائه قیمت‌های رقابتی و شفاف است.
          </p>
        </div>

        <div className="w-[350px] mb-6 mr-12 text-center">
          <ul className="list-none">
            <li className="mb-2">دسته بندی ها</li>
            <li className="mb-2">کانتینر نگهداری</li>
            <li className="mb-2">کانتینر دولتی</li>
          </ul>
        </div>

        <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center">
          <ul className="list-none">
            <li className="mb-2">اجاره تجهیز</li>
            <li className="mb-2">درباره ما</li>
            <li className="mb-2">تماس با ما</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center">
        <p>کلیه حقوق مادی و معنوی متعلق به سایت لە سایت بوده و هرگونه کپی برداری پیگرد قانونی دارد.</p>
      </div>
    </footer>
  );
};

export default Footer;
