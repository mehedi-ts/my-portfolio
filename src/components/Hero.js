"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, PerspectiveCamera, OrbitControls, Sphere } from "@react-three/drei";
import { useEffect, useState, useRef } from "react";
import { ArrowRight, Download } from "lucide-react";
import { Github, Linkedin, Twitter, Instagram } from "./BrandIcons";
import { useTheme } from "next-themes";

const roles = [
  "Web Developer",
  "Frontend Developer",
  "Backend Developer",
  "UI Structure Designer",
  "Problem Solver",
  "System Architecture Enthusiast",
];

function AnimatedOrb() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 100]} scale={2.4}>
        <MeshDistortMaterial
          color={isDark ? "#6366f1" : "#4f46e5"}
          speed={3}
          distort={0.4}
          radius={1}
          metalness={0.5}
          roughness={0.2}
          emissive={isDark ? "#6366f1" : "#ffffff"}
          emissiveIntensity={isDark ? 0.5 : 0.2}
        />
      </Sphere>
    </Float>
  );
}

function Scene() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <ambientLight intensity={isDark ? 0.4 : 1} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#6366f1" />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#a855f7" />
      
      <AnimatedOrb />

      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Content Area */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10 z-10 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <div className="space-y-4">
              <motion.span 
                variants={itemVariants}
                className="text-primary font-black uppercase tracking-[0.3em] text-[10px] md:text-xs"
              >
                Welcome to my world
              </motion.span>
              <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-7xl font-black text-text-main leading-none tracking-tight max-w-[10ch] lg:max-w-none"
              >
                Hi, I'm <span className="text-primary">Mehedi</span>
              </motion.h1>
              
              <motion.div variants={itemVariants} className="h-10 md:h-12 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={roles[roleIndex]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className="text-xl md:text-3xl font-bold text-text-muted italic"
                  >
                    {roles[roleIndex]}
                  </motion.p>
                </AnimatePresence>
              </motion.div>
            </div>

            <motion.p 
              variants={itemVariants}
              className="max-w-md lg:max-w-lg text-base md:text-lg text-text-muted leading-relaxed"
            >
              Building high-performance digital products that bridge the gap 
              between complex logic and intuitive user experience.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 pt-4 w-full sm:w-auto">
              <a 
                href="/resume.pdf" 
                download
                className="px-8 py-5 md:py-4 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:shadow-[0_0_60px_rgba(99,102,241,0.7)] hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-3 group"
              >
                <Download size={18} className="group-hover:animate-bounce" />
                <span>Download CV</span>
              </a>
              <button 
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-5 md:py-4 glass-card border-border-main/50 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-bg-card hover:border-primary/50 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:-translate-y-1 active:scale-95"
              >
                View Projects
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center space-x-8 lg:space-x-6 pt-6 lg:pt-4">
              <a href="#" className="text-text-muted hover:text-primary transition-colors hover:scale-125 transition-transform"><Github size={20} /></a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors hover:scale-125 transition-transform"><Linkedin size={20} /></a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors hover:scale-125 transition-transform"><Twitter size={20} /></a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors hover:scale-125 transition-transform"><Instagram size={20} /></a>
            </motion.div>
          </motion.div>

          {/* Right Side: 3D Visual - Hidden on Mobile */}
          <div className="relative h-[400px] md:h-[700px] w-full hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full w-full"
            >
              <Canvas shadows dpr={[1, 1.5]}>
                <Scene />
              </Canvas>
            </motion.div>
            
            {/* Soft Glow Behind Orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-primary/10 rounded-full blur-[80px] md:blur-[100px] -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}



