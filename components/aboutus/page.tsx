import React from 'react'
import Aboutus from "../../public/aboutus.png";
import Image from "next/image";
import { Row, Col, Container } from 'react-bootstrap';

function AboutUs() {
  return (
    <>
            <div className="text-center text-black text-2xl font-bold mt-12 w-[1160px]">
                             <div className="flex justify-center">
            <div className="w-[208px] border-b-2 border-orange700 flex items-center justify-center p-2 mb-20">
              <h1 className="text-center text-black text-2xl font-bold mt-8">
                      درباره ما 

              </h1>
            </div>
            </div>

          <Row className="flex items-center mt-8">
            <Col md={6}>
              <Image
                src={Aboutus}
                alt="aboutus"
                layout="responsive"
               className="w-full rounded-tl-lg rounded-bl-lg"

              />
            </Col>
            <Col md={6}>
              <p className="p-8 font-thin">
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
          </div>

    </>
  )
}

export default AboutUs