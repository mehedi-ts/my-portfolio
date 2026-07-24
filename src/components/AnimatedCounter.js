"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedCounter({ value, duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Extract number and string parts (e.g. "15+" -> number 15, suffix "+")
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const hasSuffix = value.includes('+');
  const hasPercent = value.includes('%');
  
  const suffix = hasSuffix ? "+" : hasPercent ? "%" : "";
  
  const [displayValue, setDisplayValue] = useState(0);
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, motionValue, numericValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref} className="inline-block font-black text-gradient tabular-nums">
      {displayValue}{suffix}
    </span>
  );
}
