"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative py-20 bg-gradient-to-t from-sky-200 via-ice-blue to-white overflow-hidden">
      <div className="container mx-auto px-4 text-center z-10 relative">
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center gap-4"
        >
            {/* Heart Logo Container */}
            <div className=" relative w-50 h-50">
                 <Image 
                    src="/images/sm-logo.png" 
                    alt="Sabarinathan & Maithili" 
                    fill 
                    className="object-contain mix-blend-multiply" 
                 />
            </div>
            
            <h3 className="font-serif text-3xl text-stone-700">Thank You</h3>
            <p className="text-stone-500 font-light max-w-md mx-auto">
                We can't wait to celebrate our special day with you!
            </p>
            
            <div className="mt-8 flex items-center gap-2 text-stone-400 text-sm">
                <span>With Love</span>
                <Heart className="w-4 h-4 fill-pink-400 text-pink-400" />
            </div>
        </motion.div>
      </div>
      
      {/* Decorative blurred blobs */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-300/30 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-0 w-48 h-48 bg-pink-200/30 blur-[60px] rounded-full pointer-events-none" />
    </footer>
  );
}
