import { useState, useRef, useEffect } from "react";
import { Music, ArrowRight, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicPlayer({ onStart }: { onStart?: () => void }) {
  const [showOverlay, setShowOverlay] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Optional: Attempt autoplay silently in background if desirable, 
    // but keep overlay for manual confirmation/reveal effect.
    if (audioRef.current) {
      audioRef.current.volume = 1.0;
      audioRef.current.play().catch(() => {
        // Check for autoplay support silently
      });
    }
  }, []);

  const handleEnter = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.error("Play failed", e));
      setShowOverlay(false);
      if (onStart) onStart();
    }
  };

  return (
    <>
      <div className="hidden">
        <audio ref={audioRef} loop autoPlay src="/song.mp3" />
      </div>

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-sky-900/30 backdrop-blur-md p-4"
          >
            <div className="absolute inset-0 bg-white/20" />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 1.1, opacity: 0, y: -20 }}
              transition={{ delay: 0.2 }}
              className="relative bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 max-w-lg w-full text-center shadow-2xl border border-white/60"
            >
              {/* Decorative Header */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-sky-400 to-blue-500 flex items-center justify-center shadow-lg shadow-sky-200">
                  <Heart className="w-8 h-8 text-white fill-white animate-pulse" />
                </div>
              </div>

              <h2 className="text-4xl font-script text-stone-800 mb-2">
                Wedding Invitation
              </h2>

              <div className="w-24 h-1 bg-gradient-to-r from-sky-300 to-blue-300 mx-auto rounded-full mb-6" />

              <p className="text-stone-600 font-serif leading-relaxed mb-2 text-lg">
                Tap to unveil the wedding invitation of
              </p>

              <h3 className="text-2xl md:text-3xl font-serif text-sky-600 font-semibold mb-8">
                Sabarinathan & Mythili
              </h3>

              <button
                onClick={handleEnter}
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-full font-medium tracking-wide shadow-xl shadow-sky-200/50 hover:shadow-sky-300/60 transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95"
              >
                <span>Open Invitation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
