import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Imdb",
  description: "Movie Seatch App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <h1>hello</h1>
      <h1>hello again</h1>
    </html>
  );
}
