"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", link: "#" },
    { name: "About", link: "#about" },
    { name: "Leaders", link: "#team" },
    { name: "Projects", link: "/projects" },
    { name: "Gallery", link: "/gallery" },
    { name: "Newsletter", link: "/newsletter" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                    isScrolled
                        ? "bg-black/70 backdrop-blur-md border-white/10 py-3"
                        : "bg-transparent py-5"
                )}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 relative">
                            {/* Simple Logo Placeholder/Icon if needed, or just text */}
                            <div className="absolute inset-0 bg-brand-green rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
                            <img src="/logo.png" alt="Logo" className="w-full h-full object-contain relative z-10" />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-white group-hover:text-brand-green transition-colors">
                            LEO<span className="text-brand-cyan">ETHOS</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.link}
                                className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-cyan transition-all group-hover:w-full" />
                            </Link>
                        ))}
                        <Link
                            href="#join"
                            className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/5 text-sm font-semibold text-brand-green hover:text-brand-cyan transition-all backdrop-blur-sm"
                        >
                            Join Us
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed inset-0 z-40 bg-black/95 pt-24 px-4 md:hidden"
                >
                    <div className="flex flex-col gap-6 text-center">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.link}
                                className="text-2xl font-bold text-white hover:text-brand-green transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </>
    );
}
