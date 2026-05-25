"use client";

import { Menu, X, Sun, Moon } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Optimized links count for desktop to prevent wrapping on smaller monitors
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Testimonials", href: "/#testimonials" },
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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (pathname === "/") {
        const sections = [
          "home",
          "about",
          "services",
          "skills",
          "projects",
          "experience",
          "testimonials",
          "contact",
        ];
        const current = sections.find((section) => {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            return rect.top <= 120 && rect.bottom >= 120;
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
    if (pathname === "/" && href === "/")
      return activeSection === "home" || activeSection === "";
    if (href.startsWith("/#")) {
      const sectionId = href.split("#")[1];
      return pathname === "/" && activeSection === sectionId;
    }
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-4 md:p-6 pointer-events-none select-none">
      {/* Main Bar Wrapper - Static, simple, stable, zero fancy entrance animations */}
      <div
        className={cn(
          "flex w-full max-w-7xl items-center justify-between rounded-[1.5rem] md:rounded-[2rem] px-6 md:px-8 py-3.5 transition-all duration-300 pointer-events-auto",
          scrolled
            ? "glass shadow-lg shadow-black/5 dark:shadow-white/2 border border-border-main backdrop-blur-2xl py-3"
            : "bg-transparent border border-transparent",
        )}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-lg md:text-xl font-extrabold tracking-tighter text-text-main group flex items-center space-x-2"
        >
          <span className="hidden sm:block font-black text-text-main">
            Mehedi Hasan
          </span>
          <span className="text-primary font-black">.</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-200 hover:text-primary",
                  active
                    ? "text-primary bg-primary/5 dark:bg-primary/10"
                    : "text-text-muted",
                )}
              >
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Desktop Theme Toggle & CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-4 shrink-0">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-xl bg-bg-card border border-border-main text-text-muted hover:text-primary transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          )}
          <a
            href="https://drive.google.com/file/d/1H5ixpTDc24xw8bZ3OS8IYQLKMt1a3EpH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-primary px-5 py-2.5 text-[10px] font-black uppercase tracking-widest text-white transition-all duration-200 hover:scale-105 hover:bg-primary/95 text-center whitespace-nowrap shrink-0"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Navbar Control Center (Theme Toggle + Burger Icon) */}
        <div className="flex lg:hidden items-center space-x-3 pointer-events-auto">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-xl bg-bg-card border border-border-main text-text-muted hover:text-primary transition-all duration-200 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
          <button
            className="text-text-main p-2.5 bg-bg-card border border-border-main rounded-xl hover:bg-bg-card/80 transition-colors cursor-pointer"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      {/* Redesigned, Bulletproof Mobile Navbar Overlay (Simple, stable transitions, closes on any backdrop or link click) */}
      <div
        className={cn(
          "fixed inset-0 z-[999] lg:hidden transition-all duration-300 ease-in-out pointer-events-none",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0",
        )}
      >
        {/* Clickable Backdrop Overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-bg-main/80 backdrop-blur-md transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setIsOpen(false)}
        />

        {/* Sliding Menu Side Panel Drawer */}
        <div
          className={cn(
            "absolute top-0 right-0 bottom-0 w-full max-w-[300px] bg-bg-main border-l border-border-main p-6 flex flex-col transition-transform duration-300 ease-out shadow-2xl",
            isOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          {/* Mobile Drawer Header */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-border-main/50">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">
              Navigation
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 border border-border-main rounded-xl text-text-main hover:bg-bg-card transition-colors cursor-pointer"
              aria-label="Close Menu"
            >
              <X size={16} />
            </button>
          </div>

          {/* Links list - closes mobile drawer instantly on click */}
          <div className="flex-1 flex flex-col space-y-3 overflow-y-auto pr-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-xl font-bold py-2 px-3 rounded-xl border border-transparent text-left transition-all",
                    active
                      ? "text-primary bg-primary/5 border-primary/10"
                      : "text-text-main hover:text-primary hover:bg-bg-card/50",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Bottom mobile drawer footer (Theme + CTA + Socials) */}
          <div className="pt-6 border-t border-border-main/50 space-y-6">
            {/* Direct CTA Link inside Mobile Menu */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block w-full py-3.5 rounded-xl bg-primary text-white text-[10px] font-black uppercase tracking-widest text-center shadow-md hover:bg-primary/95 transition-all"
            >
              Download Resume
            </a>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[9px] font-black uppercase tracking-wider text-text-muted">
                Stay Connected
              </span>
              <div className="flex space-x-3">
                <a
                  href="https://github.com/mehedi-ts"
                  className="w-8 h-8 rounded-lg bg-bg-card border border-border-main flex items-center justify-center text-text-muted hover:text-primary transition-all"
                >
                  <Github size={14} />
                </a>
                <a
                  href="https://linkedin.com/in/mehedi-ts"
                  className="w-8 h-8 rounded-lg bg-bg-card border border-border-main flex items-center justify-center text-text-muted hover:text-primary transition-all"
                >
                  <Linkedin size={14} />
                </a>
              </div>
            </div>

            <p className="text-[9px] font-mono text-text-muted text-left">
              &copy; {new Date().getFullYear()} Mehedi Hasan.
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
