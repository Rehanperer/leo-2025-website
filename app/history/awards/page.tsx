"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Trophy, Award, Star, Medal } from "lucide-react";

// Types
type AwardItem = {
    title: string;
    subtitle?: string; // e.g., "Winner", "1st Runners Up"
    recipient?: string; // e.g., "Leo Sanduni", "Steps of Hope"
};

type AwardCategory = {
    name: string;
    icon?: any;
    items: AwardItem[];
};

type YearAwards = {
    year: string;
    categories?: AwardCategory[]; // For 24/25 which has structure
    simpleAwards?: AwardItem[];   // For 23/24 & 22/23 which are flat lists
};

const awardsData: YearAwards[] = [
    {
        year: "24/25",
        categories: [
            {
                name: "DP Appreciation Award",
                icon: Star,
                items: [
                    { title: "Lion Anthony" },
                    { title: "Leo Rehan" },
                    { title: "Leo Sanduni" },
                    { title: "Leo Siron" },
                    { title: "Leo Sandev" },
                    { title: "Leo Ethan" },
                ]
            },
            {
                name: "Project Awards",
                icon: Trophy,
                items: [
                    { title: "Public Relations", subtitle: "2nd Runners Up", recipient: "Steps of Hope" },
                    { title: "Best Inter District Project", subtitle: "Winner", recipient: "Steps of Hope" },
                    { title: "Best Project with Outside Org", subtitle: "2nd Runners Up", recipient: "Happy Tails" },
                    { title: "Best Project for Drug Prevention", subtitle: "1st Runners Up", recipient: "Echos of Freedom" },
                ]
            },
            {
                name: "Individual Awards",
                icon: Medal,
                items: [
                    { title: "Most Outstanding Alpha IPCP", subtitle: "1st Runners Up", recipient: "Leo Sanduni" },
                    { title: "Most Outstanding Alpha CP", subtitle: "1st Runners Up", recipient: "Leo Rehan" },
                    { title: "Most Outstanding Alpha VP", subtitle: "Winner", recipient: "Leo Siron" },
                    { title: "Most Outstanding Alpha Secretary", subtitle: "1st Runners Up", recipient: "Leo Tharindi" },
                    { title: "Most Outstanding Alpha Treasurer", subtitle: "1st Runners Up", recipient: "Leo Skyler" },
                    { title: "Most Outstanding Digital Transformation Champion", subtitle: "1st Runners Up", recipient: "Leo Ethan" },
                ]
            },
            {
                name: "Club Awards",
                icon: Award,
                items: [
                    { title: "Leo Club with Highest Net Membership Growth" },
                    { title: "Most Outstanding School Leo Club", subtitle: "1st Runners Up" },
                ]
            }
        ]
    },
    {
        year: "23/24",
        simpleAwards: [
            { title: "Most Outstanding School Leo Club", subtitle: "1st Runners Up" },
            { title: "Best School Club President", subtitle: "Runners Up", recipient: "Leo Sanduni" },
            { title: "Top 10 Club Presidents of Leo District 306 A2", subtitle: "", recipient: "Leo Sanduni" },
        ]
    },
    {
        year: "22/23",
        simpleAwards: [
            { title: "Most Outstanding School Leo Club", subtitle: "Winner" },
            { title: "Most Outstanding New Leo Club", subtitle: "Winner" },
            { title: "Best School Club President", subtitle: "Winner", recipient: "Leo Rachel" },
        ]
    }
];

export default function ClubAwardsPage() {
    return (
        <main className="min-h-screen bg-[#101010] text-white">
            {/* Header Section */}
            <section className="bg-brand-dark py-24 relative overflow-hidden text-center">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-1/3 h-full bg-brand-green/5 blur-[120px] pointer-events-none" />

                <h1 className="text-5xl font-bold mb-4 relative z-10 text-white">
                    Club <span className="text-brand-cyan">Awards</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto px-4 relative z-10">
                    Celebrating our journey of excellence and recognition.
                </p>
            </section>

            {/* Breadcrumb */}
            <div className="bg-[#0a0a0a] py-4 border-b border-white/5 sticky top-[60px] z-40 backdrop-blur-md bg-opacity-80">
                <div className="container mx-auto px-4 flex items-center gap-2 text-sm text-gray-500">
                    <Link href="/" className="hover:text-brand-cyan transition-colors">Home</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-white hover:text-white/80 transition-colors pointer-events-none">History</span>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-brand-cyan font-medium">Club Awards</span>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 space-y-32">
                {awardsData.map((yearGroup) => (
                    <section key={yearGroup.year} className="relative">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-brand-dark-text inline-block relative px-8 py-2">
                                <span className="relative z-10 text-brand-cyan">Leostic Year of {yearGroup.year}</span>
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-brand-green rounded-full mt-2"></div>
                            </h2>
                        </div>

                        {/* Render Complex Categories for 24/25 */}
                        {yearGroup.categories && (
                            <div className="space-y-16">
                                {yearGroup.categories.map((category, catIndex) => (
                                    <div key={catIndex}>
                                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-2">
                                            {category.icon && <category.icon className="w-6 h-6 text-brand-green" />}
                                            {category.name}
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {category.items.map((award, index) => (
                                                <AwardCard key={index} award={award} index={index + catIndex} />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Render Simple List for 23/24 & 22/23 */}
                        {yearGroup.simpleAwards && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {yearGroup.simpleAwards.map((award, index) => (
                                    <AwardCard key={index} award={award} index={index} />
                                ))}
                            </div>
                        )}
                    </section>
                ))}
            </div>
        </main>
    );
}

function AwardCard({ award, index }: { award: AwardItem, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index % 3 * 0.1, duration: 0.5 }}
            className="bg-[#1e1e1e] p-8 rounded-xl border border-white/5 hover:border-brand-cyan/30 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[200px] shadow-lg group relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Trophy className="w-16 h-16 text-brand-cyan transform rotate-12" />
            </div>

            <h4 className="text-xl font-bold text-brand-cyan mb-3 group-hover:text-brand-green transition-colors">
                {award.title}
            </h4>

            {award.recipient && (
                <p className="text-white font-medium text-lg mb-1">
                    {award.recipient}
                </p>
            )}

            {award.subtitle && (
                <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 border border-white/10 mt-2">
                    {award.subtitle}
                </span>
            )}
        </motion.div>
    );
}
