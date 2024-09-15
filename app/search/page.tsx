"use client";

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SearchCard from "../../components/searchcard/page";
import { fetchCards } from "../../services/Service";
import searchCardImage from "../../public/image/searchcard.png";
import SearchNavbar from "../../components/advancedsearchnavbar/page";
import MapCircle from "../../components/circlemap/page";
import { LatLngTuple } from "leaflet";
import { useSearchParams } from "next/navigation";

interface Ticket {
  id: number;
  image: any;
  title: string;
  priceLabel: string;
  price: string;
}

const points: LatLngTuple[] = [
  [37.7749, -122.4194],
  [37.7749, -122.4184],
  [37.7739, -122.4184],
  [37.7739, -122.4194],
];

const AdvancedSearch: React.FC = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  
  const [cards, setCards] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadCards = async () => {
    setLoading(true);

    try {
      const data = await fetchCards(1);
      setCards(data.slice(0, 5));
    } catch (err) {
      setError("Failed to load cards");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCards();
  }, []);

  return (
    <Container className="w-full mx-auto !h-[700px]">
      <Container className="mr-0 pr-0">
        <SearchNavbar initialQuery={query} />
      </Container>
      <div className="flex flex-row mt-2 w-full">
        <div className="col-4 w-[536px] !h-[616px] shadow-left overflow-y-auto overflow-x-hidden">
          <Container className="flex flex-col mb-2 pt-4 ml-1 mr-2">
            <h2 className="text-right">لیست کانتینر های نگهداری</h2>
            <h6 className="text-searchtextcolor pt-2 text-right mt-1">
              با انتخاب دسته بندی مورد نظر خود تجهیز خود را رزرو کنید.
            </h6>
          </Container>
          <Container className="flex flex-col mt-0 !h-[890px]">
            {cards.map((item) => (
              <div key={item.id} className="mb-1">
                <SearchCard
                  image={searchCardImage}
                  title={item.title}
                  priceLabel={item.priceLabel}
                  price={item.price}
                />
              </div>
            ))}
          </Container>
        </div>
        <div className="col-8 mr-4">
          <div className="w-[942px] !h-[616px]">
            <MapCircle points={points} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AdvancedSearch;
