import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import { AppProps } from "next/app";

const inter = Inter({ subsets: ["latin"] });

const bluelinefont = localFont({
  src: [
    {
      path: "../public/fonts/Yekan-Bakh-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-regular",
  display: "swap",
});

const bluelinefontbold = localFont({
  src: [
    {
      path: "../public/fonts/YekanBakh-Fat.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bold",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blueline App",
  description: "Blueline App!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bluelinefont.variable} ${bluelinefontbold.variable}`}
    >
      <body className={`${bluelinefont.className} min-h-screen flex flex-col`}>
        <main className="flex-grow max-w-[1531px] mx-auto w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
