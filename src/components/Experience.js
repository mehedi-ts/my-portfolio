"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "Tech Innovators",
    role: "Senior Full Stack Developer",
    period: "2023 - Present",
    description: "Lead developer for large-scale enterprise applications, focusing on architectural scalability and performance optimization. Implementing advanced React patterns and high-performance backends.",
  },
  {
    company: "Creative Solutions",
    role: "Frontend Specialist",
    period: "2021 - 2023",
    description: "Specialized in building high-fidelity user interfaces with complex animations and real-time interactions. Optimized core web vitals and reduced bundle sizes by 40%.",
  },
  {
    company: "StartUp Hub",
    role: "Junior Web Developer",
    period: "2019 - 2021",
    description: "Developed and maintained various client websites. Mastered the fundamentals of modern web development and team collaboration.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      <div className="section-container">
        <div className="mb-24">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-xs font-black uppercase tracking-[0.5em] text-primary">My Journey</span>
            <div className="h-[1px] w-12 bg-primary/30" />
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-text-main leading-tight">
            Professional <br className="hidden sm:block" />
            <span className="text-text-muted italic underline decoration-primary/30 underline-offset-8">Trajectory.</span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line Connector - Subtler */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/30 via-secondary/20 to-transparent -translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row items-center md:justify-between group"
              >
                {/* Timeline Dot - Refined */}
                <div className="absolute left-0 md:left-1/2 top-8 md:top-10 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-bg-main border-2 border-primary z-10 group-hover:scale-125 transition-transform" />

                {/* Content Box */}
                <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${index % 2 === 0 ? "md:text-right" : "md:order-last md:text-left"}`}>
                  <div className="glass-card p-6 md:p-10 relative overflow-hidden group-hover:border-primary/20 transition-all shadow-sm">
                    <div className={`flex items-center space-x-3 mb-6 ${index % 2 === 0 ? "md:justify-end" : "justify-start"}`}>
                      <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{exp.period}</span>
                    </div>
                    
                    <h3 className="text-2xl font-black text-text-main mb-2 uppercase tracking-tight">{exp.company}</h3>
                    <p className="text-sm font-bold text-text-muted mb-6 uppercase tracking-widest">{exp.role}</p>
                    
                    <p className="text-sm text-text-muted leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                </div>

                {/* Empty Spacer */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

