"use client";

import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  // Use reduced motion hook for accessibility and performance
  const shouldReduceMotion = useReducedMotion();

  // Setup optimized animations
  const containerAnimation = shouldReduceMotion ? {} : {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-16 overflow-hidden flowing-gradient"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 z-0">
        {/* Floating dark orbs */}
        <div className="dark-orb purple w-96 h-96 left-[10%] top-[15%]" />
        <div className="dark-orb blue w-[30rem] h-[30rem] right-[15%] bottom-[20%]" />
        <div className="dark-orb indigo w-[20rem] h-[20rem] right-[25%] top-[30%]" />

        {/* Star-like particles */}
        <div className="absolute inset-0 opacity-70">
          <div className="absolute w-1 h-1 bg-white/20 rounded-full top-[35%] left-[55%] animate-pulse-slow" style={{ animationDelay: "0s" }} />
          <div className="absolute w-1 h-1 bg-white/20 rounded-full top-[65%] left-[25%] animate-pulse-slow" style={{ animationDelay: "1s" }} />
          <div className="absolute w-1 h-1 bg-white/20 rounded-full top-[15%] right-[45%] animate-pulse-slow" style={{ animationDelay: "2s" }} />
          <div className="absolute w-1 h-1 bg-white/20 rounded-full top-[55%] right-[15%] animate-pulse-slow" style={{ animationDelay: "3s" }} />
          <div className="absolute w-1 h-1 bg-white/20 rounded-full bottom-[25%] left-[35%] animate-pulse-slow" style={{ animationDelay: "4s" }} />
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left side content - optimized animations */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-black-950/30 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/5 shadow-xl">
            <motion.div {...containerAnimation} className="inline-block mb-3">
              <span className="text-sm font-medium text-white bg-gradient-to-r from-gold-500/20 to-red-500/20 px-3 py-1 rounded-full">
                Transformative Journeys
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <motion.span
                {...containerAnimation}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="block text-gradient mb-2"
              >
                Discover Your
              </motion.span>
              <motion.span
                {...containerAnimation}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="block text-red-500"
              >
                Wild Within
              </motion.span>
            </h1>

            <motion.p
              {...containerAnimation}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl white-text mb-8 max-w-lg"
            >
              In a world of WWW (World Wide Web), we aim to find the WWW (Wild World Wanderers)
              in you. Transformative journeys in the breathtaking beauty of Kashmir.
            </motion.p>

            <motion.div
              {...containerAnimation}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black-950 font-medium px-8 rounded-full shadow-lg transition-all duration-300 hover:shadow-gold-500/20 hover:shadow-xl"
              >
                Begin Your Journey
              </Button>
              <Link href="#overview">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white rounded-full backdrop-blur-sm transition-all duration-300"
                >
                  Our Vision
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Stats - simplified animation */}
      
        </motion.div>

        {/* Right side - Simple Meditation Image with simplified animation */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center lg:justify-end relative z-10"
        >
          <div className="p-8 flex items-center justify-center relative">
            {/* Soft glow behind the meditation figure */}
            <div className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-gold-500/10 to-purple-500/5 blur-3xl"></div>

            <div className="relative">
              <svg
                width="400"
                height="400"
                viewBox="0 0 400 400"
                className="animate-float"
                style={{
                  filter: "drop-shadow(0 0 15px rgba(255, 215, 0, 0.2))"
                }}
              >
                <path
                  d="M200 30c-10 0-19.3 5.6-23.9 14.5-4.4 8.3-10.6 15.4-18.2 20.7-8.1 5.7-14.1 14.5-16.4 24.4-2.2 9.3-6.7 17.9-13.2 24.8-6.7 7.1-10.5 16.8-10.5 26.7 0 9.3 3.3 18.1 9.2 25 7.3 8.6 12.4 18.9 14.8 30 2.1 9.5 7.9 17.7 16 22.9 6.5 4.1 12 9.7 16.1 16.3 4.6 7.4 12.6 12.2 21.4 12.7 0.9 0.1 1.8 0.1 2.8 0.1 0.9 0 1.8 0 2.8-0.1 8.8-0.5 16.8-5.3 21.4-12.7 4.1-6.6 9.6-12.1 16.1-16.3 8.1-5.1 13.9-13.4 16-22.9 2.4-11.1 7.6-21.4 14.8-30 5.9-6.9 9.2-15.7 9.2-25 0-9.9-3.8-19.5-10.5-26.7-6.5-6.9-10.9-15.4-13.2-24.8-2.3-9.9-8.3-18.7-16.4-24.4-7.6-5.3-13.9-12.5-18.2-20.7-4.5-8.8-13.8-14.5-23.9-14.5z"
                  fill="#000"
                />
                {/* Body */}
                <path
                  d="M195 260v110M205 260v110M175 370h50M140 170c10-10 30-10 40-10 10 0 30 0 40 10M160 150c0-10 10-20 30-20s30 10 30 20M150 190c0 20 20 40 50 40s50-20 50-40M175 310c-30-10-40-90-40-120M225 310c30-10 40-90 40-120"
                  stroke="#FFC800"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - simplified */}
      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <p className="text-white mb-2 text-sm">Scroll to explore</p>
        <div className="w-1 h-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent animate-pulse-slow"></div>
        </div>
      </motion.div>
    </section>
  );
}
