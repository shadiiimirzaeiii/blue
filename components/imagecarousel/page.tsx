// components/imagecarousel/page.tsx
'use client';
import { Carousel } from 'react-bootstrap';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

interface ImageCarouselProps {
  images: StaticImageData[]; // Use StaticImageData for images
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative">
      <Carousel
        activeIndex={activeIndex}
        onSelect={(index) => setActiveIndex(index)}
        indicators={false}
      >
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <div className="relative w-full h-[500px] rounded-lg">
              <Image
                src={image}
                alt={`Slide ${index}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="absolute bottom-4 inset-x-0 flex justify-center space-x-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`w-3 h-3 m-2 rounded-full ${activeIndex === index ? 'bg-[#EF550A]' : 'bg-[#EF550A66]'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
