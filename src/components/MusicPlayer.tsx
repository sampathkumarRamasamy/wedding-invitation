"use client";

import { useState, useRef, useEffect } from "react";

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
    <div className="hidden">
      <audio ref={audioRef} loop src="/audio/background.mp3" />
    </div>
  );
}
