"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const leaders = [
    { role: "President", name: "Leo [Name]", image: "/placeholder-user.jpg" },
    { role: "1st Vice President", name: "Leo [Name]", image: "/placeholder-user.jpg" },
    { role: "Secretary", name: "Leo [Name]", image: "/placeholder-user.jpg" },
    { role: "Treasurer", name: "Leo [Name]", image: "/placeholder-user.jpg" },
    { role: "Leo Advisor", name: "Lion [Name]", image: "/placeholder-user.jpg" },
];

export function ExcoTeam() {
    const cardVariants: Variants = {
        offscreen: (index: number) => ({
            x: index % 2 === 0 ? -50 : 50,
            opacity: 0
        }),
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return (
        <section id="team" className="py-24 bg-black relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-purple/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-brand-cyan/10 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-16 text-white"
                >
                    Meet Our <span className="text-brand-purple">Leaders</span>
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-8 mb-12">
                    {leaders.map((leader, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={cardVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: false, amount: 0.3 }}
                            whileHover={{ scale: 1.05 }}
                            className="w-full sm:w-64 bg-card-bg rounded-xl overflow-hidden border border-card-border hover:shadow-[0_0_30px_rgba(157,0,255,0.2)] transition-all duration-300 group"
                        >
                            <div className="h-64 bg-gray-800 relative group-hover:scale-105 transition-transform duration-500">
                                {/* Image Placeholder */}
                                <div className="w-full h-full flex items-center justify-center text-gray-600 font-bold text-4xl">
                                    Image
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-purple transition-colors">{leader.name}</h3>
                                <p className="text-sm text-brand-green uppercase tracking-wider">{leader.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/team">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-brand-green text-brand-green hover:bg-brand-green hover:text-black transition-all font-semibold"
                        >
                            Meet Full Team <ArrowRight className="w-4 h-4" />
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
