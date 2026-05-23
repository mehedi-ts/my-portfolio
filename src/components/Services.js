"use client";

import { motion } from "framer-motion";
import { Globe, Sparkles, Database, Code, ArrowUpRight, CheckCircle } from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    tag: "React / Next.js / Tailwind",
    description: "Developing fast, responsive, and SEO-friendly single-page and server-rendered web apps. Structuring clean, reusable modular components with absolute visual precision.",
    icon: Globe,
    metrics: "Fluid Responsive Layouts",
    benefits: ["SEO & performance-focused builds", "Clean, reusable React component systems", "Interactive mobile-first designs"],
    glow: "rgba(234, 88, 12, 0.08)", // Orange glow
  },
  {
    title: "RESTful Backend APIs",
    tag: "Node.js / Express",
    description: "Architecting solid server workflows, custom middlewares, secure authentication tokens, and clean JSON endpoints to support frontends with swift responses.",
    icon: Code,
    metrics: "Clean Middleware Structures",
    benefits: ["Custom Express routing patterns", "Secure JWT token auth protocols", "Rigorous request data validation"],
    glow: "rgba(139, 92, 246, 0.08)", // Violet glow
  },
  {
    title: "Database Schemas & Storage",
    tag: "MongoDB / Mongoose",
    description: "Designing efficient NoSQL document schemas, collection indices, and robust queries. Utilizing Mongoose models to safeguard and streamline database connections.",
    icon: Database,
    metrics: "Optimized Mongoose Queries",
    benefits: ["Strict data validation modeling", "Robust CRUD collection pipelines", "Efficient document structuring"],
    glow: "rgba(16, 185, 129, 0.08)", // Emerald glow
  },
  {
    title: "Smooth Interactive Motion",
    tag: "Framer Motion / CSS",
    description: "Designing lightweight transitions, scroll entry reveals, responsive nav overlays, and satisfying hover states that make the web interface an absolute pleasure to navigate.",
    icon: Sparkles,
    metrics: "Lag-Free Micro-interactions",
    benefits: ["Scroll-reveal entry behaviors", "Smooth mobile navigation menus", "Hardware-accelerated CSS filters"],
    glow: "rgba(37, 99, 235, 0.08)", // Blue glow
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-36 relative overflow-hidden bg-bg-card/10 border-y border-border-main select-none">
      {/* Background ambient center blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse-soft" />

      <div className="section-container">
        
        {/* Header Block */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 text-left">
          <div className="space-y-5 max-w-2xl">
            <div className="flex items-center space-x-4">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">Core Competence</span>
              <div className="h-[1px] w-12 bg-primary/30" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-text-main leading-tight">
              Services I <br className="hidden sm:block" />
              <span className="text-gradient">Provide.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-text-muted max-w-md md:mb-2 leading-relaxed">
            Combining technical full-stack MERN competence with frontend visual styling to deliver clean, fast, and extremely functional web products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="glass-panel p-8 md:p-10 relative overflow-hidden flex flex-col justify-between group h-full text-left"
            >
              {/* Radial gradient hover accent */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[80px] -z-20 pointer-events-none"
                style={{ background: `radial-gradient(circle at 10% 10%, ${service.glow}, transparent 55%)` }}
              />

              <div className="space-y-8">
                {/* Top header icons inside card */}
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-bg-card border border-border-main flex items-center justify-center text-primary group-hover:scale-105 group-hover:border-primary/20 transition-all duration-300">
                    <service.icon size={20} />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-text-muted bg-bg-card border border-border-main px-3 py-1.5 rounded-lg select-none">
                    {service.tag}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-black text-text-main tracking-tight uppercase group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Focus indicator bar */}
                <div className="py-3 px-4.5 rounded-xl bg-bg-card border border-border-main flex items-center justify-between select-none">
                  <span className="text-[8px] font-black uppercase tracking-wider text-text-muted">Direct Focus Target</span>
                  <span className="text-[10px] font-black text-text-main tracking-tight uppercase text-gradient">
                    {service.metrics}
                  </span>
                </div>

                {/* Key Benefits */}
                <div className="space-y-2.5 pt-2">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-3 text-xs text-text-main">
                      <CheckCircle size={14} className="text-primary shrink-0" />
                      <span className="text-[11px] font-semibold text-text-muted">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow Accent Visual */}
              <div className="mt-8 pt-6 border-t border-border-main flex justify-end">
                <span className="w-8 h-8 rounded-full border border-border-main flex items-center justify-center text-text-muted group-hover:text-primary group-hover:border-primary/30 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
                  <ArrowUpRight size={13} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
