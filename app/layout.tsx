import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "@next/font/local";
// import LocalFont from "../libs/font";
import 'bootstrap/dist/css/bootstrap.min.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blueline App",
  description: "Blueline App !",
};

const bluelinefont = LocalFont({
  src: '../public/fonts/Yekan-Bakh-Regular.ttf', 
  display: 'swap', 
});



export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={bluelinefont.className}>{children}</body>
    </html>
  );
}
