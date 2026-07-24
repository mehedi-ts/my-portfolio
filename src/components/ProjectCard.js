"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Eye, X, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

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
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className={`group relative flex flex-col h-full bg-bg-card border border-border-main rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/40 ${
          isFeatured ? "md:col-span-2" : ""
        }`}
      >
        {/* Immersive Image Area */}
        <div className={`relative w-full ${isFeatured ? 'aspect-[16/8]' : 'aspect-[16/10]'} overflow-hidden bg-bg-main shrink-0`}>
          {project.image && !imageError ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-text-muted bg-[#050508]">
              <span className="text-xs uppercase tracking-widest">{project.title}</span>
            </div>
          )}

          {/* Category Pill */}
          <div className="absolute top-4 left-4 z-20 flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-bg-main/90 backdrop-blur-md border border-border-main shadow-sm text-[8px] font-black uppercase tracking-widest text-primary">
            {project.category}
          </div>

          {/* Live Preview Button (Overlay on hover) */}
          {project.liveUrl && (
            <div className="absolute inset-0 bg-bg-main/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsModalOpen(true);
                }}
                className="flex items-center gap-2 px-5 py-2.5 bg-bg-card/90 backdrop-blur-sm border border-border-main rounded-full text-text-main text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 transform scale-95 group-hover:scale-100 shadow-xl"
              >
                <Eye size={14} />
                <span>Live Preview</span>
              </button>
            </div>
          )}
        </div>

        {/* Content Block */}
        <div className="flex flex-col flex-grow p-6 relative z-20">
          <h3 className="text-xl font-black text-text-main mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-xs text-text-muted leading-relaxed mb-6 flex-grow line-clamp-1">
            {project.shortDesc}
          </p>

          {/* Icon-only Tech Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techIcons?.map((tech) => (
              <div
                key={tech.name}
                title={tech.name}
                className="w-8 h-8 rounded-full bg-text-main/5 flex items-center justify-center border border-border-main/50"
              >
                <tech.icon className={`w-4 h-4 opacity-80 ${tech.color}`} />
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="mt-auto pt-4 border-t border-border-main">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-text-main hover:text-primary transition-colors duration-300"
            >
              <span>View Project</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
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
                transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full h-full max-w-6xl max-h-[85vh] bg-bg-card border border-border-main rounded-2xl flex flex-col overflow-hidden shadow-2xl relative"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 border-b border-border-main bg-bg-main shrink-0">
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
                    <X size={18} />
                  </button>
                </div>
                
                {/* Modal Body / Iframe */}
                <div className="w-full flex-grow bg-white relative">
                  <iframe
                    src={project.liveUrl}
                    title={`${project.title} Live Preview`}
                    className="w-full h-full absolute inset-0"
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
