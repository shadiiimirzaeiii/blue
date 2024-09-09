// components/advancedsearch/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SearchCard from "../../components/searchcard/page";
import { fetchTickets } from "../../services/ticketService";
import searchCardImage from '../../public/searchcard.png'
interface Ticket {
  id: number;
  image: any; // Use string for image path or URL
  title: string;
  priceLabel: string;
  price: string;
}

const AdvancedSearch: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadTickets = async () => {
    setLoading(true);

    try {
      const data = await fetchTickets(1); // Fetch the first page of tickets
      setTickets(data.slice(0, 5)); // Show only the first 5 tickets
    } catch (err) {
      setError("Failed to load tickets");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTickets();
  }, []);


  return (
    <Container className="max-w-[1394px] mx-auto ">
      <Container className="w-[1393px] h-[74px] border-advancedsearchborder bg-red-500">
        Advanced Search
      </Container>
      <div className="flex flex-row mt-2">
        <div className="col-4 w-[536px] h-[906px] shadow-lg">
          <Container className="flex flex-col mb-2 pt-4 ml-1  mr-2">
            <h2 className="text-right ">لیست کانتینر های نگهداری</h2>
            <h6 className="text-searchtextcolor pt-2 text-right mt-1">
             با انتخاب دسته بندی مورد نظر خود تجهیز خود را رزرو کنید.
            </h6>
          </Container>
          <Container className="flex flex-col mt-0">
            {tickets.map((item) => (
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
        <div className="col-8 w-[846px] h-[906px] mr-2" >
          <div className="h-full border-red-950 bg-zinc-600">
            Other Content Here
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AdvancedSearch;
