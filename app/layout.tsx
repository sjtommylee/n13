"use client";

import "./styles/globals.css";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Raleway, Inter as FontSans } from "next/font/google";
import { RootProvider } from "@/providers";

// const sfPro = localFont({
//   src: "",
//   variable: "--font-sf",
// });

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <head />
        <body className="min-h-screen ">
          <Header />
          <RootProvider>
            <main>{children}</main>
          </RootProvider>
          <Footer />
        </body>
      </html>
    </>
  );
}
