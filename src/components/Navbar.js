"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const drawerRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // Accessibility: Focus Trap and Escape Key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        setIsOpen(false);
        hamburgerRef.current?.focus();
        return;
      }

      if (e.key === "Tab" && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Focus drawer on open
  useEffect(() => {
    if (isOpen && drawerRef.current) {
      const focusableElements = drawerRef.current.querySelectorAll(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length > 0) {
        // slightly delay focus to allow animation to start
        setTimeout(() => focusableElements[0].focus(), 50);
      }
    }
  }, [isOpen]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) { // lg breakpoint is 1024px
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  // Framer Motion variants for mobile menu
  const mobileMenuVariants = {
    closed: { x: "100%", transition: { type: "tween", duration: 0.3 } },
    open: { x: 0, transition: { type: "tween", duration: 0.3, staggerChildren: 0.08, delayChildren: 0.1 } },
  };

  const linkVariants = {
    closed: { x: 20, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center w-full pointer-events-none select-none px-4 md:px-6 transition-all duration-300">
      <div
        className={cn(
          "w-full max-w-7xl mx-auto transition-all duration-300 pointer-events-auto relative",
          scrolled ? "mt-4" : "mt-6 md:mt-8"
        )}
      >
        <div
          className={cn(
            "flex w-full items-center justify-between transition-all duration-300 ease-out overflow-hidden",
            scrolled
              ? "rounded-full bg-bg-main/70 backdrop-blur-xl border border-transparent shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-2.5 px-4 md:px-6"
              : "rounded-[2rem] bg-transparent border border-transparent py-4 px-2 md:px-4"
          )}
        >
          {scrolled && (
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transition-opacity duration-300" />
          )}

          {/* Brand Logo */}
          <Link href="/" aria-label="Home" className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg relative z-10 flex items-center">
            <Logo size={scrolled ? "sm" : "md"} className="transition-all duration-300 ease-out hover:scale-105" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center relative z-10 bg-transparent">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-[11px] uppercase tracking-[0.15em] font-black transition-all duration-300 ease-out group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full hover:scale-[1.02]",
                    active ? "text-primary" : "text-text-muted hover:text-text-main"
                  )}
                >
                  <span className="relative z-10">{link.name}</span>
                  {active && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-primary/10 rounded-full z-0"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Theme Toggle & CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3 shrink-0 relative z-10">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-full bg-transparent hover:bg-bg-card/50 text-text-muted hover:text-primary transition-all duration-200 hover:scale-[1.05] active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary flex items-center justify-center min-w-[37px] min-h-[37px]"
              aria-label="Toggle Theme"
            >
              {mounted ? (theme === "dark" ? <Sun size={17} /> : <Moon size={17} />) : <span className="w-[17px] h-[17px] block" />}
            </button>
            <Link
              href="/contact"
              className="rounded-full bg-primary px-6 py-2.5 text-[11px] font-black uppercase tracking-[0.15em] text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:bg-primary/95 hover:scale-[1.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-main"
            >
              Let's Connect
            </Link>
          </div>

          {/* Mobile Navbar Control Center (Theme Toggle + Burger Icon) */}
          <div className="flex lg:hidden items-center space-x-2 pointer-events-auto relative z-10">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 rounded-full bg-transparent text-text-muted hover:text-primary transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:scale-[1.05]"
              aria-label="Toggle Theme"
            >
              {mounted ? (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />) : <span className="w-[18px] h-[18px] block" />}
            </button>
            <button
              ref={hamburgerRef}
              className="relative z-[1001] min-h-[44px] min-w-[44px] flex flex-col items-center justify-center space-y-1.5 p-2 bg-transparent rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:scale-[1.05]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <span className={cn("block w-5 h-0.5 bg-text-main transition-transform duration-300 ease-in-out", isOpen ? "translate-y-2 rotate-45" : "")} />
              <span className={cn("block w-5 h-0.5 bg-text-main transition-opacity duration-300 ease-in-out", isOpen ? "opacity-0" : "")} />
              <span className={cn("block w-5 h-0.5 bg-text-main transition-transform duration-300 ease-in-out", isOpen ? "-translate-y-2 -rotate-45" : "")} />
            </button>
          </div>
        </div>
      </div>

      {/* Redesigned, Bulletproof Mobile Navbar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[999] bg-bg-main/90 backdrop-blur-md pointer-events-auto lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              ref={drawerRef}
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 z-[1000] w-full max-w-[300px] bg-bg-main border-l border-border-main p-6 flex flex-col shadow-2xl pointer-events-auto lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
            >
              <div className="flex items-center justify-between mb-12 mt-4">
                <span className="text-xs font-black uppercase tracking-widest text-primary">
                  Navigation
                </span>
                {/* Burger morphs into X, so we don't need a close button here */}
              </div>

              <div className="flex-1 flex flex-col space-y-2 overflow-y-auto pr-1">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <motion.div key={link.name} variants={linkVariants}>
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center min-h-[44px] text-xl font-bold py-3 px-4 rounded-2xl border border-transparent transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary relative overflow-hidden group hover:scale-[1.02]",
                          active
                            ? "text-primary bg-primary/5"
                            : "text-text-main hover:text-primary hover:bg-bg-card/50"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="relative z-10">{link.name}</span>
                        {active && (
                          <motion.div
                            layoutId="mobileActiveNavIndicator"
                            className="absolute left-0 top-0 bottom-0 w-1 bg-primary z-0 rounded-r-full"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div variants={linkVariants} className="pt-6 border-t border-border-main/50 space-y-6">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full bg-primary flex items-center justify-center min-h-[44px] w-full py-3.5 px-4 text-[11px] font-black uppercase tracking-widest text-white hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:bg-primary/95 hover:scale-[1.02] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-main"
                >
                  Let's Connect
                </Link>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-black uppercase tracking-wider text-text-muted">
                    Stay Connected
                  </span>
                  <div className="flex space-x-3">
                    <a
                      href="https://github.com/mehedi-ts"
                      className="min-h-[44px] min-w-[44px] rounded-full bg-bg-card border border-border-main flex items-center justify-center text-text-muted hover:text-primary transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:scale-[1.05]"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="https://linkedin.com/in/mehedi-ts"
                      className="min-h-[44px] min-w-[44px] rounded-full bg-bg-card border border-border-main flex items-center justify-center text-text-muted hover:text-primary transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:scale-[1.05]"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-xs font-mono text-text-muted text-left">
                  &copy; {new Date().getFullYear()} Mehedi Hasan.
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
