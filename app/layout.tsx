import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "@next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "leaflet/dist/leaflet.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blueline App",
  description: "Blueline App !",
};

const bluelinefont = LocalFont({
  src: [
    {
      path: "../public/fonts/Yekan-Bakh-Regular.ttf",
      weight: "normal",
      style: "normal",
    },
  ],
  variable: "--font-custom1",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${bluelinefont.className} min-h-screen flex flex-col`}>
        <main className="flex-grow max-w-[1531px] mx-auto w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
