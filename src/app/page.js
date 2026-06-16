import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative overflow-hidden bg-bg-main selection:bg-primary/20 selection:text-white">
      {/* Scroll sections */}
      <Hero />
      <About />
      {/* <Services /> */}
      <Skills />
      <Projects />
      <Experience />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </main>
  );
}
