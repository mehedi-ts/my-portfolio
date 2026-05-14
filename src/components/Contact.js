"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { Github, Linkedin, Twitter, Instagram } from "./BrandIcons";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="section-container">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-12 gap-16 items-center"
        >
          
          {/* Left Side: Impactful Copy */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <motion.div variants={itemVariants} className="flex items-center space-x-4">
                <span className="text-xs font-black uppercase tracking-[0.5em] text-primary">Get In Touch</span>
                <div className="h-[1px] w-12 bg-primary/30" />
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-4xl md:text-7xl font-black text-text-main leading-none">
                Let's Start a <br className="hidden sm:block" />
                <span className="text-text-muted italic underline decoration-primary/30 underline-offset-8">Conversation.</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg text-text-muted leading-relaxed max-w-md">
                I'm currently available for freelance projects and consulting opportunities. 
                Have a vision in mind? Let's discuss how we can bring it to life.
              </motion.p>
            </div>

            <div className="space-y-8">
              <motion.a variants={itemVariants} href="mailto:hello@mehedihasan.dev" className="flex items-center space-x-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-bg-card border border-border-main flex items-center justify-center text-primary group-hover:border-primary group-hover:scale-110 transition-all shadow-lg">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-text-muted mb-1">Direct Email</h4>
                  <p className="text-base md:text-lg font-black text-text-main group-hover:text-primary transition-colors">hello@mehedihasan.dev</p>
                </div>
              </motion.a>
              
              <motion.div variants={itemVariants} className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-bg-card border border-border-main flex items-center justify-center text-secondary group-hover:border-secondary transition-all shadow-lg">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-text-muted mb-1">Current Location</h4>
                  <p className="text-base md:text-lg font-black text-text-main">Dhaka, Bangladesh</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Professional Form */}
          <div className="lg:col-span-7">
            <motion.div 
              variants={itemVariants}
              className="glass-card p-6 md:p-16 border-border-main/50 relative overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
              
              <form className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-text-muted px-1">Your Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-bg-main border border-border-main rounded-xl px-6 py-4 text-text-main focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-bold"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-text-muted px-1">Email Address</label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-bg-main border border-border-main rounded-xl px-6 py-4 text-text-main focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-bold"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-text-muted px-1">Message</label>
                  <textarea 
                    rows="4"
                    required
                    className="w-full bg-bg-main border border-border-main rounded-xl px-6 py-4 text-text-main focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-bold resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button className="w-full bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-widest shadow-[0_20px_50px_rgba(99,102,241,0.3)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-3 group overflow-hidden relative">
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10">Get in Touch</span>
                  <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}


