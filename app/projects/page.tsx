"use client";

import { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FolderOpen, Calendar, ArrowRight, Filter } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation"; // Use next/navigation for app router
import { cn } from "@/lib/utils";
import { InstagramEmbedWrapper } from "@/components/InstagramEmbedWrapper";

// Define a Project type for better type safety
interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    date: string; // e.g., "January 2023"
    month: string; // e.g., "January"
    stats: {
        beneficiaries: number;
    };
    instagramUrl?: string; // Optional Instagram URL
    // Add other fields as they exist in your Firestore documents
}

// Fetch function
async function getProjects() {
    const { getDocs, collection, query, orderBy } = await import("firebase/firestore");
    const { db } = await import("@/lib/firebase");

    // Attempt to fetch, handle errors gracefully (e.g. if build time no key)
    try {
        // Order by date if you have a sortable date field, e.g., a timestamp
        const q = query(collection(db, "projects")); // Add orderBy('timestampField', 'desc') if date format allows
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        })) as Project[]; // Cast to Project[]
    } catch (e) {
        console.error("Firebase fetch error", e);
        return [];
    }
}

// Import static data
import { projects } from "@/lib/projectsData";

function ProjectsContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    // Use static data directly
    const [allProjects] = useState<Project[]>(projects as unknown as Project[]);
    const [loading, setLoading] = useState(false); // No loading needed for static data
    const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

    // Categories and Months
    const allCategories = ["All", "Community Service", "Environmental", "Health", "Youth Development"];
    const allMonths = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Get selected category from URL search params
    const selectedCategoryFromUrl = searchParams.get("category") || "All";

    /* 
    // Firebase fetching disabled as requested
    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            const projectsData = await getProjects();
            setAllProjects(projectsData);
            setLoading(false);
        };
        fetchProjects();
    }, []);
    */

    const handleCategoryChange = (category: string) => {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        if (category === "All") {
            newSearchParams.delete("category");
        } else {
            newSearchParams.set("category", category);
        }
        router.push(`?${newSearchParams.toString()}`);
    };

    const filteredProjects = allProjects.filter((project) => {
        const monthMatch = selectedMonth ? project.month === selectedMonth : true;
        const categoryMatch = selectedCategoryFromUrl === "All" ? true : project.category === selectedCategoryFromUrl;
        return monthMatch && categoryMatch;
    });

    const cardVariants: Variants = {
        offscreen: (index: number) => ({
            x: index % 2 === 0 ? -100 : 100,
            opacity: 0
        }),
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    // Define gradients for categories
    const categoryGradients: Record<string, string> = {
        "Environment": "from-green-900 to-teal-800",
        "Health": "from-rose-900 to-pink-800",
        "Youth Development": "from-indigo-900 to-blue-800",
        "Community Service": "from-cyan-900 to-blue-800",
        "Default": "from-slate-900 to-gray-800"
    };

    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-20 px-4 md:px-8">
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-16 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan via-white to-brand-green mb-6"
                >
                    Our Impact
                </motion.h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Explore the initiatives we've undertaken to serve our community. Filter by time or category to find what matters to you.
                </p>
            </div>

            {/* Filters */}
            <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-brand-dark/50 rounded-2xl border border-white/5 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-brand-cyan font-semibold">
                    <Filter className="w-5 h-5" />
                    <span>Filter Projects</span>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                    {/* Category Filter */}
                    <div className="relative group">
                        <select
                            value={selectedCategoryFromUrl === "All" ? "" : selectedCategoryFromUrl}
                            onChange={(e) => handleCategoryChange(e.target.value || "All")}
                            className="appearance-none bg-black/60 border border-white/10 text-white px-4 py-2 pr-10 rounded-lg focus:outline-none focus:border-brand-green transition-colors cursor-pointer min-w-[150px]"
                        >
                            <option value="">All Categories</option>
                            {allCategories.filter(c => c !== "All").map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                            <FolderOpen className="w-4 h-4 text-gray-500" />
                        </div>
                    </div>

                    {/* Month Filter */}
                    <div className="relative group">
                        <select
                            value={selectedMonth || ""}
                            onChange={(e) => setSelectedMonth(e.target.value || null)}
                            className="appearance-none bg-black/60 border border-white/10 text-white px-4 py-2 pr-10 rounded-lg focus:outline-none focus:border-brand-purple transition-colors cursor-pointer min-w-[150px]"
                        >
                            <option value="">All Months</option>
                            {allMonths.map((month) => (
                                <option key={month} value={month}>{month}</option>
                            ))}
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                            <Calendar className="w-4 h-4 text-gray-500" />
                        </div>
                    </div>

                    {/* Clear Filters */}
                    {(selectedMonth || selectedCategoryFromUrl !== "All") && (
                        <button
                            onClick={() => { setSelectedMonth(null); handleCategoryChange("All"); }}
                            className="text-sm text-red-400 hover:text-red-300 underline"
                        >
                            Clear Filters
                        </button>
                    )}
                </div>
            </div>

            {/* Projects Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) => {
                            const gradientClass = categoryGradients[project.category] || categoryGradients["Default"];

                            return (
                                <motion.div
                                    key={project.id}
                                    layout
                                    custom={index}
                                    variants={cardVariants}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    viewport={{ once: false, amount: 0.3 }}
                                    whileHover={{ y: -5 }}
                                    className="h-full bg-brand-dark rounded-2xl border border-white/5 overflow-hidden hover:border-brand-cyan/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all group flex flex-col"
                                >
                                    {/* Media Area */}
                                    <div className="relative w-full">
                                        {project.instagramUrl ? (
                                            <div className="w-full flex justify-center bg-black py-4 border-b border-white/5">
                                                {/* Instagram Embed - Clickable area controlled by embed itself usually, but we wrap it to be safe or leave it interactive */}
                                                <InstagramEmbedWrapper url={project.instagramUrl} width={328} className="max-w-full overflow-hidden" />
                                            </div>
                                        ) : (
                                            <Link href={`/projects/${project.id}`} className="block w-full h-56 relative overflow-hidden">
                                                <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />

                                                {/* Category Badge */}
                                                <div className="absolute top-4 right-4 z-20 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/20">
                                                    {project.category}
                                                </div>

                                                {/* Center Icon/Text if needed, or just clean gradient as requested */}
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <FolderOpen className="w-12 h-12 text-white/20 group-hover:text-white/40 transition-colors" />
                                                </div>
                                            </Link>
                                        )}
                                    </div>

                                    {/* Content Area */}
                                    <Link href={`/projects/${project.id}`} className="flex-grow flex flex-col p-6">
                                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                                            <Calendar className="w-4 h-4" />
                                            <span>{project.date}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors line-clamp-1">{project.title}</h3>
                                        <p className="text-gray-400 text-sm line-clamp-3 mb-6 flex-grow">
                                            {project.description}
                                        </p>

                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                                            <div className="text-sm font-medium text-gray-300">
                                                <span className="text-brand-purple">{project.stats.beneficiaries}</span> Beneficiaries
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-cyan group-hover:text-black transition-colors">
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="col-span-full text-center py-20 text-gray-500"
                        >
                            <p className="text-xl">No projects found matching your criteria.</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default function ProjectsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-black text-white pt-32 text-center">Loading Projects...</div>}>
            <ProjectsContent />
        </Suspense>
    );
}
