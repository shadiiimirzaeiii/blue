import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "@next/font/local";
// import LocalFont from "../libs/font";
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { Container } from "react-bootstrap";
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
    <html >
      <body className={`${bluelinefont.variable} max-w-[1531px] mx-auto `}>
        {children}
        </body>
    </html>
  );
}
