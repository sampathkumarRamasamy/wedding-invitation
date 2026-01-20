"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import { cn } from "@/lib/utils";

const events = [
  {
    year: "2018",
    title: "First Meet",
    description: "A chance encounter that sparked a conversation lasting hours. We knew then that this was the start of something special.",
    image: "/images/meet.png"
  },
  {
    year: "2024",
    title: "She Said Yes!",
    description: "On a beautiful evening, with hearts full of love, he asked the question of a lifetime. And the answer was a resounding Yes!",
    image: "/images/ring.png"
  },
  {
    year: "2026",
    title: "The Big Day",
    description: "We are so excited to celebrate our love with all of our favorite people. Can't wait to see you there!",
    image: "/images/venue.png"
  }
];

export default function Story() {
  return (
    <SectionWrapper id="story" className="bg-white relative">
      <div className="container mx-auto px-4 mb-16 text-center z-10 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-script text-5xl md:text-6xl text-stone-700 mb-4"
        >
          Our Love Journey
        </motion.h2>
      </div>

      <div className="max-w-5xl mx-auto relative px-4">
        {/* Center Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-sky-200 -translate-x-1/2" />

        <div className="flex flex-col gap-12 md:gap-24 relative">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={cn(
                "flex flex-col md:flex-row items-center gap-8 md:gap-16 relative",
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              )}
            >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-sky-400 rounded-full border-4 border-white shadow-md z-10 -translate-x-1/2 hidden md:block" />
                
                {/* Image Side */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                    <div className="relative aspect-video rounded-2xl overflow-hidden glass-card shadow-lg group">
                        <Image 
                            src={event.image} 
                            alt={event.title} 
                            fill 
                            className="object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-sky-900/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 text-left md:text-center px-4">
                    <div className={cn("flex flex-col gap-2", index % 2 === 0 ? "md:text-right" : "md:text-left")}>
                         <span className="font-serif text-5xl text-sky-200 font-bold">{event.year}</span>
                         <h3 className="font-serif text-3xl text-stone-700">{event.title}</h3>
                         <p className="text-stone-500 font-light leading-relaxed">{event.description}</p>
                    </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
