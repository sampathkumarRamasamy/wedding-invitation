"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SectionWrapper from "./SectionWrapper";

export default function Countdown() {
  const targetDate = new Date("2026-02-18T10:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper id="countdown" className="bg-sky-blue/20 relative">
      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i
          }}
          className="absolute rounded-full bg-white/40 blur-md"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 40 + 20}px`,
            height: `${Math.random() * 40 + 20}px`,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-script text-4xl md:text-5xl text-stone-700 mb-12"
        >
          Counting down to forever
        </motion.h2>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </SectionWrapper>
  );
}

function TimeUnit({ value, label }: { value: number, label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="glass-card w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center rounded-2xl shadow-lg border border-white/50"
    >
      <span className="font-serif text-3xl md:text-4xl text-sky-600 font-bold">
        {value < 10 ? `0${value}` : value}
      </span>
      <span className="text-xs md:text-sm uppercase tracking-widest text-stone-500 mt-1">
        {label}
      </span>
    </motion.div>
  );
}
