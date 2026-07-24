"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-bg-main overflow-hidden">
      <div className="relative flex items-center justify-center">
        
        {/* Outer expanding ripple */}
        <motion.div
          className="absolute w-16 h-16 rounded-full border border-primary/40"
          animate={{
            scale: [1, 2],
            opacity: [1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        
        {/* Middle spinning segmented ring */}
        <motion.div
          className="absolute w-12 h-12 rounded-full border-2 border-transparent border-t-primary border-l-primary/50"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Inner pulsing solid core */}
        <motion.div
          className="w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_rgba(234,88,12,0.8)]"
          animate={{
            scale: [0.8, 1.3, 0.8],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
      </div>
    </div>
  );
}
