"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-dark pt-20">
      {/* Background Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none">
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

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

            <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
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
              className="px-8 py-3 rounded-lg border border-gray-700 text-gray-300 font-semibold hover:border-brand-green hover:text-brand-green transition-all"
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
            className="absolute w-[550px] h-[550px] border border-dashed border-gray-800 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-[700px] h-[700px] border border-gray-800/50 rounded-full"
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

          {/* Decorative Floating Elements around Logo */}
          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-0 right-10 w-16 h-16 bg-gradient-to-br from-brand-purple to-blue-600 rounded-lg opacity-80 shadow-lg blur-[1px]"
          />
          <motion.div
            animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            className="absolute bottom-10 left-10 w-12 h-12 bg-user-gradient rounded-full bg-brand-green opacity-80 blur-[1px]"
          />
        </div>
      </div>
    </section>
  );
}
