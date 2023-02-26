import "./styles/globals.css";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
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
