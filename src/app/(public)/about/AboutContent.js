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
      <div className="section-container relative z-10 space-y-24 md:space-y-32">
        
        {/* 1. Hero / Intro Area */}
        <section className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8 text-left order-2 lg:order-1"
          >
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
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full flex items-center justify-center relative order-1 lg:order-2"
          >
            {/* Same Image Card from Home */}
            <div className="w-[280px] h-[400px] lg:w-[320px] lg:h-[400px] rounded-[2rem] p-1 bg-gradient-to-tr from-secondary/40 via-primary/30 to-amber-500/20 shadow-xl flex items-center justify-center overflow-hidden group">
              <div className="w-full h-full rounded-[1.8rem] bg-bg-main relative flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(var(--grid-dots)_1px,transparent_1px)] bg-[size:16px_16px] opacity-60" />
                <img
                  src="https://i.ibb.co.com/JRD8yNmp/2b80a376-cf15-493a-861b-e726fbd007e9.png"
                  alt="Mehedi Hasan"
                  className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-main/30 to-transparent z-15" />
                
                {/* Badges */}
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
        </section>

        {/* 2. My Journey (Paragraph 1) */}
        <section className="max-w-3xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-black text-text-main uppercase tracking-wide">
            My <span className="text-gradient">Journey</span>
          </h2>
          <div className="p-6 md:p-10 glass rounded-3xl border-border-main text-base md:text-lg text-text-muted leading-relaxed">
            <p>
              My programming journey began in 2023, driven by a deep curiosity to understand how the modern web operates beneath the surface. That initial interest quickly evolved into a dedicated career path. After building a solid foundation through the Programming Hero Web Development Bootcamp, I focused on accelerating my growth by tackling complex, real-world projects. Through consistent, daily coding, I have developed a strong practical command of the MERN stack—working extensively with JavaScript, React.js, Next.js, Node.js, Express.js, and MongoDB.
            </p>
          </div>
        </section>

        {/* 3. How I Work (Paragraph 2 + Features) */}
        <section className="space-y-10 bg-bg-card/30 rounded-[3rem] p-8 md:p-16 border border-border-main relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />
          
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl md:text-3xl font-black text-text-main uppercase tracking-wide">
              How I <span className="text-gradient">Work</span>
            </h2>
            <p className="text-base md:text-lg text-text-muted leading-relaxed">
              I specialize in architecting responsive, accessible, and highly scalable web applications that solve practical, real-world problems. Whether I am crafting intuitive frontend user interfaces or engineering robust backend APIs, my focus is always on writing clean, reusable, and easily maintainable code. I treat every development cycle as a chance to refine my approach, adopt modern best practices, and deliver a seamless, frustration-free experience for end users.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {coreRules.map((rule, idx) => (
              <motion.div
                key={rule.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col space-y-4 p-6 rounded-2xl bg-bg-main border border-border-main hover:border-primary/50 hover:bg-bg-card/85 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <rule.icon size={20} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-black text-text-main uppercase tracking-wider">{rule.title}</h4>
                  <p className="text-xs text-text-muted leading-relaxed">{rule.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. Beyond Coding (Paragraph 3) */}
        <section className="max-w-3xl ml-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-black text-text-main uppercase tracking-wide text-right">
            Beyond <span className="text-gradient">Coding</span>
          </h2>
          <div className="p-6 md:p-10 bg-primary/5 rounded-3xl border border-primary/20 text-base md:text-lg text-text-muted leading-relaxed text-right">
            <p>
              Beyond the code editor, I enjoy staying engaged with the tech community by reading industry blogs and writing technical articles. When I step away from the screen, you'll usually find me following football or exploring emerging development tools just for fun. This natural curiosity fuels a disciplined, growth-minded approach to my work. Ultimately, my goal is to collaborate with experienced teams to build meaningful products while growing into a highly skilled Full-Stack Software Engineer.
            </p>
          </div>
        </section>

        {/* 5. The Future / Closing Block (Paragraph 4) */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-16 md:py-24 px-6 glass rounded-[3rem] border-border-main relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent -z-10" />
          
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="border-l-4 md:border-l-0 md:border-t-4 border-primary bg-primary/5 p-8 md:p-12 rounded-r-2xl md:rounded-b-3xl md:rounded-tr-none text-left md:text-center mx-auto shadow-lg shadow-primary/5">
              <p className="text-text-main font-semibold italic text-lg md:text-2xl leading-relaxed">
                "I believe that writing exceptional software requires consistency, continuous learning, and thoughtful collaboration. Great products are built through discipline, a sharp attention to detail, and a relentless drive to solve complex problems."
              </p>
            </div>

            <Link href="/contact" className="inline-flex items-center space-x-2 group px-10 py-5 glow-button hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] text-sm uppercase tracking-widest font-black transition-all duration-300">
              <span>Start a Conversation</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.section>

      </div>
    </main>
  );
}
