import { StaticImageData } from "next/image";
import slider from "../public/image/slider.png"; // Example import
import slider2 from "../public/image/aboutus.png";
import slider3 from "../public/image/Landing-Banner.png";
import slider4 from "../public/image/searchcard.png";
interface Cards {
  id: number;
  image: StaticImageData; // Update to StaticImageData
  title: string;
  priceLabel: string;
  price: string;
}

const mockCards: Cards[] = [
  {
    id: 1,
    image: slider, 
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

export async function fetchCards(
  page: number,
  query: string = ""
): Promise<Cards[]> {
  const itemsPerPage = 5;
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  // Filter cards based on the query
  const filteredCards = mockCards.filter((card) =>
    card.title.toLowerCase().includes(query.toLowerCase())
  );

  // Return a slice of the filtered cards
  return filteredCards.slice(start, end);
}

export async function sendSearchInputToService(
  searchInput: string
): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Filter mock data based on search input
  const results = mockCards.filter((item) =>
    item.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  console.log("Search results:", results);
}
export async function fetchSampleImages(): Promise<StaticImageData[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        slider3,
        slider4,
        slider2,
        slider,

      ]);
    }, 0);
  });
}
export async function fetchContent(): Promise<{ title: string; description: string; tag: string }> {
  // Simulating an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: "دستگاه شماره 1",
        description: "توضیحات : لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. خدمات ما :",
        tag: " کانتینرها" // Add the tag here
      });
    }, 0); // Simulate a network delay
  });
}