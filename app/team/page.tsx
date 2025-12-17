"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Define types
type TeamMember = {
    role: string;
    image: string;
    name: string;
    category: string;
};

// Fetch function
async function getTeam() {
    try {
        const { getDocs, collection } = await import("firebase/firestore");
        const { db } = await import("@/lib/firebase");
        const snapshot = await getDocs(collection(db, "team"));
        return snapshot.docs.map(doc => doc.data()) as TeamMember[];
    } catch (e) {
        return [];
    }
}

export default async function TeamPage() {
    const allMembers = await getTeam();

    // Group members by category or role if needed, or fallback to mock if empty
    // If DB is empty, empty arrays are returned. Admin 'seed' should fix this.
    const executiveOfficers = allMembers.filter(m => m.category === "Executive Officer");
    const directors = allMembers.filter(m => m.category === "Director");

    const cardVariants: Variants = {
        offscreen: {
            y: 30,
            opacity: 0
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.2,
                duration: 0.8
            }
        }
    };

    const SectionHeading = ({ title, subtitle }: { title: string, subtitle?: string }) => (
        <div className="text-center mb-16">
            <h2
                className="text-4xl font-bold text-white relative inline-block"
            >
                {title}
                <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-70" />
            </h2>
            {subtitle && (
                <p className="text-gray-400 mt-6 max-w-2xl mx-auto">{subtitle}</p>
            )}
        </div>
    );

    const MemberCard = ({ member, index }: { member: TeamMember, index: number }) => (
        <div
            className="group relative h-96 rounded-xl overflow-hidden shadow-2xl bg-gray-900 border border-white/5"
        >
            {/* Image Placeholder / Background */}
            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                ) : (
                    <span className="text-gray-600 font-bold text-3xl opacity-20 group-hover:scale-110 transition-transform duration-700">
                        PHOTO
                    </span>
                )}
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

            {/* Text Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">
                    {member.name || "Leo Member"}
                </h3>
                <p className="text-brand-cyan font-medium uppercase tracking-wider text-sm drop-shadow-sm">
                    {member.role}
                </p>

                {/* Decorative Line on Hover */}
                <div className="w-12 h-1 bg-brand-green mx-auto mt-4 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
            </div>
        </div>
    );

    return (
        <main className="min-h-screen bg-[#101010] text-white">
            {/* Hero Section */}
            <section className="relative py-32 bg-brand-dark overflow-hidden flex flex-col items-center justify-center text-center px-4">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-1/3 h-full bg-brand-green/5 blur-[120px] pointer-events-none" />

                <div className="relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-green">Leadership</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        The dedicated individuals driving our mission forward.
                    </p>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="bg-[#0a0a0a] py-4 border-b border-white/5 sticky top-[60px] z-40 backdrop-blur-md bg-opacity-80">
                <div className="container mx-auto px-4 flex items-center gap-2 text-sm text-gray-500">
                    <Link href="/" className="hover:text-brand-cyan transition-colors">Home</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-white font-medium">Team</span>
                </div>
            </div>

            <div className="container mx-auto px-4 py-24 space-y-32">
                {/* Executive Officers Section */}
                {executiveOfficers.length > 0 && (
                    <section>
                        <SectionHeading
                            title="Executive Officers"
                            subtitle="Leading the club with vision and integrity."
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-center">
                            {executiveOfficers.map((member, index) => (
                                <MemberCard key={index} member={member} index={index} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Directors Section */}
                {directors.length > 0 && (
                    <section>
                        <SectionHeading
                            title="Directors"
                            subtitle="Heads of our key operational committees."
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {directors.map((member, index) => (
                                <MemberCard key={index} member={member} index={index} />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </main>
    );
}
