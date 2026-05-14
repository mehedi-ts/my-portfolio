"use client";

import { motion } from "framer-motion";
import RevealText from "./RevealText";

const stats = [
  { label: "Years in Industry", value: "05+" },
  { label: "Successful Projects", value: "50+" },
  { label: "Global Clients", value: "30+" },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-bg-card border border-border-main relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10" />
              <div className="flex items-center justify-center h-full text-text-muted/10 font-black uppercase tracking-[0.5em] text-2xl select-none">
                Portrait
              </div>
              
              {/* Subtle glass effect overlay */}
              <div className="absolute inset-x-8 bottom-8 p-8 glass border-white/5 rounded-3xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-white">Engineering Excellence</p>
                <p className="text-[10px] text-white/50 mt-1 uppercase tracking-widest">Est. 2019</p>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-text-main leading-tight tracking-tight">
                <RevealText text="Crafting digital products with purpose and precision." />
              </h2>

              <div className="space-y-6 text-lg text-text-muted leading-relaxed font-medium">
                <p>
                  <RevealText text="I am a Frontend Engineer dedicated to creating immersive, accessible, and high-performance digital experiences. My approach combines technical rigor with a deep understanding of user behavior to deliver products that resonate." />
                </p>
                <p>
                  <RevealText text="Over the last 5 years, I've collaborated with international teams to ship production-grade interfaces for startups and established enterprises, ensuring every pixel serves a purpose." />
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border-main/50">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <div className="text-3xl md:text-4xl font-black text-text-main">{stat.value}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-text-muted leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

