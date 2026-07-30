"use client";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-bg-main selection:bg-primary/30 selection:text-primary flex flex-col">
      <div className="pt-24 md:pt-36 flex-grow max-w-7xl mx-auto w-full px-6">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors mb-4 md:mb-8"
        >
          <ArrowLeft size={16} />
          <span>Back Home</span>
        </Link>
        <div className="-mt-12 md:-mt-24">
          <Contact />
        </div>
      </div>
      <Footer />
    </main>
  );
}
