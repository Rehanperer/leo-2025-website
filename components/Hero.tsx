"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const galleryImages = [
  "/gallery/gallery-image-1.jpg",
  "/gallery/gallery-image-2.jpg",
  "/gallery/gallery-image-3.jpg",
  "/gallery/gallery-image-4.jpg",
  "/gallery/gallery-image-5.jpg",
  "/gallery/gallery-image-6.jpg",
  "/gallery/gallery-image-7.jpg",
  "/gallery/gallery-image-8.jpg",
  "/gallery/gallery-image-9.jpg",
  "/gallery/gallery-image-10.jpg"
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 6000); // Rotate every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-dark pt-20">

      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImageIndex}
            src={galleryImages[currentImageIndex]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }} // Slow cross-fade
            className="absolute inset-0 w-full h-full object-cover"
            alt="Hero Background"
          />
        </AnimatePresence>
        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-10" />
      </div>

      {/* Background Geometric Elements (Preserved but pushed back) */}
      <div className="absolute inset-0 pointer-events-none z-10 mix-blend-screen opacity-50">
        {/* Large Circle Top Right */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full border border-brand-green/10 bg-brand-green/5 blur-3xl"
        />

        {/* Small Square Bottom Left */}
        <motion.div
          animate={{
            rotate: [0, -90, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-10 w-32 h-32 border-2 border-brand-purple/20 rounded-2xl rotate-12"
        />

        {/* Floating Orb Center Left */}
        <div className="absolute top-1/3 -left-20 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-brand-green" />
              <span className="text-brand-green tracking-widest text-sm font-bold uppercase">Welcome To</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white mb-2">
              LEO CLUB OF <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">
                ETHOS INT.
              </span>
            </h1>

            <p className="text-gray-300 text-lg max-w-xl leading-relaxed drop-shadow-md">
              We are a community of young leaders dedicated to making a difference.
              Join us in creating sustainable impact through service, leadership, and innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#about"
              className="group px-8 py-3 rounded-lg bg-gradient-to-r from-brand-cyan to-brand-blue-600 text-white font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center gap-2"
            >
              Explore Our Club <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/projects"
              className="px-8 py-3 rounded-lg border border-gray-700 text-gray-300 font-semibold hover:border-brand-green hover:text-brand-green transition-all backdrop-blur-sm bg-black/20"
            >
              View Projects
            </Link>
          </motion.div>
        </div>

        {/* Right: Logo & Visuals */}
        <div className="relative flex items-center justify-center scale-110 md:scale-100">
          {/* Rotating Rings Behind Logo */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[550px] h-[550px] border border-dashed border-gray-100/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-[700px] h-[700px] border border-gray-100/10 rounded-full"
          />

          {/* Main Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-80 h-80 md:w-[450px] md:h-[450px]"
          >
            {/* Glow behind logo */}
            <div className="absolute inset-0 bg-brand-cyan/20 blur-[80px] rounded-full" />

            <motion.img
              src="/logo.png"
              alt="Leo Club Logo"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
