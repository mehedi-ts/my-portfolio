"use client";

import { motion } from "framer-motion";
import { Layout, Cpu, Smartphone, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const coreRules = [
  {
    title: "Clean Frontend UI",
    description: "Crafting semantic interfaces, responsive layouts, and fluid state management using React, Next.js, and Tailwind CSS.",
    icon: Layout,
  },
  {
    title: "Structured API Workflows",
    description: "Architecting modular server routing, efficient middlewares, and secure endpoints with Node.js and Express.",
    icon: Cpu,
  },
  {
    title: "Safe Database Systems",
    description: "Designing reliable NoSQL collections, optimized MongoDB schemas, and efficient query pipelines for high-performance data handling.",
    icon: Smartphone,
  },
];

export default function AboutContent() {
  return (
    <main className="flex flex-col min-h-screen relative overflow-x-clip bg-bg-main selection:bg-primary/30 selection:text-primary pt-32 pb-16 md:pt-40 md:pb-24">
      
      {/* Contextual Background Animation: Morphing Gradient Blobs */}
      <motion.div
        className="fixed top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary rounded-full blur-[120px] pointer-events-none -z-10"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 30, -30, 0],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="fixed bottom-1/4 right-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-orange-400 dark:bg-orange-200 rounded-full blur-[140px] pointer-events-none -z-10"
        animate={{
          x: [0, -60, 40, 0],
          y: [0, -40, 50, 0],
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Visual Side: Premium Profile Frame (Sticky) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex lg:col-span-5 w-full items-start justify-center relative mt-6 lg:mt-0 lg:sticky lg:top-32 order-1 lg:order-none"
          >
            {/* Outer Bento Frame */}
            <div className="w-[280px] h-[360px] lg:w-[320px] lg:h-[400px] rounded-[2rem] p-1 bg-gradient-to-tr from-secondary/40 via-primary/30 to-amber-500/20 shadow-xl flex items-center justify-center overflow-hidden group">
              <div className="w-full h-full rounded-[1.8rem] bg-bg-main relative flex flex-col items-center justify-center overflow-hidden">
                {/* Micro dotted grid layer inside Card */}
                <div className="absolute inset-0 bg-[radial-gradient(var(--grid-dots)_1px,transparent_1px)] bg-[size:16px_16px] opacity-60" />

                {/* Portrait Image */}
                <img
                  src="https://i.ibb.co.com/JRD8yNmp/2b80a376-cf15-493a-861b-e726fbd007e9.png"
                  alt="Mehedi Hasan"
                  className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle Inner Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-main/30 to-transparent z-15" />
                
                {/* Badges from original AboutContent */}
                <div className="absolute top-5 left-5 border border-border-main bg-bg-card/85 backdrop-blur-md rounded-xl p-3 flex items-center gap-3 z-20 whitespace-nowrap">
                  <span className="text-[10px] font-black uppercase tracking-widest text-text-main flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                    Clean Coder
                  </span>
                  <span className="text-[10px] font-mono text-secondary font-bold">MERN stack</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Narrative Copywriting Area */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              staggerChildren: 0.1,
            }}
            className="lg:col-span-7 space-y-12 text-left order-2 lg:order-none"
          >
            {/* Header section with back button */}
            <div className="space-y-6">
              <Link 
                href="/" 
                className="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors"
              >
                <ArrowLeft size={16} />
                <span>Back to Home</span>
              </Link>

              <div className="space-y-4">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary block">
                  About Me
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-main leading-[1.1] tracking-tight">
                  Building modern, <br className="hidden md:block"/> user-focused <span className="text-gradient">web applications.</span>
                </h1>
              </div>
            </div>

            <div className="space-y-10 text-sm md:text-base text-text-muted leading-relaxed">
              
              {/* My Journey */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-black text-text-main uppercase tracking-wide">
                  My Journey
                </h2>
                <p>
                  My programming journey began in 2023, driven by a deep curiosity to understand how the modern web operates beneath the surface. That initial interest quickly evolved into a dedicated career path. After building a solid foundation through the Programming Hero Web Development Bootcamp, I focused on accelerating my growth by tackling complex, real-world projects. Through consistent, daily coding, I have developed a strong practical command of the MERN stack—working extensively with JavaScript, React.js, Next.js, Node.js, Express.js, and MongoDB.
                </p>
              </div>

              {/* How I Work */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-black text-text-main uppercase tracking-wide">
                  How I Work
                </h2>
                <p>
                  I specialize in architecting responsive, accessible, and highly scalable web applications that solve practical, real-world problems. Whether I am crafting intuitive frontend user interfaces or engineering robust backend APIs, my focus is always on writing clean, reusable, and easily maintainable code. I treat every development cycle as a chance to refine my approach, adopt modern best practices, and deliver a seamless, frustration-free experience for end users.
                </p>
              </div>

              {/* Core Stack Highlights */}
              <div className="space-y-4 pt-2">
                {coreRules.map((rule, idx) => (
                  <motion.div
                    key={rule.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex space-x-4 p-4 md:p-6 rounded-2xl bg-bg-card border border-border-main hover:border-primary/50 hover:bg-bg-card/85 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group cursor-default"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 flex-shrink-0">
                      <rule.icon size={20} />
                    </div>
                    <div className="flex-1 space-y-1.5">
                      <h4 className="text-xs md:text-sm font-black text-text-main uppercase tracking-wider">
                        {rule.title}
                      </h4>
                      <p className="text-[11.5px] md:text-xs text-text-muted leading-relaxed">
                        {rule.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Beyond Coding */}
              <div className="space-y-4 pt-6">
                <h2 className="text-xl md:text-2xl font-black text-text-main uppercase tracking-wide">
                  Beyond Coding
                </h2>
                <p>
                  Beyond the code editor, I enjoy staying engaged with the tech community by reading industry blogs and writing technical articles. When I step away from the screen, you'll usually find me following football or exploring emerging development tools just for fun. This natural curiosity fuels a disciplined, growth-minded approach to my work. Ultimately, my goal is to collaborate with experienced teams to build meaningful products while growing into a highly skilled Full-Stack Software Engineer.
                </p>
              </div>

              {/* Highlight Pull-Quote Block */}
              <div className="border-l-4 border-primary bg-primary/5 p-6 md:p-8 rounded-r-2xl my-10 shadow-sm shadow-primary/5">
                <p className="text-text-main font-semibold italic md:text-lg leading-relaxed">
                  &quot;I believe that writing exceptional software requires consistency, continuous learning, and thoughtful collaboration. Great products are built through discipline, a sharp attention to detail, and a relentless drive to solve complex problems.&quot;
                </p>
              </div>

            </div>

            {/* CTA Button to Contact Page */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-6 pb-12"
            >
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 group px-8 py-4 glow-button hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] text-xs md:text-sm uppercase tracking-widest font-black transition-all duration-300"
              >
                <span>Start a Conversation</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </main>
  );
}
