import "./styles/globals.css";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import localFont from "@next/font/local";
import { Raleway, Inter as FontSans } from "next/font/google";

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
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
