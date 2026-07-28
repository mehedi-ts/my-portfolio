"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { projects } from "../lib/projects";
import ProjectCard from "./ProjectCard";
import SectionLabel from "./SectionLabel";

export default function Projects() {
  // Sort by date (descending) and take the top 3 latest
  const latestProjects = [...projects]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section
      id="projects"
      className="py-24 md:py-36 relative select-none overflow-hidden bg-gradient-to-b from-orange-500/[0.02] to-purple-500/[0.02]"
    >
      {/* Shimmering Light Sweep Background */}
      <motion.div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none -z-10"
        style={{
          background:
            "linear-gradient(45deg, transparent 40%, rgba(234, 88, 12, 1) 45%, rgba(234, 88, 12, 1) 55%, transparent 60%)",
          backgroundSize: "400% 400%",
        }}
        animate={{
          backgroundPosition: ["0% 100%", "100% 0%"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 text-left">
            <div className="space-y-4">
              <SectionLabel>My Projects</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-black text-text-main leading-tight">
                Projects That <br className="hidden sm:block" />
                <span className="text-gradient">Speak For Themselves.</span>
              </h2>
            </div>

            <div className="hidden md:block">
              <Link
                href="/projects"
                className="px-6 py-3 glass hover:border-primary/30 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-bg-card transition-all duration-300 flex items-center space-x-2 text-text-main group"
              >
                <span>View All Projects</span>
                <ArrowRight
                  size={14}
                  className="text-primary group-hover:translate-x-1 transition-transform"
                />
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
            className="w-full px-6 py-4 glass hover:border-primary/30 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-bg-card transition-all duration-300 flex items-center justify-center space-x-2 text-text-main group"
          >
            <span>View All Projects</span>
            <ArrowRight
              size={14}
              className="text-primary group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
