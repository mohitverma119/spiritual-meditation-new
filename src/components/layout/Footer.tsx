"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = [
  {
    title: "About",
    links: [
      { name: "Our Story", href: "#" },
      { name: "Team", href: "#" },
      { name: "Philosophy", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "#blog" },
      { name: "Expeditions", href: "#" },
      { name: "Travel Guides", href: "#" },
      { name: "FAQ", href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "Contact Us", href: "#contact" },
      { name: "Support", href: "#" },
      { name: "Community", href: "#" },
      { name: "Newsletter", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black-950 relative overflow-hidden cosmic-bg">
      {/* Background gradient elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black-950 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo and Description */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="flex items-center mb-6">
              <div className="text-2xl font-bold">
                <span className="text-gradient">Wild</span>
                <span className="text-white">World</span>
                <span className="text-red-500">Wanderers</span>
              </div>
            </Link>
            <p className="mb-6 white-text max-w-sm">
              In a world of WWW (World Wide Web), we aim to find the WWW (Wild World Wanderers)
              in you. Join us for transformative journeys in the breathtaking beauty of Kashmir.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-white/5 hover:bg-gold-500 text-white hover:text-black-900 p-2 rounded-full transition-colors duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-gradient font-semibold mb-6 text-lg">
                {column.title}
              </h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-gold-500 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 mt-12 pt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="flex items-start space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="p-3 rounded-full bg-gradient-to-br from-gold-500/20 to-red-500/20">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="text-white font-medium">Email Us</h4>
              <a
                href="mailto:info@wildworldwanderers.com"
                className="text-white/70 hover:text-white transition-colors"
              >
                info@wildworldwanderers.com
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="p-3 rounded-full bg-gradient-to-br from-gold-500/20 to-red-500/20">
              <Phone className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="text-white font-medium">Call Us</h4>
              <a
                href="tel:+1-555-123-4567"
                className="text-white/70 hover:text-white transition-colors"
              >
                +1 (555) 123-4567
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-3 rounded-full bg-gradient-to-br from-gold-500/20 to-red-500/20">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="text-white font-medium">Visit Us</h4>
              <p className="text-white/70">
                123 Wilderness Way, Kashmir<br />
                Himalayan Valley, 19001<br />
                India
              </p>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {currentYear} Wild World Wanderers. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-white/60 hover:text-gold-500 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-white/60 hover:text-gold-500 text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-white/60 hover:text-gold-500 text-sm transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
