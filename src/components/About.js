"use client";

import { motion } from "framer-motion";
import { MoveRight, Cpu, Layout, Smartphone } from "lucide-react";
import SectionLabel from "./SectionLabel";



const coreRules = [
  {
    title: "Clean Frontend UI",
    description: "Designing semantic interfaces, smooth hover responses, and fluid CSS states using React, Next.js, and Tailwind.",
    icon: Layout,
  },
  {
    title: "Structured API Workflows",
    description: "Architecting modular server routing, Express middlewares, and secure query operations with Node.js.",
    icon: Cpu,
  },
  {
    title: "Safe Database Systems",
    description: "Structuring reliable NoSQL collections, MongoDB schemas, and index pipelines for fluid record streams.",
    icon: Smartphone,
  },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-32 pt-28 pb-16 md:pt-36 md:pb-20 bg-bg-card/30 overflow-x-clip select-none">
      
      {/* Contextual Background Animation: Morphing Gradient Blobs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary rounded-full blur-[120px] pointer-events-none -z-10"
        animate={{ 
          x: [0, 50, -50, 0],
          y: [0, 30, -30, 0],
          opacity: [0.03, 0.05, 0.03]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-orange-400 dark:bg-orange-200 rounded-full blur-[140px] pointer-events-none -z-10"
        animate={{ 
          x: [0, -60, 40, 0],
          y: [0, -40, 50, 0],
          opacity: [0.02, 0.04, 0.02]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Visual Side: Premium Profile Frame (Sticky) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full flex items-start justify-center relative mt-6 lg:mt-0 lg:sticky lg:top-32"
          >
            {/* Outer Bento Frame */}
            <div className="w-[260px] h-[320px] lg:w-[320px] lg:h-[400px] rounded-[2rem] p-1 bg-gradient-to-tr from-secondary/40 via-primary/30 to-amber-500/20 shadow-xl flex items-center justify-center overflow-hidden group">
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

                {/* Stack highlight badge */}
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
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1 }}
            className="lg:col-span-7 space-y-10 text-left"
          >
            <div className="space-y-4">
              <SectionLabel>About Me</SectionLabel>
              
              <h2 className="text-4xl md:text-5xl font-black text-text-main leading-tight mb-2">
                Turning complex logic into <br className="hidden lg:block" />
                <span className="text-gradient">seamless experiences.</span>
              </h2>
              
              <div className="space-y-6 text-sm md:text-base text-text-muted leading-relaxed">
                <p>
                  I've been passionate about programming since 2023, when curiosity led me to write my first lines of code. What started as an interest quickly grew into a commitment to building modern, user-focused web applications. Since completing the Programming Hero Web Development Bootcamp, I've continued strengthening my skills through hands-on projects, exploring the MERN ecosystem with a strong focus on JavaScript, React.js, Next.js, Node.js, Express.js, and MongoDB.
                </p>
                <p>
                  I enjoy transforming ideas into responsive, intuitive, and scalable digital products. Whether I'm designing clean frontend interfaces, building secure backend APIs, or solving real-world development challenges, I appreciate writing maintainable code and creating seamless user experiences. Every project is an opportunity to improve my problem-solving skills and learn better development practices.
                </p>

                {/* Highlight Pull-Quote Block (Paragraph 4) */}
                <div className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-2xl my-8">
                  <p className="text-text-main font-semibold italic md:text-lg">
                    As a developer, I believe consistency, continuous learning, and attention to detail are the foundations of long-term success. I'm currently looking for opportunities where I can contribute to meaningful projects, collaborate with experienced developers, and continue growing into a skilled Full-Stack Software Engineer.
                  </p>
                </div>

                <hr className="border-border-main my-8" />

                <p>
                  Beyond coding, I enjoy reading technology blogs, writing technical articles, and exploring the latest trends in web development. I also enjoy watching football and spending time learning new tools and technologies that help me grow as a developer. These interests keep me curious, motivated, and continuously improving both my technical and communication skills.
                </p>
              </div>
            </div>

            {/* Core Stack Highlights */}
            <div className="space-y-4 pt-1">
              {coreRules.map((rule, idx) => (
                <motion.div
                  key={rule.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex space-x-4 p-4 rounded-2xl bg-bg-card border border-border-main hover:border-primary/50 hover:bg-bg-card/85 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
                    <rule.icon size={18} />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h4 className="text-xs font-black text-text-main uppercase tracking-wider">{rule.title}</h4>
                    <p className="text-[11.5px] text-text-muted leading-relaxed">{rule.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
