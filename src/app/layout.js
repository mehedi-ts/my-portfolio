import { Plus_Jakarta_Sans, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

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
          {children}
        </Providers>
      </body>
    </html>
  );
}
