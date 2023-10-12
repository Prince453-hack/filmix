import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FilMix",
  description: "Movie Search App",
};

export default function RootLayout({ children }) {
  const currentYear = new Date().getFullYear();
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />
          {children}

          <p className=" text-center py-10 text-sm text-gray-400">
            © {currentYear} Filmix. All rights reserved.
          </p>
        </Providers>
      </body>
    </html>
  );
}
