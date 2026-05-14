"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Github } from "./BrandIcons";
import { useState } from "react";

const projects = [
  {
    title: "Aura AI",
    category: "Full Stack",
    description: "Enterprise-grade generative AI platform designed for scalable content orchestration and real-time data processing.",
    tech: ["Next.js", "OpenAI", "PostgreSQL", "Redis"],
    link: "#",
    github: "#",
  },
  {
    title: "Nexus Analytics",
    category: "Frontend",
    description: "High-performance real-time monitoring dashboard providing actionable insights for industrial IoT ecosystems.",
    tech: ["React", "Three.js", "Tailwind", "Socket.io"],
    link: "#",
    github: "#",
  },
  {
    title: "Lumina Agency",
    category: "Design",
    description: "Awwwards-caliber digital agency website featuring complex GSAP scroll interactions and custom shaders.",
    tech: ["GSAP", "Next.js", "Framer", "GLSL"],
    link: "#",
    github: "#",
  },
];

const filters = ["All", "Full Stack", "Frontend", "Design"];

function ProjectCard({ project, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative flex flex-col h-full perspective-1000"
    >
      {/* 3D Content Container */}
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="relative flex flex-col h-full"
      >
        {/* Image Area */}
        <div className="relative aspect-[16/11] overflow-hidden rounded-[3rem] bg-bg-card border border-border-main mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
          
          <div className="flex items-center justify-center h-full text-text-muted/5 font-black uppercase tracking-[0.5em] text-[12px] group-hover:scale-110 transition-transform duration-700 select-none">
            {project.title}
          </div>

          {/* Live Badge */}
          <div className="absolute top-6 right-6 z-20 flex items-center space-x-2 px-3 py-1.5 rounded-full glass border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[8px] font-black uppercase tracking-widest">Live Now</span>
          </div>
          
          {/* Overlay Link */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-8 group-hover:translate-y-0 z-20">
            <a href={project.link} className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
              <ArrowUpRight size={28} />
            </a>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col px-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">
              {project.category}
            </span>
            <div className="flex gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-[9px] font-bold text-text-muted uppercase tracking-widest">
                  {t}
                </span>
              ))}
            </div>
          </div>
          
          <h3 className="text-2xl font-black text-text-main mb-4 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-text-muted leading-relaxed mb-8 text-sm line-clamp-2">
            {project.description}
          </p>
          
          <div className="mt-auto pt-6 border-t border-border-main/50 flex items-center justify-between">
            <a href={project.link} className="text-[10px] font-black uppercase tracking-[0.2em] text-text-main hover:text-primary transition-colors flex items-center gap-2">
              View Project <ExternalLink size={12} />
            </a>
            <a href={project.github} className="text-text-muted hover:text-text-main transition-colors">
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-32 relative">
      <div className="section-container">
        <div className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="text-xs font-black uppercase tracking-[0.5em] text-primary">Selected Works</span>
                <div className="h-[1px] w-12 bg-primary/30" />
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-text-main leading-tight">
                Case Studies & <br />
                <span className="text-text-muted italic underline decoration-primary/30 underline-offset-8">Solutions.</span>
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-4 p-2 glass-card rounded-[2rem] border-border-main/50">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeFilter === f 
                      ? "bg-primary text-white shadow-xl shadow-primary/20" 
                      : "text-text-muted hover:text-text-main"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}


