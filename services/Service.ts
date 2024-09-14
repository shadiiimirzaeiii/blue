import slider from '../public/image/slider.png'
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
    image: "/path/to/image1.jpg",
    title: "کانتینر های اداره ثبت",
    priceLabel: "قیمت اجاره یک روز",
    price: "1,0000,000",
  },
  {
    id: 2,
    image: "/path/to/image1.jpg",
    title: "کانتینر های اداره ثبت",
    priceLabel: "قیمت اجاره یک روز",
    price: "1,0000,000",
  },
  {
    id: 3,
    image: "/path/to/image1.jpg",
    title: "کانتینر های اداره ثبت",
    priceLabel: "قیمت اجاره یک روز",
    price: "1,0000,000",
  },
  {
    id: 4,
    image: "/path/to/image1.jpg",
    title: "کانتینر های اداره ثبت",
    priceLabel: "قیمت اجاره یک روز",
    price: "1,0000,000",
  },
  {
    id: 5,
    image: "/path/to/image1.jpg",
    title: "کانتینر های اداره ثبت",
    priceLabel: "قیمت اجاره یک روز",
    price: "1,0000,000",
  },
];

export async function fetchCards(page: number): Promise<Cards[]> {
  const itemsPerPage = 5;
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  return mockCards.slice(start, end);
}

// // for advanced search navbar
// export async function sendSearchInputToService(
//   inputValue: string
// ): Promise<void> {
//   console.log("from front", inputValue);
//   return new Promise((resolve) => setTimeout(() => resolve(), 1000));
// }


// export const fetchSampleImages = async (): Promise<string[]> => {
//   // Sample image URLs directly
//   return [
//     '../public/image/slider.pngimport ',
//     '/images/sample2.jpg',
//     '/images/sample3.jpg',
//     '/images/sample4.jpg',
//     '/images/sample5.jpg',
//     '/images/sample6.jpg',
//     '/images/sample7.jpg',
//     '/images/sample8.jpg',
//     '/images/sample9.jpg',
//     '/images/sample10.jpg',
//   ];
// };
