"use client";

import { motion } from "framer-motion";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ice-blue"
    >
      <div className="relative flex flex-col items-center">
        {/* Wreath Animation */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-48 h-48 border-2 border-sky-300 rounded-full border-dashed" 
        />
        
        <div className="absolute inset-0 flex items-center justify-center">
             <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                className="font-script text-5xl text-sky-500"
             >
                S & M
             </motion.div>
        </div>
        
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-12 text-sm uppercase tracking-widest text-sky-400"
        >
            Loading Love...
        </motion.p>
      </div>
    </motion.div>
  );
}
