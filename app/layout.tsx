import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import LocalFont from "../libs/font";
import 'bootstrap/dist/css/bootstrap.min.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blueline App",
  description: "Blueline App !",
};

// const bluelinefont =LocalFont({
//   src: "../libs/font"
// })
export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* className={bluelinefont.className} */}
      <body>{children}</body>
    </html>
  );
}
