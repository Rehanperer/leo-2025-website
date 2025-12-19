"use client";

import { projects } from "@/lib/projectsData";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Users, Heart, Banknote, ChevronLeft, ChevronRight } from "lucide-react";
import { InstagramEmbed } from "react-social-media-embed";
import Link from "next/link";

export function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [projectsData] = useState<any[]>(projects);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            nextProject();
        }, 8000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextProject = () => {
        if (projectsData.length === 0) return;
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % projectsData.length);
    };

    const prevProject = () => {
        if (projectsData.length === 0) return;
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
    };

    const goToProject = (index: number) => {
        if (projectsData.length === 0) return;
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const project = projectsData.length > 0 ? projectsData[currentIndex] : null;

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.95
        })
    };

    return (
        <section id="projects" className="py-24 bg-brand-dark overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between mb-16 max-w-5xl mx-auto"
                >
                    <h2 className="text-4xl font-bold text-white">
                        Our <span className="text-brand-cyan">Projects</span>
                    </h2>

                    {/* Navigation Buttons */}
                    <div className="flex gap-2">
                        <button
                            onClick={prevProject}
                            className="p-2 rounded-full border border-white/10 hover:bg-white/10 hover:text-brand-cyan transition-colors"
                            aria-label="Previous Project"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextProject}
                            className="p-2 rounded-full border border-white/10 hover:bg-white/10 hover:text-brand-cyan transition-colors"
                            aria-label="Next Project"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </motion.div>

                <div className="max-w-6xl mx-auto relative h-auto md:h-[600px]">
                    {projectsData.length > 0 && project ? (
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                className="w-full md:absolute inset-0 bg-card-bg rounded-3xl overflow-hidden border border-card-border shadow-2xl"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                                    {/* Left Side: Instagram Embed */}
                                    <div className="bg-black relative border-r border-card-border flex items-center justify-center p-6 overflow-hidden">
                                        <div className="absolute inset-0 bg-brand-cyan/5 pointer-events-none" />

                                        {/* Constrain embed size */}
                                        <div className="w-full max-w-[350px] max-h-[500px] overflow-y-auto rounded-xl shadow-lg border border-white/5 scrollbar-hide">
                                            <div className="pointer-events-none md:pointer-events-auto" key={project.id}>
                                                {hasMounted && project.instagramUrl ? (
                                                    <InstagramEmbed url={project.instagramUrl} width="100%" />
                                                ) : (
                                                    <div className="h-[400px] flex items-center justify-center text-gray-500">
                                                        Instagram Post Unavailable
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Side: Info */}
                                    <div className="p-8 lg:p-12 flex flex-col justify-center relative bg-[#0f1011]">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 blur-[64px] pointer-events-none" />

                                        <div className="flex items-center gap-2 mb-6 text-brand-cyan text-sm font-semibold uppercase tracking-wider">
                                            <Calendar className="w-4 h-4" /> {project.month}, {project.date.split('-')[0]}
                                        </div>

                                        <Link href={`/projects/${project.id}`} className="group block mb-6">
                                            <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                                                {project.title}
                                            </h3>
                                        </Link>

                                        <div className="mb-8">
                                            <h4 className="text-gray-500 text-xs font-bold mb-2 uppercase tracking-widest">Objective</h4>
                                            <p className="text-gray-300 leading-relaxed text-sm md:text-base line-clamp-3">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-3 mb-10">
                                            <span className="px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-semibold border border-brand-green/20">
                                                {project.category}
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                                                <div className="flex items-center gap-2 text-brand-purple mb-1">
                                                    <Users className="w-4 h-4" /> <span className="text-xs text-gray-400">Beneficiaries</span>
                                                </div>
                                                <div className="text-xl font-bold text-white">{project.stats?.beneficiaries || 0}</div>
                                            </div>

                                            <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                                                <div className="flex items-center gap-2 text-brand-green mb-1">
                                                    <Heart className="w-4 h-4" /> <span className="text-xs text-gray-400">Volunteers</span>
                                                </div>
                                                <div className="text-xl font-bold text-white">{project.stats?.volunteers || 0}</div>
                                            </div>

                                            <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                                                <div className="flex items-center gap-2 text-yellow-500 mb-1">
                                                    <Clock className="w-4 h-4" /> <span className="text-xs text-gray-400">Hours</span>
                                                </div>
                                                <div className="text-xl font-bold text-white">{project.stats?.hours || 0}</div>
                                            </div>

                                            <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                                                <div className="flex items-center gap-2 text-blue-500 mb-1">
                                                    <Banknote className="w-4 h-4" /> <span className="text-xs text-gray-400">Value (LKR)</span>
                                                </div>
                                                <div className="text-xl font-bold text-white">{project.stats?.value || 0}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center bg-gray-900/20 rounded-3xl border border-white/5 mx-4 md:mx-0">
                            <div className="w-8 h-8 border-2 border-brand-cyan border-t-transparent rounded-full animate-spin mb-4" />
                            <p className="text-gray-400">Loading projects...</p>
                            {/* Helpful hint for empty DB case or error */}
                            <p className="text-xs text-gray-600 mt-2">If this persists, the database might be empty or unavailable.</p>
                        </div>
                    )}
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center mt-8 gap-2">
                    {projectsData.map((_: any, idx: number) => (
                        <button
                            key={idx}
                            onClick={() => goToProject(idx)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-brand-cyan" : "bg-gray-600 hover:bg-gray-400"
                                }`}
                            aria-label={`Go to project ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
