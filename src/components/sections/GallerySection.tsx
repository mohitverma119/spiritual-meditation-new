"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import galleryImages from "@/data/galleryImages.json";

// Image type definition
type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: string;
};

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
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
    <section id="gallery" className="py-16 md:py-20 relative overflow-hidden bg-meditation cosmic-bg">
      {/* Background gradients - simplified */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black-700 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black-700 to-transparent" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          {...fadeInUp}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-block mb-3 px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full">
            <span className="text-white text-sm font-medium">Visual Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Breathtaking</span>{" "}
            <span className="text-gradient">Kashmir</span>
          </h2>
          <p className="text-lg white-text">
            Set against the breathtaking backdrop of Kashmir, a land steeped in spiritual
            energy, our experiences are designed to lead seekers through deep inner work,
            silence, and connection with the divine.
          </p>
        </motion.div>

        {/* Gallery Carousel */}
        <motion.div
          {...fadeIn}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-10"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                  <div
                    className="relative group card-glow-hover cursor-pointer h-full"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-lg border border-white/10 h-full">
                      <div className="absolute inset-0 bg-gradient-to-t from-black-950 to-transparent opacity-50 z-10 group-hover:opacity-30 transition-opacity duration-300" />
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={500}
                        height={375}
                        loading={index < 4 ? "eager" : "lazy"} // Load first 4 eagerly
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        crossOrigin="anonymous"
                      />
                      <div className="absolute inset-0 z-20 p-5 flex flex-col justify-end">
                        <p className="text-white font-medium text-shadow">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 bg-black/40 border-white/10 text-white hover:bg-gold-500 hover:text-black" />
            <CarouselNext className="hidden md:flex -right-4 bg-black/40 border-white/10 text-white hover:bg-gold-500 hover:text-black" />
          </Carousel>
        </motion.div>

        {/* View More Button */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex justify-center mt-8"
        >
          <Link href="/gallery">
            <Button
              size="lg"
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black-950 font-medium px-8 rounded-full shadow-lg transition-all duration-300 hover:shadow-gold-500/20 hover:shadow-xl"
            >
              View Full Gallery
            </Button>
          </Link>
        </motion.div>

        {/* Lightbox - simplified animation */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={shouldReduceMotion ? {} : { scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center z-10 hover:bg-gold-500 hover:text-black transition-colors"
              >
                ✕
              </button>
              <div className="relative">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1000}
                  height={750}
                  className="object-contain max-h-[80vh] w-auto h-auto mx-auto rounded-lg"
                  priority
                  crossOrigin="anonymous"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <h3 className="text-white text-xl font-medium">{selectedImage.alt}</h3>
                  <p className="text-white/80">{selectedImage.category}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
