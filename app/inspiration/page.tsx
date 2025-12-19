"use client";

import { useRef } from "react";
import { NavBarWrapper } from "@/components/NavBarWrapper";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";

const timelineEvents = [
    {
        year: "2022/2023",
        title: "The Beginning",
        description: "The LEO Club of Ethos International College was founded in 2022 with a vision of empowering young leaders driven to serve their communities. Our founding members, led by the inaugural president, Rachel Desilva, shared a passion for making a meaningful impact through leadership, integrity, and proactive service. Their vision and enthusiasm laid the groundwork for a club that has already achieved notable milestones.",
        image: "/history-22-23.png"
    },
    {
        year: "2023/2024",
        title: "Growing Stronger",
        description: "Building upon our foundation, this year marked a period of rapid growth and increased community engagement. New projects were launched, and our membership base expanded, bringing fresh energy and ideas to our mission of service.",
        image: "/history-23-24.jpg"
    },
    {
        year: "2024/2025",
        title: "Expanding Horizons",
        description: "With established traditions and a strong community presence, we focused on impactful, large-scale projects. Our commitment to 'Service with Spice' and other initiatives showcased our ability to blend creativity with meaningful action.",
        image: "/history-24-25.png"
    },
    {
        year: "2025/2026",
        title: "The Future Awaits",
        description: "As we look to the future, we remain committed to our core values. The legacy of our founders inspires us to reach new heights, ensuring that every member has the opportunity to lead, serve, and contribute to lasting social change.",
        image: "/history-25-26.png"
    }
];

const values = [
    {
        title: "Leadership",
        description: "The fire within us to inspire, guide, and illuminate the path for others. We believe in empowering every member to take initiative.",
        color: "from-blue-500 to-cyan-400"
    },
    {
        title: "Service",
        description: "The light we carry into our community, igniting hope and compassion. We serve selflessly to make a tangible difference.",
        color: "from-emerald-500 to-green-400"
    },
    {
        title: "Community",
        description: "Connecting hearts and minds. Just like our logo's pattern, we believe in unity in diversity, working together for a common purpose.",
        color: "from-purple-500 to-pink-400"
    }
];

export default function InspirationPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <main ref={containerRef} className="min-h-screen bg-black text-white font-sans selection:bg-brand-cyan/30 overflow-hidden">
            <NavBarWrapper />

            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
                    <img
                        src="/history-22-23.png"
                        alt="Hero Background"
                        className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
                    />
                </div>

                <div className="relative z-20 text-center container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "out" }}
                    >
                        <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">
                            Source of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-green">Inspiration</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            "To serve selflessly, to lead fearlessly, to burn brightly in every act of kindness we do."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 md:py-32 relative">
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-cyan/0 via-brand-cyan/30 to-brand-cyan/0 -translate-x-1/2 hidden md:block" />

                <div className="container mx-auto px-4">
                    {timelineEvents.map((event, index) => (
                        <div key={event.year} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-24 md:mb-40 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Content */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="flex-1 text-left md:text-right"
                            >
                                <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}>
                                    <span className="text-brand-cyan font-bold text-6xl md:text-8xl opacity-20 mb-[-2rem] z-0">{event.year}</span>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">{event.title}</h2>
                                    <p className="text-gray-400 text-lg leading-relaxed max-w-lg">{event.description}</p>
                                </div>
                            </motion.div>

                            {/* Image Visual */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotate: index % 2 === 0 ? -5 : 5 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="flex-1 relative group"
                            >
                                <div className={`absolute inset-0 bg-brand-cyan/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl aspect-[4/3]">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 z-10" />
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-4 left-4 z-20">
                                        <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs border border-white/20">
                                            {event.year}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gradient-to-b from-black to-brand-dark/50">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Values That <span className="text-brand-cyan">Define Us</span></h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Central to the LEO Club of Ethos are the values of leadership, service, and community engagement.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ y: -10 }}
                                className="relative group p-1"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
                                <div className="relative bg-card-bg border border-white/10 p-8 rounded-2xl h-full flex flex-col items-center text-center hover:border-white/20 transition-colors">
                                    <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision / Founders Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 to-brand-cyan/10 opacity-20" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                                "Just as torches never dim when they share their flame, we grow brighter by uplifting others."
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-xl text-gray-400 italic"
                        >
                            — Our Promise
                        </motion.div>

                        <div className="h-px w-32 bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto" />

                        <p className="text-gray-300 text-lg leading-relaxed">
                            The founders, under the guidance of <strong>Rachel Desilva</strong>, aimed to create a space where youth could grow through service and make a difference in their community. Their vision remains a beacon for the club’s journey, inspiring both new and current members.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
