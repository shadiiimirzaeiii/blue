// components/equipment/page.tsx
"use client";
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
import ImageCarousel from "../../components/imagecarousel/page";
import MapCircle from "../../components/circlemap/page";
import { fetchSampleImages, fetchContent } from "@/services/Service"; // Import fetchContent
import { LatLngTuple } from "leaflet";
import Datepicker from '../../components/datepicker/page'
const points: LatLngTuple[] = [
  [37.7749, -122.4194],
  [37.7749, -122.4184],
  [37.7739, -122.4184],
  [37.7739, -122.4194],
];

export default function Equipment() {
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [content, setContent] = useState<{
    title: string;
    description: string;
    tag: string;
  } | null>(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const fetchedImages = await fetchSampleImages();
        setImages(fetchedImages);
      } catch (err) {
        setError("Failed to load images.");
      } finally {
        setLoading(false);
      }
    };

    const loadContent = async () => {
      try {
        const fetchedContent = await fetchContent();
        setContent(fetchedContent);
      } catch (err) {
        setError("Failed to load content.");
      }
    };

    loadImages();
    loadContent();
  }, []);

  return (
    <>
      <Navbar />
      <div className="h-[1292px] mt-28 w-full min-w-[1444px] !mx-0 p-0 flex flex-row justify-center">
        <div className="flex flex-col w-[851px] pr-4">
          <div className="h-[406px]">
            {loading ? (
              <p>درحال بارگذاری...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <ImageCarousel images={images} />
            )}
          </div>

          <div className="w-[820px] h-[112px] mt-28">
            {content ? (
              <>
              <div className="flex flex-row">
                <div className="absolute w-[66px] h-[26px]  rounded-full bg-[#E3ECFC] mr-28 text-center pt-1 pb-2 ">
                  {content.tag}
                </div>
                <h2 className="font-bold text-lg">{content.title}</h2>
                </div>
                <p className="text-right mt-2">{content.description}</p>
              </>
            ) : (
              <p>در حال بارگذاری محتوا...</p>
            )}
          </div>

          <div className="w-[816px] h-[347px] mt-1">
            <h3 className="font-bold text-lg mb-1">نمایش موقعیت از روی نقشه</h3>
            <MapCircle points={points} />
          </div>
        </div>
        <div className="w-[345px] h-[576px] col-4 border border-x-lime-500 mr-4">
          select 
          <Datepicker/>
        </div>
      </div>
      <Footer />
    </>
  );
}
