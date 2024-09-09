// services/ticketService.ts

interface Ticket {
  id: number;
  image: any; // Use string for image path or URL
  title: string;
  priceLabel: string;
  price: string;
}

// Mock data for tickets
const mockTickets: Ticket[] = [
  { id: 1, image: '/path/to/image1.jpg', title: 'کانتینر های اداره ثبت', priceLabel: 'قیمت اجاره یک روز', price: '1,0000,000' },
  { id: 2, image: '/path/to/image1.jpg', title: 'کانتینر های اداره ثبت', priceLabel: 'قیمت اجاره یک روز', price: '1,0000,000' },
  { id: 3, image: '/path/to/image1.jpg', title: 'کانتینر های اداره ثبت', priceLabel: 'قیمت اجاره یک روز', price: '1,0000,000' },
  { id: 4, image: '/path/to/image1.jpg', title: 'کانتینر های اداره ثبت', priceLabel: 'قیمت اجاره یک روز', price: '1,0000,000' },
  { id: 5, image: '/path/to/image1.jpg', title: 'کانتینر های اداره ثبت', priceLabel: 'قیمت اجاره یک روز', price: '1,0000,000' },
  // Add more mock tickets as needed
];

export async function fetchTickets(page: number): Promise<Ticket[]> {
    // Simulate pagination: 4 tickets per page
    const itemsPerPage = 5;
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    // Return a slice of the static mockTickets data
    return mockTickets.slice(start, end);
}
