// import Navbar from '../../components/navbar/page';
// import Footer from '../../components/footer/page';
// import { Container } from 'react-bootstrap';
// import ImageCarousel from '@/components/imagecarousel/page';
// import { fetchSampleImages } from '@/services/service';

// // Import sample images if you want to use static imports
// import sample1 from '../public/image/sample1.jpg';
// import sample2 from '../public/image/sample2.jpg';
// // Import other images similarly...

// export default async function Page() {
//   const images = await fetchSampleImages(); // Or use static imports directly

//   return (
//     <div className="h-[1683px] w-full min-w-[1444px] !mx-0 p-0 justify-center">
//       <Navbar />

//       <Container className="flex flex-row mt-28 justify-center">
//         {/* col-8 with ImageCarousel */}
//         <div className="col-8 w-[851px] h-[1092px] border border-red-500">
//           {/* Pass the fetched images to the ImageCarousel */}
//           <ImageCarousel images={images} />
//         </div>

//         {/* col-4 for other content */}
//         <div className="col-4 border border-x-lime-500">col-4</div>
//       </Container>

//       <Footer />
//     </div>
//   );
// }
