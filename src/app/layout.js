import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import { Providers } from "@/components/Providers";
import BackgroundElements from "@/components/BackgroundElements";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mehedi Hasan | Full Stack Developer",
  description: "Premium Portfolio of Mehedi Hasan - Full Stack Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <SmoothScroll>
            <CustomCursor />
            <Navbar />
            <BackgroundElements />
            {children}
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
