"use client";

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SearchCard from "../../components/searchcard/page";
import { fetchCards } from "../../services/Service";
import searchCardImage from "../../public/image/searchcard.png";
import SearchNavbar from "../../components/searchnavbar/page";
import MapCircle from "../../components/circlemap/page";
import { LatLngTuple } from "leaflet";
import { useSearchParams } from "next/navigation";
import Searchbox from "../../components/advancedsearchbox/page";

interface Cards {
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

  const [cards, setCards] = useState<Cards[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadCards = async (searchQuery: string) => {
    setLoading(true);

    try {
      const data = await fetchCards(1, searchQuery);
      setCards(data);
    } catch (err) {
      setError("Failed to load cards");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCards(query);
  }, [query]);

  const handleSearchChange = (query: string) => {
    loadCards(query);
  };

  return (
    <Container className="  w-full min-h-screen flex gap-[15px] !mx-0">
      <div className="xlcustom:w-[536px] mt-3 w-[556px] h-[700px] shadow-left overflow-y-auto overflow-x-hidden flex flex-col">
        <Searchbox initialQuery={query} onSearchChange={handleSearchChange} />
        <Container className="flex flex-col mb-2 pt-4 ml-1 mr-2">
          <h2 className="text-right">لیست کانتینر های نگهداری</h2>
          <h6 className="text-searchtextcolor pt-1 text-right mt-1">
            با انتخاب دسته بندی مورد نظر خود تجهیز خود را رزرو کنید.
          </h6>
          <h6 className="pt-4">504 دستگاه مجهز پیدا شد</h6>
        </Container>
        <Container className="flex flex-col mt-0">
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

      <div className="xlcustom:w-[724px] w-[890px] flex flex-col mt-2">
        <div className="mr-0 pr-0 ml-0 sticky top-0 z-10 bg-white">
          <SearchNavbar />
        </div>

        <div className="flex-1 mt-3">
          <MapCircle points={points} />
        </div>
      </div>
    </Container>
  );
};

export default AdvancedSearch;
