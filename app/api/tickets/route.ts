// // api/tickets/route.ts

// import { NextResponse } from 'next/server';

// const allTickets = [
//   { id: 1, image: '/searchcard.png', title: "Card 1", priceLabel: "Description", price: "100" },
//   { id: 2, image: '/searchcard.png', title: "Card 2", priceLabel: "Description", price: "200" },
//   { id: 3, image: '/searchcard.png', title: "Card 3", priceLabel: "Description", price: "300" },
//   { id: 4, image: '/searchcard.png', title: "Card 4", priceLabel: "Description", price: "400" },
//   { id: 5, image: '/searchcard.png', title: "Card 5", priceLabel: "Description", price: "500" },
//   { id: 6, image: '/searchcard.png', title: "Card 6", priceLabel: "Description", price: "600" },
//   { id: 7, image: '/searchcard.png', title: "Card 7", priceLabel: "Description", price: "700" },
//   { id: 8, image: '/searchcard.png', title: "Card 8", priceLabel: "Description", price: "800" },
//   { id: 9, image: '/searchcard.png', title: "Card 9", priceLabel: "Description", price: "900" },
//   { id: 10, image: '/searchcard.png', title: "Card 10", priceLabel: "Description", price: "1000" },
//   { id: 11, image: '/searchcard.png', title: "Card 11", priceLabel: "Description", price: "1100" },
//   { id: 12, image: '/searchcard.png', title: "Card 12", priceLabel: "Description", price: "1200" },
//   { id: 13, image: '/searchcard.png', title: "Card 13", priceLabel: "Description", price: "1300" },
//   { id: 14, image: '/searchcard.png', title: "Card 14", priceLabel: "Description", price: "1400" },
//   { id: 15, image: '/searchcard.png', title: "Card 15", priceLabel: "Description", price: "1500" },
//   { id: 16, image: '/searchcard.png', title: "Card 16", priceLabel: "Description", price: "1600" }
// ];

// export async function GET(request: Request) {
//   const url = new URL(request.url);
//   const page = parseInt(url.searchParams.get('page') || '1', 10);
//   const pageSize = 4;

//   const startIndex = (page - 1) * pageSize;
//   const endIndex = startIndex + pageSize;
//   const tickets = allTickets.slice(startIndex, endIndex);

//   return NextResponse.json(tickets);
// }
