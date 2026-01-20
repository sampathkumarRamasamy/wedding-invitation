import { useState, useRef, useEffect } from "react";

export default function MusicPlayer({ onStart }: { onStart?: () => void }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Notify parent immediately so content renders
    if (onStart) onStart();

    const audio = audioRef.current;
    if (!audio) return;

    // Function to play audio
    const playAudio = () => {
      audio.volume = 1.0;
      audio.play().then(() => {
        // Success: remove all listeners
        ['click', 'scroll', 'touchstart', 'keydown'].forEach(event =>
          window.removeEventListener(event, playAudio)
        );
      }).catch((err) => {
        console.log("Autoplay prevented. Waiting for interaction.");
      });
    };

    // Try to play immediately
    playAudio();

    // Add listeners for any user interaction as fallback
    ['click', 'scroll', 'touchstart', 'keydown'].forEach(event =>
      window.addEventListener(event, playAudio, { once: true })
    );

    return () => {
      ['click', 'scroll', 'touchstart', 'keydown'].forEach(event =>
        window.removeEventListener(event, playAudio)
      );
    };
  }, []);

  return (
    <div className="hidden">
      <audio ref={audioRef} loop autoPlay src="/song.mp3" />
    </div>
  );
}
