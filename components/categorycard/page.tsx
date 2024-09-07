"use client"; 
import React from "react";
import Card from "react-bootstrap/Card";
import gps from "../../public/gps.png";
import Image from "next/image";

interface CategoryCardProps {
  title: string;
  description: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, description }) => {
  return (
    <Card className="w-[277px] h-[322px] flex flex-col items-center  p-1 rounded-tl-lg bg-white shadow-md mb-4 justify-center">
      <div className="w-[56px] h-[56px] flex items-center justify-center mt-[3%]">
        <Image src={gps} alt="GPS icon" width={56} height={56} />
      </div>
      <Card.Body className="flex flex-col items-center">
        <Card.Title className="w-[190px] text-2xl font-bold text-center mb-2">
          {title}
        </Card.Title>
        <Card.Text className="w-[180px] text-base font-normal text-center text-[#575757] p-2 rounded-md">
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CategoryCard;
