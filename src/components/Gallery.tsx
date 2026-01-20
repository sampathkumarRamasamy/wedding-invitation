"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const images = [
  { src: "/images/meet.png", alt: "First Meet" },
  { src: "/images/ring.png", alt: "Engagement" },
  { src: "/images/cake.png", alt: "Wedding Cake" },
  { src: "/images/groom.png", alt: "Groom" },
  { src: "/images/bride.png", alt: "Bride" },
  { src: "/images/venue.png", alt: "Venue" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <SectionWrapper id="gallery" className="bg-sky-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-script text-5xl md:text-6xl text-center text-stone-700 mb-16"
        >
          Gallery
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer glass-card shadow-lg"
              onClick={() => setSelectedImage(img.src)}
            >
              <div className="absolute inset-0 bg-sky-200/20 mix-blend-overlay hover:bg-transparent transition-colors duration-300 z-10" />
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className="object-cover transition-transform duration-500 hover:scale-110" 
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-5xl max-h-[90vh] w-full h-full rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()} 
            >
                <div className="relative w-full h-full">
                    <Image src={selectedImage} alt="Gallery view" fill className="object-contain" quality={100} />
                </div>
                <button 
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full p-2 text-white transition-colors"
                >
                    <X size={24} />
                </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
