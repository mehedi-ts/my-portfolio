"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowLeft, Filter, Search } from "lucide-react";
import { Github } from "@/components/BrandIcons";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const allProjects = [
  {
    title: "Aura AI",
    category: "Full Stack",
    description: "Enterprise-grade generative AI platform with real-time orchestration and high-fidelity motion systems.",
    tech: ["Next.js", "OpenAI", "PostgreSQL", "Redis"],
    link: "#",
    github: "#",
  },
  {
    title: "Nexus Dashboard",
    category: "Frontend",
    description: "High-performance real-time analytics dashboard for industrial IoT monitoring and visualization.",
    tech: ["React", "Three.js", "Tailwind", "Socket.io"],
    link: "#",
    github: "#",
  },
  {
    title: "Lumina Agency",
    category: "UI/UX",
    description: "Awwwards-caliber digital agency website featuring complex GSAP scroll interactions and custom shaders.",
    tech: ["GSAP", "Next.js", "Framer", "GLSL"],
    link: "#",
    github: "#",
  },
  {
    title: "Eco-Stream",
    category: "Full Stack",
    description: "Decentralized energy monitoring platform with blockchain-based data verification and real-time streaming.",
    tech: ["Solidity", "Ether.js", "Next.js", "Vercel"],
    link: "#",
    github: "#",
  },
  {
    title: "Quantum Task",
    category: "Frontend",
    description: "Collaborative project management suite with predictive task scheduling and an immersive drag-and-drop UI.",
    tech: ["React", "Firebase", "Tailwind", "Dnd-kit"],
    link: "#",
    github: "#",
  },
];

const categories = ["All", "Frontend", "Full Stack", "UI/UX"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = allProjects.filter(p => 
    filter === "All" || p.category === filter
  );

  return (
    <main className="min-h-screen bg-bg-main pt-32 pb-24">
      <Navbar />
      <div className="section-container">
        {/* Header */}
        <div className="mb-20">
          <Link 
            href="/" 
            className="inline-flex items-center space-x-3 text-text-muted hover:text-primary transition-colors mb-12 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black uppercase tracking-widest">Back to Home</span>
          </Link>
          
          <h1 className="text-5xl md:text-8xl font-black text-text-main tracking-tighter mb-8 leading-none">
            All <span className="text-text-muted italic">Projects.</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-text-muted leading-relaxed">
            An extensive collection of my digital experiments, client work, and 
            open-source contributions. Each project represents a unique challenge solved.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap gap-4 mb-16 items-center">
          <div className="flex items-center space-x-3 mr-8 text-text-muted">
            <Filter size={16} />
            <span className="text-[10px] font-black uppercase tracking-widest">Filter By</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest border transition-all ${
                filter === cat 
                ? "bg-primary text-white border-primary shadow-xl shadow-primary/20" 
                : "bg-bg-card text-text-muted border-border-main hover:border-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card p-8 flex flex-col group"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden bg-bg-card border border-border-main mb-8">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-center justify-center h-full text-text-muted/10 font-black uppercase tracking-[0.4em] text-[10px]">
                    {project.title}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-black text-text-main mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed mb-8 text-sm line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[8px] font-black text-text-muted uppercase tracking-widest px-3 py-1.5 bg-border-main/20 rounded-lg">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-border-main flex items-center justify-between">
                  <a href={project.link} className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-text-main hover:text-primary transition-colors">
                    <ExternalLink size={14} />
                    <span>Live Preview</span>
                  </a>
                  <a href={project.github} className="text-text-muted hover:text-primary transition-colors">
                    <Github size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </main>
  );
}
