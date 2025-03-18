"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion, useReducedMotion } from "framer-motion";
import { Mountain, Heart, Map, Compass, Sunrise, Leaf } from "lucide-react";

const benefits = [
  {
    icon: Mountain,
    title: "Sacred Landscapes",
    description:
      "Journey through Kashmir's valleys, lakes, and mountains - each offering a unique portal to self-discovery and spiritual awakening.",
  },
  {
    icon: Heart,
    title: "Inner Healing",
    description:
      "Guided experiences designed to heal emotional wounds and reconnect with your authentic self through nature's transformative power.",
  },
  {
    icon: Map,
    title: "Expert Guidance",
    description:
      "Travel with guides deeply connected to the land and trained in mystical traditions, based on the teachings of Andrew Harvey.",
  },
  {
    icon: Compass,
    title: "Authentic Connection",
    description:
      "Form meaningful relationships with fellow seekers and the local communities who share their ancestral wisdom.",
  },
  {
    icon: Sunrise,
    title: "Spiritual Awakening",
    description:
      "Experience profound shifts in consciousness through ritual, meditation, and immersion in nature's most powerful settings.",
  },
  {
    icon: Leaf,
    title: "Sustainable Travel",
    description:
      "Our journeys honor and protect the sacred lands we visit, creating minimal impact while maximizing spiritual connection.",
  },
];

export default function OverviewSection() {
  const shouldReduceMotion = useReducedMotion();

  const fadeIn = shouldReduceMotion ? {} : {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.4 }
  };

  const fadeInUp = shouldReduceMotion ? {} : {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }
  };

  return (
    <section
      id="overview"
      className="py-16 md:py-20 relative overflow-hidden bg-meditation"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black-600 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black-900 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          {...fadeInUp}
          className="text-center max-w-3xl mx-auto mb-12 bg-black-950/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/5"
        >
          <div className="inline-block mb-3 px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full">
            <span className="text-white text-sm font-medium">Our Vision</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Transformative</span>{" "}
            <span className="text-gradient">Journeys</span>
          </h2>
          <p className="text-lg white-text leading-relaxed">
            At Wild World Wanderers, we believe that true transformation happens when
            we surrender to the raw and untamed beauty of nature. Guided by the wisdom of
            mystical author Andrew Harvey, our journeys go beyond travel—they are sacred
            invitations to heal, awaken, and rediscover the soul's purpose.
          </p>
        </motion.div>

        <motion.div
          {...fadeIn}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              {...fadeInUp}
              transition={{ duration: 0.4, delay: Math.min(0.2 + index * 0.05, 0.4) }}
            >
              <Card className="bg-black-950/60 backdrop-blur-sm border-white/10 hover:border-white/30 transition-all duration-300 h-full overflow-hidden group">
                <CardContent className="p-6 relative">
                  <div className="mb-5 w-12 h-12 rounded-full bg-gradient-to-br from-gold-500/30 to-red-500/30 flex items-center justify-center text-white">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-gradient text-xl font-semibold mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-white/80">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-2 border border-white/30 bg-black-950/50 backdrop-blur-sm rounded-full mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-3xl">
              🌄
            </div>
          </div>
          <div className="max-w-3xl mx-auto bg-black-950/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/5">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 white-text">
              "This is more than a journey—it is an initiation into a more awakened
              and authentic way of being. Through sacred landscapes, ancient wisdom,
              and guided transformation, we offer a path back to the true self."
            </h3>
            <p className="text-gold-500">- Wild World Wanderers</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
