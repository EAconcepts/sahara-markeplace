import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Topnav from "./(components)/topnav";
import Header from "./(components)/header";
import Footer from "./(components)/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sahara Marketplace",
  description: "Explore a world of taste sensations with African flavors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <Topnav />
          <Header />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
