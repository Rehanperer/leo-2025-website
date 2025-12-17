"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { newsletterIssues } from "@/lib/newsletterData";
import { NavBarWrapper } from "@/components/NavBarWrapper";
import { Footer } from "@/components/Footer";

export default function NewsletterListingPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-brand-green selection:text-black font-sans">
            <NavBarWrapper />

            {/* Header Section */}
            <section className="pt-40 pb-20 relative overflow-hidden bg-brand-cyan/5">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6 text-white"
                    >
                        Newsletter
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Welcome to the Official Blog of the LEO Club of EIC that highlights our members' achievements and impactful projects while spreading knowledge. These are links to virtual Magazines.
                    </motion.p>
                </div>
            </section>

            {/* Breadcrumb Area */}
            <div className="bg-brand-dark/50 border-y border-white/5 py-4">
                <div className="container mx-auto px-4">
                    <div className="text-gray-500 text-sm font-medium">
                        <Link href="/" className="hover:text-brand-green transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white">Blog</span>
                    </div>
                </div>
            </div>

            {/* Issues Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsletterIssues.map((issue, index) => (
                            <motion.div
                                key={issue.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group block"
                            >
                                <Link href={`/newsletter/${issue.slug}`} className="block h-full">
                                    {/* Cover Image Placeholder - mimicking the visual style */}
                                    <div className={`relative aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-gradient-to-br ${issue.coverParams.color} p-8 flex flex-col justify-center items-center shadow-2xl group-hover:shadow-brand-cyan/20 transition-all duration-300 transform group-hover:-translate-y-2`}>
                                        <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border border-white/20">
                                            Year of Excellence
                                        </div>
                                        <div className="absolute top-4 right-4 text-xs font-bold text-white/60 uppercase tracking-widest">
                                            {issue.month.toUpperCase()} '{issue.year.slice(2)}
                                        </div>

                                        <h2 className="text-5xl md:text-6xl font-black text-white text-center drop-shadow-xl z-10 italic tracking-tighter">
                                            OUT <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50" style={{ WebkitTextStroke: '1px white' }}>NOW</span>
                                        </h2>

                                        <div className="mt-4 text-2xl font-serif text-white/90 italic">
                                            {issue.title}
                                        </div>
                                    </div>

                                    {/* Text Info */}
                                    <div className="space-y-1">
                                        <div className="text-sm font-medium text-gray-400">Monthly Newsletter</div>
                                        <h3 className="text-2xl font-bold text-brand-cyan group-hover:text-white transition-colors">
                                            {issue.title.toUpperCase()} {issue.month.slice(0, 3).toUpperCase()} edition
                                        </h3>
                                        <div className="text-sm text-gray-500 pt-2">
                                            Written by the Editorial Panel • {issue.month} {issue.year}
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
