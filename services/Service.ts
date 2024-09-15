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
// Mock data for demonstration
const mockData = [
  { id: 1, name: "Example Item 1" },
  { id: 2, name: "Example Item 2" },
  { id: 3, name: "Example Item 3" },
  { id: 4, name: "Example Item 4" },
];

// Function to simulate sending search input to a service
export async function sendSearchInputToService(searchInput: string): Promise<void> {
  // Simulating a delay to mimic network request
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Filtering mock data based on search input
  const results = mockData.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  console.log("Search results:", results);

  // For demonstration purposes, logging the results to the console.
  // In a real application, you might handle results here or return them.
}