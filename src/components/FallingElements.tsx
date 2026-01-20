"use client";

import { motion } from "framer-motion";
import { Heart, Music } from "lucide-react";
import { useEffect, useState } from "react";

export default function FallingElements() {
  const [elements, setElements] = useState<any[]>([]);

  useEffect(() => {
    // Generate random elements on client side only to avoid hydration mismatch
    const newElements = [...Array(15)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      type: Math.random() > 0.5 ? 'heart' : 'music',
      size: 10 + Math.random() * 20
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          initial={{ y: -100, opacity: 0 }}
          animate={{ 
            y: ["0vh", "100vh"], 
            opacity: [0, 0.8, 0],
            rotate: [0, 360] 
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            left: `${el.left}%`,
          }}
        >
          {el.type === 'heart' ? (
             <Heart 
               size={el.size} 
               className="text-sky-200 fill-sky-100/50" 
             />
          ) : (
             <Music 
               size={el.size} 
               className="text-blue-200/50" 
             />
          )}
        </motion.div>
      ))}
    </div>
  );
}
