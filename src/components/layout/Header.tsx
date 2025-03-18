"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Our Vision", href: "#overview" },
  { name: "Gallery", href: "#gallery" },
  { name: "Blog", href: "#blog" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black-950/90 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold relative"
          >
            <span className="text-gradient">Wild</span>
            <span className="text-gold-400">World</span>
            <span className="text-red-500">Wanderers</span>
            <motion.span
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold-500"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center gap-6"
        >
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gold-400 hover:text-gold-300 transition-colors relative group"
            >
              <span>{item.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Button
            className="bg-red-500 hover:bg-red-600 text-white ml-4"
          >
            Explore Now
          </Button>
        </motion.nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gold-500 hover:text-gold-400"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black-900/95 backdrop-blur-lg border-t border-gold-500/20 overflow-hidden w-full"
        >
          <div className="container mx-auto py-6 flex flex-col space-y-4 px-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gold-400 hover:text-gold-300 transition-colors py-2 px-4 hover:bg-black-800 rounded-md"
              >
                {item.name}
              </Link>
            ))}
            <Button
              className="bg-red-500 hover:bg-red-600 text-white mt-4 w-full"
            >
              Explore Now
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
