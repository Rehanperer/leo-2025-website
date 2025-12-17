"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { newsletterIssues } from "@/lib/newsletterData";
import { NavBarWrapper } from "@/components/NavBarWrapper";
import { Footer } from "@/components/Footer";
// @ts-ignore
import { use } from "react";

export default function NewsletterReaderPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const issue = newsletterIssues.find((iss) => iss.slug === slug);

    if (!issue) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white selection:bg-brand-green selection:text-black font-sans flex flex-col">
            <NavBarWrapper />

            {/* Breadcrumb Area */}
            <div className="bg-brand-dark/50 border-b border-white/5 py-4 pt-32">
                <div className="container mx-auto px-4">
                    <div className="text-gray-500 text-sm font-medium flex items-center gap-2">
                        <Link href="/" className="hover:text-brand-green transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/newsletter" className="hover:text-brand-green transition-colors">Blog</Link>
                        <span>/</span>
                        <span className="text-white">{issue.title}</span>
                    </div>
                </div>
            </div>

            <section className="flex-grow py-12 bg-[#1a1a1a]"> {/* Slightly lighter bg for reading area */}
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto bg-black rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
                        {/* Title Bar */}
                        <div className="bg-gray-900 px-6 py-4 border-b border-gray-800 flex justify-between items-center">
                            <h1 className="text-xl font-bold text-white tracking-wide">{issue.title}</h1>
                            <div className="text-sm text-gray-400">{issue.month} {issue.year}</div>
                        </div>

                        {/* Iframe Container */}
                        <div className="relative w-full aspect-[16/9] bg-gray-900 flex justify-center items-center">
                            <iframe
                                src={issue.embedUrl}
                                className="w-full h-full border-0"
                                allowFullScreen={true}
                                scrolling="no"
                                seamless={true}
                                title={issue.title}
                            />
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <Link
                            href="/newsletter"
                            className="inline-flex items-center text-brand-cyan hover:text-white transition-colors font-medium"
                        >
                            ← Back to all newsletters
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
