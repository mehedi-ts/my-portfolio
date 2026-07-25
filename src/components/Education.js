"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, Terminal, MapPin } from "lucide-react";
import SectionLabel from "./SectionLabel";

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 md:py-36 relative overflow-hidden bg-bg-main select-none"
    >
      {/* Background soft ambient blur */}
      <div className="absolute top-1/2 right-[5%] w-[400px] h-[400px] bg-primary/4 dark:bg-primary/2 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-soft" />

      <div className="section-container max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl text-left">
          <SectionLabel>MY EDUCATION</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black text-text-main leading-tight mb-4">
            Academic <span className="text-gradient">Background.</span>
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            A foundation in science, followed by self-directed specialization in modern web engineering.
          </p>
        </div>

        {/* Education & Training Cards */}
        <div className="flex flex-col space-y-6 w-full">
          {/* Card 1: Academic Education */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative group w-full"
          >
            <div className="glass-panel p-8 md:p-10 hover:border-primary/40 transition-all duration-300 ease-out relative overflow-hidden flex flex-col sm:flex-row items-start gap-6 border-l-4 border-l-primary rounded-l-md rounded-r-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 bg-gradient-to-br from-bg-card to-primary/5">
              
              <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_15px_rgba(234,88,12,0.4)] transition-all duration-300">
                <GraduationCap size={22} className="transition-transform duration-300" />
              </div>

              <div className="flex-1">
                  <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-1.5">
                      Academic Education
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-black text-text-main leading-tight mb-2">
                      Higher Secondary Certificate (HSC) — Science
                  </h3>
                  
                  <div className="flex flex-wrap items-center text-xs md:text-sm font-semibold text-text-muted gap-y-1">
                      <span className="flex items-center"><MapPin size={14} className="mr-1.5 opacity-70" /> Sonargaon Government College, Narayanganj, Bangladesh</span>
                      <span className="mx-2 opacity-40 hidden sm:inline-block">|</span>
                      <span className="flex items-center mt-1 sm:mt-0"><Calendar size={14} className="mr-1.5 opacity-70" /> 2023</span>
                  </div>
              </div>
              
              {/* Subtle background icon */}
              <div className="absolute -bottom-8 -right-8 text-primary/5 group-hover:text-primary/10 transition-colors duration-500 pointer-events-none">
                <GraduationCap size={140} />
              </div>
            </div>
          </motion.div>

          {/* Section Sub-Header for Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="pt-10 pb-3"
          >
            <SectionLabel>Courses & Certifications</SectionLabel>
          </motion.div>

          {/* Card 2: Professional Training */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative group w-full"
          >
            <div className="glass-panel p-8 md:p-10 hover:border-primary/40 transition-all duration-300 ease-out relative overflow-hidden flex flex-col sm:flex-row items-start gap-6 border-l-4 border-l-primary rounded-l-md rounded-r-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 bg-gradient-to-br from-bg-card to-primary/5">
              
              <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_15px_rgba(234,88,12,0.4)] transition-all duration-300">
                <Terminal size={22} className="transition-transform duration-300" />
              </div>

              <div className="flex-1">
                  <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-1.5">
                      Professional Training
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-black text-text-main leading-tight mb-2">
                      Complete Web Development Course (MERN Stack, Batch 13)
                  </h3>
                  
                  <div className="flex flex-wrap items-center text-xs md:text-sm font-semibold text-text-muted">
                      <span className="flex items-center"><MapPin size={14} className="mr-1.5 opacity-70" /> Programming Hero</span>
                  </div>
              </div>

              {/* Subtle background icon */}
              <div className="absolute -bottom-8 -right-8 text-primary/5 group-hover:text-primary/10 transition-colors duration-500 pointer-events-none">
                <Terminal size={140} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
