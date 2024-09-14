import React from "react";
import Aboutus from "../../public/image/aboutus.png";
import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";

function AboutUs() {
  return (
    <>
      <div className="text-center text-black text-2xl font-bold mt-12 w-[1160px] mb-0 h-[354px]">
        <div className="flex justify-center">
          <div className="w-[208px] border-b-2 border-orange700 flex items-center justify-center  mb-4">
            <h1 className="text-center text-black text-2xl font-bold mt-8">
              درباره ما
            </h1>
          </div>
        </div>

        <Row className="flex  mt-4 w-[979px] h-[480px] justify-center mr-20">
          <div className="col-6">
            <Image
              src={Aboutus}
              alt="aboutus"
              className="w-full rounded-tl-lg rounded-bl-lg"
            />
          </div>
          <div className="col-6">
            <p className="p-8 font-regular font-extralight text-lg">
              ما یک تیم متخصص و پویا هستیم که به ارائه خدمات اجاره تجهیزات با
              کیفیت و قابل اعتماد، متعهد می باشیم. از مزایای اجاره تجهیزات از
              ما، ارائه قیمت‌های رقابتی و شفاف است. با ارائه خدماتی مانند بیمه
              کامل، خدمات پشتیبانی 24 ساعته و امکان تحویل تجهیز در محل مورد نظر
              شما، سعی می‌کنیم تجربه اجاره تجهیزات را برای شما، بهبود دهیم......
              <br />
              <a href="#">بیشتر بخوانید</a>
            </p>
          </div>
        </Row>
      </div>
    </>
  );
}

export default AboutUs;
