// components/searchcard/page.tsx
import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import Image from "next/image";

interface SearchCardProps {
  image: any; // Use string for image path or URL
  title: string;
  priceLabel: string;
  price: string;
}

const SearchCard: React.FC<SearchCardProps> = ({ image, title, priceLabel, price }) => {
  return (
    <Container className="flex !flex-row mb-2">
      <Card className="flex !flex-row h-36 w-[491px]">
        <Image
          src={image}
          alt={title}
          width={144}
          height={144}
          className="w-36 h-36"
        />
        <Card.Body>
          <Card.Title>
            <h2 className="text-lg font-semibold">{title}</h2>
          </Card.Title>
          <div className="flex flex-row">
            <h4 className="flex-1 text-right">{priceLabel}</h4>
            <h4 className="flex-1 text-left">{price}</h4>
          </div>
          <Button className="bg-mainblue w-full mt-3">درخواست رزرو</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SearchCard;
