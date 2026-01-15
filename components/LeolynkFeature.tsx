"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function LeolynkFeature() {
    return (
        <section className="relative py-24 bg-black overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/20 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <div className="inline-block px-4 py-1 mb-6 rounded-full border border-brand-cyan/30 bg-brand-cyan/10">
                            <span className="text-brand-cyan text-sm font-semibold tracking-wider uppercase">New Launch</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Introducing <span className="text-brand-cyan">Leolynk</span>
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
                            The ultimate management OS for Leo Clubs. Streamline reports, manage members, and track impact with our revolutionary platform launched in 2025.
                        </p>

                        <a
                            href="https://leolynk.live/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-cyan text-black font-bold text-lg rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105"
                        >
                            Visit Leolynk
                            <ExternalLink size={20} className="transition-transform group-hover:translate-x-1" />
                        </a>
                    </motion.div>

                    {/* Image Preview */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 w-full max-w-3xl"
                    >
                        <a
                            href="https://leolynk.live/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block relative group"
                        >
                            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-brand-cyan/20 ring-1 ring-white/10 group-hover:ring-brand-cyan/50 transition-all duration-500">
                                <Image
                                    src="/leolynk_dashboard.png"
                                    alt="Leolynk Dashboard Preview"
                                    width={800}
                                    height={500}
                                    className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white font-bold text-xl flex items-center gap-2">
                                        Explore <ArrowRight />
                                    </span>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-cyan/20 blur-xl rounded-full" />
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-green/20 blur-xl rounded-full" />
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
