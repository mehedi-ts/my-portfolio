import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Github, Linkedin, Twitter, Instagram, Facebook } from "@/components/BrandIcons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative overflow-hidden bg-bg-main selection:bg-primary selection:text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      
      <Footer />
    </main>
  );
}
