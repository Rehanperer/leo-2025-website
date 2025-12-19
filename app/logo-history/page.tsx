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
to burn brightly in every act of kindness we do.`,
        position: "top-1/4 left-0 w-1/4 h-1/2", // Approximation for left torch
        positionRight: "top-1/4 right-0 w-1/4 h-1/2" // Approximation for right torch
    },
    {
        id: "design",
        title: "The Intricate Design",
        description: `The intricate design surrounding the Leo emblem represents unity and diversity — the many petals and patterns symbolize the different hearts, talents, and dreams that come together to form one strong Leo family.

Just like every line in the pattern connects to the center, every member — no matter their background or role — is connected through the same purpose: to serve, to grow, to lead.

Together, the pattern and stars portray the Leo spirit — grounded in unity, guided by purpose, and reaching for the infinite.`,
        position: "top-1/4 left-1/4 w-1/2 h-1/2" // Central area
    },
    {
        id: "stars",
        title: "The Stars",
        description: `The stars that orbit the emblem reflect the limitless potential of the club and its members. Each star is a reminder that every act of service, no matter how small, shines bright in someone’s darkness.`,
        position: "top-0 left-0 w-full h-1/4" // Top area stars
    },
    {
        id: "background",
        title: "The Sky-Blue Background",
        description: `The sky-blue background represents peace, clarity, and vision — it mirrors the calm determination that guides every Leo. Blue is the colour of the sky and the ocean, endless and vast, reminding us that our service has no limits. It’s also the colour of trust and wisdom, symbolizing how we act not from impulse, but from heart and purpose.`,
        position: "inset-0 -z-10" // Full background
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
                        Explore the symbolism behind our identity. Hover over different parts of the logo to uncover their deeper meaning.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-20 min-h-[600px]">

                    {/* Interactive Logo Section */}
                    <div className="relative w-full max-w-[700px] aspect-square mx-auto lg:mx-0 flex-shrink-0 group">
                        {/* Base Logo */}
                        <div className="relative w-full h-full p-8 transition-transform duration-500 will-change-transform">
                            {/* Glow Effect */}
                            <div className={`absolute inset-0 bg-brand-cyan/20 blur-[100px] rounded-full transition-opacity duration-500 ${activeSection ? 'opacity-40' : 'opacity-20'}`} />

                            <img
                                src="/logo.png"
                                alt="Official Leo Club Logo"
                                className={`relative z-10 w-full h-full object-contain drop-shadow-2xl transition-all duration-500 ${activeSection ? 'scale-105 saturate-110' : 'scale-100'}`}
                            />

                            {/* Interaction Zones */}
                            <div className="absolute inset-0 z-20">
                                {/* Torches (Left & Right) - High Priority */}
                                <div
                                    className="absolute top-[20%] left-[5%] w-[15%] h-[60%] cursor-help z-50"
                                    onMouseEnter={() => setActiveSection("torches")}
                                    onMouseLeave={() => setActiveSection(null)}
                                />
                                <div
                                    className="absolute top-[20%] right-[5%] w-[15%] h-[60%] cursor-help z-50"
                                    onMouseEnter={() => setActiveSection("torches")}
                                    onMouseLeave={() => setActiveSection(null)}
                                />

                                {/* Center/Design - High Priority */}
                                <div
                                    className="absolute top-[25%] left-[25%] w-[50%] h-[50%] rounded-full cursor-help z-50"
                                    onMouseEnter={() => setActiveSection("design")}
                                    onMouseLeave={() => setActiveSection(null)}
                                />

                                {/* Stars (Outer Ring approx) - Medium Priority */}
                                <div
                                    className="absolute inset-0 rounded-full cursor-help hover:ring-2 ring-brand-cyan/0 z-40"
                                    style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 20% 20%, 80% 20%, 80% 80%, 20% 80%, 20% 20%)" }}
                                    onMouseEnter={() => setActiveSection("stars")}
                                    onMouseLeave={() => setActiveSection(null)}
                                />

                                {/* Background (Corners/Edges) - Low Priority */}
                                <div
                                    className="absolute inset-0 -z-10 cursor-help z-10"
                                    onMouseEnter={() => setActiveSection("background")}
                                    onMouseLeave={() => setActiveSection(null)}
                                />
                            </div>
                        </div>

                        {/* Connection Lines (Visible on Hover) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-30 opacity-0 lg:opacity-100">
                            {/* Lines would be complex to coordinate perfectly without exact SVG paths, using simple conditional visibility instead */}
                        </svg>
                    </div>

                    {/* Exploded Details Panel */}
                    <div className="flex-1 w-full max-w-xl text-left relative min-h-[400px]">
                        <AnimatePresence mode="wait">
                            {activeSection ? (
                                <motion.div
                                    key={activeSection}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-6"
                                >
                                    <span className="inline-block px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan text-sm font-semibold tracking-wider uppercase mb-2 border border-brand-cyan/20">
                                        Selected Element
                                    </span>
                                    {logoDetails.map((detail) => (
                                        detail.id === activeSection && (
                                            <div key={detail.id}>
                                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                                    {detail.title}
                                                </h2>
                                                <div className="space-y-4 text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                                                    {detail.description}
                                                </div>
                                            </div>
                                        )
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col justify-center h-full text-gray-500 space-y-4"
                                >
                                    <div className="w-16 h-1 bg-brand-cyan/30 rounded-full mb-4" />
                                    <h3 className="text-2xl font-semibold text-gray-300">Discover the Story</h3>
                                    <p className="text-lg">
                                        The Leo Club emblem is more than just a logo. Every curve, star, and color tells a story of <span className="text-white">Leadership, Experience, and Opportunity</span>.
                                    </p>
                                    <p className="italic text-sm opacity-60">
                                        Hover over the Torches, the Center Design, the Stars, or the Background to begin.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
            <Footer />
        </main>
    );
}
