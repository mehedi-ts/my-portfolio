import { Plus_Jakarta_Sans, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import { Providers } from "@/components/Providers";
import BackgroundElements from "@/components/BackgroundElements";
import PageTransition from "@/components/PageTransition";
import BackToTop from "@/components/BackToTop";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta"
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-signature",
});

export const metadata = {
  title: "Mehedi Hasan | Web Developer",
  description: "Portfolio of Mehedi Hasan | Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jakarta.variable} ${dancingScript.variable} font-sans`} suppressHydrationWarning>
        <Providers>
          <SmoothScroll>
            <CustomCursor />
            <Navbar />
            <BackgroundElements />
            <PageTransition>
              {children}
            </PageTransition>
            <BackToTop />
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
