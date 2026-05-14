"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Magnetic from "./Magnetic";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      if (pathname === "/") {
        const sections = ["home", "about", "experience", "skills", "projects", "contact"];
        const current = sections.find(section => {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (current) setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isActive = (href) => {
    if (pathname === "/projects" && href === "/projects") return true;
    if (pathname === "/" && href === "/") return activeSection === "home" || activeSection === "";
    if (href.startsWith("/#")) {
      const sectionId = href.split("#")[1];
      return pathname === "/" && activeSection === sectionId;
    }
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-4 md:p-6 pointer-events-none">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "flex w-full max-w-7xl items-center justify-between rounded-[2rem] px-8 py-4 transition-all duration-700 pointer-events-auto",
          scrolled ? "glass shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-3xl border-white/5 py-3" : "bg-transparent"
        )}
      >
        <Link href="/" className="text-xl font-black tracking-tighter text-text-main group flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-sm">M</div>
          <span className="hidden md:block">Hasan</span>
          <span className="text-primary group-hover:scale-150 transition-transform">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden space-x-1 lg:flex items-center">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Magnetic key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-5 py-2 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 hover:text-primary",
                    active ? "text-primary" : "text-text-muted"
                  )}
                >
                  <span className="relative z-10">{link.name}</span>
                  {active && (
                    <motion.div 
                      layoutId="nav-active"
                      className="absolute inset-0 bg-primary/5 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </Magnetic>
            );
          })}
          
          <div className="h-4 w-[1px] bg-border-main/50 mx-6" />

          {/* Theme Toggle & CTA */}
          <div className="flex items-center space-x-6">
            {mounted && (
              <Magnetic>
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2.5 rounded-2xl glass-card text-text-muted hover:text-primary transition-all hover:scale-110 active:scale-95 border-border-main/30"
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </Magnetic>
            )}
            <Magnetic>
              <Link href="/#contact" className="rounded-2xl bg-primary px-8 py-3 text-xs font-black uppercase tracking-widest text-white transition-all hover:scale-105 hover:shadow-[0_10px_30px_rgba(99,102,241,0.4)] active:scale-95">
                Hire Me
              </Link>
            </Magnetic>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="text-text-main lg:hidden p-3 glass-card rounded-2xl pointer-events-auto hover:bg-bg-card transition-colors"
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={24} />
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] lg:hidden"
          >
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-bg-main/80 backdrop-blur-2xl"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Content Container */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-full md:w-[400px] bg-bg-main border-l border-border-main shadow-2xl flex flex-col p-10"
            >
              {/* Top Header inside Menu */}
              <div className="flex items-center justify-between mb-20">
                <div className="text-xl font-black tracking-tighter text-text-main">
                  Menu<span className="text-primary">.</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-3 glass-card rounded-2xl text-text-main hover:bg-bg-card transition-colors"
                  aria-label="Close Menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 flex flex-col space-y-6">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "text-5xl font-black transition-all hover:translate-x-2 block group",
                        isActive(link.href) ? "text-primary" : "text-text-main"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                      <span className="text-primary opacity-0 group-hover:opacity-100 ml-2 transition-opacity">.</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Section: Socials & Theme */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-auto space-y-12"
              >
                <div className="space-y-6">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted">Stay Connected</p>
                  <div className="flex space-x-6">
                    <a href="#" className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-text-muted hover:text-primary transition-colors hover:scale-110 transition-transform"><Github size={20} /></a>
                    <a href="#" className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-text-muted hover:text-primary transition-colors hover:scale-110 transition-transform"><Linkedin size={20} /></a>
                  </div>
                </div>

                <div className="pt-10 border-t border-border-main/50 flex items-center justify-between">
                  {mounted && (
                    <button
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                      className="p-4 rounded-2xl glass-card text-text-main flex items-center space-x-4 flex-1 justify-center mr-4"
                    >
                      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                      <span className="text-[10px] font-black uppercase tracking-widest">Toggle Theme</span>
                    </button>
                  )}
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted">
                    &copy; 2026
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
