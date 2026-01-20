"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import Couple from "@/components/Couple";
import Story from "@/components/Story";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Countdown from "@/components/Countdown";
import Location from "@/components/Location";
import MusicPlayer from "@/components/MusicPlayer";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import FallingElements from "@/components/FallingElements";
import InvitationReveal from "@/components/InvitationReveal";
import { motion } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <FallingElements />
      <MusicPlayer />

      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" onComplete={() => { }} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <Hero />
          <Couple />
          <Story />
          <Events />
          <Gallery />
          <Countdown />
          <Location />
          <Footer />
        </motion.div>
      )}
    </main>
  );
}
