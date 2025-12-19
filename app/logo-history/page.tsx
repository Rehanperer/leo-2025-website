"use client";

import { useState } from "react";
import { NavBarWrapper } from "@/components/NavBarWrapper";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const logoDetails = [
    {
        id: "torches",
        title: "The Twin Torches",
        description: `The twin torches beside the Leo emblem symbolize the flames of service and leadership.
One torch represents Service — the light we carry into our community, igniting hope and compassion wherever we go.
The other torch stands for Leadership — the fire within us to inspire, guide, and illuminate the path for others.

Just as torches never dim when they share their flame, we grow brighter by uplifting others.
So, the torches are not just symbols of fire — they are our promise:
To serve selflessly,
To lead fearlessly,
to burn brightly in every act of kindness we do.`
    },
    {
        id: "design",
        title: "The Intricate Design",
        description: `The intricate design surrounding the Leo emblem represents unity and diversity — the many petals and patterns symbolize the different hearts, talents, and dreams that come together to form one strong Leo family.

Just like every line in the pattern connects to the center, every member — no matter their background or role — is connected through the same purpose: to serve, to grow, to lead.

Together, the pattern and stars portray the Leo spirit — grounded in unity, guided by purpose, and reaching for the infinite.`
    },
    {
        id: "stars",
        title: "The Stars",
        description: `The stars that orbit the emblem reflect the limitless potential of the club and its members. Each star is a reminder that every act of service, no matter how small, shines bright in someone’s darkness.`
    },
    {
        id: "background",
        title: "The Sky-Blue Background",
        description: `The sky-blue background represents peace, clarity, and vision — it mirrors the calm determination that guides every Leo. Blue is the colour of the sky and the ocean, endless and vast, reminding us that our service has no limits. It’s also the colour of trust and wisdom, symbolizing how we act not from impulse, but from heart and purpose.`
    }
];

export default function LogoHistoryPage() {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-brand-cyan/30">
            <NavBarWrapper />

            <div className="container mx-auto px-4 py-32 md:py-40">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        The Meaning of Our <span className="text-brand-cyan">Emblem</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Hover over the cards below to uncover the deeper meaning behind each part of our identity.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 min-h-[600px]">

                    {/* Logo Display Section (Visual Feedback Only) */}
                    <div className="relative w-full max-w-[600px] aspect-square mx-auto lg:mx-0 flex-shrink-0 group order-1 lg:order-1">
                        <div className="relative w-full h-full p-8 transition-transform duration-500 will-change-transform">
                            {/* Base Glow */}
                            <div className={`absolute inset-0 bg-brand-cyan/5 blur-[80px] rounded-full transition-opacity duration-500 ${activeSection ? 'opacity-20' : 'opacity-10'}`} />

                            {/* Main Logo Image */}
                            <img
                                src="/logo.png"
                                alt="Official Leo Club Logo"
                                className={`relative z-10 w-full h-full object-contain drop-shadow-2xl transition-all duration-700 ${activeSection ? 'scale-105 saturate-110' : 'scale-100'}`}
                            />

                            {/* Visual Highlights (Controlled by prop, no mouse events) */}
                            <div className="absolute inset-0 z-20 pointer-events-none">
                                {/* Torches Highlight */}
                                {activeSection === 'torches' && (
                                    <>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="absolute top-[20%] left-[5%] w-[15%] h-[60%] bg-brand-cyan/20 blur-xl rounded-full"
                                        />
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="absolute top-[20%] right-[5%] w-[15%] h-[60%] bg-brand-cyan/20 blur-xl rounded-full"
                                        />
                                    </>
                                )}

                                {/* Center/Design Highlight */}
                                {activeSection === 'design' && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="absolute top-[25%] left-[25%] w-[50%] h-[50%] bg-brand-cyan/20 blur-2xl rounded-full"
                                    />
                                )}

                                {/* Stars Highlight */}
                                {activeSection === 'stars' && (
                                    <motion.div
                                        initial={{ opacity: 0, rotate: -10 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        className="absolute inset-0 border-4 border-brand-cyan/30 rounded-full blur-md"
                                        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 20% 20%, 80% 20%, 80% 80%, 20% 80%, 20% 20%)" }}
                                    />
                                )}

                                {/* Background Highlight */}
                                {activeSection === 'background' && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="absolute inset-0 bg-brand-cyan/10 -z-10 rounded-full blur-3xl"
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Interactive List Section */}
                    <div className="flex-1 w-full max-w-xl text-left relative order-2 lg:order-2 space-y-4">
                        {logoDetails.map((detail) => (
                            <div
                                key={detail.id}
                                onMouseEnter={() => setActiveSection(detail.id)}
                                onMouseLeave={() => setActiveSection(null)}
                                className={`
                                    relative p-6 rounded-2xl border transition-all duration-300 cursor-default
                                    ${activeSection === detail.id
                                        ? "bg-white/10 border-brand-cyan/50 shadow-lg shadow-brand-cyan/10 scale-[1.02]"
                                        : "bg-white/5 border-white/10 hover:bg-white/10"
                                    }
                                `}
                            >
                                <h3 className={`text-xl font-bold transition-colors duration-300 ${activeSection === detail.id ? "text-brand-cyan" : "text-white"}`}>
                                    {detail.title}
                                </h3>

                                <div className="overflow-hidden">
                                    <AnimatePresence>
                                        <motion.div
                                            initial={false}
                                            animate={{
                                                height: activeSection === detail.id ? "auto" : 0,
                                                opacity: activeSection === detail.id ? 1 : 0,
                                                marginTop: activeSection === detail.id ? 16 : 0
                                            }}
                                            className="text-gray-300 text-sm leading-relaxed whitespace-pre-line"
                                        >
                                            {detail.description}
                                        </motion.div>
                                    </AnimatePresence>
                                    {/* Preview text when collapsed */}
                                    {activeSection !== detail.id && (
                                        <p className="text-gray-500 text-sm mt-2 line-clamp-1 italic">
                                            Hover to reveal the meaning...
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <Footer />
        </main>
    );
}
