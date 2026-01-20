"use client";

import { motion } from "framer-motion";
import { Church, Wine, MapPin, Calendar, Clock } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

export default function Events() {
  return (
    <SectionWrapper id="events" className="bg-gradient-to-br from-ice-blue to-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-script text-5xl md:text-6xl text-center text-stone-700 mb-16"
        >
          Event Details
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Ceremony Card */}
          <EventCard 
            title="The Ceremony" 
            icon={<Church className="w-8 h-8 text-sky-500" />}
            date="September 15, 2026"
            time="10:00 AM Onwards"
            venue="St. Mary's Cathedral"
            address="123 Wedding Lane, Blue City"
            delay={0.2}
          />

          {/* Reception Card */}
          <EventCard 
             title="The Reception" 
             icon={<Wine className="w-8 h-8 text-pink-500" />}
             date="September 15, 2026"
             time="06:30 PM Onwards"
             venue="The Grand Ballroom"
             address="Luxury Hotel & Spa, Blue City"
             delay={0.4}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}

function EventCard({ title, icon, date, time, venue, address, delay }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5, delay }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden group"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/50 flex items-center justify-center mb-2 shadow-sm">
                    {icon}
                </div>
                <h3 className="font-serif text-3xl text-stone-700">{title}</h3>
                
                <div className="w-12 h-1 bg-sky-200 rounded-full my-2" />
                
                <div className="flex flex-col gap-3 font-light text-stone-600 mt-2">
                    <div className="flex items-center justify-center gap-2">
                        <Calendar className="w-4 h-4 text-sky-400" />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Clock className="w-4 h-4 text-sky-400" />
                        <span>{time}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <MapPin className="w-4 h-4 text-sky-400" />
                        <span>{venue}</span>
                    </div>
                </div>
                <p className="text-sm text-stone-400 mt-2">{address}</p>
            </div>
        </motion.div>
    )
}
