import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import {Footer, Navbar} from "@/components";

export const metadata: Metadata = {
  title: "Car hub",
  description: "find, book, rent a car —— quick and super easy!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'relative'}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
