import Image from "next/image";
import landingBanner from "../public/image/Landing-Banner.png";
import SearchBar from "../components/searchbar/page";
import CategoryCard from "../components/categorycard/page";
import { Row, Col, Container } from "react-bootstrap";
import ContactusForm from "../components/contactusform/page";
import SelectWay from "../components/selectway/page";
import AboutUs from "../components/aboutus/page";
import NavBar from "../components/navbar/page";
import Footer from "../components/footer/page";
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
      <Container className="w-full min-w-[1444px] mx-0 p-0 justify-center">
        <div className="relative ">
          <Image
            src={landingBanner}
            alt="banner"
            width={1444}
            className="w-full h-auto filter brightness-50 mx-auto"
          />
          <NavBar />
          <h1 className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold text-center p-2 w-3/5 	">
            با انتخاب ما از اجاره تجهیز خود مطمئن شوید!
          </h1>
          <h4 className="absolute top-[46%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base font-extralight text-center p-2 w-4/5">
            بلو لاین آماده ارائه بهترین خدمات در زمینه اجاره تجهیزات صنعتی
            کارآمد و راحت، به شماست.
          </h4>
          <SearchBar />
        </div>

        <Container>
          <div className="flex justify-center">
            <div className="w-[208px] border-b-2 border-orange700 flex items-center justify-center p-2 mb-20">
              <h1 className="text-center text-black text-2xl font-bold mt-8">
                دسته بندی تجهیزات
              </h1>
            </div>
          </div>

          <h4 className="text-center text-black text-base font-extralight mb-8">
            بلو لاین به عنوان یک کمپانی با سابقه درخشان، گستره وسیعی از خدمات
            کاربردی و مفید را به مشتریان خود عرضه می کند.
          </h4>
          <Row className="mt-8 mr-8 ml-8 pr-8">
            {categories.map((category, index) => (
              <Col key={index} className="mb-4 grid-cols-4 gap-2 pr-4">
                <CategoryCard
                  title={category.title}
                  description={category.description}
                />
              </Col>
            ))}
          </Row>
          <Row>
            <div className="flex justify-center">
              <div className="w-[208px] border-b-2 border-orange700 flex items-center justify-center p-2 mb-20">
                <h1 className="text-center text-black text-2xl font-bold mt-8">
                  انتخاب با شماست
                </h1>
              </div>
            </div>
            <h4 className="text-center text-black text-base font-extralight mb-8">
              با توجه به نیاز خود وارد داشبورد مورد نظر شوید و از امکانات بلو
              لاین بهره مند شوید.
            </h4>
            <div className="justify-center row">
              <SelectWay />
            </div>
          </Row>
          <div className="justify-center row">
            <AboutUs />
          </div>
          <ContactusForm />
        </Container>
        <Footer />
      </Container>
    </>
  );
}
