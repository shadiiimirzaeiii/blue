import Image from "next/image";
import landingBanner from "../public/Landing-Banner.png";
import NavbarComponent from "../components/navbar/page";
import SearchBar from "../components/searchbar/page";
import CategoryCard from "../components/categorycard/page";
import AboutUs from "../public/aboutus.png";
import { Row, Col, Container } from 'react-bootstrap';
import ContactusForm from "../components/contactusform/page";
import SelectWay from '../components/selectway/page';


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
    <>
      <NavbarComponent />

      <div  className="relative w-full mx-auto">
        <Image
          src={landingBanner}
          alt="banner"
          layout="responsive"
          className="w-full h-auto"
        />
        <h1 className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold text-center p-2 w-3/5">
          با انتخاب ما از اجاره تجهیز خود مطمئن شوید!
        </h1>
        <h4 className="absolute top-[48%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base font-extralight text-center p-2 w-4/5">
          بلو لاین آماده ارائه بهترین خدمات در زمینه اجاره تجهیزات صنعتی کارآمد
          و راحت، به شماست.
        </h4>
        <SearchBar />
      </div>
      <Container>
        <h1  className="text-center text-black text-2xl font-bold mt-8">دسته بندی تجهیزات</h1>
        <h4 className="text-center text-black text-base font-extralight mb-8">
          بلو لاین به عنوان یک کمپانی با سابقه درخشان، گستره وسیعی از خدمات
          کاربردی و مفید را به مشتریان خود عرضه می کند.
        </h4>
        <Row className="mt-8">
          {categories.map((category, index) => (
            <Col key={index} md={3} className="mb-4">
              <CategoryCard
                title={category.title}
                description={category.description}
              />
            </Col>
          ))}
        </Row>
        <Row>
          <h1 className="text-center text-black text-2xl font-bold mt-8">انتخاب با شماست</h1>
          <h4 className="text-center text-black text-base font-extralight mb-8">
            با توجه به نیاز خود وارد داشبورد مورد نظر شوید و از امکانات بلو لاین
            بهره مند شوید.
          </h4>
          <SelectWay/>
        </Row>
        <Row className="text-center text-black text-2xl font-bold mt-12">
          <h1> درباره ما </h1>
          <Row className="flex items-center mt-8">
            <Col md={6}>
              <Image
                src={AboutUs}
                alt="aboutus"
                layout="responsive"
               className="w-full rounded-tl-lg rounded-bl-lg"

              />
            </Col>
            <Col md={6}>
              <p className="p-8 text-base">
                ما یک تیم متخصص و پویا هستیم که به ارائه خدمات اجاره تجهیزات با کیفیت
                و قابل اعتماد، متعهد می باشیم. از مزایای اجاره تجهیزات از ما، ارائه
                قیمت‌های رقابتی و شفاف است. با ارائه خدماتی مانند بیمه کامل، خدمات
                پشتیبانی 24 ساعته و امکان تحویل تجهیز در محل مورد نظر شما، سعی می‌کنیم
                تجربه اجاره تجهیزات را برای شما، بهبود دهیم......
                <br/>
                <a href="#">بیشتر بخوانید</a>
              </p>
            </Col>
          </Row>
        </Row>
        <ContactusForm />
      </Container>
    </>
  );
}
