"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-blue via-pastel-blue to-white">
      {/* Background Animated Elements */}
      <motion.div
        animate={{ x: [0, 100, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-10 w-64 h-64 bg-white/40 blur-[80px] rounded-full mix-blend-overlay"
      />
      <motion.div
        animate={{ x: [0, -100, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-baby-blue/30 blur-[100px] rounded-full mix-blend-overlay"
      />

      {/* Floating Clouds/Mist Effect */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-40 h-20 bg-white/60 blur-[30px] rounded-full opacity-60 animate-float" />
        <div className="absolute top-[20%] right-[15%] w-60 h-24 bg-white/50 blur-[40px] rounded-full opacity-50 animate-float" style={{ animationDelay: "2s" }} />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-4"
        >
          <p className="text-gray-600 tracking-widest uppercase text-sm md:text-base font-light">
            Together with our families
          </p>
          <p className="text-gray-500 text-xs md:text-sm mt-2 italic">
            We invite you to celebrate our wedding
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="flex flex-col items-center justify-center gap-2 md:gap-4 my-8"
        >
          <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-stone-700 leading-tight">
            Sabarinathan
          </h1>
          <span className="font-serif text-2xl md:text-3xl text-sky-400 italic">&</span>
          <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-stone-700 leading-tight">
            Mythili
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
          <p className="font-serif text-xl md:text-2xl text-stone-600 tracking-wide">
            February 18, 2026
          </p>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sky-400/80"
      >
        <ArrowDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
