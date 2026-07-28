"use client";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useAnimationFrame,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Code,
  Cpu,
  Database,
  Blocks,
  Download,
} from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import ParticleBackground from "./ParticleBackground";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const frontendLogos = [
  { name: "JavaScript", Icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "React", Icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Next.js", Icon: SiNextdotjs, color: "text-text-main" },
];

const backendLogos = [
  { name: "Node.js", Icon: SiNodedotjs, color: "text-[#339933]" },
  { name: "Express", Icon: SiExpress, color: "text-text-main" },
  { name: "MongoDB", Icon: SiMongodb, color: "text-[#47A248]" },
];
export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Orbit animation state
  const rotation = useMotionValue(0);
  const smoothRotation = useSpring(rotation, {
    stiffness: 40,
    damping: 15,
    mass: 1,
  });

  // Inner orbit rotates clockwise
  const innerRotation = smoothRotation;
  const innerCounterRotation = useTransform(innerRotation, (r) => -r);

  // Outer orbit rotates counter-clockwise
  const outerRotation = useTransform(smoothRotation, (r) => -r);
  const outerCounterRotation = useTransform(outerRotation, (r) => -r);

  const [isHoveringProfile, setIsHoveringProfile] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Orbit setup
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isMobile = window.innerWidth < 768;

    if (!reducedMotion && !isMobile) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShouldAnimate(true);
      const timer = setTimeout(() => {
        rotation.set(360);
      }, 500);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(timer);
      };
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [rotation]);

  useAnimationFrame((t, delta) => {
    if (shouldAnimate && isHoveringProfile) {
      rotation.set(rotation.get() + delta * 0.02);
    }
  });

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
            className="lg:col-span-7 space-y-6 z-10 text-left flex flex-col items-start"
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
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative inline-flex rounded-full h-2 w-2 bg-green-500 will-change-transform"
                />
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-text-main">
                Available for new opportunities
              </span>
            </motion.div>

            {/* Title Headline */}
            <div className="space-y-4">
              {/* Fixed Designation Line */}
              <motion.h2
                variants={itemVariants}
                className="text-sm md:text-base font-black uppercase tracking-[0.25em] text-primary flex items-center space-x-4"
              >
                <span className="w-8 md:w-12 h-[2px] bg-primary"></span>
                <span>WEB DEVELOPER</span>
              </motion.h2>

              <h1 className="text-5xl md:text-7xl font-black text-text-main leading-[1.05] tracking-tight max-w-[15ch] flex flex-wrap gap-x-4">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="will-change-transform"
                >
                  Building Fast &
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-gradient font-black will-change-transform"
                >
                  Scalable
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="block w-full mt-2 will-change-transform"
                >
                  Web Applications.
                </motion.span>
              </h1>
            </div>

            {/* Premium Web Developer Copy */}
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-sm md:text-base text-text-muted leading-relaxed"
            >
              I&apos;m{" "}
              <strong className="text-text-main font-bold">Mehedi Hasan</strong>
              , a Web Developer specializing in{" "}
              <strong className="text-text-main font-semibold">
                Next.js, React, Node.js, Express.js, and MongoDB
              </strong>
              . I build fast, responsive, and scalable web applications with a
              strong focus on performance, clean architecture, and user
              experience.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2"
            >
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="group w-full sm:w-auto px-8 py-4 glow-button hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] text-xs uppercase tracking-widest font-black flex items-center justify-center space-x-2 cursor-pointer transition-all duration-300"
              >
                <span>View Projects</span>
                <Code
                  size={14}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </button>
              <a
                href="/Mehedi Hasan(Web Developer)Resume.pdf"
                download
                className="w-full sm:w-auto px-8 py-4 glass hover:border-primary/30 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer text-text-main will-change-transform"
              >
                <span>Download Resume</span>
                <Download size={14} />
              </a>
            </motion.div>

            {/* Social Anchors */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-5 pt-3"
            >
              <a
                href="https://github.com/mehedi-ts"
                className="w-10 h-10 rounded-xl bg-bg-card border border-border-main flex items-center justify-center text-text-muted hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-105 will-change-transform"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/mehedi-ts"
                className="w-10 h-10 rounded-xl bg-bg-card border border-border-main flex items-center justify-center text-text-muted hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-105 will-change-transform"
              >
                <Linkedin size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side: Visual Profile Block */}
          <div className="lg:col-span-5 relative h-[450px] lg:h-[520px] w-full flex items-center justify-center mt-8 lg:mt-0">
            {/* Ambient Back Glow Behind Portrait Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-secondary/15 to-transparent rounded-full blur-3xl -z-10 animate-pulse-soft will-change-transform" />

            {/* Premium Concentric Orbits */}
            <div className="absolute inset-0 pointer-events-none hidden sm:flex items-center justify-center">
              {/* Inner Orbit (Frontend) */}
              <div className="absolute w-[420px] h-[420px] rounded-full border border-primary/20 dark:border-primary/10" />
              <motion.div
                className="absolute w-[420px] h-[420px]"
                style={{ rotate: innerRotation }}
              >
                {frontendLogos.map((tech, index) => {
                  const angle = (index * 360) / frontendLogos.length;
                  const radius = 210;
                  const x = radius * Math.cos((angle * Math.PI) / 180);
                  const y = radius * Math.sin((angle * Math.PI) / 180);

                  return (
                    <motion.div
                      key={tech.name}
                      className="absolute left-1/2 top-1/2 flex items-center justify-center w-12 h-12 -ml-6 -mt-6 rounded-full glass border border-border-main shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.05)] bg-bg-card/80 backdrop-blur-md"
                      style={{ x, y, rotate: innerCounterRotation }}
                    >
                      <tech.Icon className={`text-xl ${tech.color}`} />
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Outer Orbit (Backend) */}
              <div className="absolute w-[520px] h-[520px] rounded-full border border-primary/20 dark:border-primary/10" />
              <motion.div
                className="absolute w-[520px] h-[520px]"
                style={{ rotate: outerRotation }}
              >
                {backendLogos.map((tech, index) => {
                  const angle = (index * 360) / backendLogos.length;
                  const offsetAngle = angle + 60;
                  const radius = 260;
                  const x = radius * Math.cos((offsetAngle * Math.PI) / 180);
                  const y = radius * Math.sin((offsetAngle * Math.PI) / 180);

                  return (
                    <motion.div
                      key={tech.name}
                      className="absolute left-1/2 top-1/2 flex items-center justify-center w-12 h-12 -ml-6 -mt-6 rounded-full glass border border-border-main shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.05)] bg-bg-card/80 backdrop-blur-md"
                      style={{ x, y, rotate: outerCounterRotation }}
                    >
                      <tech.Icon className={`text-xl ${tech.color}`} />
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Profile Frame with animated gradient border and glass back */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setIsHoveringProfile(true)}
              onMouseLeave={() => setIsHoveringProfile(false)}
              className="relative w-[320px] h-[320px] lg:w-[360px] lg:h-[360px] rounded-full p-1.5 shadow-2xl flex items-center justify-center overflow-hidden group will-change-transform z-10 cursor-pointer"
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
              </div>
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
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
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
