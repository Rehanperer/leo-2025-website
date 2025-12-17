"use client";

import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="py-20 bg-black relative overflow-hidden">
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-brand-cyan/5 rounded-full blur-[100px]" />
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-4xl font-bold mb-8 text-white">About Us</h2>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                        We are the Leo Club of Ethos International, a group of dedicated young individuals committed to serving our community and developing leadership skills.
                        As part of the global Lions Clubs International network, we strive to make a positive impact through various service projects and initiatives.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
