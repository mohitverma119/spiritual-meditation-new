"use client";

import HeroSection from "@/components/sections/HeroSection";
import OverviewSection from "@/components/sections/OverviewSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GallerySection from "@/components/sections/GallerySection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import SectionReveal from "@/components/ui/section-reveal";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero section doesn't need the reveal animation as it's the first thing users see */}
        <HeroSection />

        {/* Overview section - fade up */}
        <SectionReveal id="overview" direction="up" delay={0.1}>
          <OverviewSection />
        </SectionReveal>

        {/* Testimonials section - fade from left */}
        <SectionReveal direction="left" delay={0.1}>
          <TestimonialsSection />
        </SectionReveal>

        {/* Gallery section - fade from right */}
        <SectionReveal direction="right" delay={0.1}>
          <GallerySection />
        </SectionReveal>

        {/* Blog section - fade up */}
        <SectionReveal direction="up" delay={0.1}>
          <BlogSection />
        </SectionReveal>

        {/* Contact section - fade up with longer delay */}
        <SectionReveal direction="up" delay={0.2}>
          <ContactSection />
        </SectionReveal>
      </main>

      <Footer />
    </div>
  );
}
