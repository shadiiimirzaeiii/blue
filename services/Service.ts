import slider from '../public/image/slider.png';

interface Cards {
  id: number;
  image: any;
  title: string;
  priceLabel: string;
  price: string;
}

const mockCards: Cards[] = [
  {
    id: 1,
    image: slider, // Use the imported image directly
    title: "کانتینر های اداره ثبت",
    priceLabel: "قیمت اجاره یک روز",
    price: "1,0000,000",
  },
  {
    id: 2,
    image: slider,
    title: "بیل های اداره ثبت",
    priceLabel: "قیمت اجاره یک روز",
    price: "1,0000,000",
  },
  {
    id: 3,
    image: slider,
    title: "پنکه های اداره ثبت",
    priceLabel: "قیمت اجاره یک روز",
    price: "1,0000,000",
  },
  {
    id: 4,
    image: slider,
    title: "بالابر های اداره ثبت",
    priceLabel: "قیمت اجاره یک روز",
    price: "1,0000,000",
  },
  {
    id: 5,
    image: slider,
    title: "کانتینر های اداره ثبت",
    priceLabel: "قیمت اجاره یک روز",
    price: "1,0000,000",
  },
];

export async function fetchCards(page: number, query: string = ""): Promise<Cards[]> {
  const itemsPerPage = 5;
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  // Filter cards based on the query
  const filteredCards = mockCards.filter(card =>
    card.title.toLowerCase().includes(query.toLowerCase())
  );

  // Return a slice of the filtered cards
  return filteredCards.slice(start, end);
}
export async function sendSearchInputToService(searchInput: string): Promise<void> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Filter mock data based on search input
  const results = mockCards.filter((item) =>
    item.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  console.log("Search results:", results);
}