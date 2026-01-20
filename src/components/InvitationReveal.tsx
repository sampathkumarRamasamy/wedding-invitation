"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, Heart } from "lucide-react";

interface InvitationRevealProps {
  onOpen: () => void;
}

export default function InvitationReveal({ onOpen }: InvitationRevealProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
        onOpen();
    }, 1500); // Wait for animation before notifying parent
  };

  if (isOpen) {
      return (
          <motion.div 
            className="fixed inset-0 z-[60] flex items-center justify-center bg-white/20 backdrop-blur-sm"
            exit={{ opacity: 0 }}
          >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 20, opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeIn" }}
                className="w-full h-full bg-sky-200 rounded-full"
              />
          </motion.div>
      )
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ice-blue/90 backdrop-blur-md">
      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotateX: 90 }}
        animate={{ scale: 1, opacity: 1, rotateX: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="relative group cursor-pointer perspective-1000"
        onClick={handleOpen}
      >
        {/* Envelope Top Flap (Animated) */}
        <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-sky-300 z-20 origin-top rounded-t-lg border-b-2 border-white/20 origin-top transform-style-3d shadow-lg"
            whileHover={{ rotateX: 160 }}
            transition={{ duration: 0.5 }}
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="mb-1"
                >
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white" />
                </motion.div>
                <Heart className="fill-white text-white w-8 h-8 drop-shadow-md" />
            </div>
        </motion.div>

        {/* Envelope Body */}
        <div className="w-80 h-56 bg-gradient-to-br from-sky-400 to-blue-500 rounded-lg shadow-2xl relative overflow-hidden border border-white/30 flex items-center justify-center">
             <div className="absolute inset-x-0 bottom-0 h-2/3 bg-sky-500 clip-path-triangle z-20" />
             
             <div className="text-center z-10 p-6 bg-white w-[90%] h-[90%] rounded shadow-inner flex flex-col items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-serif text-sky-500 text-sm">You are invited to the wedding of</p>
                <h2 className="font-script text-3xl text-stone-700 my-2">Sabarinathan & Mythili</h2>
                <div className="mt-4 px-6 py-2 bg-sky-500 text-white rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    <Mail size={12} />
                    Click to Open
                </div>
             </div>
        </div>
      </motion.div>
    </div>
  );
}