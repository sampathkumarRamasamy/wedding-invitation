"use client";

import { useState, useRef, useEffect } from "react";
import { Music, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export default function MusicPlayer({ playTrigger = false }: { playTrigger?: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (playTrigger && audioRef.current && !isPlaying) {
        audioRef.current.play()
            .then(() => setIsPlaying(true))
            .catch(() => console.log("Autoplay failed"));
    }
  }, [playTrigger]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <audio ref={audioRef} loop src="/audio/background.mp3" /> {/* Add your file here */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className="bg-white/30 backdrop-blur-md border border-white/50 p-3 rounded-full text-stone-700 hover:bg-white/50 transition-colors shadow-lg"
      >
        {isPlaying ? (
           <Music className="w-6 h-6 animate-pulse text-sky-600" />
        ) : (
           <VolumeX className="w-6 h-6 text-stone-500" />
        )}
      </motion.button>
    </div>
  );
}
