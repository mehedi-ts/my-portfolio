"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, Loader2, Phone } from "lucide-react";
import { Github, Linkedin, Twitter } from "./BrandIcons";
import { SiFacebook, SiWhatsapp } from "react-icons/si";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFormChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: "", email: "", message: "" });
      }, 2000); // Checkmark + Sent for 2 seconds
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-36 relative select-none overflow-hidden">

      {/* Soft Blurred Gradient Blob Behind the Card */}
      <div className="absolute top-1/2 left-[30%] w-[600px] h-[600px] bg-primary/10 dark:bg-primary/15 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -z-10" />

      <div className="section-container max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">
              Get In Touch
            </span>
            <div className="h-[1px] w-12 bg-primary/30" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-text-main leading-tight">
            Let&apos;s Build Something <span className="text-gradient">Awesome.</span>
          </h2>
        </motion.div>

        {/* Unified Glassmorphism Card Container */}
        <motion.div
          className="rounded-2xl flex flex-col lg:flex-row overflow-hidden transition-all duration-300
                     bg-white/80 backdrop-blur-xl shadow-2xl shadow-orange-900/5 border border-black/5 
                     dark:bg-gray-900/60 dark:backdrop-blur-xl dark:border-white/10 dark:shadow-black/40"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {/* Left Panel: Form (60%) */}
          <div className="w-full lg:w-[60%] p-8 md:p-12 lg:p-16">
            <form onSubmit={handleSubmit} className="space-y-10 flex flex-col h-full justify-between">
              <div className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10 md:gap-8">
                  {/* Name Input */}
                  <div className="space-y-1 group">
                    <label htmlFor="name" className="text-xs uppercase tracking-wide text-gray-500 dark:text-white/50 font-bold block transition-colors duration-200 group-focus-within:text-orange-500">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={handleFormChange}
                      className="w-full bg-transparent border-b border-gray-300 dark:border-white/20 py-2 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/40 focus:border-b-2 focus:border-orange-500 focus:outline-none transition-all duration-200"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1 group">
                    <label htmlFor="email" className="text-xs uppercase tracking-wide text-gray-500 dark:text-white/50 font-bold block transition-colors duration-200 group-focus-within:text-orange-500">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={handleFormChange}
                      className="w-full bg-transparent border-b border-gray-300 dark:border-white/20 py-2 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/40 focus:border-b-2 focus:border-orange-500 focus:outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-1 group">
                  <label htmlFor="message" className="text-xs uppercase tracking-wide text-gray-500 dark:text-white/50 font-bold block transition-colors duration-200 group-focus-within:text-orange-500">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    placeholder="Tell me about your project..."
                    value={formState.message}
                    onChange={handleFormChange}
                    className="w-full bg-transparent border-b border-gray-300 dark:border-white/20 py-2 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/40 focus:border-b-2 focus:border-orange-500 focus:outline-none transition-all duration-200 resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="group relative bg-primary text-white rounded-full px-8 py-4 text-[11px] uppercase tracking-widest font-black shadow-lg shadow-orange-500/30 dark:shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/40 hover:scale-[1.03] transition-all duration-200 flex items-center gap-3 overflow-hidden disabled:opacity-90 disabled:hover:scale-100 disabled:cursor-default"
                >
                  {submitted ? (
                    <span className="flex items-center gap-2">
                      <CheckCircle size={16} /> Sent!
                    </span>
                  ) : isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 size={16} className="animate-spin" /> Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-3">
                      Send Message
                      <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Panel: Contact Info (40%) */}
          <div className="w-full lg:w-[40%] bg-gray-900 dark:bg-black/40 dark:border-l dark:border-white/10 p-8 md:p-12 lg:p-16 text-white relative overflow-hidden flex flex-col justify-between transition-colors duration-300">
            {/* Geometric Pattern Overlay for Texture */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}
            />

            <div className="relative z-10 space-y-12">
              <div>
                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-primary mb-8">
                  Contact Info
                </h3>

                <div className="space-y-8">
                  {/* Email Row - With pulsing accent glow */}
                  <div className="flex items-center gap-5 group cursor-pointer">
                    <div className="relative">
                      {/* Pulse accent behind icon */}
                      <div className="absolute inset-0 bg-primary/40 rounded-full blur-md animate-pulse"></div>
                      <div className="relative w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-lg shadow-orange-500/40 transition-transform duration-300 ease-out group-hover:-rotate-[8deg] group-hover:scale-110">
                        <Mail size={16} />
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">
                        Email
                      </p>
                      <a href="mailto:mehedits.dev@gmail.com" className="text-sm font-medium text-gray-100 hover:text-white transition-colors block">
                        mehedits.dev@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone/WhatsApp Row */}
                  <div className="flex items-center gap-5 group cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-lg shadow-orange-500/40 transition-transform duration-300 ease-out group-hover:-rotate-[8deg] group-hover:scale-110">
                      <Phone size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">
                        Phone / WhatsApp
                      </p>
                      <a
                        href="https://wa.me/8801XXXXXXXXX"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-gray-100 hover:text-white transition-colors block"
                      >
                        +880 1355-025437
                      </a>
                      <a
                        href="https://wa.me/8801XXXXXXXXX"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-green-400 hover:text-green-300 mt-1 transition-colors"
                      >
                        <SiWhatsapp size={12} />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  {/* Location Row */}
                  <div className="flex items-center gap-5 group cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-lg shadow-orange-500/40 transition-transform duration-300 ease-out group-hover:-rotate-[8deg] group-hover:scale-110">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">
                        Location
                      </p>
                      <p className="text-sm font-medium text-gray-100 group-hover:text-white transition-colors block">
                        Narayanganj, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Socials Section */}
              <div className="pt-8 border-t border-white/10">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-4">
                  Follow Me
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/mehedi-ts"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-white/20 dark:border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-200"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href="https://linkedin.com/in/mehedi-ts"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-white/20 dark:border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-200"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="https://facebook.com/mehedi-ts"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-white/20 dark:border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-200"
                  >
                    <SiFacebook size={16} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-white/20 dark:border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-200"
                  >
                    <Twitter size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
