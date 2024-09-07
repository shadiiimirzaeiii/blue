import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "@next/font/local";
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import NavbarComponent from "../components/navbar/page";
import Footer from '../components/footer/page'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blueline App",
  description: "Blueline App !",
};

const bluelinefont = LocalFont({
    src: [
    {
      path: '../public/fonts/Yekan-Bakh-Regular.ttf' ,
      weight: 'normal',
      style: 'normal',
      
    },
     
  ],
  variable: '--font-custom1',
  display: 'swap', 
});



export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
      <html>
      <body className={`${bluelinefont.variable} min-h-screen flex flex-col`}>
        <NavbarComponent />
        <main className="flex-grow max-w-[1531px] mx-auto w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}