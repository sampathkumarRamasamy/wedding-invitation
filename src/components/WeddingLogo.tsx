"use client";

import { motion } from "framer-motion";

export default function WeddingLogo({
  className = "w-48 h-48",
  color = "#8ECDF7",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
        
        {/* Elegant Single Heart */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="
            M100 115
            C85 95 55 95 55 120
            C55 145 85 155 100 170
            C115 155 145 145 145 120
            C145 95 115 95 100 115
          "
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Initials */}
        <text
          x="100"
          y="95"
          textAnchor="middle"
          fill="#1e293b"
          style={{
            fontSize: "46px",
            fontFamily: "Playfair Display, serif",
            fontWeight: 600,
            letterSpacing: "6px",
          }}
        >
          S   M
        </text>

        {/* Heart fill animation */}
        <motion.path
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          d="
            M100 115
            C85 95 55 95 55 120
            C55 145 85 155 100 170
            C115 155 145 145 145 120
            C145 95 115 95 100 115
          "
          fill={color}
        />
      </svg>
    </div>
  );
}
