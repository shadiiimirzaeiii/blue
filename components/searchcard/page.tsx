import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import Image from "next/image";

interface SearchCardProps {
  image: any;
  title: string;
  priceLabel: string;
  price: string;
}

const SearchCard: React.FC<SearchCardProps> = ({
  image,
  title,
  priceLabel,
  price,
}) => {
  return (
    <Container className="flex !flex-row mb-2">
      <Card className="flex !flex-row h-36 w-[476px]  bg-cardsbg border-none rounded-lg">
        <Image
          src={image}
          alt={title}
          width={144}
          height={144}
          className="w-36 h-36 rounded-tr-lg rounded-br-lg"
        />
        <Card.Body>
          <Card.Title>
            <h2 className="text-lg font-semibold">{title}</h2>
          </Card.Title>
          <div className="flex flex-row">
            <h4 className="flex-1 text-right">{priceLabel}</h4>
            <h4 className="flex-1 text-left text-mainblue text-lg font-bold	">
              {price}تومان
            </h4>
          </div>
          <Button className="bg-mainblue w-full mt-3">درخواست رزرو</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SearchCard;
