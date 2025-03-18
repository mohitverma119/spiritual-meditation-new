"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import blogPostsData from "@/data/blogPosts.json";

// Using only the first 3 blog posts for the home page section
const blogPosts = blogPostsData.slice(0, 3);

export default function BlogSection() {
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
      id="blog"
      className="py-16 md:py-20 relative overflow-hidden bg-meditation cosmic-bg"
    >
      {/* Background gradients - simplified */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black-950 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black-950 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          {...fadeInUp}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-block mb-3 px-3 py-1 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-full">
            <span className="text-white text-sm font-medium">Our Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Wisdom</span>{" "}
            <span className="text-gradient">Writings</span>
          </h2>
          <p className="text-lg white-text">
            Insights, reflections, and teachings from our journeys and guides.
            Explore the intersection of travel, spirituality, and personal transformation.
          </p>
        </motion.div>

        <motion.div
          {...fadeIn}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              {...fadeInUp}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              className="bg-black-950/60 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-white/20"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gold-500/90 text-black-950 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white text-xl font-semibold mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-white/60 text-xs">
                    {post.author} • {post.date}
                  </div>
                  <Link href={`/blog/${post.id}`} className="text-gold-500 text-sm font-medium hover:text-gold-400 transition-colors">
                    Read More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/blog">
            <Button
              size="lg"
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black-950 font-medium px-8 rounded-full shadow-lg transition-all duration-300 hover:shadow-gold-500/20 hover:shadow-xl"
            >
              View All Articles
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
