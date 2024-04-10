import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Joshi Tour and Travels",
  description:
    "Discover Mukteshwar, Uttarakhand with Joshi Tour and Travels. Your gateway to adventure, serenity, and unforgettable experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
