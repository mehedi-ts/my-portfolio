"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Terminal,
  Code,
  Cpu,
  Database,
  Blocks,
} from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  const [typewriterText, setTypewriterText] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let i = 0;
    let current = "";
    const text = '"MERN Stack Explorer";';
    
    const timer = setInterval(() => {
      if (i < text.length) {
        current += text.charAt(i);
        setTypewriterText(current);
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex items-center pt-28 pb-16 overflow-hidden select-none"
    >
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes rotate-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-rotate-border {
          animation: rotate-border 10s linear infinite;
        }
      `}</style>

      {/* Animated Particle Background */}
      <ParticleBackground />

      {/* Background radial glows - adapts perfectly to Light/Dark modes */}
      <div className="absolute top-[20%] left-[20%] w-[350px] h-[350px] bg-primary/8 dark:bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse-soft will-change-transform" />
      <div className="absolute bottom-[20%] right-[15%] w-[350px] h-[350px] bg-secondary/8 dark:bg-secondary/4 rounded-full blur-[100px] pointer-events-none -z-10 will-change-transform" />

      <div className="section-container w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side: Copywriting Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8 z-10 text-left flex flex-col items-start"
          >
            {/* Status Pulse Indicator */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2.5 px-3.5 py-2 rounded-full glass border-border-main shadow-inner"
            >
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 will-change-transform"></span>
                <motion.span
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="relative inline-flex rounded-full h-2 w-2 bg-green-500 will-change-transform"
                />
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-text-main">
                Ready for fresh web projects
              </span>
            </motion.div>

            {/* Title Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black text-text-main leading-[1.05] tracking-tight max-w-[15ch] flex flex-wrap gap-x-4">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="will-change-transform"
                >
                  Building
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-gradient font-black will-change-transform"
                >
                  Modern
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="block w-full mt-2 will-change-transform"
                >
                  Web Experiences.
                </motion.span>
              </h1>

              {/* Typewritten MERN Role */}
              <motion.div
                variants={itemVariants}
                className="flex items-center font-mono text-xs md:text-sm bg-bg-card/45 dark:bg-white/3 border border-border-main px-4 py-2 rounded-xl backdrop-blur-md w-fit"
              >
                <Terminal size={14} className="text-primary mr-2.5" />
                <span className="text-text-muted select-none mr-1.5">
                  const developer ={" "}
                </span>
                <div className="flex items-center min-w-[200px]">
                  <span className="text-primary font-bold">
                    {typewriterText}
                  </span>
                  <span className="inline-block w-1.5 h-4 bg-primary ml-1 animate-blink" />
                </div>
              </motion.div>
            </div>

            {/* Authentic MERN Copy */}
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-sm md:text-base text-text-muted leading-relaxed"
            >
              Hi, I&apos;m{" "}
              <strong className="text-text-main font-bold">Mehedi Hasan</strong>
              . I am a passionate full-stack developer specializing in the{" "}
              <strong className="text-text-main font-semibold">
                MERN Stack
              </strong>{" "}
              (React, Next.js, Node.js, MongoDB). I love crafting clean, fast,
              responsive interfaces and writing neat backend workflows that
              bring complex layouts to life.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2"
            >
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="group px-8 py-4 glow-button hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] text-xs uppercase tracking-widest font-black flex items-center justify-center space-x-2 cursor-pointer transition-all duration-300"
              >
                <span>Let&apos;s Connect</span>
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 glass hover:border-primary/30 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer text-text-main will-change-transform"
              >
                <span>Selected Works</span>
              </button>
            </motion.div>

            {/* Social Anchors */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-5 pt-3"
            >
              <a
                href="https://github.com/mehedi-ts"
                className="w-10 h-10 rounded-xl bg-bg-card border border-border-main flex items-center justify-center text-text-muted hover:text-primary transition-all duration-300 hover:scale-105 will-change-transform"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/mehedi-ts"
                className="w-10 h-10 rounded-xl bg-bg-card border border-border-main flex items-center justify-center text-text-muted hover:text-primary transition-all duration-300 hover:scale-105 will-change-transform"
              >
                <Linkedin size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side: Visual Profile Block */}
          <div className="lg:col-span-5 relative h-[450px] lg:h-[520px] w-full flex items-center justify-center mt-8 lg:mt-0">
            {/* Ambient Back Glow Behind Portrait Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-secondary/15 to-transparent rounded-full blur-3xl -z-10 animate-pulse-soft will-change-transform" />

            {/* Profile Frame with animated gradient border and glass back */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[320px] h-[320px] lg:w-[360px] lg:h-[360px] rounded-full p-1.5 shadow-2xl flex items-center justify-center overflow-hidden group will-change-transform"
            >
              {/* Rotating Conic Gradient Border - Pure CSS for Performance */}
              <div
                className="absolute inset-[-50%] opacity-80 animate-rotate-border will-change-transform"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, #f97316 90deg, #fbbf24 180deg, transparent 270deg)",
                }}
              />

              {/* Fallback/Base Border for structural integrity */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-secondary/30 to-amber-500/30 rounded-full" />

              {/* Layered Inner card */}
              <div className="w-full h-full rounded-full bg-bg-main relative flex flex-col items-center justify-center overflow-hidden select-none z-10">
                {/* Dotted Grid Background inside Card */}
                <div className="absolute inset-0 bg-[radial-gradient(var(--grid-dots)_1px,transparent_1px)] bg-[size:16px_16px] opacity-70" />

                {/* Soft glowing ambient orbs inside container */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-xl group-hover:scale-125 transition-transform duration-700 will-change-transform" />
                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-secondary/15 rounded-full blur-xl group-hover:scale-125 transition-transform duration-700 will-change-transform" />

                {/* Portrait Image */}
                <img
                  src="https://i.ibb.co.com/JRD8yNmp/2b80a376-cf15-493a-861b-e726fbd007e9.png"
                  alt="Mehedi Hasan"
                  className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-105 will-change-transform"
                />

                {/* Subtle Inner Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-main/30 to-transparent z-15" />

                {/* Bottom Frame Tech Stack Tag */}
                <div className="absolute bottom-6 border border-border-main bg-bg-card/85 backdrop-blur-md rounded-full px-4 py-2 flex items-center space-x-3.5 z-20">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[8px] font-black uppercase tracking-widest text-text-main">
                      MERN Specialist
                    </span>
                  </div>
                  <span className="text-[8px] font-mono text-primary font-bold">
                    v1.0.0
                  </span>
                </div>
              </div>
            </motion.div>

            {/* FLOATING TECH BADGES - Flattened & Optimized */}
            
            {/* Badge 1: React */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 0 }}
              animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
              transition={{
                opacity: { duration: 0.8, delay: 0.5 },
                x: { duration: 0.8, delay: 0.5 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.3 },
              }}
              whileHover={{ scale: 1.05 }}
              className="absolute top-[8%] left-[2%] md:-left-[5%] z-20 glass rounded-2xl p-3 flex items-center space-x-2 border-border-main shadow-md cursor-pointer select-none will-change-transform"
            >
              <div className="w-6 h-6 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <Code size={13} />
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-text-main hidden sm:inline-block">
                React
              </span>
            </motion.div>

            {/* Badge 2: Next.js */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 0 }}
              animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
              transition={{
                opacity: { duration: 0.8, delay: 0.6 },
                x: { duration: 0.8, delay: 0.6 },
                y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
              }}
              whileHover={{ scale: 1.05 }}
              className="absolute bottom-[10%] right-[2%] md:-right-[5%] z-20 glass rounded-2xl p-3 flex items-center space-x-2 border-border-main shadow-md cursor-pointer select-none will-change-transform"
            >
              <div className="w-6 h-6 rounded-lg bg-text-main/10 flex items-center justify-center text-text-main">
                <Blocks size={13} />
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-text-main hidden sm:inline-block">
                Next.js
              </span>
            </motion.div>

            {/* Badge 3: Node.js */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { duration: 0.8, delay: 0.7 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
              }}
              whileHover={{ scale: 1.05 }}
              className="absolute top-[18%] right-[0%] md:-right-[8%] z-20 glass rounded-2xl p-3 flex items-center space-x-2 border-border-main shadow-md cursor-pointer select-none will-change-transform"
            >
              <div className="w-6 h-6 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                <Cpu size={13} />
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-text-main hidden sm:inline-block">
                Node
              </span>
            </motion.div>

            {/* Badge 4: MongoDB */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{
                opacity: { duration: 0.8, delay: 0.8 },
                y: { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
              }}
              whileHover={{ scale: 1.05 }}
              className="absolute bottom-[6%] left-[0%] md:-left-[8%] z-20 glass rounded-2xl p-3 flex items-center space-x-2 border-border-main shadow-md cursor-pointer select-none will-change-transform"
            >
              <div className="w-6 h-6 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <Database size={13} />
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-text-main hidden sm:inline-block">
                MongoDB
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70 will-change-transform"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 border border-border-main rounded-full flex justify-center p-1"
            >
              <div className="w-1 h-2 bg-text-muted rounded-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
