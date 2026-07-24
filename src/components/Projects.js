"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { projects } from "../lib/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  // Sort by date (descending) and take the top 3 latest
  const latestProjects = [...projects]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section id="projects" className="py-24 md:py-36 relative select-none">
      <div className="section-container">
        {/* Header */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 text-left">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">
                  Selected Works
                </span>
                <div className="h-[1px] w-12 bg-primary/30" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-text-main leading-tight">
                Projects That <br className="hidden sm:block" />
                <span className="text-gradient">Speak For Themselves.</span>
              </h2>
            </div>
            
            <div className="hidden md:block">
               <Link
                href="/projects"
                className="px-6 py-3 glass hover:border-primary/30 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-bg-card transition-all duration-300 flex items-center space-x-2 text-text-main group"
              >
                <span>View All Projects</span>
                <ArrowRight size={14} className="text-primary group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {latestProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isFeatured={false} // Clean grid, no spanning on home preview
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 flex justify-center md:hidden">
          <Link
            href="/projects"
            className="w-full px-6 py-4 glass hover:border-primary/30 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-bg-card transition-all duration-300 flex items-center justify-center space-x-2 text-text-main group"
          >
            <span>View All Projects</span>
            <ArrowRight size={14} className="text-primary group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
