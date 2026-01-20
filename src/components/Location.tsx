"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

export default function Location() {
    return (
        <SectionWrapper id="location" className="bg-white">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h2 className="font-script text-5xl md:text-6xl text-stone-700 mb-4">Location</h2>
                    <p className="text-stone-500">Grand palace, Mettupalayam - Annur Rd, opp. to Kumar hi tec, Coimbatore, Tamil Nadu 641697</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="glass-card p-4 rounded-3xl max-w-4xl mx-auto shadow-2xl"
                >
                    <div className="rounded-2xl overflow-hidden h-64 md:h-96 w-full relative bg-gray-200">
                        {/* Placeholder Map */}
                        <iframe
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21914.36193287572!2d77.05997621791307!3d11.24742088537508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8e569beb9c96d%3A0x268c2a19f328b755!2sGrand%20palace%20annur!5e0!3m2!1sen!2sin!4v1768911442677!5m2!1sen!2sin"
                        />
                    </div>

                    <div className="mt-6 flex justify-center">
                        <a
                            href="https://maps.app.goo.gl/MLXQq4WBpcDHqbya8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-8 py-3 rounded-full flex items-center gap-2 shadow-lg shadow-sky-300/50 relative overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2 font-medium tracking-wide">
                                    <Navigation size={18} />
                                    Get Directions
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </motion.button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
