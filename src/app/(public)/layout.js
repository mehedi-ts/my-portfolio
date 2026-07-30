import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import BackgroundElements from "@/components/BackgroundElements";
import PageTransition from "@/components/PageTransition";
import BackToTop from "@/components/BackToTop";

export default function PublicLayout({ children }) {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <BackgroundElements />
      <PageTransition>
        {children}
      </PageTransition>
      <BackToTop />
    </SmoothScroll>
  );
}
