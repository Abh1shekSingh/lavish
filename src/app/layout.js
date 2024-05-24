import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lavish Beauty Studio",
  description: "Lavish Beauty Studio is a South Australia based beauty salon buisness, which serve it customer nothing but marvellous services. Meena and Amit Kaur are the owner of the shops.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
