"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

export default function Couple() {
  return (
    <SectionWrapper id="couple" className="bg-sky-blue/10">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-5xl md:text-6xl text-stone-700 mb-4">The Happy Couple</h2>
          <p className="text-gray-500 max-w-2xl mx-auto italic">
            "Once in a while, right in the middle of an ordinary life, love gives us a fairy tale."
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          {/* Groom Card */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-blue-200 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white/50 overflow-hidden shadow-xl glass-card">
              <Image 
                src="/images/groom.png" 
                alt="Naveen" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="text-center mt-6">
              <h3 className="font-serif text-2xl text-stone-700">Sabarinathan</h3>
              <p className="text-sky-500 uppercase tracking-widest text-sm mt-1">The Groom</p>
            </div>
          </motion.div>

          <div className="hidden md:block">
            <motion.div 
              style={{ width: "2px", height: "100px" }} 
              className="bg-gradient-to-b from-transparent via-sky-300 to-transparent" 
            />
          </div>

          {/* Bride Card */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-pink-200 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white/50 overflow-hidden shadow-xl glass-card">
               <Image 
                src="/images/bride.png" 
                alt="Maithili" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="text-center mt-6">
              <h3 className="font-serif text-2xl text-stone-700">Maithili</h3>
              <p className="text-sky-500 uppercase tracking-widest text-sm mt-1">The Bride</p>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
