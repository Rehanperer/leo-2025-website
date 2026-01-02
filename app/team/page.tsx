"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function TeamPage() {
    // Generate 20 placeholder members
    const teamMembers = [
        // Exco
        { id: 1, name: "Leo Rishon Wickramasinghe", role: "President", image: "/team/rishon_wickramasinghe.jpg" },
        { id: 2, name: "Leo Sachitha Rajapaksha", role: "1st Vice President", image: "/team/sachitha_rajapaksha.jpg" },
        { id: 3, name: "Leo Sera Sepion", role: "2nd Vice President", image: null },
        { id: 4, name: "Leo Ethan Peter", role: "3rd Vice President", image: null },
        { id: 5, name: "Leo Dinuli Rodrigo", role: "Secretary", image: null },
        { id: 6, name: "Leo Treasurer Boco", role: "Assistant Secretary", image: null },
        { id: 7, name: "Leo Liliana Samarasinghe", role: "Treasurer", image: "/team/liliana_samarasinghe.png" },
        { id: 8, name: "Leo Skyler Downall", role: "Assistant Treasurer", image: null },
        { id: 9, name: "Lion Anthony Sepion", role: "Leo Advisor", image: null },
        { id: 10, name: "Leo Sanuli Abeysena", role: "Member", image: null },

        // Directors
        { id: 11, name: "Leo Sanoli Rajapaksha", role: "Director of Environment", image: null },
        { id: 12, name: "Leo Santhoshi Ravichandra", role: "Director of Media", image: null },
        { id: 13, name: "Leo Oneli Fernando", role: "Director of Children and Elders", image: null },
        { id: 14, name: "Leo Limethsith Weerasinghe", role: "Director of Sports", image: null },
        { id: 15, name: "Leo Krishanthani Kumar", role: "Director of Learning and Management", image: null },
        { id: 16, name: "Leo Stephany", role: "Director of Health", image: null },
        { id: 17, name: "Leo Vinuga", role: "Director of Animal Welfare", image: null },
        { id: 18, name: "Leo Aabidh", role: "Director of Technology", image: null },
    ];

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                bounce: 0.3,
                duration: 0.8
            }
        },
        hover: {
            y: -10,
            scale: 1.02,
            boxShadow: "0px 10px 30px rgba(0, 255, 157, 0.1)", // Brand green hint
            transition: {
                duration: 0.3,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <main className="min-h-screen bg-[#101010] text-white">
            {/* Hero Section */}
            <section className="relative py-32 bg-brand-dark overflow-hidden flex flex-col items-center justify-center text-center px-4">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-1/3 h-full bg-brand-green/5 blur-[120px] pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-green">Full Team</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A group of very hard working people that make the LEO Club of EIC great
                    </p>
                </motion.div>
            </section>

            {/* Breadcrumb */}
            <div className="bg-[#0a0a0a] py-4 border-b border-white/5 sticky top-[60px] z-40 backdrop-blur-md bg-opacity-80">
                <div className="container mx-auto px-4 flex items-center gap-2 text-sm text-gray-500">
                    <Link href="/" className="hover:text-brand-cyan transition-colors">Home</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-white font-medium">Team</span>
                </div>
            </div>

            <div className="container mx-auto px-4 py-24">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                    {teamMembers.map((member) => (
                        <motion.div
                            key={member.id}
                            variants={cardVariants}
                            whileHover="hover"
                            className="group relative h-96 rounded-2xl overflow-hidden bg-[#1a1a1a] border border-white/5"
                        >
                            {/* Image Placeholder Area */}
                            <div className="absolute inset-0 bg-[#222] flex items-center justify-center overflow-hidden">
                                <div className="w-full h-full bg-gradient-to-br from-[#2a2a2a] to-[#151515] group-hover:scale-110 transition-transform duration-700" />

                                {member.image ? (
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                ) : (
                                    <span className="absolute text-gray-600 font-bold text-6xl opacity-10 select-none group-hover:opacity-20 transition-opacity">
                                        LEO
                                    </span>
                                )}
                            </div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                            {/* Border Glow on Hover */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-green/30 rounded-2xl transition-colors duration-300 pointer-events-none" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-brand-cyan transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-gray-400 text-sm uppercase tracking-wider font-medium group-hover:text-white transition-colors">
                                    {member.role}
                                </p>
                                {/* Decorative Bar */}
                                <div className="w-12 h-1 bg-brand-green mt-4 rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 delay-100" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </main>
    );
}
