"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Data Structure
type Leader = {
    role: string;
    name: string;
    image: string;
};

type YearGroup = {
    year: string;
    theme?: string;
    leaders: Leader[];
};

const historyData: YearGroup[] = [
    {
        year: "24/25",
        leaders: [
            { role: "President", name: "Rehan Perera", image: "/placeholder-user.jpg" },
            { role: "Vice President", name: "Siron Keshan", image: "/placeholder-user.jpg" },
            { role: "Secretary", name: "Tharindi Munaweera", image: "/placeholder-user.jpg" },
            { role: "Treasurer", name: "Skyler Downall", image: "/placeholder-user.jpg" },
        ]
    },
    {
        year: "23/24",
        theme: "Serve. Inspire. Grow",
        leaders: [
            { role: "President", name: "Sanduni Wanasinghe", image: "/placeholder-user.jpg" },
            { role: "Vice President", name: "Anupa Vitharana", image: "/placeholder-user.jpg" },
            { role: "Secretary", name: "Preksha Wijesuriya", image: "/placeholder-user.jpg" },
            { role: "Treasurer", name: "Dinethmi Hettiarachchi", image: "/placeholder-user.jpg" },
        ]
    },
    {
        year: "22/23",
        theme: "Prevail through unity, Serve with passion",
        leaders: [
            { role: "President", name: "Rachel Desilva", image: "/placeholder-user.jpg" },
            { role: "Vice President", name: "Nishadi Danthanarayana", image: "/placeholder-user.jpg" },
            { role: "Secretary", name: "Sanduni Wanasinghe", image: "/placeholder-user.jpg" },
            { role: "Treasurer", name: "Amiru Niduwara", image: "/placeholder-user.jpg" },
        ]
    }
];

export default function FormerLeadersPage() {
    return (
        <main className="min-h-screen bg-[#101010] text-white">
            {/* Header Section */}
            <section className="bg-brand-dark py-24 relative overflow-hidden text-center">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-1/3 h-full bg-brand-green/5 blur-[120px] pointer-events-none" />

                <h1 className="text-5xl font-bold mb-4 relative z-10 text-white">
                    Former <span className="text-brand-cyan">Leaders</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto px-4 relative z-10">
                    Honoring the dedicated executive committees that have led our club through the years.
                </p>
            </section>

            {/* Breadcrumb */}
            <div className="bg-[#0a0a0a] py-4 border-b border-white/5 sticky top-[60px] z-40 backdrop-blur-md bg-opacity-80">
                <div className="container mx-auto px-4 flex items-center gap-2 text-sm text-gray-500">
                    <Link href="/" className="hover:text-brand-cyan transition-colors">Home</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-white hover:text-white/80 transition-colors pointer-events-none">History</span>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-brand-cyan font-medium">Former Leaders</span>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 space-y-32">
                {historyData.map((yearGroup, index) => (
                    <section key={yearGroup.year} className="relative">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-brand-dark-text inline-block relative px-8 py-2">
                                <span className="relative z-10 text-brand-cyan">Leostic Year of {yearGroup.year}</span>
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-brand-green rounded-full mt-2"></div>
                            </h2>
                            {yearGroup.theme && (
                                <p className="text-gray-400 mt-6 italic">"{yearGroup.theme}"</p>
                            )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {yearGroup.leaders.map((leader, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg border border-white/5 group hover:border-brand-cyan/30 transition-all duration-300"
                                >
                                    {/* Image Container - Text Below Style */}
                                    <div className="h-64 bg-gray-800 relative overflow-hidden group-hover:bg-gray-750 transition-colors">
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                                            {/* Placeholder */}
                                            <div className="text-center">
                                                <div className="w-24 h-24 rounded-full border-2 border-gray-600 flex items-center justify-center mx-auto mb-2 opacity-30">
                                                    <span className="text-xs">IMG</span>
                                                </div>
                                                <span className="text-xs opacity-50 font-bold uppercase tracking-widest">Photo Not Available</span>
                                            </div>
                                        </div>
                                        {/* Actual image would simulate like lines below if we had real URLs: */}
                                        {/* <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" /> */}
                                    </div>

                                    <div className="p-6 text-center">
                                        <h3 className="text-xl font-bold text-brand-cyan mb-2 group-hover:text-white transition-colors">{leader.name}</h3>
                                        <p className="text-sm font-medium text-gray-400 italic">{leader.role}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </main>
    );
}
