"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Eye, X, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Github } from "./BrandIcons";

export default function ProjectCard({ project, index, isFeatured }) {
  const [imageError, setImageError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Trap focus and handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
        className={`group relative flex flex-col h-full bg-gradient-to-b from-bg-card to-primary/[0.02] border border-border-main rounded-2xl md:rounded-[2rem] overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1.5 hover:scale-[1.01] shadow-sm hover:shadow-2xl hover:shadow-primary/20 ${isFeatured ? "md:col-span-2" : ""
          }`}
      >
        {/* Glow Border Effect */}
        <div className="absolute inset-0 rounded-2xl md:rounded-[2rem] border-2 border-transparent group-hover:border-primary/20 transition-colors duration-500 z-30 pointer-events-none" />

        {/* Immersive Image Area */}
        <div className={`relative w-full ${isFeatured ? 'aspect-[16/8]' : 'aspect-[16/10]'} overflow-hidden bg-bg-main shrink-0`}>
          {project.image && !imageError ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-text-muted bg-[#050508]">
              <span className="text-xs uppercase tracking-widest">{project.title}</span>
            </div>
          )}

          {/* Persistent Dark Gradient Overlay for text readability & depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/60 via-transparent to-transparent pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Category Pill */}
          <div className="absolute top-4 left-4 z-20 flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-bg-main/60 backdrop-blur-md border border-border-main/50 shadow-sm text-[9px] font-black uppercase tracking-widest text-text-main group-hover:text-primary transition-colors duration-300">
            {project.category}
          </div>

          {/* Live Preview Button (Overlay on hover) */}
          {project.liveUrl && (
            <div className="absolute inset-0 bg-bg-main/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsModalOpen(true);
                }}
                className="flex items-center gap-2 px-6 py-3 bg-bg-main/90 backdrop-blur-xl border border-primary/30 rounded-full text-text-main text-[11px] font-black uppercase tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 transform scale-90 group-hover:scale-100 shadow-2xl"
              >
                <Eye size={16} />
                <span>Live Preview</span>
              </button>
            </div>
          )}
        </div>

        {/* Content Block */}
        <div className="flex flex-col flex-grow p-6 md:p-8 relative z-20">
          <h3 className="text-2xl md:text-3xl font-black text-text-main mb-3 tracking-tighter group-hover:text-primary transition-colors duration-500 leading-tight">
            {project.title}
          </h3>

          <p className="text-sm md:text-base text-text-muted leading-relaxed mb-8 flex-grow line-clamp-2">
            {project.shortDesc || project.description}
          </p>

          <div className="mt-auto">
            {/* Divider */}
            <div className="w-full h-px bg-border-main mb-6 group-hover:bg-primary/20 transition-colors duration-500" />

            {/* Icon-only Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techIcons?.map((tech) => (
                <div
                  key={tech.name}
                  title={tech.name}
                  className="w-8 h-8 rounded-full bg-text-main/5 flex items-center justify-center border border-border-main/40"
                >
                  <tech.icon className={`w-4 h-4 opacity-80 ${tech.color}`} />
                </div>
              ))}
            </div>

            {/* Action Button & Quick Links */}
            <div className="flex items-center justify-between pt-1">

              {/* Quick Links Row */}
              <div className="flex items-center gap-2">
                {project.githubClient && (
                  <a
                    href={project.githubClient}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Client Code"
                    className="w-10 h-10 rounded-xl bg-text-main/5 flex items-center justify-center text-text-muted hover:bg-text-main hover:text-bg-main hover:-translate-y-1 transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} />
                  </a>
                )}
                {project.githubServer && (
                  <a
                    href={project.githubServer}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Server Code"
                    className="w-10 h-10 rounded-xl bg-text-main/5 flex items-center justify-center text-text-muted hover:bg-text-main hover:text-bg-main hover:-translate-y-1 transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Demo"
                    className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 ml-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>

              <div className="h-8 w-px bg-border-main mx-4 hidden sm:block" />

              <Link
                href={`/projects/${project.slug}`}
                className="group/cta inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-text-main hover:text-primary transition-colors duration-300 py-2"
              >
                <span>View Project</span>
                <ArrowRight size={16} className="group-hover/cta:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Live Preview Modal (Portal to body) */}
      {mounted && createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-bg-main/80 backdrop-blur-md"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full h-full max-w-6xl max-h-[85vh] bg-bg-card border border-border-main rounded-2xl md:rounded-[2rem] flex flex-col overflow-hidden shadow-2xl relative"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-5 md:p-6 border-b border-border-main bg-bg-main shrink-0">
                  <div className="flex items-center gap-4">
                    <h3 className="text-sm font-black text-text-main">{project.title} — Live Preview</h3>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hidden sm:flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-primary hover:text-orange-400 transition-colors"
                    >
                      <span>Open in New Tab</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 text-text-muted hover:text-text-main hover:bg-text-main/10 rounded-full transition-colors"
                    aria-label="Close preview"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Modal Body / Iframe */}
                <div className="w-full flex-grow bg-white relative">
                  <iframe
                    src={project.liveUrl}
                    title={`${project.title} Live Preview`}
                    className="w-full h-full absolute inset-0 border-none"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
