"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { projects } from "../../lib/projects";
import ProjectCard from "../../components/ProjectCard";

const filters = ["All", "Full Stack", "Frontend"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects.sort((a, b) => new Date(b.date) - new Date(a.date))
      : projects
          .filter((p) => p.category === activeFilter)
          .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <main className="min-h-screen bg-bg-main pb-24 pt-12 md:pt-24 selection:bg-primary/30 selection:text-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          <span>Back Home</span>
        </Link>

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 text-left">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">
                  All Projects
                </span>
                <div className="h-[1px] w-12 bg-primary/30" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-text-main leading-tight tracking-tight">
                Explore <span className="text-gradient">My Work.</span>
              </h1>
              <p className="text-text-muted max-w-lg mt-2 text-sm">
                A complete catalog of my recent applications, tools, and digital experiences.
              </p>
            </div>

            {/* Filter Pills with Framer Motion Layout Animation */}
            <div className="flex flex-wrap gap-2 p-1.5 glass border-border-main rounded-2xl w-full md:w-auto select-none relative">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`relative px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors cursor-pointer z-10 ${
                    activeFilter === f ? "text-white" : "text-text-muted hover:text-text-main"
                  }`}
                >
                  {activeFilter === f && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary rounded-xl -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
                isFeatured={false} // Clean equal 3-col grid on listing page
              />
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="w-full py-24 text-center text-text-muted font-bold tracking-widest uppercase text-xs">
            No projects found in this category.
          </div>
        )}
      </div>
    </main>
  );
}
