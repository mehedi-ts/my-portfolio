"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { Github, Linkedin, Twitter } from "./BrandIcons";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleFormChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-36 relative overflow-hidden bg-bg-main select-none"
    >
      {/* Background Soft Glow - perfectly responsive in Light/Dark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/4 dark:bg-primary/3 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse-soft" />

      <div className="section-container">
        {/* Section Header */}
        <div className="mb-20 max-w-3xl text-left">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">
              Get In Touch
            </span>
            <div className="h-[1px] w-12 bg-primary/30" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-text-main leading-tight">
            Let&apos;s Build Something <br className="hidden sm:block" />
            <span className="text-gradient">Awesome.</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-text-muted leading-relaxed">
            Whether you are looking to hire a full-stack developer, collaborate
            on a React interface, or simply say hi, my inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Side: Contact Form Card */}
          <div className="lg:col-span-7 w-full">
            <div className="glass-panel p-8 md:p-12 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-text-muted block px-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleFormChange}
                          className="w-full bg-bg-card border border-border-main rounded-xl px-5 py-4 text-xs text-text-main placeholder:text-text-muted focus:border-primary/50 outline-none transition-all font-semibold shadow-inner"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-text-muted block px-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleFormChange}
                          className="w-full bg-bg-card border border-border-main rounded-xl px-5 py-4 text-xs text-text-main placeholder:text-text-muted focus:border-primary/50 outline-none transition-all font-semibold shadow-inner"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-muted block px-1">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows="5"
                        required
                        value={formState.message}
                        onChange={handleFormChange}
                        className="w-full bg-bg-card border border-border-main rounded-xl px-5 py-4 text-xs text-text-main placeholder:text-text-muted focus:border-primary/50 outline-none transition-all font-semibold resize-none shadow-inner"
                        placeholder="Tell me about your project, timeline, or just say hello..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full glow-button py-4 text-[10px] font-black uppercase tracking-widest flex items-center justify-center space-x-2.5 cursor-pointer"
                    >
                      <span>Send Message</span>
                      <Send
                        size={12}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 text-center space-y-6 flex flex-col items-center justify-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500">
                      <CheckCircle size={28} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-black text-text-main uppercase">
                        Message Sent
                      </h3>
                      <p className="text-xs text-text-muted max-w-sm mx-auto leading-relaxed">
                        Thank you for reaching out! I will check your message
                        and get back to you within 24 hours.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side: Approachable Channels & Info */}
          <div className="lg:col-span-5 space-y-8 w-full text-left">
            {/* Direct Connect Card */}
            <div className="glass-panel p-8 border-border-main rounded-2xl space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-primary">
                Direct Channels
              </h4>

              <div className="space-y-5">
                <a
                  href="mailto:mehedihasan.j135@gmail.com"
                  className="flex items-center space-x-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-bg-card border border-border-main flex items-center justify-center text-primary group-hover:border-primary/20 group-hover:scale-105 transition-all">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h5 className="text-[8px] font-black text-text-muted uppercase tracking-wider">
                      Email Direct
                    </h5>
                    <p className="text-xs font-bold text-text-main group-hover:text-primary transition-colors">
                      mehedits.dev@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-bg-card border border-border-main flex items-center justify-center text-secondary">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h5 className="text-[8px] font-black text-text-muted uppercase tracking-wider">
                      Base Location
                    </h5>
                    <p className="text-xs font-bold text-text-main">
                      Narayanganj, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Approaching Collaborative Card */}
            <div className="glass-panel p-8 border-border-main rounded-2xl space-y-5 select-none">
              <div className="space-y-1">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-primary">
                  Let&apos;s Connect
                </h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  I am regularly active on my professional networks. Let&apos;s
                  connect, share developer notes, and discuss modern web design!
                </p>
              </div>

              <div className="flex space-x-4 pt-2">
                <a
                  href="https://github.com/mehedi-ts"
                  className="w-10 h-10 rounded-xl bg-bg-card border border-border-main flex items-center justify-center text-text-muted hover:text-primary transition-all duration-300 hover:scale-105"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/mehedi-ts"
                  className="w-10 h-10 rounded-xl bg-bg-card border border-border-main flex items-center justify-center text-text-muted hover:text-primary transition-all duration-300 hover:scale-105"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-bg-card border border-border-main flex items-center justify-center text-text-muted hover:text-primary transition-all duration-300 hover:scale-105"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
