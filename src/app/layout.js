import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import { Providers } from "@/components/Providers";
import BackgroundElements from "@/components/BackgroundElements";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-jakarta" 
});

export const metadata = {
  title: "Mehedi Hasan | Staff Web Engineer",
  description: "Premium Portfolio of Mehedi Hasan - Staff Full Stack Web Developer & Product Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jakarta.variable} font-sans`} suppressHydrationWarning>
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
